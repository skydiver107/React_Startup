import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: '#151414',
  border: '2px solid #FFC000',
  bosshadow: 24,
  borderRadius: `5px`,
  p: 4,
};

const CustomModal = (props: any) => {

  const {
    isOpenModal,
    closeModal,
    isModalStake,
    handleStaking,
    handleUnStaking,
    handleStakeAll,
    handleUnstakeAll
  } = props

  const handleClick = () => {
    if (isModalStake.isStake) {
      console.log('111')
      handleStaking()
    }
    if (isModalStake.isUnStake) {
      console.log('222')
      handleUnStaking()
    }
    if (isModalStake.isStakeAll) {
      console.log('333')
      handleStakeAll()
    }
    if (isModalStake.isUnStakeAll) {
      console.log('444')
      handleUnstakeAll()
    }
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpenModal}>
        <Box sx={style}>
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontSize: `20px`,
            color: `white`,
            textTransform: `uppercase`,
            textAlign: `center`,
            fontWeight: 800
          }}>
            {
              isModalStake.isStake && `your nft staked
            Successfully`
            }
            {
              isModalStake.isStakeAll && `your nft staked
            Successfully`
            }
            {
              isModalStake.isUnStake && `your nft unstaked
            Successfully`
            }
            {
              isModalStake.isUnStakeAll && `your nft unstaked
            Successfully`
            }
          </Typography>
          <Box sx={{ display: `flex`, justifyContent: `center` }} >
            <Box
              onClick={handleClick}
              component={`button`}
              sx={{
                background: ` #333333;`,
                borderRadius: `5px`,
                border: `1px solid #FFC000`,
                fontFamily: 'Montserrat',
                fontSize: `13px`,
                textTransform: `uppercase`,
                fontWeight: 700,
                color: `#FFC000`,
                mt: 2,
                padding: `8px 18px`,
                cursor: `pointer`
              }} >
              continue to wallet
            </Box>
          </Box>

        </Box>
      </Fade>
    </Modal>
  )
}
export default CustomModal