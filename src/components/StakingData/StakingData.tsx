import { Box, Typography } from "@mui/material"

const StakingData = () => {
  return (
    <Box>

      {/* Desktop */}
      <Box sx={{
        display: {
          sm: `flex`,
          ss: `none`
        },
        marginTop: `21px`,
        background: `#333333`,
        borderRadius: `5px`,
        padding: `8px 0px`
      }} >
        <Box sx={{
          width: {
            sm: `33%`,
            ss: `100%`
          },
          textAlign: `center`,
          borderRight: {
            sm: `1px solid #FFC000`,
            ss: `none`
          },
          borderBottom: {
            sm: `none`,
            ss: `1px solid #FFC000`
          },
          padding: `16px 0px`
        }} >
          <Typography sx={{
            fontFamily: `Montserrat`,
            fontSize: `18px`,
            color: `#FFC000`,
            fontWeight: 600,
            textTransform: `uppercase`
          }} >My staked Rebels</Typography>
          <Typography sx={{
            fontFamily: `Montserrat`,
            fontSize: `22px`,
            color: `white`,
            fontWeight: 900,
            textTransform: `uppercase`
          }} >4 Rebels</Typography>
        </Box>
        <Box sx={{
          width: {
            sm: `33%`,
            ss: `100%`
          },
          textAlign: `center`,
          borderRight: {
            sm: `1px solid #FFC000`,
            ss: `none`
          },
          borderBottom: {
            sm: `none`,
            ss: `1px solid #FFC000`
          },
          padding: `16px 0px`,
        }} >
          <Typography sx={{
            fontFamily: `Montserrat`,
            fontSize: `18px`,
            color: `#FFC000`,
            fontWeight: 600,
            textTransform: `uppercase`
          }} >Fortnightly Earning</Typography>
          <Typography sx={{
            fontFamily: `Montserrat`,
            fontSize: `22px`,
            color: `white`,
            fontWeight: 900,
            textTransform: `uppercase`
          }} >20 $rbl</Typography>
        </Box>
        <Box sx={{
          width: {
            sm: `33%`,
            ss: `100%`
          },
          textAlign: `center`,
          padding: `16px 0px`,
        }} >
          <Typography sx={{
            fontFamily: `Montserrat`,
            fontSize: `18px`,
            color: `#FFC000`,
            fontWeight: 600,
            textTransform: `uppercase`
          }} >MY CURRENT $RBL HOLDINGS</Typography>
          <Typography sx={{
            fontFamily: `Montserrat`,
            fontSize: `22px`,
            color: `white`,
            fontWeight: 900,
            textTransform: `uppercase`
          }} >100 $rbl</Typography>
        </Box>
      </Box>

      {/* Mobile */}
      <Box sx={{
        mt: 1.5,
        display: {
          sm: `none`,
          ss: `flex`
        },
        justifyContent: `space-between`,
        flexWrap: `wrap`,
        gap: {
          sm: 2,
          ss: 1.5
        }
      }} >
        <Box sx={{
          width: `48%`,
          background: `#333333`,
          bosshadow: `0px 0px 5px 1px rgba(0, 0, 0, 0.25)`,
          borderRadius: `5px`,
          border: `none`,
          textAlign: `center`,
          py: 3
        }} >
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: `13px`,
            color: `#FFC000`,
            textTransform: `uppercase`
          }} >TOTAL REBELS STAKED</Typography>
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: `16px`,
            textTransform: `uppercase`,
            color: `#FFFFFF`
          }}  >
            45%
          </Typography>
        </Box>
        <Box sx={{
          width: `48%`,
          background: `#333333`,
          bosshadow: `0px 0px 5px 1px rgba(0, 0, 0, 0.25)`,
          borderRadius: `5px`,
          border: `none`,
          textAlign: `center`,
          py: 3
        }} >
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: `13px`,
            color: `#FFC000`,
            textTransform: `uppercase`
          }} >my staked rebels</Typography>
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: `16px`,
            textTransform: `uppercase`,
            color: `#FFFFFF`
          }}  >
            4 rebels
          </Typography>
        </Box>
        <Box sx={{
          width: `48%`,
          background: `#333333`,
          bosshadow: `0px 0px 5px 1px rgba(0, 0, 0, 0.25)`,
          borderRadius: `5px`,
          border: `none`,
          textAlign: `center`,
          py: 3
        }} >
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: `13px`,
            color: `#FFC000`,
            textTransform: `uppercase`
          }} >frontnightly earning</Typography>
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: `16px`,
            textTransform: `uppercase`,
            color: `#FFFFFF`
          }}  >
            1 rbl
          </Typography>
        </Box>
        <Box sx={{
          width: `48%`,
          background: `#333333`,
          bosshadow: `0px 0px 5px 1px rgba(0, 0, 0, 0.25)`,
          borderRadius: `5px`,
          border: `none`,
          textAlign: `center`,
          py: 3
        }} >
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: `13px`,
            color: `#FFC000`,
            textTransform: `uppercase`
          }} >my current rbl holdings</Typography>
          <Typography sx={{
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: `16px`,
            textTransform: `uppercase`,
            color: `#FFFFFF`
          }}  >
            4 rbl
          </Typography>
        </Box>
      </Box>
    </Box>

  )
}

export default StakingData