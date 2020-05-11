# Scalability

* Scalability: capability of a system, process, or a network to grow and manage increased demand
    * Includes any distributed system that can continuously evolve to support growing amount of work (number of transactions)
* AWS allows you to automatically scale number of databases
* Vertical scaling: add more power (CPU, RAM, storage)
    * Includes multiple cores/processors, more/faster hard drives
    * Includes MySQL
* Horizontal scaling: using multiple servers
    * Includes Cassandra, MongoDB
    * Uses load balancer to split client requests across multiple servers
    * DNS can use round-robin strategy to enumerate IP address of different servers and load balance (but this is worse overly simple)
        * Caching can cause non-uniform load
    * How do we ensure a single user keeps getting back to a single server? (so that they don’t start new cookies/sessions on multiple servers)
        * Have a black box/server that keeps track of session id?
    * RAID: redundant array of independent disks
        * Assume multiple hard drives
        * RAID0: striping allows for splitting writing large amounts of data across multiple hard drives
        * RAID1: writing the same data across multiple drives
        * Used to decrease probability of downtime
    * Sticky session = save session (same backend server) across multiple visits
        * Remembered by load balancer using cookies
* Servers don’t store user data (e.g. sessions)
* Sessions are stored in centralized data store (e.g. external database or persistent cache like Redis)