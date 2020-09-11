document.querySelector(".add-side-navbar").addEventListener("click", () => {
    showPopup(".add-popup");
  });

  document.querySelector(".delete-side-navbar").addEventListener("click", () => {
    showPopup(".delete-popup");
  });

  document.querySelector(".edit-side-navbar").addEventListener("click", () => {
    showPopup(".edit-popup");
  })

  document.querySelector(".list-side-navbar").addEventListener("click", () => {
      showPopup(".messages-list");
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
  
