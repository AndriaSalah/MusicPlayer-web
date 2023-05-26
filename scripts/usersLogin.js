let userName = document.querySelector(".username")
let password = document.querySelector(".password")
let submitButton =  document.querySelector(".submitButton")

submitButton.addEventListener("click",()=>{login(userName.value,password.value)})

 
function login(username , passowrd){
    //debugger
    console.log(username)
    console.log(passowrd)
    const xhr = new XMLHttpRequest();
xhr.open("GET", "http://192.168.1.10:8080/Json/user.json", true);
xhr.onload = () => {
    console.log(xhr.status)
  if (xhr.status === 200) {
    const serverResponse = JSON.parse(xhr.responseText);
    for( let i=0; i <serverResponse.users.length;i++) {
        if(username === serverResponse.users[i].username){
            if(passowrd === serverResponse.users[i].password){
                window.location.replace('index.html');
                break;
            }
        }

    } serverResponse.users
    console.log(serverResponse); // Log the entire server response object
  } else {
    console.error("Failed to load data");
  }
};
xhr.send();
}