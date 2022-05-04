import { useEffect } from 'react'
import PageLayout from 'layout/PageLayout'
import Grid from '@mui/material/Grid'
import SupplyDialog from 'components/SupplyDialog'
import useMetaMask from 'hooks/useMetaMask'
import { useAddCompData } from 'state/comp/hooks'
import { useCTokenData } from 'state/ctoken/hooks'
import 'styles/global.css'
import BorrowMarkets from 'components/BorrowMarkets'
import SupplyMarkets from 'components/SupplyMarkets'

const App = () => {
  const { account } = useMetaMask()

  const getUserCompData = useAddCompData()

  useEffect(() => {
    useCTokenData()
    if (account) {
      getUserCompData(account)
    }
  }, [account])

  return (
    <PageLayout>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={6}>
          <SupplyMarkets />
        </Grid>
        <Grid item xs={6}>
          <BorrowMarkets />
        </Grid>
      </Grid>
      <SupplyDialog />
    </PageLayout>
  )
}

export default App
