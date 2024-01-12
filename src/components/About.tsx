import { Card } from './Card';

type AboutProps = {
  data?: {
    firstName: string;
    country: string;
    occupation: string;
    hobbies: string[];
  };
  bgClass?: string;
  bgHoverClass?: string;
};

export const About = ({ data }: AboutProps): JSX.Element => (
  <Card id="about" title="À propos de moi">
    <p className="flex h-full flex-wrap rounded bg-[#444444] p-4 text-white">
      {`Je suis un ${data?.occupation} passionné par mon métier. Autodidacte
      depuis 2000 et pro depuis 2011. J'ai pu acquérir des compétences dans le
      développement, la conception et la qualité de code. Je recherche un poste
      de développeur sénior de préférence sur une stack JavaScript / TypeScript.
      J'aime développer aussi bien le back que le front. J'ai récemment acquis
      de nouvelles compétences de DevOps et de Domain Driven Design.`}
    </p>
  </Card>
);
