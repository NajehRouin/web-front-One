import { User } from "./user.model"

export class Abonnement{
    periode!:string
    user!:User
    methode!:string
    constructor(abonnement:Abonnement){
        {
            this.periode=abonnement.periode,
            this.user=abonnement.user,
            this.methode=abonnement.methode
        }
    }
}