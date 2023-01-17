<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div class="error" v-if="error">
        {{ error }}
    </div>
    <button>Log in</button>
  </form>
</template>

<script>
import  useLogin  from '@/composables/useLogin';
import { ref } from '@vue/reactivity';

export default {
    
    setup() {
        const { error, login } = useLogin()

        const email = ref('')
        const password = ref('')
        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if(!error.value) {
                console.log('user logged in');
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>