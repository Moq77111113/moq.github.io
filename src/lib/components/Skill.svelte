<script lang="ts">
  import type { Skill } from '$lib/types/skill'
  import { cn } from '$lib/utils'

  type Props = {
    skill: Skill
    index?: number
  }
  let { skill, index } = $props<Props>()
</script>

<div class="group flex items-center rounded px-1 py-2 hover:bg-white/5">
  {#if index !== undefined}
    <div class="number-column flex w-8 items-center justify-center">
      <span class="text-gray-300">{index + 1}</span>
    </div>
  {/if}

  <div class="flex-1 items-center pl-3">
    <div class="group flex items-center">
      <img
        src={skill.icon}
        alt={skill.name}
        class={cn(
          'pointer-events-none mr-2 h-6 w-6 transition-all duration-200',
          skill.style
        )}
      />
      <h4
        class={cn(
          'line-clamp-1 text-base font-semibold',
          skill.preferred &&
            'bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent'
        )}
      >
        {skill.name}
      </h4>
    </div>
  </div>
</div>
