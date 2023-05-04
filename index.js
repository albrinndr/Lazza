function whatsapp() {
    var redirect = confirm('Chat with Us');

    if (redirect) {
        window.location.href = 'https://api.whatsapp.com/send/?phone=919946037777&text&type=phone_number&app_absent=0';
    } else {
        window.history.back();
    }
}