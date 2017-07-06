<template>
  <div id="interviews">
    <h2>Interviews</h2>
    <a href="#" class="item">
      <span class="date">06/07/2017</span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue nec sem nec pulvinar.
    </a>
  </div>
</template>

<script>
export default {
  name: 'interviews'
}
</script>

<style lang="styl" scoped>
  h2
    height: 50px
    line-height: 50px
    color: whitesmoke
    background-color: #800000
    text-align: center
    font: 42px Astonished, sans-serif

  .item
    display: block
    padding: 20px 15px
    color: black
    background-color: whitesmoke
    border-bottom: dashed 1px gray

    &:last-of-type
      border-bottom: 0

    &:focus
      background-color: silver

  .date
    font-weight: bold
</style>

