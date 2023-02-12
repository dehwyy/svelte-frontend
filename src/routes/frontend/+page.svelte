<script lang="ts">
import {get} from "svelte/store"
import {blocks as blocksStore} from "./store"
import Block from "./block.svelte"

const blocks = get(blocksStore)
</script>

<div class="flex w-screen h-screen justify-center items-center gap-x-6">
    {#each blocks as block}
        <Block bind:block />
    {/each}
</div>
