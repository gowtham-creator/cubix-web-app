import { cn } from "lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const H1: FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={cn("text-3xl md:text-5xl font-medium text-center", className)}
    >
      {children}
    </h1>
  );
};
