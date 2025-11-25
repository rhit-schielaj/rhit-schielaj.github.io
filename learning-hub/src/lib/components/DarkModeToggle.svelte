<script lang="ts">
// Reusable dark mode toggle for SvelteKit
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export let size: string = '1.5em';
let className: string = '';
export { className as class };

const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('darkmode') : null;
export const dark = writable(saved === 'true' || (saved === null && prefersDark));

onMount(() => {
  const unsub = dark.subscribe((on) => {
    document.body.classList.toggle('darkmode', on);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('darkmode', String(on));
    }
  });
  return unsub;
});
</script>

<button
  aria-label="Toggle dark mode"
  class="darkmode-toggle {className}"
  on:click={() => dark.update((v) => !v)}
  style="font-size: {size};"
>
  {#if $dark}
    ☀️
  {:else}
    🌙
  {/if}
</button>

<style>
.darkmode-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  border-radius: 50%;
  padding: 0.2em 0.5em;
  transition: color var(--transition);
}
.darkmode-toggle:hover, .darkmode-toggle:focus {
  color: var(--secondary-color);
  outline: none;
}
.darkmode-toggle.learning-darkmode-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 101;
  background: var(--secondary-color);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
}
.darkmode-toggle.learning-darkmode-toggle:hover,
.darkmode-toggle.learning-darkmode-toggle:focus {
  background: var(--hover-bg);
  color: var(--secondary-color);
}
</style>
