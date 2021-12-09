import { instanceToPlain } from "class-transformer";

/**
 * @internal
 */
export abstract class TransformableObject {
    /**
     * Converts this transformed object back into a plain JavaScript object.
     *
     * Property keys which have been renamed during the initial transformation to a class object will
     * be reverted to the original keys. For example, the `cachedSince` property in the [[Ladder]]
     * class will be reverted to the original API property, `cached_since`.
     */
    public toPlain() {
        return instanceToPlain(this);
    }
}
