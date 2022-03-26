const db = require('.../util/database');

module.exports = class User {
    constructor(username, email, psw)
    {
        this.username = username;
        this.email = email;
        this.psw = psw;
    }

    static find(email){
        return db.execute('SELECT * FROM usuario WHERE email = ?', [email]);
    }

    static save(username){
        return db.execute('INSERT INTO usuario (username, email, psw) VALUES (?, ?, ?)', 
        [username.username, username.email. username.psw]
        );
    }

};

