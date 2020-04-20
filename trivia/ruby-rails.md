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