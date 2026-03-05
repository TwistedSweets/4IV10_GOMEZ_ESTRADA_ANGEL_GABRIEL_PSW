document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    editProfile();
});

window.addEventListener('load', loadProfile);

function editProfile() {

    const token = localStorage.getItem('token');

    if (!token) {
        alert('Debes iniciar sesión primero');
        window.location.href = './03.html';
        return;
    }

    const name = document.getElementById('inputname').value;
    const apellpat = document.getElementById('inputapellpat').value;
    const apellmat = document.getElementById('inputapellmat').value;
    const email = document.getElementById('inputemail').value;

    fetch('http://localhost:3006/modify', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, apellpat, apellmat, email })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        window.location.href = './Profile.html';
    })
    .catch(err => console.error(err));
}