import { useContext } from 'react'
import InventoryModal from './InventoryModal'
import { Button } from '@mui/material'
import { InventoryItemsContext } from '../contex/InventoryItemsContext'

export default function NavBar() {
  const { reset } = useContext(InventoryItemsContext)
  return (
    <div className='navBar'>
      <InventoryModal />
      <Button onClick={reset}>reset</Button>
    </div>
  )
}
