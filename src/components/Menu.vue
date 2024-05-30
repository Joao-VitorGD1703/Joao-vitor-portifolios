<script setup>
import { ref } from 'vue';
import { useGoTo } from '@/composables/Utils';

let x = ref(false)
function teste(){
x.value = !x.value
}
</script>
<template>
  <div :class="{ 'w-4/6 md:w-3/12 z-10 bg-gray-900 transition-all duration-300 flex flex-col': x === true, 'w-12 z-10 bg-gray-800 border-none transition-all duration-300': x === false }" class="h-screen fixed top-0 left-0">
    <button class="text-gray-50 w-12 h-12">
        <label class="hamburger">
        <input @click="teste()" type="checkbox">
        <svg viewBox="0 0 32 32">
            <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path class="line" d="M7 16 27 16"></path>
        </svg>
        </label>
    </button>
    <ul :class="{ ' w-full bg-gray-900 transition-all duration-300 flex flex-col': x === true, 'hidden transition-all duration-300': x === false }" class="w-full">
        <li class="h-10 list-none border-b-2 my-2 border-neutral-50"><button class="text-white text-left p-2" @click="useGoTo('/')">Home</button></li>
        <li class="h-10 list-none border-b-2 my-2 border-neutral-50"><button class="text-white text-left p-2"@click="useGoTo('/tecnologias')">Tecnologias</button></li>
        <li class="h-10 list-none border-b-2 my-2 border-neutral-50"><button class="text-white text-left p-2"@click="useGoTo('/experiencia')">Experiencias</button></li>
        <li class="h-10 list-none border-b-2 my-2 border-neutral-50"><button class="text-white text-left p-2"@click="useGoTo('/contato')">Contato</button></li>
    </ul>
</div>

</template>


<style lang="css" scoped>

.hamburger {
    cursor: pointer;
  }
  
  .hamburger input {
    display: none;
  }
  
  .hamburger svg {
    /* The size of the SVG defines the overall size */
    height: 3em;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .line-top-bottom {
    stroke-dasharray: 12 63;
  }
  
  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }
  
  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
  


</style>