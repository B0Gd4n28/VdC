document.addEventListener('DOMContentLoaded', function() {
    // Afișează ecranul de încărcare
    document.getElementById('loading-screen').style.display = 'flex';

    // Simulează un delay de 3 secunde (poți înlocui aceasta cu logica ta de încărcare)
    setTimeout(function() {
        // Ascunde ecranul de încărcare și afișează conținutul
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // 3000 milisecunde = 3 secunde
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleContentBtn = document.getElementById('toggleContentBtn');

    toggleContentBtn.addEventListener('click', function() {
        const courseCols = document.querySelectorAll('.course-col');
        courseCols.forEach(col => col.classList.toggle('expanded'));
        
        const buttonText = toggleContentBtn.innerText === 'Afișează Mai Mult' ? 'Ascunde' : 'Afișează Mai Mult';
        toggleContentBtn.innerText = buttonText;
    });
});

