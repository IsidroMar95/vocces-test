import data from '~/static/data.json'

export const state = () => ({
    pokemons: data,
    filter: {
        query: '',
        types: []
    },
    viewHorizontal: false
})

export const mutations = {
    setQuery(state, query) {
        state.filter.query = query;
    },
    setType(state, types) {
        state.filter.types = types;
    },
    setViewHorizontal(state, viewHorizontal) {
        state.viewHorizontal = !state.viewHorizontal;
    }
}

export const getters = {
    filteredPokemons(state) {
        let pokemons = state.pokemons;
        if (state.filter.query.length >= 1) {
            pokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(state.filter.query.toLowerCase()));
        }
        if (state.filter.types.length >= 1) {
            pokemons = pokemons.filter(pokemon => state.filter.types.filter(type => pokemon.type.includes(type)).length > 0);
        }
        return pokemons;
    },

    viewHorizontal: state => state.viewHorizontal
}