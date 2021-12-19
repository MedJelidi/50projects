const glasses = document.querySelectorAll(".small-g");
let totalLiters = 2;
const totalLitersText = document.querySelector(".big-g > .remained > .sub-title-1 > strong")
const pouredLitersText = document.querySelector(".big-g > .poured > .title > strong")
const poured = document.querySelector('.poured');
const remained = document.querySelector('.remained');
totalLitersText.innerText = totalLiters + 'L';
glasses.forEach(g => {
    g.addEventListener("click", () => {
        g.classList.toggle("drank");
        const drankTotal = document.querySelectorAll(".drank");
        totalLitersText.innerText = 2 - (drankTotal.length * 0.25) + 'L'
        poured.style.display = drankTotal.length > 0 ? 'flex' : 'none';
        poured.style.height = (drankTotal.length * 12.5) + '%';
        remained.style.height = (100 - (drankTotal.length * 12.5)) + '%';
        pouredLitersText.innerText = poured.style.height;
    });
});


