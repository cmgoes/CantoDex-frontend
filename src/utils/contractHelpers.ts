import { ethers } from 'ethers'
import MainnetABI from 'abis/mainnet-abi.json'

const provider = ethers.getDefaultProvider()

export function useERC20Contract(address: string) {
  return new ethers.Contract(address, MainnetABI.COMP, provider)
}