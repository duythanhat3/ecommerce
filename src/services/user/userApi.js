let id = 0;
let users = [];

const request = (response = null, isError = false) => new Promise((resolve, reject) => {
    setTimeout(() => isError ? reject(response) : resolve(response), 1500);
});

const createUser = data => {
    id++;
    let user = {...data, id};

    users = users || [];
    users.push(user);

    return user;
};

for (let i = 1; i <= 10; i++) {
    createUser({
        name: `User ${i}`,
        email: `user${i}@gmail.com`,
    });
}

export default {
    fetch: () => request(users),

    create: user => request(createUser(user)),

    update: (id, data) => {
        users.forEach(user => {
            if (user.id === id) {
                Object.assign(user, data);
            }
        });

        return request();
    },

    remove: id => {
        users = users.filter(user => user.id === id);

        return request();
    },
};