import React, { ReactNode } from "react";

export default function Container({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) {
  return <div className={`max-width mx-auto ${classes}`}>{children}</div>;
}
