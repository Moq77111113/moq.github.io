<script lang="ts">
  import me from "$lib/assets/me.jpg";
  import hero from "$lib/assets/hero.jpg";
  import { fly } from "svelte/transition";
  import Loading from "$lib/components/Loading.svelte";

  const name = "Quentin Moessner";
  const linkedin = "https://www.linkedin.com/in/quentin-moessner-8a3a5b212/";
  const github = "https://github.com/Moq77111113";

  let preLoad = async () =>
    await Promise.all([
      new Promise((res) => {
        let pictureOfMe = new Image();
        pictureOfMe.onload = () => setTimeout(res, 500);
        pictureOfMe.src = me;
      }),
      new Promise((res) => {
        let pictureOfHero = new Image();
        pictureOfHero.onload = () => setTimeout(res, 500);
        pictureOfHero.src = hero;
      }),
    ]);
</script>

{#await preLoad()}
  <div class="relative h-screen w-screen">
    <div class="absolute bottom-10 right-1/2"><Loading /></div>
  </div>
{:then}
  <main class="flex sm:flex-row flex-col h-screen w-screen" transition:fly>
    <section
      class="sm:w-1/3 h-full w-full p-8 flex flex-col items-center justify-center bg-off text-back border-r-2 border-back shadow-lg"
    >
      <header class="py-12">
        <h1 class="text-4xl text-center font-bold mb-4">{name}</h1>
      </header>
      <article class="flex flex-col justify-center items-center gap-4">
        <img
          src={me}
          alt="Moi :)"
          sizes="min(1280px, 100vw)"
          class="rounded-full w-32 h-32 object-cover pointer-events-none"
        />
        <div class="mt-12 flex flex-row">
          <a
            aria-label="Lien vers mon profil LinkedIn"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="mr-4"><i class="fa-brands fa-2xl fa-linkedin"></i></a
          >

          <a
            aria-label="Lien vers mon profil GitHub"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            class="mr-2"
          >
            <i class="fa-brands fa-2xl fa-github"></i></a
          >
        </div>

        <div class="mt-12">
          <h2 class="text-xl">Portfolio en reconstruction !</h2>
        </div>
      </article>
    </section>

    <div class="sm:w-2/3 hidden sm:block">
      <figure class="w-full h-full">
        <img src={hero} alt="joli non ?" class="w-full h-full" />
      </figure>
    </div>
  </main>
{/await}

<style>
  img {
    @apply pointer-events-none;
  }
</style>
