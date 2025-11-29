<template>
  <section class="section-c11e6c0 cc-sct cc-ovrl">
    <div class="container-cf5e56e cc-cntr">
      <router-link to="/">
        <img
          fetchpriority="high"
          decoding="async"
          class="image-ca2d94d cc-img"
          :src="logoSrc"
          :srcset="logoSrcset"
          sizes="(max-width: 2438px) 100vw, 2438px"
          width="2438"
          height="1284"
          alt="Ether Racing League Logo"
        />
      </router-link>

      <nav id="nav-c1kzsen" class="nav-c8w3m7r cc-nav" is-nav="true">
        <div class="cc-nav-wrapper">
          <div class="cc-nav-header">
            <div class="cc-nav-header-logo">
              <button class="cc-nav-toggle--close" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M25.707 24.293c0.181 0.181 0.293 0.431 0.293 0.708 0 0.552-0.448 1-1 1-0.276 0-0.527-0.112-0.708-0.293v0l-8.293-8.293-8.293 8.293c-0.181 0.181-0.431 0.292-0.707 0.292-0.552 0-1-0.448-1-1 0-0.276 0.112-0.526 0.292-0.707v0l8.293-8.293-8.293-8.293c-0.181-0.181-0.292-0.431-0.292-0.707 0-0.552 0.448-1 1-1 0.276 0 0.526 0.112 0.707 0.292v0l8.293 8.293 8.293-8.293c0.181-0.181 0.431-0.292 0.707-0.292 0.552 0 1 0.448 1 1 0 0.276-0.112 0.526-0.292 0.707v0l-8.293 8.293z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="cc-nav-content">
            <ul class="cc-nav-items">
              <li class="cc-nav-link">
                <router-link class="cc-nav-item" to="/characters">Characters</router-link>
              </li>
              <li class="cc-nav-link">
                <router-link class="cc-nav-item" to="/courses">Courses</router-link>
              </li>
              <li class="cc-nav-link">
                <router-link class="cc-nav-item" to="/databank">Databank</router-link>
              </li>
              <li class="cc-nav-link">
                <router-link class="cc-nav-item" to="/development-notes">Blog</router-link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" class="cc-nav-backdrop" aria-hidden="true" tabindex="-1" @click.prevent="closeMenu"></a>
        <button class="cc-nav-toggle" aria-label="Menu" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M28 16c0 0.552-0.448 1-1 1h-22c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h22c0.552 0 1 0.448 1 1v0zM5 9h22c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-22c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM27 23h-22c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h22c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
          </svg>
        </button>
      </nav>
    </div>
  </section>
</template>

<script setup>
import logoImg from '@/assets/images/logo-concept.webp'
import logoImg300 from '@/assets/images/logo-concept.webp'

const logoSrc = logoImg
const logoSrcset = `${logoImg} 2438w, ${logoImg300} 300w`

const toggleMenu = () => {
  const nav = document.querySelector('.cc-nav')
  nav?.setAttribute('is-modal', nav.getAttribute('is-modal') === 'true' ? 'false' : 'true')
}

const closeMenu = () => {
  const nav = document.querySelector('.cc-nav')
  nav?.setAttribute('is-modal', 'false')
}
</script>
