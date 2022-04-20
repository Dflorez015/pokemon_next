// imports
import React from 'react'
import { Card, Row, Grid, Text } from '@nextui-org/react'
// ts
import { PokemonCardTypeProps } from '../../ts'
import { useRouter } from 'next/router'

export const PokemonCard: PokemonCardTypeProps = ({ id, img, name }) => {

    const router = useRouter()

    const selectPokemon = () => {
        console.log(id);
        router.push(`/pokemon/${id}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card hoverable clickable onClick={selectPokemon}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width="100%"
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid >
    )
}
