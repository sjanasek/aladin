<template>
  <div class="description">
    <TextBox class="description__box">
      <template #header>{{ texts.description.header }}</template>
      <template #body><p v-html="texts.description.body"></p></template>
    </TextBox>
    <Accordion :name="'dbList'">
      <AccordionItem
        :name="'dbList'"
        v-for="(listElement, index) in dbList"
        :key="listElement.dbName"
      >
        <template #header>
          {{ listElement.dbName }}
          <div class="accordion__icons">
            <div class="accordion__icons--open" @click="toggleCollapse">
              <b>^</b>
            </div>
          </div>
        </template>
        <template #content>
          <img class="erm__image" :src="listElement.img" alt="" />
          <Button
            :type="'submit'"
            :text="'Editor öffnen!'"
            @click.native="openEditor(index)"
          />
        </template>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<style lang="postcss">
.description {
  @apply flex flex-col items-center justify-start w-full;
}

.description__box {
  @apply self-center text-center m-2 pb-4;
}

.erm__image {
  height: auto;
  max-width: 100%;
}
</style>

<script>
import TextBox from "@/components/TextBox";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import AccordionItem from "@/components/AccordionItem";
export default {
  components: {
    TextBox,
    Button,
    Accordion,
    AccordionItem
  },
  methods: {
    getDBList() {
      this.$store.dispatch("sql/getDBList");
    },
    openEditor(index) {
      document.querySelector('[tab="SqlTask"]').classList.remove("disabled");
      this.$emit("change-tab", document.querySelector('[tab="SqlTask"]'));
      const dbName = this.dbList[index].dbName;
      this.$store.commit("sql/SET_DB", { dbName, index });
    },
    toggleCollapse(event) {
      let clicked = event.target.parentElement.parentElement.parentElement;
      const active = document.querySelector(
        `.accordion__${this.name}--item.active`
      );
      if (!active) {
        clicked.classList.toggle("active");
        clicked.scrollIntoView({ behavior: "smooth" });
      } else if (clicked === active) active.classList.toggle("active");
      else {
        active.classList.toggle("active");
        clicked.classList.toggle("active");
        clicked.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
  computed: {
    texts: function() {
      const texts = this.$store.state.user.texts;
      return texts.exercises.sql.tabs.SqlScope;
    },
    dbList: function() {
      // return this.$store.state.sql.dbList;
      let test = this.$store.state.sql.dbList;

      test = test.map(el => {
        if (/^[abc].*/.test(el.dbName)) {
          el.value = `<img src="${el.value}" alt=""><br><button class="openEditor">Editor öffnen!</button>`;
          return el;
        } else return el;
      });

      return test;
    }
  },
  mounted() {
    this.getDBList();
  }
};
</script>
