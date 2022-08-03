var onAppear = [];

document.addEventListener(
  "DOMContentLoaded",
  function () {
    onAppear = [].map.call(
      document.querySelectorAll(".animately"),
      function (item) {
        return item;
      }
    );
   console.log("This ran")
  },
  false
);

window.addEventListener(
  "scroll",
  function () {
    onAppear.forEach(function (elem) {
      var vwTop = window.pageYOffset;
      var vwBottom = window.pageYOffset + window.innerHeight;
      var elemTop = elem.offsetTop;
      var elemHeight = elem.offsetHeight;

      if (vwBottom > elemTop && vwTop - elemHeight < elemTop) {
        elem.classList.add("animate");
      } else {
        elem.classList.remove("animate");
      }
    });
  },
  false
);
