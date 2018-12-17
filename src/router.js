import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'

Vue.use(Router)

/*
Ici on ajoute nos route, c'est la que la navigation ce se fait en fonction du composant
pour les routes: path: 
  ce qu'il y aura dans l'url
  name: nom de la route (= non du composant en gros)
  component: vous importez votr component,
Pour ajouter une route vous reprenez la syntaxe que je laisserai
/!\ IMPORTANT /!\ les pages vont dans le dossier views,
le dossier component servira pour les composants utiliser dans les views
Suite sur App.vue
*/
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // Pour dev mettez votre composant dans le path / (la racine du site)
      path: '/',
      name: 'landing',
      component: Landing
    }
  ]
})
