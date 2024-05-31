import type { GithubRepositorySpecs } from "@/domain/entities/githubApi.entity";
import LicenseIcon from "../../icons/license.icon";
import ForksIcon from "../../icons/forks.icon";
import StartIcon from "../../icons/start.icon";
import IssueIcon from "../../icons/issue.icon";
import {
  RepositorySpecsString,
  RepositorySpecs,
} from "@/domain/enums/githubApi.enum";
import { ReactNode } from "react";
import React from "react";

const icon: { [key in RepositorySpecs]: ReactNode | null } = {
  language: null,
  license: <LicenseIcon />,
  forks: <ForksIcon />,
  starts: <StartIcon />,
  issues: <IssueIcon />,
  updatedAt: null,
};

type Props = {
  specs: GithubRepositorySpecs;
};

const RepositoryListSpecs: React.FC<Props> = ({ specs }) => {
  const specEntries = Object.entries(specs) as [
    RepositorySpecsString,
    (typeof specs)[keyof typeof specs]
  ][];
  return (
    <div className="text-[#636C76] fill-[#636C76] text-sm md:text-base flex items-center justify-start gap-x-2 flex-wrap">
      {specEntries.map((spec, index) => {
        if (!spec[1]) return null;

        if (spec[0] === "language" && spec[1]) {
          return (
            <React.Fragment key={index}>
              <div className="flex items-center gap-x-1">
                {/* @ts-ignore */}
                {spec[1].color && (
                  <div
                    className="rounded-full h-3 w-3 border border-border-color dark:border-border-color-dark"
                    style={{
                      /* @ts-ignore */
                      background: spec[1].color,
                    }}
                  />
                )}
                {/* @ts-ignore */}
                <p>{spec[1].name}</p>
              </div>
              <span className="text-xs">•</span>
            </React.Fragment>
          );
        }

        if (spec[0] === "updatedAt") {
          return (
            <React.Fragment key={index}>
              <div className="hidden md:block">
                {/* @ts-ignore */}
                {spec[1].large}
              </div>
              <div className="md:hidden">
                {/* @ts-ignore */}
                {spec[1].short}
              </div>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={index}>
            <div className="flex items-center gap-x-1">
              {icon[`${spec[0]}`]}
              <span>{typeof spec[1] === "string" && [spec[1]]}</span>
            </div>
            <span className="text-xs last:hidden">•</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RepositoryListSpecs;
