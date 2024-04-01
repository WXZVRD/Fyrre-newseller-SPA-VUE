import { ref } from 'vue';
import axios from 'axios';

function useFetch() {
    const responseData = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    async function fetchData(url) {
        isLoading.value = true
        try {
            const data = await axios.get(url, { baseURL: 'https://fyrre-newseller-spa-cntxj1skf-wxzvrds-projects.vercel.app/' })
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
