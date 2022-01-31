// let question = prompt('What is your name and hotel stay')
// Promise.all([
//   fetch("companies.json")
//   .then(response => response.json()),

// fetch("guests.json")
//   .then(response => response.json())

// ]).then(
  
// )

// // let person = prompt("Please enter your name");

// if (person != null) {
//   (async function getData() {
//     const response = await Promise.all([
//       fetch("companies.json")
//         .then(response => response.json()),
  
//     fetch("guests.json")
//       .then(response => response.json())]);
//     const data = await response.json();
//     console.log(data)
//     return data
//     }()
//   )}
  



// let bot = document.querySelector('.hello')
// async function response(){
// let guests = await fetch('guests.json');
// let guestData = await guests.json();

// let companies = await fetch('companies.json');
// let companyData = await companies.json();

// return guestData, companyData

// }

// async function companies(){
//   let response = await fetch('companies.json');
//   let user = await response.json();
//   console.log(user[0].company)

// }


// companies()
// async function responeGuest(){
//   let firstN = String(prompt("Please enter your first name"));
  
//   function response(){
//     let guests =fetch('guests.json');
//     let guestData =  guests.json();
 

//     let companies =  fetch('companies.json');
//     let companyData = companies.json();
    
//     return companyData, Array.from(guestData)
//     }
//     response().then(()=>{
//       for(let i =0; i< guestData.length; i++ ){
//         if(guestData[i].firstName == firstN.toLowerCase()){
//           let lastN = String(prompt(`Please enter your last name?`))
//           if(guestData[i].lastName == lastN.toLowerCase()){
//             for(let i =0; i<=companyData[i].length; i++ ){
//               let date = new Date;
//               let time = date.getHours;
//               let greeting; 
//               switch(greeting){
//                 case time<6||time>19:
//                   greeting = 'Good evening';
//                   break;
//                 case time>=6||time<13:
//                   greeting = 'Good morining';
//                   break;
//                 case time>=13||time<=19:
//                   greeting = 'Good Afternoon';
//                   break; 
//               }
//               alert(`${greeting} ${guestData[i].firstName}, and welcome to ${companyData[i].company}! Room ${guestData[i].reservation.roomNumber} is now ready you. Enjoy your stay, and let us know if you need anything`)
//             }
//             }
//         } 
        
//         else{
//           alert('hello')
//         }
//       }
//     })
// }
// responeGuest()




//Works WORKSSSS
// function guestResponse(){
//   let fName = String(prompt(`What is your first name?`)).toLowerCase()
//   let lName = String(prompt(`Please enter your last name?`)).toLowerCase()
//   fetch('guests.json')
//     .then(response=> response.json())
//     .then(data=>{
//         console.log(data);
//         for(let i =0; i< data.length; i++ ){
//           console.log(data[i])
//           if(data[i]["firstName"].toLowerCase() == fName){
//             if(data[i]["lastName"].toLowerCase() == lName){
//               alert(`hello ${data[i].firstName} ${data[i].lastName}`)
//             }else{
//               console.log('hello')
//             } 
//           }
        
//       }
//  })
// }
// guestResponse()


// console.log((`${greeting} ${data[i]["firstName"]}, and welcome to ${cData[j]["company"]}! Room ${data[i]["reservation"]["roomNumber"]} is now ready you. Enjoy your stay, and let us know if you need anything`))



// fetch('companies.json')
// .then(response=> response.json())
// .then(cData=>{  
//   for(let j =0; j<=cData.length; j++ ){
//     let date = new Date;
//     let time = date.getHours;
//       let greeting; 
//       switch(greeting){
//         case time<6||time>19:
//           greeting = 'Good evening';
//           break;
//         case time>=6||time<13:
//           greeting = 'Good morining';
//           break;
//         case time>=13||time<=19:
//         greeting = 'Good Afternoon';
//         break; 
//       }
      
//     }
//   }





// alert(`${greeting} ${data[i].firstName}, and welcome to ${cData[j].company}! Room ${cData[i]. reservation.roomNumber} is now ready you. Enjoy your stay, and let us know if you need anything`)






// function guestResponse(){
//   let fName = String(prompt(`What is your first name?`))
//   let lName = String(prompt(`Please enter your last name?`))
//   fetch('guests.json')
//     .then(response=> response.json())
//     .then(data=>{
//         for(let i =0; i< data.length; i++ ){
//           if(data[i].firstName === fName.toLowerCase()){
//             if(data[i].lastName == lName.toLowerCase()){
//               fetch('companies.json')
//                 .then(response=> response.json())
//                 .then(cData=>{  
//                   for(let j =0; j<=cData.length; j++ ){
//                     let date = new Date;
//                     let time = date.getHours;
//                       let greeting; 
//                       switch(greeting){
//                         case time<6||time>19:
//                           greeting = 'Good evening';
//                           break;
//                         case time>=6||time<13:
//                           greeting = 'Good morining';
//                           break;
//                         case time>=13||time<=19:
//                         greeting = 'Good Afternoon';
//                         break; 
//                       }
                      
