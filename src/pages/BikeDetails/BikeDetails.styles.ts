import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  IconButton,
  IconButtonProps,
  styled,
} from '@mui/material'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

export const BreadcrumbContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  margin: '32px 0 32px 100px',

  [theme.breakpoints.down('lg')]: {
    margin: '90px 0 32px 8vw',
  },
}))

export const BreadcrumbHome = styled(HomeOutlined)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: 24,
  fontWeight: 300,
}))

export const BreadcrumbSeparator = styled(ChevronRightOutlined)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: 14,
  fontWeight: 300,
}))

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '0 100px 44px',
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: 24,

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    padding: '0 20px 44px',
  },
}))

// customization of DateRange predefined styles
export const DateRangePickerContainer = styled(Box)<BoxProps>(() => ({
  paddingBottom: 28,
  '&& .rdrCalendarWrapper': {
    background: '#1F49D1',
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    borderRadius: 20,
    boxShadow: '0px 10px 70px 0px rgba(0, 0, 0, 0.2)',

    ' .rdrDateDisplayWrapper': {
      display: 'none',
    },
    ' .rdrMonthPicker > select': {
      color: '#fafafa',
    },
    ' .rdrMonthPicker > select > option': {
      color: '#1E3280',
    },
    ' .rdrYearPicker > select': {
      color: '#fafafa',
    },
    ' .rdrYearPicker > select > option': {
      color: '#1E3280',
    },
    ' .rdrMonths': {
      alignItems: 'center',
    },
    ' .rdrDay > span > span': {
      color: '#fafafa',
    },
    ' .rdrDayPassive > span > span': {
      color: '#8FA4E8',
    },
    ' .rdrMonth': {
      minWidth: '100%',
    },
    ' .rdrNextPrevButton': {
      width: 52,
      height: 48,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #fafafa',
      background: 'none',
      color: '#fafafa',
      borderRadius: '40%',
    },
    ' .rdrNextPrevButton > i': {
      margin: 0,
    },
    ' .rdrNextButton > i': {
      borderWidth: '7px 3px 6px 10px',
      borderColor: 'transparent transparent transparent #fafafa',
    },
    ' .rdrPprevButton > i': {
      borderWidth: '7px 10px 6px 3px',
      borderColor: 'transparent #fafafa transparent transparent',
    },
  },
}))

export const DetailsContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,

  [theme.breakpoints.down('lg')]: {
    padding: 24,
  },
}))

export const LikeButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 20,
  width: 60,
  height: 60,
}))

export const FavoriteIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  color: theme.palette.common.black,
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const OverviewContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
  maxHeight: 700,
  minWidth: 400,
}))

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const SuccessMessageBox = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
  display: 'flex',
  alignContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: 423,
  justifyContent: 'center',
  minWidth: 400,
}))
