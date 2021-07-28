"use strict";

const UserStorage = require('../../model/UserStorage');
const User = require("../../model/User");

const ouptput = {
    hello:  (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render('home/login');
    },
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    }
}


module.exports = {
    ouptput,
    process
}