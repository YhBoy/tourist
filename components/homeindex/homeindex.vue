<template>
<div class="homeindex">
	<header-top></header-top>
    <swiper-components></swiper-components>
    <home-icons></home-icons>
    <recommend-com></recommend-com>
    <home-weekend></home-weekend>
</div>
</template>

<script>
import HeaderTop from '../header/header'
import SwiperComponents from '../swiper/swiper'
import HomeIcons from '../homeicons/homeicons'
import RecommendCom from '../recommend/recommend'
import HomeWeekend from '../weekend/weekend'
import CityHome from '../city/city'




export default{
components:{
	HeaderTop,
    SwiperComponents,
    HomeIcons,
    RecommendCom,
    HomeWeekend,
    CityHome
}
}
</script>

<style lang="stylus" scoped>
	
</style>





