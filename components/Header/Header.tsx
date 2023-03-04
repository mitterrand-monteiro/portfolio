import { useState } from 'react';
import { Header, Container, Anchor, Group } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles, { HEADER_HEIGHT } from './Header.styles';

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
  activeLink: Number;
}

export function FixedHeader({
  scrollHome,
  scrollAbout,
  scrollExperience,
  scrollContact,
  links: mainLinks,
  activeLink,
}: FixedHeaderProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(activeLink);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      key={item.label}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === activeLink })}
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
