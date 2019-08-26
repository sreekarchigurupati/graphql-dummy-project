//Demo User data
const users = [{
    id: '1',
    name: 'Sreekar',
    email: 'chigurupatisreekar@gmail.com',
    age: 22
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@abc.xyz'
}, {
    id: '3',
    name: 'mike',
    email: 'mike@example.com'
}]

//Demo post data
const posts = [{
    id: 'qwew',
    title: 'pikachu birb',
    body: 'yellow',
    published: true,
    author: '2'
}, {
    id: 'fdsf',
    title: 'Memes',
    body: 'loss',
    published: false,
    author: '1'
}, {
    id: 'xasd',
    title: 'FP',
    body: 'Scala is fun',
    published: true,
    author: '3'
}]

//Demo comments data
const comments = [{
    id: 'a',
    text: 'gfgfg',
    author: '3',
    post: 'xasd'
}, {
    id: 'b',
    text: 'henlo birb',
    author: '3',
    post: 'fdsf'
}, {
    id: 'c',
    text: 'is this loss?',
    author: '2',
    post: 'qwew'
}, {
    id: 'd',
    text: 'press F to pay respects',
    author: '1',
    post: 'qwew'
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }