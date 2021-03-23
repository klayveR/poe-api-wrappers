/**
 * @private
 */
export const stripBOM = (str: string): string => {
    if (str.charCodeAt(0) === 0xfeff) {
        str = str.slice(1);
    }

    return str;
};
