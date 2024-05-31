import getRepositories from "@/infrastructure/api/github.api";
import RepositoriesTypeDialog from "@/presentation/components/dialog/repositoriesType.dialog";
import { useAppStore } from "@/presentation/hooks/appStore.hook";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import Router from "next/router";
import {
  RepositoriesList,
  RepositoryTitle,
  Sidebar,
} from "@/presentation/components/withoutSSR/noSSR.component";

export default function Page() {
  const { repositoryType } = useAppStore((state) => state);
  const queryClient = useQueryClient();

  const { refetch, data, isLoading, isFetching } = useQuery({
    queryFn: async () => await getRepositories({ type: repositoryType }),
    queryKey: ["repositories"],
  });

  useEffect(() => {
    Router.push("/", { query: { type: repositoryType } });
    queryClient.clear();
    refetch();
  }, [repositoryType, refetch, queryClient]);

  return (
    <>
      <div className="px-4">
        <RepositoryTitle />
        <div className="md:flex">
          <Sidebar />
          <RepositoriesList data={data} loading={isLoading || isFetching} />
        </div>
      </div>
      <RepositoriesTypeDialog />
    </>
  );
}
