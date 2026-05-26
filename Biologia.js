// ============================================================
//  MEMORY – NETTIE MARIA STEVENS (versione compatibile con tuo HTML)
// ============================================================

// --- MOBILE / ORIENTAMENTO ---
function isMobile() {
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

function checkOrientation() {
  const warning = document.getElementById("rotate-warning");
  if (window.innerHeight > window.innerWidth) {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
}

// ============================================================
//  DATI: FATTI DI NETTIE STEVENS (ORDINE FISSO)
// ============================================================

const facts = [
    // BIOGRAFIA
    {
        id: "bio1",
        category: "Biografia",
        title: "Nascita e infanzia",
        text: "Nettie Maria Stevens nacque il 7 luglio 1861 a Cavendish, Vermont."
    },
    {
        id: "bio2",
        category: "Biografia",
        title: "Famiglia e studi",
        text: "Proveniva da una famiglia modesta e mostrò fin da piccola grande interesse per lo studio."
    },
    {
        id: "bio3",
        category: "Biografia",
        title: "Percorso accademico",
        text: "Studiò al Mount Holyoke Female Seminary e poi alla Stanford University."
    },
    {
        id: "bio4",
        category: "Biografia",
        title: "Carriera iniziale",
        text: "Iniziò la carriera scientifica tardi, quasi a 40 anni."
    },

    // SCOPERTE
    {
        id: "scop1",
        category: "Scoperte",
        title: "Ricerca sui cromosomi",
        text: "Studiò i cromosomi degli insetti al microscopio."
    },
    {
        id: "scop2",
        category: "Scoperte",
        title: "Scoperta XY/XX",
        text: "Nel 1905 scoprì che i maschi hanno XY e le femmine XX."
    },
    {
        id: "scop3",
        category: "Scoperte",
        title: "Determinazione del sesso",
        text: "Dimostrò che il sesso biologico è determinato dai cromosomi."
    },
    {
        id: "scop4",
        category: "Scoperte",
        title: "Impatto scientifico",
        text: "La sua scoperta rivoluzionò la genetica moderna."
    },

    // DISCRIMINAZIONI
    {
        id: "ric1",
        category: "Discriminazioni",
        title: "Ambiente ostile",
        text: "Lavorò in un ambiente dominato dagli uomini."
    },
    {
        id: "ric2",
        category: "Discriminazioni",
        title: "Disparità",
        text: "Guadagnava meno dei colleghi e le vennero negati ruoli stabili."
    },
    {
        id: "ric3",
        category: "Discriminazioni",
        title: "Attribuzione errata",
        text: "Per anni il merito della sua scoperta fu attribuito a Edmund Wilson."
    },
    {
        id: "ric4",
        category: "Discriminazioni",
        title: "Riconoscimento tardivo",
        text: "Solo decenni dopo le fu riconosciuto il contributo reale."
    },

    // VITA PRIVATA
    {
        id: "vita1",
        category: "Vita privata",
        title: "Dedizione",
        text: "Dedicò la vita alla ricerca scientifica."
    },
    {
        id: "vita2",
        category: "Vita privata",
        title: "Ultimi anni",
        text: "Morì nel 1912 a Baltimora a soli 50 anni."
    },
    {
        id: "vita3",
        category: "Vita privata",
        title: "Eredità",
        text: "Oggi è considerata una pioniera della genetica moderna."
    },
    {
        id: "vita4",
        category: "Vita privata",
        title: "Memoria",
        text: "La sua storia è oggi studiata e valorizzata."
    }
];

// ============================================================
//  LIVELLI (USIAMO LE TUE IMMAGINI ORIGINALI)
// ============================================================

const levels = {
    bio: {
        title: "Livello Biografia",
        subtitle: "Scopri la vita di Nettie Maria Stevens.",
        cards: [
            { img:"img1/1Immagine.png", factId: "bio1" },
            { img:"img1/1Immagine.png", factId: "bio1" },
            { img:"img1/2Immagine.png", factId: "bio2" },
            { img:"img1/2Immagine.png", factId: "bio2" },
            { img:"img1/3Immagine.png", factId: "bio3" },
            { img:"img1/3Immagine.png", factId: "bio3" },
            { img:"img1/4Immagine.png", factId: "bio4" },
            { img:"img1/4Immagine.png", factId: "bio4" }
        ],
        timer: false,
        swap: false
    },
    scoperte: {
        title: "Livello Scoperte",
        subtitle: "Approfondisci le scoperte scientifiche.",
        cards: [
            { img:"img1/1.1Immagine.png", factId: "scop1" },
            { img:"img1/1.1Immagine.png", factId: "scop1" },
            { img:"img1/1.2Immagine.png", factId: "scop2" },
            { img:"img1/1.2Immagine.png", factId: "scop2" },
            { img:"img1/1.3Immagine.png", factId: "scop3" },
            { img:"img1/1.3Immagine.png", factId: "scop3" },
            { img:"img1/1.4Immagine.png", factId: "scop4" },
            { img:"img1/1.4Immagine.png", factId: "scop4" }
        ],
        timer: true,
        timeLimit: 40,
        swap: false
    },
    riconoscimenti: {
        title: "Livello Discriminazioni",
        subtitle: "Scopri gli ostacoli nella sua carriera.",
        cards: [
            { img:"img2/2.1Immagine.png", factId: "ric1" },
            { img:"img2/2.1Immagine.png", factId: "ric1" },
            { img:"img2/2.2Immagine.png", factId: "ric2" },
            { img:"img2/2.2Immagine.png", factId: "ric2" },
            { img:"img2/2.3Immagine.png", factId: "ric3" },
            { img:"img2/2.3Immagine.png", factId: "ric3" },
            { img:"img2/2.4Immagine.png", factId: "ric4" },
            { img:"img2/2.4Immagine.png", factId: "ric4" }
        ],
        timer: false,
        swap: true
    },
    vita: {
        title: "Livello Vita privata",
        subtitle: "Conosci il lato umano di Nettie.",
        cards: [
            { img:"img2/3.1Immagine.png", factId: "vita1" },
            { img:"img2/3.1Immagine.png", factId: "vita1" },
            { img:"img2/3.2Immagine.png", factId: "vita2" },
            { img:"img2/3.2Immagine.png", factId: "vita2" },
            { img:"img2/3.3Immagine.png", factId: "vita3" },
            { img:"img2/3.3Immagine.png", factId: "vita3" },
            { img:"img2/3.4Immagine.png", factId: "vita4" },
            { img:"img2/3.4Immagine.png", factId: "vita4" }
        ],
        timer: true,
        timeLimit: 45,
        swap: true
    }
};

// ============================================================
//  STATO DI GIOCO
// ============================================================

let currentLevelKey = null;
let flipped = [];
let matchedPairs = 0;
let totalPairs = 0;
let timerInterval = null;
let timeLeft = 0;

const unlockedFacts = new Set();

// ============================================================
//  DOM ELEMENTS
// ============================================================

const mainMenu = document.getElementById("main-menu");
const levelSelect = document.getElementById("level-select");
const gameSection = document.getElementById("game-section");
const archiveSection = document.getElementById("archive-section");
const aboutSection = document.getElementById("about-section");

const gameContainer = document.getElementById("game");
const gameTitle = document.getElementById("game-title");
const gameSubtitle = document.getElementById("game-subtitle");

const archiveList = document.getElementById("archive-list");
const archiveEmpty = document.getElementById("archive-empty");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupCloseBtn = document.getElementById("popup-close");

// ============================================================
//  NAVIGAZIONE (CORRETTA PER NASCONDERE IL MENU)
// ============================================================

function showSection(section) {
    // nascondi tutto davvero
    mainMenu.style.display = "none";
    levelSelect.style.display = "none";
    gameSection.style.display = "none";
    archiveSection.style.display = "none";
    aboutSection.style.display = "none";

    levelSelect.classList.add("hidden");
    gameSection.classList.add("hidden");
    archiveSection.classList.add("hidden");
    aboutSection.classList.add("hidden");

    if (section) {
        section.classList.remove("hidden");
        section.style.display = "block";
    }
}

function backToMenu() {
    // nascondi tutte le sezioni interne
    levelSelect.style.display = "none";
    gameSection.style.display = "none";
    archiveSection.style.display = "none";
    aboutSection.style.display = "none";

    levelSelect.classList.add("hidden");
    gameSection.classList.add("hidden");
    archiveSection.classList.add("hidden");
    aboutSection.classList.add("hidden");

    // mostra solo il menu
    mainMenu.style.display = "flex"; // o "block" se nel CSS non è flex
}


// ============================================================
//  MENU PRINCIPALE
// ============================================================

mainMenu.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (!action) return;

    if (action === "play-default") {
        startLevel("bio");
    } else if (action === "choose-level") {
        showSection(levelSelect);
    } else if (action === "open-archive") {
        renderArchive();
        showSection(archiveSection);
    } else if (action === "about") {
        showSection(aboutSection);
    }
});

