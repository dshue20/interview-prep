# What happens when you navigate to www.google.com?

1. Browser tries to get an IP address. Checks its own DNS cache, then OS DNS cache, then router's DNS cache, then ISP / DNS server.
2. Browser builds HTTP GET string with the URL
3. Browser sends request over network (something about Border Gateway Protocol)
4. Server parses request string and routes it on the request path using Regex
5. Application layer assembles a response
6. Response goes back over the network
7. Browser parses the response
8. Browser checks response headers (esp status code)
9. Browser renders HTML

# What is CSRF?
Cross-Site Request Forgery: When a hacker submits a page request on your behalf to a different website, may reveal sensitive data; Rails can require CSRF token by adding 'protect_from_forgery' to ApplicationController