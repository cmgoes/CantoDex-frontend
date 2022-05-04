import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SnackProvider from 'providers/SnackProvider'
import MarketDialogProvider from 'providers/MarketDialogProvider'
import { DAppProvider } from '@usedapp/core'

declare module '@mui/material/styles' {
  interface Palette {
    accent: string
    normal: string
  }
  interface PaletteOptions {
    accent: string
    normal: string
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Archivo',
    h1: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: 700
    },
    h2: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700
    },
    h3: {
      fontSize: '24px',
      lineHeight: '40px',
      fontWeight: 700
    },
    h5: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400
    },
    body1: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 600
    },
    body2: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 400,
      color: '#676E85'
    },
    caption: {
      fontSize: '14px',
      lineHeight: '24px'
    }
  },
  palette: {
    primary: {
      main: '#015D67'
    },
    secondary: {
      main: '#00ACB1'
    },
    error: {
      main: '#DF3F66'
    },
    accent: '#1B1D21',
    normal: '#676E85',
    grey: {
      100: '#F7F7F7',
      200: '#E5E5E5',
      300: '#C4C4C4',
      500: '#676E85',
      700: '#161E2E'
    },
    divider: '#9295A5'
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body2: 'span'
        }
      }
    }
  }
})

interface IProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: IProviderProps) => (
  <ThemeProvider theme={theme}>
    <DAppProvider config={{}}>
      <HelmetProvider context={{}}>
        <MarketDialogProvider>
          <SnackProvider>{children}</SnackProvider>
        </MarketDialogProvider>
      </HelmetProvider>
    </DAppProvider>
  </ThemeProvider>
)

export default Provider
