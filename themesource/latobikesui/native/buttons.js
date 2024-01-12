import { Appearance } from "react-native";
import { contrast, backgroundDefaults, brand, font, background } from "../../../theme/native/custom-variables";

export const darkMode = Appearance.getColorScheme() === "dark";

/*-- main cta button --*/
export const mainButton = {
    container: {
        width: '80%',
    },
    icon: {
        size: 30,
    },
    caption: {
        textTransform: 'uppercase',
    }
};

export const directMeButton = {
    container: {
        position: 'absolute',
        bottom: '5%',
        left: '10%'
    },
};

export const btnUppercase = {
    caption: {
        textTransform: 'uppercase',
    }
};

export const btnCharge = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
    },
    icon:{
        size: 40,
        color: darkMode ? "#ffffffde" : contrast.highest,
    }
};

export const btnCloud = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
        minWidth: 20,
        minHeight: 20,
    },
    icon:{
        size: 20,
        color: darkMode ? contrast.low : contrast.regular,
    }
};

export const btnIconLarge = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
        width: 80,
        height: 80,
        minWidth: 80,
        minHeight: 80,
    },
    icon:{
        size: 70,
        color: darkMode ? brand.primaryLight : contrast.highest,
    }
};

export const btnStatus = {
    container:{
        backgroundColor: darkMode ? contrast.lowest : contrast.lowest,
        borderColor:'transparent',
        padding: 10,
        margin: 0,
        width: 50,
        height: 50,
        minWidth: 50,
        minHeight: 50,
        borderRadius: 10,
    },
    icon:{
        size: 35,
    }
};

export const btnStatusPrimary = {
    icon:{
        color: darkMode ? brand.primaryLight : brand.primary,
    }
};

export const btnStatusSuccess = {
    icon:{
        color: darkMode ? brand.successLight : brand.success,
    }
};

export const btnStatusWarning = {
    icon:{
        color: darkMode ? brand.warningLight : brand.warning,
    }
};

export const btnStatusDanger = {
    icon:{
        color: darkMode ? brand.dangerLight : brand.danger,
    }
};

export const linkButton = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
        minWidth: 0,
        minHeight: 0,
    },
    caption: {
        textTransform: 'uppercase',
        color: darkMode ? brand.primaryLight : brand.primary,
    }
};

export const btnArrow = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        padding: 0,
        margin: 0,
        width: 20,
    },
    icon:{
        size: 20,
        color: darkMode ? "#ffffffde" : contrast.highest,
    }
};

export const btnQuote = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        paddingVertical: 0,
        paddingHorizontal: 0,
        margin: 0,
        width: 30,
        height: 30,
        minWidth: 30,
        minHeight: 30,
    },
    icon:{
        size: 30,
        color: darkMode ? "#ffffffde" : contrast.highest,
    }
};

export const btnCamera = {
    icon:{
        size: 30,
    }
};

export const btnRecord = {
    container: {
        borderWidth:1,
        borderRadius: 100,
        marginLeft: 1,
        marginTop: 1,
    },
    icon:{
        size: 20,
    }
};

export const btnDanger = {
    container: {
        color:  darkMode ? backgroundDefaults.secondaryDark : "#FFF",
        borderColor: darkMode ? brand.dangerLight : brand.danger,
        backgroundColor: darkMode ? brand.dangerLight : brand.danger,
    },
};

export const btnBin = {
    container:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        paddingVertical: 0,
        paddingHorizontal: 0,
        margin: 0,
        width: 30,
        height: 30,
        minWidth: 30,
        minHeight: 30,
    },
    icon:{
        size: 20,
        color: darkMode ? backgroundDefaults.secondaryDark : "#FFF",
    },
};

export const btnBinText = {
    text: {
        color: darkMode ? backgroundDefaults.secondaryDark : "#FFF",
        textTransform: 'uppercase',
    },
};

export const usageBtn = {
    container: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderRadius: 100,
        width: 40,
        height: 40,
        minWidth: undefined,
        minHeight: undefined,
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderColor: darkMode ? contrast.high : contrast.highest,
    },
    icon: {
        size: 20,
        color: darkMode ? contrast.high : contrast.highest,
    },
};

/*-- full width button --*/
export const fullWidthButton = {
    container: {
        backgroundColor: background.primary,
        borderWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: contrast.low,
        paddingHorizontal: 25,
        paddingVertical: 15,
        width: '100%',
        borderRadius: 0,
        justifyContent: "flex-start"
    },
    icon: {
        color: darkMode ? brand.primaryLight : "black",
        size: Platform.select({ ios: 30, android: 20 }),   
    },
    caption: {
        color: darkMode ? "white" : "black",
        fontSize: Platform.select({ ios: font.sizeH5, android: font.sizeH6 }),
        fontWeight: "normal",
    },
};