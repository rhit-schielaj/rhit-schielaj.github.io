
<script lang="ts">
  import SidebarHeader from './SidebarHeader.svelte';
  import TopicRadioGroup from './TopicRadioGroup.svelte';
  import TopicCoursesDropdown from './TopicCoursesDropdown.svelte';
  import FloatingToggle from './FloatingToggle.svelte';
  export let collapsed: boolean;
  export let onCollapse: () => void;
  export let onExpand: () => void;
  export let topics: { id: string; label: string }[];
  export let selectedTopic: string;
  export let onTopicChange: (id: string) => void;
  export let courses: Record<string, { name: string }[]>;
</script>


<nav class="sidebar" class:collapsed={collapsed}>
  <SidebarHeader title="Learning Hub" onToggle={onCollapse} />
  <TopicRadioGroup topics={topics} selected={selectedTopic} onChange={onTopicChange} />
  <div class="sidebar-content">
    <TopicCoursesDropdown courses={courses[selectedTopic]} />
  </div>
</nav>

{#if collapsed}
  <FloatingToggle onClick={onExpand} />
{/if}

<style>

.sidebar {
  width: 260px;
  background: var(--sidebar-bg, #f4f4f4);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  transition: transform 0.2s;
  box-shadow: var(--shadow, 0 1px 4px rgba(0,0,0,0.08));
  overflow-y: auto;
}
.sidebar.collapsed {
  transform: translateX(-100%);
}
.sidebar-content {
  margin-top: 1rem;
}
</style>


