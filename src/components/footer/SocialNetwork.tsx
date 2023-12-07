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
    <div className="group relative flex">
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
      <span
        className="absolute left-1/2 m-2 mx-auto -translate-x-1/2 translate-y-full rounded-xl bg-blue p-2 text-sm 
      font-semibold capitalize text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        {config.platform}
      </span>
    </div>
  );
};

SocialNetwork.propTypes = {
  config: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};
