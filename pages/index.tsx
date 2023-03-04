import { useEffect, useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Paper } from '@mantine/core';
import { FixedHeader } from '../components/Header/Header';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
import { Experience } from '../components/Experience/Experience';
import { Contact } from '../components/Contact/Contact';
import { HEADER_HEIGHT } from '../components/Header/Header.styles';

export default function HomePage() {
  const { scrollIntoView: scrollIntoHome, targetRef: homeRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollIntoAbout, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollIntoExperience, targetRef: experienceRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollIntoContact, targetRef: contactRef } =
    useScrollIntoView<HTMLDivElement>();

  const [isScrolling, setIsScrolling] = useState(false);
  const [active, setActive] = useState(0);

  const handleScrollStop = () => {
    const position = window.pageYOffset - HEADER_HEIGHT;

    if (position <= homeRef.current.offsetTop) {
      setActive(0);
    } else if (position <= aboutRef.current.offsetTop) {
      setActive(1);
    } else if (position <= experienceRef.current.offsetTop) {
      setActive(2);
    } else {
      setActive(3);
    }
  };

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
      }, 100);
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
    <>
      <FixedHeader
        scrollHome={scrollIntoHome}
        scrollAbout={scrollIntoAbout}
        scrollExperience={scrollIntoExperience}
        scrollContact={scrollIntoContact}
        links={[
          { label: 'Home', link: 'home' },
          { label: 'About', link: 'about' },
          { label: 'Experience', link: 'experience' },
          { label: 'Contact', link: 'contact' },
        ]}
        activeLink={active}
      />
      <Paper ref={homeRef}>
        <Home scrollAbout={scrollIntoAbout} />
      </Paper>
      <Paper ref={aboutRef}>
        <About />
      </Paper>
      <Paper ref={experienceRef}>
        <Experience />
      </Paper>
      <Paper ref={contactRef}>
        <Contact />
      </Paper>
    </>
  );
}
