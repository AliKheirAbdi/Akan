
    var century,year,month,day,gender, days, maleNames, femaleNames;
    days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    maleNames=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    function workout(){
               
    century = document.getElementById("century").value;
    year = document.getElementById("year").value;
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    dayOfTheWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day-2)%7;
    return(Math.floor(dayOfTheWeek));
    }
    
    
    function validation(){
    if (document.getElementById("century").value == "" || century<1 || century>21){
    alert("Please enter a valid century")
    return false;
    }else{
    return true;
    }
    }
    function val(){
    validation();
    if (document.getElementById("year").value == "" || year<1 || year>2000){
    alert("Please enter a valid year")
    return false;
    } else {
    return true;
    }
    }
    function val2(){
    val();
    if (document.getElementById("month").value == "" || month<1 || month>12){
    alert("Please enter a valid month")
    } else {
    return true;
    }
    }
    function val3(){
    val2();
    if (document.getElementById("day").value == "" || day<1 || day>31){
    alert("Please enter a valid day.")
    } else {
    return true;
    }
    }
    function checkDayOfTheWeek(e){
    var calculate = workout();
    val3();
    gender = document.getElementsByName("gender");
    if (gender[0].checked==true){
    gender = "male";
    } else if (gender[1].checked==true){
    gender = "female";
    }else{
    alert("Please choose your gender");
    }
    
    }
    
    

    