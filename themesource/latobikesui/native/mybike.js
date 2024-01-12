import { Appearance } from "react-native";
import { font, brand, contrast } from "../../../theme/native/custom-variables";
import { anyColorToRgbString } from "../../atlas_core/native/core/helpers/_functions/convertcolors";

export const darkMode = Appearance.getColorScheme() === "dark";

export const iconBike = {
    container: {
        maxWidth: 300,
        maxHeight: 173,
        height: 173,
        width: 150,
        position: 'relative',
        overflow: 'hidden'
    },
    image:{
        width: 300,
        height: 173, 
        resizeMode: "cover",
        position: 'absolute',
        right: 0,
    },
}

export const batteryProgress = {
    container: {
        marginTop:0,
        marginBottom:5
    },
    bar: {
        backgroundColor: darkMode ? contrast.regular : contrast.lower,
        padding: 0,
        justifyContent: 'center',
        height: 30,
        borderWidth: 1,
        borderColor: '#000',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    fill: {
        backgroundColor: darkMode ? brand.successLight : brand.success,
    },
    text: {
        color: darkMode ? 'white' : font.colorTitle,
    }
}

export const introImage = {
    image:{
        width: 300,
        height: 200,
        resizeMode: 'contain',
    }
}

export const alertWarning = {
    container:{
        backgroundColor:'#fff3cd',
        borderRadius:5,
        padding:10,
        borderColor:'#ffeeba',
        borderWidth: 1,
        borderStyle:'solid',
        marginRight:20
    }
}
export const alertWarningText ={
    text:{
        color: '#856404'
    }
}

export const firstDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#01786F')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#01786F',
    },
}

export const secondDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#0E857C')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#0E857C',
    },
}

export const thirdDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#1B9289')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#1B9289',
    },
}

export const forthDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#279E95')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#279E95',
    },
}

export const fifthDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#34ABA2')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#34ABA2',
    },
}

export const sixthDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#41B8AF')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#41B8AF',
    },
}

export const seventhDayColor = {
    bar: {
        backgroundColor: `rgba(${anyColorToRgbString('#4EC5BC')},0.2)`,
        borderRadius: 8,
    },
    fill: {
        backgroundColor: '#4EC5BC',
    },
}