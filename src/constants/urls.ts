const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: (id: number) => urls.users.base + `${id}`
    },
    posts: {
        base: '/posts',
        byId: (id: number) => urls.posts.base + `${id}`
    }
}
export {
    baseURL,
    urls
}