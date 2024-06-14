const baseUrl = 'https://jsonplaceholder.typicode.com'

const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => urls.users.base + '/' + id,
        postsByUserId: (id: number): string => urls.users.base + '/' + id + '/posts',
    },
    posts: {
        base: '/posts',
    },
}

export {
    baseUrl,
    urls
}