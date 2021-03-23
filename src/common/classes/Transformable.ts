import { classToPlain } from "class-transformer";

export class Transformable {
    /**
     * Converts this class back into a plain javascript object.
     *
     * @remarks
     * Property keys which have been renamed during the initial transformation to a class object will
     * be reverted to the original keys. For example, the `cachedSince` property in the [[Ladder]]
     * class will be reverted to the original API property, `cached_since`.
     */
    public toPlain(): unknown {
        return classToPlain(this);
    }
}
