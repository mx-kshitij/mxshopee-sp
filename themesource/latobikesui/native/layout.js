import { Appearance, Platform } from "react-native";
import { contrast, brand, border, backgroundDefaults, font } from "../../../theme/native/custom-variables";

export const darkMode = Appearance.getColorScheme() === "dark";

/*-- user image dark --*/
export const userImageDark = {
    image: {
        borderWidth: 1,
        borderColor: contrast.high,
        overflow: "hidden",
        backgroundColor: 'white',
        borderRadius: 44,
    }
};

/*-- user image container dark --*/
export const userImageContainerDark = {
    container: {
        borderWidth: 1,
        borderColor: contrast.high,
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 80,
        overflow: "hidden",
    }
};

export const initialWrapper = {
    container: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 80,
        width: 72,
        height: 72,
        overflow: "hidden",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export const noBorderTop = {
    container: {
        borderTopWidth: 0,
    },
};

export const dividerBottom = {
    container: {
        borderBottomWidth: 1,
        borderColor: darkMode ? '#7a7a7a' : contrast.lower,
    }
};

export const dailyUsageTextbox = {
    container: {
        width: '40%',
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        borderWidth: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 0,
        placeholderTextColor: darkMode ? contrast.high : contrast.low,
        fontSize: 80,
        fontWeight: font.weightBold,
        textAlign: 'center',
    },
};

export const navigationStyle = {
    bottomBar: {
        container: {
            height: 60,
            borderTopWidth: 0,
        },
        label: {
            top: Platform.select({ ios: 0, android: -8 }),
        },
        icon: {
            top: 0,
            size: Platform.select({ ios: 35, android: 26 }),            
        },
    },
};

export const com_mendix_widget_native_togglebuttons_ToggleButtons = {
    container: {
        borderRadius: border.radiusSmall,
    },
    button: {
        borderRadius: border.radiusSmall
    },
    text: {
        color: darkMode ? '#7a7a7a' : contrast.highest,
    },
    activeButton: {
        backgroundColor: darkMode ? brand.primaryLight : contrast.lower,
        borderColor: darkMode ? brand.primaryLight : contrast.lower,
        borderRadius: border.radiusSmall
    },
    activeButtonText: {
        color: darkMode ? backgroundDefaults.secondaryDark : contrast.highest,
    },
};

export const com_mendix_widget_native_floatingactionbutton_FloatingActionButton = {
    secondaryButtonCaptionContainer: {
        paddingTop: 8,
        marginTop: -3,
        height: 28,
    }
};

export const fixedHeight = {
    container: {
        height: 20,
    }
};

export const boardCard = {
    container: {
        height: 180,
        borderRadius: 14,
    }
};

export const boardCardWide = {
    container: {
        height: 220,
    }
};

export const boardCardWarning = {
    container: {
        elevation: 5,
        shadowColor: darkMode ? brand.warningLight : brand.warning,
        shadowOpacity: .5,
        shadowRadius: 6,
        shadowOffset: {
            width: 4,
            height: 2
        }
    }
};

export const boardCardDanger = {
    container: {
        elevation: 5,
        shadowColor: darkMode ? brand.dangerLight : brand.danger,
        shadowOpacity: .5,
        shadowRadius: 6,
        shadowOffset: {
            width: 4,
            height: 2
        }
    }
};

export const progressBarSuccess = {
    fill: {
        backgroundColor: darkMode ? brand.successLight : brand.success,
    }
};

export const progressBarWarning = {
    fill: {
        backgroundColor: darkMode ? brand.warningLight : brand.warning
    }
};

export const progressBarDanger = {
    fill: {
        backgroundColor: darkMode ? brand.dangerLight : brand.danger
    }
};

export const progressBarWithLightContrast = {
    bar: {
        backgroundColor: darkMode ? contrast.regular : contrast.lower
    },
};

export const progressCircleSuccess = {
    fill: {
        backgroundColor: darkMode ? brand.successLight : brand.success,
    },
    text: {
        color: darkMode ? brand.successLight : brand.success,
    }
};

export const progressCircleWarning = {
    fill: {
        backgroundColor: darkMode ? brand.warningLight : brand.warning
    },
    text: {
        color: darkMode ? brand.warningLight : brand.warning
    }
};

export const progressCircleDanger = {
    fill: {
        backgroundColor: darkMode ? brand.dangerLight : brand.danger
    },
    text: {
        color: darkMode ? brand.dangerLight : brand.danger
    }
};