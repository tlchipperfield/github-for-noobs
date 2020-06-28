import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/SearchView';
import { elements, renderLoader, clearLoader } from './views/base';
// Global State of the app
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
//

const state = {};


/******
 * SEACH CONTROLLER
 */

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
        renderLoader(elements.searchRes);
        // 4) Search for recipes
        await state.search.getResults();

        // 5) render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
    
}



elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    constrolSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
})

/******
 * RECIPE CONTROLLER
 */
const r = new Recipe('47746');
r.getRecipe();
console.log(r);