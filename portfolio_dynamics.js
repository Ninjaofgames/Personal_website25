function writeDescription() {
    const element = document.getElementById("dynamicTxt");

    const Txt = [
        "Game developer",
        "Computer engineering student",
        "Full-Stack developer",
        "Content creator",
        "Game designer",
        "IT Enthusiast",
        "Mathematics Enthusiast"
    ];

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

    let wordIndex = 0;

    function animateWord() {
        const word = Txt[wordIndex];
        let display = [...word].map(() => "");
        let position = 0;

        function animateLetter() {
            if (position < word.length) {
                let scrambleCount = 0;

                let scramble = setInterval(() => {
                    display[position] = chars[Math.floor(Math.random() * chars.length)];
                    element.textContent = display.join("");

                    scrambleCount++;

                    if (scrambleCount > 5) {
                        clearInterval(scramble);
                        display[position] = word[position];
                        element.textContent = display.join("");
                        position++;
                        setTimeout(animateLetter, 40);
                    }
                }, 40);
            } else {
                setTimeout(() => deleteWord(word), 1200);
            }
        }

        animateLetter();
    }

    function deleteWord(word) {
        let length = word.length;

        let eraser = setInterval(() => {
            element.textContent = element.textContent.slice(0, -1);
            length--;

            if (length < 0) {
                clearInterval(eraser);
                wordIndex = (wordIndex + 1) % Txt.length;
                setTimeout(animateWord, 200);
            }
        }, 40);
    }

    animateWord();
}

writeDescription();


const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
