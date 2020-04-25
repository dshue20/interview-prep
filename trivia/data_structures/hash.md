What is a hash table?
- Data structure that maps keys to values
- Hash function is used to assign each key to a bucket

Pros:
- Average runtime for access, insertion, and deletion is O(1)

Cons:
- Hashing function can be costly
- Collisions increase runtime
    - Collisions solved by implementing linked list (called chaining) (one way to solve)
    - May require rehashing/resizing (O(n))

# Hash Function
* Deterministic: input will always produce the same hashed output
* Uniform: any hashed output will be produced with equal likelihood as any other
* One-way: can't predict input from output
* Cryptographic hashing functions: slower than standard ones but fewer collisions
    * Also more secures
* Set is implemented using hash set! (in Ruby)
* Ruby hashes with <= 6 entries are actually arrays :o (single bucket)
* LRU cache uses hash map with keys pointing to nodes in a linked list; linked list is ordered according to most recently accessed