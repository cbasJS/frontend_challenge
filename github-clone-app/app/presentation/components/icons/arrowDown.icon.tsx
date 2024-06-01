import { SVGProps } from "react";
import WrapperIcon from "./wrapper.icon";

type Props = {} & SVGProps<SVGSVGElement>;

const ArrowDown: React.FC<Props> = ({ ...props }) => {
  return (
    <WrapperIcon {...props}>
      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
    </WrapperIcon>
  );
};

export default ArrowDown;
