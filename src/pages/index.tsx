import { Text } from '@chakra-ui/react'
import SidebarWithHeader from 'components/Sidebar'

const Home = () => {
  return (
    <SidebarWithHeader>
      <Text color="gray.500" noOfLines={1}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
    </SidebarWithHeader>
  )
}

export default Home
