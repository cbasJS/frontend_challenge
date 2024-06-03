import { SVGProps } from "react";

type Props = {
  children: React.ReactNode;
} & SVGProps<SVGSVGElement>;

const WrapperIcon: React.FC<Props> = ({ children, ...props }) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      className="dark:fill-icon-dark-color"
      data-testid="wrapper-icon"
      {...props}
    >
      {children}
    </svg>
  );
};

export default WrapperIcon;
