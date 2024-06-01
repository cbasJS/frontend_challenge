import { useAppStore } from "@/presentation/hooks/appStore.hook";
import ArrowDown from "../icons/arrowDown.icon";

const RepositoryTitle = () => {
  const { repositoryType, openRepositoriesTypeDialog, changeRepositoryType } =
    useAppStore((state) => state);

  return (
    <div
      className="flex items-center gap-x-2 md:hidden mt-4"
      onClick={openRepositoriesTypeDialog}
    >
      <h1 className="font-bold text-lg capitalize">
        {repositoryType} repositories
      </h1>
      <span>
        <ArrowDown />
      </span>
    </div>
  );
};

export default RepositoryTitle;
