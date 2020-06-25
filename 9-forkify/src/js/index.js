import Search from './models/Search';
import * as searchView from './views/SearchView';
import { elements } from './views/base';
// Global State of the app
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
//

const state = {};

const constrolSearch = async () => {

    // get the query
    const query = searchView.getInput(); //todo
    console.log(query)
    
    if(query) {
        // 2) new searhc object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        // 4) Search for recipes
        await state.search.getResults();

        // 5) render results on UI
        searchView.renderResults(state.search.result);
    }
    
}



elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    constrolSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();

