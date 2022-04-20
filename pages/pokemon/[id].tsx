import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { HeadLayout } from '../../components/layouts'
import { IPokemonInfo, PokemonInfoTypeProps } from '../../ts'
import { rest } from '../../api'
import { Card, Grid, Row, Text, Col, Container } from '@nextui-org/react'
import Image from 'next/image'
import { arrImagesVersion, arrOtherSprites } from '../../util/functions'

const PokemonPage: PokemonInfoTypeProps = ({ pokemon }) => {
    return (
        <HeadLayout headTitle={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={8}>
                    <Card >
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{"#" + pokemon.id + " " + pokemon.name}</Text>
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
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={4}>
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