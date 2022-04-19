import React from 'react';
import { DiFirebase, DiReact, DiNodejsSmall } from 'react-icons/di';
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
            NodeJS <br />
            NPM/NVM <br />
            ExpressJS Server <br />
            Github (CI/CD)  <br />
            Bitbucket <br />
            Git <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DataBase/CMS</ListTitle>
          <ListParagraph>
            Firebase <br />
            MongdoDB <br />
            Mongoose <br />
            Sequelize <br />
            MySQL <br />
            Sanity.io<br />
            Contentful <br />
            Cloudinary <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
