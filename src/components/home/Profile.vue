<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-screen bg-gray-700">
    <div class="mt-10">
      <div class="flex flex-row justify-between ml-20 mr-20 flex-none pt-20">
        <div class="flex container w-3/5">
          <div onmouseenter="imgHover()" onmouseleave="imgHover()"
            class="w-36 h-36 relative flex-none overflow-hidden rounded-full hover:cursor-pointer">
            <div>
              <img src="/image/esa.png" alt="" style="margin-top: -20px;" />
            </div>  
            <div class="absolute top-0 left-0 w-full h-full  items-center justify-center hidden" id="imgSwap">
              <img alt="" src="" class="w-16 h-16 cursor-pointer" />
            </div>
          </div>

          <div class="font-medium ml-5 w-full relativfe">
            <div class="flex">
              <div class="flex-none">
                <div class="text-white text-3xl">{{ userData.username }}</div>
              </div>
            </div>
            <button
              class="outline-2 absolute w-7 h-7 top-0 left-[70%] outline outline-gray-500 rounded-full overflow-hidden">
              <img src="" alt="" class="object-center mx-auto w-5 h-auto">
            </button>

            <a href="#" class="text-sm text-white text-grey-500 hover:underline">Tambahkan Kredensial Profile</a>
            <div class="">
              <a href="#" class="font-light text-white hover:underline">0 Pengikut</a>
              <a href="#" class="font-light text-white hover:underline ml-2">0 Mengikuti</a>
            </div>
          </div>
        </div>

        <div class="flex container w-2/5">
          <div>
            <div class="flex">
              <div class="text-white w-[200%]">Kredensial & Sorotan</div>
              <button>
                <img src="/image/share_2.png" alt="" class="w-[15%] ml-[30%]">
              </button>
            </div>

            <div class="border-b-2 w-[82%] mt-3"></div>

            <div class="flex-none mt-5">
              <button @click="openModal" type="button" href="" class="text-base mt-2 flex hover:underline text-blue-500 gap-2"><img src="/image/briefcase.png"
                  alt="icon pekerjaan" class="w-5 h-5 mr-1 mt-0.5" >Tambahkan Kredensial Pekerjaan</button>



              <a href="" class="text-base mt-2 flex hover:underline text-blue-500 gap-2"><img
                  src="/image/mortarboard_2.png" alt="icon pekerjaan" class="w-5 h-5 mr-1 mt-0.5">Tambahkan Kredensial
                Pendidikan</a>
              <a href="" class="text-base mt-2 flex hover:underline text-blue-500 gap-2"><img src="/image/location_2.png"
                  alt="icon pekerjaan" class="w-5 h-5 mr-1 mt-0.5">Tambahkan Kredensial Lokasi</a>
            </div>
          </div>
        </div>
      </div>


      <div class="flex ml-20 mr-20">
        <div class="flex container w-3/5 ">
          <div class="ml-5 text-sm font-medium text-start grid-rows-2  border-b text-white border-gray-700">
            <a href="#" class="font-medium text-grey-600 text-grey-500 hover:underline">{{ userData.email }}</a>
            <ul class="flex flex-wrap -mb -px">
              <li class="mr-2">
                <button @click.prevent="setActiveTab('pertanyaan')"
                  :class="{ 'text-blue-400': activeTab === 'pertanyaan', 'border-blue-700': activeTab === 'pertanyaan' }"
                  id="pertanyaan-tab" :aria-selected="activeTab === 'pertanyaan'" type="button" role="tab"
                  data-tabs-button="#pertanyaan"
                  class="inline-block p-4 border-b-2 hover:text-blue-400 hover:border-blue-700 rounded-t-lg">pertanyaan
                </button>
              </li>
              <li class="mr-2">
                <button @click.prevent="setActiveTab('komentar')"
                  :class="{ 'text-blue-400': activeTab === 'komentar', 'border-blue-700': activeTab === 'komentar' }"
                  id="komentar-tab" :aria-selected="activeTab === 'komentar'" type="button" role="tab"
                  data-tabs-button="#komentar"
                  class="inline-block p-4 border-b-2 hover:text-blue-400 hover:border-blue-700 rounded-t-lg">komentar
                </button>
              </li>
              <li class="mr-2">
                <button @click.prevent="setActiveTab('contacts')"
                  :class="{ 'text-blue-400': activeTab === 'contacts', 'border-blue-700': activeTab === 'contacts' }"
                  id="contacts-tab" :aria-selected="activeTab === 'contacts'" type="button" role="tab"
                  data-tabs-button="#contacts"
                  class="inline-block p-4 border-b-2 hover:text-blue-400 hover:border-blue-700 rounded-t-lg">contacts
                </button>
              </li>
              <li class="mr-2">
                <button @click.prevent="setActiveTab('pengikut')"
                  :class="{ 'text-blue-400': activeTab === 'pengikut', 'border-blue-700': activeTab === 'pengikut' }"
                  id="pengikut-tab" :aria-selected="activeTab === 'pengikut'" type="button" role="tab"
                  data-tabs-button="#pengikut"
                  class="inline-block p-4 border-b-2 hover:text-blue-400 hover:border-blue-700 rounded-t-lg">pengikut
                </button>
              </li>
              <li class="mr-2">
                <button @click.prevent="setActiveTab('mengikuti')"
                  :class="{ 'text-blue-400': activeTab === 'mengikuti', 'border-blue-700': activeTab === 'mengikuti' }"
                  id="mengikuti-tab" :aria-selected="activeTab === 'mengikuti'" type="button" role="tab"
                  data-tabs-button="#mengikuti"
                  class="inline-block p-4 border-b-2 hover:text-blue-400 hover:border-blue-700 rounded-t-lg">mengikuti
                </button>
              </li>
            </ul>
            <div class="mt-3">
              
            </div>
          </div>
        </div>
        <div class="flex container w-2/5 mt-5">
          <div class="w-[100%]">
            <div class="flex w-[100%] gap-[58%]">
              <div class="text-white ">Tahu Tentang</div>
              <button>
                <img src="" alt="" class="w- [15%] w-6 m l-[30%]">
              </button>
            </div>

            <div class="border-b-2 w-[82%] mt-3" alt="garis"></div>

            <div class="mt-5 items-center">
              <div class="flex flex-col gap-y-3 ">
                <a href="/oke" class="flex flex-row gap-x-2 items-center text-white">
                  <div class="w-9 h-9 border-blue-400 overflow-hidden">
                    <img src="/image/indo_flag.jpg" alt="" class="w-full h-full object-cover">
                  </div>
                  <h1 class="hover:underline underline-offset-2">Bahasa Indonesia</h1>

                </a>
                <a href="/oke" class="flex flex-row gap-x-2 items-center text-white">
                  <div class="w-9 h-9 border-blue-400 overflow-hidden">
                    <img src="/image/bahasa_inggris.jpg" alt="" class="w-full h-full object-cover">
                  </div>
                  <h1 class="hover:underline underline-offset-2">Bahasa Inggris</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
// import ModalPekerjaan from '../modal/ModalPekerjaan.vue';
export default {
  data() {
    return {
      activeTab: 'pertanyaan',
      userData: {},
      showModal: false,
    };
  },
  components:{
    
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    openModal() {
      console.log("test")
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    async getUserData() {
      try {
        // Mendapatkan token dari penyimpanan lokal
        const token = localStorage.getItem('token');
        console.log("token " + token)
        // Mengeksekusi permintaan GET ke endpoint dengan menyertakan token di header
        const response = await axios.get('https://hapless-linen-production.up.railway.app/api/user/current', {
          headers: {
            'X-API-TOKEN': token,
          },
        });

        // Tanggapi berhasil: Setel data pengguna
        this.userData = response.data.data;
        console.log(this.userData)
      } catch (error) {
        // Tangani kesalahan jika ada
        console.error('Gagal mengambil data pengguna:', error);
      }
    },
  },
}
</script>