//                     }
//                   }
//                 )}
            
          
            
                
//             }
        
//       }
//  })
// }
// guestResponse()


//  Attempy #4



// function getGuestInfo(){
//   let guestData = fetch('guests.json')
//   .then(response=> response.json())
//   .then(data=>{
//     data.map((guest)=>{
//       return guest
//     })
   
//   })
//   console.log(guestData)
//   return guestData
// }
// function getCompanyInfo(){
//   let companyData = fetch('companies.json')
//   .then(response=> response.json())
//   .then(data=>{
//     data.map((company)=>{
//       return company
//     })
//   })
//   console.log(companyData)
//   return companyData
// }


// function responseToGuest(guest, company){
//   let firstName = String(prompt(`What is your first name?`))
//   let lastName = String(prompt(`Please enter your last name?`))
//   guest()
//   company()
//   console.log(guest())
//   console.log(guestInfo)
//   console.log(companyInfo)

// }
// responseToGuest(getGuestInfo, getCompanyInfo)




// function guestResponse(){
//   let fName = String(prompt(`What is your first name?`)).toLowerCase()
//   let lName = String(prompt(`Please enter your last name?`)).toLowerCase()
//   fetch('guests.json')
//     .then(response=> response.json())
//     .then(data=>{
//         for(let i =0; i< data.length; i++ ){
//           if(data[i]["firstName"].toLowerCase() == fName){
//             if(data[i]["lastName"].toLowerCase() == lName){
//               let id = data[i]["id"]
//               fetch('companies.json')
//                 .then(response=> response.json())
//                 .then(cData=>{  
//                   for(let j =0; j<=cData.length; j++ ){
//                     let date = new Date;
//                     let time = date.getHours();
//                     let greeting; 
//                     switch(greeting){
//                         case time<6||time>19:
//                           greeting = 'Good evening';
//                           break;
//                         case time>=6||time<13:
//                           greeting = 'Good morining';
//                           break;
//                         case time>=13||time<=19:
//                           greeting = 'Good Afternoon';
//                           break; 
//                         default:
//                           greeting = 'Good day,'
//                     }
//                     if(cData[j]["id"] ===id){                                    
//                         return  alert((`${greeting} ${data[i]["firstName"]}, and welcome to ${cData[j]["company"]}! Room ${data[i]["reservation"]["roomNumber"]} is now ready you. Enjoy your stay, and let us know if you need anything.`))
//                     }else{
//                       alert(`skdlf`)
//                     }
//                   }
                  
//         })
                 
                
                 
//       }
          
        
//     }
            
//   }
       
        
//  })
// }
// function fillIn(func){
//   func()
// }

// fillIn(guestResponse)






function guestResponse(){
  let fName = String(prompt(`What is your first name?`)).toLowerCase()
  let lName = String(prompt(`Please enter your last name?`)).toLowerCase()
  fetch('json/guests.json')
    .then(response=> response.json())
    .then(data=>{
        for(let i =0; i< data.length; i++ ){
          if(data[i]["firstName"].toLowerCase() == fName){
            if(data[i]["lastName"].toLowerCase() == lName){
              var id = data[i]["id"]
              fetch('json/companies.json')
                .then(response=> response.json())
                .then(cData=>{  
                  for(let j =0; j<=cData.length; j++ ){
                    let date = new Date;
                    let time = date.getHours();
                    let greeting; 
                    switch(greeting){
                        case time<6||time>19:
                          greeting = 'Good evening';
                          break;
                        case time>=6||time<13:
                          greeting = 'Good morining';
                          break;
                        case time>=13||time<=19:
                          greeting = 'Good Afternoon';
                          break; 
                        default:
                          greeting = 'Good day,'
                    }
                    if(cData[j]["id"] ===id){                                    
                      return  alert((`${greeting} ${data[i]["firstName"]}, and welcome to ${cData[j]["company"]}! Room ${data[i]["reservation"]["roomNumber"]} is now ready you. Enjoy your stay, and let us know if you need anything.`))
                  }
                  }
                })
            }
          }
        }if(!id){
          alert(`Sorry, we don't seem to have your reservation, have you entered your information correctly? Please refresh the page and try again!`);
        }
      })
    }






function fillIn(func){
  func()
}

fillIn(guestResponse)


let listItems = document.querySelector('#listItems')
let input = document.querySelector('#inputOne')
let buttonOne = document.getElementById("btnOne")

buttonOne.addEventListener('click', (e)=>{
  if(input.value !== null){
    let li = document.createElement('li')
    li.classList.add('messages')
    li.innerHTML += input.value;
    listItems.append(li)
    input.value = ''
    e.preventDefault();
    
  }
})
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btnOne").click();
  }
});






















































