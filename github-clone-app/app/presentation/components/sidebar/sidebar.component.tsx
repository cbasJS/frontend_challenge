import RepositoriesMenu from "../repositories/menu.component";

const Sidebar = () => {
  return (
    <div className="p-4 border-r border-border-color dark:border-border-color-dark min-w-64 md:min-w-72 hidden md:block">
      <h2 className="font-bold text-lg mb-3">Repositories</h2>
      <RepositoriesMenu />
    </div>
  );
};

export default Sidebar;
