<script>
  import { notesApp } from './stores/app'

  async function enable() {
    notesApp.set({ ...$notesApp, enabled: true });
  }

  async function disable() {
    notesApp.set({ ...$notesApp, enabled: false });
  }  

</script>

<main>
  <button on:click={enable} class={$notesApp.enabled && 'active'}>Enable this feature</button>
  <button on:click={disable} class={!$notesApp.enabled && 'active'}>Disable this feature</button>
</main>

<style>
.active {
  background: greenyellow;
}
</style>