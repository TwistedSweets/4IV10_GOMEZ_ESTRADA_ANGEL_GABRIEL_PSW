const API_URL = 'http://localhost:3006';

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

    //Password change by inputpassword and repeatpassword
    const password = document.getElementById('inputpassword').value;
    const repeatPassword = document.getElementById('repeatpassword').value;

    if (password && password !== repeatPassword) {
        alert('Las contraseñas no coinciden');
        return;
    } else if (!password) {
        // If password is empty, don't send it to the backend
        editProfileRequest(name, apellpat, apellmat, email, null, token);
    } else {
        editProfileRequest(name, apellpat, apellmat, email, password, token);
    }
}

function editProfileRequest(name, apellpat, apellmat, email, password, token) {

    fetch(`${API_URL}/modify`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, apellpat, apellmat, email, password })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        window.location.href = './Profile.html';
    })
    .catch(err => {alert('Error: ' + err.message); console.error(err)});
}

function loadProfile() {
    // Load profile data from sessionStorage
    const profileData = JSON.parse(sessionStorage.getItem('profileData'));
    if (profileData) {
        document.getElementById('inputname').value = profileData.name || '';
        document.getElementById('inputapellpat').value = profileData.apellpat || '';
        document.getElementById('inputapellmat').value = profileData.apellmat || '';
        document.getElementById('inputemail').value = profileData.email || '';
    } else {
        alert('No se pudo cargar el perfil. Por favor, vuelve a iniciar sesión.');
        window.location.href = './03.html';
    }
}