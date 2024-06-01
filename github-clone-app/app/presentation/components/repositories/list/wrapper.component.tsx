import { useAppStore } from "@/presentation/hooks/appStore.hook";
import DefaultElement from "./defaultElement.component";
import DisplayMode from "./displayMode.component";
import { GithubRepositoryData } from "@/domain/entities/githubApi.entity";
import SpinnerIcon from "../../icons/spinner.icon";
import { useState } from "react";
import {
  type DisplayModesType,
  displayModes,
} from "@/application/constants/general.constants";
import CompactElement from "./compactElement.component";

type Props = {
  data?: GithubRepositoryData[];
  loading: boolean;
};

const RepositoriesList: React.FC<Props> = ({ data, loading }) => {
  const [displayMode, setDisplayMode] = useState<DisplayModesType>(
    displayModes[0]
  );
  const { repositoryType } = useAppStore((state) => state);

  if (typeof !data && loading) return <SpinnerIcon />;

  return (
    <div className="md:mt-0 mt-4 w-full md:p-4">
      <h2 className="font-bold text-lg hidden md:block mb-3 capitalize">
        {repositoryType}
      </h2>
      <div className="w-full border border-border-color dark:border-border-color-dark rounded-md">
        <div className="w-full bg-header-color dark:bg-dialog-color-dark p-4 flex items-center justify-between">
          {/* @ts-ignore */}
          <h4 className="font-semibold">{data.length} repositories</h4>
          <DisplayMode selected={displayMode} setSelected={setDisplayMode} />
        </div>
        {/* @ts-ignore */}
        {data.map((el, index) => {
          if (displayMode.name === "Compact") {
            return <CompactElement key={index} element={el} />;
          } else {
            return <DefaultElement key={index} element={el} />;
          }
        })}
      </div>
    </div>
  );
};

export default RepositoriesList;
