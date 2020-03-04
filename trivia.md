# What is a promise? What's the difference between a promise and a callback?

A promise is an object that takes a callback function which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states: fulfilled, rejected, pending. ".then" is used to return a promise.

A callback is any function that is passed into another function and called within that other function. Promises make chaining much easier because .then can be chained. 