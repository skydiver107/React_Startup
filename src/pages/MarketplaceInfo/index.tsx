import { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

const MarketplaceInfo = () => {

  const { id } = useParams()
  const [nftLists, setNftLists] = useState<any[]>([
    { id: 0, name: `NO. 1`, img: `assets/images/staking1.png` },
    { id: 1, name: `NO. 2`, img: `assets/images/staking2.png` },
    { id: 2, name: `NO. 3`, img: `assets/images/staking3.png` },
    { id: 3, name: `NO. 4`, img: `assets/images/staking4.png` },
    { id: 4, name: `NO. 5`, img: `assets/images/staking2.png` },
    { id: 5, name: `NO. 6`, img: `assets/images/staking3.png` },
    { id: 6, name: `NO. 7`, img: `assets/images/staking4.png` },
  ])


  return (
    <Box>
      {
        nftLists.map((item: any, index: number) => {
          if (item.id == id)
            return (
              <Typography sx={{
                color: `yellow`,
                mt: 10
              }} >
                {item.name}
              </Typography>
            )
        }
        )
      }
    </Box >
  )
}

export default MarketplaceInfo