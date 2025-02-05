import { FC, ReactNode } from "react";
import { IDropdownStyles } from "../../types/selectTypes";

export const Dropdown: FC<{ children: ReactNode, styles: IDropdownStyles | undefined }> = ({ children, styles }) => {
  return (
    <div 
      className="dropdown w-full flex flex-col max-h-60 overflow-y-auto"
      style={{
        padding: styles?.padding ? `${styles.padding.top}px ${styles.padding.right}px ${styles.padding.bottom}px ${styles.padding.left}px` : undefined,
        margin: styles?.margin ? `${styles.margin.top}px ${styles.margin.right}px ${styles.margin.bottom}px ${styles.margin.left}px` : undefined,
        backgroundColor: styles?.backgroundColor ? `${styles.backgroundColor}` : 'white',
      }}
      data-testid="select-dropdown-dropdown"
    >
      {children}
    </div>
  );
};

export default Dropdown;
