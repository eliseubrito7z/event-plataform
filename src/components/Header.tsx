import { Heading } from '@chakra-ui/react'
import { Logo } from './Logo'

export function Header() {
  return (
    <Heading
      w="100%"
      py="5"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.700"
      borderBottom="1px solid"
      borderColor="gray.600"
    >
      <Logo />
    </Heading>
  )
}
