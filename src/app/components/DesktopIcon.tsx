"use client";

import Image from "next/image";
import useSound from "use-sound";

type DesktopIconProps = {
  icon: string;
  label: string;
  darkMode?: boolean;
  onClick?: () => void;
};

export default function DesktopIcon({
  icon,
  label,
  darkMode = false,
  onClick,
}: DesktopIconProps) {

  const [playClick] = useSound(
    "/sounds/click.wav",
    {
      volume: 0.4,
    }
  );

  const handleClick = () => {

    playClick();

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-center transition hover:scale-110"
    >

      <Image
        src={icon}
        alt={label}
        width={62}
        height={62}
        className="mx-auto"
      />

      <p
        className={`mt-2 text-xl transition-colors duration-500 ${
          darkMode
            ? "text-white"
            : "text-gray-700"
        }`}
      >
        {label}
      </p>

    </div>
  );
}