<script lang="ts">
  import type { ClassValue } from 'clsx'

  import { slide } from 'svelte/transition'
  import Button from './ui/button/button.svelte'
  import { cn } from '$lib/utils'
  type T = $$Generic<Record<string, unknown>>

  type Props = {
    title?: string
    items: T[]
    class?: ClassValue[]
    showItems?: number
  }
  let { items, title = '', showItems = 6 } = $props<Props>()

  let articleRef = $state<HTMLElement>()
  let showAll = $state(false)
  let shownItems = $derived(showAll ? items : items.slice(0, showItems))

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

<article bind:this={articleRef} class={cn('flex flex-col items-start gap-2')}>
  <slot name="title">
    <div class="mt-2 flex items-center justify-between">
      <h2 class="text-2xl font-semibold">{title}</h2>
    </div>
  </slot>
  <ul class={`grid list-none gap-2`}>
    {#each shownItems as item, index}
      <li transition:slide={{ delay: index * 50 }}>
        <slot name="item" {item} {index} />
      </li>
    {/each}
  </ul>

  <Button variant="link" class="text-sm text-light-gray" on:click={toggle}>
    {showAll ? 'See less' : 'See more'}
  </Button>
</article>
