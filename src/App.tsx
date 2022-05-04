import PageLayout from 'layout/PageLayout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SupplyDialog from 'components/SupplyDialog'
import 'styles/global.css'

const App = () => {
  return (
    <PageLayout>
      <Box sx={{ my: 10 }}>
        <SupplyDialog />
      </Box>
    </PageLayout>
  )
}

export default App
