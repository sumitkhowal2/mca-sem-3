function displayLoginComponent() {
    var loginComponent = document.getElementById('login');
    if (loginComponent) {
        loginComponent.style.display = 'block';
    }
}
setTimeout(displayLoginComponent, 3000);