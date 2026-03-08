// When page loads, fetch user profile data
window.addEventListener('load', loadProfile);

const API_URL = 'http://localhost:3006';

function loadProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Debes iniciar sesión primero');
        window.location.href = './03.html';
        return;
    }
    fetch(`${API_URL}/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error al obtener perfil');
        }
        return res.json();
    })
    .then(data => {
        // Store profile data in sessionStorage
        sessionStorage.setItem('profileData', JSON.stringify(data));
        // Also update the DOM:
        document.getElementById('username').textContent = data.user;
        document.getElementById('email').textContent = data.email;
        document.getElementById('fullname').textContent = data.name + ' ' + data.apellpat + ' ' + data.apellmat;
        const date = new Date(data.created_at);
        document.getElementById('created').textContent = date.toLocaleDateString('es-ES', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    })
    .catch(err => {
        alert('Error: ' + err.message);
        console.error(err);
    });
}

function logout() {
    // Remove token and user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    alert('Sesión cerrada');
    window.location.href = '../index.html';
}

function editProfile() {
    window.location.href = './Modify.html';
}
