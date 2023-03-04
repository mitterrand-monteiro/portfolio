import { useEffect, useState } from 'react';
import { createStyles, Header, Container, Anchor, Group } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const HEADER_HEIGHT = 64;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    borderBottom: '2px solid transparent',
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
}));

interface LinkProps {
  label: string;
  link: string;
}

interface FixedHeaderProps {
  links: LinkProps[];
  scrollHome: Function;
  scrollAbout: Function;
  scrollExperience: Function;
  scrollContact: Function;
}

export function FixedHeader({
  scrollHome,
  scrollAbout,
  scrollExperience,
  scrollContact,
  links: mainLinks,
}: FixedHeaderProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollStop = () => {
    const position = window.pageYOffset;
    setActive(Math.round(position % 4));
  };

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      key={item.label}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        switch (item.link) {
          case 'home':
            scrollHome();
            break;

          case 'about':
            scrollAbout();
            break;

          case 'experience':
            scrollExperience();
            break;

          case 'contact':
            scrollContact();
            break;

          default:
            scrollHome();
            break;
        }
      }}
    >
      {item.label}
    </Anchor>
  ));

  useEffect(() => {
    let timeout: number | null = null;

    const handleScroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      setIsScrolling(true);

      timeout = window.setTimeout(() => {
        setIsScrolling(false);
        handleScrollStop();
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <Header height={HEADER_HEIGHT} mb={120} fixed={true}>
      <Container className={classes.inner}>
        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <ColorSchemeToggle />
      </Container>
    </Header>
  );
}
