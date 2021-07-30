let a = [5, 8 , 9, 1, 2, 56, 7] 

function BasicSort(Array){
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (Array[j] < Array[j + 1])
            {
                let tmp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = tmp;
            }
        }
    
    }
    return Array;
}

console.log(BasicSort(a))