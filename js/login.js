
document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      document.getElementById('loginError').style.display = 'block';
      return;
    }

    const data = await response.json();
    localStorage.setItem('auth_token', data.access_token);
    window.location.href = 'dashboard.html';
  } catch (error) {
    console.error('Error:', error);
  }
});
