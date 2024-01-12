import { Appearance } from "react-native";
import { font, background } from "../../../theme/native/custom-variables";

export const darkMode = Appearance.getColorScheme() === "dark";

export const barChart = {
    container: {
        height: 250,
    },
    chart: {
        //transform: [{ rotate: '270deg' }],
    },
    grid: {
        paddingLeft: 40,
        lineColor: darkMode ? background.primary : 'white',
        paddingRight: 40,
        paddingBottom: 10,
    },
    xAxis: {
        color: darkMode ? 'white' : font.colorTitle,
        lineColor: 'transparent',
    },
    yAxis: {
        color: darkMode ? 'white' : font.colorTitle,
        lineColor: 'transparent',
    },
    bars: {
        barColorPalette: ('#4EC5BC;#41B8AF;#34ABA2;#279E95;#1B9289;#0E857C;#01786F'),
    },
    legend: {
        label: {
            color: darkMode ? 'white' : font.colorTitle,
            fontSize: font.size,
            width: '100%',
        }
    }
};