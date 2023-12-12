import { SITE_TITLE } from '../consts';
import { CollaborateWithMe } from './footer/CollaborateWithMe';
import { Copyright } from './footer/Copyright';
import type { SocialNetworkItem } from './footer/SocialNetwork';
import { SocialNetwork } from './footer/SocialNetwork';
import { Version } from './footer/Version';
import { Tooltip } from './Tooltip';

const Footer = () => {
  const socialNetworks = [
    { platform: 'github', username: 'vincent-leclerc-dev' },
    { platform: 'linkedin', username: 'in/leclercvincent' },
  ];

  return (
    <footer className="z-20 w-full bg-black pb-2">
      <div className="container mx-auto flex flex-col items-center py-[44px] md:flex-row">
        <CollaborateWithMe
          text="contact@vincentleclerc.blog"
          subject="Proposition de collaboration"
        />
        <ul
          className="container mb-[44px] flex w-full flex-wrap items-center
    justify-center gap-[44px] md:w-1/3"
        >
          {socialNetworks.map(({ platform, username }: SocialNetworkItem) => (
            <li key={platform}>
              <SocialNetwork config={{ platform, username }} />
            </li>
          ))}
          <li>
            <div className="group relative flex">
              <a href={`/rss`}>
                <img className="h-[44px] w-[44px]" alt="rss" src="/rss.svg" />{' '}
              </a>
              <Tooltip text="rss" />
            </div>
          </li>
        </ul>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between pb-2 md:flex-row">
        <Copyright text={SITE_TITLE} />
        <Version />
      </div>
    </footer>
  );
};

export { Footer };
