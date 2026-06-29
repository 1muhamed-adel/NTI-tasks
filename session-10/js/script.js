var looping = (startNum, endNum, breakNum, contNum)=> {
    if ((startNum  && endNum && breakNum  && contNum )!=undefined) {
        for(var i = startNum; i<= endNum; i++){
            if (i == breakNum) {
               break 
            }
            if (i == contNum) {
                continue
            }
            console.log(i)
        }
    }
    else
        alert("pls enter numbers")
}

// looping( )
// shift remove first ele
// unshift add in first 
// splice 
//map !!!(search)
var result = ()=> {
    var course= ["html" ,"css"]
    var check = prompt("enter course")
    if (course.includes(check)) {
        console.log("found")
    }
    else{
        course.push(check)
    }
  
    console.log(course)
    
}
result()