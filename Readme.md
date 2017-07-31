# texvcJs benchmark

this is a simple benchmark to test new texvjs versions

Sample output
```
$ npm test

> texvcjs-ben@1.0.0 test /tmp/texvcjs-bench
> node ./index.js

Directory at /tmp/texvcjs-bench/node_modules/texvcjs2 already exists, skipping
no-mhchem2 x 3,930 ops/sec ±3.76% (78 runs sampled)
mhchem2 x 4,174 ops/sec ±2.81% (81 runs sampled)
no-mhchem x 4,130 ops/sec ±2.74% (81 runs sampled)
mhchem x 4,062 ops/sec ±3.79% (82 runs sampled)
Fastest is mhchem2,no-mhchem,mhchem
```