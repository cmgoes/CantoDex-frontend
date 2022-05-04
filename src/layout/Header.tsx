import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Theme, useTheme } from '@mui/material/styles'
import useMetaMask from 'hooks/useMetaMask'

const Header = () => {
  const theme = useTheme<Theme>()
  const [anchorElNav, setAnchorElNav] =
    React.useState<HTMLButtonElement | null>(null)
  const { activateBrowserWallet, account } = useMetaMask()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        boxShadow:
          '0px 2px 10px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 5%), 0px 1px 10px 0px rgb(0 0 0 / 1%)',
        filter: 'drop-shadow(0px 4px 20px #ECEFF3)'
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
              marginLeft: 'auto'
            }}
          >
            {account ? (
              <Typography variant="caption" color="accent">
                {account}
              </Typography>
            ) : (
              <Button variant="contained" onClick={activateBrowserWallet}>
                Connect To Wallet
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
