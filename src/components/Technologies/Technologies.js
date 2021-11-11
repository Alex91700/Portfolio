import React from 'react';
import { DiDatabase, DiFirebase, DiGit, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech"> 
    <SectionDivider/>
    <br/> <br/> <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Voici les technologies avec lesquelles j'ai pu travailler au cours de mon apprentissage du développement :
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML/CSS/JS <br/>
            React.JS <br/>
            React Native <br/>
            Angular Ionic
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size = "3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            MySQL <br/>
            NodeJS <br/>
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size = "3rem"/>
        <ListContainer>
          <ListTitle>Autres</ListTitle>
          <ListParagraph>
            Git/GitHub <br/>
            Heroku <br/>
            Bureautique <br/>
            UML
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
