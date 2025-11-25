<script lang="ts">
  export let courses: string[];
</script>

<div class="topic-courses">
  {#each courses as course}
    <div class="course-item"><div class="course-header"><span>{course}</span></div></div>
  {/each}
</div>

<!-- Styles for base course list moved to src/theme.css to avoid duplication -->
