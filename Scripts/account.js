document.addEventListener("DOMContentLoaded",function(){

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //const {name, email, phone} = userInfo;
    console.log(userInfo);

    document.getElementById("name").innerHTML=`Hi, ${userInfo.name}`;
    document.getElementById("name").innerHTML=`<b>Email:</b> ${userInfo.email}`;
    document.getElementById("name").innerHTML=`<b>Phone:</b> ${userInfo.phone}`;

})


function Logout(){
    alert("Logged Out");
    localStorage.removeItem("userInfo");
    window.location.href="account.html";
}