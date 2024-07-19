"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// Model
const Todo = require('../models/todo.model')


module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll()
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async(req, res) => {

        // const receivedData = req.body
        // // console.log(receivedData)
    
        // const data = await Todo.create({
        //     title: receivedData.title,
        //     description: receivedData.description,
        //     priority: receivedData.priority,
        //     isDone: receivedData.isDone
        // })
    
        const data = await Todo.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data.dataValues
        })
    
    },

    read: async (req, res) => {

        // const data = await Todo.findOne({ where: { id: req.params.id } })
        const data = await Todo.findByPk(req.params.id)
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        // const data = await Todo.update({ ...newData }, {...filter})
    const data = await Todo.update(req.body, {where: { id: req.params.id }})
    // console.log(data) // const data [0] gönderirse put başarısız [1] ise put başarılı

    // res.status(202).send({
    //     error: false,
    //     result: data,
    //     // message: (data[0] >= 1 ? 'Updated' : 'Can not updated'),
    //     message: (data[0] ? 'Updated' : 'Can not updated'),
    //     new: await Todo.findByPk(req.params.id) // Güncellenmiş kaydı göster
    // })

    if(data[0]) {
        // put
        res.status(202).send({
            error: false,
            result: data,
            message: 'Updated',
            new: await Todo.findByPk(req.params.id) // Güncellenmiş kaydı göster
        })

    } else {
        // Not put
        // res.status(404).send({
        //     error: true,
        //     result: data,
        //     message: 'Can not updated',
        // })
        res.errorStatusCode = 404
        throw new Error('Can not updated. Maybe there is no data to update')
        
    }

    },

    delete: async (req, res) => {

        // const data = await Todo.destroy({... filter})
        const data = await Todo.destroy({ where: { id:req.params.id } })
        console.log(data) // const data 0 gönderirse put başarısız 1 ise put başarılı
    
        // res.status(204).send({
        //     error: false,
        //     result: data,
        //     message: (data >= 1 ? 'Deleted' : 'Can not deleted'),
        // })
    
        if(data >= 1) {
            // deleted
            // res.status(204).send({
            //     error: false,
            //     result: data,
            //     message: 'Deleted',
            // })
            res.sendStatus(204)
    
        } else {
            // Not deleted
            // res.status(404).send({
            //     error: true,
            //     result: data,
            //     message: 'Can not deleted',
            // })
            res.errorStatusCode = 404
            throw new Error('Can not deleted. Maybe already deleted')
            
        }
    
    }

}