// let array = [1,2,3,4,5,6,7,8,9,10,11]
// let add = [];
// let even = [];

// let begin = []
// for( let i=0; i<=Infinity; i++){
// let start = prompt ('напишите слово "начать" что бы начать и увидеть чётные и не чётные числа с 1 до 11')
//     if(start=="начать"){
//         break
//     }
//      else{
//         alert('попытайтесь снова')
//     }
//     }
//     for(let i = 0; i<array.length; i++){
//         if(array[i]%2==0){
//             add.push(array[i])
//         }
//         else {
//         even.push(array[i])
//     }
    
//     } 
//     console.log(`Четные числа: ${add}`);
// console.log(`Нечетные числа: ${even}`);
    
    // if(begin==start && i % 2 ==0){
    //     array.push(add)
    //      console.log(`чётные числа ${add}`)
    // }
    // else{
    //     array.push(even)
    //     console.log(`не чётные числа ${even}`)
    // }
//      if(i % 2 ==0){
//         array.push(add)
//         console.log(`чётные числа ${add}`);
//      } else{
//          array.push(even)
//         console.log(`не чётные числа ${even}`);
//      }
// let start = alert('войдите в консоль что бы увидеть чётные и не чётные числа он 1 до 11')




let start = prompt('введите слово "начать" что бы увидеть в консоле чётные и не чётные числа от 1 до 11')
for(let i =0; i<=Infinity; i++){
    if(start=='начать'){
        break
    }
    else{
        prompt('что то пошло не так, повторите попытку снова')
    }
}
let array =[1,2,3,4,5,6,7,8,9,10,11]
let add =[]
let even =[]
for(let i=0; i<=array.length; i++){
    if(array[i] %2 ==0){
        add.push(array[i])
    } else{
        even.push(array[i])
    }
}
console.log("чётные числа :" + add);
console.log(" не чётные числа :" + even);