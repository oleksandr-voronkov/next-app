import {IPost} from "../definitions/interfaces";

export const fetchPosts = (): Promise<IPost[]> =>
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())

export const fetchPost = (id: string): Promise<IPost> =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())