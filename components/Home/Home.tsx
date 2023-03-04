import {
  Title,
  Text,
  Image,
  Grid,
  SimpleGrid,
  useMantineTheme,
  ActionIcon,
  Button,
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons';
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
        <Image
          width={600}
          src={
            theme.colorScheme === 'dark'
              ? 'https://i.ibb.co/BsL9Fbq/DarkLogo.png'
              : 'https://i.ibb.co/gm7fTCZ/Logo.png'
          }
          alt="MM"
        />
        <Grid>
          <Grid.Col>
            <Title className={classes.title} align="center" mt={100}>
              Mitterrand Monteiro
            </Title>
          </Grid.Col>
          <Grid.Col>
            <Button
              onClick={() => {
                scrollAbout();
              }}
            >
              About me
            </Button>
          </Grid.Col>
          <Grid.Col>
            <Text color="dimmed" align="center" size="lg" mx="auto" mt="xl">
              Senior Full Stack Developer
            </Text>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col>
            <ActionIcon
              size={80}
              target="_blank"
              component="a"
              href="https://www.linkedin.com/in/mitterrandmonteiro/"
            >
              <IconBrandLinkedin size="80" />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col>
            <ActionIcon
              size={80}
              target="_blank"
              component="a"
              href="https://github.com/mitterrand-monteiro/"
            >
              <IconBrandGithub size="80" />
            </ActionIcon>
          </Grid.Col>
          <Grid.Col>
            <ActionIcon
              size={80}
              target="_blank"
              component="a"
              href="mailto:mitterrandvieira@gmail.com"
            >
              <IconMail size="80" />
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </>
  );
}
