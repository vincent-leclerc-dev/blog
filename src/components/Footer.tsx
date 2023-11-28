import { SITE_TITLE } from '../consts';
import Social from './SocialNetwork';

const Footer = () => {
  const socialNetworks = [
    { platform: 'github', username: 'vincent-leclerc-dev' },
    { platform: 'linkedin', username: 'in/leclercvincent' },
  ];

  return (
    <footer className="relative flex h-64 items-center justify-center text-white">
      <ul className="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
        <li>
          <a href="/">
            &copy; {new Date().getFullYear()} {SITE_TITLE}
          </a>
        </li>
        {socialNetworks.map(({ platform, username }) => (
          <li key={platform}>
            <Social platform={platform} username={username} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export { Footer };
