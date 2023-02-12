import {readable} from "svelte/store";

export const blocks = readable([
    {status: "Junior", techs: [
            {name: "CSS and HTML"},
            {name: "Typescript"},
            {name: "Any framework"},
    ]},
    {status: "Middle", techs: [
            {name: "React, Vue, SSR framework"},
            {name: "Bundlers"},
            {name: "Basic backend knowledge"},
            {name: "All kinds of tests"},
    ]},
    {status: "Senior", techs: [
            {name: "Nuxt, Next, Astro, SvelteKit"},
            {name: "Docker"},
            {name: "perspective techs like graphql, grpc"},
            {name: "Backend knowledge"},
            {name: "Algorithms"},
    ]},
])