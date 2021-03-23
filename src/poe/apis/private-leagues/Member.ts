import * as Characters from "../characters";
import { Transformable } from "../../../common/classes";
import { RealmOptions } from "../../shared";

export class Member extends Transformable {
    id!: number;
    memberName!: string;
    role!: string;
    roleName!: string;
    isAcceptable!: boolean;
    isRemovable!: boolean;
    makeOwner!: boolean;
    promote!: boolean;

    /**
     * @remarks
     * Trying to get characters when the profile or character tab is private will result in an error.
     *
     * @param options
     * @returns A list of characters from this member
     * @throws [[APIError]]
     */
    public async getCharacters(options?: RealmOptions): Promise<Characters.Character[]> {
        return await Characters.get(this.memberName, undefined, options);
    }
}
