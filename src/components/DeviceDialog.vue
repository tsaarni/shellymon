<script setup lang="ts">
  import { ref } from "vue";

  const emits = defineEmits<{
    (e: "add-device", deviceAddr: string, deviceName: string): void;
    (e: "close"): void;
  }>();

  const deviceAddr = ref<HTMLInputElement | null>(null);
  const deviceName = ref<HTMLInputElement | null>(null);
</script>

<template>
  <div
    class="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm"
  >
    <div
      class="border-1 rounded-lg border px-11 py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    >
      <form>
        <div class="mb-2">
          <label class="mb-1 block font-medium" for="deviceAddress"
            >Address</label
          >
          <input
            id="deviceAddr"
            ref="deviceAddr"
            @keyup.enter="deviceName?.focus()"
            type="text"
            class="border-1 focus:ring-10 rounded-md border border-gray-700 bg-inherit py-2 px-2 focus:border-gray-300 focus:bg-gray-800 focus:outline-none dark:border-gray-500 dark:text-gray-400"
          />
        </div>

        <div class="mb-1 flex items-center justify-between">
          <label for="deviceName">Name</label>
          <span class="text-gray-500">Optional</span>
        </div>
        <input
          id="deviceName"
          ref="deviceName"
          @keyup.enter="
            $emit('add-device', deviceAddr?.value, deviceName?.value)
          "
          type="text"
          class="border-1 focus:ring-10 rounded-md border border-gray-700 bg-inherit py-2 px-2 focus:border-gray-300 focus:bg-gray-800 focus:outline-none dark:border-gray-500 dark:text-gray-400"
        />

        <div class="flex space-x-5">
          <button
            type="button"
            class="mt-8 w-full animate-press rounded-md bg-blue-500 py-1 px-2 text-white hover:bg-blue-400"
            @click="
              $emit('add-device', deviceAddr?.value, deviceName?.value);
              $emit('close');
            "
          >
            Add
          </button>
          <button
            type="button"
            class="mt-8 w-full animate-press rounded-md bg-blue-500 py-1 px-2 text-white hover:bg-blue-400"
            @click="$emit('close')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
