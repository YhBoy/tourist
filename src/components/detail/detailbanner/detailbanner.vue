<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="https://dimg04.c-ctrip.com/images/300e0q000000g7qjl6A46_C_500_280_Q90.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">大连圣亚海洋世界</div>
				<div class="banner-number banner-icon"><span class="iconfont ">&#xe65f;</span>39</div>
			</div>
			<common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
		</div>

	</div>
</template>

<script>
	import CommonGallary from "../../gallary/gallary"
	
	export default{
		data(){
			return {
				showGallary: false,
				imgs: [
					"https://dimg04.c-ctrip.com/images/300e0q000000g7qjl6A46_C_500_280_Q90.jpg",
					"https://dimg04.c-ctrip.com/images/300e0q000000g7qjl6A46_C_500_280_Q90.jpg"
				]
			}
		},
		components: {
			CommonGallary
		},
		methods: {
			handleBannerClick() {
				this.showGallary = true
			},
			handleClose(){
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
	  position: relative
	  
	  height: 0
	  color: #000
	  padding-bottom: 55%
	  .banner-img
	    width: 100%
	  .banner-info
	    display: flex
	    position: absolute
	    left: 0
	    right: 0
	    bottom: 0
	    color: #666
	    line-height: .6rem
	    background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))
	    .banner-title
	      flex: 1
	      font-size: 0.32rem
	      padding: 0.2rem
	    .banner-number
	      padding: 0 0.4rem
	      line-height: 0.32rem
	      height: 0.32rem
	      margin-top: 0.3rem
	      border-radius: 0.2rem
	      background: rgba(0,0,0,0.8)
	      font-size: 0.32rem
	      margin-right: 0.3rem
	      color: #fff
	      .banner-icon
	        font-size: 0.16rem
	        padding-right: 5px
	       
</style>




