<script lang="ts">
import {fade, slide } from "svelte/transition";
import { quintOut } from 'svelte/easing';
</script>

<div transition:fade="{{delay: 0, duration: 300}}">
    <nav class="text-white text-2xl flex justify-center items-center fixed top-0 left-0 right-0 bg-[#222222] h-16 underline">
        <a transition:slide="{{delay: 300, duration: 300, easing: quintOut }}" href="/">
            Roadmap
        </a>
    </nav>
    <slot />
</div>
