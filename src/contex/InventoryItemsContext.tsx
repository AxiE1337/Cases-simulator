import { createContext, useState, FC } from 'react'
import { casesData } from '../data'

let localStorageBalance: any = localStorage.getItem('balance')
localStorageBalance = JSON.parse(localStorageBalance)
let localStorageData: any = localStorage.getItem('items')
localStorageData = JSON.parse(localStorageData)

interface IInventory {
  items: any
  balance: number
  addItem?: (item: any) => void
  deleteItem?: (itemId: any, itemPrice: any) => void
  reset?: () => void
}
const initialState = {
  items: localStorageData || [],
  balance: localStorageBalance || 5000,
}

export const InventoryItemsContext = createContext<IInventory>(initialState)

export const InventoryItemsProvider: FC<any> = ({ children }) => {
  const [items, setItems] = useState<any>(initialState.items)
  const [balance, setBalance] = useState<number>(initialState.balance)
  localStorage.setItem('items', JSON.stringify(items))
  localStorage.setItem('balance', JSON.stringify(balance))

  const addItem = (item: any) => {
    setItems([...items, item])
    setBalance(balance - casesData.weaponCaseData.casePrice)
  }
  const deleteItem = (itemId: any, itemPrice: any) => {
    setItems(items.filter((item: any) => item.id !== itemId))
    setBalance(balance + itemPrice)
  }
  const reset = () => {
    setItems([])
    setBalance(5000)
  }
  return (
    <InventoryItemsContext.Provider
      value={{ balance, items, addItem, deleteItem, reset }}
    >
      {children}
    </InventoryItemsContext.Provider>
  )
}
