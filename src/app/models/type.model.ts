import { Domaine } from "./domaine.model"

export class Type{
    _id!:string
    nom!:string
    domaines!:Domaine[]
    constructor(type:any){
        {
            this._id=type._id||"",
            this.nom=type.nom||"",
            this.domaines=type.domaines||[]
        }
    }

}