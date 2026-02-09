import type { ReactNode } from "react";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <p className="text-red-400">{children}</p>;
};
