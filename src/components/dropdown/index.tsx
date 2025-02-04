import { FC, ReactNode } from "react";

export const Dropdown: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dropdown bg-white border border-gray-50 absolute top-[110%] left-0 shadow-2xl w-full">{children}</div>
  );
};
