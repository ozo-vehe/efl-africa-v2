<template>
  <nav class="navbar absolute top-0 left-0 right-0 z-50 lg:px-10 md:px-5 px-4 py-6">
    <div class="navbar_content flex flex-wrap items-center justify-between">
      <div class="left_content flex flex-wrap items-center gap-8">
        <RouterLink to="/"
          class="navbar_logo bg-gray-50 w-[110px] shadow-sm border border-gray-100 h-[50px] rounded-full p-3">
          <img class="w-full h-full object-contain" :src="logo" alt="EFL Logo" />
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="navbar_links h-[55px] bg-gray-50 flex items-center rounded-full">
          <ul class="flex flex-wrap gap-3 border border-gray-100 shadow-sm h-full rounded-full items-center">
            <li v-for="(link, index) in nav_links" :key="index">
              <RouterLink class="block bg-gray-50 text-gray-950 py-3 px-6 rounded-full mx-[1px] font-[500]"
                :class="{ 'active': route.path == link.path }" :to="link.path">{{
                  link.name
                }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Mobile Navigation -->
      </div>

      <div class="right_content border rounded-full bg-gray-50 p-[1px] h-[50px] w-[50px]">
        <button type="button" aria-label="search button"
          class="search_bar_icon rounded-full bg-efl-blue-base h-full w-full p-[10px]">
          <RouterLink to="/track-trace">
            <img class="w-full h-full object-contain hover:scale-110 transition-all duration-300"
              src="https://img.icons8.com/ios-glyphs/ffffff/30/search--v1.png" alt="search--v1" />
          </RouterLink>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { ref, type Ref } from 'vue';
import logo from '@/assets/logos/logo.png'

// Navigation Link Interface
interface NavLink {
  name: string;
  path: string;
}

// Navigation Links
const nav_links: Ref<NavLink[]> = ref([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: "Company",
    path: '/company'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Track & Trace',
    path: '/track-trace'
  },
  {
    name: 'Gallery',
    path: '/gallery'
  },
])

// Router
const route = useRoute();

console.log(route.path);
</script>

<style scoped>
.active {
  background-color: #101d6a;
  color: white;
}
</style>
