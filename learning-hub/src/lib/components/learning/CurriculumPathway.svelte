<script lang="ts">
  export let columns: { title: string; courses: { level: string; name: string; prerequisites?: string; subcurricula?: string }[] }[];
</script>

<div class="curriculum-pathway">
  {#each columns as column}
    <div class="pathway-column">
      <h3>{column.title}</h3>
      {#each column.courses as course}
        <div class="course-card">
          <span class="level-label">{course.level}</span>
          <h4>{course.name}</h4>
          {#if course.subcurricula}
            <div class="subcurricula">{course.subcurricula}</div>
          {/if}
          {#if course.prerequisites}
            <div class="prerequisites">Prerequisites: {course.prerequisites}</div>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
.curriculum-pathway {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  align-items: flex-start;
}
.pathway-column {
  flex: 1 1 0;
  min-width: 260px;
  max-width: 400px;
  margin: 0 0.5rem;
}
.course-card {
  background: var(--card-bg, #fff);
  border-radius: 0.5rem;
  box-shadow: var(--shadow, 0 1px 4px rgba(0,0,0,0.04));
  margin-bottom: 1rem;
  padding: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.course-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(79, 140, 255, 0.25);
  border-color: var(--secondary-color);
}
.level-label {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.35rem 0.8rem;
  border-radius: 0.5rem;
  background: var(--secondary-color);
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.course-card h4 {
  font-size: 1.1rem;
  color: var(--text-color);
  margin: 0.5rem 0;
}
.prerequisites {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.75;
  margin-top: 0.5rem;
  font-style: italic;
}
.subcurricula {
  font-size: 0.9rem;
  color: var(--secondary-color);
  margin-top: 0.3rem;
}
@media (max-width: 1100px) {
  .curriculum-pathway {
    flex-wrap: wrap;
  }
  .pathway-column {
    min-width: 220px;
    max-width: 100%;
  }
}
@media (max-width: 700px) {
  .curriculum-pathway {
    flex-direction: column;
    gap: 1.5rem;
  }
  .pathway-column {
    min-width: 0;
    max-width: 100%;
    margin: 0;
  }
}
</style>
