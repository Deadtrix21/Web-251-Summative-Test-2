function run(Array, calculations = [])
{
    var results = []
    var len = Array.length;


    function calculateResult()
    {Array.forEach(element => {
            calculations.push(Math.sqrt(element)) 
        });
        for (let index = 0; index < len; index++) {
            const element1 = Array[index];
            const element2 = calculations[index];
            results.push(element2+"      is Square root of     "+element1)
        }
    }

    function displayElement()
    {
        results.forEach(element => {
            console.log(element)
        });
    }

    function proccess()
    {
        calculateResult()
        displayElement()
    }
    proccess()
}

run([4, 9, 16])