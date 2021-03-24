import { Transform } from "class-transformer";

export const TransformNullToUndefined = (): PropertyDecorator => {
    return Transform(({ value }): unknown => (value !== null ? value : undefined) as unknown, {
        toClassOnly: true,
    });
};
