var mongoose = require('mongoose');
var Modulos = mongoose.model('Modulos');


// Get all Modulos
module.exports.modulosGetAll = function (req, res) {

    console.log('Get all modulos');

    Modulos
        .find()
        .exec(function (err, modulos) {
            if (err) {
                console.log("Erro finding modulos");
                res
                    .status(500)
                    .json(err)
            } else {
                console.log("found modulos", modulos.length);
                res
                    .json(modulos);
            }
        })
}

//Get a sigle Modulo
module.exports.moduloGetOne = function (req, res) {

    var moduloId = req.params.moduloId;

    console.log('GET the modulo ', moduloId);

    Modulos
        .findById(moduloId)
        .exec(function (err, doc) {
            var response = {
                status: 200,
                message: doc
            }
            if (err) {
                console.log("Erro finding Modulo ");
                response.status = 500;
                response.message = err;
            } else if (!doc) {
                response.status = 404;
                response.message = {
                    "message": "Modulo id " + moduloId + " not found"
                };
            }
            res
                .status(response.status)
                .json(response.message);
        })
}

// Delete a Modulo (PostMan)
  module.exports.moduloDeleteOne = function (req, res) {
    var moduloId = req.params.moduloId;
  
    Modulos
      .findByIdAndRemove(moduloId)
      .exec(function (err, hotel) {
        if (err) {
          res
            .status(500)
            .json(err)
        } else {
          console.log("delete modulo data from ", moduloId);
          res
            .status(204)
            .json(hotel)
        };
      })
  };
  