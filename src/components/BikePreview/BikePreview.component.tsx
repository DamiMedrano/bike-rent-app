import { useEffect, useRef, useContext, useState } from 'react'
import { Divider, Box, IconButton, Typography } from '@mui/material'
import { AppContext } from '../../AppContext'
import BikeImageSelector from '../../components/BikeImageSelector'
import BikeSpecs from '../../components/BikeSpecs'
import BikeType from '../../components/BikeType'
import BookingAddressMap from '../../components/BookingAddressMap'
import {
  OuterContainer,
  InnerContainer,
  DescriptionContainer,
  RentBikeButton,
  FavoriteIcon,
} from './BikePreview.styles'
import Bike from '../../models/Bike'
import { getServicesFee } from '../../pages/BikeDetails/BikeDetails.utils'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface BikePrewiewProps {
  bike?: Bike
}

const BikePreview = ({ bike }: BikePrewiewProps) => {
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7
  const currentDate = new Date()
  const servicesFee = getServicesFee(rateByDay)
  const [days, setDays] = useState(0)
  const [total, setTotal] = useState(0)
  const [isBooking, setIsBooking] = useState(false)
  const [isSelectingDate, setIsSelectingDate] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ])

  useEffect(() => {
    if (days !== 0) {
      const newTotal = rateByDay * days + servicesFee
      setTotal(newTotal)
    }
  }, [rateByDay, days, servicesFee])

  const handleBooking = () => {
    setIsBooking(true)
  }
  const handleSelection = () => {
    setIsSelectingDate(true)
  }
  const handleCompletion = () => {
    setIsComplete(true)
  }

  const handleRangeChange = (item: any) => {
    const selectedRange = item.selection

    if (selectedRange.startDate && selectedRange.endDate) {
      // Calculate the number of days and update the range
      const start = selectedRange.startDate
      const end = selectedRange.endDate
      const newDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1

      setDays(newDays)
      setRange([selectedRange])
    } else {
      setDays(0)
      setRange([selectedRange])
    }

    // Reset the range if the selected dates are in the past
    const now = new Date()
    if (selectedRange.startDate < now || selectedRange.endDate < now) {
      setRange([
        {
          startDate: null,
          endDate: null,
          key: 'selection',
        },
      ])
    }
  }

  const { setPreviewBike } = useContext(AppContext)
  const redDivRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (redDivRef.current && !redDivRef.current.contains(event.target as Node)) {
      setPreviewBike(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <OuterContainer>
      <InnerContainer ref={redDivRef}>
        <div style={{ backgroundColor: '#D9D9D9', width: 48, padding: 4, borderRadius: 6 }}></div>
        {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}
        <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />
        <DescriptionContainer>
          <Box marginY={2.25}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <div>
                <Typography
                  variant='h1'
                  fontSize={24}
                  fontWeight={800}
                  marginBottom={0.5}
                  data-testid='bike-name-details'
                >
                  {bike?.name}
                </Typography>

                <BikeType type={bike?.type} />
              </div>
            </Box>

            <Typography marginTop={1.5} fontSize={14}>
              {bike?.description}
            </Typography>
          </Box>
          <Divider style={{ backgroundColor: '#fff30' }} />

          <Box marginY={2.25} data-testid='bike-prices-details'>
            <Box display={'flex'} justifyContent='space-between' alignItems='center' marginY={1.25}>
              <Typography fontSize={16}>Day</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByDay} €
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent='space-between'>
              <Typography fontSize={16}>Week</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByWeek} €
              </Typography>
            </Box>
          </Box>

          <Divider style={{ backgroundColor: '#fff30' }} />
          <Box marginY={2.25} data-testid='bike-prices-details'>
            <Typography variant='h2' fontSize={16} fontWeight={800}>
              Full address after booking
            </Typography>
          </Box>

          <BookingAddressMap />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <RentBikeButton
              onClick={() => handleBooking}
              variant='contained'
              color='secondary'
              disableElevation
            >
              Rent Bike
            </RentBikeButton>
          </div>
        </DescriptionContainer>
        {/* <DateRange onChange={handleRangeChange} ranges={range as any} minDate={currentDate} /> */}
      </InnerContainer>
    </OuterContainer>
  )
}

export default BikePreview
