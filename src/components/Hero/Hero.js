import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur <br />
        Mon Portfolio
      </SectionTitle>
      <SectionText>
        Je me présente, Alexandre Gosselin. Depuis mes 17 ans je me passionne pour le développement d'applications web, mobiles mais aussi de jeux.
        Sur ce site, vous retrourez les projets sur lesquels j'ai pu collaborer, voir les outils que j'utilise ainsi que me contacter directement. <br />
        Bonne visite !
      </SectionText>
      <Button>Me contacter !</Button>
    </LeftSection>
  </Section>
);

export default Hero;