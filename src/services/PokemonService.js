import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi } from './AxiosService'

class PokemonService {

    async getPoke(){
        try{
            const res = await pokeApi.get('pokemon')
            AppState.Pokemon = res.data.results
            AppState.next = res.data.next == undefined ? null : res.data.next
            AppState.prev = res.data.prev == undefined ? null : res.data.prev
        } catch (error){
            logger.log(error)
        }
    }

    async getActivePokemon(url){
        const res = await pokeApi.get(url)
        AppState.activePoke = res.data
        logger.log(res.data)
    }
    async next() {
        try {
            const res = await pokeApi.get(AppState.next)
            AppState.Pokemon = res.data.results
            AppState.next = res.data.next
            AppState.prev = res.data.prev
        } catch (error) {
            logger.log(error)
        }
    }

}

export const pokemonService = new PokemonService()