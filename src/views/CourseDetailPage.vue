<template>
  <div v-if="course">
    <section
      class="course-intro cc-sct cc-ovrl"
      :style="{ '--background-image': `url(${getCourseImage(course.backgroundImage)})` }"
    >
      <div class="cc-cntr">
        <div class="course-header">
          <h1 class="course__name">{{ course.name }}</h1>
          <div class="course__meta">
            <span class="course__planet">{{ course.planet }}</span>
          </div>
        </div>
      </div>

      <router-link
        v-if="course.prevCourse"
        class="nav-prev cc-btn"
        :to="`/course/${course.prevCourse}`"
        title="Previous Course"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 28">
          <path d="M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
        </svg>
      </router-link>

      <router-link
        v-if="course.nextCourse"
        class="nav-next cc-btn"
        :to="`/course/${course.nextCourse}`"
        title="Next Course"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 28">
          <path d="M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"></path>
        </svg>
      </router-link>
    </section>

    <section class="course-details cc-sct">
      <div class="course-details__container cc-cntr">
        <div class="course__content" v-html="course.content"></div>
      </div>
    </section>
  </div>

  <div v-else class="not-found cc-sct">
    <div class="cc-cntr">
      <h1>Course not found</h1>
      <router-link to="/courses">Back to Courses</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { courseDetails } from '@/data/courseDetails.js'

const route = useRoute()

const course = computed(() => {
  return courseDetails[route.params.slug] || null
})

const courseImages = import.meta.glob('@/assets/images/courses/*.webp', { eager: true })
const mainImages = import.meta.glob('@/assets/images/*.webp', { eager: true })

const getCourseImage = (filename) => {
  // Check courses folder first
  const coursePath = `/src/assets/images/courses/${filename}`
  if (courseImages[coursePath]?.default) return courseImages[coursePath].default

  // Then check main images folder
  const mainPath = `/src/assets/images/${filename}`
  if (mainImages[mainPath]?.default) return mainImages[mainPath].default

  return ''
}
</script>
