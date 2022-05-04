import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'

export default function SupplyDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Supply
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>Basic Attention Token</DialogTitle>
        <DialogContent>
          <Stack>
            <Typography variant="caption">
              To Supply or Repay Aave Token to the Compound Protocol, you need
              to enable it first.
            </Typography>
            <Typography variant="body2" sx={{ width: '100%' }}>
              Supply APY 2.64%
            </Typography>
            <Typography variant="body2" sx={{ width: '100%' }}>
              Distribution APY 4.72%
            </Typography>
            <Button variant="contained">Enable</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  )
}