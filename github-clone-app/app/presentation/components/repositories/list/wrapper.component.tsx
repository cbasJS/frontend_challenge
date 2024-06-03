import { useAppStore } from "@/presentation/hooks/appStore.hook";
import DefaultElement from "./defaultElement.component";
import DisplayMode from "./displayMode.component";
import { GithubRepository } from "@/domain/entities/githubApi.entity";
import SpinnerIcon from "../../icons/spinner.icon";
import { useState } from "react";
import {
  type DisplayModesType,
  displayModes,
} from "@/application/constants/general.constants";
import CompactElement from "./compactElement.component";
import Paginator from "../../paginator/index.component";
import React from "react";
import RepositoriesFilter from "../filter/filter.component";

type Props = {
  response?: GithubRepository;
  loading: boolean;
};

const RepositoriesList: React.FC<Props> = ({ response, loading }) => {
  const [displayMode, setDisplayMode] = useState<DisplayModesType>(
    displayModes[0]
  );
  const { repositoryType } = useAppStore((state) => state);

  if (!response && loading) return <SpinnerIcon />;

  return (
    <React.Fragment>
      <div className="md:mt-0 mt-4 w-full md:p-4">
        <div className="w-full">
          <h2 className="font-bold text-lg hidden md:block mb-3 capitalize">
            {repositoryType}
          </h2>
          <div className="w-full border border-border-color dark:border-border-color-dark rounded-md">
            <div className="w-full bg-header-color dark:bg-dialog-color-dark p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">
                  {/* @ts-ignore */}
                  {response.data.length} repositories in page
                </h4>
                <DisplayMode
                  selected={displayMode}
                  setSelected={setDisplayMode}
                />
              </div>
              <RepositoriesFilter />
            </div>
            {/* @ts-ignore */}
            {response.data.map((el, index) => {
              if (displayMode.value === "Compact") {
                return <CompactElement key={index} element={el} />;
              } else {
                return <DefaultElement key={index} element={el} />;
              }
            })}
          </div>
        </div>
        {/* @ts-ignore */}
        <Paginator pageInfo={response.pageInfo} />
      </div>
    </React.Fragment>
  );
};

export default RepositoriesList;
