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
}