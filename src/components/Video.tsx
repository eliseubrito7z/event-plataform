import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Link,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { Player, Youtube, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  ImageSquare,
} from 'phosphor-react'
import { gql, useQuery } from '@apollo/client'

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface GetLessonBySlugInterface {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarUrl: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  const { data } = useQuery<GetLessonBySlugInterface>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.lessonSlug,
    },
  })

  console.log(data)

  return (
    <Stack flex={1}>
      <VStack w="100%" h="100%" align="center" justify="center" bg="black">
        {data !== undefined ? (
          <>
            <AspectRatio
              h="100%"
              w="100%"
              maxW={1100}
              maxH="65vh"
              ratio={16 / 9}
            >
              <Player>
                <Youtube videoId={data!.lesson.videoId} />
                <DefaultUi />
              </Player>
            </AspectRatio>

            <VStack w="100%" p="8" maxW="1100px" mx="auto">
              <Stack
                direction={isWideVersion ? 'row' : 'column'}
                gap="12"
                align="start"
                w="100%"
              >
                <Box w="100%">
                  <Text as="h1" fontSize="2xl" fontWeight="bold">
                    {data.lesson.title}
                  </Text>
                  <Text as="p" mt="4" color="gray.200" lineHeight="1.625rem">
                    {data.lesson.description}
                  </Text>

                  <Flex align="center" gap={4} mt="6">
                    <Image
                      alt=""
                      src="https://github.com/eliseubrito7z.png"
                      h={16}
                      w={16}
                      borderRadius="full"
                      border="2px"
                      borderColor="blue.500"
                    />

                    <Box lineHeight="1.125">
                      <Text
                        as="strong"
                        fontSize="2xl"
                        fontWeight="bold"
                        display="block"
                      >
                        Eliseu Brito
                      </Text>
                      <Text
                        as="span"
                        fontSize="sm"
                        color="gray.200"
                        display="block"
                      >
                        CTO @ Rocketseat
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                <VStack gap="4">
                  <Link
                    _hover={{ background: 'green.700' }}
                    href=""
                    variant="buttonLink"
                    bg="green.500"
                    // transition="colors ease-in-out"
                  >
                    <DiscordLogo size={24} />
                    <Text whiteSpace="nowrap">Comunidade do discord</Text>
                  </Link>
                  <Link
                    href=""
                    variant="buttonLink"
                    border="1px"
                    borderColor="blue.500"
                    color="blue.500"
                    w="100%"
                    _hover={{ background: 'blue.500', color: 'gray.900' }}
                  >
                    <Lightning size={24} />
                    Acesse o desafio
                  </Link>
                </VStack>
              </Stack>

              <Flex
                gap={8}
                pt={20}
                direction={isWideVersion ? 'row' : 'column'}
              >
                <Link
                  bg="gray.700"
                  h="100%"
                  borderRadius="4px"
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  gap={6}
                  _hover={{ background: 'gray.600' }}
                >
                  <Box
                    bg="green.700"
                    h="full"
                    p={6}
                    alignItems="center"
                    display="flex"
                  >
                    <FileArrowDown size={40} />
                  </Box>
                  <Box py={6} lineHeight="1.125">
                    <Text as="strong" fontSize="2xl">
                      Material complementar
                    </Text>
                    <Text as="p" fontSize="sm" color="gray.200" mt={2}>
                      Acesse o material complementar para acelerar o seu
                      desenvolvimento
                    </Text>
                  </Box>
                  <Box h="full" display="flex" p={6} alignItems="center">
                    <CaretRight size={24} />
                  </Box>
                </Link>

                <Link
                  bg="gray.700"
                  h="100%"
                  borderRadius="4px"
                  overflow="hidden"
                  display="flex"
                  alignItems="stretch"
                  gap={6}
                  _hover={{ background: 'gray.600' }}
                >
                  <Box
                    bg="green.700"
                    h="full"
                    p={6}
                    alignItems="center"
                    display="flex"
                  >
                    <ImageSquare size={40} />
                  </Box>
                  <Box py={6} lineHeight="1.125">
                    <Text as="strong" fontSize="2xl">
                      Wallpapers exclusivos
                    </Text>
                    <Text as="p" fontSize="sm" color="gray.200" mt={2}>
                      Baixe wallpapers exclusivos do Ignite Lab e personalize a
                      sua máquina
                    </Text>
                  </Box>
                  <Box h="full" p={6} alignItems="center" display="flex">
                    <CaretRight size={24} />
                  </Box>
                </Link>
              </Flex>
            </VStack>
          </>
        ) : (
          <Spinner />
        )}
      </VStack>
    </Stack>
  )
}
