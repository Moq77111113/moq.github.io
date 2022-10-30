<svelte:options tag="skill-bar" />

<script lang="ts">
  export let skill: string;
  export let percent: string;
  export let color: string;
  export let deltime: string;
  let ref: any;
  let observer: IntersectionObserver;
  import { tweened } from "svelte/motion";
  import { expoOut } from "svelte/easing";
  import { onMount } from "svelte";

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progress.set(Number(percent));
          }
        });
      },
      { rootMargin: "100px 0px 100px 0px" }
    );

    observer.observe(ref);

    return () => {
      observer?.disconnect();
    };
  });
  const progress = tweened(30, {
    delay: Number(deltime),
    duration: 2000,
    easing: expoOut,
  });
</script>

{#if !isNaN(Number(percent)) && !isNaN(Number(deltime))}
  <div class="container" bind:this={ref}>
    <span class="skill">{skill}</span>
    <div
      class="skills"
      style="width: {$progress}%; background-color: {color}"
    />
  </div>
{/if}

<style>
  .container {
    @apply relative w-full mb-4 bg-slate-300 rounded-2xl;
  }

  span {
    @apply absolute left-4 top-[15%] font-display text-white text-sm;
  }

  .skills {
    @apply py-4 pl-4;
    border-radius: inherit;
    transition: 0.5s ease-out;
  }
</style>
