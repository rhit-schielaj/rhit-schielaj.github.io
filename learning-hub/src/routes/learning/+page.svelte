<script lang="ts">
  import Sidebar from '$lib/components/learning/Sidebar.svelte';
  import HomeHeader from '$lib/components/learning/HomeHeader.svelte';
  import CurriculumPathway from '$lib/components/learning/CurriculumPathway.svelte';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
  import { onMount } from 'svelte';

  let sidebarCollapsed = false;
  let selectedTopic = 'math';

  const topics = [
    { id: 'math', label: 'Math' },
    { id: 'cs', label: 'CS' },
    { id: 'ds', label: 'Data' }
  ];

  // For now, use flat course names, but structure allows for lessons/expansion in the future
  const courses = {
    math: [
      { name: 'Math 1 (Kindergarten)' },
      { name: 'Math 2 (2nd/3rd)' },
      { name: 'Math 3 (4th/5th)' },
      { name: 'Math 4 (6th/7th)' },
      { name: 'Pre-Algebra' },
      { name: 'Algebra 1' },
      { name: 'Geometry' },
      { name: 'Algebra 2' },
      { name: 'Pre-Calculus' },
      { name: 'Calculus 1' },
      { name: 'Calculus 2' },
      { name: 'Calculus 3' },
      { name: 'Linear Algebra' },
      { name: 'Differential Equations' },
      { name: 'Discrete Math' },
      { name: 'Proofs' },
      { name: 'Combinatorics' },
      { name: 'Probability' },
      { name: 'Statistics' },
      { name: 'Operations Research' }
    ],
    cs: [
      { name: 'Intro to Programming' },
      { name: 'Digital Systems' },
      { name: 'Computer Architecture' },
      { name: 'Programming Basics' },
      { name: 'Object Oriented Programming' },
      { name: 'Web Design' },
      { name: 'Data Structures' },
      { name: 'Intro to Algorithms' },
      { name: 'Software Design' },
      { name: 'Computer Networks' },
      { name: 'Theory of Computation' },
      { name: 'Design & Analysis of Algorithms' },
      { name: 'Databases' },
      { name: 'Operating Systems' },
      { name: 'Intro to Linux' },
      { name: 'Basics of Cybersecurity' },
      { name: 'Design of Scalable & Robust Systems' },
      { name: 'Programming Languages & Compilers' },
      { name: 'Malware Analysis & Reverse Engineering' }
    ],
    ds: [
      { name: 'Foundations of Analytical Thinking & Data Wrangling' },
      { name: 'Statistical Data Science' },
      { name: 'Introduction to Machine Learning' },
      { name: 'Advanced Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Advanced Deep Learning' },
      { name: 'Natural Language Processing' },
      { name: 'Applied AI Engineering' },
      { name: 'Data Mining' },
      { name: 'Advanced Data Science' },
      { name: 'Generative AI' },
      { name: 'Reinforcement Learning' },
      { name: 'High-performance Computing' }
    ]
  };

  function handleSidebarCollapse() {
    sidebarCollapsed = true;
  }
  function handleSidebarExpand() {
    sidebarCollapsed = false;
  }
  function handleTopicChange(id: string) {
    selectedTopic = id;
  }

  // Curriculum pathway data (modularized)
  const curriculumColumns = [
    {
      title: 'Mathematics Courses',
      courses: [
        { level: 'Elementary', name: 'Arithmetic', subcurricula: 'Foundation for all math' },
        { level: 'Middle School', name: 'Pre-Algebra', prerequisites: 'Arithmetic' },
        { level: 'High School', name: 'Algebra I', prerequisites: 'Pre-Algebra' },
        { level: 'High School', name: 'Geometry', prerequisites: 'Algebra I' },
        { level: 'High School', name: 'Algebra II', prerequisites: 'Geometry' },
        { level: 'High School', name: 'Pre-Calculus', prerequisites: 'Algebra II' },
        { level: 'College', name: 'Calculus I', prerequisites: 'Pre-Calculus' },
        { level: 'College', name: 'Calculus II', prerequisites: 'Calculus I' },
        { level: 'College', name: 'Linear Algebra', prerequisites: 'Calculus I' },
        { level: 'College', name: 'Calculus III', prerequisites: 'Calculus II' },
        { level: 'Advanced', name: 'Differential Equations', prerequisites: 'Calculus III' },
        { level: 'Advanced', name: 'Discrete Mathematics', prerequisites: 'Calculus II' },
        { level: 'Advanced', name: 'Proofs', prerequisites: 'Calculus II' },
        { level: 'Advanced', name: 'Combinatorics', prerequisites: 'Calculus II' },
        { level: 'Advanced', name: 'Probability', prerequisites: 'Calculus III' },
        { level: 'Advanced', name: 'Statistics', prerequisites: 'Calculus III' },
        { level: 'Advanced', name: 'Operations Research', prerequisites: 'Calculus III, Linear Algebra, Probability' }
      ]
    },
    {
      title: 'Computer Science Courses',
      courses: [
        { level: 'Beginner', name: 'Intro to Programming', subcurricula: 'Python basics' },
        { level: 'Intermediate', name: 'Data Structures', prerequisites: 'Intro to Algorithms, Object Oriented Programming' },
        { level: 'Intermediate', name: 'Object Oriented Programming', prerequisites: 'Intro to Programming, Programming Basics' },
        { level: 'Intermediate', name: 'Web Design', prerequisites: 'Object Oriented Programming' },
        { level: 'Intermediate', name: 'Programming Basics', prerequisites: 'Computer Architecture' },
        { level: 'Intermediate', name: 'Computer Architecture', prerequisites: 'Programming Basics' },
        { level: 'Beginner', name: 'Digital Systems' },
        { level: 'Advanced', name: 'Intro to Algorithms' },
        { level: 'Advanced', name: 'Software Design', prerequisites: 'Object Oriented' },
        { level: 'Advanced', name: 'Computer Networks', prerequisites: 'Software Design' },
        { level: 'Advanced', name: 'Theory of Computation', prerequisites: 'Intro to Algorithms' },
        { level: 'Advanced', name: 'Design & Analysis of Algorithms', prerequisites: 'Intro to Algorithms' },
        { level: 'Advanced', name: 'Databases', prerequisites: 'Software Design' },
        { level: 'Advanced', name: 'Operating Systems (earlier)', prerequisites: 'Software Design' },
        { level: 'Advanced', name: 'Intro to CLI/Linux', prerequisites: 'Operating Systems' },
        { level: 'Advanced', name: 'Basics of Cybersecurity', prerequisites: 'Operating Systems' },
        { level: 'Advanced', name: 'Design of Scalable/Robust Systems', prerequisites: 'Software Design' },
        { level: 'Advanced', name: 'PLO? (Programming Language Organization?)', prerequisites: 'Theory of Computation' },
        { level: 'Advanced', name: 'Malware Analysis/Reverse Engineering', prerequisites: 'Basics of Cybersecurity' }
      ]
    },
    {
      title: 'Data Science Courses',
      courses: [
        { level: 'Foundational', name: 'Foundations of Analytical Thinking & Data Wrangling', prerequisites: 'None' },
        { level: 'Foundational', name: 'Statistical Data Science', prerequisites: 'Foundations of Analytical Thinking' },
        { level: 'Intermediate', name: 'Introduction to Machine Learning', prerequisites: 'Statistical Data Science' },
        { level: 'Advanced', name: 'Advanced Machine Learning', prerequisites: 'Introduction to Machine Learning' },
        { level: 'Advanced', name: 'Deep Learning', prerequisites: 'Advanced Machine Learning' },
        { level: 'Advanced', name: 'Advanced Deep Learning', prerequisites: 'Deep Learning' },
        { level: 'Advanced', name: 'NLP (Natural Language Processing)', prerequisites: 'Deep Learning' },
        { level: 'Advanced', name: 'Applied AI Engineering', prerequisites: 'Advanced Deep Learning' },
        { level: 'Advanced', name: 'Data Mining', prerequisites: 'Statistical Data Science' },
        { level: 'Advanced', name: 'Advanced Data Science', prerequisites: 'Data Mining' },
        { level: 'Advanced', name: 'Generative AI', prerequisites: 'Deep Learning' },
        { level: 'Advanced', name: 'Reinforcement Learning', prerequisites: 'Deep Learning' },
        { level: 'Advanced', name: 'High-performance Computing', prerequisites: 'Advanced Data Science' }
      ]
    }
  ];
