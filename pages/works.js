import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Works = () => (
  <Layout>
    <Container mt={20}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works - IN PROGRESS!
      </Heading>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
