<template>
    <footer class="footer">
        <a class="footer__craft-link" href="https://web-artcraft.com/" target="_blank" rel="nofollow">Разработано CraftGroup</a>
    </footer>
</template>

<script>
export default {
  name: 'appFooter',
  props: {  }
}
</script>

<style scoped>
.footer {
    position: absolute;
    bottom: 0;
    left: 55%;
    margin: 1em;
    width: 30%;
    display: block; }
.footer__craft-link {
    position: relative;
    text-decoration: none;
    color: #ff0200 !important;
    font-size: 12px;
    padding-left: 25px;
    margin-left: 5px; }
@media (max-width: 699px) {
    .footer__craft-link {
        display: block;
        line-height: 0.9; } }
.footer__craft-link:before {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    height: 20px;
    width: 20px;
    background: url("../assets/craft-red.png") no-repeat 50%;
    background-size: contain; }
@media (max-width: 993px) {
    .footer__craft-link {
        font-size: 10px; } }
</style>
