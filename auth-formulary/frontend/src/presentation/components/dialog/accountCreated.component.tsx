import LayoutDialog from "./layout.component";
import { Button } from "@headlessui/react";

type Props = {
  close: () => void;
  isOpen: boolean;
};

const DialogAccountCreated: React.FC<Props> = ({ close, isOpen }) => {
  return (
    <LayoutDialog title="¡Cuenta creada!" isOpen={isOpen} close={close}>
      <p className="mt-2 text-sm/6">Tu cuenta se ha creado exitosamente</p>
      <div className="mt-4">
        <Button
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={close}
        >
          Iniciar sesión
        </Button>
      </div>
    </LayoutDialog>
  );
};

export default DialogAccountCreated;
