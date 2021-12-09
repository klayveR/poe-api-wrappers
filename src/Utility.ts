/**
 * @internal
 */
export class Utility {
    public static applyDefaults<T>(options: T, defaults: T): T {
        return Object.assign({}, defaults, options);
    }
}
