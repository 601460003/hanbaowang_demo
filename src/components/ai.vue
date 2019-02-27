<template>
  <div class="leftnav">
    <ul>
      <li>
        <i class="icon iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-zhubaoshipin"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script >
  export default {
    name: "ai"
  }
</script>

<style>
  .leftnav {
    float: left;
    width: 4%;
    text-align: center;
    font-size: 10px;
    background: #1d8ce0;
    color: #fff;
    height: 100%;
  }
  .leftnav ul {
    margin: 0;
    padding: 0;
  }
  .leftnav ul li {
    list-style-type: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }
  .iconfont {
    font-size: 24px;
  }
</style>
