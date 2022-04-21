import { useState, useContext } from 'react'
import { Button } from '@mui/material'
import { InventoryItemsContext } from '../contex/InventoryItemsContext'

import '../styles/bonusPage.css'
let bonuses = [
  { id: 1, bonusName: '1', bonusUses: 10, bonusThing: 0, bonusType: 'type' },
  { id: 2, bonusName: '2', bonusUses: 10, bonusThing: 0, bonusType: 'type' },
  { id: 3, bonusName: '3', bonusUses: 10, bonusThing: 0, bonusType: 'type' },
  { id: 4, bonusName: '4', bonusUses: 10, bonusThing: 0, bonusType: 'type' },
  { id: 5, bonusName: '5', bonusUses: 10, bonusThing: 0, bonusType: 'type' },
  { id: 6, bonusName: '6', bonusUses: 10, bonusThing: 0, bonusType: 'type' },
]
const bonusTilesPrice = 3000

export default function BonusPage() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [tileBonus, setTileBonus] = useState<any>('')
  const { addBonus, setBalance, balance } = useContext(InventoryItemsContext)

  const handleTile = (bonusDataTile: any) => {
    setTileBonus(bonusDataTile)
    setIsActive(false)
    setBalance((prev: any) => prev - bonusTilesPrice)
    addBonus && addBonus(bonusDataTile)
  }
  const handlePlay = () => {
    if (balance > bonusTilesPrice) {
      bonuses = [
        {
          id: Math.random() * (5 - 0) + 0,
          bonusName: 'x2 to chance',
          bonusUses: 10,
          bonusThing: 0.5,
          bonusType: 'chance',
        },
        {
          id: Math.random() * (5 - 0) + 0,
          bonusName: '80% off to cases',
          bonusUses: 10,
          bonusThing: 0.2,
          bonusType: 'cost',
        },
        {
          id: Math.random() * (5 - 0) + 0,
          bonusName: 'Multiplies worth of items by 20%',
          bonusUses: 15,
          bonusThing: 1.2,
          bonusType: 'worth',
        },
        {
          id: Math.random() * (5 - 0) + 0,
          bonusName: 'Multiplies worth of items by 50%',
          bonusUses: 10,
          bonusThing: 1.5,
          bonusType: 'worth',
        },
        {
          id: Math.random() * (5 - 0) + 0,
          bonusName: 'Cuts cost on cases by half',
          bonusUses: 12,
          bonusThing: 0.5,
          bonusType: 'cost',
        },
        {
          id: Math.random() * (5 - 0) + 0,
          bonusName: 'x4 to chance',
          bonusUses: 5,
          bonusThing: 0.15,
          bonusType: 'chance',
        },
      ]
      setIsActive(true)
    }
    setTileBonus('')
  }

  return (
    <div className='bonusPage'>
      <h1>Bonus tiles</h1>
      <Button disabled={isActive} onClick={handlePlay}>
        {`Play ${4000} RUB`}
      </Button>
      {isActive && <h2>Click on any tile to get a bonus</h2>}
      <div className='tiles'>
        {bonuses
          .sort((a: any, b: any) => {
            return b.id - a.id
          })
          .map((tile: any) => (
            <div
              key={tile.id}
              className='tile'
              style={{ pointerEvents: !isActive ? 'none' : 'all' }}
              onClick={() => handleTile(tile)}
            >
              <h1>{tile.id === tileBonus.id && tileBonus.bonusName}</h1>
            </div>
          ))}
      </div>
      {tileBonus.bonusName !== undefined && (
        <h1>{`${tileBonus.bonusName}. Can be used: ${tileBonus.bonusUses} times`}</h1>
      )}
    </div>
  )
}
