<template>
	<div>
		<div class="recommend-title">路由</div>
		<ul>
			<router-link tag="li" :to="'/detail/'+item.id" :key="item.id" class="item border-bottom" v-for="item in recommendList">
				
				<img class="item-img" :src="item.url" alt="">
				
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>


</template>

<script>
	export default{
		data(){
			return {
				recommendList: [
					{
						id:"0",
						url: "http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg",
						title: "大唐芙蓉园",
						desc : "唐芙蓉园大唐芙蓉园大唐芙蓉园"

					},
					{
						id:"1",
						url: "http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg",
						title: "大唐芙蓉园",
						desc : "唐芙蓉园大唐芙蓉园大唐芙蓉园"

					}


				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.recommend-title
	  line-height: 0.4rem
	  background: #ccc
	  text-indent: 0.2rem 
	  margin-top: 0.1rem
	.item
	  display: flex
	  height: 1.9rem
	  .item-img
	    width: 1.7rem
	    height: 1.7rem
	    padding: 0.1rem
	  .item-info
	    display: flex
	    flex-direction: column 
	    padding: 0.1rem
	    .item-title
	      line-height: 0.54rem
	      font-size: 0.32rem
	      
	    .item-desc
	      line-height: 0.4rem
	      color: #999
	      
		.item-button
		  margin-top: 0.2rem
		  background: #ff9300
		  padding: 0 0.1rem
		  border-radius: 3px
		  color: #fff
		  width: 50%
	 
</style>

























