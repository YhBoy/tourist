<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import DetailBanner from "./detailbanner/detailbanner"
	import DetailHeader from "./detailheader/detailheader"
	import DetailList from "./list/list"
	export default{
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return{
				list: [
					{
						title: "成人票",
						children: [
							{
								title: '成人票一馆联票',
								children : [
									{
										title: '成人票一馆1票'
									},
									{
										title: '成人票一馆2票'
									}
								]
							},
							{
								title: '成人票二馆联票'
							}
						]
					},
					{
						title: "学生票"
					},
					{
						title: "儿童票"
					},
					{
						title: "特惠票"
					}

				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.content
	  height: 30rem
</style>







