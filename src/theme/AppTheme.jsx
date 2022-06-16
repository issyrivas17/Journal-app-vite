import { CssBaseline } from '@mui/material'
import React, { Children } from 'react'
import { ThemeProvider } from 'styled-components'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({Children}) => {
  return (
    <ThemeProvider theme={purpleTheme}> 
    
    <CssBaseline/> 
    {Children}
    </ThemeProvider> 
  )

}
