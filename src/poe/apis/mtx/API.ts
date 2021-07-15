import { buildURL, requestTransformed } from "../../../common/functions";
import { Collection } from "./Collection";
import { SpecialsOptions } from "./models";

/**
 * @endpoint https://www.pathofexile.com/api/shop/microtransactions/specials
 * @param options
 * @throws [[APIError]]
 */
export const getSpecials = async (options?: SpecialsOptions): Promise<Collection> => {
    const url = buildURL(
        `https://www.pathofexile.com/api/shop/microtransactions/specials`,
        options
    );

    return <Collection>await requestTransformed(Collection, url);
};
