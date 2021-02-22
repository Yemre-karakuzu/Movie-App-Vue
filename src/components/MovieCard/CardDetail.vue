<template>
  <div class="details_wrapper">
    <HeaderHome></HeaderHome>
    <div class="moviedetail_container">
      <div class="image_container">
        <img
          class="card-movie_image_img"
          :src="imgUrl"
          onerror="this.src='https://via.placeholder.com/342x513';"
          alt=""
        />
      </div>
      <div class="details">
        <div class="title">{{ movieDetails.title.toUpperCase() }}</div>
        <div class="tagline">{{ movieDetails.tagline }}</div>
        <div class="vote_average">{{ movieDetails.vote_average }}</div>
        <div class="genreDetail">
          <div class="genretitle">THE GENRES</div>
          <div
            class="genrevalue"
            v-for="(genre, index) in movieDetails.genres"
            :key="index"
          >
            {{ genre.name }}
          </div>
        </div>
        <div class="overview">
          <div class="overview_title">THE SYNOPSIS</div>
          <div class="overview_value">{{ movieDetails.overview }}</div>
        </div>
        <div class="cast">
          <div class="casttitle">THE CAST</div>
          <div class="cast_avatar"></div>
        </div>
      </div>
    </div>
    <div class="recommended"></div>
  </div>
</template>

<script>
import { getMoviDetail } from "../../services/Sevices";
import HeaderHome from "../HeaderCard/HeaderHome";
export default {
  data() {
    return {
      imgUrl: "",
      movieDetails: [],
    };
  },
  components: {
    HeaderHome,
  },
  props: {
    movieId: Number,
  },
  methods: {
    movieGetters() {
      try {
        getMoviDetail(this.movieId)
          .then((res) => res.json())
          .then((res) => {
            this.data = res;
            this.movieDetails = this.data;
            // this.$store.dispatch("actionsMovie", this.data);
            this.imgUrl =
              "https://image.tmdb.org/t/p/w342" + this.movieDetails.poster_path;
          });
      } catch (e) {
        console.log("e", e);
      }
      console.log("posterpath", this.movieDetails.poster_path);
      this.imagUrlUnit();
    },
    imagUrlUnit() {
      this.imgUrl =
        "https://image.tmdb.org/t/p/w342/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg" +
        this.movieDetails.poster_path;
    },
  },
  created() {
    this.movieGetters();
  },
};
</script>

<style lang="scss">
.moviedetail_container {
  margin: 1rem 12rem;
  display: flex;
  .image_container {
    .card-movie_image_img {
      margin-right: 3rem;
      border-radius: 2.5rem;
      box-shadow: 0rem 2rem 5rem rgba($color: black, $alpha: 0.5);
    }
  }
  .details {
    .title {
      font-weight: bold;
      font-size: 2rem;
      color: rgba(110, 106, 106, 0.788);
    }
    .tagline {
      font-weight: 700;
      font-size: 1.03rem;
    }
    .genreDetail {
      margin-top: 2rem;
      margin-bottom: 1rem;

      .genretitle {
        font-weight: bold;
      }
      .genrevalue {
        display: inline;
        margin-right: 0.3rem;
        border-block: 1px;
      }
    }
    .overview {
      .overview_title {
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .overview_value {
        font-weight: 400;
      }
    }

    .cast {
      margin-top: 7rem;
    }
  }
}
</style>