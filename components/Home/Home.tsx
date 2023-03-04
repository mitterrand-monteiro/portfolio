import { Title, Text } from '@mantine/core';
import useStyles from './Home.styles';

export function Home() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Mitterrand Monteiro
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Senior Full Stack Developer
      </Text>
    </>
  );
}
