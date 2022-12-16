const zc = document.querySelector(".header_zc");
const ss = document.querySelector(".header_ss");
const dl = document.querySelector(".header_dl");
const xz = document.querySelector(".app_xz_box");
const dl_cover = document.querySelector(".header_zc_show");
const deleter = document.querySelector(".example_delete");

const market_xz = document.querySelector(".market_xz");

// 搜索
zc.addEventListener("click", function () {
  ss.classList.remove("cover");
});
deleter.addEventListener("click", () => {
  ss.classList.add("cover");
});
// 登录
dl.addEventListener("mouseover", function () {
  dl_cover.classList.remove("cover");

  setTimeout(() => {
    dl.addEventListener("mouseout", () => {
      dl_cover.classList.add("cover");
      // timerld = !timerld;
    });
  }, 1000);
});

xz.addEventListener("mouseover", () => {
  console.log(1);
  market_xz.classList.remove("cover");
  xz.addEventListener("mouseout", () => {
    setTimeout(() => {
      market_xz.classList.add("cover");
      console.log(2);
    }, 500);
  });
});

/////////subvav///////////
const subnav = document.querySelector(".subnav_market");

// let topPos = subnav.offsetTop;
// console.log(topPos);
// subnav.addEventListener("scroll", () => {
//   const top = subnav.scrollTop();
//   if (top > 0) {
//     subnav.style.position = "fixed";
//   }
//   console.log(1);
//   subnav.style.marginTop = "-10.5rem";
// }
// });

// window.pageYOffset();
