import { GithubRepository } from "@/domain/entities/githubApi.entity";
import RepositoriesTypeDialog from "@/presentation/components/dialog/repositoriesType.dialog";
import {
  RepositoriesList,
  RepositoryTitle,
  Sidebar,
} from "@/presentation/components/withoutSSR/noSSR.component";

type Props = {
  response?: GithubRepository;
  isLoading: boolean;
};

const HomePageContent: React.FC<Props> = ({ response, isLoading }) => {
  return (
    <>
      <div className="px-4">
        <RepositoryTitle />
        <div className="md:flex">
          <Sidebar />
          <RepositoriesList data={response?.data} loading={isLoading} />
        </div>
      </div>
      <RepositoriesTypeDialog />
    </>
  );
};

export default HomePageContent;
