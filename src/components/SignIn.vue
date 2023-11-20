<template>
    <section class=" bg-gray-900 body">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img class="w-12 h-12 mr-2" src="/image/tanya.png" alt="logo">
  
        </a>
        <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white signup">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="submitForm">
              <div>
                <label for="username" class="block mb-2 text-sm font-medium text-white">Username</label>
                <input v-model="formData.username" type="text" name="username" id="username"
                  class=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  placeholder="masukkan username" required>
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••"
                  class=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  required>
              </div>
  
              <button type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800">Login</button>
              <p class="text-sm font-light text-gray-500 ">
                Belum mempunyai Akun? <a href="signup" class="font-small text-blue-600 hover:underline ">Daftar dulu</a>
              </p>
              <!-- Add Google Sign In button here -->
              <button onclick="signInWithGoogle" id="my-signin2" type="button"
                class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover-bg-red-700 ">
                Login dengan Google
              </button>
  
            </form>
          </div>
        </div>
      </div>
    </section>
    <transition name="notification-slide">
  
      <div v-if="showNotification && notificationType === 'success'"
        class="overflow-hidden fixed top-6 right-6  space-y-4 bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
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
        class="overflow-hidden fixed top-6 right-6 space-y-4 bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30 "
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
  
    <div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    mounted() {
      console.log(this)
    },
    data() {
      return {
        formData: {
          username: '',
          password: '',
        },
        showNotification: false,
        notificationType: '',
        notificationMessage: '',
        notifGagal: ''
      };
    },
    methods: {
      submitForm() {
        // Kirim permintaan POST ke backend menggunakan Axios
        axios.post('http://localhost:8091/api/auth/user', this.formData)
          .then(response => {
            console.log(response.data);
            this.showNotificationMessage('Berhasil Login', 'success');

            localStorage.setItem('token', response.data.data.token);

            setTimeout(() => {
              this.$router.push('/');
            }, 6000);
          })
          .catch(error => {
            console.error(error);
            this.showNotificationMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
            if (error.response) {
  
              this.errors = error.response.data.errors;
              this.showNotificationMessage(this.errors, 'error');
            }
          });
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
  };
  </script>
  
  
  <style scoped>
  .body {
    background-color: #374151;
    overflow: hidden;
  }
  
  .signup {
    display: flex;
    justify-content: center;
  }
  
  .notification-slide-enter-active,
  .notification-slide-leave-active {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.5s ease;
  }
  
  .notification-slide-enter,
  .notification-slide-leave-to {
    transform: translateX(50%);
    opacity: 0;
  }
</style>