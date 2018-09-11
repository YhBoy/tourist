<template>
	<div class="title">
		<p class="item-title">周末去哪儿</p>
		<div class="item" v-for="item in weekList">
			<img  class="item-img" :src="item.url" alt="">
			<p class="item-name">{{item.name}}</p>
			<p class="item-desc">{{item.desc}}</p>
		</div>
		
	</div>

</template>

<script>

	export default{
		data(){
			return{
				weekList : [
					{
						id:0,
						url: "http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg",
						name: "西安必游TOP10",
						desc: "寻长安梦，开启穿越的圆梦之旅"
					},
					{
						id:1,
						url: "http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg",
						name: "西安必游TOP10",
						desc: "寻长安梦，开启穿越的圆梦之旅"
					}

				]	
			}
		}
	}


</script>

<style lang="stylus" scoped>
	.item-title
	  background: #ccc
	  text-indent: 0.1rem
	  line-height: 0.54rem
	.item
	  padding: 0.1rem
	  .item-img
	    width: 100%
	  .item-name
	    color: #333
	    text-indent: 5px
	    padding: 0.1rem 0
	  .item-desc
	    color: #666
	    text-indent: 5px
	    
</style>








