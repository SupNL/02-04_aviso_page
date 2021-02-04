export enum PostType {
    SUGGESTION="suggestion",
    CRITICISM="criticism",
    COMPLIMENT="compliment"
}

export interface PostInterface {
    message : string;
    images ?: [string];
    type : PostType;
    date : string;
}