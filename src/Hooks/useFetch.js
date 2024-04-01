import { ref } from 'vue';
import axios from 'axios';

function useFetch() {
    const responseData = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    async function fetchData(url) {
        isLoading.value = true
        try {
            const data = await axios.get(url)
            responseData.value = await data.data
        } catch (e) {
            error.value = e
        } finally {
            isLoading.value = false
        }
    }

    return{
        fetchData,
        isLoading,
        responseData,
        error
    }
}

export default useFetch
