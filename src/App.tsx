import PageLayout from 'layout/PageLayout'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import SupplyDialog from 'components/SupplyDialog'
import { useMarketDialog } from 'providers/MarketDialogProvider'
import 'styles/global.css'
import BorrowMarkets from 'components/BorrowMarkets'
import SupplyMarkets from 'components/SupplyMarkets'

const App = () => {
  const { show } = useMarketDialog()

  const onOpen = () => {
    show({ token: {} as CToken })
  }

  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SupplyMarkets />
        </Grid>
        <Grid item xs={6}>
          <BorrowMarkets />
        </Grid>
      </Grid>
      <Box sx={{ my: 10 }}>
        <SupplyDialog />
      </Box>
      <Button variant="contained" onClick={onOpen}>
        Supply
      </Button>
    </PageLayout>
  )
}

export default App
