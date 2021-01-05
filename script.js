const showMenu = () => {
    const nav = document.querySelector("#nav");

    if (nav.className === "menu") {
      nav.className += " responsive";
    } else {
      nav.className = "menu";
    }
  }