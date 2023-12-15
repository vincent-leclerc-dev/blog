import { socialNetworks } from '@/content';

import { SITE_TITLE } from '../consts';
import { CollaborateWithMe } from './footer/CollaborateWithMe';
import { Copyright } from './footer/Copyright';
import type { SocialNetworkItem } from './footer/SocialNetwork';
import { SocialNetwork } from './footer/SocialNetwork';
import { Version } from './footer/Version';
import { Tooltip } from './Tooltip';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="container mx-auto flex flex-col items-center rounded-b-3xl bg-[#111111] pt-16 md:flex-row">
        <CollaborateWithMe
          text="contact@vincentleclerc.blog"
          subject="Proposition de collaboration"
        />
        <ul
          className="mb-16 flex w-full flex-wrap items-center justify-center
    gap-[44px] md:w-1/2 lg:w-1/3"
        >
          {socialNetworks.map(({ platform, url }: SocialNetworkItem) => (
            <li key={platform}>
              <SocialNetwork config={{ platform, url }} />
            </li>
          ))}
          <li>
            <div className="group relative">
              <a href={`/rss`}>
                <img className="h-[44px] w-[44px]" alt="rss" src="/rss.svg" />{' '}
              </a>
              <Tooltip text="rss" />
            </div>
          </li>
        </ul>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between py-2 md:flex-row">
        <Copyright text={SITE_TITLE} />
        <Version />
      </div>
    </footer>
  );
};

export { Footer };
