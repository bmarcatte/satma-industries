const translations = {
    fr: {
        title: "Notre site arrive bientôt",
        subtitle: `Satma Industries prépare actuellement une nouvelle expérience digitale.<br><br>
        Nous travaillons à la mise en ligne de notre nouveau site afin de vous présenter
        nos activités, nos expertises et nos solutions industrielles.`
    },
    en: {
        title: "Our website is coming soon",
        subtitle: `Satma Industries is currently preparing a new digital experience.<br><br>
        We are working on launching our new website to present
        our activities, expertise, and industrial solutions.`
    }
};

function setLang(lang){

    const html = document.getElementById("htmlLang");
    const inner = document.querySelector(".inner");

    // fade out
    inner.classList.add("fade");

    setTimeout(() => {

        document.getElementById("title").innerHTML = translations[lang].title;
        document.getElementById("subtitle").innerHTML = translations[lang].subtitle;

        html.lang = lang;

        localStorage.setItem("lang", lang);

        // fade in
        inner.classList.remove("fade");

    }, 250);
}

// AUTO LOAD LANG ON START
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "fr";
    setLang(savedLang);
});
