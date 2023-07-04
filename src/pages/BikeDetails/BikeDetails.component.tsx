import { useState, useEffect } from 'react'
import { Box, Breadcrumbs, Divider, Link, Typography } from '@mui/material'
import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'
import Header from 'components/Header'
import Bike from 'models/Bike'
import { getServicesFee } from './BikeDetails.utils'
import {
  BookingButton,
  BreadcrumbContainer,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Content,
  DateRangePickerContainer,
  DetailsContainer,
  FavoriteIcon,
  InfoIcon,
  LikeButton,
  OverviewContainer,
  PriceRow,
  SuccessMessageBox,
} from './BikeDetails.styles'

import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface BikeDetailsProps {
  bike?: Bike
}

const BikeDetails = ({ bike }: BikeDetailsProps) => {
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7
  const currentDate = new Date()
  const servicesFee = getServicesFee(rateByDay)
  const [isSuccessMessageBoxVisible, setIsSuccessMessageBoxVisible] = useState(false)
  const [days, setDays] = useState(0)
  const [total, setTotal] = useState(0)
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

  const handleBooking = () => {
    if (total > 0) {
      setIsSuccessMessageBoxVisible(true)
    }
  }

  return (
    <div data-testid='bike-details-page'>
      <Header />

      <BreadcrumbContainer data-testid='bike-details-breadcrumbs'>
        <Breadcrumbs separator={<BreadcrumbSeparator />}>
          <Link underline='hover' display='flex' alignItems='center' color='white' href='/'>
            <BreadcrumbHome />
          </Link>

          <Typography fontWeight={800} letterSpacing={1} color='white'>
            {bike?.name}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbContainer>

      <Content>
        <DetailsContainer variant='outlined' data-testid='bike-details-container'>
          {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}

          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />

          <Divider />

          <Box marginY={2.25}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <div>
                <Typography
                  variant='h1'
                  fontSize={38}
                  fontWeight={800}
                  marginBottom={0.5}
                  data-testid='bike-name-details'
                >
                  {bike?.name}
                </Typography>

                <BikeType type={bike?.type} />
              </div>

              <LikeButton>
                <FavoriteIcon />
              </LikeButton>
            </Box>

            <Typography marginTop={1.5} fontSize={14}>
              {bike?.description}
            </Typography>
          </Box>

          <Divider />

          <Box marginY={2.25} data-testid='bike-prices-details'>
            <PriceRow>
              <Typography>Day</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByDay} €
              </Typography>
            </PriceRow>

            <PriceRow>
              <Typography>Week</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByWeek} €
              </Typography>
            </PriceRow>
          </Box>

          <Divider />

          <Box marginTop={3.25}>
            <Typography variant='h1' fontSize={24} fontWeight={800}>
              Full address after booking
            </Typography>

            <BookingAddressMap />
          </Box>
        </DetailsContainer>
        {isSuccessMessageBoxVisible ? (
          <SuccessMessageBox variant='outlined' data-testid='success-message-container'>
            <Typography variant='h1' fontSize={24} marginBottom={1.25} fontWeight={800}>
              Thank you!
            </Typography>
            <Typography marginTop={1.5} fontSize={16} marginBottom={2}>
              You bike is booked.
            </Typography>
            <img src={bike?.imageUrls[0]} style={{ width: '185px' }} />
            <Typography variant='h2' fontSize={16} marginBottom={0.4} marginTop={2}>
              {bike?.name}
            </Typography>
            <BikeType type={bike?.type} />
          </SuccessMessageBox>
        ) : (
          <OverviewContainer variant='outlined' data-testid='bike-overview-container'>
            <Typography variant='h1' fontSize={24} marginBottom={1.25} fontWeight={800}>
              Select date and time
            </Typography>
            <DateRangePickerContainer data-testid='calendar'>
              <DateRange onChange={handleRangeChange} ranges={range as any} minDate={currentDate} />
            </DateRangePickerContainer>
            <Typography variant='h2' fontSize={16} marginBottom={1.25}>
              Booking Overview
            </Typography>

            <Divider />

            <PriceRow marginTop={1.75} data-testid='bike-overview-single-price'>
              <Box display='flex' alignItems='center'>
                <Typography marginRight={1}>Subtotal</Typography>
                <InfoIcon fontSize='small' />
              </Box>

              <Typography>{rateByDay * days} €</Typography>
            </PriceRow>

            <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
              <Box display='flex' alignItems='center'>
                <Typography marginRight={1}>Service Fee</Typography>
                <InfoIcon fontSize='small' />
              </Box>

              <Typography>{servicesFee} €</Typography>
            </PriceRow>

            <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
              <Typography fontWeight={800} fontSize={16}>
                Total
              </Typography>
              <Typography variant='h2' fontSize={24} letterSpacing={1}>
                {total} €
              </Typography>
            </PriceRow>

            <BookingButton
              fullWidth
              disabled={total === 0}
              disableElevation
              variant='contained'
              data-testid='bike-booking-button'
              onClick={handleBooking}
            >
              Add to booking
            </BookingButton>
          </OverviewContainer>
        )}
      </Content>
    </div>
  )
}

export default BikeDetails
