export enum THEME {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export enum COLORS {
    LIGHT_100 = '#F5F5FD',
    LIGHT_90 = '#DDDDE5',
    LIGHT_80 = '#C6C6CD',
    LIGHT_70 = '#AEAEB6',
    LIGHT_60 = '#96969E',
    LIGHT_50 = '#7F7F86',
    LIGHT_40 = '#67676E',
    LIGHT_30 = '#4F4F57',
    LIGHT_20 = '#38383F',
    LIGHT_10 = '#202027',
    BRAND_LIGHT = '#DE49CC',
    BRAND_DARK = '#5134A9',
    PRIMARY_LIGHT = '#DE49CC',
    PRIMARY_DARK = '#5134A9',
    INFO = '#42A5F5',
    SUCCESS = '#00B751',
    ERROR = '#EF5258',
    BRAND_RADIO_BG_DARK = '#272B31',
    ONLINE_STATUS = '#0FE16D'
}

export const getModalBackgroundColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_10;
        case THEME.DARK:
            return COLORS.LIGHT_20;
    }
};

export const getDarkBackgroundColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_20;
        case THEME.DARK:
            return COLORS.LIGHT_10;
    }
};

export const getBorderPrimaryColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_20;
        case THEME.DARK:
            return COLORS.LIGHT_30;
    }
};

export const getIconBackgroundColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_10;
        case THEME.DARK:
            return COLORS.LIGHT_10;
    }
};

export const getTextPrimaryColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_10;
        case THEME.DARK:
            return COLORS.LIGHT_80;
    }
};

export const getTextSecondaryColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_10;
        case THEME.DARK:
            return COLORS.LIGHT_60;
    }
};

export const getTextButtonColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_10;
        case THEME.DARK:
            return COLORS.LIGHT_100;
    }
};

export const getSeperatorColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_90;
        case THEME.DARK:
            return COLORS.LIGHT_20;
    }
}

export const getPillColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_90;
        case THEME.DARK:
            return COLORS.LIGHT_30;
    }
}

export const getBrandColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.BRAND_LIGHT; //tbd
        case THEME.DARK:
            return COLORS.BRAND_DARK;
    }
}

export const getBrandSecondaryColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.BRAND_DARK; //tbd
        case THEME.DARK:
            return COLORS.BRAND_LIGHT;
    }
}

export const getRadioGroupBackgroundColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_20;
        case THEME.DARK:
            return COLORS.BRAND_RADIO_BG_DARK;
    }
}

export const getSearchInputBorderColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_90;
        case THEME.DARK:
            return COLORS.LIGHT_40;
    }
}

export const getPlaceholderTextColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_40;
        case THEME.DARK:
            return COLORS.LIGHT_40;
    }
}

export const getUnreadMessageTextColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_100;
        case THEME.DARK:
            return COLORS.LIGHT_100;
    }
}