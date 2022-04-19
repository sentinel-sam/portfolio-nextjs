import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Samson.<br />
          A MERN stack Developer.
        </SectionTitle>
        <SectionText>
          As a fullstack developer, I build beautiful, scalable web applications with Javascript and its frameworks.
          I love coding and I'm interested in building amazing web applications with great User Interface and User Experience...
        </SectionText>
        {/* <Button onClick={props.handleClick}>Contact Me</Button> 
          removed props as argument to hero component
          fix the window.location below for emailjs
        */}
        <Button onClick={() => window.location = '#footer'}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;