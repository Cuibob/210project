<template>
	<div class="page-book">
		<mt-field class="b-title" placeholder="请输入标题"></mt-field>
		<div class="b-ueditor">
			<div class="u-header">
				<mt-badge size="small" color="#ccc">H1</mt-badge>
				<mt-badge size="small" color="#ccc">H2</mt-badge>
				<mt-badge size="small" color="#ccc">H3</mt-badge>
				<mt-badge size="small" color="#ccc">H4</mt-badge>
			</div>
			<mt-field type="textarea" rows="5" placeholder="请输入内容"></mt-field>
		</div>
		<mt-button type="primary" size="large">保存</mt-button>
	</div>
</template>

<script>
import '../../style/book.scss'

export default {
}
</script>