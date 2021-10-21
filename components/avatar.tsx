import { FC } from "react";

type AvatarProps = {
  name: string;
};

const Avatar: FC<AvatarProps> = ({ name }: AvatarProps) => {
  return (
    <img
      src={`/assets/authors/${name}.jpeg`}
      className="w-12 h-12 rounded-full ml-4 ring-white ring-2"
      alt={name}
    />
  );
};

export default Avatar;
