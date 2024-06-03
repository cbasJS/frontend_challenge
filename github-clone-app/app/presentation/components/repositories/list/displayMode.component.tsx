import { Dispatch, SetStateAction } from "react";
import {
  displayModes,
  type DisplayModesType,
} from "@/application/constants/general.constants";
import Listbox from "../../listbox/listbox.component";

type Props = {
  selected: DisplayModesType;
  setSelected: Dispatch<SetStateAction<DisplayModesType>>;
};

const DisplayMode: React.FC<Props> = ({ selected, setSelected }) => {
  return (
    <Listbox
      options={displayModes}
      setSelected={(value) => setSelected(value)}
      selected={selected}
    />
  );
};

export default DisplayMode;
