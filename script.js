// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", () => {
    // Afficher les cours de Seconde par défaut au chargement
    displayCourses('seconde');
});

function displayCourses(level) {
    const container = document.getElementById('course-list');
    const data = schoolData[level];

    // Vider le conteneur
    container.innerHTML = '';

    if (data) {
        data.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <h3>${course.matiere}</h3>
                <p>${course.desc}</p>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = '<p>Contenu en cours de préparation...</p>';
    }
}

function filterCourses(level) {
    // Gérer l'apparence des boutons (actif/inactif)
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Ajouter la classe active au bouton cliqué (simplifié ici)
    event.target.classList.add('active');

    // Afficher les cours correspondants
    displayCourses(level);
}
