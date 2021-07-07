<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p @click="testFor">我的</p>
    <p>世界</p>
    <!-- <template v-for="(item, index) in forArr" :key="index">
      <p :ref="setItemRef">{{item.name}}</p>
    </template> -->
    <template v-for="(item, index) in itemRefs" :key="index">
      <p>{{index}}</p>
    </template>
    <p>{{count}}</p>
    <HiWorld></HiWorld>
    <HelloWorld msg="Hello World!"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

import {
  onMounted,
  onUpdated,
  onBeforeUpdate,
  ref, // 定义响应式基本类型
  reactive, // 定义响应式对象
  defineAsyncComponent, // 异步组件
} from 'vue'
const HiWorld = defineAsyncComponent({
  loader: () => import("@/components/HiWorld.vue"),
})

export default {
  name: 'Home',
  components: {
    HiWorld,
    HelloWorld,
  },
  data() {
    return {
      forArr: [
        {name: "测试v-for1"},
        {name: "测试v-for2"},
        {name: "测试v-for3"},
      ], 
      // itemRefs: [],
    }
  },
  methods: {
    // testFor() {
    //   console.log("testFor", this.$refs.helloworld)
    // },
    // setItemRef1(el) {
    //   console.log("setItemRef", el, arguments)
    //   if(el) {
    //     this.itemRefs.push(el)
    //   }
    // }
  },
  setup() {
    console.log("setup", arguments)
    // let itemRefs = {}
    let itemRefs = reactive({})
    let count = ref(2)
    const setItemRef = el => {
      // console.log("setItemRef", el, itemRefs)
      if (el) {
        // itemRefs.push(el)
        itemRefs[el.innerText] = el
      }
    }
    const testFor = () => {
      count.value = 3;
    }
    onMounted(() => {
      console.log("onBeforeUpdate", /* itemRefs ,*/ /* count, */)
    }),
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate", /* itemRefs ,*/)
      // itemRefs = []
    })
    onUpdated(() => {
      console.log("onUpdated", /* itemRefs ,*/)
    })
    return {
      count,
      testFor,
      itemRefs,
      setItemRef
    }
  },
}
</script>
