import { Text } from '@chakra-ui/react'
import SidebarWithHeader from 'components/Sidebar'

const Home = () => {
  return (
    <SidebarWithHeader>
      <Text color="gray.500" noOfLines={1}>
        Order
      </Text>
    </SidebarWithHeader>
  )
}

export default Home
