<template>
  <footer class="footer">
    <div class="icons">
      <a
        href="https://github.com/PFCS33"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="github"></vp-icon>
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="youtube"></vp-icon>
      </a>
      <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
        <vp-icon name="discord"></vp-icon>
      </a>
      <a href="https://t.me" target="_blank" rel="noopener noreferrer">
        <vp-icon name="telegram"></vp-icon>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <vp-icon name="twitter"></vp-icon>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="linkedin"></vp-icon>
      </a>
    </div>
    <p class="made-by">MIT Licensed | Copyright © 2023-present pfcs 🌈</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="stylus" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 2.5rem 2.5rem 2rem
  .icons
    display: flex
    margin-bottom: 1.75rem
    font-size: 2rem
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
  svg
    fill:$accentColor
  svg:hover
    fill: $svgFillColor
</style>
