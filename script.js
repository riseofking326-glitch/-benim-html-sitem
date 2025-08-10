(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Yine hayır mı? Tamam, çikolata ve sarılma paketiyle geliyorum, kabul et artık! 🍫🤗",
    "Affetmezsen, evdeki bitkilerle konuşacağım, onlar bile senden iyisini bilir! 🌿😂",
    "bu kalp bukdar hayıra dayanamaz",
    "cok üzulürum...",
    "gercekten cok cokk üzulurum...",
    "Aman tamam tamam, teslim oluyorum affet benıı",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < 6) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 2}px`;
    } else {
        // 5. basıştan sonra duruyor, istersen başka işlem yapabilirsin
        noButton.disabled = true; // Butonu pasif yapabilir
    }
}
function handleYesClick() {
    // Başlıkları değiştir
    document.getElementById('mainTitle').textContent = "Beni affedeceğini biliyordum!";
    document.getElementById('subtitle').textContent = "";

    // Sticker göster/gizle işlemi
    const firstSticker = document.querySelector('.gif_container img:first-child');
    const secondSticker = document.getElementById('secondSticker');

    firstSticker.style.display = 'none';
    secondSticker.style.display = 'block';
    document.querySelector('.yes-button').style.display = 'none';
    document.querySelector('.no-button').style.display = 'none';
  if (!document.querySelector('.small_subtitle')) {
        let smallSubtitle = document.createElement('h3');
        smallSubtitle.textContent = "Seni çok seviyorum 💙";
        smallSubtitle.classList.add('small_subtitle');
        document.querySelector('.container').appendChild(smallSubtitle);
    }
}




