// document.addEventListener("DOMContentLoaded", function(event) {
//     const mm1 = new MetisMenu("#menu1", {   triggerElement: 'Canpt'})  
//       .on("shown.metisMenu", function(event) {
//         window.addEventListener("click", function mmClick1(e) {
//           if (!event.target.contains(e.target)) {
//             mm1.hide(event.detail.shownElement);
//             window.removeEventListener("click", mmClick1);
//           }
//         });
//     });
//   });

document.addEventListener("DOMContentLoaded", function(event) {
    const mm1 = new MetisMenu("#menu1")  
      .on("shown.metisMenu", function(event) {
        window.addEventListener("click", function mmClick1(e) {
          if (!event.target.contains(e.target)) {
            mm1.hide(event.detail.shownElement);
            window.removeEventListener("click", mmClick1);
          }
        });
    });
  });


  function openMenu() {
    var x = document.getElementById("menu1");
    if (x.className === "metismenu responsive") {
        x.className = "metismenu";
    } else {
        x.className = "metismenu responsive";
    }

}