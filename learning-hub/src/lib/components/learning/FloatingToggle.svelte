<script lang="ts">
  export let onClick: () => void;
</script>

<button class="floating-toggle" on:click={onClick} title="Expand sidebar" aria-label="Expand sidebar">☰</button>

<style>
.floating-toggle {
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: var(--secondary-color, #333);
  color: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--shadow, 0 1px 4px rgba(0,0,0,0.08));
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition, 0.2s);
}
</style>
