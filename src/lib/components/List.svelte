<script lang="ts">
  import type { ClassValue } from 'clsx'

  import { Button } from '$lib/components/ui/button'
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '$lib/components/ui/collapsible'
  import { slide } from 'svelte/transition'

  import { cn } from '$lib/utils'

  type T = $$Generic<Record<string, unknown>>
  type $$Props = {
    title?: string
    items: T[]
    class?: ClassValue[]
    showItems?: number
  }
  let { items, title, class: clazz, showItems = 5 } = $props<$$Props>()

  let articleRef = $state<HTMLElement>()

  let shownItems = $derived(items.slice(0, showItems))
  let hiddenItems = $derived(items.slice(showItems))

  let open = $state(false)

  // FIXME: This is a hack to scroll to the bottom of the list when it's expanded
  $effect(() => {
    if (open) {
      articleRef?.scrollIntoView({ behavior: 'smooth' })
    }
  })
</script>

<article
  bind:this={articleRef}
  class={cn('flex flex-col items-start gap-2', clazz)}
>
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

  <Collapsible bind:open>
    <CollapsibleContent>
      <ul class={`grid list-none gap-2`}>
        {#each hiddenItems as item, index}
          <li>
            <slot name="item" {item} index={index + shownItems.length} />
          </li>
        {/each}
      </ul>
    </CollapsibleContent>
    <CollapsibleTrigger>
      <slot name="trigger" {open}>
         <!-- FIXME: Strange error in console with Svelte 5, checkout when stable -->
        <Button variant="link" class="text-sm text-light-gray">
          {open ? 'See less' : 'See more'}
        </Button>
      </slot>
    </CollapsibleTrigger>
  </Collapsible>
</article>
