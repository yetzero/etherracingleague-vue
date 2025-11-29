<template>
  <div v-if="character">
    <section
      class="racer-intro cc-sct cc-ovrl"
      :style="{ '--background-image': `url(${getImage(character.backgroundImage)})` }"
    >
      <div class="cc-cntr">
        <figure class="racer-composition">
          <h1 class="racer__name">{{ character.name }}</h1>

          <div v-if="character.bikeImage" class="ether-bike-container">
            <img
              class="ether-bike-image cc-img"
              :src="getBikeImage(character.bikeImage)"
              :alt="`${character.etherBike} bike`"
            />
          </div>

          <div class="racer-container">
            <img
              class="racer-image cc-img"
              :src="getCharacterImage(character.image)"
              :alt="character.name"
            />
          </div>
        </figure>
      </div>

      <router-link
        v-if="character.prevCharacter"
        class="nav-prev cc-btn"
        :to="`/character/${character.prevCharacter}`"
        title="Previous Racer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 28">
          <path d="M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
        </svg>
      </router-link>

      <router-link
        v-if="character.nextCharacter"
        class="nav-next cc-btn"
        :to="`/character/${character.nextCharacter}`"
        title="Next Racer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 28">
          <path d="M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
        </svg>
      </router-link>
    </section>

    <section class="racer-details cc-sct">
      <div class="racer-details__container cc-cntr">
        <div class="character__facts">
          <p class="fact"><span class="before">Age: </span>{{ character.age }}</p>
          <p class="fact"><span class="before">Origin: </span>{{ character.origin }}</p>
          <p class="fact"><span class="before">Occupation: </span>{{ character.occupation }}</p>
          <p class="fact"><span class="before">Ether Bike: </span>{{ character.etherBike }}</p>
        </div>

        <div class="character__content" v-html="character.content"></div>
      </div>
    </section>
  </div>

  <div v-else class="not-found cc-sct">
    <div class="cc-cntr">
      <h1>Character not found</h1>
      <router-link to="/characters">Back to Characters</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { characterDetails } from '@/data/characterDetails.js'

const route = useRoute()

const character = computed(() => {
  return characterDetails[route.params.slug] || null
})

const characterImages = import.meta.glob('@/assets/images/characters/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })
const databankImages = import.meta.glob('@/assets/images/databank/*.webp', { eager: true })
const coursesImages = import.meta.glob('@/assets/images/courses/*.webp', { eager: true })

const getCharacterImage = (filename) => {
  const path = `/src/assets/images/characters/${filename}`
  return characterImages[path]?.default || ''
}

const getBikeImage = (filename) => {
  // Check main images folder first
  const mainPath = `/src/assets/images/${filename}`
  if (mainImages[mainPath]?.default) {
    return mainImages[mainPath].default
  }
  // Then check databank folder
  const databankPath = `/src/assets/images/databank/${filename}`
  if (databankImages[databankPath]?.default) {
    return databankImages[databankPath].default
  }
  return ''
}

const getImage = (filename) => {
  // Check main images folder first
  const mainPath = `/src/assets/images/${filename}`
  if (mainImages[mainPath]?.default) {
    return mainImages[mainPath].default
  }
  // Then check databank folder
  const databankPath = `/src/assets/images/databank/${filename}`
  if (databankImages[databankPath]?.default) {
    return databankImages[databankPath].default
  }
  // Then check courses folder
  const coursesPath = `/src/assets/images/courses/${filename}`
  if (coursesImages[coursesPath]?.default) {
    return coursesImages[coursesPath].default
  }
  return ''
}
</script>
