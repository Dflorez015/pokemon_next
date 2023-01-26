import { useEffect, useState } from 'react'
import { HeadLayout } from '../../components/layouts'
import { FavoritesPokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { pokemons } from '../../util/functions'

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(pokemons())
    }, [])


    return (
        <HeadLayout headTitle='Pokémons - Favoritos'>
            {Boolean(favoritePokemons.length) ? (
                <FavoritesPokemons pokemons={favoritePokemons} />
            ) : (
                < NoFavorites />
            )}
        </HeadLayout>
    )
}

export default FavoritesPage