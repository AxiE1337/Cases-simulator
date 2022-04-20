import { useState, useContext } from 'react'
import { Modal, Button, Typography } from '@mui/material'
import { InventoryItemsContext } from '../contex/InventoryItemsContext'
import { AiOutlineClose } from 'react-icons/ai'

export default function InventoryModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { balance, items, deleteItem, bonusData } = useContext(
    InventoryItemsContext
  )

  const sellItem = (id: number, price: number) => {
    deleteItem && deleteItem(id, price)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Inventory</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='inventory'>
          <Button onClick={handleClose}>
            <AiOutlineClose />
          </Button>
          <Typography variant='h4' className='caseName'>
            {`Balance: ${balance.toFixed(2)} RUB`}
          </Typography>
          {bonusData.bonusType !== undefined && (
            <Typography variant='h4' className='bonus'>
              {`You have bonus ${bonusData?.bonusName}. Uses left: ${bonusData?.bonusUses}`}
            </Typography>
          )}
          <div className='inventoryItems'>
            {items.map((item: any, index: number) => (
              <div
                className='inventoryItem'
                key={index}
                style={{ background: item.ratityColor }}
              >
                <Typography variant='h2'>{item.name}</Typography>
                <Typography variant='h4' className='caseName'>
                  {item.price + ' RUB'}
                </Typography>
                <Button onClick={() => sellItem(item.id, item.price)}>
                  Sell
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}
