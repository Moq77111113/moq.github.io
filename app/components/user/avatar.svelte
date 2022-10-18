<svelte:options tag="ui-avatar" />

<script lang="ts">
  import type { User } from "../../types/user";

  export let src: string;
  export let name: string;
  export let email: string;
</script>

<a class="wrap" href={`mailto:${email}`}>
  <img
    {src}
    alt="avatar"
    referrerpolicy="no-referrer"
    style="max-width: 100%; border-radius: 9999px;"
    on:error={() => (src = "/img/ui/avatar.svg")}
  />
  <span class="label">{name}</span>
</a>

<style lang="scss">
  img {
    @apply w-32 h-32;
  }
  .wrap {
    @apply relative top-1 overflow-clip;
  }

  .label {
    @apply relative left-1/2 -translate-x-1/2 font-display text-center block mx-auto px-2 text-lg rounded-sm shadow-lg cursor-pointer;
  }

  a {
    @apply text-white no-underline;
  }
</style>
