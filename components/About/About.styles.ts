import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  about: {
    position: 'relative',
    paddingTop: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
  },

  overlay: {
    position: 'absolute',
    height: rem(90),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },

  leftTitle: {
    [theme.fn.smallerThan('xs')]: {
      fontSize: 20,
    },
  },

  subtitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  body: {
    display: 'flex',
    marginBottom: '20px',
  },
}));
