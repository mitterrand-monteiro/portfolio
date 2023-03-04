import { useScrollIntoView } from '@mantine/hooks';
import { Paper } from '@mantine/core';
import { FixedHeader } from '../components/Header/Header';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
import { Experience } from '../components/Experience/Experience';
import { Contact } from '../components/Contact/Contact';

export default function HomePage() {
  const { scrollIntoView: scrollIntoHome, targetRef: homeRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollIntoAbout, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollIntoExperience, targetRef: experienceRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollIntoContact, targetRef: contactRef } =
    useScrollIntoView<HTMLDivElement>();

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
      />
      <Paper ref={homeRef}>
        <Home />
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
