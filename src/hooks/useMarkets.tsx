import Compound from '@compound-finance/compound-js'
import { useEffect, useState } from 'react'
import _ from 'lodash'
// TODO: fix
const compAddress = '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B'

const useMarkets = () => {
  const [cTokens, setCTokens] = useState<CToken[]>([])
  const getAllMarkets = async () => {
    const markets: string[] = await Compound.eth.read(
      compAddress,
      'function getAllMarkets() returns (address[])'
    )
    const data = await Compound.api.cToken({
      addresses: markets
    })
    const sortedTokens: CToken[] = _.orderBy(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data?.cToken,
      ['underlying_name'],
      ['asc']
    )
    // const underlyingTokenAddresses = sortedTokens.map(
    //   (token) => token.underlying_address
    // )
    // console.log(underlyingTokenAddresses)
    // const underlyingTokens = await Promise.all(
    //   underlyingTokenAddresses.map(
    //     (address) =>
    //       address &&
    //       Compound.eth.read(address, 'function balanceOf() returns (uint)')
    //   )
    // )
    // console.log('------------------', underlyingTokens)
    setCTokens(sortedTokens)
  }

  useEffect(() => {
    getAllMarkets()
  }, [])

  return {
    getAllMarkets,
    cTokens
  }
}

export default useMarkets
