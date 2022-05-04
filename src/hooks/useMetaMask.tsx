import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const useMetaMask = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)

  return {
    activateBrowserWallet,
    account,
    etherBalance,
    deactivate
  }
}

export default useMetaMask
