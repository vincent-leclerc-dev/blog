import PropTypes from 'prop-types';

export type SocialNetworkItem = {
  platform: string;
  username: string;
};

interface Props {
  config: SocialNetworkItem;
  className?: string;
}

export const SocialNetwork = ({ config }: Props): JSX.Element => {
  return (
    <a
      className="relative h-[30px] w-[30px]"
      href={`https://www.${config.platform}.com/${config.username}`}
      target="_blank"
    >
      <img
        className="relative h-[30px] w-[30px]"
        alt={config.platform}
        src={`/${config.platform}.svg`}
      />
    </a>
  );
};

SocialNetwork.propTypes = {
  config: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};
