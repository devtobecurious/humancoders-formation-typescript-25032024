import { State } from "../enemy";

export type SurnameJedi = 'Anakin' | 'Luke' | 'Leia';

export type TypeOrUndefined<T> = T | undefined;
export type StateOrUdefined = TypeOrUndefined<State>;

export type TableDeQuelqueChose<T> = T[];

export type TypeDeMalade<T extends State> = T | T[] | string; // contrainte du T