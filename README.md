# Composing React Components

## Running this project

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server runs on port `1234` by default, but will use another if `1234` is
being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`.
- Run `npm start` to compile the project and spin up a dev server on `http://localhost:1234`.

####Q+A:
Can you export default more than one thing on each file, or can you only export default one thing per file?
- You can only export default one thing per file.
But you can export multiple things in a file - named exports.


Previously when using .map(), we assigned the new array to a variable, is spread syntax similar? Is it just holding a new array with map?
- In changeStatus function: .map() is creating a new array and setting it to the useState. {...friend} is creating a new object by copying the old object, and changing the key married.


From the example:
let obj = {a:2, b:6}
let newObj = {...obj}
let newObj = {...obj, a: 9}

Is the object deeply copied object?
- Yes, it spreads all of the obejct, it will copy the whole object - all of the nested elements.
