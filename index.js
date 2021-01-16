let $btn = document.getElementById("btn");
let $input = document.getElementById("input");

const validateMail = () => {
  let $input = document.getElementById("input");
  if ($input.value.length < 6) {
    // $input.nextElementSibling.style.visibility = "visible";
    $input.insertAdjacentHTML(
      "afterend",
      `<div class="warn--container">
          <p class="warn">Oops! Please check your mail</p>
      </div>`
    );
  } else {
    $input.value = "";
  }
};

$input.addEventListener("focus", () => {
  $input.nextElementSibling.style.display = "none";
});
