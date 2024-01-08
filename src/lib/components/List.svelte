<script lang="ts">
  import { slide } from 'svelte/transition'
  type T = $$Generic<Record<string, unknown>>

  type Props = {
    title?: string
    items: T[]
    horizontal?: boolean
  }
  let { items, title = '', horizontal = false } = $props<Props>()

  let articleRef = $state<HTMLElement>()
  let showAll = $state(false)
  let shownItems = $derived(showAll ? items : items.slice(0, 5))

  const toggle = () => {
    showAll = !showAll
  }

  // FIXME: This is a hack to scroll to the bottom of the list when it's expanded
  $effect(() => {
    if (showAll) {
      setTimeout(
        () => articleRef?.scrollIntoView({ behavior: 'smooth' }),
        items.length * 50
      )
    }
  })
</script>

<article bind:this={articleRef}>
  <slot name="title">
    <div class="mb-6 mt-2 flex items-center justify-between">
      <h2 class="text-2xl font-semibold">{title}</h2>
    </div>
  </slot>
  <ul
    class="flex list-none"
    class:flex-row={horizontal}
    class:flex-col={!horizontal}
  >
    {#each shownItems as item, index}
      <li transition:slide={{ delay: index * 50 }}>
        <slot name="item" {item} {index} />
      </li>
    {/each}
  </ul>

  <button class="mt-6 text-sm text-gray-300" on:click={toggle}>
    {showAll ? 'See less' : 'See more'}
  </button>
</article>
