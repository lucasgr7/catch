<script lang="ts" setup></script>

<template>
  <el-row>
    <el-col>
      <span>Influência</span>
      <div class="bar"></div>
    </el-col>
    <el-col>
      <div class="circle">
        <img src="src\assets\icons\profile-nasa.png" alt="profile" />
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
span {
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  justify-content: left;
  margin-left: 5vh;
  margin: 2vh 0 0 2vh;
}

.bar {
  width: 6vh;
  height: 1vh;
  background: rgba(124, 240, 226, 0.98);
  margin: 0 0 0 2vh;
}
.circle {
  width: 7vh;
  height: 7vh;
  background: rgba(124, 240, 226, 0.98);
  box-shadow: 2px 2px 5px rgba(81, 163, 158, 0.47);
  mix-blend-mode: normal;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 3vh;
  top: 2vh;
  img{
    width: 5vh;
  }
}

@media screen and (max-width: 820px) {
  span {
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    margin-left: 7vh;
    margin-top: 5vh;
  }

  .bar {
    width: 6vh;
    height: 1vh;
    background: rgba(124, 240, 226, 0.98);
    margin: 0 0 0 7vh;
  }
  .circle {
    right: 2vh;
    top: 6vh;
  }
}
</style>
