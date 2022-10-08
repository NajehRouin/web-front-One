export class Bureau{
    _id!:string
    nom!:string
    adresse!:string
    constructor(bureau:Bureau){
        {
            this._id=bureau._id,
            this.nom=bureau.nom,
            this.adresse=bureau.adresse
        }
    }
}