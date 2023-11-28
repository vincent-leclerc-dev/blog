const SocialNetwork = ({
  platform,
  username,
}: {
  platform: string;
  username: string;
}) => {
  return (
    <a href={`https://www.${platform}.com/${username}`} target="_blank">
      {platform}
    </a>
  );
};

export default SocialNetwork;
