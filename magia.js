
const ul = document.querySelector("ul");
//B

function frames() {
  const animacion = ul.animate([
    { trasnsform: "translateY(0px)" },
    { trasnsform: "translateY(-100px)" }
  ], {
    easing: "linear",
    iterations: 1,
    duration: 200
  });
  return animacion.finished;
};

function displace() {
  frames()
    .then((res) => {
      console.log(res);
      ul.appendChild(document.querySelectorAll("li")[0]);
    })
};
setInterval(() => {
  frames();
  displace();
}, 1000)