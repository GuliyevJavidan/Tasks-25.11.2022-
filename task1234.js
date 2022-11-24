//TASK 1

function smallnumber(n) {
    let veriable = 0;
    if (n % 7 == 0) {
        console.log(n + "eded 7-e tam bolunur");
    }
    for (let i = 1; i < 7; i++) {
        if (i <= 3 && i <= 6 && n % 7 == i) {
            console.log(n + "  7-yə qaliqsiz bölünən n-ə ən yaxin ədəd  " + (n - i));
        }

        else if (i > 3 && i <= 6 && n % 7 == i) {
            veriable = 7 - i
            console.log(n + "  7-yə qaliqsiz bölünən n-ə ən yaxin ədəd  " + (n + veriable));
        }
    }
}

smallnumber(36)


//TASK 2

// function smallnumber(n){
//     let num =0
//     if(n<50){
//         for (let i = 0; i < n-1  ; i++) {
//             if(i%3==0 && n!=2){
//                 num++
//             }
//         }
//         console.log(num);
//     }
//     else{
//         console.log("is not paid")
//     }
// }

// smallnumber(33)



// TASK 3

// function smallnumber(n){
//     let num = 0
//     if(n>50 && n<100){
//         for (let i = 1; i <= n  ; i++) {
//             if(i%5==0){
//                 num++
//             }
//         }
//         console.log(num);
//     }
//     else{
//         console.log("is not paid")
//     }
// }

// smallnumber(56)


// TASK 4

// function smallnumber(n){
//     let num = 0
//     if(n>100){
//         for (let i = 1; i <= n  ; i++) {
//             if(i%8==0){
//                 num++
//             }
//         }
//         console.log(num);
//     }
//     else{
//         console.log("is not paid")
//     }
// }

// smallnumber(147)