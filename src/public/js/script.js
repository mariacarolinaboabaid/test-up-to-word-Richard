const contentNumbers = document.getElementById('content-numbers');
document.addEventListener('quantityChanged', function (e) {
    const quantity = e.detail; 
    fetch(`/generateNumbers?quantity=${quantity}`)
        .then(response => response.text())
        .then(html => {
            contentNumbers.innerHTML = html; 
        })
        .catch(error => console.error('Error:', error));
});