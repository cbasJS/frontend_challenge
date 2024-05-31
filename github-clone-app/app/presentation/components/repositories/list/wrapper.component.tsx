import { useAppStore } from "@/presentation/hooks/appStore.hook";
import DefaultElement from "./defaultElement.component";
import DisplayMode from "./displayMode.component";
import { GithubRepository } from "@/domain/entities/githubApi.entity";
import SpinnerIcon from "../../icons/spinner.icon";

type Props = {
  data?: GithubRepository[];
  loading: boolean;
};

const RepositoriesList: React.FC<Props> = ({ data, loading }) => {
  const { repositoryType } = useAppStore((state) => state);

  if (typeof !data && loading) return <SpinnerIcon />;

  return (
    <div className="md:mt-0 mt-4 w-full md:p-4">
      <h2 className="font-bold text-lg hidden md:block mb-3 capitalize">
        {repositoryType}
      </h2>
      <div className="w-full border border-border-color dark:border-border-color-dark rounded-md">
        <div className="w-full bg-header-color dark:bg-dialog-color-dark p-4 flex items-center justify-between">
          <h4 className="font-semibold">{data.length} repositories</h4>
          <DisplayMode />
        </div>
        {data.map((el, index) => (
          <DefaultElement key={index} element={el} />
        ))}
      </div>
    </div>
  );
};

export default RepositoriesList;
