<template>
  <div>
    <Navbar />
    <div class="px-6 md:w-3/5 lg:w-2/4 xl:w-2/5 mx-auto">
      <!-- search -->
      <div class="my-8">
        <div class="hidden md:block">
          <SearchBar />
        </div>
      </div>

      <!-- tags -->
      <Tags :cards="cards" :visibleCards="visibleCards" />

      <!-- card -->
      <div  class="flex flex-col my-6 space-y-6">
      <Cards :cards="cards" :visibleCards="visibleCards" />
      </div>

      <!-- pagination -->
      <div class="my-6 flex justify-center">
        <Pagination
          :cards="cards"
          v-on:page:update="updatePage"
          :currentPage="currentPage"
          :pageSize="pageSize"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Pagination from "@/components/Pagination.vue";
import Tags from "@/components/Tags.vue";
import Cards from "@/components/Cards.vue"
export default defineComponent({
  components: {
    Navbar,
    SearchBar,
    Pagination,
    Tags,
    Cards
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 60,
          rating: "4.5",
        },
        {
          id: 2,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 60,
          rating: "9.5",
        },
        {
          id: 3,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 60,
          rating: "6",
        },
        {
          id: 4,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 70,
          rating: "9.5",
        },
        {
          id: 5,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 60,
          rating: "9.5",
        },
        {
          id: 6,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 60,
          rating: "4",
        },
        {
          id: 7,
          heading: "Hand & Finger Work",
          date: "20 Sep 2022",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
          instrumentName: "Drum pad",
          BPM: 60,
          rating: "4",
        },
      ],
      currentPage: 1,
      pageSize: 4,
      visibleCards: [] as any[],
    };
  },
  beforeMount() {
    this.updateVisibleCards();
  },
  methods: {
    updatePage(pageNo: number) {
      this.currentPage = pageNo;
      this.updateVisibleCards();
    },
    updateVisibleCards() {
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;
      this.visibleCards = this.cards.slice(start, end);
      if (this.visibleCards.length === 0 && this.currentPage > 1)
        this.updatePage(this.currentPage - 1);
    },
  },
});
</script>
