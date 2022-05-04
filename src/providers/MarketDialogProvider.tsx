import { AlertColor } from '@mui/material'
import { useContext, createContext, useState } from 'react'

export interface IMarketDialog {
  open: boolean
  key: string
  token: CToken
}

interface MarketDialogContextType {
  market: IMarketDialog
  setMarket: (value: IMarketDialog) => void
}

export const MarketDialogContext = createContext<
  MarketDialogContextType | undefined
>(undefined)

export const useMarketDialog = () => {
  const { market, setMarket } = useContext(MarketDialogContext)!

  const show = (value: Omit<IMarketDialog, 'open'>) => {
    setMarket({
      ...value,
      open: true
    })
  }

  const hide = () => {
    setMarket({
      ...market,
      open: false
    })
  }

  return {
    market,
    setMarket,
    show,
    hide
  }
}

interface IMarketDialogProviderProps {
  children: React.ReactNode
}

const MarketProvider = ({ children }: IMarketDialogProviderProps) => {
  const [market, setMarket] = useState({
    open: false,
    key: '',
    token: {} as CToken
  })

  return (
    <MarketDialogContext.Provider value={{ market, setMarket }}>
      {children}
    </MarketDialogContext.Provider>
  )
}

export default MarketProvider
