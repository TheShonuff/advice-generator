const adviceID = document.querySelector('.adviceID');
const advice = document.querySelector('.advice');


async function fetchAdvice() {
    let response = await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'});

    console.log(response.status);
    console.log(response.statusText);

    if (response.status === 200) {
        let data = await response.json();
        console.log(data.slip.advice);
        console.log(data.slip.id);

     //   adviceID.innerText = `ADVICE #` + data['slip']['id'];
        adviceID.innerHTML = `<p> ADVICE #: ${data.slip.id}</p>`
    //    advice.innerText = `"` + data['slip']['advice'] +`"`;
        advice.innerHTML = `<p>"${data.slip.advice}" </p>`
    }
}



