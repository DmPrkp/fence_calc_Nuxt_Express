<template>
  <div>
    <v-container>
    <h1 class="display-1 mb-2 ml-5 mt-5 font-weight-black">fance calc</h1>
    <h3
      class="font-weight-light mb-4"
    >сайт для расчета материалов, инструментов и малоценки нобходимых для строительства огражения</h3>
    </v-container>
    <div class="cutImg bgImgDiv">
      <img
        id="wallImg"
        src="https://images.pexels.com/photos/2042161/pexels-photo-2042161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Image"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cutImg {
    overflow: hidden;
}

.bgImgDiv {
    height: 800px;
}

#wallImg {
  width: 100%;
  animation: scrolling 30s ease-out infinite;
}

@keyframes scrolling {
    0% {
        margin-top: -30%
    }

    50% {
        margin-top: -20%    
    }

    100% {
        margin-top: -30%    
    }
}
</style>