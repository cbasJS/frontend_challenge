import { GithubRepositoryData } from "@/domain/entities/githubApi.entity";
import WrapperElement from "./wrapperElement.component";
import RepositoryListSpecs from "./specs.component";
import RepositoryIcon from "../../icons/repository.icon";

type Props = {
  element: GithubRepositoryData;
};

const CompactElement: React.FC<Props> = ({ element }) => {
  return (
    <WrapperElement>
      <div className="md:grid md:grid-flow-col md:gap-x-2">
        <div className="md:flex-1 md:flex md:gap-x-2 md:truncate">
          <div className="flex items-center gap-x-2">
            <span className="m0 hidden md:block">
              <RepositoryIcon />
            </span>
            <p className="font-medium truncate">{element.name}</p>
            {!element.isPrivate && (
              <span className="border border-border-color dark:border-border-color-dark rounded-xl px-2 py-1 text-sm/3 text-[#636C76] font-medium md:hidden">
                Public
              </span>
            )}
          </div>
          <div className="my-3 md:my-0 md:flex-1">
            <p className="text-[#636C76] text-sm md:text-base">
              {element.description}
            </p>
          </div>
        </div>
        <div className="mt-3 md:w-auto md:mt-0">
          <RepositoryListSpecs
            isCompactMode
            specs={element.specs}
            className="md:flex-nowrap md:justify-end"
          />
        </div>
      </div>
    </WrapperElement>
  );
};

export default CompactElement;
