import {
  Listbox as ListboxHeadlessUi,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import ArrowDown from "../icons/arrowDown.icon";

type Props = {
  setSelected: (value: any) => void;
  options: { id: any; value: any }[];
  selected: { id: any; value: any };
};

const Listbox: React.FC<Props> = ({ setSelected, options, selected }) => {
  return (
    <ListboxHeadlessUi value={selected} onChange={setSelected}>
      <ListboxButton className="relative block py-1.5 pr-5 pl-3 text-left text-sm/6">
        {selected.value}
        <ArrowDown className="dark:fill-icon-dark-color group pointer-events-none absolute top-2.5 right-0" />
      </ListboxButton>
      <Transition
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ListboxOptions
          anchor="bottom"
          className="w-28 rounded-sm border border-border-color p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none bg-header-color dark:bg-dialog-color-dark dark:border-border-color-dark"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className="gap-2 py-1.5 px-3 select-none aria-checked:font-semibold cursor-pointer"
              aria-checked={selected.id === option.id}
            >
              <div className="text-sm/6">{option.value}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </ListboxHeadlessUi>
  );
};

export default Listbox;
