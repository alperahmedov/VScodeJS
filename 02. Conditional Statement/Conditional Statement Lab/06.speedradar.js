// При скорост до 10 (включително) отпечатайте "slow"
// •	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// •	При по-висока скорост отпечатайте "extremely fast"



function speedRadar(num) {

    if (num <= 10) {
        console.log('slow');

    } else if (num <= 50) {
        console.log('average');
        
    } else if (num <=150) {
        console.log('fast');
    } else if (num <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremly fast');
        
    }

}

speedRadar(1800);