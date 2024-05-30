<script setup>
import MainLayout from './../layout/MainLayout.vue'

</script>
<template>
    <MainLayout>
        <div class="pl-12 md:pl-0 align-middle flex justify-center">
            <div class="w-11/12   md:w-2/6 md:m-auto z-0  h-auto text-left flex justify-center flex-col mx-auto mt-5 mb-auto">
                <h2 class="text-3xl text-slate-800">Formulário de Contato</h2>

                <form class="mt-10" action="enviar_email.php" method="post">
                    <div class="mb-10 md:mb-5 ">
                        <label for="nome" class="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                        <input type="text" id="nome" name="nome" required class="shadow appearance-none border rounded w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-10 md:mb-5">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Endereço de E-mail:</label>
                        <input type="email" id="email" name="email" required class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
            
                    <div class="mb-10 md:mb-5">
                        <label for="assunto" class="block text-gray-700 text-sm font-bold mb-2">Assunto:</label>
                        <input type="text" id="assunto" name="assunto" required class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
            
                    <div class="mb-10 md:mb-5">
                        <label for="mensagem" class="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="4" required class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                
                    <input class="bg-blue-500 w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Enviar">
                </form>
             
                  

            </div>
            
        </div>

    </MainLayout>
</template>


<style lang="scss" scoped>

</style>