

//1
// const myArray= ["red", "blue", "yellow", "green", "black"]
// console.log(myArray.sort())

//2
// const myArray= [1,4,23,78,2,44]
// myArray.sort((a,b)=>a-b)
// console.log(myArray)

//3
// const myArray= [1,4,23,78,2,44]
// myArray.sort((a,b)=>b-a)
// console.log(myArray)





// 4
// const myArray=[]
// myBtn.addEventListener("click",pushToArray)
// function pushToArray(){
//     let inputValue=namesInput.value
//     myArray.push(inputValue)
//     namesInput.value="";
//     console.log(myArray)
//     if(myArray.length==10){
//         sortArray()
//     }
// }

// function sortArray(){
//     myArray.sort()
//     console.log(myArray)
// }




//5
// myArray=[0]
// for (let i = 0; i < 10; i++) {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//      myArray[i]=randomNumber;
// }
// myArray.sort((a,b)=>b-a)
// console.log(myArray)



//6
// const myArray=[]
// myBtn.addEventListener("click",pushToArray)
// function pushToArray(){
//     let inputValue=namesInput.value
//     myArray.push(inputValue)
//     namesInput.value="";
//     console.log(myArray)
//     if(myArray.length==4){
//         sortArray()
//     }
// }

// function sortArray(){
//     myArray.sort()
//     const joinedArray = myArray.join(`-`)
//     console.log(myArray)
//     console.log(joinedArray)
// }






//7

// const highTechCompanyArray=["Apple Inc.",
// "Microsoft Corporation",
// "Amazon.com Inc.",
// "Alphabet Inc. (Google)",
// "Facebook, Inc.",
// "Tesla, Inc.",
// "NVIDIA Corporation",
// "Intel Corporation",
// "Adobe Inc.",
// "IBM Corporation"]
// for (let i = 0; i < highTechCompanyArray.length; i++) {
//     myDiv.innerHTML += `${highTechCompanyArray[i]}<br>`;
// }


// const pictureArray=[
    
// ]

// const pictures = [
//     "https://rhubarbandwren.co.uk/wp-content/uploads/2020/01/my-neighbor-totoro_sleeping-300x300.jpg"

//   ];
// document.innerHTML=`${pictures}`







//1
// const classNumbers = document.querySelectorAll(".task");
// for (let i = 0; i < classNumbers.length; i++) {
//   console.log(classNumbers[i].innerText);
// }


//2
// const classNumbers = document.querySelectorAll(".task");
// for (let i = 0; i < classNumbers.length; i++) {
//   console.log(classNumbers[i].innerText);
// }
// myBtn.addEventListener("click",colorAndTextChange)
// function colorAndTextChange(){
//     for (let i = 0; i < classNumbers.length; i++) {
//         classNumbers[i].style.background=`blue`
//         classNumbers[i].innerText=`world`
//     }
// }


//3
// const object={
//     firstObject:1,
//     secondObject:2,
//     thirdObject:3,
//     fourthObject:4,
// }

// function printToLog(){
//     for (const key in object) {
//         console.log(object[key]);
// }
// }
//     printToLog()



//4
// const object={
//     firstObject:1,
//     secondObject:2,
//     thirdObject:3,
//     fourthObject:4,
// }

// function printToScreen(){
//     for (const key in object) {
//         myH1.innerHTML+=`${object[key]}<br>`;
//         }
//     }
//     printToScreen()




//5
const object={
        firstObject: task51.value,
        secondObject: task52.value,
        thirdObject: task53.value,
        fourthObject: task54.value,
}

myBtn.addEventListener("click", printToScreen)

function printToScreen(){
        for (const key in object) {
            myH1.innerHTML+=`${object[key]}<br>`;
            }
        }
       
