import { ISmallPokemon, Sprites, Versions } from "../../ts";

/**
 * Agrega el parámetro id e img en cada objeto del array
 * @param listPokemon Lista de pokemones
 * @returns {ISmallPokemon} Array de pokemones completo
 */
export const addParamsPokemonList = (listPokemon: ISmallPokemon[]) => {
    const imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/XIMGX.svg"
    const listPokemoRefactored = listPokemon.map((data, index) => ({ ...data, id: (index + 1), img: imgURL.replace("XIMGX", "" + (index + 1)) }))
    return listPokemoRefactored
}

/**
 * Retorna los enlaces de las imagenes del pokemon en cada generación
 * @param versions objeto de las versiones de cada pokemon
 * @returns {string[]} - Lista de los enlaces encontrados
 */
export const arrImagesVersion = (versions: Versions | undefined) => {
    let imagesGen: string[] = []
    if (versions) {
        for (const key in versions) {
            for (const key_child in versions[key]) {
                const exist = versions[key][key_child] && versions[key][key_child].front_default
                if (exist) {
                    imagesGen.push(versions[key][key_child].front_default)
                    break;
                }
            }
        }
    }
    return imagesGen
}

export const arrOtherSprites = (sprite: Sprites) => {
    return [
        sprite.front_default,
        sprite.back_default,
        sprite.front_shiny,
        sprite.back_shiny
    ]
}