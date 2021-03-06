<template>
  <div>
    <TextBox class="solution__matrix--description">
      <template #header>{{ description.description.header }}</template>
      <template #body> <p v-html="description.description.body"></p> </template>
    </TextBox>

    <div class="show__graph">
      <img
        src="/img/icons/graph.png"
        alt="graph"
        class="show__graph--img"
        @click="showOverlay"
        v-tooltip.right="{
          delay: {
            show: 500,
            hide: 100
          },
          content: tooltip
        }"
      />
    </div>

    <div class="matrices">
      <div class="matrices__direct">
        <p v-html="description.matrices[0]"></p>
        <Matrix
          type="directMatrix"
          :x-label="true"
          :y-label="true"
          :matrix="userDirectMatrix"
          @validate-field="validateField"
        >
          <template #bottom>
            <div class="matrices__fill">
              <Button
                class="matrices__fill--zero"
                :text="buttons.fillZero"
                @click.native="fillMatrix($event.target)"
              />
              <Button
                class="matrices__fill--complete"
                :text="buttons.fillComplete"
                @click.native="fillMatrix($event.target)"
              />
            </div>
          </template>
        </Matrix>
      </div>

      <div class="matrices__unit">
        <p v-html="description.matrices[1]"></p>
        <Matrix
          type="unitMatrix"
          :matrix="userUnitMatrix"
          @validate-field="validateField"
        >
          <template #bottom>
            <div class="matrices__fill">
              <Button
                class="matrices__fill--zero"
                :text="buttons.fillZero"
                @click.native="fillMatrix($event.target)"
              />
              <Button
                class="matrices__fill--complete"
                :text="buttons.fillComplete"
                @click.native="fillMatrix($event.target)"
              />
            </div>
          </template>
        </Matrix>
      </div>

      <div class="matrices__subtracted">
        <p v-html="description.matrices[2]"></p>
        <Matrix
          type="subtractedMatrix"
          :x-label="true"
          :y-label="true"
          :matrix="userSubtractedMatrix"
          @validate-field="validateField"
        >
          <template #bottom>
            <div class="matrices__fill">
              <Button
                class="matrices__fill--zero"
                :text="buttons.fillZero"
                @click.native="fillMatrix($event.target)"
              />
              <Button
                class="matrices__fill--complete"
                :text="buttons.fillComplete"
                @click.native="fillMatrix($event.target)"
              />
            </div>
          </template>
        </Matrix>
      </div>
    </div>
    <TaskNavigation
      :forward="true"
      :backward="true"
      @click-forward="validateAll"
      @click-backward="$emit('step-direction', 'backward')"
    />
    <ScreenOverlay />
  </div>
</template>

<style lang="postcss">
.show__graph {
  @apply flex items-center;
}

.show__graph--img {
  @apply cursor-pointer;
  width: 50px;
  height: auto;
}

.solution__matrix--description {
  @apply self-center text-center m-2 pb-4;
}

.matrices {
  @apply flex flex-wrap w-full justify-around items-center mb-12;
}

.matrices__direct,
.matrices__unit,
.matrices__subtracted {
  @apply flex flex-col items-center;
}

.matrices__fill {
  @apply flex justify-center w-full cursor-pointer;
  font-size: 12px;
}

.matrices__fill * {
  text-align: center;
  padding: 2px;
  margin-left: 2.35em;
}
</style>

<script>
import Matrix from "@/components/exercises/gozintograph/Matrix";
import TextBox from "@/components/TextBox";
import ScreenOverlay from "@/components/ScreenOverlay";
import TaskNavigation from "@/components/TaskNavigation";
import Button from "@/components/Button";
import { drawGozintograph } from "@/lib/gozintograph/drawGozintograph";
import matrixMixin from "@/mixins/MatrixMixin";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("gozintograph");
export default {
  name: "MatrixPathStep1",
  data() {
    return {
      noError: true
    };
  },
  components: {
    Button,
    Matrix,
    TextBox,
    ScreenOverlay,
    TaskNavigation
  },
  mixins: [matrixMixin],
  methods: {
    showOverlay() {
      document.querySelector(".overlay").style.height = "100vh";
      const appendTo = document.querySelector(".overlay__content");
      const containerHeight = document.querySelector(".overlay__content")
        .offsetHeight;
      const self = this;
      setTimeout(() => {
        drawGozintograph(self.graph, appendTo, containerHeight);
      }, 50);
    }
  },
  computed: {
    texts: function() {
      return this.$store.state.user.texts.exercises.gozintograph;
    },
    description: function() {
      return this.texts.tabs.GozintographMatrixPath.step1;
    },
    tooltip: function() {
      return this.texts.tooltips.showGraph;
    },
    ...mapState({
      userUnitMatrix: state => state.userUnitMatrix,
      userDirectMatrix: state => state.userDirectMatrix,
      userSubtractedMatrix: state => state.userSubtractedMatrix
    }),
    ...mapGetters({
      directMatrix: "getDirectMatrix",
      unitMatrix: "getUnitMatrix",
      subtractedMatrix: "getSubtractedMatrix"
    }),
    graph: function() {
      return this.$store.state.gozintograph.graph;
    }
  }
};
</script>
