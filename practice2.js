window.onload = () => {
    const out = document.querySelector("#output");
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    setInterval(() => {
        const date = new Date();
        const end_date = new Date(2025, 11, 18)
        const ratio = Math.floor((end_date.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        out.innerHTML = `<h1>
        Year: ${date.getFullYear()} <br />
        Today is : ${days[date.getDay()]} <br />
        Day: ${date.getDay()} <br />
        Month: ${date.getMonth()} <br />
        Current time is : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} <br />
        Until I leave us: ${ratio} days
        </h1>`;
    }, 1000)
}