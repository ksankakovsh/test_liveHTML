    //mobile-menu
    document.getElementById('btn-menu').onclick = function mobileMenu() {
      let x = document.getElementById("mob-links");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
       //search-popup  
        document.getElementById('show').onclick = function() {
        document.getElementById('form').style.display = 'block';
      }
        document.getElementById('hider').onclick = function() {
        document.getElementById('form').style.display = 'none';
      }