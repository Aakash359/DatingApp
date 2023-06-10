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
    ERROR = '#EF5258'
}

export const getModalBackgroundColor = (theme: THEME) => {
    switch (theme) {
        case THEME.LIGHT:
            return COLORS.LIGHT_10;
        case THEME.DARK:
            return COLORS.LIGHT_20;
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
