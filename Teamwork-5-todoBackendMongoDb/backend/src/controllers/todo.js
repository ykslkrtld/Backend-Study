'use strict';

const CustomError = require('../helper/customError');
const Todo = require('../models/todo')
const mongoose = require('mongoose')

module.exports = {
    list: async (req, res) => {
        const data = await Todo.find({});

        res.status(200).send({
            isError: false,
            data
        })

    },
    create: async (req, res) => {

        const data = await Todo.create(req.body);

        res.status(201).send({
            isError: false,
            data
        })

    },

    read: async (req, res) => {

        const isIdValid = mongoose.Types.ObjectId.isValid(req.params.id)

        if(!isIdValid) throw new CustomError('Id is not valid', 400) 

        const data = await Todo.findOne({ _id: req.params.id });

        if(!data) throw new CustomError('Data is not found', 404) 


        res.status(200).send({
            isError: false,
            data
        })

    },

    update: async (req, res) => {

        // const data = await Todo.updateOne({ _id: req.params.id }, req.body);
        // const updatedData = await Todo.findOne({ _id: req.params.id });

        const data = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(202).send({
            isError: false,
            data
        })

    },

    delete: async (req, res) => {

        const { deletedCount } = await Todo.deleteOne({ _id: req.params.id });


        if (!deletedCount) throw new CustomError('Something went wrong!', 404)

        res.status(204).send({
            isError: false,
            data
        })

    },
}