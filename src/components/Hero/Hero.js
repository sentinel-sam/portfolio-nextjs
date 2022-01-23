import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi,I'm Samson Odiase <br />
          A Fullstack Developer
        </SectionTitle>
        <SectionText>
          I'm enthusiastic about web technologies, and commited to building beautiful, scalable web applications with current web technologies
        </SectionText>
        {/* <Button onClick={props.handleClick}>Contact Me</Button> 
          removed props as argument to hero component
          fix the window.location below for emailjs
        */}
        <Button onClick={() => window.location = '#about'}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;