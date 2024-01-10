<script lang="ts">
  import Company from '$lib/components/Company.svelte'
  import List from '$lib/components/List.svelte'
  import Skill from '$lib/components/Skill.svelte'
  import Button from '$lib/components/ui/button/button.svelte'
  import { companies } from '$lib/data/companies'
  import { skills } from '$lib/data/skills'
</script>

<main class="container">
  <!-- Skills -->
  <section class="flex flex-col md:flex-row">
    <List title={'Skills'} items={skills}>
      <svelte:fragment slot="item" let:item let:index>
        <Skill skill={item} {index} />
      </svelte:fragment>
    </List>
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
