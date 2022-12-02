import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    background: `#333333`,

    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    bosshadow:
      '0px 0px 2px 1px rgba(0, 0, 0, 0.11)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    }
  },
}));

const CustomFilter = (props: any) => {
  const {
    nftLists,
    setNftLists
  } = props

  const [menuList, setMenuList] = React.useState([
    { id: 0, name: 'Rebels', isCheck: true },
    { id: 1, name: `Onna Mush`, isCheck: true },
    { id: 2, name: `Wolf Hunters`, isCheck: true },
    { id: 3, name: 'TSAS', isCheck: true },
    { id: 4, name: `PS Lab`, isCheck: true },
    { id: 5, name: `Fragments`, isCheck: true },
  ])
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChecked = (item: any, index: any) => {
    console.log('nftLists', nftLists)
    const res = menuList.map((menu: any, idx: any) => {
      return index === idx ? { ...menu, isCheck: !menu?.isCheck } : menu
    })
    setMenuList([...res])

    // const filter = nftLists.filter((item: any, idx: any) => {
    //   const value = res.find((menu: any, menuIdx: any) => {
    //     return item.type === menu.name && menu.isCheck
    //   })
    //   console.log('value', value)
    //   if (value) {
    //     return true
    //   } else {
    //     return false
    //   }
    // })

    // console.log('result', filter)
    // setNftLists([...filter])

  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{
          display: `flex`,
          alignItems: `center`,
          background: `#333333`,
          borderRadius: `5px`,
          border: `none`,
          padding: `8px 14px`,
          gap: `4px`,
          '&:hover': {
            background: `#333333`
          }
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
          textTransform: `none`
        }} >
          Filter
        </Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple sx={{
          color: `#FFC000`,
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: `15px`,
          textTransform: `uppercase`
        }} >
          filter by project
        </MenuItem>
        {
          menuList.map((item: any, idx: any) => {
            return (
              <MenuItem disableRipple onClick={() => handleChecked(item, idx)} >
                <Checkbox
                  {...label}
                  checked={item.isCheck}
                  sx={{
                    color: `#FFC000`,
                    padding: 0,
                    paddingRight: `8px`,
                    '&.Mui-checked': {
                      color: `#FFC000`,
                    },
                  }}
                />
                <Typography sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  fontSize: `11px`,
                  color: `white`
                }} >{item.name}</Typography>
              </MenuItem>
            )
          })
        }

      </StyledMenu>
    </div>
  )
}
export default CustomFilter