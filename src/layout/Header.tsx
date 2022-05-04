import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Theme, useTheme } from '@mui/material/styles'
import CompBalanceModal from 'components/CompBalanceModal'
import useMetaMask from 'hooks/useMetaMask'
import { useAppSelector } from 'state/hooks'
import 'scss/components/header.scss'
import CompImage from 'assets/images/asset_COMP.svg'

const Header = () => {
  const theme = useTheme<Theme>()
  // const [anchorElNav, setAnchorElNav] =
  //   useState<HTMLButtonElement | null>(null)
  const { activateBrowserWallet, account, deactivate } = useMetaMask()
  const [compModalOpen, setCompModalOpen] = useState<boolean>(false)

  const compData = useAppSelector((state) => state.comp)

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorElNav(event.currentTarget)
  // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }

  const openClaimCompModal = () => {
    if (compData.loading) {
      return
    }
    setCompModalOpen(true)
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#070a0e',
          boxShadow: 'none'
          // boxShadow:
          //   '0px 2px 10px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 5%), 0px 1px 10px 0px rgb(0 0 0 / 1%)',
          // filter: 'drop-shadow(0px 4px 20px #ECEFF3)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              noWrap
              sx={{
                mr: 2,
                color: theme.palette.primary.main
              }}
            >
              CanTo DEX
            </Typography>
            <Box
              sx={{
                flexGrow: 0,
                marginLeft: 'auto',
                display: 'flex'
              }}
            >
              {account ? (
                <Button
                  variant="contained"
                  className="header-button"
                  onClick={openClaimCompModal}
                  sx={{ mr: '22px' }}
                >
                  {compData.loading ? (
                    <>-</>
                  ) : (
                    <>
                      {compData.compBalance?.toFixed(4)}
                      <img src={CompImage} alt="" className="icon icon--COMP" />
                    </>
                  )}
                </Button>
              ) : null}
              {account ? (
                <Button
                  variant="contained"
                  className="header-button"
                  onClick={deactivate}
                  sx={{ mr: '22px' }}
                >
                  {account.slice(0, 4)}...{account.slice(-4)}
                </Button>
              ) : (
                <Button variant="contained" onClick={activateBrowserWallet}>
                  Connect To Wallet
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <CompBalanceModal
        open={compModalOpen}
        onClose={() => setCompModalOpen(false)}
      />
    </>
  )
}
export default Header
