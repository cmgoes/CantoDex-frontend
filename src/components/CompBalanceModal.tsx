import React from 'react'
import Compound from '@compound-finance/compound-js'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import { useAppSelector } from 'state/hooks'
import CompImage from 'assets/images/asset_COMP.svg'
import 'scss/components/compBalanceModal.scss'

const CompBalanceModal = ({
  open,
  onClose
}: {
  open: boolean
  onClose: () => void
}) => {
  const compData = useAppSelector((state) => state.comp)

  // @ts-ignore: Unreachable code error
  const compound = new Compound()
  const claim = async () => {
    try {
      const trx = await compound.claimComp()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Box className="comp-modal">
          <Box className="comp-modal-header">
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center'
              }}
            >
              COMP Balance
            </Typography>
            <IconButton
              sx={{
                position: 'absolute',
                top: '18px',
                right: '20px'
              }}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="comp-modal-body">
            <Box component="img" src={CompImage} className="icon-comp" />
            <Typography
              sx={{
                margin: '1rem 0 0 0',
                color: '#070A0E',
                fontWeight: '600',
                fontSize: '1.3125rem',
                textAlign: 'center'
              }}
            >
              {compData.totalComp?.toFixed(8)}
            </Typography>
            <Typography
              sx={{
                color: '#AAB8C1',
                fontSize: '0.875rem',
                fontWeight: 'normal',
                lineHeight: '1',
                mt: '0.625rem',
                textAlign: 'center'
              }}
            >
              ${compData.totalValue?.toFixed(2)}
            </Typography>
            <Box className="comp-modal-body-row">
              <Box className="comp-modal-body-row-row">
                <Typography className="comp-modal-body-row-row-label">
                  Wallet Balance
                </Typography>
                <Typography className="comp-modal-body-row-row-value">
                  {compData.compBalance?.toFixed(4)}
                </Typography>
              </Box>
              <Box className="comp-modal-body-row-row">
                <Typography className="comp-modal-body-row-row-label">
                  Unclaimed Balance
                </Typography>
                <Typography className="comp-modal-body-row-row-value">
                  {compData.compEarned?.toFixed(4)}
                </Typography>
              </Box>
              <Box className="comp-modal-body-row-row">
                <Typography className="comp-modal-body-row-row-label">
                  Price
                </Typography>
                <Typography className="comp-modal-body-row-row-value">
                  ${compData.compPrice?.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              disabled={compData.compEarned === 0 ? true : false}
              fullWidth
              onClick={claim}
              sx={{
                backgroundColor: '#00D395',
                color: '#FFFFFF',
                borderColor: '#00D395',
                marginTop: '1rem',
                boxShadow: '0px 8px 16px rgb(17 51 85 / 8%)',
                borderRadius: '3px',
                borderWidth: '1px',
                borderStyle: 'solid',
                padding: '1.2rem 1.6rem',
                fontSize: '12px',
                fontWeight: '700',

                '&:disabled': {
                  background: '#CCD6DD',
                  borderColor: '#CCD6DD',
                  color: '#FFFFFF'
                }
              }}
            >
              Nothing to claim
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default CompBalanceModal
