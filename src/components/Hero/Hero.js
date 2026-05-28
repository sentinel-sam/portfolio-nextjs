import React from 'react';

import { Section, SectionSubTitle, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Samson.
        </SectionTitle>
        <SectionSubTitle>
          A Data Engineer and MERN stack Web Developer.
        </SectionSubTitle>
        <SectionText>
          As a data engineer, I build and maintain data pipelines, ensuring the efficient flow of data from various sources to storage and analysis platforms.
          I work with technologies like Python, SQL, and cloud services to design scalable and reliable data solutions.
          As a fullstack developer, I build beautiful, scalable web applications with Javascript and Python and their frameworks.
          Also, I build enterprise apps and dashboards with Microsoft Power Platform and Azure.
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