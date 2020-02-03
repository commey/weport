var pageLoader = Vue.component("page-loader", {
    data(){
        return {
            contentText: this.$root.pageloader.content || "Loading. Please Wait."
        }
    },
    template: `
        <div class="page-loader">
            <div class="page-loader--spinner"><i class="imoon imoon-brightness-medium imoon-5x fa-pulse"></i></div>
            <div class="page-loader--content">{{ contentText }}</div>
        </div>
    `
})

export default {
    pageLoader: pageLoader,
};  