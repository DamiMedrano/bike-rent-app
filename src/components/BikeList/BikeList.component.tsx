import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import Bike from 'models/Bike'
import { getQuantityLabel } from './BikeList.utils'
import BikeCard from 'components/BikeCard'
import { Container, ListContainer, QuantityContainer } from './BikeList.styles'
import { Typography } from '@mui/material'
import BikePreview from 'components/BikePreview/BikePreview.component'

interface BikeListProps {
  bikes: Bike[]
}

const BikeList = ({ bikes }: BikeListProps) => {
  const { isMobileScreen, previewBike, setPreviewBike } = useContext(AppContext)
  const quantityLabel = getQuantityLabel(bikes.length)
  const [displayedBikes, setDisplayedBikes] = useState(0)
  const [selectedBike, setSelectedBike] = useState<Bike | undefined>(undefined)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedBikes((prevDisplayedBikes) => {
        const nextBikeIndex = prevDisplayedBikes + 1
        return nextBikeIndex < bikes.length ? nextBikeIndex : prevDisplayedBikes
      })
    }, 6)

    return () => clearInterval(interval)
  }, [bikes])

  const handleBikeClick = (bike: Bike) => {
    if (isMobileScreen) {
      setPreviewBike(true)
    }
    setSelectedBike(bike)
  }

  return (
    <Container data-testid='bikes-list'>
      {previewBike ? <BikePreview bike={selectedBike} /> : null}
      <QuantityContainer className='list-quantity-container'>
        <Typography color='primary.light' data-testid='list-quantity'>
          {quantityLabel}
        </Typography>
      </QuantityContainer>
      <h2>{isMobileScreen.toString()}</h2>
      <h2>{previewBike.toString()}</h2>
      <ListContainer>
        {bikes.slice(0, displayedBikes).map((bike) => (
          <div key={bike.id} onClick={() => handleBikeClick(bike)}>
            <BikeCard bike={bike} />
          </div>
        ))}
      </ListContainer>
    </Container>
  )
}

export default BikeList
