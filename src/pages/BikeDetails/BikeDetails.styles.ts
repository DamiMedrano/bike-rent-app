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

// Updates required for DateRange predefined css
export const DateRangePickerContainer = styled(Box)<BoxProps>(({ theme }) => ({
  '& .rdrCalendarWrapper': {
    background: '#1F49D1',
    borderRadius: 40,
    padding: '10px 20px',
    width: '100%',
  },

  '& .rdrDateDisplayWrapper': {
    display: 'none',
  },

  '& .rdrDay > span > span': {
    color: '#fafafa',
  },

  '& .rdrDayDisabled': {
    backgroundColor: 'unset',
    cursor: 'auto',
  },

  '& .rdrDayDisabled > .rdrDayNumber > span': {
    color: '#8FA4E8 !important',
  },

  '& .rdrDayDisabled > .rdrInRange': {
    background: 'none',
  },

  '& .rdrDayDisabled > span': {
    filter: 'unset',
  },

  '& .rdrDayPassive > span > span': {
    color: '#8FA4E8',
  },

  '& .rdrMonth': {
    padding: '0 0 20px',
    width: '-webkit-fill-available',
  },

  '& .rdrMonthAndYearPickers': {
    alignItems: 'flex-start',
    flexDirection: 'column',
    left: 0,
    position: 'absolute',
  },

  '& .rdrMonthAndYearPickers > span > select': {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    background: 'url("") no-repeat right center',
    padding: '0px 30px 4px 0px',
    pointerEvents: 'none',
  },

  '& .rdrMonthAndYearWrapper': {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px 0 40px',
    padding: 0,
    position: 'relative',
  },

  '& .rdrMonthPicker': {
    width: 80,
  },

  '& .rdrMonthPicker > select': {
    color: '#fafafa',
    fontSize: 34,
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
    },
  },

  '& .rdrMonthPicker > select > option': {
    color: '#1E3280',
    fontSize: 14,
  },

  '& .rdrMonths': {
    alignItems: 'center',
  },

  '& .rdrNextButton > i': {
    borderColor: 'transparent transparent transparent #fafafa',
    borderWidth: '7px 3px 6px 10px',
  },

  '& .rdrNextPrevButton': {
    alignItems: 'center',
    background: 'none',
    border: '1px solid #fafafa',
    borderRadius: '40%',
    color: '#fafafa',
    display: 'flex',
    height: 48,
    justifyContent: 'center',
    margin: 0,
    width: 52,
    zIndex: 10,
    '&:hover': {
      background: '1px solid red',
    },
  },

  '& .rdrNextPrevButton > i': {
    margin: 0,
  },

  '& .rdrPprevButton': {
    marginRight: 8,
  },

  '& .rdrPprevButton > i': {
    borderColor: 'transparent #fafafa transparent transparent',
    borderWidth: '7px 10px 6px 3px',
  },

  '& .rdrYearPicker > select': {
    color: '#8FA4E8',
  },

  '& .rdrYearPicker > select > option': {
    color: '#1E3280',
  },

  margin: '0 -24px',
  paddingBottom: 28,
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
  height: 'fit-content',
  minWidth: 'fit-content',
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
}))
