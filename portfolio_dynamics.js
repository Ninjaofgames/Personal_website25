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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize text animation
    writeDescription();

    // Burger menu functionality
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    if (burger && navLinks) {
        // Toggle menu when burger is clicked
        burger.addEventListener("click", function(e) {
            e.stopPropagation();
            navLinks.classList.toggle("active");
            burger.classList.toggle("active");
        });

        // Close menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll("a");
        menuLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
                burger.classList.remove("active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function(e) {
            if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove("active");
                burger.classList.remove("active");
            }
        });
    }
});