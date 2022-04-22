import React, { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { HeadLayout } from '../../components/layouts'
import { IPokemonInfo, PokemonInfoTypeProps } from '../../ts'
import { rest } from '../../api'
import { Card, Grid, Row, Text, Col, Container, Button, useTheme, Table } from '@nextui-org/react'
import Image from 'next/image'
import { arrImagesVersion, arrOtherSprites, isFavorite, onToggleFavorite } from '../../util/functions'
import { filterHabilities } from '../../util/functions/filters'
import { selectTypeHandle } from '../../ts/elements.types'
import { column_moves, moves_options } from '../../constant'

const PokemonPage: PokemonInfoTypeProps = ({ pokemon }) => {
    // hooks
    const [exist, setExist] = useState<boolean | undefined>()
    const [moves, setMoves] = useState(pokemon.moves)
    const { theme } = useTheme()
    useEffect(() => {
        setExist(isFavorite(pokemon.id))
    })

    // functions
    const handleSelect: selectTypeHandle = ({ target }) => {
        const { value } = target
        setMoves(filterHabilities(pokemon.moves, value))
    }

    return (
        <HeadLayout headTitle={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={8}>
                    <Card >
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{"#" + pokemon.id + " " + pokemon.name}</Text>
                            <Button
                                color="gradient"
                                onClick={() => setExist(onToggleFavorite(pokemon.id))}
                                ghost={!exist}>
                                {exist ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body >
                            <Text h3>Sprites por generación:</Text>
                            <Row >
                                {arrImagesVersion(pokemon.sprites.versions).map((img, index) => (
                                    <Col key={index}>
                                        <Text h6>Generación {index + 1}</Text>
                                        <Image
                                            src={img || ""}
                                            height={100}
                                            width={100}
                                        />
                                    </Col>
                                ))}
                            </Row>
                            <Col>
                                <Text h3>Habilidades:</Text>
                                <select
                                    style={{
                                        backgroundColor: theme?.colors.gray800.value,
                                        border: 'none',
                                        margin: '1rem 0',
                                        padding: '.5rem',
                                        border: 'solid 1px white',
                                        borderRadius: '12px'
                                    }}
                                    onChange={handleSelect}
                                >
                                    {moves_options.map(({ label, value }, index) => (
                                        <option key={index} value={value}>
                                            {label}
                                        </option>
                                    ))}

                                </select>

                                <Table
                                    bordered
                                    shadow
                                >
                                    <Table.Header columns={column_moves}>
                                        {({ id, label }) => (
                                            <Table.Column key={id}>{label}</Table.Column>
                                        )}
                                    </Table.Header>
                                    <Table.Body>
                                        {moves.map((move, index) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{
                                                    <Text transform='capitalize' >
                                                        {move.version_group_details[0].level_learned_at}
                                                    </Text>
                                                }</Table.Cell>
                                                <Table.Cell>{
                                                    <Text transform='capitalize'>
                                                        {move.move.name}
                                                    </Text>
                                                }</Table.Cell>

                                            </Table.Row>
                                        ))}

                                    </Table.Body>

                                </Table>


                            </Col>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={4} css={{ height: 'fit-content' }}>
                    <Card hoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default ?? pokemon.sprites.front_default}
                                width="100%"
                                height={200}
                            />
                            <Text h3>Tipo:</Text>
                            {pokemon.types.map(({ slot, type }) => (
                                <Text key={slot} h4>{type.name}</Text>
                            ))}
                            <Text h3> Sprites:</Text>
                            <Container justify='center' display='flex'>
                                {arrOtherSprites(pokemon.sprites).map((url, index) => (
                                    <Image key={index} src={url || ""}
                                        height={70}
                                        width={70}
                                    />
                                ))}
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </HeadLayout>
    )
}

export default PokemonPage

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const arrId = [...Array(151)].map((_, index) => (`${index + 1}`))

    return {
        paths: arrId.map((id) => ({
            params: {
                id
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string }
    const { data } = await rest.get<IPokemonInfo>(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data
        }
    }
}