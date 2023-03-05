import { Text, SimpleGrid, Container, rem, Title, Card } from '@mantine/core';
import {
  IconBrandAmazon,
  IconBrandDocker,
  IconBrandPython,
  IconBrandReact,
  IconBrandVue,
  IconDatabase,
  IconHexagonLetterC,
  IconMessages,
  IconTypography,
} from '@tabler/icons';
import useStyles from './About.styles';

interface AboutItemProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

export function AboutItem({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: AboutItemProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.about, className)} {...others}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.subtitle}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const aboutData = [
  {
    icon: IconHexagonLetterC,
    title: 'C# (5 years)',
    description: 'Developed .NET 5, 6 and .NET Core 3.1 microservices and APIs.',
  },
  {
    icon: IconBrandPython,
    title: 'Python (5 years)',
    description: 'Developed Python 3 microservices and APIs with Flask.',
  },
  {
    icon: IconBrandVue,
    title: 'Vue.js (3 years)',
    description: 'Built web frontend applications using Vue.js.',
  },
  {
    icon: IconBrandReact,
    title: 'React (1 year)',
    description: 'This website was made with React and typescript. Check it out on my github page.',
  },
  {
    icon: IconDatabase,
    title: 'SQL / NOSQL (6 years)',
    description:
      'Worked with the following databases managers: SQLServer, MySQL, Postgres and Redis.',
  },
  {
    icon: IconBrandDocker,
    title: 'Docker / Kubernetes (5 years)',
    description:
      'Drove the containerization and container orchestration of web applications, Nginx proxy servers, REST APIs and databases using Docker and Kubernetes.',
  },
  {
    icon: IconTypography,
    title: 'Microsoft Azure (4 years)',
    description: 'Implemented CI/CD pipelines and managed cloud environments on Azure.',
  },
  {
    icon: IconBrandAmazon,
    title: 'AWS (2 years)',
    description: 'Implemented S3 buckets, relational database and SQS services on AWS.',
  },
  {
    icon: IconMessages,
    title: 'Message broker (4 years)',
    description:
      'Worked with the following queue managers: RabbitMQ, Apache Kafka, IBM MQ and AWS SQS.',
  },
];

export function About() {
  const items = aboutData.map((item) => <AboutItem {...item} key={item.title} />);
  const { classes } = useStyles();

  return (
    <Container mt={30} mb={30} size="xl">
      <Title className={classes.title} align="center" mt={100} mb={30}>
        <Text inherit variant="gradient" component="span">
          About
        </Text>
      </Title>
      <div className={classes.body}>
        <Card shadow="xl" radius="sm" padding="xl" mr="lg">
          <Title>
            <Text inherit variant="gradient" component="span">
              Senior Developer
            </Text>
          </Title>
          <Text color="dimmed" align="start" size="lg" sx={{ maxWidth: 700 }}>
            with over 6 years of experience, focusing mainly on building and maintaining software
            where many projects were related to the banking, marine, pulp and paper and oil and gas
            industries. Apt to gather requirements, develop, test, deploy and maintain any web
            application. Familiar with agile methodologies and DevOps culture.
          </Text>
        </Card>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={30}>
          {items}
        </SimpleGrid>
      </div>
      {/* <Button fullWidth>Click to see more</Button> */}
    </Container>
  );
}
