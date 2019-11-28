// turn off the border radius on menu and activate menu.
function turnOffBR() {
    const togglebox = document.querySelector('.toggler');
    const headerBox = document.querySelector('.top-banner-and-nav');
    const openMenu = document.querySelector('.ext-banner-menu');
  
    // If the checkbox is checked, display the output text
    if (togglebox.checked == true){
      headerBox.style.borderRadius = "0px";
      openMenu.style.display = 'unset';
    } else {
      headerBox.style.borderRadius = "0px 0px 10px 0px";
      openMenu.style.display = 'none';
    }
  }