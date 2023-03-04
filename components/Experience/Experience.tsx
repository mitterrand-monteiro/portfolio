import { Title, Text } from '@mantine/core';
import useStyles from './Experience.styles';

export function Experience() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          Experience
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Python (5 years) • SQL (6 years) • Docker / Kubernetes (5 years) • C# (6 years) • Vue.js (3
        years) • React.js (2 years) • AWS (2 years) • Microsoft Azure (3 years) • NOSQL (2 years) •
        Message Broker (4 years)
      </Text>
    </>
  );
}
