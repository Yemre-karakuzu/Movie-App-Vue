import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);
const routes = [{
    path: '/details',
    props: true,
    name: "details",
    component: () =>
        import ("../components/MovieCard/CardDetail.vue")
}, {
    path: '/',
    props: true,
    name: "Home",
    component: () =>
        import ("../views/Home.vue")
}];

const router = new VueRouter({
    routes
});


export default router;