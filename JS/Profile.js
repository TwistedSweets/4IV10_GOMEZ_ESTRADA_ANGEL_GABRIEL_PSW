// When page loads, fetch user profile data
window.addEventListener('load', loadProfile);

function loadProfile() {
    const token = localStorage.getItem('token');
    
    // Check if user is logged in
    if (!token) {
        alert('Debes iniciar sesión primero');
        window.location.href = './03.html';
        return;
    }

    // Fetch user data from backend
    fetch('http://localhost:3006/profile', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Token inválido o expirado');
        }
        return res.json();
    })
    .then(data => {
        // Display user data
        document.getElementById('username').textContent = data.user;
        document.getElementById('email').textContent = data.email;
        document.getElementById('fullname').textContent =
        data.name + " " + data.apellpat + " " + data.apellmat;
        
        // Format date
        const date = new Date(data.created_at);
        const formatted = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('created').textContent = formatted;
    })
    .catch(err => {
        alert('Error: ' + err.message);
        // Redirect to login if token is invalid
        localStorage.removeItem('token');
        window.location.href = './03.html';
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
