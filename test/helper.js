/* globals global, require, before */

global.should = require('should');
global.mongoose = require('mongoose');
global.Schema = mongoose.Schema;

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
});

