import { Title, Text } from '@mantine/core';
import useStyles from './About.styles';

export function About() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          About
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Senior developer with over 6 years of experience, focusing mainly on building and
        maintaining software where many projects were related to the banking, marine, pulp and paper
        and oil and gas industries. Apt to gather requirements, develop, test, deploy and maintain
        any web application. Familiar with agile methodologies and DevOps culture.
      </Text>
    </>
  );
}
