document.querySelector(".add-side-navbar").addEventListener("click", () => {
    showPopup(".add-popup");
  });

  document.querySelector(".delete-side-navbar").addEventListener("click", () => {
    showPopup(".delete-popup");
  });
  
  
  function showPopup(classname) {
    let popuplist = [".add-popup",".delete-popup"];
    popuplist.forEach(function (clsname) {
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
    let popuplist = [".add-popup",".delete-popup"];
    popuplist.forEach(function (clsname) {
      document.querySelector(clsname).style.display = "none";
    });
  }
  
