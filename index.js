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

let role = 'moderator';

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

if(role === 'guest') console.log('Guest User');
else if(role === 'moderator') console.log('Moderator User');
else console.log('Unknow User');
