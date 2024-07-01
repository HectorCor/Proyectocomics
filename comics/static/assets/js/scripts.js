document.addEventListener("DOMContentLoaded", () => {
    const characters = {
        DC: [
            { name: "Superman", img: "static/assets/img/personajes/superman.jpg"},
            { name: "Batman", img: "static/assets/img/personajes/batman.jpg" },
            { name: "Wonder Woman", img: "static/assets/img/personajes/wonderwoman.jpg" },
            { name: "Flash", img: "static/assets/img/personajes/flash.jpg" },
            { name: "Aquaman", img: "static/assets/img/personajes/aquaman.jpg" }
        ],
        Marvel: [
            { name: "Spider-Man", img: "static/assets/img/personajes/spiderman.jpg" },
            { name: "Iron Man", img: "static/assets/img/personajes/ironman.jpg" },
            { name: "Capitan America", img: "static/assets/img/personajes/capitanamerica.jpg" },
            { name: "Thor", img: "static/assets/img/personajes/thor.jpg" },
            { name: "Hulk", img: "static/assets/img/personajes/hulk.jpg" }
        ],
        Anime: [
            { name: "Goku", img: "static/assets/img/personajes/goku.jpg" },
            { name: "Naruto", img: "static/assets/img/personajes/naruto.jpg" },
            { name: "Luffy", img: "static/assets/img/personajes/luffy.jpg" },
            { name: "Ichigo", img: "static/assets/img/personajes/ichigo.jpg" },
            { name: "Sailor Moon", img: "static/assets/img/personajes/sailormoon.jpg" }
        ]
    };

    // Función para mostrar personajes
    function showCharacters(category) {
        const container = document.getElementById(`${category.toLowerCase()}-characters`);
        container.innerHTML = "";
        characters[category].forEach(character => {
            const characterDiv = document.createElement("div");
            characterDiv.className = "character";
            characterDiv.innerHTML = `
                <img src="${character.img}" alt="${character.name}">
                <h3>${character.name}</h3>
            `;
            container.appendChild(characterDiv);
        });
    }

    // Mostrar personajes de la categoría activa al cargar la página
    document.querySelector(".tablinks").click();

    // Función para manejar la apertura de categorías
    window.openCategory = (evt, category) => {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(category).style.display = "block";
        evt.currentTarget.className += " active";

        showCharacters(category);
    }
});
