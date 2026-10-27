
const startButton = document.getElementById("startButton");

const introScreen = document.getElementById("introScreen");
const countryScreen = document.getElementById("countryScreen");

const understoodButton =
    document.getElementById("understoodButton");

const languageScreen =
    document.getElementById("languageScreen");

const eraserTransition =
    document.getElementById("eraserTransition");

const finalUnderstoodButton =
    document.getElementById("finalUnderstoodButton");

const answerMessage =
    document.getElementById("answerMessage");

const people =
    document.querySelectorAll(".person");

const languageButtons =
    document.querySelectorAll(".language-button");

const decorativeElements =
    document.querySelectorAll(".code-element");


/* =========================================
   VARIABLES
========================================= */

let womanLanguage = null;
let manLanguage = null;

let selectedPerson = null;

let transitionRunning = false;

let computerTransitionRunning = false;

let binaryTransitionRunning = false;


/* =========================================
   START
========================================= */

startButton.addEventListener("click", () => {

    introScreen.classList.add("hide");

    setTimeout(() => {

        countryScreen.classList.add("show");

    }, 350);

});


/* =========================================
   COUNTRY → LANGUAGE
========================================= */

understoodButton.addEventListener("click", () => {

    if (transitionRunning) return;

    transitionRunning = true;


    countryScreen.style.opacity = "0";

    countryScreen.style.transform =
        "translateY(-25px) scale(.97)";

    countryScreen.style.filter =
        "blur(6px)";


    eraserTransition.classList.add("active");


    setTimeout(() => {

        countryScreen.classList.remove("show");

        countryScreen.style.opacity = "";
        countryScreen.style.transform = "";
        countryScreen.style.filter = "";

        languageScreen.classList.add("show");

    }, 1450);


    setTimeout(() => {

        eraserTransition.classList.remove("active");

        transitionRunning = false;

    }, 1950);

});


/* =========================================
   SELECT PERSON
========================================= */

people.forEach((person) => {

    person.addEventListener("click", () => {

        selectedPerson =
            person.dataset.person;


        people.forEach((item) => {

            item.classList.remove("selected");

        });

        person.classList.add("selected");


        answerMessage.textContent = "";

        answerMessage.classList.remove("correct");

        finalUnderstoodButton.classList.remove("visible");


        restoreSelectedLanguage();

    });

});


/* =========================================
   SELECT LANGUAGE
========================================= */

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (selectedPerson === null) {

            answerMessage.textContent =
                "اول یکی از افراد را انتخاب کن.";

            answerMessage.classList.remove("correct");

            return;
        }


        const language =
            button.dataset.language;


        if (selectedPerson === "woman") {

            womanLanguage = language;

        }


        if (selectedPerson === "man") {

            manLanguage = language;

        }


        languageButtons.forEach((item) => {

            item.classList.remove("selected");

        });


        button.classList.add("selected");


        checkAllAnswers();

    });

});


/* =========================================
   RESTORE LANGUAGE
========================================= */

function restoreSelectedLanguage() {

    languageButtons.forEach((button) => {

        button.classList.remove("selected");

    });


    let savedLanguage = null;


    if (selectedPerson === "woman") {

        savedLanguage = womanLanguage;

    }


    if (selectedPerson === "man") {

        savedLanguage = manLanguage;

    }


    if (savedLanguage) {

        const savedButton =
            document.querySelector(
                `.language-button[data-language="${savedLanguage}"]`
            );


        if (savedButton) {

            savedButton.classList.add("selected");

        }

    }

}


/* =========================================
   CHECK ANSWERS
========================================= */

function checkAllAnswers() {

    const womanCorrect =
        womanLanguage === "french";


    const manCorrect =
        manLanguage === "english";


    if (
        womanLanguage === null ||
        manLanguage === null
    ) {

        finalUnderstoodButton.classList.remove(
            "visible"
        );

        answerMessage.textContent =
            "حالا زبان نفر دیگر را هم انتخاب کن.";

        answerMessage.classList.remove("correct");

        return;

    }


    if (
        womanCorrect &&
        manCorrect
    ) {

        answerMessage.textContent =
            "آفرین! هر دو پاسخ درست هستند ✨";

        answerMessage.classList.add("correct");


        setTimeout(() => {

            finalUnderstoodButton.classList.add(
                "visible"
            );

        }, 200);

        return;

    }


    finalUnderstoodButton.classList.remove(
        "visible"
    );

    answerMessage.textContent =
        "هنوز یک پاسخ اشتباه است؛ دوباره بررسی کن.";

    answerMessage.classList.remove("correct");

}


