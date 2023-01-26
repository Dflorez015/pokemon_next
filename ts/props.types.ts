import { NextPage } from "next";
import { FC } from "react";
import { IPokemonInfo, ISmallPokemon } from "./interface/pokeData";

/*------------------------------- props -------------------------------*/
export type HeadLayoutTypeProps = FC<{ children: JSX.Element, headTitle?: string }>
export type HomeTypeProps = { pokemons: ISmallPokemon[] }
export type PokemonCardTypeProps = FC<ISmallPokemon>
export type PokemonInfoTypeProps = NextPage<{ pokemon: IPokemonInfo }>
export type PokemonFavoritesProps = NextPage<{ pokemons: number[]  }>