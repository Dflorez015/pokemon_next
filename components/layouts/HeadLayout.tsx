// imports
import Head from 'next/head'
import { Navbar } from '../ui'
// types
import { HeadLayoutTypeProps } from '../../ts'

export const HeadLayout: HeadLayoutTypeProps = ({ children, headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ?? "PokeNext"}</title>
                <meta name='author' content='Duvan Andres Florez Ardila' />
                <meta name='description' content={headTitle ? "Información sobre el pokémon" + headTitle : "Buscador de pokemones. información de pokemones"} />
                <meta name='keywords' content={`${headTitle ?? ""}. pokémon, pokedex, nextjs, característica`} />
            </Head>

            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}
