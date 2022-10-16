import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  Image,
  Stack,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiVisualstudiocode,
  SiChakraui,
  SiGithub,
  SiJirasoftware
} from 'react-icons/si'
import Paragraph from '../components/paragraph'

const Skills = () => (
  <Layout>
    <Container mt={20}>
      <Heading as="h3" fontSize={20} mb={4}>
        Skills
      </Heading>
      <Stack
        spacing={15}
        mb={5}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        flexGrow={1}
        mt={{ base: 4, nmd: 0 }}
      >
        <Section delay={0.3}>
          <Heading as="h3" variant="section-display">
            Advanced
          </Heading>
          <List>
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiTypescript />}
              >
                Typescript
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiHtml5 />}
              >
                HTML
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiCss3 />}
              >
                CSS
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiAngular />}
              >
                Angular
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiVisualstudiocode />}
              >
                VSCode
              </Button>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-subtitle">
            Info
          </Heading>
          <Paragraph>
            The majority of the projects I worked on allowed me to acquire
            significant knowledge on these skills. Although these skills are the
            most developed - I always endeavor to learn and progress with the
            new changes.
          </Paragraph>
          <Paragraph>
            You can check my{' '}
            <Link href="/works">
              <u style={{ cursor: 'pointer' }}>works</u>
            </Link>{' '}
            and my{' '}
            <Link href="https://github.com/Axostive" target="_blank">
              <u style={{ cursor: 'pointer' }}>GitHub</u>
            </Link>{' '}
            to see where I apply my knowledge and these skills in various
            projects with different purposes.
          </Paragraph>
        </Section>
      </Stack>
      <Stack
        spacing={15}
        mb={5}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        flexGrow={1}
        mt={{ base: 4, nmd: 0 }}
      >
        <Section delay={0.6}>
          <Heading as="h3" variant="section-display">
            Experienced
          </Heading>
          <List>
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiJavascript />}
              >
                Javascript
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiMicrosoftsqlserver />}
              >
                SQL
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiGithub />}
              >
                GitHub
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiJirasoftware />}
              >
                Jira Software
              </Button>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.6}>
          <Heading as="h3" variant="section-subtitle">
            Info
          </Heading>
          <Paragraph>
            These skills were mostly developed while working at Dell and ADP
            where I engaged in big projects that where already ongoing. With the
            help of my senior team members I was able to learn swiftly how to
            use new tools and it also enabled me to progress a lot while
            developing my knowledge in these displayed skills.
          </Paragraph>
          <Paragraph>
            You can check my{' '}
            <Link
              href="https://www.linkedin.com/in/rodolfo-spier/"
              target="_blank"
            >
              <u style={{ cursor: 'pointer' }}>LinkedIn</u>
            </Link>{' '}
            profile to further understand the development of these skills.
          </Paragraph>
        </Section>
      </Stack>
      <Stack
        spacing={15}
        mb={5}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        flexGrow={1}
        mt={{ base: 4, nmd: 0 }}
      >
        <Section delay={0.9}>
          <Heading as="h3" variant="section-display">
            Developing
          </Heading>
          <List>
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiNextdotjs />}
              >
                Next.js
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiReact />}
              >
                React
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiTailwindcss />}
              >
                Tailwind CSS
              </Button>
            </ListItem>
            <br />
            <ListItem>
              <Button
                variant="outline"
                colorScheme="orange"
                leftIcon={<SiChakraui />}
              >
                Chakra UI
              </Button>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.9}>
          <Heading as="h3" variant="section-subtitle">
            Info
          </Heading>
          <Paragraph>
            As I have always been - I am an active learner, so I am consistently
            attempting to grasp the knowledge of new technologies and further
            develop my current skills. Since I mostly work with front-end
            related projects, I try to concentrate on discovering new methods
            and approach better paths to achieve goals.
          </Paragraph>
          <Paragraph>
            I am currently working on a few personal projects to demonstrate and
            improve these skills. You may check them on the{' '}
            <Link href="/works">
              <u style={{ cursor: 'pointer' }}>works</u>
            </Link>{' '}
            page.
          </Paragraph>
        </Section>
      </Stack>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
