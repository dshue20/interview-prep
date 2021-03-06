# What is a symbol?
Immutable object with internal ID

# What is Active Record?
Rails ORM (Object Relational Mapping); maps tables to classes, rows to objects, columns to object attributes; abstracts away SQL queries

# What is a migration?
Migrations allow you to make changes to the database schema

# What is a controller?
Routes external requests to internal actions

# What is CSRF?
Cross-Site Request Forgery: When a hacker submits a page request on your behalf to a different website, may reveal sensitive data; Rails can require CSRF token by adding 'protect_from_forgery' to ApplicationController

# Redirect vs render?
Redirect usually implies that something went wrong with a request, so the user will be redirected to a different view. Render is used to bring up content inside a controller assuming there are no errors

# What is a polymorphic association?
Allows an ActiveRecord object to be connected to multiple other ActiveRecord objects; e.g. likes on posts and comments

# Extend vs include
The “include” makes the module’s methods available to the instance of a class, while “extend” makes these methods available to the class itself

# Block vs proc vs lambda
Block: chunk of code that can be used as an input or with a method call; code in block can be invoked using 'yield'
Proc: code bound to a set of local variables; functions can be called on a proc (e.g. call)
'&' is used to convert between block and proc
Lambda: proc that must receive the same number of arguments as defined; returns from within lambda, not current method