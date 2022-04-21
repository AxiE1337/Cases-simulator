import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { casesData, weaponCasemaxChance, vehiclesCasemaxChance } from '../data'
import { motion } from 'framer-motion'
import '../styles/cases.css'
import CaseComponent from '../components/CaseComponent'

export default function Cases() {
  const navigate = useNavigate()
  const { caseName } = useParams()

  if (caseName !== undefined) {
    if (caseName === 'weaponCase') {
      return (
        <motion.div
          className='casesPage'
          key='weaponCase'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
        >
          <CaseComponent
            caseItems={casesData.weaponCaseData.items}
            casePrice={casesData.weaponCaseData.casePrice}
            maxChance={weaponCasemaxChance}
            caseName={casesData.weaponCaseData.caseName}
          />
        </motion.div>
      )
    }
    if (caseName === 'vehiclesCase') {
      return (
        <motion.div
          className='casesPage'
          key='vehiclesCase'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
        >
          <CaseComponent
            caseItems={casesData.vehiclesCaseData.items}
            casePrice={casesData.vehiclesCaseData.casePrice}
            maxChance={vehiclesCasemaxChance}
            caseName={casesData.vehiclesCaseData.caseName}
          />
        </motion.div>
      )
    }
    if (caseName === 'planesCase') {
      return (
        <motion.div
          className='casesPage'
          key='planesCase'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
        >
          <CaseComponent
            caseItems={casesData.planesCaseData.items}
            casePrice={casesData.planesCaseData.casePrice}
            maxChance={vehiclesCasemaxChance}
            caseName={casesData.planesCaseData.caseName}
          />
        </motion.div>
      )
    } else if (caseName !== 'vehiclesCase' && 'weaponCase' && 'planesCase') {
      return <div>{`case ${caseName} does not exist`}</div>
    }
  }

  return (
    <motion.div
      className='casesPage'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
    >
      <div className='casePreview'>
        <Button onClick={() => navigate('/case/weaponCase')}>
          Weapon case
        </Button>
      </div>
      <div className='casePreview'>
        <Button onClick={() => navigate('/case/vehiclesCase')}>
          Vehicles case
        </Button>
      </div>
      <div className='casePreview'>
        <Button onClick={() => navigate('/case/planesCase')}>
          Planes case
        </Button>
      </div>
    </motion.div>
  )
}
