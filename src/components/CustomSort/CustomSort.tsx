import { useState } from 'react'
import { Box, Typography } from '@mui/material'

const CustomSort = (props: any) => {
  const {
    nftLists,
    setNftLists
  } = props

  const [isHighPrice, setHightPrice] = useState(false) // set state value from highprice to lowprice

  const handleSort = () => {
    setHightPrice(!isHighPrice)

    if (isHighPrice) {
      const newSort = nftLists.sort((item1: any, item2: any) => item2.price - item1.price)
      console.log('newHighSort', newSort)
      setNftLists([...newSort])
    } else {
      const newSort = nftLists.sort((item1: any, item2: any) => item1.price - item2.price)
      console.log('newLowSort', newSort)
      setNftLists([...newSort])
    }

  }

  return (
    <Box
      onClick={handleSort}
      sx={{
        display: `flex`,
        alignItems: `center`,
        background: `#333333`,
        borderRadius: `5px`,
        border: `none`,
        padding: `8px 14px`,
        gap: `4px`,
        cursor: `pointer`
      }} >
      <Box
        component={`img`}
        src={`assets/images/sort.png`}
      />
      <Typography sx={{
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: `12px`,
        color: `#FFC000`,
      }} >
        {isHighPrice ? `High to low` : `Low to high`}
      </Typography>
    </Box>
  )
}
export default CustomSort