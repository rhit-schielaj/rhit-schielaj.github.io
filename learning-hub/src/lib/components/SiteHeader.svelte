<script lang="ts">
// Reusable header for the site
import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
</script>

<header class="site-header">
  <h1>Alex's Website</h1>
  <nav class="header-nav">
    <a href="/" class="ovalButton">Learning Hub</a>
    <a href="/portfolio" class="ovalButton">Portfolio</a>
    <DarkModeToggle size="1.5em" />
  </nav>
</header>

<style>
.site-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  box-shadow: var(--header-shadow);
  border-radius: var(--border-radius);
  margin: 2rem 2rem 2.5rem 2rem;
  padding: 1.5rem 2.5rem;
  transition: background var(--transition), box-shadow var(--transition);
}
.header-nav {
  display: flex;
  align-items: center;
  gap: 1em;
}
@media (max-width: 900px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    margin: 1rem 0.5rem 1.5rem 0.5rem;
  }
}
@media (max-width: 600px) {
  .site-header {
    padding: 0.5rem 0.5rem;
    margin: 0.5rem 0.2rem 1rem 0.2rem;
  }
}
</style>
