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

                  
                <ModalPekerjaan :closeModal="closeModal" :showModal="showModal"></ModalPekerjaan>



              <button @click="openModalPendidikan" class="text-base mt-2 flex hover:underline text-blue-500 gap-2"><img
                  src="/image/mortarboard_2.png" alt="icon pekerjaan" class="w-5 h-5 mr-1 mt-0.5">Tambahkan Kredensial
                Pendidikan</button>

                <ModalPendidikan :closeModal="closeModalPendidikan" :showModal="showModalPendidikan"></ModalPendidikan>

              <button @click="openModalLokasi" class="text-base mt-2 flex hover:underline text-blue-500 gap-2"><img src="/image/location_2.png"
                  alt="icon pekerjaan" class="w-5 h-5 mr-1 mt-0.5">Tambahkan Kredensial Lokasi</button>
                  <ModalLokasi :showModal="showModalLokasi" :closeModal="closeModalLokasi"></ModalLokasi>
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
    <transition name="notification-slide">
      <div v-if="showNotification && notificationType === 'success'"
          class="overflow-hidden fixed top-20 right-6 space-y-4 bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
          role="alert">
          <div class="flex">
              <div class="flex-shrink-0">
                  <!-- Icon -->
                  <span
                      class="inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                      <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m9 12 2 2 4-4" />
                      </svg>
                  </span>
                  <!-- End Icon -->
              </div>
              <div class="ms-3">
                  <h3 class="text-gray-800 font-semibold dark:text-white">
                      Berhasil
                  </h3>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                      {{ notificationMessage }}
                  </p>
              </div>
          </div>
      </div>
  </transition>
  <transition name="notification-slide">
    <div v-if="showNotification && notificationType === 'error'"
        class="overflow-hidden fixed top-20 right-6 space-y-4 bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30 "
        role="alert">
        <div class="flex">
            <div class="flex-shrink-0">
                <!-- Icon -->
                <span
                    class="inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                <!-- End Icon -->
            </div>
            <div class="ms-3">
                <h3 class="text-gray-800 font-semibold dark:text-white">
                    Gagal!
                </h3>
                <p class="text-sm text-gray-700 dark:text-gray-400">
                    {{ notificationMessage }}
                </p>
            </div>
        </div>
    </div>
</transition>
  </div>
</template>
  
<script>

import axios from 'axios';
import ModalPekerjaan from '../modal/ModalPekerjaan.vue';
import ModalPendidikan from '../modal/ModalPendidikan.vue';
import ModalLokasi from '../modal/ModalLokasi.vue';
export default {
  data() {
    return {
      activeTab: 'pertanyaan',
      userData: {},
      showModal: false,
      showModalPendidikan: false,
      showModalLokasi:false
    };
  },
  components:{
    ModalPekerjaan,
    ModalPendidikan,
    ModalLokasi
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
    openModalPendidikan() {
      console.log("test")
      this.showModalPendidikan = true;
      this.showModal = false;
    },
    closeModalPendidikan() {
      this.showModalPendidikan = false;
    },
    openModalLokasi() {
      console.log("test")
      this.showModalLokasi = true;
    },
    closeModalLokasi() {
      this.showModalLokasi = false;
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
        const response = await axios.get('http://localhost:8091/api/user/current', {
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
    showNotificationMessage(message, type) {
            // Menampilkan notifikasi dengan animasi
            this.notificationMessage = message;
            this.notificationType = type;
            this.showNotification = true;

            // Sembunyikan notifikasi setelah beberapa detik
            setTimeout(() => {
                this.showNotification = false;
            }, 5000); // Ubah angka 5000 sesuai dengan durasi yang diinginkan
        },
  },
}
</script>