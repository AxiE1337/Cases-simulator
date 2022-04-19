import { useState } from 'react'
import { Button, TextField, Popover, Input } from '@mui/material'
import { ColorPicker, useColor } from 'react-color-palette'
import { motion } from 'framer-motion'
import '../styles/customCase.css'
import 'react-color-palette/lib/css/styles.css'
import { FaLongArrowAltUp } from 'react-icons/fa'

export default function CustomCase() {
  const [input, setInput] = useState<string>('')
  const [itemsArr, setItemsArr] = useState<any>([])
  const [itemsRandArr, setItemsRandArr] = useState<any>([])
  const [isActive, setIsActive] = useState<boolean>(false)
  const [color, setColor] = useColor('hex', '#121212')
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  const addItem = () => {
    if (itemsArr.length < 5) {
      input !== '' &&
        setItemsArr([
          ...itemsArr,
          { name: input, id: Date.now(), color: color.hex },
        ])
    }
    setInput('')
  }

  const deleteItem = (id: number) => {
    setItemsArr(itemsArr.filter((item: any) => item.id !== id))
  }

  const updateItem = (id: number, newText: any) => {
    const index = itemsArr.findIndex((item: any) => item.id === id)
    const data = [...itemsArr]
    data[index].name = newText
    setItemsArr(data)
  }

  const customCase = () => {
    const randItemIndexOpend = Math.floor(
      Math.random() * (itemsArr.length - 0) + 0
    )
    setTimeout(() => {
      setIsActive(false)
    }, 7100)
    for (let i = 0; i < 30; i++) {
      const randItemIndex = Math.floor(
        Math.random() * (itemsArr.length - 0) + 0
      )
      if (i === 26) {
        setItemsRandArr((prev: any) => [...prev, itemsArr[randItemIndexOpend]])
      }
      setItemsRandArr((prev: any) => [...prev, itemsArr[randItemIndex]])
    }
  }

  const start = () => {
    setIsActive(true)
    setItemsRandArr([])
    setTimeout(() => {
      if (itemsArr.length > 1) {
        customCase()
      }
    }, 100)
  }

  const colorPicker = (
    <ColorPicker
      width={300}
      height={200}
      color={color}
      onChange={setColor}
      hideHSV
      dark
    />
  )

  return (
    <motion.div
      className='customCasePage'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
    >
      <h1> Custom case</h1>
      <div className='itemsContainer'>
        <div
          className='inputContainer'
          style={{ border: `1px solid ${color.hex}` }}
        >
          <TextField
            variant='filled'
            inputProps={{ maxLength: 15 }}
            type='text'
            label='Add item'
            onChange={(e: any) => setInput(e.target.value)}
            value={input}
          />
          <Button onClick={handlePopoverOpen}>Pick color</Button>
          <Button onClick={addItem}>add</Button>
        </div>
        <Popover
          id='popover'
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <div onMouseLeave={handlePopoverClose}>{colorPicker}</div>
        </Popover>
        <div className='addedItems'>
          {itemsArr.map((item: any) => (
            <div
              key={item.id}
              className='addedItem'
              style={{ backgroundColor: item.color }}
            >
              <Input
                type='text'
                value={item.name}
                onChange={(e: any) => updateItem(item.id, e.target.value)}
              />
              <Button variant='contained' onClick={() => deleteItem(item.id)}>
                delete
              </Button>
            </div>
          ))}
        </div>
      </div>
      {itemsArr.length > 1 && (
        <Button disabled={isActive} onClick={start}>
          start
        </Button>
      )}
      <div className='customCase'>
        {itemsRandArr.map((item: any, index: number) => (
          <div
            key={index}
            className='customCaseItem'
            style={{ backgroundColor: item.color }}
          >
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <FaLongArrowAltUp />
    </motion.div>
  )
}
