import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 35,
    },
  },
  image: {
    opacity: 0.8,
    width: 600,

    [theme.fn.smallerThan('md')]: {
      opacity: 0.2,
    },

    [theme.fn.smallerThan('xs')]: {
      width: 300,
    },
  },
}));
