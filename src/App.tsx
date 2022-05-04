import PageLayout from 'layout/PageLayout'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SupplyDialog from 'components/SupplyDialog'
import { useSupply } from 'providers/SupplyProvider'
import 'styles/global.css'
import BorrowMarkets from 'components/BorrowMarkets'
import SupplyMarkets from 'components/SupplyMarkets'

const App = () => {
  const { show } = useSupply()

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
        <Button variant="contained" onClick={show}>
          Supply
        </Button>
      </Box>
    </PageLayout>
  )
}

export default App
