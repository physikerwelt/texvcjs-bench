'use strict';

var texvcjs = require('mathoid-texvcjs');
var benchmark = require('benchmark');
var suite = new benchmark.Suite();

//warmup
texvcjs.check('F=g');

suite
    .add('no-mhchem', function () {
        texvcjs.check('a+b')
    })
    .add('mhchem', function () {
        texvcjs.check('a+b', {usemhchem: true})
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({'async': true});