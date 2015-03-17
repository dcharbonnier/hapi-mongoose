/* globals global, require, before */

var Hapi = require('hapi');

global.should = require('should');
global.mongoose = require('mongoose');
global.Schema = mongoose.Schema;
global.server = new Hapi.Server();

before(function () {
    mongoose.model('Tank', new mongoose.Schema({
        name: String,
        size: String
    }));
    mongoose.model('Thing', new mongoose.Schema({
        name: String,
        binary: Buffer,
        living: Boolean,
        updated: {type: Date, default: Date.now},
        age: {type: Number, min: 18, max: 65},
        mixed: Schema.Types.Mixed,
        _someId: Schema.Types.ObjectId,
        array: [],
        ofString: [String],
        ofNumber: [Number],
        ofDates: [Date],
        ofBuffer: [Buffer],
        ofBoolean: [Boolean],
        ofMixed: [Schema.Types.Mixed],
        ofObjectId: [Schema.Types.ObjectId],
        nested: {
            stuff: {type: String, lowercase: true, trim: true}
        }
    }));
    mongoose.model('Think', new mongoose.Schema({
        idea: String,
        tank: {type: Schema.Types.ObjectId, ref: 'Tank'},
        things: [{type: Schema.Types.ObjectId, ref: 'Thing'}]
    }));

    server.connection({
        host: 'localhost',
        port: 8000
    });

    server.register({
        register: require('../src').plugin,
        options: {
            models: ['Thank', 'Thing', 'Think']
        }
    }, function () {

    });

    server.start();
});

