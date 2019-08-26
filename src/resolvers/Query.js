const Query = {
    users(parent, args, {
        db
    }, info) {
        if (!args.query) {
            return db.users
        } else
            return db.users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
    },
    posts(parent, args, {
        db
    }, info) {
        if (!args.query) {
            return db.posts
        } else
            return db.posts.filter((post) => {
                return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
            })
    },
    comments(parent, args, {
        db
    }, info) {
        return db.comments
    },
    me() {
        return {
            id: 'abc123',
            name: 'sreekar',
            email: 'chigurupatisreekar@gmail.com'
        }
    },
    post() {
        return {
            id: 'gg134',
            title: 'How to GraphQL',
            body: 'Udemy and chill',
            published: false
        }
    }
}

export {Query as default}