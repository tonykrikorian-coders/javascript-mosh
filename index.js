//Si la hora es entre las 6am y las 12pm decimos "Buenos dias"
//Sí esta entre las 12pm y las 6pm decimos: "Buenas tardes"
//DEspues de las 6:00pm decimos :"Buenas noches"

// let hour = 11;

// if (hour >= 6 && hour < 12) 
//     console.log('Buenos dias');
// else if (hour >= 12 && hour < 18) 
//     console.log('Buenas tardes');
//  else 
//     console.log('Buenas noches');

// let role = 'moderator';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;

//     case 'moderator':
//         console.log('Moderator User');
//         break;
        
//     default:
//         console.log('Unknow User');
//         break;
// }

/**Logica anterior con IF ELSE */
// if(role === 'guest') console.log('Guest User');
// else if(role === 'moderator') console.log('Moderator User');
// else console.log('Unknow User');

//For Loops
// let value = 25;

// for (let i = 0; i < value; i++){
//    if (i % 2 !==0) console.log(i); 
// }

//while loop
// let i = 0;

// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// do-while loop
// let i = 0;
// do{
//     if (i % 2 !== 0) console.log(i);
//      i++;
// }while (i <= 5);

//infinite loops
// let i = 0;
// while (i < 5){
//     console.log(i);
//     // i++;
// }

//for-in loop (Se usa cuando queremos iterar sobre las propiedades de un objeto)
let person = {
    name: 'Tony',
    age: 30
};

for (let key in person) {
    console.log(key,person[key])
}
