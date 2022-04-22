import { Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const { theme } = useTheme()
    return (
        <div className={styles.nav__container}
            style={{ backgroundColor: theme?.colors.gray900.value }}
        >
            <div className={styles.nav__title}>
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
                    alt="PokeImagen"
                    width={70}
                    height={70}
                >

                </Image>
                <div className={styles.nav__title}>
                    <NextLink href='/' passHref>
                        <Link css={{ display: 'flex', alignItems: 'center' }}>
                            <Text color={theme?.colors.red400.value} h2>P</Text>
                            <Text color={theme?.colors.white.value} h3>okémon</Text>
                        </Link>
                    </NextLink>
                </div>
            </div>

            <NextLink href='/favorites' passHref>
                <Link>
                    <Text color={theme?.colors.white.value} h3>Favoritos</Text>
                </Link>
            </NextLink>

        </div >
    )
}
