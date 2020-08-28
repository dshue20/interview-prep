# Implement the Folding Cipher. It folds the alphabet in half and uses the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.

def folding_cipher(str)
    alphabet = ("a".."z").to_a
    (0...(str.length)).each {|idx| str[idx] = alphabet[25 - alphabet.index(str[idx])]}
    str
end

p folding_cipher('abc')
p folding_cipher('xyz')