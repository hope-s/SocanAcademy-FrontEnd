import { globalCss } from "@nextui-org/react";

const globalStyles = globalCss({
  html: { direction: "rtl" },
  "*": { fontFamily: "IRANSansX !important", lineHeight: '2 !important' },
  'span, p, h6': { fontSize: '13px !important'},
  'a' : { fontSize: '14px !important', color: '#0b032d !important'},
});

export default globalStyles;