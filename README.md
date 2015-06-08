Steps to create the application:

Open command prompt and go to the project directory. Then execute following commands to download TypeScript type definitions:
$ tsd query angular2 --action install
$ tsd query es6-promise rx rx-lite --action install --save

Run TypeScript compiler to create .js file:
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata employee-information.ts

Start the server by:
$ http-server