<template>
    <div>
        <div class="border-gray-200 bg-gray-700 h-[100rem] text-gray-200">
            <div class="pt-20 container mx-auto rounded-lg p-12" id="content">
              <div class="block mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-800 w-[60%]">
                <div class="border-b-2 px-6 flex py-3 border-gray-800 text-neutral-50">
                  <img class="w-10 h-10 rounded-full ml-2 mt-2 mr-3" src="/image/esa.png" alt="Rounded avatar"> 
                  <button type="button" class="py-2.5 px-5 mr-2 mb-2 mt-2 ml-1 text-sm font-medium  focus:outline-none rounded-lg border  hover:text-white focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700">
                    
                    <p class="pl-2 ml-2 mr-3">Apa yang ingin anda tanyakan atau bagikan?</p>
                  </button>
                </div>
                <div class="pl-6 ml-3 flex pb-3">
                  <div class="px-4">
                    <a href="" class="mr-3 hover:underline">Tanya</a>
                    <a href="" class="hover:underline">Jawab</a>
                  </div>
                  
                </div>
              </div>
  
              <div class="">
                <div class="" id="content">
                  <div class="block mt-2 mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-800 w-[60%]">
                    <div class="border-b-2 px-6 flex py-3 border-gray-800 ">
                      <img class="w-10 h-10 rounded-full ml-2 mt-2 mr-3" src="/image/profil1.png" alt="Rounded avatar"> 
                      <div>
                        <a 
                        type="button"
                        class="flex items-center mt-1 hover:underline cursor-pointer text-teal-400" 
                        @mouseover="showPopover"
                        @mouseleave="hidePopover"
                        >Napoleon</a>


                        <!-- PopOverStart -->
                        <div ref="popover"  
                        v-show="isPopoverVisible"
                        class="absolute z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border 
                        border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 ">

                          <div class="px-3 py-2 bg-gray-100 border-b border-gray-200  rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                              <h3 class="font-semibold text-gray-900 dark:text-white">Popover right</h3>
                          </div>
                          <div class="px-3 py-2">
                              <p>And here's some amazing content. It's very engaging. Right?</p>
                          </div>
                    </div>
                        <!-- PopOverEnd -->

                        <p class="text-sm text-gray-400">2 jam yang lalu</p>
                      </div>
                    </div>
                    <div class="pl-6 mr-3 ml-3 text-white flex pb-3">
                      <div class="px-2">
                        <p class="font-semibold">Kenapa orang orang banyak yang menjadi wibu ya ? </p>
                        <p>saya semenjak sd belum pernah merasakan apa sih yang namanya wibu, saya pun baru tahu ketika saya 
                          menghadapi sma ketika itu teman teman saya menceritakan apa yang disebut entitas itu dengan </p>
                      </div>
                    </div> 

                      <!-- startKomentar -->
                     
                      <div class="hs-accordion-group">
                        <div class="hs-accordion active" id="hs-basic-heading-one">
                          <button type="button" class="text-blue-700 mb-2 ml-10 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center hs-accordion-toggle hs-accordion-active:text-blue-600 group gap-x-3  transition  dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400">
                            <svg class="w-5 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                            </svg>
                            <span class="sr-only">Icon description</span>
                            <p class="px-3">12</p>
                          </button>
                          <button 
                          @click="toggleTextVisibility" 
                          class="text-blue-700 mb-2 ml-2 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center hs-accordion-toggle hs-accordion-active:text-blue-600 group   gap-x-3  transition  dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400" 
                          aria-controls="hs-basic-collapse-one">
                            <img src="/image/Chat.png" class="w-5" style="width: 20px;" alt="">
                            <p class="px-3">4</p>
                          </button>
                          <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one" v-show="textVisible">

                            <!-- startFormKomen -->
                            
                <form>
                  <label for="chat" class="sr-only">Your message</label>
                  <div class="flex items-center px-3 py-2 rounded-lg bg-gray-800">
                      <textarea id="chat" rows="1" class="block mx-2 p-2.5 w-full text-sm  rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Komentar mu"></textarea>
                          <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                          <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                          </svg>
                          <span class="sr-only">Send message</span>
                      </button>
                  </div>
                </form>

                            <!-- endFormKomen -->


                          <div class="inline-flex  max-w-full mx-7 py-3">
                            <img src="/image/esa.png" alt="" class="w-10 mb-1 h-10 rounded-full">
                                <div class="border-b-2 border-gray-600">
                                </div>
                                <p class=" pl-3 text-gray-200 dark:text-gray-200">
                              <a class="block  hover:underline cursor-pointer text-teal-400">
                                  Maulana Akbar
                              </a>
                              wkwk itu mungkin terdengar konyol kebanyakan orang sudah suka menyendiri baru baru ini mungkin efek dari sananya
                            </p>
                          </div>                                  
                          </div>
                        </div>
                      </div>
                    <!-- endKomentar -->

                    </div> 
                  </div>
  
                <div class="" id="">
                  <div class="block mt-2 mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-800 w-[60%]">
                    <div class="border-b-2 px-6 flex py-3 border-gray-800 ">
                      <img class="w-10 h-10 rounded-full ml-2 mt-2 mr-3" src="/image/fitty.jpg" alt="Rounded avatar"> 
                      <div>
                        <a class="flex items-center mt-1 text-teal-400">Fitty </a>
                        <p class="text-sm text-gray-400">22/06/2023</p>
                      </div>
                    </div>
                    <div class="pl-6 mr-3 ml-3 text-white flex pb-3">
                      <div class="px-2">
                        <p class="font-semibold">Apa yang kamu lakukan jika kamu gabut? </p>
                        <img src="/image/gabut.jpeg" class="my-1" alt="">
                        <p>Mungkin ini sedikit aneh tidak seperti orang pada umumnya aku biasanya melakukan hal yang mungkin terdengar aneh </p>
                      </div>
                      
                    </div> 
                    <div class="mx-auto container pl-6" > 
                      <button type="button" class="text-blue-700 ml-2 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                        <svg class="w-5 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                          <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                        </svg>
                        <span class="sr-only">Icon description</span>
                        <p class="px-3">12</p>
                      </button>
                      
                      <button type="button" class="text-blue-700 mb-2 ml-2 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center ">
    <img src="/image/Chat.png" class="w-5" style="width: 20px;" alt="">
                        <p class="px-3">4</p>
                      </button>
                    </div> 
                  </div>
  
              </div>
  
  
  
  
              </div>
            </div>
            
          </div>
        </div>
   
</template>

<script>
import ('preline');
export default {
    name: "Beranda",
    setup () {
        return {
          textVisible: false,
          isPopoverVisible: false
        };
        
    },
    methods: {
    toggleTextVisibility() {
      this.textVisible = !this.textVisible;
    },
    showPopover() {
      this.isPopoverVisible = true;
      this.$nextTick(() => {
        this.$refs.popover.style.opacity = 1;
      });
    },
    hidePopover() {
      this.isPopoverVisible = false;
      this.$refs.popover.style.opacity = 0;
    },
  },
}
</script>

<style >

</style>





