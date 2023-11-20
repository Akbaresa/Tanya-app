<template>
  <div>
    <div class="border-gray-200 bg-gray-700 h-[100%] text-gray-200">
      <div class="pt-20 container mx-auto rounded-lg p-12" id="content">
        <div
          class="block mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-800 w-[60%]">
          <div class="border-b-2 px-6 flex py-3 border-gray-800 text-neutral-50">
            <img class="w-10 h-10 rounded-full ml-2 mt-2 mr-3" src="/image/esa.png" alt="Rounded avatar">
            <button type="button"
              class="py-2.5 px-5 mr-2 mb-2 mt-2 ml-1 text-sm font-medium  focus:outline-none rounded-lg border  hover:text-white focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600  hover:bg-gray-700">

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


        <div class="relative" id="content" v-for="pertanyaan in pertanyaanList" :key="pertanyaan.id">

          <div
            class="block mt-2 mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-800 w-[60%]">
            <div class="border-b-2 px-6 flex py-3 border-gray-800 ">
              <img class="w-10 h-10 rounded-full ml-2 mt-2 mr-3" src="/image/profil1.png" alt="Rounded avatar">
              <div>
                <a type="button" class="flex items-center mt-1 hover:underline cursor-pointer text-teal-400"
                  @mouseover="showPopover" @mouseleave="hidePopover">{{ pertanyaan.username }}</a>
                <p class="text-sm text-gray-400">{{ pertanyaan.tanggal }}</p>
              </div>
            </div>
            <div class="pl-6 mr-3 ml-3 text-white flex pb-3">
              <div class="px-2">
                <p class="font-semibold">{{ pertanyaan.header }}</p>
                <p>{{ pertanyaan.deskripsi }}</p>
              </div>
            </div>

            <div class=" w-[90%] mx-auto flex flex-col gap-y-5">
              <div class="flex flex-row gap-x-3">
                <button type="button"
                  class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                  
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 18 18">
                    <path
                      d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                  </svg>
                  <span class="sr-only">Icon description</span>
                  <p class=" ml-3">{{ pertanyaan.suka }}</p>
                </button>

                <button type="button" @click="lihatKomen(pertanyaan.id)"
                  class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center hs-accordion-toggle hs-accordion-active:text-blue-600 group   gap-x-3  transition  dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-collapse-one">
                  <img src="/image/Chat.png" class="w-5" style="width: 20px;" alt="">
                  <p class="px-3">{{ pertanyaan.totalKomentar }}</p>
                </button>
              </div>

              <!-- ... Your other code ... -->

              <form @submit.prevent="postKomentar(pertanyaan.id)">
                <label for="chat" class="sr-only">Pesan Komentar</label>
                <div class="flex rounded-lg bg-gray-800 gap-x-1">
                  <textarea id="chat" rows="1" v-model="komen[pertanyaan.id]"
                    class="block p-2.5 w-full text-sm overflow-y-height rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Komentar mu"></textarea>
                  <button type="submit"
                    class="flex items-center justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 18 20">
                      <path
                        d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span class="sr-only">Send message</span>
                  </button>
                </div>
              </form>

              <!-- ... Your other code ... -->



              <div class="max-h-0 overflow-hidden overflow-y-auto transition-max-h duration-700 ease-in-out"
                aria-valuetext="close" :id="pertanyaan.id">
                <div class="flex flex-row  py-2" v-if="pertanyaan.komentar.length > 0"
                  v-for="komentar in pertanyaan.komentar" :key="komentar.idKomentar">
                  <img src="/image/esa.png" alt="" class="w-10 mb-1 h-10 rounded-full">
                  <div class="flex flex-col ml-3 w-full ">
                    <a class=" hover:underline cursor-pointer text-teal-400">
                      {{ komentar.nama }}
                    </a>
                    <div class="border-b-2 w-full h-[1px] border-gray-600">
                    </div>
                    <p class=" text-gray-200 dark:text-gray-200">
                      {{ komentar.deskripsi }}
                    </p>
                  </div>
                </div>
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
export default {
  middleware: 'auth',
  data() {
    return {
      pertanyaanList: [],
      loading: false, // Hanya satu kali
      currentPage: 1,
      itemsPerPage: 10,
      noMoreData: false,
      komen: {},
      showNotification: false,
      notificationType: '',
      notificationMessage: '',
      notifGagal: ''
    };
  },
  name: "Beranda",
  setup() {
    return {
      textVisible: false,
      isPopoverVisible: false,
    };

  },
  mounted() {
    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', this.handleScroll);

    // Panggil fungsi untuk mengambil data saat komponen dimuat
    this.fetchPertanyaanData();
  },
  created() {
    // Navigation Guard: Dipanggil saat komponen dibuat
    this.checkAuthentication();
  },
  watch: {
    // Watcher untuk memantau perubahan rute
    $route(to, from) {
      this.checkAuthentication();
    },
  },
  destroyed() {
    // Hapus event listener saat komponen dihancurkan
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    checkAuthentication() {
      const isAuthenticated = localStorage.getItem('token');
      if (this.$route.meta.requiresAuth && !isAuthenticated) {
        // Jika rute memerlukan otentikasi dan pengguna belum login,
        // Anda dapat menangani tindakan di sini, seperti mengarahkan ke halaman login
        this.$router.push('/login');
      }
    },
    async fetchPertanyaanData() {
      try {
        this.loading = true;

        // Ganti URL sesuai dengan endpoint backend Anda
        const response = await axios.get('http://localhost:8091/api/beranda-test', {
          params: {
            currentPage: this.currentPage,
            itemsPerPage: this.itemsPerPage
          }
        });
        const newPertanyaan = response.data;

        if (newPertanyaan.length > 0) {
          this.pertanyaanList = [
            ...this.pertanyaanList,
            ...newPertanyaan];
          this.currentPage++;
          if (this.pertanyaanList.length >= 45) {
            this.noMoreData = true;
          }

        } else {
          // Tidak ada data baru, berhenti memuat
          this.noMoreData = true;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },

    handleScroll() {
      if (this.noMoreData) {
        // Jika tidak ada lagi data untuk dimuat, hentikan pemrosesan
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 300 && !this.loading) {
        // Memuat data tambahan saat mendekati bagian bawah halaman
        this.fetchPertanyaanData();
      }
    },

    lihatKomen(coy) {
      const element = document.getElementById(coy)
      if (element.ariaValueText === "close") {
        element.classList.remove("max-h-0")
        element.ariaValueText = "open"
        element.classList.add("max-h-screen")

      } else if (element.ariaValueText === "open") {
        element.classList.remove("max-h-screen")
        element.classList.add("max-h-0")
        element.ariaValueText = "close"
      }
    },
    async postKomentar(pertanyaanId) {
      try {
        const response = await axios.post('http://localhost:8091/api/komentar', {
          deskripsi: this.komen[pertanyaanId],
          idPertanyaan: pertanyaanId,
        }, {
          headers: {
            'X-API-TOKEN': `token14`
          }
        }).then(response => {
          console.log(response.data);
          this.showNotificationMessage('Pertanyaann berhasil terkirim', 'success');
        }).catch(error => {
          console.error(error);
          this.showNotificationMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
          if (error.response) {
            this.errors = error.response.data.errors;
            this.showNotificationMessage(this.errors, 'error');
          }
        })
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }

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
  
<style scoped>
.buffering-indicator {
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
  margin-top: 10px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.notification-slide-enter-active,
.notification-slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.5s ease;
}

.notification-slide-enter,
.notification-slide-leave-to {
  transform: translateX(50%);
  opacity: 0;
}</style>
  
  
  
  
  
  