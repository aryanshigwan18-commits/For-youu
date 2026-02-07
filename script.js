function scrollNext(el) {
  el.parentElement.nextElementSibling.scrollIntoView({
    behavior: "smooth"
  });
}

function showNo() {
  document.getElementById("noText").classList.remove("hidden");
}

function showGifts() {
  document.getElementById("giftSection").classList.remove("hidden");
  document.getElementById("giftSection").scrollIntoView({behavior:"smooth"});
}

function openGift(type) {
  const overlay = document.getElementById("giftOverlay");
  const bg = document.getElementById("giftBg");
  const main = document.getElementById("giftMain");
  const btn = document.getElementById("goAheadBtn");

  btn.classList.add("hidden");

  if(type==="flowers"){
    bg.src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
    main.src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif";
  }

  if(type==="choco"){
    bg.src="https://media.giphy.com/media/l0MYyDa8S9ghzNebm/giphy.gif";
    main.src="https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif";
  }

  if(type==="bmw"){
    bg.src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif";
    main.src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif";
  }

  overlay.classList.remove("hidden");

  setTimeout(() => {
    btn.classList.remove("hidden");
  }, 5500);
}

function goAhead() {
  document.getElementById("giftOverlay").classList.add("hidden");
  document.getElementById("shayriSection").classList.remove("hidden");
  document.getElementById("shayriSection").scrollIntoView({behavior:"smooth"});
}
