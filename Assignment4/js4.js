function Display(){
    var id = document.getElementById("fourDigitID").value;
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    var outputbox = document.getElementById("outputbox");
    var tempstring = "";

    if(id != "") tempstring += "ID: " + id + "\r\n";
    if(fname != "") tempstring += "First name: " + fname + "\r\n";
    if(lname != "") tempstring += "Last name: " + lname + "\r\n";
    if(phone != "") tempstring += "Phone: " + phone + "\r\n";
    if(address != "") tempstring += "Address: " + address + "\r\n";
                
    outputbox.textContent = tempstring;
    
}