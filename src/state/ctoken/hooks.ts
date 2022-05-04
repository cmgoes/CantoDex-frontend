import { useCallback } from 'react'
import { ethers } from 'ethers'
import { useAppDispatch } from 'state/hooks'
import {
  getCompAddress,
  getPairCompEthAddress,
  getPairEthUsdcAddress,
  getComptrollerAddress
} from 'utils/addressHelpers'
import MainnetABI from 'abis/mainnet-abi.json'
import MainnetData from 'constants/mainnet.json'
import { addCTokenData } from './reducer'

const provider = ethers.getDefaultProvider()

const cTokenLists = [
  'cAAVE',
  'cBAT',
  'cCOMP',
  'cDAI',
  'cETH',
  'cFEI',
  'cLINK',
  'cMKR',
  'cREP',
  'cSAI',
  'cSUSHI',
  'cTUSD',
  'cUNI',
  'cUSDC',
  'cUSDP',
  'cUSDT',
  'cWBTC',
  'cWBTC2',
  'cYFI',
  'cZRX'
]

export function useCTokenData() {
  // const dispatch = useAppDispatch()
  const daysPerYear = 365
  const blocksPerDay = 6570; // 13.15 seconds per block

  cTokenLists.map( async (token: string) => {
    // @ts-ignore: Unreachable code error
    const cTokenContract = new ethers.Contract(MainnetData.cTokens[token].address, MainnetABI[token], provider); 
    const supplyRatePerBlock = await cTokenContract.supplyRatePerBlock();
    const borrowRatePerBlock = await cTokenContract.borrowRatePerBlock();
    // @ts-ignore: Unreachable code error
    const supplyApy = (((Math.pow((supplyRatePerBlock / MainnetData.cTokens[token].initial_exchange_rate_mantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
    // @ts-ignore: Unreachable code error
    const borrowApy = (((Math.pow((borrowRatePerBlock / MainnetData.cTokens[token].initial_exchange_rate_mantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
    // console.log(`Supply APY for ${MainnetData.cTokens[token].symbol} ${supplyApy} %`);
    // console.log(`Borrow APY for ${MainnetData.cTokens[token].symbol} ${borrowApy} %`);
  })
}

// export function useCTokenData(): () => void {
//   const dispatch = useAppDispatch()
//   // const comptrollerContract = new ethers.Contract(
//   //   getComptrollerAddress(),
//   //   MainnetABI.Comptroller,
//   //   provider
//   // )
//   // return useCallback(
//   //   async () => {
//   //     // dispatch(
//   //     //   addCTokenData({

//   //     //   })
//   //     // )
//   //   },
//   //   [dispatch]
//   // )
// }
