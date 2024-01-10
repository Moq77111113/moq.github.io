<script lang="ts">
  import Skeleton from './Skeleton.svelte'
  import { cn } from '$lib/utils'
  import type { Company } from '$lib/types/company'
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from './ui/hover-card'

  export let company: Company

  const formatDate = (date: Date) =>
    Intl.DateTimeFormat('fr-Fr', {
      year: 'numeric',
      month: 'short',
    }).format(date)
</script>

<HoverCard>
  <HoverCardTrigger
    href={`/companies/${company.slug}`}
    class={' group relative grid h-full w-full grid-cols-[auto,1fr] gap-x-4 rounded border-medium-gray p-2 transition-[background] duration-300 hover:bg-medium-gray md:flex md:flex-col md:border md:bg-dark-gray'}
  >
    <div class="h-16 w-16 md:h-auto md:w-auto">
      {#if company.images.length > 0}
        <div
          class={cn(
            'relative mb-5 flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded p-2 shadow-md shadow-black ',
            company.bg
          )}
        >
          <img
            src={company.images[0].url}
            alt="logo for {company.name}"
            loading="lazy"
            class={cn(
              'shrink-0 object-contain transition-transform duration-300 group-hover:scale-105'
            )}
          />

          <Skeleton class="absolute inset-0 -z-10" />
        </div>
      {:else}
        <div
          class={cn(
            'mb-5 flex aspect-square w-full items-center justify-center bg-medium-gray transition-[background] duration-300 group-hover:bg-dark-gray'
          )}
        ></div>
      {/if}
    </div>

    <div class="flex flex-col justify-center text-foreground md:mt-2 md:block">
      <h4 class="line-clamp-1 truncate text-base font-semibold">
        <span
          class="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:after:rounded focus-visible:after:ring-2 focus-visible:after:ring-accent focus-visible:after:ring-offset-2 focus-visible:after:ring-offset-inherit"
        >
          {company.name}</span
        >
      </h4>

      <p class="relative line-clamp-1 text-xs text-light-gray">
        {formatDate(company.start)}
        - {company.end ? formatDate(company.end) : 'Now'}
      </p>
      <p class="hidden text-sm text-light-gray md:line-clamp-2">
        {company.description}
      </p>
    </div></HoverCardTrigger
  >
  <HoverCardContent class="flex flex-col rounded-md">
    <h5>{company.name}</h5>
    <p class="relative line-clamp-1 text-xs text-light-gray">{company.job}</p>
    <p class="relative line-clamp-1 text-xs text-light-gray">
      {formatDate(company.start)}
      - {company.end ? formatDate(company.end) : 'Now'}
    </p>
    <p class="text-sm text-light-gray">{company.description}</p>
  </HoverCardContent>
</HoverCard>
