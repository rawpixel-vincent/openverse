(window.webpackJsonp=window.webpackJsonp||[]).push([[197,16,18,19,200],{"../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=1f4c8fa2&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width:768px){.image-grid[data-v-1f4c8fa2]:after{-webkit-box-flex:999999999;-ms-flex-positive:999999999;content:"";flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=1f4c8fa2&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=1f4c8fa2&prod&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("76b72671",content,!0,{sourceMap:!1})},"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),vue=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),isFetching=Object(vue.computed)((function(){return mediaStore.fetchState.isFetching})),canLoadMore=Object(vue.computed)((function(){return""!==searchStore.searchTerm&&!mediaStore.fetchState.fetchingError&&!mediaStore.fetchState.isFinished&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!isFetching.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{buttonLabel:Object(vue.computed)((function(){return isFetching.value?i18n.t("browse-page.loading"):i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],staticClass:"px-8 py-6",attrs:{variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}},"./src/components/VSearchResultsGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.concat.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_vy7xpffix5pmcjc7tpwmoxm2hq/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),maxAspect=16/9,use_image_cell_size_useImageCellSize=function useImageCellSize(_ref){var imageSize=_ref.imageSize,isSquare=_ref.isSquare,imgHeight=Object(runtime.e)(isSquare.value?250:imageSize.height||100),imgWidth=Object(runtime.e)(isSquare.value?250:imageSize.width||100),imageAspect=Object(runtime.a)((function(){return imgWidth.value/imgHeight.value})),isPanorama=Object(runtime.a)((function(){return imageAspect.value>2.3333333333333335})),styles=Object(runtime.a)((function(){var aspect=imageAspect.value;if(isSquare.value)return{container:"",figure:"",iPadding:""};var imageWidth,imageLeft,imageTop,containerAspect=function getContainerAspect(aspect){return aspect>maxAspect?maxAspect:aspect<.75?.75:aspect}(aspect),containerWidth=253.125*containerAspect;return aspect<maxAspect?(imageWidth=100,imageLeft=0):(imageWidth=aspect/maxAspect*100,imageLeft=(aspect-maxAspect)/maxAspect*-50),imageTop=aspect>.75?0:(.75-aspect)/(.75*aspect*.75)*-50,{container:"width: ".concat(containerWidth,"px;flex-grow: ").concat(containerWidth),figure:"width: ".concat(imageWidth,"%; top: ").concat(imageTop,"%; left:").concat(imageLeft,"%;"),iPadding:"padding-bottom:".concat(1/containerAspect*100,"%")}}));return{imgHeight:imgHeight,imgWidth:imgWidth,isPanorama:isPanorama,styles:styles}},VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VSearchResultsGrid_VImageCellvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:{image:{type:Object,required:!0},searchTerm:{type:String},aspectRatio:{type:String,default:"square"}},setup:function setup(props){var isSquare=Object(vue.computed)((function(){return"square"===props.aspectRatio})),_useImageCellSize=use_image_cell_size_useImageCellSize({imageSize:{width:props.image.width,height:props.image.height},isSquare:isSquare}),imgHeight=_useImageCellSize.imgHeight,imgWidth=_useImageCellSize.imgWidth,isPanorama=_useImageCellSize.isPanorama,styles=_useImageCellSize.styles,imageUrl=Object(vue.computed)((function(){if(isPanorama.value)return toAbsolutePath(props.image.url);var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)})),imageLink=Object(vue.computed)((function(){return"/image/".concat(props.image.id,"/").concat(props.searchTerm?"?q="+props.searchTerm:"")}));return{styles:styles,imgWidth:imgWidth,imgHeight:imgHeight,imageUrl:imageUrl,imageLink:imageLink,getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src=element.src===props.image.url?image_not_available_placeholder_default.a:props.image.url},getImgDimension:function getImgDimension(event){if("square"!==props.aspectRatio){var element=event.target;imgHeight.value=element.naturalHeight,imgWidth.value=element.naturalWidth}},isSquare:isSquare}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VImageCellvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VLink",{staticClass:"group relative block w-full overflow-hidden rounded-sm bg-dark-charcoal-10 text-dark-charcoal-10 focus-bold-filled",style:_vm.styles.container,attrs:{itemprop:"contentUrl",title:_vm.image.title,href:_vm.imageLink,"aria-label":_vm.image.title}},[_c("figure",{staticClass:"absolute w-full rounded-sm",class:{"relative aspect-square":_vm.isSquare},style:_vm.styles.figure,attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[_c("img",{ref:"img",staticClass:"block w-full rounded-sm object-cover",class:_vm.isSquare?"h-full":"margin-auto",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.imageUrl,width:_vm.imgWidth,height:_vm.imgHeight,itemprop:"thumbnailUrl"},on:{load:_vm.getImgDimension,error:function error($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"invisible absolute bottom-0 left-0 bg-white p-1 text-dark-charcoal group-hover:visible group-focus:visible"},[_c("h2",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_vm.isSquare?_vm._e():_c("i",{staticClass:"block",style:_vm.styles.iPadding,attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0},{name:"searchTerm",description:"The search term is added to the URL to allow the user to\nnavigate back/forward to the search results page.",type:{name:"string"}},{name:"aspectRatio",description:"All content view uses the square image cells, Image view\nuses the image's intrinsic size.",type:{name:"AspectRatio"},defaultValue:{func:!1,value:'"square"'}}]}},"./src/components/VSearchResultsGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VSearchResultsGrid/VImageCell.vue"),VSearchResultsGrid_VImageGridvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"ImageGrid",components:{VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{type:Array,default:function _default(){return[]}},isSinglePage:{type:Boolean,required:!0},fetchState:{type:Object,required:!0}},setup:function setup(props){var searchStore=Object(search.b)(),searchTerm=Object(vue.computed)((function(){return searchStore.searchTerm}));return{isError:Object(vue.computed)((function(){return Boolean(props.fetchState.fetchingError)})),searchTerm:searchTerm}}}),componentNormalizer=(__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=1f4c8fa2&prod&scoped=true&lang=css&"),__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VSearchResultsGrid_VImageGridvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",[_c("div",{staticClass:"image-grid flex flex-wrap gap-4"},_vm._l(_vm.images,(function(image){return _c("VImageCell",{key:image.id,attrs:{image:image,"search-term":_vm.searchTerm,"aspect-ratio":"intrinsic"}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_vm.isSinglePage?_vm._e():_c("footer",{staticClass:"pt-4"},[_c("VLoadMore")],1)])}),[],!1,null,"1f4c8fa2",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageCell:__webpack_require__("./src/components/VSearchResultsGrid/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"ImageDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isSinglePage",description:'VImageGrid is used for the search grid and the related images.\nIn the related images, it is just a single page of results without the\n"Load More" button, and in the search grid it is a grid that can load\nmore images on the "Load More" button click.',type:{name:"boolean"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0}]}},"./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=1f4c8fa2&prod&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.10.1_pqbfgzxfmern2t6o46scvtdpia/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_4dftvqknpgmotzmzzqmnfvmmye/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsGrid/VImageGrid.vue?vue&type=style&index=0&id=1f4c8fa2&prod&scoped=true&lang=css&")},"./src/pages/search/image.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),VImageGrid=__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue"),search_imagevue_type_script_lang_ts_=Object(vue.defineComponent)({name:"ImageSearch",components:{VImageGrid:VImageGrid.default},props:search_page_types.propTypes,setup:function setup(props){return{results:Object(vue.computed)((function(){return props.resultItems.image}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_imagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VImageGrid",{attrs:{images:this.results,"is-single-page":!1,"fetch-state":this.fetchState}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageGrid:__webpack_require__("./src/components/VSearchResultsGrid/VImageGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageSearch",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}}}]);