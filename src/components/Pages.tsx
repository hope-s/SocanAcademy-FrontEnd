import { Helmet } from "react-helmet-async";
import { forwardRef, ReactNode } from "react";

const Page = forwardRef(
  (
    { children, title, ...other }: { children: ReactNode; title: string },
    ref?: any
  ) => (
    <div ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      {children}
    </div>
  )
);

export default Page;
