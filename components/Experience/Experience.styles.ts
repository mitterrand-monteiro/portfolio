import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  experience: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
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

  subtitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
