"use client";

import dynamic from "next/dynamic";

export const CommandCenterLoader = dynamic(
  () => import("./CommandCenter").then((module) => module.CommandCenter),
  {
    ssr: false,
    loading: () => (
      <div className="command-center command-center--loading" aria-hidden="true">
        <div className="fallback-orbit">
          <span>Strategy</span>
          <span>Operations</span>
          <span>Technology</span>
          <span>People</span>
          <span>Execution</span>
        </div>
      </div>
    ),
  },
);
