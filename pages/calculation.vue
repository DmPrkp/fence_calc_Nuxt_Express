<template>
  <div>
    <transition name="fromLeft">
      <div>
        <h3 class="text-center mb-10">Определяем конструкцию ограждения и его длинну</h3>
        <v-row>
          <v-col col="12" lg="3">
            <transition name="fromLeft">
              <yourFence />
            </transition>
          </v-col>
          <v-col col="12" lg="9">
            <div v-if="isActive" >
              <transition name="fromLeft">
                <fenceType v-on:active="isActive=!isActive"/>                
              </transition>
            </div>
            <div v-else>
              <transition name="fromLeft">
              <tableOfLength v-on:back="isActive=!isActive"/>
              </transition>
            </div>            
          </v-col>
        </v-row>
      </div>
    </transition>    
  </div>
</template>

<script>
import yourFence from '../components/yourFence.vue';
import fenceType from '../components/fenceType.vue';
import tableOfLength from '../components/tableOfLength.vue';

export default {
  data: function() {
    return {      
      isActive: true
    }
  },
  components: {
    'yourFence': yourFence,
    'fenceType': fenceType,
    'tableOfLength': tableOfLength 
  }

}

</script>
