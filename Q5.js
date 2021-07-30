function run(list)
{
    var infoList = []
    var totals = 0
    var avrag = 0
    function positive()
    {
        infoList = list.filter(ispossitive)
        totals = infoList.reduce(total,0)
        
    }

    function ispossitive(value)
    {   
        var a = Math.sign(value)
        if (a == -1)return false
        else return true
    }
    function averageNumber()
    {
        var index = 0
        infoList.forEach(element => {
            ++index;
        });
        console.log(totals/index);
    }
    function total(current, newNum)
    {
        return current + newNum
    }
    function displayall()
    {
        console.log(infoList);
        console.log(totals);
        averageNumber()
    }
    function process(){
        positive(list)
        displayall()
    }
    process()
}
run([ -5, 8, 9, 1, -2, -56, 7 ] )