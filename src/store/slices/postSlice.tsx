import {IPost} from "../../models";

type PostSliceType = {
    posts: IPost[]
}

const initialState: PostSliceType = {
    posts: []
}

