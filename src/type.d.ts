interface CToken {
  borrow_cap: { value: string }
  borrow_rate: { value: string }
  cash: { value: string }
  collateral_factor: { value: string }
  comp_borrow_apy: { value: string }
  comp_supply_apy: { value: string }
  exchange_rate: { value: string }
  interest_rate_model_address: string
  name: string
  number_of_borrowers: number
  number_of_suppliers: number
  reserve_factor: { value: string }
  reserves: { value: string }
  supply_rate: { value: string }
  symbol: string
  token_address: string
  total_borrows: { value: string }
  total_supply: { value: string }
  underlying_address: string
  underlying_name: string
  underlying_price: { value: string }
}
