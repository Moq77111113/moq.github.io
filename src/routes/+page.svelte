<script lang="ts">
  import Card from '$lib/components/Card.svelte'
  import List from '$lib/components/List.svelte'
  import Skill from '$lib/components/Skill.svelte'
  import { companies } from '$lib/data/companies'
  import { skills } from '$lib/data/skills'
</script>

<section class="flex flex-col">
  <!-- Skills -->
  <div class="flex flex-col md:flex-row">
    <List title={'Skills'} items={skills}>
      <svelte:fragment slot="item" let:item let:index>
        <Skill skill={item} {index} />
      </svelte:fragment>
    </List>
  </div>
</section>
