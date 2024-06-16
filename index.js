document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const contentDiv = document.getElementById('content');
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    const paragraphs = contentDiv.getElementsByTagName('p');
    let found = false;

    for (let i = 0; i < paragraphs.length; i++) {
        const text = paragraphs[i].innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            const startIndex = text.indexOf(searchTerm);
            const endIndex = startIndex + searchTerm.length;
            const originalText = paragraphs[i].innerText;

            paragraphs[i].innerHTML = originalText.substring(0, startIndex) + 
                                      '<span class="highlight">' + originalText.substring(startIndex, endIndex) + '</span>' + 
                                      originalText.substring(endIndex);
            found = true;
        } else {
            paragraphs[i].innerHTML = paragraphs[i].innerText;
        }
    }

    if (found) {
        resultsDiv.innerHTML = `<p>Results found for "${searchTerm}" are highlighted .</p>`;
    } else {
        resultsDiv.innerHTML = `<p>No results found for "${searchTerm}".</p>`;
    }
});
