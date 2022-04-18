import { globalCss } from "@nextui-org/react";

const globalStyles = globalCss({
  html: { direction: "rtl" },
  "*": { fontFamily: "IRANSansX !important" },
  'span, p, h6, a': { fontSize: '13px !important'}
});

export default globalStyles;