import { repositoriesTypeMenu } from "@/application/constants/repositoriesTypeMenu.constants";
import { useAppStore } from "@/presentation/hooks/appStore.hook";

const RepositoriesMenu = () => {
  const { closeRepositoriesTypeDialog, repositoryType, changeRepositoryType } =
    useAppStore((state) => state);

  return (
    <ul role="radiogroup">
      {repositoriesTypeMenu.map((data, index) => (
        <li
          role="radio"
          key={index}
          className="flex items-center gap-x-2 p-1 aria-checked:bg-dialog-element-selected aria-checked:font-semibold cursor-pointer"
          aria-checked={repositoryType === data.value}
          onClick={() => {
            changeRepositoryType(data.value);
            closeRepositoriesTypeDialog();
          }}
        >
          <span>{data.icon}</span>
          <span>{data.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default RepositoriesMenu;
