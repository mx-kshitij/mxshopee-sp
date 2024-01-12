import { anyColorToRgbString } from "../../atlas_core/native/core/helpers/_functions/convertcolors";
import { border, brand, backgroundDefaults } from "../../../theme/native/custom-variables";

export const loginBackgroundImage = {
    container: {
        backgroundColor: '#01786F',
        height: '100%',
    },
};

/*-- login page container --*/
export const loginPageContainer = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
};

export const fieldsWrapper = {
    container: {
        width: 300,
    },
};

/*-- login logo image --*/
export const loginLogoImage = {
    image: {
        width: 94,
        height: 36,
    }
};

/*-- login button --*/
export const loginButton = {
    container: {
        backgroundColor: 'white',
        borderColor: "white",
        borderRadius: border.radiusSmall,
    },
    caption: {
        color: '#000',
        textTransform: 'uppercase',
    }
};

/*-- fingerprint button --*/
export const fingerprintButton = {
    container: {
        backgroundColor: 'transparent',
        borderColor: "transparent",
        paddingVertical: 0,
        width: 160,
        height: 64,
        alignSelf: 'center',
    },
    icon: {
        size: 100,
        alignSelf: 'center',
    }
};

/*-- login textbox --*/
export const loginTextbox = {
    input: {
        backgroundColor: `rgba(${anyColorToRgbString(brand.primaryLight)},0.8)`,
        borderColor: backgroundDefaults.secondaryDark,
        placeholderTextColor: "#000",
        color: "#000",
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 0,
    },
};

/*-- divider line --*/
export const dividerLine = {
    container: {
        borderTopWidth: 1,
        borderColor: "white",
    }
};
