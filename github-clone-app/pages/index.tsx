// import getRepositories from "@/infrastructure/api/github.api";
import RepositoriesTypeDialog from "@/presentation/components/dialog/repositoriesType.dialog";
// import RepositoryList from "@/presentation/components/repositories/list.component";
import { useAppStore } from "@/presentation/hooks/appStore.hook";
// import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Router from "next/router";

const RepositoryTitle = dynamic(
  () => import("@/presentation/components/repositories/title.component"),
  { ssr: false }
);

const Sidebar = dynamic(
  () => import("@/presentation/components/sidebar/sidebar.component"),
  { ssr: false }
);

export default function Page() {
  const { repositoryType } = useAppStore((state) => state);

  // const { refetch } = useQuery({
  //   queryFn: async () => await getRepositories({ type: repositoryType }),
  //   queryKey: ["repositories"],
  // });

  useEffect(() => {
    Router.push("/", { query: { type: repositoryType } });
    // refetch();
  }, [repositoryType]);

  return (
    <>
      <div className="px-4">
        <RepositoryTitle />
        <div className="grid grid-cols-2">
          <Sidebar />
          {/* <RepositoryList /> */}
        </div>
      </div>
      <RepositoriesTypeDialog />
    </>
  );
}
