import { Box, Button, ButtonProps, styled, Typography, TypographyProps } from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

export const OuterContainer = styled(Box)({
  position: 'absolute',
  padding: '72px 0',
  top: -72,
  left: 0,
  right: 0,
  background: '#00000080',
})

export const InnerContainer = styled(Box)(() => {
  const { isMobileScreen, previewBike } = useContext(AppContext)

  return {
    padding: '12px 0',
    width: '100%',
    background: '#fff',
    borderRadius: 40,
    maxHeight: '100vh', // Change height to maxHeight
    transform: `translateY(${isMobileScreen && previewBike ? '0' : '100%'})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export const DescriptionContainer = styled(Box)({
  background: '#1F49D1',
  color: '#fff',
  padding: '80px 20px 20px',
  marginTop: -70,
  zIndex: -1,
  borderRadius: '40px 40px 0 0',
})

export const RentBikeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 20px',
  width: '100%',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))

export const FavoriteIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  color: theme.palette.common.white,
  border: '1px solid #ffffff20',
  height: 54,
  width: 54,
  padding: 12,
  borderRadius: 16,
}))
