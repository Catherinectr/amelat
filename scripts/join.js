(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('rCTnjyBHLekWQxjVL');
})();
window.onload = function() {
document.getElementById('contact-form').addEventListener('submit', function(event) {
        emailjs.sendForm('service_q9a619n', 'template_91uht1y', this)
});
};