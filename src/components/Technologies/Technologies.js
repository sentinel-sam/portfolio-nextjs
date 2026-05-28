import React from 'react';
import { DiFirebase, DiReact, DiNodejsSmall} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with frontend and backend technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            ReactJS <br />
            Redux <br />
            NextJS <br />
            Jest <br />
            JavaScript(ES6) <br />
            EJS <br />
            Bootstrap <br />
            Styled Components <br />
            TailwindCSS/SaSS <br />
            HTML5/CSS3<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJS with NPM/NVM <br />
            ExpressJS Server <br />
            Git, Github (CI/CD) & Bitbucket <br />
            Firebase <br />
            MongdoDB & Mongoose <br />
            Sequelize <br />
            MySQL <br />
            Sanity.io<br />
            Contentful <br />
            Cloudinary <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Microsoft Office 365 & Power Platform </ListTitle>
          <ListParagraph>
            Microsoft Power Apps <br />
            Microsoft Power Automate <br />
            Microsoft Power BI <br />
            Microsoft Azure <br />
            Microsoft Excel <br />
            Microsoft Access <br />
            Microsoft Powerpoint <br />
            Microsoft Power Pages <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
