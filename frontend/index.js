
const form = document.getElementById('login-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('welcome-message').style.display = 'block';
        } else {
            alert('Login failed');
        }
    });