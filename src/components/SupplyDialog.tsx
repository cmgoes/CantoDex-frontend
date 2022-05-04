import * as React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import TabBar from './TabBar'
import TextField from './TextField'
import { useSupply } from 'providers/SupplyProvider'

const SupplyPane = () => {
  const [supply, setSupply] = React.useState(0)
  const { account } = useEthers()
  const balance = useEtherBalance(account)

  const onSupply = (e: any) => {
    setSupply(e.target.value)
  }

  return (
    <Stack>
      <Typography variant="body2">Supply Rates</Typography>
      <Typography variant="body2" sx={{ width: '100%' }}>
        Supply APY 2.64%
      </Typography>
      <Typography variant="body2" sx={{ width: '100%' }}>
        Distribution APY 4.72%
      </Typography>
      <Typography variant="body2">Borrow Limit</Typography>
      <Typography variant="body2" sx={{ width: '100%' }}>
        Borrow Limit 4.72%
      </Typography>
      <Typography variant="body2" sx={{ width: '100%' }}>
        Borrow Limit Used 4.72%
      </Typography>
      <TextField
        value={supply}
        onChange={onSupply}
        name="supply"
        type="number"
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
  const { show, hide, supply } = useSupply()

  return (
    <div>
      <Dialog open={supply.open} onClose={hide} maxWidth="xs">
        <DialogTitle>Basic Attention Token</DialogTitle>
        <DialogContent>
          <Stack>
            <Typography variant="caption">
              To Supply or Repay Aave Token to the Compound Protocol, you need
              to enable it first.
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
