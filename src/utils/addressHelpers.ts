import addresses from 'constants/contracts'
import { DEFAULT_NETWORK } from '../constants'

export const getCompAddress = () => {
  return addresses[DEFAULT_NETWORK].COMP
}

export const getPairCompEthAddress = () => {
  return addresses[DEFAULT_NETWORK].Pair_COMP_ETH
}

export const getPairEthUsdcAddress = () => {
  return addresses[DEFAULT_NETWORK].Pair_ETH_USDC
}

export const getComptrollerAddress = () => {
  return addresses[DEFAULT_NETWORK].Comptroller
}
