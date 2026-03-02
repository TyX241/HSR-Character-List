const characterList = document.getElementById('character-list');

if (typeof characters !== 'undefined') {
    
    characters.sort((a, b) => a.name.localeCompare(b.name));

    characters.forEach(char => {
        const cardHTML = `
            <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                <a href="detail.html?id=${char.id}" class="text-decoration-none">
                    <div class="card character-card h-100" style="--char-color: ${char.color};">
                        <div class="card-overlay">
                            <span class="view-more-text">View more &raquo;</span>
                        </div>
                        <div class="character-img-wrapper">
                            <img src="${char.image}" class="img-fluid" alt="${char.name}">
                        </div>
                        <div class="card-body-custom">
                            <div class="char-name">${char.name}</div>
                            <div class="char-info">Path: ${char.path}</div>
                        </div>
                    </div>
                </a>
            </div>
        `;
        characterList.innerHTML += cardHTML;
    });
} else {
    console.error("Data characters tidak ditemukan! Pastikan data.js dipanggil sebelum script.js");
}