import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Switch from '@mui/material/Switch'
import useMarkets from 'hooks/useMarkets'
import { formatPercent } from 'utils'
import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

const logoUrl = 'https://app.compound.finance/compound-components/assets'
const SupplyMarkets = () => {
  const { cTokens } = useMarkets()

  return (
    <Box>
      <Typography>Supply Markets</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell align="right">APY</TableCell>
              <TableCell align="right">Wallet</TableCell>
              <TableCell align="right">Collateral</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cTokens?.map((token) => (
              <TableRow
                hover
                key={token.token_address}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Stack spacing={2} direction="row">
                    <img
                      src={`${logoUrl}/asset_${token.symbol.slice(1)}.svg`}
                      width="32"
                      height="32"
                    />
                    <span>{token.underlying_name}</span>
                  </Stack>
                </TableCell>
                <TableCell align="right">
                  {formatPercent(token.borrow_rate.value)}
                </TableCell>
                <TableCell align="right">0 {token.symbol.slice(1)}</TableCell>
                <TableCell align="right">
                  <Switch />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default SupplyMarkets
