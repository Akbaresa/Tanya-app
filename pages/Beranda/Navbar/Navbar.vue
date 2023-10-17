<template>
        <nav class=" bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div class="flex item-center">
                <div class="flex justify-center pr-3">
                  <img src="/image/tanya.png" class="h-8 mr-3" alt="Tanya Logo" />
                  <span class="text-2xl font-semibold whitespace-nowrap text-white ">Tanya</span>
                </div>
              </div>
              <div class="flex justify-center mx-auto">
                <ul class="flex flex-col p-4 md:p-0  font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                  
                  <Logo></Logo>
  
                  <Search></Search>
  
                  <li class="relative">
                      <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600" type="button">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-10 h-10 rounded-full" src="/image/esa.png" alt="user photo">
                      </button>
                      <Dropdown></Dropdown>
                    </li>
                    <Pertanyaan></Pertanyaan>
                </ul>
              </div>
              </div>
            </nav>


</template>

<style>
</style>

<script >
import Logo from './Logo.vue'
import Search from './Search.vue'
import Dropdown from './DropdownProfile.vue'
import Pertanyaan from './Pertanyaan.vue'

export default {
    name: "Navbar",
    components :{
      Logo , 
      Search,
      Dropdown, 
      Pertanyaan,
    }
}


</script>   