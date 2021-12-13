<template>
  <div>
  <site-nav />
  <page-header />
  <globa-nav />
  <all-cat />
  <no-subject />
  <classify/>
  <list />
  <footer-icon />
  <aysw-footer />
  <footer-copy />
  </div>
</template>

<script>
import SiteNav from '@/views/components/site-nav'
import PageHeader from '@/views/components/page-header'
import GlobaNav from '@/views/components/globa-nav'
import AllCat from '@/views/components/all_cat'
import NoSubject from '@/views/components/no_subject'
import List from '@/views/components/list'
import FooterIcon from '@/views/components/footer-icon'
import AyswFooter from '@/views/components/aysw-footer'
import FooterCopy from '@/views/components/footer-copy'
import classify from '@/views/components/classify'
export default {
  name: 'Home',
  components: {
    SiteNav,
    PageHeader,
    GlobaNav,
    AllCat,
    NoSubject,
    List,
    FooterIcon,
    AyswFooter,
    FooterCopy,
    classify
  }
}
</script>

<style lang="less" scoped>

</style>
