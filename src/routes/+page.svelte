<script lang="ts">
  import Company from '$lib/components/Company.svelte'
  import List from '$lib/components/List.svelte'
  import About from '$lib/components/About.svelte'
  import { Play } from 'lucide-svelte'
  import Skill from '$lib/components/Skill.svelte'
  import { Button } from '$lib/components/ui/button'
  import { companies } from '$lib/data/companies'
  import { skills } from '$lib/data/skills'
</script>

<main class="container max-w-screen-lg">
  <!-- Nav -->
  <nav class="my-6 flex w-full flex-row">
    <Button
      size="icon"
      class="flex h-12 w-12 rounded-full bg-green-spotify hover:scale-110 hover:bg-green-spotify/90"
      ><Play color="#000" fill="#000" size={20} /></Button
    >
  </nav>

  <!-- Skills -->
  <section
    class="mt-2 flex flex-col justify-between gap-6 md:mt-0 md:grid-cols-2 md:flex-row"
  >
    <List
      title={'Skills'}
      items={skills}
      class={['order-2 md:order-1 md:min-w-[400px]']}
      showItems={5}
    >
      <div slot="title" class="mt-2 flex flex-col items-start">
        <h2 class="text-2xl font-semibold">Skills</h2>
        <span
          class=" bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-xs lowercase text-transparent"
          ><small class="align-middle">❤</small> stack</span
        >
      </div>
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

    <!-- About -->
    <div class="order-1 flex flex-grow flex-col items-start gap-2 md:order-2">
      <div class="mb-3 mt-2 flex items-start justify-between">
        <h2 class="text-2xl font-semibold">About</h2>
      </div>

      <About />
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
      {#each companies
        .sort((a, b) => b.start.valueOf() - a.start.valueOf())
        .slice(0, 5) as company}
        <Company {company} />
      {/each}
    </div>
  </section>
</main>
