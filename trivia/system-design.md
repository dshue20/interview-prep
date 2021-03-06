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

# Load Balancing

* Helps spread traffic across a cluster of servers to improve responsiveness and adaptability
* Also keeps track of the status of all of the resources while distributing requests
* Can be positioned between client and web server, web server and application/cache server, and application/cache server and database server
* Implement health checks to only forward traffic to working servers
* Implement algorithm to distribute traffic
    * Least connection: server with fewest active connections
    * Least response time: server with lowest average response time
    * Least bandwidth: server with least traffic, measured in megabits per second
    * Round robin: goes in a cycle
    * Weighted round robin: each server is assigned a weight according to its processing capacity, assigned a correlated amount of traffic
    * IP Hash: hash of client’s IP address is used to assign server
* Multiple load balancers can be used to ensure no single point of failure

# Caching

* Takes advantage of locality of reference principle: recently requested data is likely to be requested again
* Similar to short-term memory
* CDN (Content delivery network): globally distributed network of proxy servers that serve content from locations closer to the user
* Usually serve static files (HTML, CSS, JS, photos/vids)
    * Push CDNs: receive new content whenever changes occur on the server
        * Good for sites with low traffic / content that isn’t regularly updated
    * Pull CDNs: grab new content from the server when the user first requests the content
        * Requests are slower, but storage space on the CDN is minimized
        * Good for sites with heavy traffic
        * Costs can be significant
* How to solve cache invalidation (if database data is modified, it should be invalidated in the cache):
    * Write-through cache: data is written into the cache and database at the same time (high latency for write operations)
    * Write-around cache: data is written into permanent storage, might cause “cache miss” for reading recently written data and cause read latency
    * Write-back cache: data is written to cache and then to storage at certain intervals/conditions; fast but comes with risk of data loss in a crash

# Data Partitioning

* Used to break up a big database into smaller parts
* Horizontal partitioning / data sharding: different rows in different tables
    * E.g. for a table of zip codes, 0-10000 in one table, 10001-20000 in another, etc
    * Can lead to unbalanced servers if partitions are not chosen carefully (e.g. for zip codes, some are much more populated than others)
* Vertical partitioning: data is stored in different tables sorted by feature
    * E.g. for Instagram, users are stored on one DB server, photos on another, etc
* Directory-based partitioning: custom partitions that are looked up in a directory
* Problems:
    * Joins across partitions (separate servers) can be tough/inefficient
        * Countered with denormalization: tables store redundant info to prevent joins, but this may lead to data inconsistency (data has to be updated in multiple places)
    * Referential integrity: trying to enforce data integrity constraints such as foreign keys in a partitioned database can be extremely difficult
    * Rebalancing: needing to redo partitions if data distribution isn’t uniform

# Proxy Server

* Intermediate server between client and back-end server
* Typically used to filter, log, or transform requests
* Uses cache to serve requests
* Open proxy: proxy server accessible by any Internet user
    * Anonymous proxy: reveals identity but hides IP address
    * Transparent proxy: reveals identity and first IP address; can cache websites
* Closed proxy: proxy server that allows users within a network group to store and forward Internet services in order to control bandwidth
* Reverse proxy: retrieves resources on behalf of a client from one or more servers

# SQL vs NoSQL

* Relational vs non-relational database
* Relational database: structured, predefined schemas (e.g. phone book)
    * Data stored in rows and columns
    * Includes MySQL, Oracle, MS SQL Server, SQLite, Postgres, and MariaDB
* Non-relational database: unstructured, distributed, dynamic schema (e.g. file folders)
    * Key-value stores: Redis, Voldemort, Dynamo
    * Document databases: data is stored in documents instead of rows/columns
        * Documents are grouped in collections
        * Each document can have different structure
        * Includes CouchDB and MongoDB
    * Wide-column databases: uses column families (containers for rows) instead of regular tables
        * Columns aren’t known up front, each row doesn’t need to have the same number of columns
        * Good for large datasets
        * Includes Cassandra and HBase
    * Graph databases: Neo4J and InfiniteGraph
* SQL databases are vertically scalable, NoSQL databases are horizontally scalable
* SQL databases are better with data reliability and ACID compliancy (atomicity, consistency, isolation, durability)
    * Good for structured, unchanging data
* NoSQL databases trade ACID compliancy for performance and scalability
    * Good for unstructured, rapidly changing, distributed data

# CAP Theorem

* Of consistency, availability, and partition tolerance, a distributed computer system can only support ⅔
    * Consistency: every read receives the most recent write/error; all users see the same data at the same time
    * Availability: Every request receives a response, without guarantee that it contains the most recent version of the information; system continues to function even with node failures
    * Partition Tolerance: The system continues to operate despite arbitrary partitioning due to network failures
        * Always need partition tolerance b/c networks aren’t reliable
* RDBMS: availability + consistency
* Cassandra, CouchDB: availability + partition tolerance
* BigTable, MongoDB, HBase: consistency + partition tolerance

# Communication Protocols

* Ajax polling:
    * Client opens connection, requests data from server using HTTP
    * Webpage sends requests to the server at regular intervals
    * Server calculates the response and sends it back using HTTP
    * Cons: lots of empty responses, creates HTTP overhead
* HTTP Long-Polling: server doesn’t respond immediately
    * Doesn’t respond if no data is available
    * Once data is available, a full response is sent, then a new request is immediately sent
    * Times out after certain interval
* Websockets: client and server can exchange data both ways at any time, allows for real-time data transfer
* Server-sent Events (SSE): client establishes connection, server sends new info whenever available; client can’t send data to server