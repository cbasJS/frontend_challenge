import { GithubRepositoryPageInfo } from "@/domain/entities/githubApi.entity";
import { useAppStore } from "@/presentation/hooks/appStore.hook";

type Props = {
  pageInfo: GithubRepositoryPageInfo;
};

const Paginator: React.FC<Props> = ({ pageInfo }) => {
  const { changeCurrentPage } = useAppStore((state) => state);

  return (
    <div className="w-full flex justify-end mt-4">
      <div className="flex">
        <div
          role="button"
          className="flex items-center justify-center px-3 h-8 font-medium border border-border-color rounded-md dark:border-border-color-dark cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          data-value={pageInfo.prevPage}
          aria-disabled={!pageInfo.prevPage}
          onClick={() =>
            pageInfo.prevPage && changeCurrentPage(pageInfo.prevPage)
          }
        >
          Previous
        </div>
        <div
          role="button"
          className="flex items-center justify-center px-3 h-8 ms-3 font-medium border border-border-color rounded-md dark:border-border-color-dark cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          data-value={pageInfo.nextPage}
          aria-disabled={!pageInfo.nextPage}
          onClick={() =>
            pageInfo.nextPage && changeCurrentPage(pageInfo.nextPage)
          }
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Paginator;
