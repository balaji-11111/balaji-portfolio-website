




  
function LOGIN(){
    var username=document.getElementById('USERNAME').value;
    var password=document.getElementById('PASSWORD').value;

    if(username=="AnyAdmin" && password=="7206ADMINANY6027")
    {
        window.location.assign("secondpage.html");
        alert("LOGIN SUCCESSFUL");
        return false;
    }
    else{
        alert("LOGIN FAILED");
        return;
    }
}










function scrollToSection(scrollPosition) {
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
      
    });
  }
