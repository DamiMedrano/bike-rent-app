import Header from 'components/Header'
import BikeList from 'components/BikeList'
import Bike from 'models/Bike'
import { Content, Loading } from './Home.styles'
import ConfigErrorMessage from 'components/ConfigErrorMessage'

interface HomeProps {
  bikes: Bike[]
  appIsNotConfigured: boolean
}

const Home = ({ appIsNotConfigured, bikes }: HomeProps) => {
  return (
    <div data-testid='home-page'>
      <Header />

      <Content>
        {bikes.length === 0 ? (
          <Loading>
            <h1>Loading...</h1>{' '}
          </Loading>
        ) : (
          <BikeList bikes={bikes} />
        )}
        {appIsNotConfigured && <ConfigErrorMessage />}
      </Content>
    </div>
  )
}

export default Home
