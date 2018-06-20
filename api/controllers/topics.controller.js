var mongoose = require('mongoose');
var Modulos = mongoose.model('Modulos');

//Get all Topics
module.exports.topicsGetAll = function (req, res) {
    var moduloId = req.params.moduloId;
    console.log('GET module', moduloId);

    Modulos
        .findById(moduloId)
        .select('topics')
        .exec(function (err, doc) {
            var response = {
                status: 200,
                message: doc
            }
            if (err) {
                console.log("Erro finding Topics");
                response.status = 500;
                response.message = err;

            } else if (!doc) {
                console.log("This Modulo does not have a Topic");
                response.status = 404;
                response.message = {
                    "message": "Modulo Topic not find"
                };
            }
            console.log('retur document : ', doc);
            res
                .status(response.status)
                .json(response.message.topics);
        })

}

//Get a sigle Topic
module.exports.topicsGetOne = function (req, res) {
    var moduloId = req.params.moduloId;
    var topicId = req.params.topicId;
    console.log("GET topicId " + topicId + " for moduloId" + moduloId);

    Modulos
        .findById(moduloId)
        .select('topics')
        .exec(function (err, doc) {
            if (err) {
                console.log(" Erro finding a sigle topic")
                res
                    .status(500)
                    .json(err);
            } else {
                var topico = doc.topics.id(topicId);
                if (topico == null) {
                    console.log("Id does not exist")
                    res
                        .status(404)
                        .json({
                            "message": "Topic ID incorrect"
                        })
                } else {
                    console.log(" Returned topic :  ", topico);
                    res
                        .status(200)
                        .json(topico);
                }
            }
        })


}