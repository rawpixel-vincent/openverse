(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_agpfqyaskwq4eolqjmx3iraznu/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_s7i5uszhqyhokcdwx6oaut57ae/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=2e7a1baa&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width:768px){.image-grid[data-v-2e7a1baa]:after{content:"";flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_agpfqyaskwq4eolqjmx3iraznu/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_s7i5uszhqyhokcdwx6oaut57ae/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=2e7a1baa&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_agpfqyaskwq4eolqjmx3iraznu/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_s7i5uszhqyhokcdwx6oaut57ae/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=2e7a1baa&prod&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("3d946924",content,!0,{sourceMap:!1})},"./src/components/VSearchResultsGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),related_media=__webpack_require__("./src/stores/media/related-media.ts"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VImageCell/VImageCell.vue"),VSearchResultsGrid_VImageGridvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"ImageGrid",components:{VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{results:{type:Array,default:function _default(){return[]}},kind:{type:String,default:"search"},fetchState:{type:Object,required:!0},imageGridLabel:{type:String,required:!0}},setup:function setup(props){var searchStore=Object(search.b)();return{searchTerm:Object(vue.computed)((function(){return searchStore.searchTerm})),relatedTo:Object(vue.computed)((function(){return"related"===props.kind?Object(related_media.a)().mainMediaId:null}))}}}),componentNormalizer=(__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=2e7a1baa&prod&scoped=true&lang=css&"),__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VSearchResultsGrid_VImageGridvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{staticClass:"pt-2 sm:pt-0"},[!_vm.results||_vm.results.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"image"}}),_vm._v(" "),_c("ol",{staticClass:"image-grid flex flex-wrap gap-4",attrs:{"aria-label":_vm.imageGridLabel}},_vm._l(_vm.results,(function(image){return _c("VImageCell",{key:image.id,attrs:{image:image,"search-term":_vm.searchTerm,"aspect-ratio":"intrinsic",kind:_vm.kind,"related-to":_vm.relatedTo}})})),1),_vm._v(" "),"related"!==_vm.kind?_c("footer",{staticClass:"pt-4"},[_c("VLoadMore")],1):_vm._e()],1)}),[],!1,null,"2e7a1baa",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VImageCell:__webpack_require__("./src/components/VImageCell/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"results",type:{name:"ImageDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"kind",description:"`VImageGrid` is used for the image search results, related images,\nand the image collection page.\nThe load more button is not shown for related images.",type:{name:"ResultKind"},defaultValue:{func:!1,value:'"search"'}},{name:"fetchState",type:{name:"FetchState"},required:!0},{name:"imageGridLabel",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=2e7a1baa&prod&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_agpfqyaskwq4eolqjmx3iraznu/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_s7i5uszhqyhokcdwx6oaut57ae/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=2e7a1baa&prod&scoped=true&lang=css&")}}]);