import { Title, Text, ActionIcon, Group } from '@mantine/core';
import useStyles from './Contact.styles';
import { IconBrandLinkedin, IconBrandGithub  } from '@tabler/icons';

export function Contact() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          Contact
        </Text>
      </Title>
      <Group position="center">
        <ActionIcon size={80} target="_blank" component="a" href="https://www.linkedin.com/in/mitterrandmonteiro/">
          <IconBrandLinkedin size="80"/>
        </ActionIcon>
        <ActionIcon size={80} target="_blank" component="a" href="https://github.com/mitterrand-monteiro/">
          <IconBrandGithub size="80"/>
        </ActionIcon>
      </Group>
    </>
  );
}
