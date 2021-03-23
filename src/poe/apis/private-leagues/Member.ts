import { Transformable } from "../../../common/classes";

export class Member extends Transformable {
    id!: number;
    memberName!: string;
    role!: string;
    roleName!: string;
    isAcceptable!: boolean;
    isRemovable!: boolean;
    makeOwner!: boolean;
    promote!: boolean;
}