/* =========================================
   LANGUAGE → COMPUTER
========================================= */

const computerScreen =
    document.getElementById("computerScreen");

const waveTransition =
    document.getElementById("waveTransition");

const curiousButton =
    document.getElementById("curiousButton");


finalUnderstoodButton.addEventListener("click", () => {

    if (computerTransitionRunning) return;

    computerTransitionRunning = true;


    finalUnderstoodButton.style.transform =
        "scale(.92)";


    setTimeout(() => {

        finalUnderstoodButton.style.transform = "";

    }, 150);


    waveTransition.classList.add("active");


    languageScreen.style.transition =
        "opacity .55s ease, transform .55s ease, filter .55s ease";


    languageScreen.style.opacity = "0";

    languageScreen.style.transform =
        "scale(.96)";

    languageScreen.style.filter =
        "blur(6px)";


    setTimeout(() => {

        languageScreen.classList.remove("show");

        languageScreen.style.opacity = "";
        languageScreen.style.transform = "";
        languageScreen.style.filter = "";

        computerScreen.classList.add("show");

    }, 650);


    setTimeout(() => {

        waveTransition.classList.remove("active");

        computerTransitionRunning = false;

    }, 1450);

});


/* =========================================
   COMPUTER → BINARY
========================================= */

const binaryScreen =
    document.getElementById("binaryScreen");

const codeExplosion =
    document.getElementById("codeExplosion");


curiousButton.addEventListener("click", () => {

    if (binaryTransitionRunning) return;

    binaryTransitionRunning = true;


    curiousButton.style.transform =
        "scale(.94)";


    setTimeout(() => {

        curiousButton.style.transform = "";

    }, 150);


    /*
        حروف کدنویسی منفجر می‌شوند
    */

    codeExplosion.classList.add("active");


    /*
        صفحه لپ‌تاپ محو می‌شود
    */

    computerScreen.style.transition =
        "opacity .45s ease, transform .45s ease, filter .45s ease";


    computerScreen.style.opacity = "0";

    computerScreen.style.transform =
        "scale(.97)";

    computerScreen.style.filter =
        "blur(4px)";


    /*
        صفحه باینری ظاهر می‌شود
    */

    setTimeout(() => {

        computerScreen.classList.remove("show");

        computerScreen.style.opacity = "";
        computerScreen.style.transform = "";
        computerScreen.style.filter = "";

        binaryScreen.classList.add("show");

    }, 650);


    setTimeout(() => {

        codeExplosion.classList.remove("active");

        binaryTransitionRunning = false;

    }, 1450);

});


/* =========================================
   BINARY → KATHLEEN BOOTH
========================================= */

const nextBinaryButton =
    document.getElementById("nextBinaryButton");

const kathleenScreen =
    document.getElementById("kathleenScreen");


let kathleenTransitionRunning = false;


nextBinaryButton.addEventListener("click", () => {

    if (kathleenTransitionRunning) return;

    kathleenTransitionRunning = true;


    /*
        فشار دکمه
    */

    nextBinaryButton.style.transform =
        "scale(.94)";


    setTimeout(() => {

        nextBinaryButton.style.transform = "";

    }, 150);


    /*
        صفحه باینری تار و محو می‌شود
    */

    binaryScreen.style.transition =
        "opacity .8s ease, transform .8s ease, filter .8s ease";


    binaryScreen.style.opacity = "0";

    binaryScreen.style.transform =
        "scale(1.04)";

    binaryScreen.style.filter =
        "blur(18px)";


    /*
        باز شدن Blur Portal
    */

    kathleenScreen.classList.add("show");


    /*
        حذف صفحه قبلی
    */

    setTimeout(() => {

        binaryScreen.classList.remove("show");

        binaryScreen.style.opacity = "";
        binaryScreen.style.transform = "";
        binaryScreen.style.filter = "";

    }, 750);


    setTimeout(() => {

        kathleenTransitionRunning = false;

    }, 1600);

});


/* =========================================
   DECORATIVE PARALLAX
========================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX / window.innerWidth) - .5;

        const y =
            (event.clientY / window.innerHeight) - .5;


        decorativeElements.forEach(
            (element, index) => {

                const intensity =
                    4 + (index % 3) * 2;


                element.style.marginLeft =
                    `${x * intensity}px`;


                element.style.marginTop =
                    `${y * intensity}px`;

            }
        );

    }
);
