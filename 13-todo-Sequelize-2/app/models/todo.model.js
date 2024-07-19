"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// SEQUELIZE
// npm i sequelize sqlite3

const { Sequelize, DataTypes } = require('sequelize')

// Connection
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
const sequelize = new Sequelize('sqlite:' + process.env.SQLITE || './db.sqlite3') // new varsa Instance'dır normalde Pasqal olması gerekir. (Kullanacağımız veritabanı:veri tabanının yeri) artık veritabanı ile ilgili tüm işlmleri burdan yapacağız


// Sequelize Model
// Her bir model veri tabanında bir tabloya karşılık gelir
// sequelize.define('tableName', {...columns})

const Todo = sequelize.define('todos', {  // Todo isminde model oluşturuyoruz sequelize.define() ile

    // ID sütunu belirtmeye gerek yoktur. Sequelize ID sütununu otomatik oluşturur
    // id: {
    //     // ilk 4 kullanılacak diğerleriyle pek işimiz yok
    //     type: DataTypes.INTEGER, // DATATYPE
    //     allowNull: false, // default: true, sutun verisi boş olabilir mi
    //     unique: true, // default: false, benzersiz kayıt mı / email, id vb
    //     defaultValue: 0, // kayıt eklendiğinde default olarak ne yazılsın
    //     autoIncrement: true, // default: false, sütun değeri her bir kayıtta otomatik olarak +1 artsın mı
    //     primaryKey: true, // default: false, tablonun her bir kaydını ifade eden eşşiz numara
    //     comment: 'yorum eklenebilir',
    //     field: 'custom_field_name' id alanının veritabanında custom_field_name sütunuyla eşleşeceğini belirtir.
    // },

    title: {
        type: DataTypes.STRING(256), // varchar(256)
        allowNull: false
    },

    description: DataTypes.TEXT, // sadece type belirleyeceksek bu şekilde yapabiliriz obje açmaya gerek yok

    priority: { // 1:High, 0:Normal, -1:Low
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    // kadir: {
    //     type: DataTypes.TEXT,
    //     allowNull: false,
    //     defaultValue: "deneme",
    // },

    // createdAt ve updatedAt tanımlamaya gerek yok. Otomatik oluşturulur.
})


    // Syncronization
    // Modelleri veritabanına uygula

// sequelize.sync() // Create Table (sadece yeni bir tablo oluşturur. sonradan yapılan değişikleri algılamaz)
// sequelize.sync({force: true}) // Delete Table & create table (tablo silip baştan oluşturduğu için olan datalar da silinir)
// sequelize.sync({alter: true}) // To Backup & Delete Table & create table & from backup (önce olanı yedeğe alıp silip oluşturup geri yüklüyor backuptaki datayı)
// **** Sencronisation bir kere yapınca yoruma alın ki her değişiklikte çalışmasın


// Connect to DB
sequelize.authenticate()
    .then(() => console.log('* DB connected *'))
    .catch(() => console.log('* DB not connected *'))


// Model Export
module.exports = Todo
