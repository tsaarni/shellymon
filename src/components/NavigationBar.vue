<template>
  <div>
    <header
      class="z-50 flex w-full flex-wrap bg-stone-300 py-4 text-sm dark:bg-gray-900 sm:flex-nowrap sm:justify-start"
    >
      <nav
        class="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <a class="flex-none text-xl font-semibold dark:text-white" href="#"
          >Shelly monitor</a
        >
        <div
          class="mt-5 flex flex-row items-center gap-5 sm:mt-0 sm:justify-end sm:pl-5"
        >
          <a
            class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
            @click="$emit('add-device')"
            >Add device
          </a>
          <a
            class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            href="#"
            @click="$emit('help')"
            >Help</a
          >
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
