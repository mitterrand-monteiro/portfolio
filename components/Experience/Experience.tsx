import { Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons';
import useStyles from './Experience.styles';

function getMonthDifference(
  d1: { getFullYear: () => number; getMonth: () => number },
  d2: { getFullYear: () => number; getMonth: () => number }
) {
  let monthDifference;
  monthDifference = (d2.getFullYear() - d1.getFullYear()) * 12;
  monthDifference -= d1.getMonth();
  monthDifference += d2.getMonth() + 1;
  return monthDifference <= 0 ? 0 : monthDifference;
}

const monthDifference = getMonthDifference(new Date(2022, 6), new Date());

const mockdata = [
  {
    title: 'Senior Software Engineer @ BTG Pactual',
    description:
      'Performing as Technical Leader in a team of 5 other developers. Drove the development of 2 .NET microservices (one of them responsible for external payments and the other for collecting taxes from investment funds) and a RabbitMQ queue manager. Led enhancements, implementing buckets and relational database services on AWS.',
    date: `Jun 2022 - Present (${monthDifference} months)`,
    icon: IconGauge,
  },
  {
    title: 'Software Engineer @ Siemens Energy',
    description:
      'Worked with about 20 internal stakeholders, engineers, data scientists, cloud platform engineers, and designers in the development of a new integrated system for the marine industry',
    date: 'Feb 2019 - Jun 2022 (3 years and 6 months)',
    icon: IconUser,
  },
  {
    title: 'R&D Engineer @ CIn UFPE',
    description:
      'Drove 2 research and development projects: Artificial Intelligence with emphasis on evolutionary algorithms to specify subgroups in large datasets and IOT with emphasis on embedded systems.',
    date: 'Mar 2017 - Feb 2019 (2 years)',
    icon: IconCookie,
  },
];

export function Experience() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text className={classes.cardDate}>{feature.date}</Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title className={classes.title} align="center">
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
      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
