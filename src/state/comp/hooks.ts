import { useCallback } from 'react'
import Compound from '@compound-finance/compound-js'
import { ethers } from 'ethers'
import { useAppDispatch } from 'state/hooks'
import { useERC20Contract } from 'utils/contractHelpers'
import {
  getCompAddress,
  getPairCompEthAddress,
  getPairEthUsdcAddress,
  getComptrollerAddress
} from 'utils/addressHelpers'
import MainnetABI from 'abis/mainnet-abi.json'
import { addUserCompData, changeStatus } from './reducer'

const provider = ethers.getDefaultProvider()

export function useAddCompData(): (account: string) => void {
  const dispatch = useAppDispatch()
  const compContract = useERC20Contract(getCompAddress())
  const wethContract = useERC20Contract(
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  )
  const usdcContract = useERC20Contract(
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  )

  const comptrollerContract = new ethers.Contract(
    getComptrollerAddress(),
    MainnetABI.Comptroller,
    provider
  )

  return useCallback(
    async (account) => {
      const userCompBalance =
        (await Compound.comp.getCompBalance(account)) / 10 ** 18

      dispatch(changeStatus(true))
      const priceOfETH =
        (await usdcContract.balanceOf(getPairEthUsdcAddress())) /
        10 ** 6 /
        ((await wethContract.balanceOf(getPairEthUsdcAddress())) / 10 ** 18)
      const priceOfCompInETH =
        (await wethContract.balanceOf(getPairCompEthAddress())) /
        10 ** 18 /
        ((await compContract.balanceOf(getPairCompEthAddress())) / 10 ** 18)
      const compAccrued =
        (await Compound.comp.getCompAccrued(account)) / 10 ** 18
      const compPrice = priceOfCompInETH * priceOfETH

      const totalComp = compAccrued + userCompBalance
      const totalValue = totalComp * compPrice
      dispatch(
        addUserCompData({
          compEarned: compAccrued,
          compBalance: userCompBalance,
          totalComp,
          totalValue,
          compPrice
        })
      )
    },
    [dispatch]
  )
}
