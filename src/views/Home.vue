<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p @click="testFor">我的</p>
    <p>世界</p>
    <template v-for="(item, index) in forArr" :key="index">
      <!-- <p :ref="setItemRef">{{item.name}}</p> -->
    </template>
    <template v-for="(item, index) in itemRefs" :key="index">
      <p>{{index}}</p>
    </template>
    <p>{{count}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

import { onBeforeUpdate, onUpdated, ref, reactive } from 'vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
    //   console.log("testFor", this.itemRefs)
    // },
    // setItemRef(el) {
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
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate", /* itemRefs ,*/ count)
      // itemRefs = []
    })
    onUpdated(() => {
      console.log("onUpdated", /* itemRefs ,*/ count)
    })
    return {
      count,
      testFor,
      itemRefs,
      setItemRef
    }
  },
  // beforeUpdate() {
  //   console.log("beforeUpdate", arguments)
  //   console.log(this.itemRefs)
  //   // this.itemRefs = []
  // },
  // updated() {
  //   console.log("updated", arguments)
  //   console.log(this.itemRefs)
  // }
}

</script>
