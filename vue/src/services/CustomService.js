import axios from "axios";




export default {
    addCustomRecipe(newRecipe) {
        return axios.post(`/users/add-custom-recipe/`,newRecipe);
    },

    getCustomRecipe(customIds) {
        return axios.get(`/users/list-of-custom-recipes`,customIds);
    }
};