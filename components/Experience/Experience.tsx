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
        Senior developer with over 6 years of experience, focusing mainly on building and
        maintaining software where many projects were related to the banking, marine, pulp and paper
        and oil and gas industries. Apt to gather requirements, develop, test, deploy and maintain
        any web application. Familiar with agile methodologies and DevOps culture.
      </Text>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Overall experience: Python (5 years) SQL (6 years) Docker / Kubernetes (5 years) C# (6
        years) Vue.js (3 years) React.js (2 years) AWS (2 years) Microsoft Azure (3 years) NOSQL (2
        years) Message Broker (4 years)
      </Text>
    </>
  );
}
