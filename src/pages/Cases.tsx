import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { casesData, weaponCasemaxChance, vehiclesCasemaxChance } from '../data'
import '../styles/cases.css'
import CaseComponent from '../components/CaseComponent'

export default function Cases() {
  const navigate = useNavigate()
  const { caseName } = useParams()

  if (caseName !== undefined) {
    if (caseName === 'weaponCase') {
      return (
        <div className='casesPage'>
          <CaseComponent
            caseItems={casesData.weaponCaseData.items}
            casePrice={casesData.weaponCaseData.casePrice}
            maxChance={weaponCasemaxChance}
            caseName={casesData.weaponCaseData.caseName}
          />
        </div>
      )
    }
    if (caseName === 'vehiclesCase') {
      return (
        <div className='casesPage'>
          <CaseComponent
            caseItems={casesData.vehiclesCaseData.items}
            casePrice={casesData.vehiclesCaseData.casePrice}
            maxChance={vehiclesCasemaxChance}
            caseName={casesData.vehiclesCaseData.caseName}
          />
        </div>
      )
    } else if (caseName !== 'vehiclesCase' && 'weaponCase') {
      return <div>{`case ${caseName} does not exist`}</div>
    }
  }

  return (
    <div className='casesPage'>
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
    </div>
  )
}
