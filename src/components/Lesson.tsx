import { Heading, Link, Text, VStack } from '@chakra-ui/react'
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link as RouterLink, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE ' • ' d 'de' MMMM ' • ' k'h'mm ",
    {
      locale: ptBR,
    },
  )

  const isActiveLesson = slug === props.slug

  return (
    <Link
      as={RouterLink}
      w="100%"
      style={{ textDecoration: 'none' }}
      _hover={{
        div: {
          borderColor: 'green.500',
        },
      }}
      to={`/event/lesson/${props.slug}`}
    >
      <Text as="span" color="gray.300">
        {availableDateFormatted}
      </Text>

      <VStack
        borderRadius="4px"
        border="1px"
        borderColor="gray.500"
        p="4"
        mt="2"
        align="start"
        bg={isActiveLesson ? 'green.500' : ''}
      >
        <Heading
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          {isLessonAvailable ? (
            <Text
              as="span"
              display="flex"
              gap="2"
              alignItems="center"
              fontSize="sm"
              fontWeight="medium"
              color={isActiveLesson ? 'white' : 'blue.500'}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </Text>
          ) : (
            <Text
              as="span"
              display="flex"
              gap="2"
              alignItems="center"
              fontSize="sm"
              fontWeight="medium"
              color="orange.500"
            >
              <Lock size={20} />
              Em breve
            </Text>
          )}
          <Text
            as="span"
            fontSize="xs"
            borderRadius="4px"
            fontWeight="bold"
            color="white"
            px="2"
            py="0.125rem"
            border="1px"
            borderColor={isActiveLesson ? '' : 'green.300'}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </Text>
        </Heading>

        <Text
          as="strong"
          color={isActiveLesson ? 'white' : 'gray.200'}
          pt="5"
          display="block"
        >
          {props.title}
        </Text>
      </VStack>
    </Link>
  )
}
