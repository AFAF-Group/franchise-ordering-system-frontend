import { Text } from '@chakra-ui/react'
import RegistrationForm from 'components/Form/Form'
import SidebarWithHeader from 'components/Sidebar'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router"

const Order = () => {
  const router = useRouter()

  useEffect(() => {
    const authUser = false;

    // if there is no authenticated user, redirect to login page_

    if (!authUser) {
      router.push("/login")
    }
  }, [])
  const [data, setData] = useState<{
    enrollmentId: string;
    name: string;
    email: string;
  }>();

  if(data){}
  
  return (
    <SidebarWithHeader>
      <Text color="gray.500" noOfLines={1}>
        Order
      </Text>
      <RegistrationForm onRegistered={setData}/>

    </SidebarWithHeader>
  )
}

export default Order
