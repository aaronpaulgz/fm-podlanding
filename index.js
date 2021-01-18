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

// $Mobinput.addEventListener("focus", () => {
//   $Mobinput.nextElementSibling.style.display = "none";
// });

// Tablet & Desktop

let $btn = document.getElementById("btn");
let $input = document.getElementById("input");
let $form = document.getElementById("form");

const validateMail = () => {
  let $input = document.getElementById("input");
  if ($input.value.length < 6) {
    // $Mobinput.nextElementSibling.style.visibility = "visible";
    $form.insertAdjacentHTML(
      "afterend",
      `<div class="warn--container">
          <p class="warn">Oops! Please check your mail</p>
      </div>`
    );
  } else {
    setTimeout(location.reload(), 3000);
  }
};

// $input.addEventListener("focus", () => {
//   $form.nextElementSibling.style.display = "none";
// });
