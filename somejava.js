const adviceID = document.querySelector(".adviceID");
const advice = document.querySelector(".advice");

async function fetchAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });

  console.log(response.status);
  console.log(response.statusText);

  if (response.status === 200) {
    let data = await response.json();
    console.log(data.slip.advice);
    console.log(data.slip.id);

    adviceID.innerHTML = `<h1>ADVICE #${data.slip.id}<h1>`;

    advice.innerHTML = `<blockquote>"${data.slip.advice}"</blockquote>`;
  }
}
