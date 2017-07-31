'use strict';

const niv = require('npm-install-version');
const benchmark = require('benchmark');
const suite = new benchmark.Suite();

niv.install('https://github.com/manfredschaefer/texvcjs#54da8637cf778997f559a884260fab9d729f333b', { destination: 'texvcjs2' });
const texvcjs2 = require('texvcjs2');
const texvcjs = require('mathoid-texvcjs');

suite
    .add('no-mhchem2', function () {
        texvcjs2.parse('a+b')
    })
    .add('mhchem2', function () {
        texvcjs2.parse('a+b', {usemhchem: true})
    })
    .add('no-mhchem', function () {
        texvcjs.parse('a+b')
    })
    .add('mhchem', function () {
        texvcjs.parse('a+b', {usemhchem: true})
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();