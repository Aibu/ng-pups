var Puppy = require('./server/db').Puppy;
var randomPuppy = require('random-puppy');
var dogNames = require('dog-names');
var Promise = require('bluebird');
var range = require('lodash/range');

var features = [
    'Factories',
    'Controllers',
    '$scope',
    'ui.router',
    'ng-model',
    'Providers',
    'Directives'
];

var getRandomFeature = function () {
  return features[Math.floor(Math.random() * features.length)];
};

Puppy.sync({force: true})
    .then(function () {
        return Promise.map(range(15), function () {
            return randomPuppy()
                .then(function (photoUrl) {
                    return {
                        photo: photoUrl,
                        name: dogNames.allRandom(),
                        favoriteFeature: getRandomFeature()
                    };
                })
                .then(function (pupInfo) {
                    return Puppy.create(pupInfo);
                });
        });
    })
    .then(function () {
        console.log('Complete!');
    });




