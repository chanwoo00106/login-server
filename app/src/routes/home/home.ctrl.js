"use strict";

const users = {
    id: ["Teemo", 'chanwoo', 'fGSM'],
    psword: ["1234", "chanchan", 'GGSM'],
}

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
        const id = req.body.id,
            psword = req.body.pw;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true
                });
            }
        }

        return res.json({
            success: false
        });
    }
}


module.exports = {
    ouptput,
    process
}