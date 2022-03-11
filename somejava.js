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

        adviceID.innerText = `ADVICE #` + data['slip']['id'];
        advice.innerText = `"` + data['slip']['advice'] +`"`;

    }
}




// async function renderAdvice() {
//     let advice = await fetchAdvice();
    
//     let advicehtml = '';
//     let adviceIDhtml = '';
//     let advicesegment =   `"${advice.slip.advice}."` ;
//     let adviceIDsegment = `${advice.slip.id}`;

//     advicehtml += advicesegment;
//     adviceIDhtml += adviceIDsegment; 

//     let container1 = document.querySelector('.advice');
//     container1.innerHTML = advicehtml;

//     let container2 = document.querySelector('.idnum');
//     container2.innerHTML = adviceIDhtml;
// }
