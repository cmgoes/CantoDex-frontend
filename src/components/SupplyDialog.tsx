import * as React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import { useTokenBalance, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import TabBar from './TabBar'
import TextField from './TextField'
import {
  MarketDialogContext,
  useMarketDialog
} from 'providers/MarketDialogProvider'
import { formatPercent } from 'utils'

interface IInfoProps {
  title: string
  desc: string | number
}

const Info: React.FC<IInfoProps> = ({ title, desc }) => (
  <Typography
    variant="body2"
    sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
  >
    <span>{title}</span>
    <span>{desc}</span>
  </Typography>
)

const SupplyPane = () => {
  const [supply, setSupply] = React.useState(0)
  const { account } = useEthers()
  const { market } = useMarketDialog()
  const balance = useTokenBalance(market.token.token_address, account)

  const onSupply = (e: any) => {
    setSupply(e.target.value)
  }

  return (
    <Stack>
      <Typography variant="caption">Supply Rates</Typography>
      <Info
        title="Supply APY"
        desc={formatPercent(market.token.supply_rate.value)}
      />
      <Info
        title="Distribution APY"
        desc={formatPercent(market.token.comp_supply_apy.value)}
      />
      <Typography variant="caption" sx={{ mt: 4 }}>
        Borrow Limit
      </Typography>
      <Info title="Borrow Limit" desc="$0.00 -> $0.00" />
      <Info title="Borrow Limit Used" desc="0" />
      <TextField
        value={supply}
        onChange={onSupply}
        name="supply"
        type="number"
        sx={{ my: 4 }}
      />
      <Button variant="contained">Enable</Button>

      <Typography variant="caption">
        Balance: {formatEther(balance || 0)}
      </Typography>
    </Stack>
  )
}

const WithdrawPane = () => {
  return (
    <Stack>
      <Typography variant="body2" sx={{ width: '100%' }}>
        Withdraw APY 2.64%
      </Typography>
      <Typography variant="body2" sx={{ width: '100%' }}>
        Distribution APY 4.72%
      </Typography>
      <Button variant="contained">Enable</Button>
    </Stack>
  )
}

export default function SupplyDialog() {
  const logoUrl = 'https://app.compound.finance/compound-components/assets'
  const { show, hide, market } = useMarketDialog()

  return (
    <div>
      <Dialog
        open={market.open && market.key === 'supply'}
        onClose={hide}
        maxWidth="xs"
      >
        <DialogTitle sx={{ display: 'flex' }}>
          {market.token.symbol && (
            <img
              src={`${logoUrl}/asset_${market.token.symbol.slice(1)}.svg`}
              width="32"
              height="32"
              style={{
                marginRight: '15px'
              }}
            />
          )}
          {market.token.underlying_name}
        </DialogTitle>
        <DialogContent>
          <Stack>
            <Typography variant="caption">
              To Supply or Repay {market.token.underlying_name} to the Compound
              Protocol, you need to enable it first.
            </Typography>
            <TabBar
              tabs={[
                {
                  label: 'Supply',
                  component: <SupplyPane />
                },
                {
                  label: 'Withdraw',
                  component: <WithdrawPane />
                }
              ]}
            />
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  )
}
