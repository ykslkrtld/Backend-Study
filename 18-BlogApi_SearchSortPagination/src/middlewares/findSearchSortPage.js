"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// queryHandler middleware

module.exports = async (req, res, next) => {

    // SEARCHING & SORTING & PAGINATION

    // FILTERING:
    // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
    const filter = req.query?.filter || {}
    // console.log(filter)



    // SEARCHING:
    // URL?search[fieldName1]=value1&search[fieldName2]=value2
    const search = req.query?.search || {}
    console.log(search)
    for(let key in search)
      search[key] = { $regex: search[key] }
    console.log(search)
    // filter searchden performans olarak daha iyi mümkün oldukça search yerine onu kullanmak gerek -- search stringlerde işe yarıyor sadece regexten dolayı ama onda bile mümkünse filter kullanılmalı --- mesela published boolean olduğundan veya regex kullanılamadığından search kullanılamaz



    // SORTING:
    // URL?sort[fieldName1]=+1&sort[fieldName2]=-1 // Mongoose 8.0 den itibaren deprecated oldu
    // URL?sort[fieldName1]=asc&sort[fieldName2]=desc
    const sort = req.query?.sort || {}
    console.log(sort)




    // Pagination
    // URL?page=3&limit=15
    // Limit = page size
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
    console.log(limit, typeof limit)
    // Page
    let page = Number(req.query?.page)
    page = page > 0 ? page : 1
    // Skip
    let skip =Number(req.query?.skip)
    skip = skip > 0 ? skip : ((page-1) * limit)


    // Run
    // const data = await BlogPost.find({...filter, ...search}).skip(skip).sort(sort).limit(limit);
    // const data = await BlogPost.find({...filter, ...search}).skip(skip).sort(sort).limit(limit).populate('categoryId');

    res.getModelList = async ( Model, populate = null ) => {

        return await Model.find({...filter, ...search}).skip(skip).sort(sort).limit(limit).populate(populate);
    }
}


/* ------------------------------------------------------- */
