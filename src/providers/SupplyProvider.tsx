import { AlertColor } from '@mui/material'
import { useContext, createContext, useState } from 'react'

export interface ISupply {
  open: boolean
}

interface SupplyContextType {
  supply: ISupply
  setSupply: (value: ISupply) => void
}

export const SupplyContext = createContext<SupplyContextType | undefined>(
  undefined
)

export const useSupply = () => {
  const { supply, setSupply } = useContext(SupplyContext)!

  const show = (value: Omit<ISupply, 'open'>) => {
    setSupply({
      ...value,
      open: true
    })
  }

  const hide = () => {
    setSupply({
      ...supply,
      open: false
    })
  }

  return {
    supply,
    setSupply,
    show,
    hide
  }
}

interface ISupplyProviderProps {
  children: React.ReactNode
}

const SupplyProvider = ({ children }: ISupplyProviderProps) => {
  const [supply, setSupply] = useState({
    open: false
  })

  return (
    <SupplyContext.Provider value={{ supply, setSupply }}>
      {children}
    </SupplyContext.Provider>
  )
}

export default SupplyProvider
