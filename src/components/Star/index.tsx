import iconStarActive from "assets/icons/star.svg";
import iconStarInactive from "assets/icons/star-inactive.svg";

type props = {
  value: boolean;
};

const Star = ({ value }: props) => {
  const isActive = value ? iconStarActive : iconStarInactive;
  return <img src={isActive} alt="star" />;
};

export default Star;
