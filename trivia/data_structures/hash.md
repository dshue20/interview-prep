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