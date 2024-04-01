<template>
  <main class="main">
    <div class="main__content">
      <h2 class="main__content-title">{{ title }}</h2>
      <div class="main__content-info">
        <div class="info__descr">{{ descr }}</div>
        <div class="full__info">
          <div class="content">
            <div class="full__info-data text"><b style="margin-right: 10px;">Text</b> {{ author }}</div>
            <div class="full__info-data date"><b style="margin-right: 10px;">Date</b> {{ date }}</div>
            <div class="full__info-data duration"><b style="margin-right: 10px;">Duration</b> {{ read }}</div>
          </div>

          <Label :label="label"/>
        </div>
      </div>
    </div>
    <img :src="img" alt="dont-close-your-eyes" class="main__img">
  </main>
</template>

<script>
import Label from "@/Shared/UI/Label.vue";

export default {
  components: {Label},
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    read: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.main__img {
  width: 100%;
  max-height: 880px;
  object-fit: cover;
}

.main {
  padding: 50px 0 0 0;
}

.main__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  margin-bottom: 50px;
}

@media (max-width: 924px) {
  .main__content {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.main__content-title {
  font-size: clamp(6.625rem,1.9917rem + 3.1667vw,5rem);
  line-height: 110%;
  font-family: "General Sans";
  font-weight: 600;

  margin: 0;
}

.main__content-info {
  max-width: 734px;
}

.info__descr {
  font-size: 18px;
  font-family: "General Sans";
  font-weight: 400;
  line-height: 180%;
}

.full__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}

.content {
  display: flex;
  max-width: 470px;
  width: 100%;
}

.full__info-data {
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  font-family: "General Sans";

  display: flex;
  align-items: center;
  width: 100%;
}
</style>