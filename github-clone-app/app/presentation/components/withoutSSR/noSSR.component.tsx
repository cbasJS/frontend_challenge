import dynamic from "next/dynamic";

export const RepositoryTitle = dynamic(
  () => import("@/presentation/components/repositories/title.component"),
  { ssr: false }
);

export const Sidebar = dynamic(
  () => import("@/presentation/components/sidebar/sidebar.component"),
  { ssr: false }
);

export const RepositoriesList = dynamic(
  () => import("@/presentation/components/repositories/list/wrapper.component"),
  { ssr: false }
);
