<template>
  <main class="company_section">
    <!-- Hero Section -->
    <section class="hero_section_container relative lg:pb-24 md:pb-20">
      <HeroLayout>
        <template #bg_image>
          <img class="w-full h-full object-cover object-top" :src="header_image" alt="Header image" />
        </template>

        <template #hero_tagged_text>
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span> About Us</span>
        </template>

        <template #hero_title>
          <span>driving success <br> across africa</span>
        </template>

        <template #hero_description>
          <span class="block max-w-[600px]">EFL has established itself as a trusted partner in the logistics industry,
            driving seamless imports and exports while managing 4% of Nigeria's container trade, With a focus on
            connecting medium and large businesses to global markets. EFL operates at major Nigerian ports, leveraging
            technology-driven solutions to deliver sustainable and innovative logistics services across Africa.</span>
        </template>

        <template #hero_btn_1>
          <button type="button" aria-label="Let's work button"
            class="px-7 h-[55px] flex items-center justify-center min-w-[150px] bg-gray-50 border rounded-full font-[600] text-gray-800 lg:text-[16px] md:text-[16px] text-[16px]">
            Let's Work</button>
        </template>
      </HeroLayout>
    </section>

    <!-- Overview Section -->
    <section class="overview_section relative lg:px-10 md:px-5 px-4 pb-16 border-b border-gray-400">
      <header class="services_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Overview</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500]">your cargo, our commitment</h2>

        <div class="overview_navigation flex gap-4 items-center mt-5">
          <button @click="handlePrev" type="button" aria-label="Left arrow button"
            class="arrow_left border border-efl-blue-80 rounded-full w-[50px] h-[50px] p-3" :disabled="!isNext"
            :class="{ 'opacity-50': !isNext, 'opacity-100': isNext }">
            <img width="50" height="50" src="https://img.icons8.com/ios/101d6a/50/left--v1.png" alt="left--v1" />
          </button>

          <button @click="handleNext" type="button" aria-label="Right arrow button"
            class="arrow_right border border-efl-blue-80 rounded-full w-[50px] h-[50px] p-3" :disabled="isNext"
            :class="{ 'opacity-50': isNext, 'opacity-100': !isNext }">
            <img width="50" height="50" src="https://img.icons8.com/ios/101d6a/50/right--v1.png" alt="left--v1" />
          </button>
          <button type="button" aria-label="See more locations button"
            class="more_locations bg-efl-blue-80 text-gray-50 rounded-full px-6 py-3 font-[500]">See all</button>
        </div>
      </header>

      <div class="overview_carousel mt-20 mb-8">
        <div class="carousel_container relative overflow-hidden">
          <div class="image_container flex transition-transform duration-300 ease-in-out"
            :class="{ '-translate-x-[100%]': isNext, 'translate-x-0': !isNext }">
            <div class="image flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2.5 h-[500px]"
              v-for="image in overview_images" :key="image.id">
              <img class="rounded-[16px] shadow-lg border w-full h-full object-cover object-center" :src="image.image"
                :alt="`Overview image ${image.id}`" />
            </div>
          </div>
        </div>
      </div>

      <div class="carousel_navigation flex items-center justify-center gap-2">
        <button type="button" aria-label="Navigation button" @click="handlePrev" class="block w-6 h-[5px] rounded-[5px]"
          :class="{ 'bg-efl-blue-80': !isNext, 'bg-efl-blue-20': isNext }"></button>
        <button type="button" aria-label="Navigation button" @click="handleNext" class="block w-6 h-[5px] rounded-[5px]"
          :class="{ 'bg-efl-blue-80': isNext, 'bg-efl-blue-20': !isNext }"></button>
      </div>
    </section>

    <!-- History Section -->
    <section class="history_section relative lg:px-10 md:px-5 px-4 py-12">
      <header class="history_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Our History</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500]">milestones covered on our journey</h2>
      </header>

      <div class="milestones mt-12">
        <div v-for="milestone in milestones" :key="milestone.id"
          class="milestone flex flex-wrap gap-12 py-10 px-2 border-t border-gray-600"
          :class="{ 'bg-gray-200': milestone.id % 2 === 0 }">
          <p class="text-5xl font-[600] milestone_year">{{ milestone.year }}/</p>
          <div class="milestone_details max-w-[80%]">
            <h3 class="text-gray-950 font-[500] lg:text-[24px] md:text-[20px] text-[18px] capitalize mb-2">{{
              milestone.title }}</h3>
            <p class="lg:text-[18px] text-[16px]">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Divider -->
    <section class="image_divider_section lg:h-[80vh] md:h-[70vh] h-[50vh] relative">
      <img class="h-full w-full object-cover object-top" src="../assets/home/01.jpeg" alt="Image divider">
    </section>

    <!-- Why Choose EFL Section -->
    <section class="why_efl_section lg:px-10 md:px-5 px-4 py-16 border-b border-gray-500">
      <div
        class="why_efl min-h-[400px] bg-efl-blue-base rounded-[32px] text-gray-50 p-8 flex flex-col justify-between gap-8">
        <div class="font-[500] lg:text-[18px] md:text-[16px] text-[16px] flex justify-between">
          <p class="max-w-[550px]">Choosing EFL means partnering with Nigeria's leading logistics solutions company. Our
            commitment to excellence and extensive infrastructure make us the ideal partner for businesses aiming to
            succeed
            in a competitive market
          </p>
          <img src="../assets/home/right.png" alt="Right arrow icon">
        </div>

        <div class="lets_work_image_link flex justify-between">
          <h2 class="font-[500] text-[32px] uppercase">why choose EFL?</h2>

          <button type="button" aria-label="Let's work button"
            class="bg-efl-blue-80 font-[500] px-4 rounded-full py-2 text-gray-200 min-w-[130px]">Let's
            Work</button>
        </div>
      </div>
    </section>


    <!-- Location Section -->
    <section class="location_section lg:px-10 md:px-5 px-4 py-12 border-b border-gray-400">
      <header class="services_header_text">
        <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
          <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
          <span>Find Us Here</span>
        </p>

        <h2 class="text-[32px] uppercase font-[500]">connecting at every key point</h2>
      </header>

      <div class="locations grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-start justify-center gap-8 mt-16">
        <div class="location p-6 border rounded-[20px]">
          <div class="w-full lg:h-[450px] md:h-[350px] rounded-[20px] overflow-hidden">
            <img :src="location_one" alt="First terminal location image" class="w-full h-full object-cover">
          </div>

          <div class="location_details py-4">
            <h3 class="text-[24px] py-3 uppercase border-b-2 border-gray-400">EFL Terminal Ikorodu</h3>

            <div class="location_details my-4 flex items-start gap-4">
              <div class="location">
                <h4 class="text-gray-500">Address:</h4>
                <p class="font-[500]">Ikorodu 40/41, Ajose Bus Stop, Owode Ibeshe Road, Ikorodu, Lagos.</p>
              </div>
            </div>

            <div class="service_offered flex items-start gap-4 my-4">
              <div class="service">
                <h4 class="text-gray-500">Services Offered</h4>
                <ul>
                  <li>Imports</li>
                  <li>Exports</li>
                  <li>Empty drop off (CMA, Hapag, PIL, One, Zim, Arkas, Cosco)</li>
                </ul>
              </div>
            </div>

            <div class="customer_service flex items-start gap-4 my-4 border-b-2 pb-5 border-gray-500">
              <div class="customer_service_details">
                <h4 class="text-gray-500">Customer service details:</h4>
                <p class="font-[500]">+234 079 913 677</p>
                <p class="font-[500]"><a href="mailto:enquiries@efl.africa" target="_blank">enquiries@efl.africa</a></p>
              </div>
            </div>



            <button
              class="google_map bg-efl-blue-60 hover:bg-efl-blue-80 transition-all duration-300 w-fit px-4 py-2 rounded-full mt-3">
              <a href="https://maps.app.goo.gl/XKbgUEMvwPvX5EME8" target="_blank"
                class="text-gray-100 font-[500] capitalize">Find
                address on Google maps</a>
            </button>
          </div>
        </div>

        <div class="location p-6 border rounded-[20px]">
          <div class="w-full lg:h-[450px] md:h-[350px] rounded-[20px] overflow-hidden">
            <img :src="location_two" alt="Second terminal location image" class="w-full h-full object-cover">
          </div>

          <div class="location_details py-4">
            <h3 class="text-[24px] py-3 uppercase border-b-2 border-gray-400">EFL Terminal Beachland</h3>

            <div class="location_details my-4 flex items-start gap-4">
              <div class="location">
                <h4 class="text-gray-500">Address:</h4>
                <p class="font-[500]">Beachland (Savaric Yard, 11 creek cres, Ibafon, Lagos)</p>
              </div>
            </div>

            <div class="service_offered flex items-start gap-4 my-4">
              <div class="service">
                <h4 class="text-gray-500">Services Offered</h4>
                <ul>
                  <li>Imports</li>
                  <li>Exports</li>
                  <li>Empty drop off (CMA)</li>
                </ul>
              </div>
            </div>

            <div class="customer_service flex items-start gap-4 my-4 border-b-2 pb-5 border-gray-500">
              <div class="customer_service_details">
                <h4 class="text-gray-500">Customer service details:</h4>
                <p class="font-[500]">+234 803 394 1062</p>
                <p class="font-[500]"><a href="mailto:enquiries@efl.africa" target="_blank">enquiries@efl.africa</a></p>
              </div>
            </div>



            <button
              class="google_map bg-efl-blue-60 hover:bg-efl-blue-80 transition-all duration-300 w-fit px-4 py-2 rounded-full mt-3">
              <a href="https://maps.app.goo.gl/h8gNrKtD2itPwSGY7" target="_blank"
                class="text-gray-100 font-[500] capitalize">Find
                address on Google maps</a>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services_section lg:px-10 md:px-5 px-4 py-10">
      <div class="service_container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-center gap-8">
        <div class="service border rounded-[16px] p-4 flex gap-4 h-[180px]">
          <div class="service_icon">
            <img class="w-[40px]" src="../assets/icons/company/01.png" alt="Ready to ship icon">
          </div>
          <div class="service_details flex flex-col items-start justify-between">
            <h3 class="font-[500] text-[20px]">Ready to ship?</h3>
            <p class="text-gray-500">Look up rates for new shipments and inland tariffs</p>
            <button class="bg-gray-800 text-gray-50 mt-5 rounded-full min-w-[120px] py-2" type="button"
              aria-label="Book now button">Book
              Now</button>
          </div>
        </div>

        <div class="service border rounded-[16px] p-4 flex gap-4 h-[180px]">
          <div class="service_icon">
            <img class="w-[40px]" src="../assets/icons/company/02.png" alt="Ready to ship icon">
          </div>
          <div class="service_details w-full flex flex-col items-start justify-between">
            <h3 class="font-[500] text-[20px]">Schedule appointments <span class="text-[12px] text-gray-400">1/2</span>
            </h3>
            <input type="text"
              class="bg-white border w-full text-gray-800 mt-4 rounded-[5px] min-w-[120px] py-2 px-4 block"
              placeholder="Select inspection agent" />
            <button class="bg-gray-800 text-gray-50 mt-5 rounded-full min-w-[120px] py-2" type="button"
              aria-label="Next button">Next</button>
          </div>
        </div>

        <div class="service border rounded-[16px] p-4 flex gap-4 h-[180px]">
          <div class="service_icon">
            <img class="w-[40px]" src="../assets/icons/company/03.png" alt="Ready to ship icon">
          </div>
          <div class="service_details flex flex-col items-start justify-between">
            <h3 class="font-[500] text-[20px]">Enquiries</h3>
            <p class="text-gray-500">Contact us and we will respond withing the next two working days</p>
            <button class="bg-gray-800 text-gray-50 mt-5 rounded-full min-w-[120px] py-2" type="button"
              aria-label="Enquire button">Enquire</button>
          </div>
        </div>
      </div>
    </section>


    <!-- Image Divider -->
    <section class="image_divider_section lg:h-[80vh] md:h-[70vh] h-[50vh] relative">
      <img class="h-full w-full object-cover object-center" src="../assets/company/12.jpeg" alt="Image divider">
    </section>

    <!-- FAQ -->
    <section class="faq_section lg:px-10 md:px-5 px-4 py-10">
      <FAQComponent :questions="questions" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import HeroLayout from '@/layouts/HeroLayout.vue';
import header_image from '@/assets/company/01.jpg';
import 'vue3-carousel/carousel.css'
import { overview_images } from '@/utils/overview';
import { milestones } from '@/utils/milestones';
import FAQComponent from '@/components/FAQComponent.vue';
import { questions } from '@/utils/questions';
import location_one from '@/assets/company/10.png';
import location_two from '@/assets/company/11.png';


// Carousel configuration
// const carouselConfig = {
//   itemsToShow: 4,
// }

// Refs/Variables
// const myCarousel = ref(null);
const isNext: Ref<boolean> = ref(false);

// Functions
const handleNext = () => {
  // myCarousel.next();
  console.log("next");
  isNext.value = true;
}
const handlePrev = () => {
  // myCarousel.prev();
  console.log("prev");
  isNext.value = false;
}
</script>

<style scoped></style>
