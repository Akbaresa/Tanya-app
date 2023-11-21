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
                <ul
                    class="flex flex-col p-4 md:p-0  font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                    <div class="flex">
                        <li>
                            <div class="mr-3 pr-3">
                                <div href="#" to="/"
                                    class="block mt-1 text-white cursor-pointer bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                                    aria-current="page">
                                    <img src="/image/home linear.png" class="w-7 " alt="">
                                </div>
                            </div>
                        </li>

                        <li>
                            <div to="/modul/content">
                                <div class="group fixed">
                                    <img src="/image/article white.png"
                                        class="w-9 group-hover:hidden cursor-pointer group-hover:border-b-2 group-hover:border-white transition duration-200 ease-in-out"
                                        alt="">
                                    <img src="/image/artice active.png"
                                        class="w-9 inset-0 opacity-0 cursor-pointer group-hover:opacity-100 " alt="">
                                </div>
                            </div>
                        </li>
                    </div>

                    <div class="flex">
                        <li>
                            <div class="flex ml-3 pl-3">
                                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                    aria-expanded="false"
                                    class="md:hidden text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4  focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1 ml-3">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                                <div class="relative hidden md:block">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span class="sr-only">Search icon</span>
                                    </div>
                                    <div>
                                        <input type="text" id="searchInput"
                                            class="block w-full p-2 pl-10 text-sm  border  rounded-lg  focus:ring-blue-500 text-white bg-gray-700 border-gray-600 placeholder-gray-400  focus:border-blue-500"
                                            placeholder="Cari...">
                                        <div id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>


                    <li class="relative">
                        <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar"
                            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600"
                            type="button">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-10 h-10 rounded-full" src="/image/esa.png" alt="user photo">
                        </button>


                        <div id="dropdownAvatar"
                            class="z-10 absolute w-[300%] top-12 hidden text-gray-400 bg-gray-600 divide-y divide-gray-100 rounded-lg shadow w-[calc(100% - 2rem)] bg-gray-700 divide-gray-600 border-2 border-gray-600">
                            <ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownAvatarNameButton">
                                <li>
                                    <RouterLink to="/profile">
                                        <div class="border-b-2 border-gray-600">
                                            <a class="block px-4 py-2 hover:bg-gray-600 hover:text-gray-200">
                                                <img src="/image/esa.png" alt="" class="w-12 mb-1 h-12 rounded-full">
                                                {{ userData.username }}
                                            </a>
                                        </div>
                                    </RouterLink>
                                </li>
                                <li>
                                    <a
                                        class="block px-4 py-2 font-light hover:bg-gray-600 hover:cursor-pointer hover-text-gray-200">Setting</a>
                                </li>
                                <li>
               
                                        <a type="button" @click="logout"
                                            class="block px-4 py-2 font-light hover:bg-gray-600 hover:cursor-pointer hover-text-gray-200">Keluar</a>
                                    
                                </li>
                            </ul>
                        </div>
                    </li>

                    <div id="app">
                        <div class="flex ms-0 h-8 mt-1">
                            <button type="button"
                                class="text-white pl-3 focus:ring-4  font-medium rounded-lg text-sm text-center inline-flex items-center bg-blue-600 ps-2 p-3 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none px-5 py-2.5 "
                                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                                @click="toggleModal">
                                Tambah Pertanyaan
                                <img src="/image/Plus.png" class="flex pl-3 " alt="">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </button>

                            <!-- Main modal -->
                            <div class="fixed overflow-hidden overflow-y-auto top-20 left-0 right-0 flex justify-center items-center"
                                v-show="showModal"  aria-hidden="true">
                                <!-- Modal content -->
                                <div
                                    class="relative rounded-lg shadow bg-gray-700 w-full max-w-2xl border border-solid border-gray-500 p-4">
                                    <button @click="closeModal" type="button"
                                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent   rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                                        data-modal-hide="authentication-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="px-6 py-6 lg:px-8">
                                        <h3 class="mb-4 text-xl font-medium text-white">Tambah Pertanyaan</h3>
                                        <form class="space-y-6" action="#" @submit.prevent="postDataToApi">
                                            <div class="">
                                                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-white"
                                                    id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                                    <li class="mr-2" role="presentation">
                                                        <button @click="setActiveTab('profile')"
                                                            :class="{ 'text-blue-400': activeTab === 'profile', 'border-blue-700': activeTab === 'profile' }"
                                                            id="profile-tab" :aria-selected="activeTab === 'profile'"
                                                            class="inline-block p-4 border-b-2 hover:text-blue-400 hover:border-blue-700  rounded-t-lg "
                                                            data-tabs-target="#profile" type="button" role="tab">Tambah
                                                            Pertanyaan</button>
                                                    </li>
                                                    <li class="mr-2" role="presentation">
                                                        <button @click="setActiveTab('dashboard')"
                                                            :class="{ 'text-blue-400': activeTab === 'dashboard', 'border-blue-700': activeTab === 'dashboard' }"
                                                            id="dashboard-tab" role="tab"
                                                            :aria-selected="activeTab === 'dashboard'"
                                                            class="inline-block p-4 border-b-2  rounded-t-lg hover:border-blue-700 hover:text-blue-400 "
                                                            data-tabs-target="#dashboard" type="button">Informasi
                                                            Tambahan</button>
                                                    </li>
                                                </ul>
                                                <div class=" p-4 rounded-lg  bg-gray-700 " v-if="activeTab === 'profile'"
                                                    id="profile-content" role="tabpanel" aria-labelledby="profile-tab">
                                                    <input name="header" autocomplete="off" type="text" id="header"
                                                        v-model="postData.header"
                                                        class=" mt-3 border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 "
                                                        placeholder="Awali Pertanyaan Anda" required>
                                                </div>
                                                <div class=" p-4 rounded-lg  bg-gray-700" v-if="activeTab === 'dashboard'"
                                                    id="dashboard-content" role="tabpanel" aria-labelledby="dashboard-tab">
                                                    <div
                                                        class="w-full mb-4 border  rounded-lg  bg-gray-700 border-gray-600">
                                                        <div
                                                            class="flex items-center justify-between px-3 py-2 border-b border-gray-600">
                                                            <div
                                                                class="flex flex-wrap items-center  sm:divide-x divide-gray-600">
                                                                <div class="flex items-center space-x-1 sm:pr-4">
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer  text-gray-40 hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 12 20">
                                                                            <path stroke="currentColor"
                                                                                stroke-linejoin="round" stroke-width="2"
                                                                                d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                                                        </svg>
                                                                        <span class="sr-only">Attach file</span>
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 16 20">
                                                                            <path
                                                                                d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Embed map</span>
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <label for="imageInput" class=" text-gray-500 rounded cursor-pointer hover:text-white hover:bg-gray-600">
                                                                            <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 16 20">
                                                                            <path
                                                                                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                                            <path
                                                                                d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Upload image</span>
                                                                          </label>
                                                                          <input
                                                                            id="imageInput"
                                                                            type="file"
                                                                            class="hidden"
                                                                            ref="imageInput"
                                                                            @change="handleImageUpload"
                                                                            accept="image/*"
                                                                          />

                                                                        <!-- <input type="file" @change="handleImageUpload" accept="image/*"> -->
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 16 20">
                                                                            <path
                                                                                d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                                            <path
                                                                                d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Format code</span>
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Add emoji</span>
                                                                    </button>
                                                                </div>
                                                                <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                            viewBox="0 0 21 18">
                                                                            <path stroke="currentColor"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" stroke-width="2"
                                                                                d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                                                                        </svg>
                                                                        <span class="sr-only">Add list</span>
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Settings</span>
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                                                            <path
                                                                                d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Timeline</span>
                                                                    </button>
                                                                    <button type="button"
                                                                        class="p-2 text-gray-500 rounded cursor-pointer    hover:text-white hover:bg-gray-600">
                                                                        <svg class="w-4 h-4" aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                                                            <path
                                                                                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                                                        </svg>
                                                                        <span class="sr-only">Download</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <button type="button" data-tooltip-target="tooltip-fullscreen"
                                                                class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto    hover:text-white hover:bg-gray-600">
                                                                <svg class="w-4 h-4" aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                    viewBox="0 0 19 19">
                                                                    <path stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" stroke-width="2"
                                                                        d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                                                                </svg>
                                                                <span class="sr-only">Full screen</span>
                                                            </button>
                                                            <div id="tooltip-fullscreen" role="tooltip"
                                                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300  rounded-lg shadow-sm opacity-0 tooltip bg-gray-700">
                                                                Show full screen
                                                                <div class="tooltip-arrow" data-popper-arrow></div>
                                                            </div>
                                                        </div>
                                                        <div class="px-4 py-2 bg-gray-800 rounded-b-lg ">

                                                            <textarea id="editor" rows="8" v-model="postData.deskripsi"
                                                                class="block w-full px-0 text-sm text-gray-200  border-0 bg-gray-800 focus:ring-0  placeholder-gray-400"
                                                                placeholder="Tulis tambahan isi" required></textarea>

                                                                <div v-if="imagePreview">
                                                                    <img :src="imagePreview" alt="Preview" class="w-24 object-cover rounded" />
                                                                    <button @click="removeImagePreview" class="p-2 bg-red-500 text-white">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                                                          </svg>
                                                                    </button>
                                                                  </div>
                                                                <!-- <img src="/image/esa.png" alt="" class="w-12 mb-1 h-12 rounded-full"> -->
                                                        </div>
                                                    </div>
                                                    <!-- endInformasiTambahan -->
                                                </div>
                                                <!-- endtabcontent -->
                                            </div>
                                            <button type="submit"
                                                class="max-w-screen-sm ml-3 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600  focus:ring-blue-800">Tambahkan</button>
                                            <div class="text-sm font-medium mt-3 ">
                                                <a href="#" @click="closeModal"
                                                    class="hover:underline text-red-500">Batal</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
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
</template>

