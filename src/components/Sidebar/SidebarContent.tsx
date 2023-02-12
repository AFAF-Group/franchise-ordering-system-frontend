import React from 'react'
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  useColorMode,
  Switch
} from '@chakra-ui/react'
import LinkItems from './LinkItem'
import NavItem from 'components/Navbar'
import Link from 'next/link'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={link.href} passHref key={link.name}>
            <NavItem icon={link.icon}>{link.name}</NavItem>
          </Link>
        ))}
        <Box pos="fixed" p="8" mt="6">
          <Switch id="theme" onChange={toggleColorMode} />
          <Text>{colorMode === 'light' ? 'Light' : 'Dark'} Mode On</Text>
        </Box>
      </Box>
    </>
  )
}

export default SidebarContent
