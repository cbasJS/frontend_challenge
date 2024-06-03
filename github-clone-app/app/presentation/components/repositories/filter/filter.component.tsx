import {
  githubAPISortDirectionOptions,
  githubAPISortOptions,
} from "@/application/constants/general.constants";
import Listbox from "../../listbox/listbox.component";
import { useAppStore } from "@/presentation/hooks/appStore.hook";

const RepositoriesFilter = () => {
  const {
    sortBy,
    sortDirection,
    changeRepositorySort,
    changeRepositorySortDirection,
  } = useAppStore((state) => state);
  console.log(githubAPISortOptions.filter((val) => val.value === sortBy)[0]);
  return (
    <div className="w-full flex items-center justify-end">
      <div className="flex items-center mr-3">
        <span className="text-sm/6">Sort by</span>
        <Listbox
          options={githubAPISortOptions}
          selected={
            githubAPISortOptions.filter((val) => val.value === sortBy)[0]
          }
          setSelected={(currentSelected) =>
            changeRepositorySort(currentSelected.value)
          }
        />
      </div>
      <div className="flex items-center">
        <span className="text-sm/6">in</span>
        <Listbox
          options={githubAPISortDirectionOptions}
          selected={
            githubAPISortDirectionOptions.filter(
              (val) => val.value === sortDirection
            )[0]
          }
          setSelected={(currentSelected) =>
            changeRepositorySortDirection(currentSelected.value)
          }
        />
      </div>
    </div>
  );
};

export default RepositoriesFilter;
