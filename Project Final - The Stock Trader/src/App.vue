<template>
    <div class="container">
        <app-header></app-header>

        <div class="row">
            <div class="col-xs-12">
                <transition :name="transitionName" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header,
            transitionName: 'slide-left'
        },
        created() {
            this.$store.dispatch("fetchStocks");
        },
        watch: {
            '$route'(to, from) {
                this.transitionName = to.name < from.name ? 'slide-right' : 'slide-left';
            }
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-left-enter-active {
        animation: slide-in-right 200ms ease-in-out forwards;
    }

    .slide-left-leave-active {
        animation: slide-out-left 200ms ease-in-out forwards;
    }

    .slide-right-enter-active {
        animation: slide-in-left 200ms ease-in-out forwards;
    }

    .slide-right-leave-active {
        animation: slide-out-right 200ms ease-in-out forwards;
    }

    @keyframes slide-in-left {
        from {
            transform: translateX(-400px) scale(0.8);
            opacity: 0;
        }
        to {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        from {
            transform: translateX(400px) scale(0.8);
            opacity: 0;
        }
        to {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
    }

    @keyframes slide-out-left {
        from {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
        to {
            transform: translateX(-400px) scale(0.8);
            opacity: 0;
        }
    }

    @keyframes slide-out-right {
        from {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
        to {
            transform: translateX(400px) scale(0.8);
            opacity: 0;
        }
    }
</style>
