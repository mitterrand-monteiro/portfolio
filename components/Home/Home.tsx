import {
  Title,
  Text,
  Image,
  Grid,
  SimpleGrid,
  useMantineTheme,
  Button,
  Container,
} from '@mantine/core';
import useStyles from './Home.styles';

interface HomeButtonProps {
  scrollAbout: Function;
}

export function Home({ scrollAbout }: HomeButtonProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <>
      <SimpleGrid cols={3} mt={100}>
        <Container className={classes.image}>
          <Image
            src={
              theme.colorScheme === 'dark'
                ? 'https://i.ibb.co/BsL9Fbq/DarkLogo.png'
                : 'https://i.ibb.co/gm7fTCZ/Logo.png'
            }
            alt="MM"
          />
        </Container>
        <Grid>
          <Grid.Col>
            <Title className={classes.title} align="start" mt={100}>
              Mitterrand Monteiro
            </Title>
            <Text color="dimmed" align="end" size="lg" mx="auto" mt="xl">
              Senior Full Stack Developer
            </Text>
          </Grid.Col>
          <Grid.Col ml={10}>
            <Button
              size="lg"
              onClick={() => {
                scrollAbout();
              }}
            >
              About me
            </Button>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </>
  );
}
