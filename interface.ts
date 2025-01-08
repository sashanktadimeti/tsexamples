interface user{
    name:string,
    email:string,
    getbalance : ()=>number;
    depositmoney:()=>void
}
let a1:user={
    name:"sashank",
    email:"sashanktadimeti4@gmail.com",
    getbalance:()=>{
        return 30000;
    },
    depositmoney:()=>{

    }
}