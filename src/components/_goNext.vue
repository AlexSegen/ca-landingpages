<template>
<a class="lp_btn-next-section shake-vertical" :href="'#'+goto" v-smooth-scroll="{ duration: 1000, offset: -50 }">
    <i class="fa  icon-down" :class="{'fa-chevron-down': !goup, 'fa-chevron-up': goup}" aria-hidden="true"></i>
    <i class="fa  icon-down" :class="{'fa-chevron-down': !goup, 'fa-chevron-up': goup}" aria-hidden="true"></i>
</a>
</template>

<script>
export default {
    name: 'GoNext',
    props:['goto', 'goup']

}
</script>

<style>

</style>
