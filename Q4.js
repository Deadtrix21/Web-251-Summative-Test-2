const matrix = [ 
[ 12, 5, 'c', 9, 8, 'z' ], [ 2, 2, 'c', 'c', 9, 8, 'c'], [ 12, 'l', 'p', 7, 8, 'c' ] 
]

function run(MATRIX)
{
    var newMatrix = []
    function eachIndex()
    {  
        MATRIX.forEach(element => {
            var secondary = []
            element.forEach(indexList => {
                if (typeof indexList === 'string'){
                    secondary.push(0)
                }else{
                    secondary.push(indexList)
                }
            });
            newMatrix.push(secondary)
        });
    }

    function displayMatrices()
    {
        console.log(newMatrix)
    }
    function process()
    {
        eachIndex()
        displayMatrices()
    }
    process()
}

run(matrix)