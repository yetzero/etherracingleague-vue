<template>
  <div>
    <section class="main main--characters cc-sct cc-ovrl">
      <div class="main__container cc-cntr">
        <h1 class="heading-c7d6b8d page-heading">Characters</h1>

        <div class="div-ccc70c5">
          <p class="paragraph-c502f2e">Meet the 12 pilots who'll compete in this edition of the Galactic Ether Race Tournament. Having beaten thousands of other competitors, these racers represent the best of each of the participating planets.</p>
        </div>

        <div class="querytemplate-cfccb93">
          <div v-for="character in characters" :key="character.slug" class="cc-query-item">
            <router-link
              class="character__card speedy hover-effect cc-ovrl"
              :style="{ '--background-image': `url(${getCharacterImage(character.image)})` }"
              :to="`/character/${character.slug}`"
            >
              <h2>{{ character.name }}</h2>
            </router-link>
          </div>
        </div>

        <p class="paragraph-c7f1188">
          Meet the rest of the <router-link to="/article-types/characters">characters</router-link> in the <router-link to="/databank">Databank</router-link>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { characters } from '@/data/characters.js'

const characterImages = import.meta.glob('@/assets/images/characters/*.webp', { eager: true })

const getCharacterImage = (filename) => {
  const path = `/src/assets/images/characters/${filename}`
  return characterImages[path]?.default || ''
}
</script>
