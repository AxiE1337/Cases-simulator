import { createContext, useState, FC } from 'react'

let localStorageBalance: any = localStorage.getItem('balance')
localStorageBalance = JSON.parse(localStorageBalance)
let localStorageData: any = localStorage.getItem('items')
localStorageData = JSON.parse(localStorageData)
let localStorageBonusData: any = localStorage.getItem('bonus')
localStorageBonusData = JSON.parse(localStorageBonusData)

interface IInventory {
  items: any
  balance: number
  bonusData: any
  addItem?: (item: any, casePrice: number) => void
  deleteItem?: (itemId: any, itemPrice: any) => void
  reset?: () => void
  addBonus?: (bonusData: any) => void
  setBalance?: any
}
const initialState = {
  items: localStorageData || [],
  balance: localStorageBalance || 5000,
  bonusData: localStorageBonusData || {},
}

export const InventoryItemsContext = createContext<IInventory>(initialState)

export const InventoryItemsProvider: FC<any> = ({ children }) => {
  const [items, setItems] = useState<any>(initialState.items)
  const [balance, setBalance] = useState<number>(initialState.balance)
  const [bonusData, setBonusData] = useState<any>(initialState.bonusData)
  localStorage.setItem('items', JSON.stringify(items))
  localStorage.setItem('balance', JSON.stringify(balance))
  localStorage.setItem('bonus', JSON.stringify(bonusData))

  const addItem = (item: any, casePrice: number) => {
    setItems([...items, item])
    setBalance(balance - casePrice)
    if (bonusData.bonusUses > 1) {
      let uses = bonusData.bonusUses - 1
      setBonusData({ ...bonusData, bonusUses: uses })
    } else {
      setBonusData({})
    }
  }
  const deleteItem = (itemId: any, itemPrice: any) => {
    setItems(items.filter((item: any) => item.id !== itemId))
    setBalance(balance + itemPrice)
  }
  const reset = () => {
    setItems([])
    setBalance(5000)
    setBonusData({})
  }
  const addBonus = (bonus: any) => {
    setBonusData(bonus)
  }
  return (
    <InventoryItemsContext.Provider
      value={{
        balance,
        items,
        bonusData,
        addItem,
        deleteItem,
        reset,
        addBonus,
        setBalance,
      }}
    >
      {children}
    </InventoryItemsContext.Provider>
  )
}
