import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  useColorModeValue,
  List,
  ListItem,
  Button
} from '@chakra-ui/react'
import { IoMail, IoLogoLinkedin } from 'react-icons/io5'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Link from 'next/link'

const About = () => (
  <Layout>
    <Container mt={20}>
      <Heading as="h3" fontSize={20} mb={4}>
        About
      </Heading>
      <Section delay={0.3}>
        <Paragraph>
          My portfolio was heavily inspired by{' '}
          <Link href="https://www.craftz.dog/" target="_blank">
            <u style={{ cursor: 'pointer' }}>Takuya Matsuyama's</u>
          </Link>{' '}
          work. I like to change my portfolio from time to time to learn new
          technologies and get to comprehend new design views and ways to
          express ourselves differently while developing a "door" for people to
          know you and your work.
        </Paragraph>
        <br />
        <Paragraph>
          Built with <b>Next.js</b> - A React framework with hybrid static &
          server rendering, and route pre-fetching, etc.
          <br />
          <b>Chakra UI</b> - A simple, modular and accessible component library
          for React.
          <br />
          <b>Framer Motion</b> - An animation library for React.
        </Paragraph>
        <br />
        <Paragraph>
          In case you are wondering what is the home icon. Check out{' '}
        </Paragraph>
        <Link
          href="https://store.steampowered.com/app/367520/Hollow_Knight"
          target="_blank"
        >
          <u style={{ cursor: 'pointer' }}>Hollow Knight</u>
        </Link>
        .
      </Section>
      <Section delay={0.6}>
        <Box
          borderRadius="lg"
          mt={12}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading as="h3" fontSize={20} mb={1}>
            Contact Me
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:rodolfo.spier@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMail />}
                >
                  rodolfo.spier@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/rodolfo-spier/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @rodolfo-spier
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
