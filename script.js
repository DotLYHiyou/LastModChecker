 async function checkLastModified() {
            const url = document.getElementById('urlInput').value;
            const proxy = "https://corsanywhere-dotlyhiyou.onrender.com/"; 
            try {
                const response = await fetch(proxy + url, { method: 'HEAD' });
                const lastModified = response.headers.get('Last-Modified');
                if (lastModified) {
                    const gmtDate = new Date(lastModified);
                    const estDate = convertToEST(gmtDate);
                    document.getElementById('result').innerText = `Last Modified (EST): ${estDate}`;
                } else {
                    document.getElementById('result').innerText = "No Last-Modified header found.";
                }
            } catch (error) {
                document.getElementById('result').innerText = "Error fetching the URL.";
            }
}

function convertToEST(date) {
            // Convert GMT date to EST (GMT-5)
            const estOffset = -5; // EST is UTC-5
            const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // UTC time in ms
            const estTime = new Date(utcTime + estOffset * 3600000); // EST time in ms
            return estTime.toLocaleString('en-US', { timeZone: 'America/New_York' });
}
function how() {
    window.location.href="how.html"
}
