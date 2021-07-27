"use strict"

class UserStorage {
    static #users = {
        id: ["Teemo", 'chanwoo', 'fGSM'],
        psword: ["1234", "chanchan", 'GGSM'],
    }
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }
}

module.exports = UserStorage;