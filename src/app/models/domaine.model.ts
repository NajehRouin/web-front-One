export class Domaine{
    _id!:string
    nom!:string
    constructor(domaine:Domaine){
        {
            this._id=domaine._id,
            this.nom=domaine.nom
        }
    }

}