import { Text, useTheme } from '@nextui-org/react'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const { theme } = useTheme()
    return (
        <div className={styles.nav__container}
            style={{ backgroundColor: theme?.colors.gray900.value }}
        >
            <div className={styles.nav__title}>
                <Text color={theme?.colors.red400.value} h2>P</Text>
                <Text color={theme?.colors.white.value} h3>okémon</Text>
            </div>
        </div>
    )
}
