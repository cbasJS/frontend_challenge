import { GithubRepositoryData } from "@/domain/entities/githubApi.entity";
import RepositoryListSpecs from "./specs.component";
import WrapperElement from "./wrapperElement.component";

type Props = {
  element: GithubRepositoryData;
};

const DefaultElement: React.FC<Props> = ({ element }) => {
  return (
    <WrapperElement>
      <div className="flex justify-start items-center gap-x-2">
        <p className="font-medium truncate">{element.name}</p>
        {!element.isPrivate && (
          <span className="border border-border-color dark:border-border-color-dark rounded-xl px-2 py-1 text-sm/3 text-[#636C76] font-medium">
            Public
          </span>
        )}
      </div>
      <div className="my-3">
        <p className="text-[#636C76] text-sm md:text-base">
          {element.description}
        </p>
      </div>
      <div className="mt-3">
        <RepositoryListSpecs specs={element.specs} />
      </div>
    </WrapperElement>
  );
};

export default DefaultElement;
