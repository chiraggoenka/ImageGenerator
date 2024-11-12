const accessKey= 'Cp5Zy622IOZbZYhKjDJjsyDf9-jupPEX2ClK0PPrxE';
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

 let keyword = "";
 let page = 1;

 async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }//if page = 1 then searchresult is set to none that is new search is put up first

    // console.log(data);
    //display images
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";//for opening in a new page 
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })
    showMoreBtn.style.display = 'block' ;

}
searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();//submit button sends the data to the server end and refreshes the page to avoid the same
    page = 1;
    searchImages();

})

showMoreBtn.addEventListener("click" , () => {
    page++;
    searchImages();
})
