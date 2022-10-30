<svelte:options tag="hi-you" />

<script lang="ts">
  export let name: string;
</script>

<h1>Hi {name}</h1>

<style>
  h1 {
    @apply text-pink-500 text-center text-7xl font-display font-normal;
  }
</style>
