import { Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme } from '@mantine/core';
import { IconId, IconSchool } from '@tabler/icons';
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

const infoData = [
  {
    title: 'Senior Software Engineer @ BTG Pactual',
    description:
      'Performing as Technical Leader in a team of 5 other developers. Drove the development of microservices, APIs and queue managers. Led enhancements, implementing SQL and NOSQL databases services and cloud environments.',
    date: `Jun 2022 - Present (${Math.floor(monthDifference / 12)} year and ${
      monthDifference % 12
    } months)`,
    icon: IconId,
  },
  {
    title: 'Software Engineer @ Siemens Energy',
    description:
      'Worked with about 20 internal stakeholders, engineers, data scientists, cloud platform engineers, and designers in the development of a new integrated system for the marine industry.',
    date: 'Apr 2020 - Jun 2022 (2 years and 3 months)',
    icon: IconId,
  },
  {
    title: 'Software Engineer @ Siemens',
    description:
      'Worked in the maintenance and improvement of two ongoing projects related to the oil and gas industry.',
    date: 'Feb 2019 - Apr 2020 (1 year and 3 months)',
    icon: IconId,
  },
  {
    title: 'R&D Engineer @ CIn UFPE',
    description:
      'Drove research and development projects related to AI with emphasis on evolutionary algorithms to specify subgroups in large datasets and IOT with emphasis on embedded systems.',
    date: 'Mar 2017 - Feb 2019 (2 years)',
    icon: IconId,
  },
];

export function Experience() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = infoData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text className={classes.cardDate} mt="md">
        {feature.date}
      </Text>
      <Text fz="sm" c="dimmed" mt="xl">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" py="xl">
      <Title className={classes.title} align="center">
        <Text inherit variant="gradient" component="span">
          Experience
        </Text>
      </Title>
      <SimpleGrid cols={5} spacing="xl" my={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Card shadow="md" radius="md" className={classes.academicCard} padding="xl" mr="xl">
          <IconSchool size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            Computer Engineering @ Federal University of Pernambuco
          </Text>
          <Text className={classes.cardDate} mt="md">
            2016 - 2021
          </Text>
          <Text fz="sm" c="dimmed" mt="xl">
            Bachelor's Degree
          </Text>
        </Card>
        {features}
      </SimpleGrid>
    </Container>
  );
}
