<script lang="ts">
import {slide } from "svelte/transition";
import { quintOut } from 'svelte/easing';
import BlockItem from "./block-item.svelte";
export let block;

</script>
<div transition:slide="{{delay: 0, duration: 500, easing: quintOut }}" class="bg-[#222222] w-96 p-5 h-[400px] shadow-[5px_5px_0_0_#111111] rounded-2xl">
    <div class="text-2xl text-center underline text-white">{block.status}</div>
    <div class="flex flex-col justify-around h-[80%] divide-solid divide-white divide-y-2">
        {#each block.techs as tech}
            <BlockItem bind:tech />
        {/each}
    </div>
</div>