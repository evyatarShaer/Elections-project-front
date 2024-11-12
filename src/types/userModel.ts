import { CandidateModel } from "./candidateModel";

export interface UserModel {
    username: string;
    isAdmin: boolean;
    hasVoted: boolean;
    votedFor: CandidateModel;
}