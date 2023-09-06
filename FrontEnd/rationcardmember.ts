import { RationCard } from "src/rationcard";

export class RationCardMember{
    memberId!: number;
    memberName!: String;
    age!: number;
    gender!: Gender;
    relation!:String;
    rationCard!:RationCard;
}

export enum Gender {
	MALE, FEMALE
 }