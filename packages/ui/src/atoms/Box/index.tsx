import { HTMLAttributes } from "react";

type TColor = "dark" | "light";

type TRound = {
  tr?: string;
  tl?: string;
  br?: string;
  bl?: string;
};

type TSize = {
  width: string;
  height: string;
  padding: string;
};

interface IProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  color?: TColor;
  size?: TSize;
  round?: TRound;
}

const DRound: TRound = {
  tr: "5px",
  tl: "5px",
  br: "5px",
  bl: "5px",
};

const DSize: TSize = {
  width: "100%",
  height: "100%",
  padding: "10px",
};

const colors = {
  dark: "bg-[#222222]",
  light: "bg-[#2E2E2E]",
};

export const Box = ({
  children,
  color = "dark",
  size = DSize,
  round = DRound,
  ...props
}: IProp) => {
  const { width, height, padding } = size;
  const { tl, tr, br, bl } = round;
  const borderRadius = `${tl} ${tr} ${br} ${bl}`;

  return (
    <div
      className={`flex flex-col justify-between ${colors[color]}`}
      style={{ width, height, padding, borderRadius }}
      {...props}
    >
      {children}
    </div>
  );
};