// Attend que le contenu DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les éléments avec l'attribut 'data-music'
    document.querySelectorAll('[data-music]').forEach((element) => {
        // Ajoute un écouteur d'événement de clic à chaque élément
        element.addEventListener('click', (event) => {        
            // Récupère l'élément sur lequel le clic a été effectué
            const current = event.currentTarget;
            
            // Met à jour les informations
            document.getElementById('title_song').value = current.dataset.title;
            document.getElementById('artist_song').value = current.dataset.artist;

            // Met à jour les éléments visuels avec les informations de la chanson
            document.querySelector('.amazingaudioplayer-title').textContent = current.dataset.title;
            document.querySelector('.amazingaudioplayer-info').textContent = current.dataset.artist;
            document.querySelector('#cover').src = current.dataset.cover;

            // Affiche l'élément audio
            document.querySelector('#listenTopMusic').classList.remove('hide');

            // Met à jour la source audio et lance la lecture
            const audioElement = document.getElementById('listenTopMusic');
            audioElement.src = current.dataset.music;
            audioElement.play();
        });
    });
});
