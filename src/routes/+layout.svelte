<script lang="ts">
  import '../app.css'
  const title = 'Quentin Moessner',
    imagePath = '$lib/assets/space.jpg',
    type = 'Full stack developer'
  const anecdotes: string[] = [
    'Lines of Code Conquered',
    'Debugging Adventures',
    'Commits on the Git Sea',
    'Bugs Squashed with Style',
    'Coding Zen Achieved',
    'Syntax Errors Dodged',
    'Functionality Unleashed',
    'Merge Conflicts Mastered',
    'Algorithmic Symphony',
    'Codebase Conquests',
  ]

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const getRandomSentence = (sentences: string[]) => {
    const randomIndex = getRandomNumber(0, sentences.length - 1)
    return [getRandomNumber(1000, 15000), sentences[randomIndex]].join(' ')
  }

  const randomSentence = getRandomSentence(anecdotes)
</script>

<header
  class={`flex h-80 flex-col items-start justify-end p-5 sm:px-8
  ${
    imagePath
      ? `bg-[url('$lib/assets/space.jpg')] bg-cover bg-center`
      : 'bg-gradient-to-b from-black/10'
  }`}
>
  <div class="text-white">
    {#if type}
      <p class="mb-2 hidden sm:inline-block">
        <span class="fa-stack fa-sm">
          <i class="fas fa-certificate fa-stack-2x text-blue-500"></i>
          <i class="fas fa-check fa-stack-1x text-white"></i>
        </span>

        <span class="text-xs">{type}</span>
      </p>
    {/if}

    <h1 class="text-4xl font-semibold md:text-4xl lg:text-5xl">
      {title}
    </h1>

    <p class="mt-8 hidden text-sm lowercase sm:inline-block">
      {randomSentence}
    </p>
  </div>
</header>
<main class="relative z-10 bg-gradient-to-b from-back/20 to-back p-8">
  <slot />
</main>
