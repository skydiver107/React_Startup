import { Box, Typography } from '@mui/material'

const ProgressBar = () => {
  return (
    <Box sx={{
      marginTop: {
        sm: `106px`,
        ss: 0
      }
    }} >
      <Box sx={{
        display: {
          sm: `flex`,
          ss: `none`
        },
        alignItems: `center`
      }} >
        <Typography variant='h6' sx={{
          width: {
            sm: `25%`,
            ss: `100%`
          },
          color: `#FFC000`,
          fontSize: `20px`,
          textTransform: `uppercase`,
        }} >Total Rebels staked</Typography>
        <Box sx={{
          width: {
            sm: `80%`,
            ss: `100%`
          },
          height: `24px`,
          position: `relative`,
          textAlign: `center`,
          background: ` #D9D9D9`,
          borderRadius: `50px`,
          ml: {
            sm: 3,
            ss: 0
          },
          mt: {
            sm: 0,
            ss: 3
          }
        }} >
          <Box sx={{
            height: `24px`,
            background: `#FFC000`,
            borderRadius: `50px`,
            width: `45%`,
          }} >
            <Typography sx={{
              fontFamily: 'Montserrat',
              color: `#151414`,
              fontWeight: 800,
              position: `absolute`,
              left: `50%`,
              transform: `translate(-50%,0)`,
              fontSize: `15px`,
            }} >45%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProgressBar