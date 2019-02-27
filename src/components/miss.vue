<template>
  <div class="pos">
    <el-row>
      <!--左边7等份-->
      <el-col :span="7" class="pos-order">
        <el-tabs>
          <!--点餐-->
          <el-tab-pane label="点餐">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称">
              </el-table-column>
              <el-table-column prop="count" label="数量" width="130">
              </el-table-column>
              <el-table-column prop="price" label="金额" width="130">
              </el-table-column>
              <el-table-column label="操作" width="150" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="deletegoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addgoods(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <!--总数-->
          <div class="totalDiv">
            <small>数量：</small>
            <strong>{{tocount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
            <small>总计：</small>
            <strong>{{total}}</strong> 元
          </div>
          <!--三个按钮-->
          <div class="order-btn">
            <el-button type="warning">挂单</el-button>
            <el-button type="danger" @click="deleanything">删除</el-button>
            <el-button type="success">结账</el-button>
          </div>
          <!--外卖-->
          <el-tab-pane label="外卖">外卖</el-tab-pane>
          <!--挂单-->
          <el-tab-pane label="挂单">挂单</el-tab-pane>
        </el-tabs>
      </el-col>
      <!--右边17等分-->
      <el-col :span="17">
        <!--标题-->
        <div class="often-goods">
          <div class="title">
            常用商品
          </div>
          <!--列表区-->
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addgoods(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <!--儿童套餐区-->
        <div class="goods-type">
          <el-tabs>
            <!--汉堡汉堡-->
            <el-tab-pane label="汉堡">
              <ul class='cookList'>
                <li v-for="goods in type0Goods" @click="addgoods(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <!--小吃区-->
            <el-tab-pane label="小吃">小吃</el-tab-pane>
            <el-tab-pane label="饮料">饮料</el-tab-pane>
            <el-tab-pane label="儿童套餐">儿童套餐</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <!--汉堡 儿童套餐区-->
    <div class="block">
      <el-carousel height="305px">
        <el-carousel-item v-for="item in oppo" :key="item">
          <img :src="item.img"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'miss',
    data() {
      return {
        total: 0,
        tocount: 0,
        tableData: [
          //   {
          //   goodsName: '可口可乐',
          //   price: 8,
          //   count: 1
          // }, {
          //   goodsName: '香辣鸡腿堡',
          //   price: 15,
          //   count: 1
          // }, {
          //   goodsName: '爱心薯条',
          //   price: 8,
          //   count: 1
          // }, {
          //   goodsName: '甜筒',
          //   price: 8,
          //   count: 1
          // }
        ],
        //数据
        oftenGoods: [
          {
            goodsId: 1,
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsName: '可乐大杯',
            price: 10
          }, {
            goodsId: 8,
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsName: '香脆鸡柳',
            price: 17
          }
        ],
        //数据
        type0Goods: [
          {
            goodsId: 1,
            goodsImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550334878306&di=405accea4b35ea642427dd521752b2de&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fnuomi%2Fpic%2Fitem%2Fa8ec8a13632762d03012cff7a7ec08fa513dc64e.jpg",
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550334909133&di=1208c30e88f8a36f15b5f3fe40a2661d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170902%2F4e00c79e58074a678a9577ae2c727131.jpeg",
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550334909121&di=8870326a63e5d279d970bb415caaee88&imgtype=0&src=http%3A%2F%2Fkfc.cache.xixik.net%2Fc%2Fhbw%2Fxixik_hbw_e7a8bb891f613f8c.jpg",
            goodsName: '和风汉堡',
            price: 15
          }
        ],
        //数据
        oppo: [{img: 'http://img0.imgtn.bdimg.com/it/u=3511570210,4079858814&fm=26&gp=0.jpg'},
          {img: 'http://img1.imgtn.bdimg.com/it/u=1892853142,871488465&fm=26&gp=0.jpg'},
          {img: 'http://img4.imgtn.bdimg.com/it/u=4227083020,1479541078&fm=26&gp=0.jpg'},
          {img: 'http://img3.imgtn.bdimg.com/it/u=1276690549,3881871540&fm=26&gp=0.jpg'}
        ],
      }
    },
    //看到的页面顺序实现的第一个方法增加到菜单中
    methods: {
      addgoods(goods) {
        let caoji = true;
        this.tableData.forEach(cao => {
          if (cao.goodsName == goods.goodsName) {
            cao.count++;
            caoji = false;
          }
        });
        if (caoji) {
          let diaoji = {count: 1, goodsName: goods.goodsName, price: goods.price};
          this.tableData.push(diaoji)
        }
        this.getallmoney();
      },
      //顺着页面构造走 实现第二部删除元素的方法
      deletegoods(e) {
        let b = [];
        this.tableData.forEach(a => {
          if (a.goodsName == e.goodsName) {
            if (a.count > 1) {
              a.count--;
              b.push(a)
            }
          } else {
            b.push(a)
          }
        })
        this.tableData = b;
        this.getallmoney();
      },
      // 接着实现第三部增加数量的方法
      // addcount(ad) {
      //   this.tableData.forEach(add => {
      //     if (add.goodsName == ad.goodsName) {
      //       add.count++;
      //     }
      //   })
      //   this.getallmoney();
      // },
      getallmoney() {
        this.total = 0;
        this.tocount = 0;
        this.tableData.forEach(iop => {
          this.total += iop.price * iop.count;
          this.tocount += iop.count;
        })
      },

      deleanything() {
        this.tableData = [];
        this.tocount = 0;
        this.total = 0
      }

    },
  }
</script>

<style scoped>
  .pos {
    font-size: 16px;
    background-color: #F9FAFC;
  }

  .pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
  }

  .order-btn {
    margin-top: 10px;
    text-align: center;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
    font-size: 16px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    cursor: pointer;
  }

  .goods-type {
    clear: both;
  }

  .o-price {
    color: red;
  }

  .often-goods-list {
    height: auto;
    overflow: hidden;
    padding-bottom: 10px;
    background-color: #F9FAFC;
  }

  .cookList li {
    list-style: none;
    width: 19%;
    border: 1px solid #E5E9F2;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 5px;
    cursor: pointer;
  }

  .cookList li span {
    display: block;
    float: left;
  }

  .foodImg {
    width: 50%;
  }

  .foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .totalDiv {
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
    border-bottom: 1px solid #E5E9F2;
    padding: 10px;
  }

  .block {
    width: 500px;
    position: absolute;
    top: 360px;
    right: 400px;
    text-align: right;

  }
</style>
