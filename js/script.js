function Check(){
    let login="administrator";
    
    if(login==document.getElementById("login").value){
        alert("The login cannot be \"administrator\".");
    }
    else{
            alert("The registration was completed successfully(probably)");
        }; 
}