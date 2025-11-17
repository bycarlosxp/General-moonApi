import mysql from 'mysql2/promise'


const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'kira',
    database: 'mooondb'
})

if (!connection) {
    console.error("Failed to connect to the database")
    process.exit(1)
}

export class MySQLModel {
    constructor() {
        this.connection = connection
    }

    /**
     * Devuelve la misma forma que `connection.execute` ([rows, fields])
     * Nota: validar el nombre de la tabla para evitar inyección básica.
     */
    static getAll(table) {
        if (!/^[A-Za-z0-9_]+$/.test(table)) {
            throw new Error('Invalid table name')
        }
        return connection.execute(`SELECT * FROM \`${table}\``)
    }

    static getInvoices(table) {
        if (!/^[A-Za-z0-9_]+$/.test(table)) {
            throw new Error('Invalid table name')
        }
        return connection.execute(`SELECT * FROM \`${table}\` INNER JOIN invoice_details ON invoice.invoice_id = invoice_details.invoice_id`)
    }

    static getbyId(table, id) {
        if (!/^[A-Za-z0-9_]+$/.test(table)) {
            throw new Error('Invalid table name')
        }
        return connection.execute(`SELECT * FROM \`${table}\` WHERE id = ?`, [id])
    }

    static create(table, data) {
        if (!/^[A-Za-z0-9_]+$/.test(table)) {
            throw new Error('Invalid table name')
        }
        return connection.execute(`INSERT INTO \`${table}\` SET ?`, [data])
    }

    static update(table, id, data) {
        if (!/^[A-Za-z0-9_]+$/.test(table)) {
            throw new Error('Invalid table name')
        }
        return connection.execute(`UPDATE \`${table}\` SET ? WHERE id = ?`, [data, id])
    }
    
    static delete(table, id) {
        if (!/^[A-Za-z0-9_]+$/.test(table)) {
            throw new Error('Invalid table name')
        }
        return connection.execute(`DELETE FROM \`${table}\` WHERE id = ?`, [id])
    }
}


