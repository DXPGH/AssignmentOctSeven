function Display(){
    var id = document.getElementById("fourDigitID").value;
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    var outputbox = document.getElementById("outputbox");
    var tempstring = "";

    if(id != "") tempstring += id + "\r\n";
    if(fname != "") tempstring += fname + "\r\n";
    if(lname != "") tempstring += lname + "\r\n";
    if(phone != "") tempstring += phone + "\r\n";
    if(address != "") tempstring += address + "\r\n";
                
    outputbox.textContent = tempstring;
    
}