import { Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const { theme } = useTheme()
    return (
        <div className={styles.nav__container}
            style={{ backgroundColor: theme?.colors.gray900.value }}
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
                alt="PokeImagen"
                width={70}
                height={70}
            >

            </Image>
            <div className={styles.nav__title}>
                <Text color={theme?.colors.red400.value} h2>P</Text>
                <Text color={theme?.colors.white.value} h3>okémon</Text>
            </div>
        </div >
    )
}
