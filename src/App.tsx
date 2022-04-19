import NavBar from './components/NavBar'
import Cases from './pages/Cases'
import CustomCase from './pages/CustomCase'
import { InventoryItemsProvider } from './contex/InventoryItemsContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <InventoryItemsProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Cases />}>
              <Route path='case/:caseName' element={<Cases />} />
            </Route>
            <Route path='/CustomCase' element={<CustomCase />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </InventoryItemsProvider>
      </Router>
    </div>
  )
}

export default App
