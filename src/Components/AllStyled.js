import React from 'react'
import { styled, Typography  } from "@mui/material";
function AllStyled() {
  const TyphoStyled = styled(Typography)(({theme}) => ({
    backgroundColor:theme.palette.secondary.main,
    font:theme.typography.h3
  }))
  return (
    <TyphoStyled></TyphoStyled>
  )
}

export default AllStyled
