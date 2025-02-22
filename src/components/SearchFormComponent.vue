<template>
  <div
    class="tracking_form z-10 lg:max-w-[900px] w-full mx-auto rounded-[8px] bg-white shadow-[0px_2px_15px_rgba(150,150,150,0.1)] py-10 lg:px-16 md:px-8 px-4 mt-20">
    <form class="cargo_details flex flex-col gap-6 mt-2">
      <div class="bill_lading_number flex flex-col w-full">
        <label for="bill_lading_number" class="text-[#1E1E1E] font-[500] mb-3 lg:text-[18px] text-[16px]">Enter
          your BL number to view full
          tracking details.</label>
        <input class="mt-2 border border-slate-[200] h-[55px] py-1 pl-4 rounded-[6px] placeholder:text-[14px]"
          type="text" name="bill_lading_number" id="bill_lading_number" placeholder="Enter bill of lading number"
          v-model="bl_number" />
        <p class="text-[14px] mt-1">Comment is being given</p>
      </div>

      <div class="cargo_btn flex items-center gap-6">
        <button @click.prevent="handleSubmit" aria-label="Submit button" type="submit"
          class="rounded-full border bg-efl-blue-80 w-[120px] h-[50px] flex items-center justify-center text-white font-[500]">
          <span v-if="loading" class="animate-spin w-5 h-5 border-x-2 border-white rounded-full"></span>
          <span v-else>Track</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

// Refs/Variables
const bl_number: Ref<string> = ref('');
const loading: Ref<boolean> = ref(false);


// Functions
const handleSubmit = () => {
  loading.value = true;
};
</script>

<style scoped></style>
