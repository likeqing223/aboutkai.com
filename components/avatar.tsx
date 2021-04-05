import { FC } from "react";

type AvatarProps = {
  name: string;
};

const Avatar: FC<AvatarProps> = ({ name }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <img
        src={`/assets/authors/${name}.jpeg`}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
