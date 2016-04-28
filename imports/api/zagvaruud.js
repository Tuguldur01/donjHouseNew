import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const zagvaruud = new Mongo.Collection('zagvaruud');

zagvaruud.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});

turul = new SimpleSchema({
    categoryName: {
        type: String,
        label: "Төрөл",
        allowedValues: ['Элит хаус', 'Модерн хаус', 'Сонгодог хаус', 'Дүнзэн хаус', 'Канад хаус', 'Энгийн хаус'],
        autoform: {
            options: [
                {label: "Элит хаус", value: "Элит хаус"},
                {label: "Модерн хаус", value: "Модерн хаус"},
                {label: "Сонгодог хаус", value: "Сонгодог хаус"},
                {label: "Дүнзэн хаус", value: "Дүнзэн хаус"},
                {label: "Канад хаус", value: "Канад хаус"},
                {label: "Энгийн хаус", value: "Энгийн хаус"}
            ]
        }
    },
});

var Schemas = {};

Schemas.zagvaruud = new SimpleSchema({
    Ner: {
        type: String,
        label: "Нэр",
        max: 200
    },
    turul: {
        type: turul
    },
    tailbar: {
        type: Number,
        label: "Тайлбар",
        min: 0
    },
    content: {
    type: String,
    label: "Yet another poem",
    autoform: {
      afFieldInput: {
        type: 'textangular'
              }
            }
    },
    plans: {
            type: String,
            label: "План зургууд",
            // autoform: {
            //     afFieldInput: {
            //         type: 'summernote',
            //         class: 'editor'
            //     }
            // }
        },
    taluud: {
        type: String,
        label: "Талуудын зураг",
        optional: true,
        max: 1000
    },
    deerees: {
        type: Number,
        label: "Дээрээс",
        min: 0
    },
    ogtlol: {
        type: Number,
        label: "Огтлол",
        min: 0
    }
});

zagvaruud.attachSchema(Schemas.zagvaruud);
