<template>
  <q-page padding class="bg-secondary">
    <div class="row justify-center q-pb-lg">
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-img src="things-by-pizza-logo.svg"/>
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <div class="section-title">
          Projects
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="item-title">
          BGC Promotional Gear
        </div>
        <div class="text-body1">
          A store for BGC Engineering employees to order promotional products like jackets and backpacks. Comes with a inventory and order management system as well with automated tasks.
        </div>
      </div>
      <div class="col-sx-12 col-md-6">
        <div class="item-title">
          MC Comms
        </div>
        <div class="text-body1">
          A plugin to add VoIP server on PaperMC-based Minecraft servers. It adds proximity voice chat to Minecraft to add immersion using Netty over TCP/IP sockets.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style lang="scss">
@import "node_modules/quasar/src/css/index";
@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap');
.box {
  height: 300px;
}

.item-title {
  @extend .text-h4;
  @extend .q-mb-lg;
  font-family: 'Caveat Brush', cursive;
}

.section-title {
  @extend .text-h3;
  @extend .text-accent;
  font-family: 'Caveat Brush', cursive;
}
</style>
