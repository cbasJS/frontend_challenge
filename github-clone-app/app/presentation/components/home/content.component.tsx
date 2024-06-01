import { GithubRepository } from "@/domain/entities/githubApi.entity";
import RepositoriesTypeDialog from "@/presentation/components/dialog/repositoriesType.dialog";
import {
  RepositoriesList,
  RepositoryTitle,
  Sidebar,
} from "@/presentation/components/withoutSSR/noSSR.component";

type Props = {
  data?: GithubRepository[];
  isLoading: boolean;
};

const HomePageContent: React.FC<Props> = ({ data, isLoading }) => {
  return (
    <>
      <div className="px-4">
        <RepositoryTitle />
        <div className="md:flex">
          <Sidebar />
          <RepositoriesList data={data} loading={isLoading} />
        </div>
      </div>
      <RepositoriesTypeDialog />
    </>
  );
};

export default HomePageContent;
