(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bc9419e"],{"7a66":function(e,t,r){},8895:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-login"},[a("div",[a("img",{staticClass:"company-icon",attrs:{src:r("ede7"),alt:"pic"}}),a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:"请输入帐号"}]}],expression:"['account', { rules: [{ required: true, message: '请输入帐号' }] }]"}],attrs:{addonBefore:"帐号",maxLength:32}})],1),a("a-form-item",[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}]}],expression:"['password', { rules: [{ required: true, message: '请输入密码' }] }]"}],attrs:{visibilityToggle:!1,addonBefore:"密码",maxLength:14}})],1),e.isNeedCode?a("a-form-item",[a("a-row",[a("a-col",{attrs:{span:16}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["verifyCode",{rules:[{required:!0,message:"请输入验证码"}]}],expression:"['verifyCode', { rules: [{ required: true, message: '请输入验证码' }] }]"}],attrs:{addonBefore:"图形验证码:",maxLength:6}})],1),a("a-col",{attrs:{span:8}},[a("img",{staticClass:"code-img",attrs:{src:e.codeUrl,alt:"pic"},on:{click:e.getCodeImgUrl}})])],1)],1):e._e(),a("div",{staticClass:"login-forgot"},[a("div",{staticStyle:{"text-align":"right"}},[a("router-link",{attrs:{to:"/forgot"}},[e._v("忘记密码?")])],1)]),a("a-form-item",[a("a-button",{attrs:{type:"primary",htmlType:"submit",block:""}},[e._v("登录")]),a("p",{staticStyle:{"text-align":"center"}},[a("router-link",{attrs:{to:"/register"}},[e._v("没有帐号，立即注册")])],1)],1)],1)],1)])},o=[],s=(r("47e7"),{data:function(){return{form:this.$form.createForm(this,{name:"save"}),isNeedCode:!1,codeUrl:""}},created:function(){},methods:{getCodeImgUrl:function(){var e=this;this.api.G0001().then((function(t){e.codeUrl="data:image/png;base64,"+btoa(new Uint8Array(t).reduce((function(e,t){return e+String.fromCharCode(t)}),""))}))},handleSubmit:function(e){e.preventDefault(),this.$router.push("/formdesign")}}}),i=s,n=(r("a8e6"),r("9ca4")),c=Object(n["a"])(i,a,o,!1,null,"6a21f2a4",null);t["default"]=c.exports},a8e6:function(e,t,r){"use strict";var a=r("7a66"),o=r.n(a);o.a},ede7:function(e,t,r){e.exports=r.p+"img/logo.f1588427.png"}}]);
//# sourceMappingURL=chunk-6bc9419e.869e564b.js.map