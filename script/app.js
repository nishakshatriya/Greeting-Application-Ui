const baseURL = "http://localhost:3000/greetings/"

function getCards(){
  fetch(`${baseURL}`)
  .then(data =>{
    return data.json()
  })
  .then(res => {
    displayCards(res)
  })
  .catch(err => console.log(err))
}

getCards()

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
  
function displayCards(list){
  let listOfContent = document.querySelector(".messages-list");
  let box = document.createElement("div");
  for(let i = 0; i< list.length; i++){
      let messageContent = document.createElement("div");
      messageContent.className = "message-content-box";
      
      let name = document.createElement("div");
      name.className = "name-div";
      name.innerText = list[i].firstName;

      let lname = document.createElement("div");
      lname.className = "name-div";
      lname.innerText = list[i].lastName;
      
      let message = document.createElement("div");
      message.className = "message-div";
      message.innerText = list[i].message;
      
      let time = document.createElement("div");
      time.className = "time-div";
      time.innerText = list[i].createdAt; 
      
      let id = document.createElement("div");
      id.className = "id-div";
      id.innerText = list[i]._id;
      id.innerHTML = "ObjectId("+list[i]._id+")";

      messageContent.appendChild(id)
      messageContent.appendChild(name);
      messageContent.appendChild(lname);
      messageContent.appendChild(message);
      messageContent.appendChild(time);
      listOfContent.appendChild(messageContent);
  };
}