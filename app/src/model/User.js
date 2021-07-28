"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, psword} = UserStorage.getUserInfo(this.body.id);
        if (id){
            if (id === this.body.id && psword == this.body.pw){
                return {success: true};
            }
            return {success: false};
        }
        return {success: false}
    }
}

module.exports = User;