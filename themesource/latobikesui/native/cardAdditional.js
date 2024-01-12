import { Appearance } from "react-native";
import { anyColorToRgbString } from "../../atlas_core/native/core/helpers/_functions/convertcolors";
import { background, contrast, spacing, border } from "../../../theme/native/custom-variables";

export const darkMode = Appearance.getColorScheme() === "dark";

/* ==========================================================================
    Cards Additional

========================================================================== */

export const cardWhite = {
    container: {
        borderRadius: border.radiusSmall,
        backgroundColor: darkMode ? background.primary : '#FFFFFF',
        marginBottom: spacing.regular,
        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: contrast.lowest,
            },
        }),
        elevation: 5,
        padding: 20,
        shadowColor: darkMode ? background.primary: `rgba(${anyColorToRgbString('#000')},0.7)`,
        shadowOpacity: .2,
        shadowRadius: border.radiusSmall,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
};

export const cardWhiteGraph = {
    container: {
        height: 250,
        paddingVertical: 5,
    }
};

export const cardInfo = {
    container: {
        elevation: 2,
        shadowColor: darkMode ? background.primary: `rgba(${anyColorToRgbString('#000')},0.7)`,
        shadowOpacity: .2,
        shadowRadius: border.radiusSmall,
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderWidth: 1,
        borderColor: contrast.low,
    }
};