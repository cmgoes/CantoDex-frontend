import PageLayout from 'layout/PageLayout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SupplyDialog from 'components/SupplyDialog'
import { useSupply } from 'providers/SupplyProvider'
import 'styles/global.css'

const App = () => {
  const { show } = useSupply()

  return (
    <PageLayout>
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
