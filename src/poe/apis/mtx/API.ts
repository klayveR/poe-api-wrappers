import { buildURL } from "../../../common/functions";
import { requestTransformed } from "../../functions";
import { Collection } from "./Collection";
import { SpecialsOptions } from "./models";

/**
 * @endpoint https://api.pathofexile.com/shop/microtransactions/specials
 * @param options
 * @throws [[APIError]]
 */
export const getSpecials = async (options?: SpecialsOptions): Promise<Collection> => {
    const url = buildURL(`https://api.pathofexile.com/shop/microtransactions/specials`, options);

    return await requestTransformed(Collection, url);
};