</script>




<div class="learning-hub-layout">

  <Sidebar
    collapsed={sidebarCollapsed}
    onCollapse={handleSidebarCollapse}
    onExpand={handleSidebarExpand}
    {topics}
    selectedTopic={selectedTopic}
    onTopicChange={handleTopicChange}
    {courses}
  />

  <DarkModeToggle size="2rem" class="learning-darkmode-toggle" />
  <main class="main-content">
    <HomeHeader
      title="Welcome to the Learning Hub"
      subtitle="A self-paced curriculum designed to guide learners from elementary mathematics through advanced computer science and data science concepts."
    />
    <section class="diagram-section">
      <CurriculumPathway columns={curriculumColumns} />
    </section>
  </main>
</div>

<style>
.learning-hub-layout {
  display: flex;
  min-height: 100vh;
}
main.main-content {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem 2rem 2rem 2rem;
  transition: margin-left 0.2s;
  min-width: 0;
  max-width: 100vw;
  box-sizing: border-box;
}
.diagram-section {
  margin-top: 2rem;
}
@media (max-width: 900px) {
  main.main-content {
    margin-left: 0;
    padding: 1.5rem 0.5rem;
  }
}
@media (max-width: 600px) {
  main.main-content {
    padding: 0.5rem;
  }
}

/* Dark mode toggle positioning and styling */
:global(.learning-darkmode-toggle) {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 300;
  background: var(--secondary-color);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition), transform 0.2s;
  cursor: pointer;
  border: none;
  padding: 0;
}
:global(.learning-darkmode-toggle:hover) {
  background: var(--hover-bg);
  color: var(--secondary-color);
  transform: scale(1.05);
}
</style>
