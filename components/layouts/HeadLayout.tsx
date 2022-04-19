// imports
import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

type props = FC<{ children: JSX.Element, headTitle?: string }>

export const HeadLayout: props = ({ children, headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ?? "PokeNext"}</title>
                <meta name='author' content='Duvan Andres Florez Ardila' />
                <meta name='description' content='Información sobre el pokémon XXXXX' />
                <meta name='keywords' content='XXXXX. pokémon, pokedex, nextjs, característica' />
            </Head>
            
            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}
