import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import ArrowDown from "../../icons/arrowDown.icon";

const modes = [
  { id: 1, name: "Default" },
  { id: 2, name: "Compact" },
];

const DisplayMode = () => {
  const [selected, setSelected] = useState(modes[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton className="relative block py-1.5 pr-5 pl-3 text-left text-sm/6">
        {selected.name}
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
          {modes.map((mode) => (
            <ListboxOption
              key={mode.name}
              value={mode}
              className="gap-2 py-1.5 px-3 select-none aria-checked:font-semibold cursor-pointer"
              aria-checked={selected.id === mode.id}
            >
              <div className="text-sm/6">{mode.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </Listbox>
  );
};

export default DisplayMode;
