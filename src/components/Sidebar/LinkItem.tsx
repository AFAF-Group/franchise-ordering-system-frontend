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
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
  { name: 'Orders', icon: FiShoppingCart }
]

export default LinkItems
