import classNames from 'classnames';

import { SITE_TITLE } from '../consts';
import { CollaborateWithMe } from './footer/CollaborateWithMe';
import { Copyright } from './footer/Copyright';
import type { SocialNetworkItem } from './footer/SocialNetwork';
import { SocialNetwork } from './footer/SocialNetwork';

const Footer = () => {
  const socialNetworks = [
    { platform: 'github', username: 'vincent-leclerc-dev' },
    { platform: 'linkedin', username: 'in/leclercvincent' },
  ];

  const socialNetworksClasses = classNames([
    'flex',
    'gap-[30px]',
    'items-center',
    'justify-end',
  ]);

  return (
    <footer className="h-[275px] w-[1440px] bg-black">
      <div className="relative left-[190px] top-[60px] flex h-[185px] w-[1060px] flex-col items-center justify-between">
        <div className="relative flex w-[1060px] flex-[0_0_auto] items-center justify-between">
          <CollaborateWithMe
            text="contact@vincentleclerc.blog"
            subject="Proposition de collaboration"
          />
          <ul className={socialNetworksClasses}>
            {socialNetworks.map(({ platform, username }: SocialNetworkItem) => (
              <li key={platform}>
                <SocialNetwork config={{ platform, username }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex w-[1060px] flex-[0_0_auto] items-center justify-center">
          <Copyright text={SITE_TITLE} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
