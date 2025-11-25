
<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import OvalButton from '$lib/components/OvalButton.svelte';
</script>

<SiteHeader />

<main class="homepage-main">
	<section class="hero">
		<h1 class="hero-title">Welcome to the Learning Hub</h1>
		<p class="hero-subtitle">A modular, modern SvelteKit site for learning and portfolio projects.</p>
		<div class="hero-actions">
			<OvalButton href="/learning">Go to Learning Hub</OvalButton>
			<OvalButton href="/portfolio">View Portfolio</OvalButton>
			<OvalButton href="/resume">View Resume</OvalButton>
		</div>
	</section>
</main>

<style>
	.homepage-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
		padding: 2rem;
	}
	.hero {
		text-align: center;
		max-width: 600px;
	}
	.hero-title {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	.hero-subtitle {
		font-size: 1.25rem;
		margin-bottom: 2rem;
		color: var(--text-secondary, #666);
	}
	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
