let $Mobbtn = document.getElementById("mob-btn");
let $Mobinput = document.getElementById("mob-input");

const mobvalidateMail = () => {
  let $Mobinput = document.getElementById("mob-input");
  if ($Mobinput.value.length < 6) {
    // $Mobinput.nextElementSibling.style.visibility = "visible";
    $Mobinput.insertAdjacentHTML(
      "afterend",
      `<div class="warn--container">
          <p class="warn">Oops! Please check your mail</p>
      </div>`
    );
  } else {
    setTimeout(location.reload(), 3000);
  }
};

$Mobinput.addEventListener("focus", () => {
  $Mobinput.nextElementSibling.style.display = "none";
});
