import { Move } from "../../ts";

export const filterHabilities = (moves: Move[], type: string) => {
    return moves.filter(m => m.version_group_details.some(d => d.move_learn_method.name === type))
}