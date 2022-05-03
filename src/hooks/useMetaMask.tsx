import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const useMetaMask = () => {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)

  return {
    activateBrowserWallet,
    account,
    etherBalance
  }
}

export default useMetaMask
