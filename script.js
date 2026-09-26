/* =========================
   LOADING SCREEN
========================= */

let progress = 0;

const progressBar = document.getElementById("progress");
const loadingText = document.getElementById("loading-text");

const loadingInterval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    loadingText.textContent = progress + "%";

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            document.getElementById("loading-screen")
                .classList.remove("active");

            document.getElementById("welcome-screen")
                .classList.add("active");

        }, 500);

    }

}, 35);


/* =========================
   ENTER BUTTON
========================= */

const backgroundMusic =
    document.getElementById("background-music");

document.getElementById("enter-btn")
    .addEventListener("click", () => {

        document.getElementById("welcome-screen")
            .classList.remove("active");

        document.getElementById("tree-screen")
            .classList.add("active");

        backgroundMusic.play();

    });


/* =========================
   LOVE TREE MEMORIES
========================= */

const memories = [

    {
        title: "- June Bates -",
        message: "I never feel like I'm wasting time with you. We could sit in silence for hours,And it would still feel So full So good and necessary. I'm so thankful for you🤍"
    },

    {
        title: "A memory to keep 💕",
        message: "Sebelum saya kenal sayang en, saya kurang bowlingnya. Lepas dah kenal sayang sekali main bowling dengan sayang, terus suka main bowling sebab ingat sayang💕 Tapi yang poli punya tu memula down sebab x reti dan kita lain lane, tapi tengok sayang duk jenguk saya sekali sayang dapat hadiah jadi happy sebab ada sayang💕"
    },

    {
        title: "- Baron -",
        message: "I may not see you everyday, But I love you every single day. Even though we can't feel each other, I will still choose you as my forever🤍"
    },

    {
        title: "Shhh🤐",
        message: "Sebenarnya saya tatau nak bagi hadiah apa sebab saya ni x de duit.. sekali mcm2 lah buat sementara saya bagi hasil coding bantuan chatgpt dengan ayat sendiri kepada syg fav bbyh sya☹️💕 sowwy bbyhh😭"
    },

    {
        title: "Forever in my heart",
        message: "For all syg effort, sya thenkies sngt2 bersyukur sngt2 dpt syg syaa☹️💕 sowwy my effort doesn't feel like effort to you☹️"
    },

    {
        title: "LUV UUUUU",
        message: "Sya dari x kuat berjalan teros kaki boleh tahan berjalan bila dah kenal sayang hehe😝 "
    },

    {
        title: "For u + ME ONLY ✨",
        message: "1 year olderr n 10x hotterr hehe😝🌟"
    }

];


const hearts = document.querySelectorAll(".heart");

const memoryPopup = document.getElementById("memory-popup");

const popupTitle = document.getElementById("popup-title");

const popupMessage = document.getElementById("popup-message");


hearts.forEach((heart) => {

    heart.addEventListener("click", () => {

        const index = heart.dataset.memory;

        popupTitle.textContent = memories[index].title;

        popupMessage.textContent = memories[index].message;

        memoryPopup.classList.add("show");

    });

});


/* CLOSE TREE POPUP */

document.getElementById("close-popup")
    .addEventListener("click", () => {

        memoryPopup.classList.remove("show");

    });


memoryPopup.addEventListener("click", (event) => {

    if (event.target === memoryPopup) {

        memoryPopup.classList.remove("show");

    }

});


/* =========================
   GO TO MEMORIES
========================= */

document.getElementById("memories-btn")
    .addEventListener("click", () => {

        document.getElementById("tree-screen")
            .classList.remove("active");

        document.getElementById("memories-screen")
            .classList.add("active");

    });


/* =========================
   PHOTO GALLERY
========================= */

const memoryCards =
    document.querySelectorAll(".memory-card");

const photoPopup =
    document.getElementById("photo-popup");

const popupPhoto =
    document.getElementById("popup-photo");


memoryCards.forEach((card) => {

    card.addEventListener("click", () => {

        const image =
            card.getAttribute("data-image");

        popupPhoto.src = image;

        photoPopup.classList.add("show");

    });

});


/* CLOSE PHOTO */

document.getElementById("photo-close")
    .addEventListener("click", () => {

        photoPopup.classList.remove("show");

        popupPhoto.src = "";

    });


/* CLOSE PHOTO BY CLICKING OUTSIDE */

photoPopup.addEventListener("click", (event) => {

    if (event.target === photoPopup) {

        photoPopup.classList.remove("show");

        popupPhoto.src = "";

    }

});

/* =========================
   BACK BUTTONS
========================= */


/* LOVE TREE → WELCOME */

document.getElementById("tree-back-btn")
    .addEventListener("click", () => {

        document.getElementById("tree-screen")
            .classList.remove("active");

        document.getElementById("welcome-screen")
            .classList.add("active");

    });


/* MEMORIES → LOVE TREE */

document.getElementById("memories-back-btn")
    .addEventListener("click", () => {

        document.getElementById("memories-screen")
            .classList.remove("active");

        document.getElementById("tree-screen")
            .classList.add("active");

    });


/* =========================
   MEMORIES → LETTER
========================= */

document.getElementById("letter-btn")
    .addEventListener("click", () => {

        document.getElementById("memories-screen")
            .classList.remove("active");

        document.getElementById("letter-screen")
            .classList.add("active");

    });


/* =========================
   LETTER → MEMORIES
========================= */

document.getElementById("letter-back-btn")
    .addEventListener("click", () => {

        document.getElementById("letter-screen")
            .classList.remove("active");

        document.getElementById("memories-screen")
            .classList.add("active");

    });


/* =========================
   LETTER → GIFT
========================= */

document.getElementById("letter-continue-btn")
    .addEventListener("click", () => {

        document.getElementById("letter-screen")
            .classList.remove("active");

        document.getElementById("gift-screen")
            .classList.add("active");

    });


/* =========================
   GIFT BACK → LETTER
========================= */

document.getElementById("gift-back-btn")
    .addEventListener("click", () => {

        document.getElementById("gift-screen")
            .classList.remove("active");

        document.getElementById("letter-screen")
            .classList.add("active");

    });


/* =========================
   OPEN GIFT
========================= */

const giftBox =
    document.getElementById("gift-box");

const giftHint =
    document.getElementById("gift-hint");

const giftMessage =
    document.getElementById("gift-message");

const finalBtn =
    document.getElementById("final-btn");


giftBox.addEventListener("click", () => {

    giftBox.classList.add("open");

    giftHint.style.opacity = "0";

    setTimeout(() => {

        giftMessage.classList.add("show");

        finalBtn.classList.add("show");

    }, 700);

});


/* =========================
   GIFT → FINAL
========================= */

document.getElementById("final-btn")
    .addEventListener("click", () => {

        document.getElementById("gift-screen")
            .classList.remove("active");

        document.getElementById("final-screen")
            .classList.add("active");

    });


/* =========================
   START AGAIN
========================= */

document.getElementById("restart-btn")
    .addEventListener("click", () => {

        document.getElementById("final-screen")
            .classList.remove("active");

        document.getElementById("welcome-screen")
            .classList.add("active");

    });