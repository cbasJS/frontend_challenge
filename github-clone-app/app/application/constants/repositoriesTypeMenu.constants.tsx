import { RepositoryTypeString } from "@/domain/enums/githubApi.enum";
import AllIcon from "@/presentation/components/icons/all.icon";
import ArchivedIcon from "@/presentation/components/icons/archived.icon";
import ForksIcon from "@/presentation/components/icons/forks.icon";
import RepositoryIcon from "@/presentation/components/icons/repository.icon";
import SourcesIcon from "@/presentation/components/icons/sources.icon";
import TemplatesIcon from "@/presentation/components/icons/templates.icon";
import { ReactNode } from "react";

export const repositoriesTypeMenu: {
  name: string;
  value: RepositoryTypeString;
  icon: ReactNode;
}[] = [
  {
    name: "All",
    value: "all",
    icon: <AllIcon />,
  },
  {
    name: "Public",
    value: "public",
    icon: <RepositoryIcon />,
  },
  {
    name: "Sources",
    value: "sources",
    icon: <SourcesIcon />,
  },
  {
    name: "Forks",
    value: "forks",
    icon: <ForksIcon />,
  },
  {
    name: "Archived",
    value: "archived",
    icon: <ArchivedIcon />,
  },
  {
    name: "Templates",
    value: "template",
    icon: <TemplatesIcon />,
  },
];
