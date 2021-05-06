let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let uniqueId = document.querySelector('#uniqueId');
let submitBtn = document.querySelector('#submitBtn');

//add event listener to submit button
submitBtn.addEventListener("click", () => {

    const newTable = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        uniqueId: uniqueId.value,
    }

    // make POST request to back end
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTable),
    });
})

