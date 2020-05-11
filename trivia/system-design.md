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

# Vocab

* DNS translates domain name to IP address
* Reliability: probability a system will fail in a given period
    * A reliable system will keep delivering services even if a component fails
    * May involve redundancy (copying data on multiple servers)
    * Replication: sharing info to ensure consistency across redundant resources in order to improve redundancy, fault-tolerance, or accessibility
* Availability: time a system remains operational to perform its required function in a specific period
    * Measure of percent of time a system remains operational under normal conditions
    * Reliability implies availability but not vice versa
* Measures of efficiency:
    * Latency: delay in response time
    * Throughput: number of actions/results per unit of time
* Indices can greatly speed up retrieval, but…
    * They may be large
    * Write performance may decrease if index has to be updated
* Consistent hashing: data is hashed and mapped to cache servers
    * If a server is added/deleted, consistent hashing prevents all the data from needing to be remapped
    * If data is hashed to integers 0-256, cache servers are placed at intervals on the number line
    * Data is hashed and assigned to the closest server on the number line
    * Virtual replicas (multiple copies of the same server) are placed on different points on the number line for uniform distribution of data