<template>
  <footer class="footer cc-sct">
    <div class="cc-cntr">
      <div class="div-cd84672">
        <a href="https://www.fantasyfoundry.online" rel="noopener" target="_blank">
          <img
            loading="lazy"
            decoding="async"
            class="image-c945b09 cc-img"
            :src="fantasyFoundryLogo"
            width="340"
            height="260"
            alt="Fantasy Foundry Studio"
          />
        </a>

        <nav>
          <nav id="nav-cfa7827" class="nav-c4a9e36 cc-nav" is-nav="true">
            <div class="cc-nav-wrapper">
              <div class="cc-nav-content">
                <ul class="navitems-cb17604 cc-nav-items">
                  <li class="cc-nav-link">
                    <router-link class="cc-nav-item" to="/">Home</router-link>
                  </li>
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
          </nav>
        </nav>
      </div>

      <p class="footer__copy">© 2024 – <a href="https://www.fantasyfoundry.online" target="_blank" rel="noreferrer noopener">Fantasy Foundry Studio</a> – Work in progress. Designs and features may change in the future.</p>
    </div>
  </footer>
</template>

<script setup>
import fantasyFoundryLogo from '@/assets/images/fantasy-foundry-logo.webp'
</script>
