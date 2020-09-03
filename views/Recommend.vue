<template>
    <div class="ah_blcok">
        <div class="container">
            <h2 class="ah_title">
                <span>核市推荐111</span>
            </h2>
            <div class="loadingPlaceholder wrapper disabled" style="background:transparent">

            </div>
        </div>
    </div>
</template>
<style scoped>
.ah_blcok{
    background-color: #fcfcfc;
    padding: 1.785rem 0;
    font-family: PingFangSC,Open Sans,Helvetica Neue,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #323232;
    text-align: left;
}
.container{
    width: 100%;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    margin-right:auto ;
    margin-left:auto ;
}
.ah_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.2rem;
    font-weight: 600;
    line-height: 1;
    margin: 0 0 1.875rem;
    color: #323323;
}
.loadingPlaceholder{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.16rem;
    opacity: 0.7;
}
.wrapper{
    display: block;
    height: auto;
    margin: 0;
}
.disabled{
    height: auto;
    opacity: 1;
}
</style>