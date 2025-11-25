<script lang="ts">
  export let courses: { name: string; expanded?: boolean; lessons?: string[] }[];
  let expandedIndex: number | null = null;
  function toggleExpand(idx: number) {
    expandedIndex = expandedIndex === idx ? null : idx;
  }
</script>

<div class="topic-courses">
  {#each courses as course, idx}
    <div class="course-item">
      <div class="course-header" on:click={() => toggleExpand(idx)}>
        <span>{course.name}</span>
        {#if course.lessons}
          <span class="arrow" class:rotated={expandedIndex === idx}>▼</span>
        {/if}
        </div>
        {#if course.lessons && expandedIndex === idx}
          <div class="lesson-list expanded">
            {#each course.lessons as lesson}
              <div class="lesson-item">{lesson}</div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <style>
  /* keep only dropdown-specific and interaction styles here; base layout moved to theme.css */
  .course-item:hover {
    border-color: var(--secondary-color);
    background: var(--hover-bg);
    box-shadow: 0 3px 10px rgba(79, 140, 255, 0.15);
  }
  .course-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arrow {
    margin-left: 0.5rem;
    transition: transform 0.2s;
  }
  .arrow.rotated {
    transform: rotate(180deg);
  }
  .lesson-list {
    max-height: 1000px;
    overflow: hidden;
    transition: max-height 0.3s;
    background: var(--main-color);
  }
  .lesson-item {
    padding: 0.6rem 1.5rem 0.6rem 2.5rem;
    cursor: pointer;
    color: var(--text-color);
    font-size: 0.95rem;
    transition: background var(--transition), padding-left 0.2s;
    border-left: 3px solid transparent;
  }
  .lesson-item:hover {
    background: var(--hover-bg);
    padding-left: 2.7rem;
    border-left-color: var(--secondary-color);
    font-weight: 500;
  }
  </style>
