import { gql, useMutation } from '@apollo/client'
import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blurBg from '../assets/blur-bg.png'
import { Logo } from '../components/Logo'

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { data, loading }] = useMutation(
    CREATE_SUBSCRIBE_MUTATION,
  )

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <Box
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      h="100%"
      maxW="100vw"
      maxH="100vh"
      bgImage={blurBg}
      display="flex"
      flexDir="column"
      overflow="hidden"
      p={4}
    >
      <HStack
        w="100%"
        maxW={1100}
        align="center"
        justify="space-between"
        mt={20}
        mx="auto"
      >
        <Box maxW={640}>
          <Logo />

          <Text
            as="h1"
            mt={8}
            fontSize="2.5rem"
            lineHeight="1.125"
            sx={{ strong: { color: 'blue.500' } }}
          >
            Construa uma <strong>aplicação completa</strong>, do zero, com{' '}
            <strong>React</strong>
          </Text>
          <Text as="p" mt={4} color="gray.200" fontSize="1rem" lineHeight="1.6">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </Text>
        </Box>

        <Box
          p={8}
          bg="gray.700"
          border="1px"
          borderColor="gray.500"
          borderRadius={4}
        >
          <Text as="strong" fontSize="2xl" mb={6} display="block">
            Inscreva-se gratuitamente
          </Text>

          <FormControl
            as="form"
            onSubmit={handleSubscribe}
            display="flex"
            flexDir="column"
            w="full"
            gap={2}
          >
            <Input
              type="text"
              placeholder="Seu nome completo"
              bg="gray.900"
              variant="unstyled"
              borderRadius={4}
              p="1rem 1.25rem"
              h={14}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              variant="unstyled"
              type="email"
              placeholder="Digite seu e-mail"
              bg="gray.900"
              borderRadius={4}
              p="1rem 1.25rem"
              h={14}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Button
              type="submit"
              mt={4}
              bg="green.500"
              py={4}
              borderRadius={4}
              fontWeight="bold"
              fontSize="sm"
              _hover={{ background: 'green.700' }}
              transition="all 0.1s ease"
              isLoading={loading}
            >
              <Text casing="uppercase">Garantir minha vaga</Text>
            </Button>
          </FormControl>
        </Box>
      </HStack>

      <Image
        alt=""
        src="/src/assets/code-mockup.png"
        maxW="fit-content"
        mx="auto"
      />
    </Box>
  )
}
