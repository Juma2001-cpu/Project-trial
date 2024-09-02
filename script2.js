document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
        const response = await fetch('/register', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        alert(result);
    } catch (error) {
        alert('Error registering user');
    }
});
