// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div>
        <div class="container mx-auto max-w-xl my-5 text-center bg-slate-300">
                <input type="file" accept="image/*" class=" p-2 w-full" ref="myFile">
                <button
                    class="my-10 font-inter bg-sky-400 px-5 py-2 rounded-full mx-auto text-white font-semibold block hover:bg-sky-800 active:bg-sky-950 focus:ring focus:ring-sky-300" @click="upload">submit</button>
                    <CloudImage path="folder/myfile.png"/>
        </div>
    </div>
</template>

<script >
import { storage } from "../storage/firebase";
import { ref , uploadBytes } from "firebase/storage";
import CloudImage from '../components/CloudImage.vue';
export default {
    setup() {
        return {
        }
    },
    components:{
        CloudImage
    },
    methods: {
        upload: function() {
            console.log(this.$refs.myFile.files[0])
            const storageRef = ref(storage , 'folder/orang.png')
            uploadBytes(storageRef , this.$refs.myFile.files[0])
            .then((snapshot) =>{
                console.log("berhasil")
                console.log(snapshot)
            })
        },
    }
}
</script>

<style lang="scss" scoped></style>