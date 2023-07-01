import { Box, styled } from '@mui/material'

export const Content = styled(Box)(({ theme }) => ({
  padding: '0 100px 44px',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    padding: '8vw',
  },
}))

export const Loading = styled(Box)(() => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
