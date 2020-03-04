# What is a promise? What's the difference between a promise and a callback?

A promise is an object that takes a callback function which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states: fulfilled, rejected, pending. ".then" is used to return a promise.

A callback is any function that is passed into another function and called within that other function. Promises make chaining much easier because .then can be chained. 

# What is the event loop? 

The event loop handles processing asynchronous requests alongside synchronous requests. When functions are invoked, they are placed in a call stack and evaluated one at a time. When an asynchronous function is invoked, the asynchronous parts of the function are handled within some web api and then loaded onto a task queue when it is ready to be returned. The event loop waits for the call stack to be empty and then takes the first item in the task queue and places it on the top of the call stack.