<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import me from '$lib/assets/me.webp?enhanced'
</script>

<div class="flex flex-col hover:bg-white/5 md:p-2">
  <div class="flex flex-row md:items-center">
    <div class="mr-6">
      <enhanced:img
        src={me}
        alt="It's me !"
        class="h-20 w-20 rounded-full object-cover md:h-32 md:w-32"
      />
    </div>

    <h2 class="whitespace-nowrap text-sm font-semibold md:text-lg">
      Hi, I'm Quentin, Nice to meet you !
    </h2>
  </div>
  <p class="leading-6">
    I'm Full Stack developer who enjoys being hands-on throughout every stage of
    a project. I have a knack for crafting dynamic and original products. Always
    ready to bring ideas to life.
  </p>
  <Button
    href="#"
    variant="outline"
    class="mt-2 self-start rounded-lg bg-foreground text-background hover:bg-foreground/90 hover:text-background"
    >Let's talk together</Button
  >
</div>
