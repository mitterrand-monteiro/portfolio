import { Title, Text, Group, Button, Container, SimpleGrid } from '@mantine/core';
import useStyles from './Contact.styles';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons';

export function Contact() {
  const { classes } = useStyles();

  return (
    <Container size="xl" py="xl">
      <Title className={classes.title} align="center">
        <Text inherit variant="gradient" component="span">
          Contact
        </Text>
      </Title>
      <SimpleGrid cols={3} spacing="xl" my={100} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Group position="center">
          <Button
            compact
            className={classes.buttonAction}
            radius="md"
            target="_blank"
            component="a"
            href="https://www.linkedin.com/in/mitterrandmonteiro/"
            leftIcon={<IconBrandLinkedin size="200" />}
          />
          <Text color="dimmed" align="center" size="lg">
            linkedin.com/in/mitterrandmonteiro/
          </Text>
        </Group>
        <Group position="center">
          <Button
            compact
            className={classes.buttonAction}
            radius="md"
            target="_blank"
            component="a"
            href="https://github.com/mitterrand-monteiro/"
            leftIcon={<IconBrandGithub size="200" />}
          />
          <Text color="dimmed" align="center" size="lg">
            github.com/mitterrand-monteiro/
          </Text>
        </Group>
        <Group position="center">
          <Button
            compact
            className={classes.buttonAction}
            radius="md"
            target="_blank"
            component="a"
            href="mailto:monteiromitterrand@gmail.com"
            leftIcon={<IconMail size="200" />}
          />
          <Text color="dimmed" align="center" size="lg">
            monteiromitterrand@gmail.com
          </Text>
        </Group>
      </SimpleGrid>
    </Container>
  );
}
