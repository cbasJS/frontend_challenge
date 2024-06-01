import getRepositories from "@/infrastructure/api/github.api";
import { useAppStore } from "@/presentation/hooks/appStore.hook";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import Router from "next/router";

import HomePageContent from "@/presentation/components/home/content.component";

export default function Page() {
  const { repositoryType, currentPage, changeCurrentPage } = useAppStore(
    (state) => state
  );
  const queryClient = useQueryClient();

  const { refetch, data, isLoading, isFetching } = useQuery({
    queryFn: async () =>
      await getRepositories({ type: repositoryType, page: currentPage }),
    queryKey: ["repositories"],
  });

  useEffect(() => {
    changeCurrentPage("1");
    Router.push("/", { query: { type: repositoryType } });
    queryClient.clear();
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repositoryType]);

  useEffect(() => {
    queryClient.clear();
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <HomePageContent response={data} isLoading={isLoading || isFetching} />
  );
}
