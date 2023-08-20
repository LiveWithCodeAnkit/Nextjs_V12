import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { Icon } from "@components/icons";

interface Props {
  title: String;
  icon: IconType;
  link: string;
  children?: React.ReactNode;
}
const classes = {
  icon: "card-icon",
  iconContainer: "card-icon-container",
};
const Card: React.FC<Props> = ({ title, icon, link, children }) => {
  return (
    <Link
      href={link}
      className="flex flex-row basis-1/4 rounded-[20px] bg-white p-6 max-lg:basis-1/2 max-md:basis-full items-center gap-4 shadow"
    >
      <Icon Icon={icon} classes={classes} />
      {title}
      {children}
    </Link>
  );
};

export default Card;
