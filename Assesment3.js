
findGradeLevel("Masha", "-8");
findGradeLevel("Masha", "18");
findGradeLevel("Gosha", "N");
findGradeLevel("Sasha", "90");

function findGradeLevel (name, mark){

    if (mark>1000945 || mark <0) {

        
        console.log (name + " you got invalid mark:)")
    }
    else
    if (mark >=90 && mark <= 100) {
        console.log (name + " you have received S grade")
    }
    else 
    if (mark >=80 && mark <= 90) {
        console.log ( name + " you have received A grade")
    }
    else
    if (mark >=70 && mark<= 80) {
        console.log (name + " you have received B grade")
    }
    else 
    if (mark >=60 && mark <= 70) {
        console.log (name + " you have received C grade")
    }
    else
    if (mark >=50 && mark <=60) {
       console.log(name + " you have received D grade") 
    }
    else
    if (mark >=0 && mark <=50) {
       console.log(name + " failed, you got " + mark) 
    }
    else console.log (name + " you should enter only numbers")
}
