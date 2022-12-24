import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Event() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  const { slug } = useParams<{ slug: string }>()

  return (
    <Box display="flex" flexDir="column" minH="100vh">
      <Header />

      <Flex flex={1}>
        {slug ? <Video lessonSlug={slug} /> : <Box flex={1}></Box>}
        {isWideVersion && <Sidebar />}
      </Flex>
    </Box>
  )
}
