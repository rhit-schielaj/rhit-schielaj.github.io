<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="home-header">
  <h1>{title}</h1>
  <p>{subtitle}</p>
</div>

<style>
.home-header {
  text-align: center;
  margin-bottom: 2rem;
}
.home-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.home-header p {
  color: var(--text-secondary, #666);
  font-size: 1.1rem;
}
</style>
