import { useState, useContext } from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { Button, Typography } from '@mui/material'
import { InventoryItemsContext } from '../contex/InventoryItemsContext'
import { motion } from 'framer-motion'
import '../styles/cases.css'
import { useNavigate } from 'react-router-dom'

interface Icase {
  caseItems: any
  casePrice: any
  maxChance: any
  caseName: string
}

export default function CaseComponent({
  caseItems,
  casePrice,
  maxChance,
  caseName,
}: Icase) {
  const [cases, setCases] = useState<any>([])
  const [item, setItem] = useState<any>({})
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isEnoughtMoney, setIsEnoughtMoney] = useState<boolean>(false)
  const [cssRandVariable, setCssRandVariable] = useState<number>(1470)
  const { addItem, balance } = useContext(InventoryItemsContext)
  const navigate = useNavigate()

  const casesHandler = () => {
    setIsActive(true)
    const caseChanceArr: any = []
    const chanceIndex = Math.floor(Math.random() * (maxChance - 0) + 0)
    setCssRandVariable(Math.floor(Math.random() * (-2740 - -2950) + -2950))

    caseItems.forEach((caseData: any) => {
      if (chanceIndex < caseData.chance) {
        caseChanceArr.push(caseData)
      }
    })

    const randomIndex = Math.floor(
      Math.random() * (caseChanceArr.length - 0) + 0
    )
    const opendItem = caseChanceArr[randomIndex]

    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        name: opendItem.name,
        ratityColor: opendItem.ratityColor,
        price: opendItem.price,
      }
      setIsActive(false)
      setItem(opendItem)
      addItem && addItem(newItem)
    }, 8100)

    for (let i = 0; i < 33; i++) {
      const randomIndex = Math.floor(Math.random() * (caseItems.length - 0) + 0)
      if (i === 30) {
        setCases((prev: any) => [...prev, opendItem])
      }
      setCases((prev: any) => [...prev, caseItems[randomIndex]])
    }
  }
  const open = () => {
    setCases([])
    setTimeout(() => {
      if (balance > casePrice) {
        casesHandler()
        setIsEnoughtMoney(false)
      } else {
        setIsEnoughtMoney(true)
      }
    }, 100)
  }
  const animate = {
    x: [3600, cssRandVariable, -2840],
    transition: {
      duration: 8,
      times: [null, 0.95, 1],
      ease: [0.2, 0.8, 0.9, 1],
      type: 'spring',
    },
  }
  return (
    <>
      <Button
        style={{ marginLeft: 'auto', marginRight: '5vw' }}
        onClick={() => navigate('/')}
        disabled={isActive}
      >
        back
      </Button>
      <Typography variant='h4' className='caseName'>
        {caseName}
      </Typography>
      <div className='cases'>
        {cases.map((item: any, index: number) => (
          <motion.div
            animate={animate}
            className='item'
            key={index}
            style={{ background: item.ratityColor }}
          >
            {item.name}
          </motion.div>
        ))}
      </div>
      <FaLongArrowAltUp />
      {!isActive ? (
        <Typography
          variant='h4'
          style={{ background: item.ratityColor }}
          className='itemName'
        >
          {item.name}
        </Typography>
      ) : (
        <Typography variant='h4' className='itemName'>
          {item.name}
        </Typography>
      )}

      <Button
        className='opendCaseBtn'
        disabled={isActive}
        variant='outlined'
        color={isEnoughtMoney ? 'error' : 'primary'}
        onClick={open}
      >{`Open ${casePrice} RUB`}</Button>
    </>
  )
}