// ============================================================
//  SELEZIONE LIVELLO
// ============================================================

levelSelect.addEventListener("click", (e) => {
    const levelKey = e.target.dataset.level;
    if (levelKey) startLevel(levelKey);
});

// ============================================================
//  AVVIO LIVELLO
// ============================================================

function startLevel(levelKey) {
    const level = levels[levelKey];
    currentLevelKey = levelKey;

    gameTitle.textContent = level.title;
    gameSubtitle.textContent = level.subtitle;

    loadLevel(levelKey);
    generateCards();

    showSection(gameSection);

    if (level.timer) startTimer(level.timeLimit);
}

// ============================================================
//  TIMER
// ============================================================

function startTimer(seconds) {
    timeLeft = seconds;
    updateSubtitle();

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateSubtitle();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Tempo scaduto! Riprova.");
            startLevel(currentLevelKey);
        }
    }, 1000);
}


function updateSubtitle() {
    const level = levels[currentLevelKey];
    if (level.timer) {
        gameSubtitle.textContent = `${level.subtitle} – Tempo: ${timeLeft}s`;
    }
}

// ============================================================
//  MEMORY
// ============================================================

function loadLevel(levelKey) {
    flipped = [];
    matchedPairs = 0;
    gameContainer.innerHTML = "";

    totalPairs = levels[levelKey].cards.length / 2;
}

