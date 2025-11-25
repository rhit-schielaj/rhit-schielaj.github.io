<script lang="ts">
  export let title: string;
  export let onToggle: () => void;
</script>


<div class="sidebar-header">
  <a href="/" class="sidebar-title-link"><h2>{title}</h2></a>
  <button class="toggle-btn" on:click={onToggle} title="Collapse sidebar" aria-label="Collapse sidebar">&#x25C0;</button>
</div>

<style>
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0.5rem 1rem;
}
.toggle-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-color);
}

.sidebar-title-link {
  text-decoration: none;
  color: inherit;
}
.sidebar-title-link h2 {
  color: var(--text-color);
  margin: 0;
}
</style>