<script>
import axios from 'axios';
export default {

    name: "Pertanyaan",
    data() {
        return {
            activeTab: 'profile',
            showModal: false,
            postData: {
                header: '',
                deskripsi: ''
            },
            showNotification: false,
            notificationType: '',
            notificationMessage: '',
            notifGagal: '',
            userData: {},
            imagePreview: null,
            selectedImage: null,
        };
    },

    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
        closeModal() {
            this.showModal = false;
        },
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        async postDataToApi() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:8091/api/pertanyaan', this.postData, {
                    headers: {
                        'X-API-TOKEN': token
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        this.postData.header = '';
                        this.postData.deskripsi = '';
                        console.log('id pertanyaan '+ response.data.data.id)
                        this.uploadImage(response.data.data.id)
                        this.closeModal();
                        this.showNotificationMessage('Pertanyaann berhasil terkirim', 'success');

                    }).catch(error => {
                        console.error(error);
                        this.showNotificationMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
                        if (error.response) {

                            this.errors = error.response.data.errors;
                            this.showNotificationMessage(this.errors, 'error');
                        }
                    });
            } catch (error) {
                if (error.response) {
                    this.errors = error.response.data.errors;
                    this.showNotificationMessage(this.errors, 'error');
                }
                console.error('Error:', error);

            }
        },
        async logout() {
            try {
                const token = localStorage.getItem('token');

                // Kirim permintaan logout ke server
                await axios.delete('http://localhost:8091/api/auth/logout', {
                    headers: {
                        'X-API-TOKEN': token
                    }
                }).then(response => {
                    console.log(response.data)
                    localStorage.removeItem('token'),
                    this.showNotificationMessage('berhasil logout', 'success')
                    setTimeout(() => {
                        this.$router.push('/login');
                    },2000)
                }).catch(error)(error => {
                    console.error(error);
                    this.showNotificationMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
                    if (error.response) {

                        this.errors = error.response.data.errors;
                        this.showNotificationMessage(this.errors, 'error');
                    }
                });

            } catch (error) {
                // Tangani kesalahan jika ada
                // this.showNotificationMessage('gagal logout', 'error')

            }
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
        handleImageUpload(event) {
        const file = event.target.files[0];
  
        if (file) {
          // Membuat pratinjau gambar
          const imageUrl = URL.createObjectURL(file);
  
          this.imagePreview = imageUrl;
          this.selectedImage = file;
        }
      },
      removeImagePreview() {
        // Menghapus pratinjau gambar
        this.imagePreview = null;
        this.selectedImage = null;

          // Reset nilai input file
        const inputElement = this.$refs.imageInput;
        if (inputElement) {
            inputElement.value = null;
        }
      },

      async uploadImage(idPertanyaan) {
        const fileInput = this.$refs.imageInput;
      if (this.selectedImage) {
        console.log(this.selectedImage)
        const formData = new FormData();
        formData.append('gambar', fileInput.files[0]);
        const token = localStorage.getItem('token');

        try {
          const response = await axios.post(`http://localhost:8091/api/upload-gambar?pertanyaan=${idPertanyaan}`, formData, {
            headers: {
                'X-API-TOKEN': token,
            }
          });

          console.log('Gambar berhasil diunggah:', response.data);
          // Tambahkan logika lain yang diperlukan setelah unggah gambar berhasil
        } catch (error) {
          console.error('Error mengunggah gambar:', error);
          // Tambahkan logika lain yang diperlukan jika terjadi kesalahan
        }
      }
    },

    },

    mounted() {
        this.getUserData();
        // JavaScript code for handling the dropdown
        const dropdownButton = document.getElementById('dropdownUserAvatarButton');
        const dropdownMenu = document.getElementById('dropdownAvatar');

        dropdownButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
};
</script>

<style scoped>
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