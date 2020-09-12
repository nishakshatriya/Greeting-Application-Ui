
$.ajax('http://localhost:3000/greetings/',
{
  success: function(data,status,xhr){
    $('msgs-list').append(data);
  }
})

document.querySelector(".add-side-navbar").addEventListener("click", () => {
    showPopup(".add-popup");
  });

  document.querySelector(".delete-side-navbar").addEventListener("click", () => {
    showPopup(".delete-popup");
  });

  document.querySelector(".edit-side-navbar").addEventListener("click", () => {
    showPopup(".edit-popup");
  })

  function showPopup(classname) {
    let popupClassArray = [".add-popup",".delete-popup",".edit-popup",".messages-list"];
    popupClassArray.forEach(function (clsname) {
      if (clsname !== classname) {
        document.querySelector(clsname).style.display = "none";
      }
    });

    let popup = document.querySelector(classname);
    let displayStatus = popup.style.display;
    if (displayStatus !== "none" || displayStatus !== "") {
      popup.style.display = "none";
      document.getElementsByClassName("popup-boxes")[0].style.display ="none"
    }
    if (displayStatus === "none" || displayStatus === "") {
      popup.style.display = "block";
      document.getElementsByClassName("popup-boxes")[0].style.display ="block"
    }
  }

  let closePopup = document.querySelectorAll(".close-button");
  closePopup.forEach((closeElement) => {
    closeElement.addEventListener("click", () => {
      document.getElementsByClassName("popup-boxes")[0].style.display ="none"
      ClosePopUp();
    });
  });
  
  function ClosePopUp() {
    let popupClassArray = [".add-popup",".delete-popup",".edit-popup",".messages-list"];
    popupClassArray.forEach(function (clsname) {
      document.querySelector(clsname).style.display = "none";
    });
  }
  
list = [{
    "id":"QWersdf1234rvboiQ",
    "name":"Nisha",
    "message":"Hello Nisha",
    "time": "5 min ago"
},
{
    "id":"QWersdf1234rvboiQ",
    "name":"Nisha",
    "message":"Hello Nisha",
    "time": "5 min ago"
},
{   "id":"QWersdf1234rvboiQ",
    "name":"Nisha",
    "message":"Hello Nisha",
    "time": "5 min ago"
}]

function displayCards(){
  let listOfContent = document.querySelector(".messages-list");
  // let box = document.createElement("div");
  for(let i = 0; i< list.length; i++){
      let messageContent = document.createElement("div");
      messageContent.className = "message-content-box";
      let name = document.createElement("div");
      name.className = "name-div";
      name.innerText = list[i].name;
      let message = document.createElement("div");
      message.className = "message-div";
      message.innerText = list[i].message;
      let time = document.createElement("div");
      time.className = "time-div";
      time.innerText = list[i].time; 
      let id = document.createElement("div");
      id.className = "time-div";
      id.innerText = list[i].id;

      messageContent.appendChild(id)
      messageContent.appendChild(name);
      messageContent.appendChild(message);
      messageContent.appendChild(time);
      listOfContent.appendChild(messageContent);
  };
}