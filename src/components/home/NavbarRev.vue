<template>
    <div>
        <nav class="bg-gray-800 fixed bottom-0 w-full h-15 border border-b-gray-700">
                <HomePage /> 
        </nav>
    </div>
</template>

<script>
import { HomePage } from '../icons/HomePage.vue'
export default {
    components:{
        HomePage
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>