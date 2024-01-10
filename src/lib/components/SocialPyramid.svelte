<script lang="ts">
  import SocialButton from '$lib/components/SocialButton.svelte'
  import gsap from 'gsap'
  import { onMount } from 'svelte'
  onMount(() => {
    gsap.from('.social', {
      y: -1000,
      ease: 'sine.out',
      duration: 0.5,
      force3D: true,
      stagger: {
        each: 0.1,
        from: 'center',
        grid: 'auto',
        ease: 'power2.inOut',
      },
    })
  })
</script>

<main
  class="flex h-screen w-screen flex-col items-center justify-center text-white"
>
  <div class="m-auto flex gap-5">
    <SocialButton
      name="Reach out"
      class="social mt-3 -rotate-6"
      icon="fa-solid fa-paper-plane"
    />
    <SocialButton
      class=" social mt-1 -rotate-3"
      icon="fa-solid fa-brands fa-instagram"
      name="Instagram"
    />
    <SocialButton
      class="social"
      icon="fa-solid fa-brands fa-facebook"
      name="Facebook"
    />
    <SocialButton
      class=" social mt-1 rotate-3"
      icon="fa-solid fa-brands fa-linkedin"
      name="LinkedIn"
    />
    <SocialButton
      class=" social mt-3 rotate-6"
      icon="fa-solid fa-envelope"
      name="Email"
    />
  </div>
</main>
