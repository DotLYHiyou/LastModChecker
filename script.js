async function checkLastModified() {
            const url = document.getElementById('urlInput').value;
            const proxy = "https://corsanywhere-dotlyhiyou.onrender.com/"; 
            try {
                const response = await fetch(proxy + url, { method: 'HEAD' });
                const lastModified = response.headers.get('Last-Modified');
                document.getElementById('result').innerText = lastModified 
                    ? `Last Modified: ${lastModified}` 
                    : "No Last-Modified header found.";
            } catch (error) {
                document.getElementById('result').innerText = "Error fetching the URL.";
            }
        }
function how() {
    window.location.href="how.html"
}