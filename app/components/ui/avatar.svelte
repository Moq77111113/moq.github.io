<svelte:options tag="ui-avatar" />

<script lang="ts">
  export let src: string;
  export let name: string;
</script>

<div class="wrap">
  <img
    {src}
    alt={name}
    referrerpolicy="no-referrer"
    on:error={() => (src = "/img/ui/avatar.svg")}
  />
</div>

<style lang="scss">
  img {
    @apply h-64 pointer-events-none max-w-full rounded-full;
  }
  .wrap {
    @apply relative top-1 overflow-clip;
  }
</style>
