<template>
  <section class="services_section border-b border-gray-400 lg:px-10 md:px-5 px-4 py-16">
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
</template>

<script setup lang="ts">

</script>

<style scoped></style>
