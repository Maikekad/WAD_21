<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to your Vue.js App"/>
        <MyComponent msg="Welcome to the lab..."/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        MyComponent
    },
}
</script>
