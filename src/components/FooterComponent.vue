<script lang="ts" setup>
import footer_logo from '@/assets/logos/footer_logo.svg';
</script>

<template>
  <footer class="footer lg:px-[30px] md:px-[20px] px-[10px] font-[500] text-[18px] my-10">
    <div
      class="footer_content flex flex-wrap gap-8 items-start lg:justify-between md:justify-between justify-center min-h-[450px]">
      <div class="footer_content_efl lg:max-w-[30%] md:max-w-[400px] w-full">
        <div class="footer_content_efl_logo">
          <img :src="footer_logo" alt="logo" class="footer_content_efl_logo_img">
        </div>
        <div class="footer_content_efl_text mt-4">
          <p class="footer_content_efl_text_title text-[18px]">EFL connects businesses across borders,
            powering 4% of
            Nigeria's
            container trade through strategic port operations. As a catalyst for both imports and non-oil exports, we
            provide the seamless infrastructure that enables medium and large enterprises to scale their international
            trade</p>
        </div>
      </div>

      <div
        class="footer_content_links flex items-start gap-8 flex-wrap justify-between max-w-[500px] lg:max-w-[650px] md:max-w-[400px] w-full">
        <div class="stay_in_touch">
          <h3 class="text-gray-400 mb-2">Stay in Touch</h3>
          <ul class="stay_in_touch_links flex flex-col gap-1">
            <li>Contact (1/2): +234 902 803 7311</li>
            <li>Contact (2/2): +234 803 394 1062</li>
            <li class="text-[14px]">Mail: customer.service@efl.africa</li>
          </ul>
        </div>

        <div class="company_address_one max-w-[300px]">
          <h3 class="text-gray-400 mb-2">Company Address (1/2)</h3>
          <p>Ikorodu 40/41, Ajose Bus Stop, Owode Ibeshe Road, Ikorodu, Lagos, Nigeria</p>
          <a href="#" target="_blank" class="text-efl-green-80 mt-2 block">Find on Map</a>
        </div>

        <div class="quick_actions">
          <h3 class="text-gray-400 mb-2">Quick Actions</h3>
          <ul class="flex flex-col gap-1">
            <li><a href="#">Track & Trace</a></li>
            <li><a href="#">Vessel schedules</a></li>
            <li><a href="#">Supply chain & logistics</a></li>
          </ul>
        </div>

        <div class="company_address_two max-w-[300px]">
          <h3 class="text-gray-400 mb-2">Company Address (2/2)</h3>
          <p>Beachland (Savaric Yard, 11 creek cres, Ibafon, Lagos)</p>
          <a href="#" target="_blank" class="text-efl-green-80 mt-2 block">Find on Map</a>
        </div>
      </div>
    </div>

    <div class="footer_copyright flex flex-wrap gap-8 lg:justify-between md:justify-center justify-center mt-8">
      <p class="max-w-[500px]">2024 EFL. All rights reserved.</p>
      <div class="footer_copyright_links_container lg:w-[650px] flex justify-between gap-8">
        <ul class="footer_copyright_links flex gap-4">
          <li><a href="#">Cookies policy.</a></li>
          <li><a href="#">Privacy policy.</a></li>
          <li><a href="#">Terms and conditions.</a></li>
        </ul>

        <p>Designer</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
