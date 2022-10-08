
import { Domaine } from "./domaine.model"
import { Type } from "./type.model"
export class User{
    nom!:string
    email!:string
    numeroTel!:string
    domaine!:Domaine
    type_Entreprise!:Type
    Adresse!:string
    password!:string
    profileImg!:string
    score!:number
    remise!:number
    nbTransaction!:number
    statut!:boolean
    rating!:number
    abonnement!:string
    role!:string
    constructor(user:any){
        {
            this.nom=user.nom||"",
            this.email=user.email||"",
            this.numeroTel=user.numeroTel||"",
            this.domaine=user.domaine||"",
            this.type_Entreprise=user.type_Entreprise||"",
            this.Adresse=user.Adresse||"",
            this.password=user.password||"",
            this.profileImg=user.profileImg||"",
            this.score=user.score||0,
            this.remise=user.remise||0,
            this.nbTransaction=user.nbTransaction||0,
            this.statut=user.statut||false,
            this.rating=user.rating||0,
            this.abonnement=user.abonnement||"",
            this.role=user.role||"client"
        }
    }
}