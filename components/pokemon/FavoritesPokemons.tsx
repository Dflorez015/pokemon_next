import { Card, Grid } from "@nextui-org/react"
import { PokemonFavoritesProps } from "../../ts"
import { useRouter } from "next/router"

export const FavoritesPokemons: PokemonFavoritesProps = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {pokemons.map((pokeId) => (
                <FavoritePokemonCard pokeId={pokeId} key={pokeId} />
            ))
            }
        </Grid.Container >
    )
}

const FavoritePokemonCard = ({ pokeId }: { pokeId: number }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokeId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokeId}>
            <Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteClicked}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId + ".svg"}`}
                    width={"100%"}
                    height={140}
                />
            </Card>
        </Grid>
    )
}