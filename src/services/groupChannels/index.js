'use strict';

const _ = require('lodash');
const actions = require('./actions');

const createService = require('../../utils/createService');

const messagesService = require('../messages');

module.exports = function (request) {
    const service = createService(request, '/group_channels', actions);
    service.messages = messagesService(request, '/group_channels/{channel_url}');
    return service;
};