var plugin = function (server, options, next) {
    server.route({
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {

            return reply('ok');
        }
    });
    return next();
};

plugin.attributes = {
    pkg: require('../package.json')
};


module.exports = plugin;