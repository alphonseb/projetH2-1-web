<template>
    <div id="app">
        <div id="nav">
            <!-- La navigation se faire avec des router-link, c'est comme des a, mais pour vue -->
            <!-- on met dans le to le path renseigner dans le fichier router.js -->
            <!-- les composants changeront dans le router view, donc on met le footer et nav autour  -->
            <!-- comme c'est le cas ici si ce n'est qu'il faut adapter -->
            <!-- quand le nav/footer devra ne pas appraitre, on mettra des v-if en fonction de la route -->
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
}
</style>
