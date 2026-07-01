
//
// fun adduser ==> name , ID , balance  بتخزن ف object
//fun withdraw ==> ID ,newBalance
//fun transfer ==> fromID ,toID ,newBalance
//fun deleteUser ==> ID



//user
//  
let arrayofuser=[]



//fun adduser
function addUser() {
    var name = prompt("enter name")
    var balance = prompt("enter balance")
    var id = prompt("enter id")
    if (arrayofuser.find(ele => ele.ID == id) ) {
        alert("this user already added")
    }
    else{
        var user = {
            name:name ,
            ID:id,
            balance:Number(balance)
        }

        
        arrayofuser.push(user)
    }
    console.log(arrayofuser)
    
    
}

// addUser()



//fun withdraw
function withdraw() {
    let id = prompt('enter ur ID')
    let newBalance= Number(prompt('enter new balane'))
    for(let item in arrayofuser){
       if(arrayofuser[item].ID === id){
         if (newBalance < arrayofuser[item].balance) {
            arrayofuser[item].balance -= newBalance
            break;
         }
         else{
            alert('error')
         }
       }
    }
}


function transfer() {
    let fromID = prompt("Enter ur ID ")
    let toID = prompt("Enter Him ID")
    let newBalance = Number(prompt("enter money to transfer"))
    for(let item in arrayofuser){
        if(arrayofuser[item].ID === fromID){
         if(newBalance <=  arrayofuser[item].balance)
         {
            arrayofuser[item].balance -= newBalance 
        }else{
            alert('u dont have enough money')
            newBalance = 0
        }
        break;
    }
    }
    for(let item in arrayofuser){
        if(arrayofuser[item].ID == toID){
         arrayofuser[item].balance += newBalance
         break;
        }
    }
    
}


function deleteUser(id) {
    let item = arrayofuser.findIndex(item=> item.ID == id)

        arrayofuser.splice(item,1)
    

    // for(let item in arrayofuser){
    //     if(arrayofuser[item].ID == id){
    //      break;
    //     }
    // }
}
var num
function menu() {
console.log(`#1 adduser
#2 withdraw
#3 transfer
#4 delete`)
 num = Number(prompt(`#1 adduser
#2 withdraw
#3 transfer
#4 delete
#0 exist`
))
switch (num) {
    case 1:addUser()
        break;
    case 2: withdraw()
    break;
    case 3:transfer()
    break;
    case 4:deleteUser()

    default:
        break;
} 
}

while (num!=0) {
    
    menu()
}
// deleteUser(1)
console.log(arrayofuser)
