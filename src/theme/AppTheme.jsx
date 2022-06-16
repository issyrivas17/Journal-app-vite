import { CssBaseline } from '@mui/material'
import React, { Children } from 'react'
import { ThemeProvider } from 'styled-components'

export const AppTheme = ({Children}) => {
  return (
    <ThemeProvider theme={theme}> 
    
    <CssBaseline/> 
    {Children}
    </ThemeProvider> 
  )

}
