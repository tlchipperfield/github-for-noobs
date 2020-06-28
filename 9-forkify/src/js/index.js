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
    // 1) get the query
    const query = searchView.getInput(); 

    if(query) {
        // 2) new search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            await state.search.getResults();
    
            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search');
            clearLoader();
        }
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
const controlRecipe = async () => {
    // get id from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id) {
        //prepare ui for changes
        
        // create new recipe object
        state.recipe = new Recipe(id);

        
        try {
            // get recipe data
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients)
            state.recipe.parseIngredients();
            // calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            // render recipe
            console.log(state.recipe);
        } catch (err) { 
            alert('Error processing recipe!');
        }
    }
}

//  window.addEventListener('hashchange', controlRecipe);
//  window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));