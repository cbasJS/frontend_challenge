import { GithubRepository } from "@/domain/entities/githubApi.entity";
import RepositoryListSpecs from "./specs.component";

type Props = {
  element: GithubRepository;
};

const DefaultElement: React.FC<Props> = ({ element }) => {
  return (
    <div className="border-b border-border-color dark:border-border-color-dark">
      <div className="p-3">
        <div className="flex justify-start items-center">
          <p className="font-medium truncate">{element.name}</p>
          {!element.isPrivate && (
            <span className="ml-2 border border-border-color dark:border-border-color-dark rounded-xl px-2 py-1 text-sm/3 text-[#636C76] font-medium">
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
      </div>
    </div>
  );
};

export default DefaultElement;
