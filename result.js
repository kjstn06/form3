window.onload = function() {
    
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const section = localStorage.getItem('section');
    const subject = localStorage.getItem('subject');

    console.log('firstName:', firstName); 
    console.log('lastName:', lastName);
    console.log('section:', section);
    console.log('subject:', subject);

    const resultContainer = document.querySelector('#result-container');
    
    let resultMessage = `<p><strong>Welcome, ${firstName} ${lastName}!</strong></p>`;

    if (section) {
        resultMessage += `<p>You are from <strong>${section}</strong>.</p>`;
    } else {
        resultMessage += `<p>No section selected.</p>`;
    }

    if (subject) {
        resultMessage += `<p>Your selected subject is <strong>${subject}</strong>.</p>`;
    }

    resultContainer.innerHTML = resultMessage;
    resultContainer.style.display = 'block';
};
