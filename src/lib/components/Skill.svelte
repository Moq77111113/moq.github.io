<script lang="ts">
  import type { Skill } from '$lib/types/skill'
  import { cn } from '$lib/utils'

  type Props = {
    skill: Skill
  }
  let { skill } = $props<Props>()
</script>

<div class="group items-center pl-3">
  <div class="flex w-full items-center">
    <img
      src={skill.icon}
      alt={skill.name}
      class={cn(
        'pointer-events-none mr-2 h-6 w-6 transition-all duration-200 group-hover:scale-110',
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
