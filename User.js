class DiffieHellmanUser
{

    constructor(name, publicKey, privateKey)
    {
        this.name = name;
        this.publicKey = publicKey;
        this.#privateKey = privateKey;
    }

    getName      = () => { return this.name; }
    
    getPublicKey = () => { return this.publicKey; }
    
    setName = (name) => { this.name = name; }
    
    setPublicKey = (publicKey) => { this.publicKey = publicKey; }

}