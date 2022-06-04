import { Text } from '@chakra-ui/react'
import { Counter } from 'components/Form/Counter'
import SidebarWithHeader from 'components/Sidebar'

const Home = () => {
  return (
    <SidebarWithHeader>
      <Text color="gray.500" noOfLines={1}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <Counter/>
    </SidebarWithHeader>
  )
}

export default Home
