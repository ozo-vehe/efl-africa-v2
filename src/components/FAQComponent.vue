<template>
  <header class="services_header_text">
    <p class="flex items-center gap-[7px] font-[500] lg:text-[18px] md:text-[16px] text-[16px] mb-2">
      <span class="block w-3 h-3 bg-efl-green-base rounded-full"></span>
      <span>Common questions</span>
    </p>

    <h2 class="text-[32px] uppercase font-[500] max-w-[500px]"><span class="bg-efl-blue-20 px-1">clear</span>
      answers to
      guide your
      logistics <span class="bg-efl-blue-20 px-1">journey</span></h2>
  </header>
  <div class="faq_container border-gray-500 my-10 border-t">
    <div v-for="question in questions" :key="question.id"
      class="question_container mt-6 border-b border-gray-500 flex items-center justify-between">

      <div class="bg-gray-100 mb-8 mt-2 flex justify-between rounded-[28px] p-6 lg:w-[80%]">
        <div class="lg:w-[80%] flex flex-col gap-24">
          <div v-if="isOpen.id === question.id && isOpen.isOpen" class="answer">
            <p class="lg:text-[20px] md:text-[18px] text-[16px] leading-8">{{ question.answer }}</p>
          </div>

          <div class="question">
            <h3 class="lg:text-[24px] md:text-[20px] text-[18px] font-[500]">{{ question.question }}</h3>
          </div>
        </div>

        <button type="button" aria-label="Question arrow button" class="question_icon max-w-[40px] max-h-[40px]">
          <img v-if="isOpen.id === question.id && isOpen.isOpen"
            class="w-[30px] bg-gray-300 rounded-full p-[7px] hover:bg-gray-400 transition-all duration-300"
            src="https://img.icons8.com/ios-glyphs/ffffff/30/chevron-up.png" alt="chevron-down"
            @click="toggleFAQ(question.id)" />

          <img v-else class="w-[30px] bg-gray-300 rounded-full p-[7px] hover:bg-gray-400 transition-all duration-300"
            src="https://img.icons8.com/ios-glyphs/ffffff/30/chevron-down.png" alt="chevron-down"
            @click="toggleFAQ(question.id)" />
        </button>
      </div>

      <div class="question_number">
        <p class="text-6xl font-bold">/0{{ question.id }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

// Interface
interface Question {
  id: number;
  question: string;
  answer: string;
}
interface OpenedQuestion {
  id: number | null;
  isOpen: boolean | null;
}

// Props
defineProps<{
  questions: Question[]
}>()

// Variables/Refs
const isOpen: Ref<OpenedQuestion> = ref({ id: null, isOpen: null });

// Functions
const toggleFAQ = (id: number) => {
  if (isOpen.value.id === id) {
    isOpen.value.isOpen = !isOpen.value.isOpen;
    return;
  }
  isOpen.value.isOpen = false;
  isOpen.value.id = id;
  isOpen.value.isOpen = !isOpen.value.isOpen;
}

</script>

<style scoped></style>
