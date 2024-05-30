<script setup>
import MainLayout from './../layout/MainLayout.vue'

</script>
<template>
    <MainLayout>
        <div class="pl-12 overflow-x-hidden md:pl-0 align-middle flex justify-center">
            <div
                class="w-10/12 overflow-x-hidden   md:w-4/6 md:mx-auto z-0  h-auto text-left flex justify-center flex-col  mx-auto mt-20 mb-auto">

                <h1 class="text-3xl font-bold mb-6 text-center">Technologies I've Worked With</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             
                    <!-- JavaScript Card -->
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript">
                        <h2 class="text-xl font-semibold mb-2">JavaScript</h2>
                        <p class="text-gray-600 text-center">Programming language used to create dynamic and interactive
                            effects on web pages.</p>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js">
                        <h2 class="text-xl font-semibold mb-2">Vue.js</h2>
                        <p class="text-gray-600 text-center">JavaScript framework for building user interfaces and single-page applications.</p>
                    </div>
                    <!-- React Card -->
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React">
                        <h2 class="text-xl font-semibold mb-2">React</h2>
                        <p class="text-gray-600 text-center">JavaScript library for building user interfaces.</p>
                    </div>
                    <!-- Node.js Card -->
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js">
                        <h2 class="text-xl font-semibold mb-2">Node.js</h2>
                        <p class="text-gray-600 text-center">JavaScript runtime built on Chrome's V8 JavaScript engine.
                        </p>
                    </div>
                    <!-- Python Card -->
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            alt="Python">
                        <h2 class="text-xl font-semibold mb-2">Python</h2>
                        <p class="text-gray-600 text-center">High-level programming language for general-purpose
                            programming.</p>
                    </div>
                    <!-- Django Card -->
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg"
                            alt="Django">
                        <h2 class="text-xl font-semibold mb-2">Django</h2>
                        <p class="text-gray-600 text-center">High-level Python web framework that encourages rapid
                            development.</p>
                    </div>
                    <!-- Tailwind CSS Card -->
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <img class="w-16 h-16 mb-4"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                            alt="Tailwind CSS">
                        <h2 class="text-xl font-semibold mb-2">Tailwind CSS</h2>
                        <p class="text-gray-600 text-center">Utility-first CSS framework for rapidly building custom
                            user interfaces.</p>
                    </div>
                </div>



            </div>

        </div>

    </MainLayout>
</template>

<style lang="scss" scoped></style>