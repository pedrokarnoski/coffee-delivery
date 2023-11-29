import coffeeDeliveryLogo from '../../assets/coffe-delivery-logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
    </HeaderContainer>
  )
}
