 function toggleNav() {
  const nav = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");

  // Toggle the visibility of the navigation menu
  nav.classList.toggle("active");

  // Change the toggle button icon
  if (nav.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}

function toggleSubmenu(menuItem) {
  const allMenuItems = document.querySelectorAll(".menu-item");

  // Close all other menu items except the clicked one
  allMenuItems.forEach(item => {
    if (item !== menuItem) {
      item.classList.remove("active");
    }
  });

  // Toggle the clicked menu item
  menuItem.classList.toggle("active");
}


/* image slider start*/

/* image slider end */