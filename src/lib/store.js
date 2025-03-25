import { writable } from "svelte/store";

export const userId = writable();
export const favoriteWords = writable(new Set());