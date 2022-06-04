import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiShoppingCart
} from 'react-icons/fi'
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Explore', icon: FiCompass, href: 'explores' },
  { name: 'Favourites', icon: FiStar, href: 'favourites' },
  { name: 'Settings', icon: FiSettings, href: 'settings' },
  { name: 'Orders', icon: FiShoppingCart, href: 'orders' }
]

export default LinkItems
