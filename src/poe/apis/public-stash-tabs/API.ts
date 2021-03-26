import { requestTransformed } from "../../../common/functions";
import { Chunk } from "./Chunk";

/**
 * @endpoint http://api.pathofexile.com/public-stash-tabs
 * @param nextChangeId The next change ID you received from previously fetching changes
 * @throws [[APIError]]
 */
export const getChunk = async (nextChangeId?: string): Promise<Chunk> => {
    let urlString = `http://api.pathofexile.com/public-stash-tabs`;

    if (nextChangeId) {
        urlString += `/${nextChangeId}`;
    }

    const url = new URL(urlString);
    return <Chunk>await requestTransformed(Chunk, url);
};
