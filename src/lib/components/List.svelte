<script lang="ts">
  import type { Skill } from '$lib/types/skill'
  import { tw } from '$lib/utils/tailwind'
  import { fly, slide } from 'svelte/transition'
  type Props = {
    skills: Skill[]
  }
  let { skills } = $props<Props>()

  let shownSkills = $state(skills.slice(0, 5))

  let showAllSkills = $derived(shownSkills.length === skills.length)
  const toggleSkills = () => {
    shownSkills = showAllSkills ? skills.slice(0, 5) : skills
  }
</script>

<article>
  <div
    class="header mb-4 flex items-center rounded border-b border-white/10 p-5"
  >
    <div class="w-8">
      <span class="text-light-gray text-sm">#</span>
    </div>

    <div class="flex-1">
      <span class="text-light-gray text-xs uppercase">Name</span>
    </div>
  </div>

  {#each shownSkills as skill, index}
    <div
      in:slide={{ delay: index * 50 }}
      out:slide={{ delay: index * 50 }}
      class="row group flex items-center rounded px-1 py-2 hover:bg-white/5"
    >
      <div class="number-column flex w-8 items-center justify-center">
        <span class="text-gray-300">{index + 1}</span>
      </div>

      <div class="flex-1 items-center pl-3">
        <div class="group flex">
          <img
            src={skill.icon}
            alt={skill.name}
            class={tw('mr-2 h-6 w-6 transition-all duration-200')}
          />
          <h4
            class={tw(
              'line-clamp-1 font-semibold',
              skill.preferred &&
                'bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent'
            )}
          >
            {skill.name}
          </h4>
        </div>
      </div>
    </div>
  {/each}

  <button class="mt-6 text-sm text-gray-300" on:click={toggleSkills}>
    {showAllSkills ? 'See less' : 'See more'}
  </button>
</article>
