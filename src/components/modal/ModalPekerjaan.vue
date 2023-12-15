<!-- Modal.vue -->
<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center" v-if="showModal">
      <div class="absolute inset-0 bg-gray-900 opacity-50" @click="closeModal"></div>
      <div class="bg-white p-8 rounded shadow-md w-96">
        <div class="flex justify-end">
          <button @click="closeModal" class="text-gray-600 hover:text-gray-800">&times;</button>
        </div>
        <h3 class="text-2xl font-semibold mb-4">{{ title }}</h3>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="jobTitle" class="block text-sm font-medium text-gray-700">Kredensial Pekerjaan:</label>
            <input type="text" id="jobTitle" v-model="jobTitle" class="mt-1 p-2 w-full border rounded-md">
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
    data(){
        return{
            showModal: false
        }
    },
    methods:{
        openModal(){
            console.log("orang")
            this.showModal = true
        },
        closeModal(){
            this.showModal = false
        }
    }
}
</script>