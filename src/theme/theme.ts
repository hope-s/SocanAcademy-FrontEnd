// 1. Import `createTheme`
import {
    createTheme,
} from "@nextui-org/react";

const theme = createTheme({
    type: "light",
    theme: {
        colors: {
            primaryLight: '$green200',
            primary: '#fcbf17',
            primaryDark: '$green600',
            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',
            textColor: "#0b032d"
        },
    }
})

export default theme