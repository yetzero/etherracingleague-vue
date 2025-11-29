<template>
  <div>
    <section class="main main--courses cc-sct cc-ovrl">
      <div class="main__container cc-cntr">
        <h1 class="heading-c7d6b8d page-heading">Courses</h1>

        <div class="div-ccc70c5">
          <p class="paragraph-c502f2e">On this edition of the Galactic Ether Race Tournament, there are 10 host planets, one for each race, starting on the advanced, wealthy Kaaru, going to the grand finale on the volcanic Veltora.</p>
        </div>

        <div class="querytemplate-c4a76ab">
          <div v-for="course in courses" :key="course.slug" class="cc-query-item">
            <router-link
              class="planet__card speedy hover-effect cc-ovrl"
              :style="{ '--background-image': `url(${getCourseImage(course.image)})` }"
              :to="`/course/${course.slug}`"
            >
              <h2 class="heading-c2bced4">{{ course.name }}</h2>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { courses } from '@/data/courses.js'

const courseImages = import.meta.glob('@/assets/images/courses/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })

const getCourseImage = (filename) => {
  // Check main images folder first (original site uses these)
  const mainPath = `/src/assets/images/${filename}`
  if (mainImages[mainPath]?.default) return mainImages[mainPath].default

  // Then check courses folder
  const coursePath = `/src/assets/images/courses/${filename}`
  if (courseImages[coursePath]?.default) return courseImages[coursePath].default

  return ''
}
</script>
