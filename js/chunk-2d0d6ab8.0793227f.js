(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6ab8"],{7416:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("a-button",{on:{click:e.init}},[e._v("建立websocke")])],1),o("a-button",{attrs:{disabled:!e.connected},on:{click:e.send}},[e._v("发消息")]),o("a-button",{on:{click:e.close}},[e._v("关闭")])],1)},c=[],s={data:function(){return{path:"wss://echo.websocket.org",socket:"",connected:!1,timeout:5e3,timeoutObj:null,serverTimeoutObj:null,timeoutnum:null}},mounted:function(){},beforeDestroy:function(){this.close()},methods:{init:function(){var e=this;"undefined"===typeof WebSocket?alert("您的浏览器不支持socket"):(this.socket=new WebSocket(this.path),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage,this.socket.onclose=function(t){console.log(t),console.log("关闭"),e.connected=!1})},reconnect:function(){var e=this;e.connected||(e.connected=!0,e.timeoutnum&&clearTimeout(e.timeoutnum),e.timeoutnum=setTimeout((function(){e.init(),e.connected=!1}),5e3))},reset:function(){var e=this;clearTimeout(e.timeoutObj),clearTimeout(e.serverTimeoutObj),e.start()},start:function(){var e=this;e.timeoutObj&&clearTimeout(e.timeoutObj),e.serverTimeoutObj&&clearTimeout(e.serverTimeoutObj),e.timeoutObj=setTimeout((function(){1==e.socket.readyState?e.socket.send("heartCheck"):e.reconnect(),e.serverTimeoutObj=setTimeout((function(){e.socket.close()}),e.timeout)}),e.timeout)},open:function(){this.connected=!0,this.start(),console.log("socket连接成功,并且开始心跳")},error:function(){console.log("连接错误")},getMessage:function(e){console.log(e),this.reset()},send:function(){this.socket.send({a:1})},close:function(){this.socket&&this.socket.close()}}},i=s,u=o("9ca4"),r=Object(u["a"])(i,n,c,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d6ab8.0793227f.js.map