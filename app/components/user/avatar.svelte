<svelte:options tag="ui-avatar" />

<script lang="ts">
  export let src: string;
  export let email: string;
  export let name: string;
</script>

<a class="wrap" href={`mailto:${email}`}>
  <img
    {src}
    alt={name}
    referrerpolicy="no-referrer"
    style="max-width: 100%; border-radius: 9999px;"
    on:error={() => (src = "/img/ui/avatar.svg")}
  />
</a>

<style lang="scss">
  img {
    @apply w-40 h-40;
  }
  .wrap {
    @apply relative top-1 overflow-clip;
  }

  a {
    @apply text-white no-underline;
  }
</style>
