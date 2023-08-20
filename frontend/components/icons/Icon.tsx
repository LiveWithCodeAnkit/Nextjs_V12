import React from "react";
import { IconType } from "react-icons";
interface Props {
  Icon: IconType;
  classes?: {
    icon?: String;
    iconContainer?: String;
  };
}
const Icon: React.FC<Props> = ({ Icon, classes }) => {
  return (
    <span className={`${classes?.iconContainer}`}>
      <Icon className={`${classes?.icon}`} />
    </span>
  );
};

export default Icon;
