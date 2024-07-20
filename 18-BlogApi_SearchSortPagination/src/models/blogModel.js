"use strict";

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Mongoose

const mongoose = require("mongoose");

// const { default: mongoose } = require("mongoose"); // kendi geldi

// const { type } = require("os"); // kendi geldi

/* ------------------------------------------------------- *


// const ModelSchema = new mongoose.Schema({ ...fields }, { ...settings })
const ModelSchema = new mongoose.Schema(
  {
    // PrimaryKey (_id) tanımlamaya gerek yoktur. Otomatik tanımlanır.
    // _id: Number

    fieldName: {
      type: Number, // js'nin kendi type'ları kullanılır
      default: null, // veri gelmediğinde yazılacak veri
      trim: true, // baştaki sondaki boşlukları kırpar (String)
      unique: true, // Benzersiz kayıt
      index: true, // aramalarda hızlı erişim sağlar
      required: true, // veri gönderimi zorunlu mu
      required: [true, "Bu data mutlaka gönderilmeli"], // veri gönderimi zorunlu mu?, Hata mesajı
      // enum: ['1', '2', '3']
      // enum: [1, 2, 3] // Belirli değerlerden biri olmak zorunda
      enum: [[1, 2, 3], "Bu değerlerden biri olmalıdır"], // Belirli değerlerden biri olmak zorunda, hata mesajı
      // validate: (data) => true // gelen data formatının doğruluğunu kontrol etme. --Function
      validate: [
        (data) => {
          return true;
        },
        "Gönderilen data formatı yanlıştır",
      ], // gelen data formatının doğruluğunu kontrol etme, hata mesajı
      get: (data) => data, // bu veriye erişilmek istendiğinde otomatik çalışan fonksiyon
      set: (data) => data, // bu field'a veri kaydedilmek istendiğinde otomatik çalışan fonksiyon
    },
  },
  {
    collection: "tableName", // tablo ismi
    timestamps: true, // createdAt ve updatedAt otomatik yönetilsin. (tanımlamaya gerek yok) - false dersek ikisi de çalışmayacaktır.
  }
);

// fieldName: String // Shorthand sadece tip tanımlayacaksak sequlize da olduğu gibi tek satırda yaplabilir


// Model oluşturmak için önce Schema oluşturacağız (üstte) sonra onu modele çevireceğiz

const ModelName = mongoose.model('ModelName', ModelSchema)

/* ------------------------------------------------------- */

// BlogCategory Schema:

const BlogCategorySchema = new mongoose.Schema({

    // _id

    name: {
        type: String,
        trim: true,
        required: true
    }

}, {
    collection: 'blogCategories',
    timestamps: true
})

// Set Model
// const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema) // Altta kullandık

/* ------------------------------------------------------- */

// BlogPost Schema:

const BlogPostSchema = new mongoose.Schema({

    // _id

    userId: {

      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    categoryId: { // Default Relation : ManyToOne
        type: mongoose.Schema.Types.ObjectId, // Hexadecimal Format: 'fdecba9876543210'
        ref: 'BlogCategory', // ID hangi modele ait. --- mongoose.model('ModelName', ModelSchema) --- const ile tanımladığımız değil, onu model ile işlem yaparken kullanıyoruz.  parantez içerisndeki isim. --- ikisini aynı vermek daha mantıklı karışıklık olmaması için
        required: true,
        // unique: true, // Covert to OneToOne Relation
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    // createdAt // timestamps: true
    // updatedAt // timestamps: true

}, {
    collection: 'blogPosts',
    timestamps: true
})

// Set Model
// const BlogPost = mongoose.model('BlogPost', BlogPostSchema) // Altta kullandık

/* ------------------------------------------------------- */

// module.exports = {
//     BlogCategory: BlogCategory,
//     BlogPost: BlogPost,
// }


module.exports = {
         BlogCategory: mongoose.model('BlogCategory', BlogCategorySchema),
         BlogPost: mongoose.model('BlogPost', BlogPostSchema)
     }  // yukarıda modele çevirmeye uğraşmadan direkt export ederken modele çevirebiliriz




/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
