(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25b676ed"],{"37dd":function(a,e,n){},9560:function(a,e,n){"use strict";var t=n("37dd"),o=n.n(t);o.a},a810:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"map"},[n("a-input-search",{staticClass:"form-item-content",attrs:{id:"searchMap",placeholder:"请填写详细地址",enterButton:"搜索地图"},on:{search:a.handleSelectChange},model:{value:a.address,callback:function(e){a.address=e},expression:"address"}}),a._m(0)],1)},o=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticStyle:{width:"500px",height:"300px"},attrs:{id:"container"}}),n("div",{attrs:{id:"panel"}})])}],l=(n("c0c3"),{data:function(){return{map:null,address:"崇贤街道木桥庄路2号",latitude:null,longitude:null}},mounted:function(){var a=this;setTimeout((function(){a.init(),console.log(window.AMap)}),500)},methods:{init:function(){var a=this;this.map=new AMap.Map("container",{resizeEnable:!0,zoom:10});var e=new AMap.Geocoder;AMap.event.addListener(this.map,"click",(function(n){e.getAddress(n.lnglat,(function(e,t){if("complete"===e&&t.regeocode){var o=t.regeocode.addressComponent,l="".concat(o.township).concat(o.street).concat(o.streetNumber);a.map.clearMap(),console.log(n,o);var s=new AMap.Marker({position:n.lnglat,title:l});new AMap.InfoWindow({isCustom:!1,content:"<span>"+l+"&nbsp;&nbsp;</span>",offset:new AMap.Pixel(0,-36),showShadow:!0,closeWhenClickMap:!0,autoMove:!0}).open(a.map,new AMap.LngLat(n.lnglat.lng,n.lnglat.lat)),a.map.add(s),a.latitude=n.lnglat.lat,a.longitude=n.lnglat.lng,a.address=l}}))}))},handleSelectChange:function(){var a=this,e=this.address;AMap.service(["AMap.PlaceSearch"],(function(){var n={city:"杭州市",pageSize:5,pageIndex:1,citylimit:!0,map:a.map,panel:"panel",autoFitView:!0};a.map.clearMap();var t=new AMap.PlaceSearch(n);console.log(t,e),e&&t.search(e,(function(a,e){console.log("点击搜索后：搜索结果状态，搜索结果列表",a,e)})),AMap.event.addListener(t,"markerClick",(function(e){a.latitude=e.data.location.lat,a.longitude=e.data.location.lng,a.address=e.data.address,console.log("markerClick!!!!!!!!!",e.data),new AMap.InfoWindow({isCustom:!1,content:"<span>"+e.data.address+"&nbsp;&nbsp;</span>",offset:new AMap.Pixel(0,-36),showShadow:!0,closeWhenClickMap:!0,autoMove:!0}).open(a.map,new AMap.LngLat(e.data.location.lng,e.data.location.lat))})),AMap.event.addListener(t,"listElementClick",(function(e){a.map.clearInfoWindow(),a.latitude=e.data.location.lat,a.longitude=e.data.location.lng,a.address=e.data.address,console.log("listElementClick!!!!!!!!!",e.data),new AMap.InfoWindow({isCustom:!1,content:"<span>"+e.data.address+"&nbsp;&nbsp;</span>",offset:new AMap.Pixel(0,-36),showShadow:!0,closeWhenClickMap:!0,autoMove:!0}).open(a.map,new AMap.LngLat(e.data.location.lng,e.data.location.lat))}))}))}}}),s=l,i=(n("9560"),n("9ca4")),c=Object(i["a"])(s,t,o,!1,null,"56ee4e8a",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-25b676ed.7b12492d.js.map