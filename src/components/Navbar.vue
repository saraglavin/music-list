<template>
  <div class="navbar">
    <nav>
        <img src="@/assets/ninja.png" alt="Logo">
        <h1>
            <router-link :to="{ name: 'home' }">Music Ninjas</router-link>
        </h1>
        <div class="links">
            <div  v-if="user">
              <router-link :to="{ name: 'createPlaylist' }">Create playlist</router-link>
                <button @click="handleClick" >Log out</button>
            </div>
            <div v-else>
                <router-link class="btn" :to="{ name: 'signup'}" v-if="!user">Sign up</router-link>
                <router-link class="btn" :to="{ name: 'login'}"  v-if="!user">Log in</router-link>
            </div>
            
        </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default {
    setup() {
  const { logout , error } = useLogout()
  const router = useRouter()
  const { user } = getUser()
    console.log(user.value);

  const handleClick = async () => {
      await logout()
      if(!error.value) {
        console.log('User logged out');
        router.push({ name: 'home'})
      }
  }

  return { handleClick , error , user }
 }

}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
</style>