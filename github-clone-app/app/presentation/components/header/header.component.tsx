import GithubIcon from "../icons/github.icon";
import RepositoryIcon from "../icons/repository.icon";

const Header = () => {
  return (
    <header className="w-full bg-header-color dark:bg-header-color-dark border-b border-b-border-color dark:border-b-border-color-dark">
      <div className="px-4 py-6 flex gap-x-4 items-center">
        <span>
          <GithubIcon />
        </span>
        <p className="font-bold">{process.env.NEXT_PUBLIC_GITHUB_API_ORG}</p>
      </div>
      <div>
        <div className="px-4 py-3 flex items-center gap-x-2">
          <span>
            <RepositoryIcon />
          </span>
          <p className="font-semibold">Repositories</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
