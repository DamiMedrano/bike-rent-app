import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { DesktopHeader, MobileHeader } from './layouts'

const HeaderContainer = () => {
  const { isMobileScreen } = useContext(AppContext)

  return isMobileScreen ? <MobileHeader /> : <DesktopHeader />
}

export default HeaderContainer
