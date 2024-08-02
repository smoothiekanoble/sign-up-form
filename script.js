function submitForm() {
    const form = document.getElementById('form');
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    
    if (password !== confirm){
        alert("Freaky passwords must match!");
    }
    if (form.checkValidity()) {
        form.submit();
    } else {
        alert("Please fill out all fields correctly to get freaky!");
    }

}