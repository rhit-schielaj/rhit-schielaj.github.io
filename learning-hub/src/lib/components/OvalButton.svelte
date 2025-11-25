<script lang="ts">
// Oval button for reuse
export let href: string = '#';
export let style: string = '';
</script>
<a class="ovalButton" {href} {style}>
  <slot />
</a>

<style>
.ovalButton {
  background: linear-gradient(90deg, var(--secondary-color) 0%, #6faeff 100%);
  border: none;
  color: #fff;
  font-weight: 500;
  padding: 14px 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px 0 rgba(79,140,255,0.08);
  font-size: 1.1em;
  letter-spacing: 0.02em;
  transition: background var(--transition), box-shadow var(--transition), color var(--transition);
}
.ovalButton:hover, .ovalButton:focus {
  background: linear-gradient(90deg, #6faeff 0%, var(--secondary-color) 100%);
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(79,140,255,0.25);
  outline: none;
  transform: translateY(-1px);
}
</style>
