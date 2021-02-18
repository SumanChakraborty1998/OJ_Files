

function runProgram(input)
{

    input = input.trim().toLowerCase();

    var count=0;

    for(var i = 0; i < input.length; i++)

        if( checkConsonant(input[i]) )

            count++;
        

  
    console.log(count);

    
}

var checkConsonant = function(ch)
{
    if( ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" )

        return false;

    else

        return true;
    
}





process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
//split(/[\r\n]+/)