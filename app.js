const accordionExample = document.getElementById('accordionExample');
const xhr = new XMLHttpRequest();
xhr.open('GET',
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f84b7211b5124a5297ff63bbea2c64c8', true);
xhr.onload = () => {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let newsHtml = "";
        let articles = json.articles;
        articles.forEach((element, index) => {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                <b>Breaking News ${index + 1}:</b> ${element["title"]}
                            </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">${element["content"]}. <a href="${element[url]}" target="_blank">Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        accordionExample.innerHTML = newsHtml;
        console.log(json);
    } else {

    }
}
xhr.send();