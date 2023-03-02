import { writable } from "svelte/store";

interface Config{
  blogTitle: string;
}

const config_value: Config = {blogTitle: ""}

export const config = writable(config_value);