<script lang="ts">
  import List from '$lib/components/List.svelte'
  import { skills } from '$lib/data/skills'
</script>

<section class="flex flex-col md:flex-row">
  <div class="flex flex-col">
    <div class="items-title center mt-2 flex justify-between">
      <h2 class="text-2xl font-semibold">Skills</h2>
    </div>
    <List {skills} />
  </div>
</section>
