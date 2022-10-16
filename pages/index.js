import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Image,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mt={20}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello there! I&apos;m a developer currently living in Brazil.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rodolfo Spier
            </Heading>
            <p>
              {' '}
              Compare yourself to who you were yesterday, not to who someone
              else is today.
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                borderRadius="full"
                src="/images/profilePic.JPEG"
                alt="Profile image"
                width="100%"
                height="auto"
                zoom=""
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Introduction
          </Heading>
          <Paragraph>
            I am a very active person, currently endeavoring to explore more of
            that. Presently practicing to run a Marathon which is an objective
            that I started aiming for at the beginning of 2022 - with the
            passing of my grandmother, which is a second mother to me, who is my
            inspiration for so many things, I am proud of pushing and testing my
            limits and especially completing this goal and nominating this
            future Marathon to her.
          </Paragraph>
          <Paragraph>
            Also, as for my career goals - at this time I am studying and
            learning a lot of new things, especially in the front-end
            development part, diving into new technologies, courses, and
            exploring the possibilities of using my abilities and leadership
            skills to spearhead projects and achieve something special for us. I
            like to work out, read, talk, explore, discuss and motivate people
            in my community for them to achieve their best. Always humble to
            recognize my personal insufficiency and the willingness to learn -
            and that is a little bit of me.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Rio Grande do Sul, Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2016-2018</BioYear>
            Completed the IT Internet Technician program at Universidade
            Feevale.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Currently studying - Technologist System Analysis at Universidade do
            Vale do Rio dos Sinos.
          </BioSection>
          <BioSection>
            <BioYear>2018-2021</BioYear>
            Worked at Dell - BR, Rio Grande do Sul.
          </BioSection>
          <BioSection>
            <BioYear>2021-2022</BioYear>
            Worked at ADP - BR, Rio Grande do Sul (Remote - US).
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Working at Computing System Innovation - BR, Rio Grande do Sul
            (Remote - US).
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Axostive" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Axostive
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/rodolfo.spier" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @rodolfo.spier
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
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
