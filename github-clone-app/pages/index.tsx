import getRepositories from "@/infrastructure/api/github.api";
import { useAppStore } from "@/presentation/hooks/appStore.hook";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import Router from "next/router";

import HomePageContent from "@/presentation/components/home/content.component";

export default function Page() {
  const { repositoryType, currentPage, sortBy, sortDirection } = useAppStore(
    (state) => state
  );

  const queryClient = useQueryClient();

  const { refetch, data, isLoading, isFetching } = useQuery({
    queryFn: async () =>
      await getRepositories({
        type: repositoryType,
        page: currentPage,
        sort: sortBy,
        direction: sortDirection,
      }),
    queryKey: ["repositories"],
  });

  useEffect(() => {
    Router.push("/", { query: { type: repositoryType } });
    queryClient.clear();
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repositoryType]);

  useEffect(() => {
    queryClient.clear();
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, sortBy, sortDirection]);

  return (
    <HomePageContent response={data} isLoading={isLoading || isFetching} />
  );
}
