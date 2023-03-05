import { Text, SimpleGrid, Container, rem, Title } from '@mantine/core';
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
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconBrandPython,
    title: 'Python (5 years)',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconBrandVue,
    title: 'Vue.js (3 years)',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
  {
    icon: IconBrandReact,
    title: 'React (1 year)',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconDatabase,
    title: 'SQL / NOSQL (6 years)',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconBrandDocker,
    title: 'Docker / Kubernetes (5 years)',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
  {
    icon: IconBrandAmazon,
    title: 'AWS (2 years)',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconTypography,
    title: 'Microsoft Azure (4 years)',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
  {
    icon: IconMessages,
    title: 'Message broker (4 years)',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
];

export function About() {
  const items = aboutData.map((item) => <AboutItem {...item} key={item.title} />);
  const { classes } = useStyles();

  return (
    <Container mt={30} mb={30} size="lg">
      <Title className={classes.title} align="center" mt={100} mb={50}>
        <Text inherit variant="gradient" component="span">
          About
        </Text>
      </Title>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
