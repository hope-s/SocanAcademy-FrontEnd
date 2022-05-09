import React, { ReactNode } from "react";

export default function Container({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string | undefined;
  }) {
  return <div className={`max-width mx-auto ${classes ?? ""}`}>{children}</div>;
}
