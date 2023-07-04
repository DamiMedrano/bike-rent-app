import React, { createContext, useState, ReactNode, useEffect } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

interface AppContextProps {
  isMobileScreen: boolean
  previewBike: any
  setPreviewBike: React.Dispatch<React.SetStateAction<any>>
}

export const AppContext = createContext<AppContextProps>({
  isMobileScreen: false,
  previewBike: false,
  setPreviewBike: (value) => {
    console.warn(`Using default implementation for setPreviewBike. Value received: ${value}`)
  },
})

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const theme = useTheme()
  const [previewBike, setPreviewBike] = useState(false)
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    if (isMobileScreen) setPreviewBike(false)
  }, [theme])

  return (
    <AppContext.Provider value={{ isMobileScreen, previewBike, setPreviewBike }}>
      {children}
    </AppContext.Provider>
  )
}
