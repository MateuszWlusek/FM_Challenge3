const submit = document.querySelector('.submit_btn');
const input = document.querySelector('input');

console.log(input);
submit.addEventListener('click', function (e) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();
    if (!input.value.match(validRegex)) {
        this.parentElement.children[2].innerText = 'Oops! Please check your email';
    } else {
        this.parentElement.children[2].innerText = 'Request sent!';
        input.value = '';
    }
})