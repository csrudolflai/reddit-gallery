(function(t){function e(e){for(var s,o,n=e[0],l=e[1],d=e[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/reddit-gallery/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0edd":function(t,e,a){},"37d9":function(t,e,a){"use strict";var s=a("b692"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],o=a("2877"),n={},l=Object(o["a"])(n,r,i,!1,null,null,null),d=l.exports,c=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("h4",{staticClass:"mt-3"},[t._v("#"+t._s(t.subreddit))]),a("button",{staticClass:"btn btn-primary",on:{click:t.refresh}},[t._v("Next")]),a("ul",{staticClass:"nav flex-column mt-5"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=hot"}},[t._v("Hot")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=random"}},[t._v("Random")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=new"}},[t._v("New")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=top&t=day"}},[t._v("Day")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=top&t=week"}},[t._v("Week")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=top&t=month"}},[t._v("Month")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=top&t=year"}},[t._v("Year")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"?sort=top&t=all"}},[t._v("All")])],1)])]),a("div",{staticClass:"col-md-10"},t._l(t.children,(function(e){return a("div",{key:e.data.id,staticClass:"t3 float-left"},[e.data.media&&e.data.media.reddit_video?a("video",{staticClass:"thumbnail mb-n1",attrs:{controls:""}},[a("source",{attrs:{src:e.data.media.reddit_video.fallback_url,type:"video/mp4"}})]):e.data.preview&&e.data.preview.reddit_video_preview?a("video",{staticClass:"thumbnail mb-n1",attrs:{controls:""}},[a("source",{attrs:{src:e.data.preview.reddit_video_preview.fallback_url,type:"video/mp4"}})]):a("div",{staticClass:"thumbnail",style:"background: #eee no-repeat center/cover url("+e.data.thumbnail+")"}),a("div",[a("span",{staticClass:"d-inline-block text-truncate",staticStyle:{"max-width":"19vw"}},[e.data.url?a("a",{staticClass:"text-success",attrs:{href:e.data.url,target:"_blank"}},[a("i",{staticClass:"la la-external-link-square-alt"})]):t._e(),t._v(" "+t._s(e.data.title)+" ")])])])})),0)])])},m=[],v=(a("fb6a"),a("bc3a")),p=a.n(v),h={created:function(){this.refresh()},data:function(){return{children:[],before:null,after:null,subreddit:""}},watch:{$route:function(){this.after=null,this.refresh()}},methods:{refresh:function(){var t=this,e=this.$route.params.subreddit?this.$route.params.subreddit:"natureisfuckinglit",a=this.$route.query.sort?this.$route.query.sort:"",s=null;"top"==this.$route.query.sort&&(s=this.$route.query.t?this.$route.query.t:""),this.subreddit=e;var r="https://www.reddit.com/r/";r+=e,r+="/".concat(a,".json"),r+="?limit=15",r+=this.after?"&after=".concat(this.after):"",r+=s?"&t=".concat(s):"",p.a.get(r).then((function(e){var a=e.data.data.children.length;t.children=e.data.data.children.slice(a-15),t.before=e.data.data.before,t.after=e.data.data.after}))}}},f=h,_=(a("bea8"),Object(o["a"])(f,u,m,!1,null,"0b137c3e",null)),b=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"sticky-top d-flex justify-content-between p-4"},[t.isTypingSubreddit?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSubreddit,expression:"inputSubreddit"}],staticStyle:{"font-size":"1.5rem",color:"white",background:"none",border:"0"},attrs:{placeholder:t.subreddit},domProps:{value:t.inputSubreddit},on:{input:function(e){e.target.composing||(t.inputSubreddit=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-light",on:{click:t.go}},[t._v("Go")])]):a("h4",{on:{click:function(e){t.isTypingSubreddit=!0}}},[t._v(t._s(t.subreddit))]),a("div",[a("ul",{staticClass:"nav nav-pills"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=hot"}},[t._v("Hot")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=random"}},[t._v("Random")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=new"}},[t._v("New")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=day"}},[t._v("Day")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=week"}},[t._v("Week")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=month"}},[t._v("Month")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=year"}},[t._v("Year")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=all"}},[t._v("All")])],1)])])]),a("div",{staticClass:"container"},t._l(t.children,(function(e,s){return a("div",{key:e.data.id,staticClass:"row mt-4 redditPost",on:{click:function(a){return t.seePost(e.data.permalink,e.data.title,e.data.selftext_html,e.data.score)}}},[a("div",{staticClass:"col-1"},[a("small",{staticClass:"text-muted"},[t._v(t._s(s+1))]),t._v(" "+t._s(t.displayScore(e.data.score))+" ")]),a("div",{staticClass:"col-1"},[e.data.media&&e.data.media.reddit_video?a("video",{staticClass:"thumbnail",attrs:{controls:""}},[a("source",{attrs:{src:e.data.media.reddit_video.fallback_url,type:"video/mp4"}})]):e.data.preview&&e.data.preview.reddit_video_preview?a("video",{staticClass:"thumbnail mb-n1",attrs:{controls:""}},[a("source",{attrs:{src:e.data.preview.reddit_video_preview.fallback_url,type:"video/mp4"}})]):a("div",{staticClass:"thumbnail",style:"background: #4A5568 no-repeat center/cover url("+e.data.thumbnail+"); height: 64px;"})]),a("div",{staticClass:"col-7"},[a("span",{staticClass:"mr-2 title",domProps:{innerHTML:t._s(e.data.title)},on:{click:function(a){return t.$set(e,"isActive",!e.isActive)}}}),e.data.link_flair_text?a("span",{staticClass:"badge mr-2",style:"background: "+e.data.link_flair_background_color},[t._v(t._s(e.data.link_flair_text))]):t._e(),a("br"),e.isActive&&e.data.selftext_html?a("div",{staticClass:"text-grey-500 mt-4"},[a("span",{domProps:{innerHTML:t._s(t.domDecoder(e.data.selftext_html))}})]):e.isActive&&e.data.secure_media?a("div",{staticClass:"mt-4"},[a("span",{domProps:{innerHTML:t._s(t.domDecoder(e.data.secure_media.oembed.html))}})]):e.data.selftext?a("p",{staticClass:"text-grey-600 mb-2 text-truncate"},[a("i",{staticClass:"lar la-eye"}),t._v(" "+t._s(e.data.selftext)+" ")]):("image"==e.data.post_hint||t.isImageUrl(e.data.url))&&e.isActive?a("div",[a("img",{attrs:{src:e.data.url,width:"100%"}}),e.data.media&&e.data.media.reddit_video?a("video",{attrs:{controls:"",autoplay:""}},[a("source",{attrs:{src:e.data.media.reddit_video.fallback_url,type:"video/mp4"}})]):e.data.preview&&e.data.preview.reddit_video_preview?a("video",{attrs:{controls:"",autoplay:""}},[a("source",{attrs:{src:e.data.preview.reddit_video_preview.fallback_url,type:"video/mp4"}})]):t._e()]):t._e(),a("p",{staticClass:"small text-muted"},["image"==e.data.post_hint||t.isImageUrl(e.data.url)?a("i",{staticClass:"lar la-eye"}):t._e(),t._v(" Submitted "+t._s(t._f("moment")(e.data.created_utc,"from"))+" by "),a("a",{attrs:{href:"/"}},[t._v(t._s(e.data.author))]),t._v(" to "),a("router-link",{attrs:{to:{name:"list",params:{subreddit:e.data.subreddit}}}},[t._v(t._s(e.data.subreddit_name_prefixed))])],1)]),a("div",{staticClass:"ml-auto col-2"},[a("small",[t._v(t._s(e.data.num_comments)+" comments")]),a("br"),a("small",{staticClass:"text-muted"},[t._v(t._s(e.data.domain))])])])})),0),a("div",{staticClass:"fixed-bottom p-4"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.refresh(e)}}},[t._v("Next")])])])},k=[],y=(a("8a79"),{created:function(){this.refresh()},data:function(){return{children:[],before:null,after:null,subreddit:"popular",limit:25,isTypingSubreddit:!1,inputSubreddit:""}},watch:{$route:function(){this.after=null,this.refresh()}},methods:{seePost:function(t,e,a,s){this.$store.set("post_title",e),this.$store.set("post_selftext_html",a),this.$store.set("post_score",s),this.$router.push(t)},isImageUrl:function(t){return t.endsWith(".jpg")||t.endsWith(".gif")||t.endsWith(".gifv")||t.endsWith(".png")},go:function(){this.$router.push({name:"list",params:{subreddit:this.inputSubreddit}}),this.after=null,this.isTypingSubreddit=!1},domDecoder:function(t){var e=new DOMParser,a=e.parseFromString("<!doctype html><body>"+t,"text/html");return a.body.textContent},displayScore:function(t){return t<1e3?t:"".concat(Math.round(t/1e3),"k")},refresh:function(){var t=this,e=this.$route.params.subreddit?this.$route.params.subreddit:this.subreddit,a=this.$route.query.sort?this.$route.query.sort:"",s=null;"top"==this.$route.query.sort&&(s=this.$route.query.t?this.$route.query.t:""),this.subreddit=e;var r="https://www.reddit.com/r/";r+=e,r+="/".concat(a,".json"),r+="?limit=25",r+=this.after?"&after=".concat(this.after):"",r+=s?"&t=".concat(s):"",p.a.get(r).then((function(e){var a=e.data.data.children.length;t.children=e.data.data.children.slice(a-25),t.before=e.data.data.before,t.after=e.data.data.after}))}}}),w=y,g=(a("ebb3"),Object(o["a"])(w,C,k,!1,null,null,null)),x=g.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"sticky-top d-flex justify-content-between align-items-center p-3"},[a("h4",{staticClass:"pt-2"},[t._v(t._s(t.$route.params.subreddit))]),a("div",[a("ul",{staticClass:"nav nav-pills"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=hot"}},[t._v("Hot")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=random"}},[t._v("Random")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=new"}},[t._v("New")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=day"}},[t._v("Day")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=week"}},[t._v("Week")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=month"}},[t._v("Month")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=year"}},[t._v("Year")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"?sort=top&t=all"}},[t._v("All")])],1)])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4"},[t.post.score?a("div",{staticClass:"col-1"},[t._v(t._s(t.displayScore(t.post.score)))]):a("div",{staticClass:"col-1 bg-dark"}),a("div",{staticClass:"col-9 mt-n3"},[a("h4",{staticClass:"mb-5 sticky-top py-4",staticStyle:{background:"rgb(9, 10, 14)"}},[t._v(t._s(t.post.title))]),a("span",{staticClass:"text-grey-500",domProps:{innerHTML:t._s(t.decode(t.post.selftext_html))}}),t.post.secure_media?a("div",{staticClass:"mt-4"},[a("span",{domProps:{innerHTML:t._s(t.domDecoder(t.post.secure_media.oembed.html))}})]):"image"==t.post.post_hint||t.isImageUrl(t.post.url)?a("div",[a("img",{attrs:{src:t.post.url,width:"100%"}}),t.post.media&&t.post.media.reddit_video?a("video",{attrs:{controls:"",autoplay:""}},[a("source",{attrs:{src:t.post.media.reddit_video.fallback_url,type:"video/mp4"}})]):t.post.preview&&t.post.preview.reddit_video_preview?a("video",{attrs:{controls:"",autoplay:""}},[a("source",{attrs:{src:t.post.preview.reddit_video_preview.fallback_url,type:"video/mp4"}})]):t._e()]):t._e(),a("hr",{staticClass:"my-5"}),t._l(t.comments,(function(t){return a("Comments",{key:t.data.id,staticClass:"ml-n3",attrs:{data:t.data}})}))],2),a("div",{staticClass:"col-2"},[a("small",[t._v(t._s(t.post.num_comments)+" comments")]),a("br"),a("small",{staticClass:"text-muted"},[t._v(t._s(t.post.domain))])])])])])},S=[],j=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"p-3 hoverable"},[a("p",{staticClass:"m-0",on:{click:function(e){t.show=!t.show}}},[a("a",{attrs:{href:"#"}},[t._v(t._s(t.data.author))]),t._v(" "+t._s(t.data.score)+" points · "+t._s(t._f("moment")(t.data.created_utc,"from"))+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mb-n3"},[a("div",{domProps:{innerHTML:t._s(t.decode(t.data.body_html))},on:{click:function(e){t.show=!t.show}}})])]),t.data.replies&&t.show?a("div",{staticClass:"ml-3 replies"},t._l(t.data.replies.data.children.filter((function(t){return"t1"==t.kind})),(function(t){return a("Comments",{key:t.data.id,attrs:{data:t.data}})})),1):t._e()])}),O=[],P={components:{Comments:q},name:"Comments",props:{data:Object},data:function(){return{show:!0}},methods:{decode:function(t){if(!t)return"";var e=new DOMParser,a=e.parseFromString("<!doctype html><body>"+t,"text/html");return a.body.textContent}}},M=P,T=(a("37d9"),Object(o["a"])(M,j,O,!1,null,null,null)),q=T.exports,D={components:{Comments:q},mounted:function(){this.refresh()},data:function(){return{post:{title:this.$store.get("post_title"),selftext_html:this.$store.get("post_selftext_html"),score:this.$store.get("post_score")},comments:{}}},watch:{$route:function(){this.post={},this.comments={},this.refresh()}},methods:{isImageUrl:function(t){return!!t&&(t.endsWith(".jpg")||t.endsWith(".gif")||t.endsWith(".gifv")||t.endsWith(".png"))},decode:function(t){if(!t)return"";var e=new DOMParser,a=e.parseFromString("<!doctype html><body>"+t,"text/html");return a.body.textContent},refresh:function(){var t=this,e="https://www.reddit.com/r/".concat(this.$route.params.subreddit,"/comments/").concat(this.$route.params.commentId,"/").concat(this.$route.params.threadTitle,"/.json");p.a.get(e).then((function(e){t.post=e.data[0].data.children[0].data,t.comments=e.data[1].data.children}))},displayScore:function(t){return t<1e3?t:"".concat(Math.round(t/1e3),"k")}}},W=D,A=Object(o["a"])(W,$,S,!1,null,null,null),H=A.exports;s["a"].use(c["a"]);var I=[{path:"/:subreddit?",name:"home",component:b},{path:"/list/:subreddit?",name:"list",component:x},{path:"/r/:subreddit/comments/:commentId/:threadTitle",name:"post",component:H}],N=new c["a"]({routes:I}),L=N,E=a("2f62"),U=a("7ffd");s["a"].use(E["a"]);var F={post_title:"",post_selftext_html:"",post_score:0},R=U["b"].mutations(F),Y=new E["a"].Store({plugins:[U["a"].plugin],state:F,mutations:R});s["a"].use(a("2ead")),s["a"].config.productionTip=!1,new s["a"]({router:L,store:Y,render:function(t){return t(d)}}).$mount("#app")},7547:function(t,e,a){},b692:function(t,e,a){},bea8:function(t,e,a){"use strict";var s=a("0edd"),r=a.n(s);r.a},ebb3:function(t,e,a){"use strict";var s=a("7547"),r=a.n(s);r.a}});
//# sourceMappingURL=app.27f75d9c.js.map