<script lang="ts">
  import Company from '$lib/components/Company.svelte'
  import List from '$lib/components/List.svelte'
  import Selection from '$lib/components/Selection.svelte'
  import Skill from '$lib/components/Skill.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import { companies } from '$lib/data/companies'
  import { skills } from '$lib/data/skills'
</script>

<main class="container">
  <!-- Skills -->
  <section class="grid grid-cols-1 justify-around gap-6 md:grid-cols-2">
    <List
      title={'Skills'}
      items={skills}
      class={['flex-shrink-1']}
      showItems={5}
    >
      <svelte:fragment slot="item" let:item let:index>
        <div
          class="flex grow-0 items-center rounded px-1 py-2 hover:bg-white/5"
        >
          <div class="flex w-8 items-center justify-center">
            <span class="text-gray-300">{index + 1}</span>
          </div>

          <Skill skill={item} />
        </div>
      </svelte:fragment>
    </List>

    <div class="mb-3 flex flex-col items-start gap-2">
      <div class="mt-2 flex items-start justify-between">
        <h2 class="text-2xl font-semibold">Actualité</h2>
      </div>

      <Selection />
    </div>
  </section>

  <!-- Companies -->
  <section class="mt-10">
    <div class="mb-3 flex items-center justify-between">
      <h2 class="text-2xl font-semibold">Companies</h2>
      <Button variant="link" href="/companies">
        View All <span class="sr-only">Companies</span>
      </Button>
    </div>

    <div class="grid-items">
      {#each companies.sort((a, b) => b.start.valueOf() - a.start.valueOf()) as company}
        <Company {company} />
      {/each}
    </div>
  </section>
</main>
