<template>
	<div class="wrapper">
		<swiper :options="swiperOption" >
		    <!-- slides -->
		    <swiper-slide v-for="item in swiperList" :key="item.id">
		    	<img class="pic" :src="item.url" alt="">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				swiperOption: {
		          pagination: '.swiper-pagination',
		          loop: true,
		          autoplay: 3000,
		        },
		        swiperList: [ 
		        	{
		        		"id":"1",
		        		"url": "https://img1.qunarzz.com/p/tts9/1710/c3/5e3e39b378053402.jpg_r_640x420x90_83141679.jpg"
		        	},
		        	{
		        		"id":"2",
		        		"url": "https://img1.qunarzz.com/p/tts1/1710/bb/c6e9252911b72902.jpg_r_640x420x90_6e279bf2.jpg"
		        	},
		        	{
		        		"id":"3",
		        		"url": "https://img1.qunarzz.com/p/tts1/1710/24/b5119cbe6368b502.jpg_r_640x420x90_231197ba.jpg"
		        	}
		        ]
			}
		}
	}
</script>


<style lang="stylus" scoped>

	  .pic
	    width: 100%
</style>






















