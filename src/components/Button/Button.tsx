import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'

interface Btns {
  _mw: string
  _width: string
  _height: string
  _bgcolor: string
  _color: string
}

const CustBtn = styled(Button)<Btns>`
  text-transform: none;
  max-width: ${props => props._mw ? props._mw : ''};
  width: ${props => props._width ? props._width : ''};
  height: ${props => props._width ? props._height : ''};
  color: ${props => props._color ? props._color : 'black'};
`

const CustButton = ({
  mw,
  width,
  height,
  bgcolor,
  color,
}: any) => {

  return (
    <CustBtn
      _mw={mw}
      _width={width}
      _height={height}
      _bgcolor={bgcolor}
      _color={color}
    />
  )
}

export default CustButton