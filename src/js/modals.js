function showMap() {
    let mapBtn = document.querySelector('.map-wrapper');
    let map = document.querySelector('.modal-map');
    let mapLayer = document.querySelector('.modal-layer');
    if (mapBtn) {
        mapBtn.addEventListener('click', function () {
            map.classList.add('show-map');
            mapLayer.classList.add('show-map');
            document.body.style.overflow = "hidden";
        });
        mapLayer.addEventListener('click', function () {
            map.classList.remove('show-map');
            mapLayer.classList.remove('show-map');
            document.body.style.overflow = "auto";
        });
    }
}
showMap();

function showSearch() {
    let searchBtn = document.querySelector('.open-search');
    let searchInput = document.querySelector('.search-wrapper input');
    let searchLayer = document.querySelector('.search-layer');
    let startSearch = document.querySelector('.start-search');
    let closeSearch = document.querySelector('.search-close-btn');
    searchBtn.addEventListener('click', function () {
        searchInput.classList.add('d-block');
        searchLayer.classList.add('show-search');
        startSearch.classList.add('show-search');
        closeSearch.classList.add('show-search');
    });
    closeSearch.addEventListener('click', function () {
        searchInput.classList.remove('d-block');
        searchLayer.classList.remove('show-search');
        startSearch.classList.remove('show-search');
        closeSearch.classList.remove('show-search');
    });

}
showSearch();
