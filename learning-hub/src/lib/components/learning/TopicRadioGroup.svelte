<script lang="ts">
  export let topics: { id: string; label: string }[];
  export let selected: string;
  export let onChange: (id: string) => void;
</script>

<div class="radio-inputs">
  {#each topics as topic}
    <label class="radio">
      <input type="radio" name="topic-radio" bind:group={selected} value={topic.id} on:change={() => onChange(topic.id)} />
      <span class="name">{topic.label}</span>
    </label>
  {/each}
</div>

<style>
.radio-inputs {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--sidebar-bg, #EEE);
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  margin: 1rem 1rem 0rem 1rem;
  width: auto;
  font-size: 14px;
  border: 2px solid var(--border-color);
  gap: 0.5rem;
}
.radio {
  flex: 1 1 auto;
  text-align: center;
}
.radio input {
  display: none;
}
.radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 0.75rem;
  color: var(--text-color, rgba(51, 65, 85, 1));
  font-family: "Truculenta", sans-serif;
  font-size: 1.1rem;
  transition: all .15s ease-in-out;
}
.radio input:checked + .name {
  background-color: var(--secondary-color-light, #fff);
  color: var(--secondary-color, #4f8cff);
  font-weight: 600;
}
@media (max-width: 768px) {
  .radio-inputs {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.7rem;
  }
  .radio .name {
    width: 100%;
    margin: 0.1rem 0;
  }
}
</style>
