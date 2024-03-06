let guest_list : string []=['Aleem Chohan','Muneeb Chohan','Zohaib Chohan'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected brother' + guest_list[i] +',/n/nWe invited you on dinner Tomorrow./n/nThank You')
// }    
let not_present : string = 'Aleem Chohan';
let new_guest : string = 'Elon Musk';
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected brother' + guest_list[i] +',/n/nWe invited you on dinner Tomorrow./n/nThank You')
}    
console.log(`Mr. ${not_present} Will Not Comming Tomorrow Dinner. `)
guest_list.unshift('Yaseen','Asim','Uzair');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected brother' + guest_list[i] +',/n/nWe invited you on dinner Tomorrow. We Found Big Tbale So We Decided  To Invite Three More Guest/n/nThank You')
}    