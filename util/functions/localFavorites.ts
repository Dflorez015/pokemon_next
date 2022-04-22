/**
 * Agrega o elimina el pokémon en a lista de favoritos
 * @param {number} id - id del pokémon 
 */
export const onToggleFavorite = (id: number) => {
    let favorites_storage: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    const idExist = favorites_storage.includes(id)
    if (idExist) {
        favorites_storage = favorites_storage.filter(element => element !== id)
    } else {
        favorites_storage.push(id)
    }
    const new_storage = JSON.stringify(favorites_storage)
    localStorage.setItem('favorites', new_storage)
    return isFavorite(id)
}

/**
 * Verifica si existe el pokémon en la losta de favoritos
 * @param {number} id - id del pokémon 
 * @returns {boolean}
 */
export const isFavorite = (id: number) => {
    let favorites_storage: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    const idExist = favorites_storage.includes(id)
    return idExist
}