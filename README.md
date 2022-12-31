# Cyptology
* A simple pair of prgrams to encrypt and decrypt a string
* Uses stream encryption
* Uses the Diffie-Hellman Key Exchange
## How to Use
### Encrypt
1. Input the string desired to be encoded into the toBeEncrypted string
2. Pick a random prime number set that as the primeOne integer in both Encrypt and Decrypt
4. Pick a random prime number greatr than 127 and set it as the modPrime integer in both Encrypt and Decrypt
5. Pick a random number and assign it to your secret number
6. Complete Decrypt instructions til step 3
7. Take the integer from the console and assign it to receivedNumber
8. Run Encrypt.js
 *You should see a numbr and an array of integers*
9. **You have succesfully encrypted yoour string!!**

### Decrypt
1. At this point you should have set primeOne and modPrime in Decrypt.js
2. pick a ranodom number and assing it to secretNumber
3. Run Decrypt.js
4.  *You should see a number and undefined in your console*
5. At this point you should have an integer and an array of integers copied from Encrypt.js
6. Paste the array of integers into messageArray
7. Assign the integer from Encrypt to receivedNumber
