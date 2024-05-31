import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import CloseIcon from "../icons/close.icon";
import { useAppStore } from "@/presentation/hooks/appStore.hook";
import RepositoriesMenu from "../repositories/menu.component";

type Props = {};

const RepositoriesTypeDialog: React.FC<Props> = () => {
  const { closeRepositoriesTypeDialog, isRepositoriesTypeDialogOpen } =
    useAppStore((state) => state);

  return (
    <Transition appear show={isRepositoriesTypeDialogOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {}}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-dialog-color dark:bg-dialog-color-semi-transparent">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl backdrop-blur-2xl bg-white dark:bg-dialog-color-dark">
                <DialogTitle
                  as="div"
                  className="border-b px-4 border-b-border-color py-3 dark:border-b-border-color-dark flex justify-between items-center"
                >
                  <h3 className="font-semibold">Types</h3>
                  <span onClick={closeRepositoriesTypeDialog}>
                    <CloseIcon />
                  </span>
                </DialogTitle>
                <div className="p-4 ">
                  <div>
                    <RepositoriesMenu />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RepositoriesTypeDialog;
