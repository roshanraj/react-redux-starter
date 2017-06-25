
export const CONTENT = 'CONTENT';
export const SWITCH = 'SWITCH';

export function active(value) {

    return {
        type: SIDEPANEL,
        active: value
    };
}

export function menuSwitch(value) {

    return {
        type: SWITCH,
        switch: value
    };
}
