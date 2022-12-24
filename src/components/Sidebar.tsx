import { gql, useQuery } from '@apollo/client'
import { Box, Text, VStack } from '@chakra-ui/react'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      lessonType
      availableAt
      slug
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    lessonType: 'live' | 'class'
    availableAt: Date
    slug: string
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  console.log(data?.lessons)

  return (
    <Box
      w="21.75rem"
      bg="gray.700"
      p="6"
      borderLeft="1px"
      borderColor="gray.600"
    >
      <Text
        as="span"
        fontWeight="bold"
        fontSize="2xl"
        pb="6"
        borderBottom="1px solid"
        borderColor="gray.500"
        display="block"
      >
        Cronograma de aulas
      </Text>

      <VStack gap={8} mt="6" align="start">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
              availableAt={new Date(lesson.availableAt)}
            />
          )
        })}
      </VStack>
    </Box>
  )
}
