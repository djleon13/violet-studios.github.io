// app.js
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await axios.post('/login', { username, password });
        if (response.data.success) {
            window.location.href = '/edit';
        } else {
            errorMessage.textContent = response.data.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
