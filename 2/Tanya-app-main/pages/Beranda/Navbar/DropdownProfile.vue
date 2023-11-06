<template>
<div>
    <div id="dropdownAvatar" class="z-10 absolute w-[300%] top-12 hidden text-gray-400 bg-gray-600 divide-y divide-gray-100 rounded-lg shadow w-[calc(100% - 2rem)] bg-gray-700 divide-gray-600">
        <ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownAvatarNameButton">
            <li>
                <div class="border-b-2 border-gray-600">
                    <a class="block px-4 py-2 hover:bg-gray-600 hover:text-gray-200">
                        <img src="/image/esa.png" alt="" class="w-12 mb-1 h-12 rounded-full">
                        Maulana Akbar
                    </a>
                </div>
            </li>
            <li>
                <a class="block px-4 py-2 font-light hover:bg-gray-600 hover:cursor-pointer hover-text-gray-200">Setting</a>
            </li>
            <li>
                <a class="block px-4 py-2 font-light hover:bg-gray-600 hover:cursor-pointer hover-text-gray-200">Keluar</a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Dropdown",
    mounted() {
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
}
</script>
