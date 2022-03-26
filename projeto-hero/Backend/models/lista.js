const db = require('.../util/database');

module.exports = class Lista {
    constructor(username, poder, universo)
    {
        this.username = username;
        this.poder = poder;
        this.universo = universo;
    }

    static fetchAll(){
        return db.execute('SELECT * FROM herois', 'SELECT * FROM poderes', 'SELECT * FROM universo');
    }

    static save(lista){
        return db.execute('INSERT INTO herois (username) VALUE (?)',
                          'INSERT INTO poderes (poder) VALUE (?)',
                          'INSERT INTO universo (universo) VALUE (?)', 
        [lista.username, lista.poder. lista.universo]
        );
    }

    static delete(id_user){
        return db.execute('DELETE FROM herois WHERE id= ?', [id_user],
        'DELETE FROM poderes WHERE id= ?', [id_user],
        'DELETE FROM universo WHERE id= ?', [id_user]);

    }
};