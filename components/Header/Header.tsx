import { Header, Container, Anchor, Group, Button } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconArrowUp } from '@tabler/icons';
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

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      key={item.label}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === activeLink })}
      onClick={(event) => {
        event.preventDefault();
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
    <>
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
      {activeLink !== mainLinks.findIndex((x) => x.link === 'contact') ? (
        <div className={classes.floatingButtons}>
          <Button
            compact
            className={classes.buttonAction}
            target="_blank"
            component="a"
            href="https://www.linkedin.com/in/mitterrandmonteiro/"
            leftIcon={<IconBrandLinkedin size="45px" />}
          />
          <Button
            compact
            className={classes.buttonAction}
            target="_blank"
            component="a"
            href="https://github.com/mitterrand-monteiro/"
            leftIcon={<IconBrandGithub size="45px" />}
          />
          <Button
            compact
            className={classes.buttonAction}
            target="_blank"
            component="a"
            href="mailto:monteiromitterrand@gmail.com"
            leftIcon={<IconMail size="45px" />}
          />
        </div>
      ) : (
        <></>
      )}
      {activeLink !== mainLinks.findIndex((x) => x.link === 'home') ? (
        <div className={classes.floatingButtons}>
          <Button
            compact
            className={classes.buttonUp}
            leftIcon={<IconArrowUp size="45px" />}
            onClick={() => scrollHome()}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
