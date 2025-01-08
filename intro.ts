
var vec = [1, "one", 3, true];
vec.map((item):string => {
  if (typeof item === 'number') {
    console.log(`Number: ${item}`);
  } else if (typeof item === 'string') {
    console.log(`String: ${item}`);
  } else if (typeof item === 'boolean') {
    console.log(`Boolean: ${item}`);
  }
  return item.toString();
});
const User1={
    name:"hitesh",
    email:"a@gmail.com",
    ispaid:false,
}
function createuser():{name:string,price:number}{
    return {name:"reactjs",price:1000}
}
type cardNumber={
    cardNumber:string
}
type cardDate={
    cardDate:string
}
type cardDetails=cardNumber & cardDate &{cvv:number}
function createcard(cn:string,date:string,cvv:number):cardDetails{
    return {
        cardNumber:cn,
        cardDate:date,
        cvv:cvv
    }
}
createcard("310","16-05-2003",678)
let vec2:Array<number>=[45,67]
let vec3:Array<Array<number>>=[[34,45,56]]
type User2={
    username:string,
    id:number
}
type Admin={
    name:string,
    id:number
}
var a:User2|Admin={username:"sashank",id:201}
let seatAllotment:"aisle"|"window"|"middle"
//i hate commenting
//i love u
// fuck u