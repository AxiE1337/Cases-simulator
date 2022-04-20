import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InventoryModal from './InventoryModal'
import {
  Button,
  Menu,
  MenuItem,
  Snackbar,
  IconButton,
  Modal,
} from '@mui/material'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { InventoryItemsContext } from '../contex/InventoryItemsContext'

export default function NavBar() {
  const { reset } = useContext(InventoryItemsContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false)
  const [snackBarMessage, setSnackBarMessage] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  const handleNavigate = (s: string) => {
    navigate(s)
    setAnchorEl(null)
  }
  const handleReset = () => {
    reset && reset()
    setAnchorEl(null)
    setOpenModal(false)
    handleOpenSnackBar()
  }

  const handleOpenSnackBar = () => {
    setSnackBarOpen(true)
    setSnackBarMessage('Resetted')
  }

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackBarOpen(false)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }
  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const actionSnackBar = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleCloseSnackBar}
      >
        <AiOutlineClose />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div className='navBar'>
      <InventoryModal />
      <IconButton onClick={handleOpenMenu} size='large'>
        <HiMenuAlt4 />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleNavigate('/')}>Cases</MenuItem>
        <MenuItem onClick={() => handleNavigate('/CustomCase')}>
          Custom case
        </MenuItem>
        <MenuItem onClick={() => handleNavigate('/bonus')}>
          Bonus tiles
        </MenuItem>
        <Button color='error' onClick={handleModalOpen}>
          reset
        </Button>
      </Menu>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='resetModal'>
          <h3>Everything will be resetted</h3>
          <div>
            <Button onClick={handleReset} color='error'>
              Yes
            </Button>
            <Button onClick={handleModalClose}>no</Button>
          </div>
        </div>
      </Modal>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        message={snackBarMessage}
        action={actionSnackBar}
      ></Snackbar>
    </div>
  )
}
