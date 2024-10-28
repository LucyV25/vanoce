const today = dayjs();
const currentYear = today.year();

let christmas = dayjs(`${currentYear}-12-24`);

if (today.isAfter(christmas)) {
    christmas = dayjs(`${currentYear + 1}-12-24`);
}
const daysUntilChristmas = christmas.diff(today, 'day');
const messageElement = document.getElementById('message');

if (daysUntilChristmas === 0) {
    messageElement.innerHTML = `<p class="yes">ANO! Dnes jsou Vánoce!</p>`;
} else {
    messageElement.innerHTML = `<p class="no">NE, do Vánoc zbývá ${daysUntilChristmas} dní.</p>`;
}
