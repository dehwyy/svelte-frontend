<script lang="ts" >
import { fade } from 'svelte/transition';
</script>


<div transition:fade="{{delay: 0, duration: 100}}" class="h-screen w-screen flex items-center justify-center">
    <a href="frontend">
        <div class="shadow-[5px_5px_0_0_black] hover:bg-pink-500 transition-all duration-300 cursor-pointer text-center bg-pink-400 p-5 rounded-2xl text-2xl underline ">Frontend roadmap</div>
    </a>
</div>
