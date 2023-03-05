import { createStyles, rem } from '@mantine/core';

export const HEADER_HEIGHT = 50;

export default createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  links: {
    paddingTop: theme.spacing.sm,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },

  floatingButtons: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    right: '0',
    top: '30vh',
  },

  buttonAction: {
    margin: '5px 10px',
    paddingLeft: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '100px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
  },

  buttonUp: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    margin: '15px 10px',
    paddingLeft: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '100px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
  },
}));
