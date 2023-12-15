import PropTypes from 'prop-types';

import { Tooltip } from '../Tooltip';

export type SocialNetworkItem = {
  platform: string;
  url: string;
};

interface Props {
  config: SocialNetworkItem;
  className?: string;
}

export const SocialNetwork = ({ config }: Props): JSX.Element => (
  <div className="group relative flex">
    <a href={config.url} target="_blank">
      <img
        className="h-[44px] w-[44px]"
        alt={config.platform}
        src={`/${config.platform}.svg`}
      />{' '}
    </a>
    <Tooltip text={config.platform} />
  </div>
);

SocialNetwork.propTypes = {
  config: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};
