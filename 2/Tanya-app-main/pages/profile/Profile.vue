<template>
    <div>
        <div class="flex container mt-5 ml-5">
        <div class="flex w-3/4 ">

          <div class="w-36 h-36 relative overflow-hidden rounded-full">
            <img
              class="w-auto h-auto object-center"
              src="../../asset/img/IMG_0777.jpg"
              alt=""
              style="margin-top: -10px;"
            />
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <img src="/asset/img/pen.png" alt="Logo" class="w-16 h-16 cursor-pointer" />
            </div>
            
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <img src="/asset/img/IMG_0777.jpg" alt="" class="w-16 h-16 cursor-pointer" id="imgSwap" />
            </div>
            

            
          </div>
    
          <div class="font-medium dark:text-white">
            <div>Ananda Mega P</div>
            <a
              href="#"
              class="text-sm text-gray-500 dark:text-grey-500 hover:underline"
              >Tambahkan Kredensial Profile</a
            >
            <div>
              <a
                href="#"
                class="font-light text-grey-600 dark:text-grey-500 hover:underline"
                >0 Pengikut</a
              >
              <a
                href="#"
                class="font-light text-grey-600 dark:text-grey-500 hover:underline"
                >0 Mengikuti</a
              >
            </div>
          </div>
        </div>

        <div class="flex w-1/2 ml-5 mt-5">
          <div class="flex-wrap">
            <div>
              <h5 class="text-xl">kredential dan sorotan</h5>
              <a href="" class="text-base mt-2 flex hover:underline"><img src="/asset/img/pen.png" alt="icon pekerjaan" class="w-6 h-auto mr-1">Tambahkan Pekerjaan</a>
            </div>
            <div>
              <a href="" class="text-base mt-2 flex hover:underline"><img src="/asset/img/pen.png" alt="icon pekerjaan" class="w-6 h-auto mr-1">Tambahkan Pekerjaan</a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex container ml-5 ">
        <div class="flex w-3/4 ">
          
          <div
          class="ml-5 text-sm font-medium text-start grid-rows-2 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
          >
          <a
          href="#"
          class="font-medium text-grey-600 dark:text-grey-500 hover:underline justify-start "
          >Tuliskan Deskripsi Anda</a
        >
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Profile</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
              >Dashboard</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Settings</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Contacts</a
            >
          </li>
          <li>
            <a
              class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
              >Disabled</a
            >
          </li>
        </ul>
        </div>
        </div>
        <div class="flex w-1/4 pl-3">
          <div class="container ml-3 flex">
            <h1>P bang anjay </h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style>
#imgSwap:hover {
  content: url('/asset/img/pen.png');
}
</style>