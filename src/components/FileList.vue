<template>
    <el-container>
        <el-header style="height: 30px;
            box-sizing: border-box;
            background-color: #409EFF;
            color: #F2F6FC;
            line-height: 30px;
            font-size: 13px;
            text-align: left;
            padding: 0px 12px;"><i class="el-icon-tickets"></i>&nbsp;&nbsp;列表</el-header>
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "FileList",
    
}
</script>