function generateCards() {
    const level = levels[currentLevelKey];
    const cardsData = [...level.cards].sort(() => Math.random() - 0.5);

    cardsData.forEach(cardData => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.factId = cardData.factId;

        const back = document.createElement("div");
        back.classList.add("card-back");

        const front = document.createElement("div");
        front.classList.add("card-front");

        const img = document.createElement("img");
        img.src = cardData.img;

        front.appendChild(img);
        card.appendChild(back);
        card.appendChild(front);

        card.addEventListener("click", () => flipCard(card));
        gameContainer.appendChild(card);
    });
}

function flipCard(card) {
    if (card.classList.contains("flipped")) return;
    if (flipped.length === 2) return;

    card.classList.add("flipped");
    flipped.push(card);

    if (flipped.length === 2) {
        setTimeout(checkMatch, 400);
    }
}

function checkMatch() {
    const [c1, c2] = flipped;
    const level = levels[currentLevelKey];

    if (!c1 || !c2) {
        flipped = [];
        return;
    }

    // --- COPPIA GIUSTA ---
    if (c1.dataset.factId === c2.dataset.factId) {
        matchedPairs++;

        // sblocca fatto
        unlockFact(c1.dataset.factId);
        showFactPopup(c1.dataset.factId);

        // --- LIVELLO COMPLETATO ---
        if (matchedPairs === totalPairs) {

            // 🔥 STOP TIMER SUBITO
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }

            popupCloseBtn.onclick = () => {
                popup.style.display = "none";
                showLevelCompletePopup();
            };

        } else {
            popupCloseBtn.onclick = () => {
                popup.style.display = "none";
            };
        }

    } else {
        // --- COPPIA SBAGLIATA ---
        c1.classList.remove("flipped");
        c2.classList.remove("flipped");

        // swap solo nei livelli che lo prevedono
        if (level.swap) swapRandomCards();
    }

    flipped = [];
}



// ============================================================
//  SCAMBIO CARTE (LIVELLI 3 E 4)
// ============================================================



// ============================================================
//  POPUP FATTI
// ============================================================

function unlockFact(factId) {
    unlockedFacts.add(factId);
}

function getFactById(id) {
    return facts.find(f => f.id === id);
}

function showFactPopup(factId) {
    const fact = getFactById(factId);
    popupTitle.textContent = `${fact.title} (${fact.category})`;
    popupText.textContent = fact.text;
    popup.style.display = "block";
}

// ============================================================
//  ARCHIVIO
// ============================================================

function renderArchive() {
    archiveList.innerHTML = "";

    if (unlockedFacts.size === 0) {
        archiveEmpty.style.display = "block";
        return;
    }

    archiveEmpty.style.display = "none";

    const byCategory = {};

    unlockedFacts.forEach(id => {
        const fact = getFactById(id);
        if (!byCategory[fact.category]) byCategory[fact.category] = [];
        byCategory[fact.category].push(fact);
    });

    Object.keys(byCategory).forEach(cat => {
        const catDiv = document.createElement("div");
        catDiv.classList.add("archive-category");

        const h3 = document.createElement("h3");
        h3.textContent = cat;
        catDiv.appendChild(h3);

        byCategory[cat].forEach(fact => {
            const item = document.createElement("div");
            item.classList.add("archive-item");
            item.textContent = `${fact.title} – ${fact.text}`;
            catDiv.appendChild(item);
        });

        archiveList.appendChild(catDiv);
    });
}

// ============================================================
//  POPUP FINE LIVELLO
// ============================================================

const levelOrder = ["bio", "scoperte", "riconoscimenti", "vita"];

function showLevelCompletePopup() {
    const popupLevel = document.getElementById("level-complete-popup");
    const title = document.getElementById("level-complete-title");
    const continueBtn = document.getElementById("continue-btn");

    title.textContent = "Hai completato: " + levels[currentLevelKey].title;
    popupLevel.style.display = "block";

    const currentIndex = levelOrder.indexOf(currentLevelKey);
    const nextLevel = levelOrder[currentIndex + 1];

    if (nextLevel) {
        continueBtn.textContent = "Continua →";
        continueBtn.onclick = () => {
            popupLevel.style.display = "none";
            startLevel(nextLevel);
        };
    } else {
        continueBtn.textContent = "Torna al menu";
        continueBtn.onclick = () => {
            popupLevel.style.display = "none";
            backToMenu();
        };
    }
}

// ============================================================
//  PULSANTI "TORNA AL MENU" E POPUP GENERALE
// ============================================================

document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        backToMenu();
    });
});

popupCloseBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// ============================================================
//  ORIENTAMENTO MOBILE
// ============================================================

window.addEventListener("resize", () => {
    if (isMobile()) checkOrientation();
});

document.getElementById("close-rotate").addEventListener("click", () => {
    document.getElementById("rotate-warning").style.display = "none";
}); 
