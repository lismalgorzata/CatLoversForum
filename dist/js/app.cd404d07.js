(function(){"use strict";var e={5992:function(e,t,s){s.d(t,{db:function(){return za}});var a=s(5130),o=s(6768);const i={class:"bg-light"};function r(e,t,s,a,r,l){const n=(0,o.g2)("app-navbar"),c=(0,o.g2)("router-view"),d=(0,o.g2)("app-footer");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(n),(0,o.bF)(c,{style:{"min-height":"100vh"}}),(0,o.bF)(d)])}const l={class:"navbar navbar-expand-lg bg-primary sticky-top"},n={class:"container-fluid justify-content-between"},c={class:"navbar-nav flex-row"},d={class:"nav-item me-3 me-lg-1 active"},u={class:"navbar-brand mx-auto fw-bold"},p={class:"navbar-nav flex-row"},m={class:"nav-item me-3 me-lg-1"},h=(0,o.Lk)("i",{class:"bi bi-box-arrow-right"},null,-1),g=[h];function b(e,t,s,a,i,r){const h=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",l,[(0,o.Lk)("div",n,[(0,o.Lk)("ul",c,[(0,o.Lk)("li",d,[(0,o.Lk)("div",u,[(0,o.bF)(h,{to:{name:"home"},class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Cat Lovers Forum")])),_:1})])])]),(0,o.Lk)("ul",p,[(0,o.Lk)("li",m,[i.isLoggedIn?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(h,{key:0,to:{name:"login"},class:"btn btn-outline-dark me-2"},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})),i.isLoggedIn?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(h,{key:1,to:{name:"register"},class:"btn btn-outline-dark me-2"},{default:(0,o.k6)((()=>[(0,o.eW)("Register")])),_:1})),i.isLoggedIn?((0,o.uX)(),(0,o.CE)("button",{key:2,class:"btn btn-outline-dark me-2",onClick:t[0]||(t[0]=(...e)=>r.handleSignOut&&r.handleSignOut(...e))},g)):(0,o.Q3)("",!0)])])])])}s(4114);var k=s(5002),v={name:"AppNavar",data(){return{isLoggedIn:"",auth:""}},mounted(){this.auth=k.xI,this.auth().onAuthStateChanged((e=>{this.isLoggedIn=!!e}))},methods:{handleSignOut(){this.auth().signOut(this.auth).then((()=>{this.$router.push({name:"home"})}))}}},f=s(1241);const L=(0,f.A)(v,[["render",b]]);var w=L,y=s(4232);const x={key:0,class:"navbar navbar-expand-lg bg-success sticky-bottom"},P={class:"container-fluid justify-content-between"},I={class:"d-flex"},E=(0,o.Lk)("i",{class:"bi bi-house-heart-fill display-5"},null,-1),C=(0,o.Lk)("div",{class:"d-flex align-items-center",style:{"margin-left":"15px"}},[(0,o.Lk)("button",{type:"button",class:"btn btn-success"},[(0,o.Lk)("i",{class:"bi bi-plus-circle-fill display-5"})])],-1),S={class:"navbar-nav flex-row"},D={class:"nav-item me-3 me-lg-1"},U=(0,o.Lk)("i",{class:"bi bi-person-circle display-5"},null,-1);function A(e,t,s,a,i,r){const l=(0,o.g2)("router-link");return i.isLoggedIn?((0,o.uX)(),(0,o.CE)("nav",x,[(0,o.Lk)("div",P,[(0,o.Lk)("div",I,[(0,o.bF)(l,{to:{name:"dashboard"},class:(0,y.C4)(["nav-link",{active:i.isLoggedIn,disabled:!i.isLoggedIn}]),style:{"margin-left":"15px"}},{default:(0,o.k6)((()=>[E])),_:1},8,["class"])]),C,(0,o.Lk)("ul",S,[(0,o.Lk)("li",D,[(0,o.bF)(l,{to:{name:"profile"},style:{"margin-right":"15px"}},{default:(0,o.k6)((()=>[U])),_:1})])])])])):(0,o.Q3)("",!0)}var _={name:"AppFooter",components:{},data(){return{isLoggedIn:"",auth:""}},mounted(){this.auth=k.xI,this.auth().onAuthStateChanged((e=>{this.isLoggedIn=!!e}))},methods:{handleSignOut(){this.auth().signOut(this.auth).then((()=>{this.$router.push({name:"home"})}))}}};const F=(0,f.A)(_,[["render",A]]);var M=F,T={name:"App",components:{AppNavbar:w,AppFooter:M}};const X=(0,f.A)(T,[["render",r]]);var O=X,V=s(1387);const j={id:"carouselExample",class:"carousel slide",style:{"background-color":"#DDC7AB"}},W=(0,o.Fv)('<div class="carousel-inner"><div class="carousel-item active"><h1 style="color:#E08989;">Something here</h1></div><div class="carousel-item"><h1 style="color:#E08989;">Something here</h1></div><div class="carousel-item"><h1 style="color:#E08989;">Something here</h1></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',3),B=[W];function G(e,t,s,a,i,r){return(0,o.uX)(),(0,o.CE)("div",j,B)}var H={name:"AppHomeView"};const Q=(0,f.A)(H,[["render",G]]);var $=Q,q=s.p+"img/1.79b1581c.jpeg",J=s.p+"img/2.fcbff0ef.jpeg",N=s.p+"img/3.86e3436d.jpeg",R=s.p+"img/4.f6755558.jpeg",K=s.p+"img/5.e9cbecb2.jpeg",Y=s.p+"img/6.4f1eac10.jpeg",z=s.p+"img/7.b0ce8dbf.jpeg",Z=s.p+"img/8.b18476a0.jpeg",ee=s.p+"img/9.955be152.jpeg",te=s.p+"img/logo.0bc4a3a2.png";const se={class:"vh-100 scrollable-section",style:{"background-color":"white"}},ae={class:"container py-5 h-100"},oe={class:"row d-flex justify-content-center align-items-center h-100"},ie={class:"col col-xl-10"},re={class:"card",style:{"border-radius":"1rem"}},le={class:"row g-0"},ne=(0,o.Fv)('<div class="col-md-6 col-lg-5 d-none d-md-block"><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style="border-radius:1rem 0 0 1rem;"><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="2000"><img src="'+q+'" class="d-block w-100" alt="cat1"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+J+'" class="d-block w-100" alt="cat2"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+N+'" class="d-block w-100" alt="cat3"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+R+'" class="d-block w-100" alt="cat4"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+K+'" class="d-block w-100" alt="cat5"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+Y+'" class="d-block w-100" alt="cat6"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+z+'" class="d-block w-100" alt="cat7"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+Z+'" class="d-block w-100" alt="cat8"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+ee+'" class="d-block w-100" alt="cat9"></div></div></div></div>',1),ce={class:"col-md-6 col-lg-7 d-flex align-items-center"},de={class:"card-body p-4 p-lg-5 text-black"},ue=(0,o.Lk)("div",{class:"d-flex align-items-center mb-3 pb-1"},[(0,o.Lk)("img",{src:te,alt:"Logo",style:{width:"99%",height:"99%","margin-right":"10px"}})],-1),pe=(0,o.Lk)("h5",{class:"fw-normal mb-3 pb-3",style:{"letter-spacing":"1px"}},"Sign into your account",-1),me={key:0,class:"alert alert-danger small-alert"},he={"data-mdb-input-init":"",class:"form-outline mb-4"},ge=(0,o.Lk)("label",{class:"form-label",for:"form2Example17"},"Email address",-1),be={"data-mdb-input-init":"",class:"form-outline mb-4"},ke=(0,o.Lk)("label",{class:"form-label",for:"form2Example27"},"Password",-1),ve={class:"pt-1 mb-4"},fe={class:"mb-3 pb-lg-2"};function Le(e,t,s,i,r,l){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("section",se,[(0,o.Lk)("div",ae,[(0,o.Lk)("div",oe,[(0,o.Lk)("div",ie,[(0,o.Lk)("div",re,[(0,o.Lk)("div",le,[ne,(0,o.Lk)("div",ce,[(0,o.Lk)("div",de,[(0,o.Lk)("form",null,[ue,pe,r.error?((0,o.uX)(),(0,o.CE)("div",me,(0,y.v_)(l.errorToString(r.error)),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",he,[(0,o.bo)((0,o.Lk)("input",{type:"email",placeholder:"jamessmith@example.com",id:"form2Example17",class:"form-control form-control-lg","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[a.Jo,r.email]]),ge]),(0,o.Lk)("div",be,[(0,o.bo)((0,o.Lk)("input",{type:"password",placeholder:"•••••••••••••••",id:"form2Example27",class:"form-control form-control-lg","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[a.Jo,r.password]]),ke]),(0,o.Lk)("div",ve,[(0,o.Lk)("button",{class:"btn btn-dark btn-lg btn-block",type:"button",onClick:t[2]||(t[2]=(...e)=>l.login&&l.login(...e)),style:{"margin-right":"20px"}},"Login"),(0,o.Lk)("button",{type:"button",class:"btn btn-lg btn-outline-dark my-2",onClick:t[3]||(t[3]=(...e)=>l.signInWithGoogle&&l.signInWithGoogle(...e))},"Sign in with Google")]),(0,o.Lk)("p",fe,[(0,o.eW)("Don't have an account? "),(0,o.bF)(n,{to:{name:"register"}},{default:(0,o.k6)((()=>[(0,o.eW)("Register here")])),_:1})])])])])])])])])])])}var we={name:"AppLoginView",methods:{login(){const e=(0,k.xI)();(0,k.x9)(e,this.email,this.password).then((e=>{console.log(e),this.$router.push({name:"dashboard"})})).catch((e=>{this.error=e,console.log(e.code)}))},signInWithGoogle(){const e=new k.HF;(0,k.df)((0,k.xI)(),e).then((e=>{console.log(e),this.$router.push({name:"dashboard"})})).catch((e=>{alert(e.code)}))},errorToString(e){switch(e.code){case"auth/invalid-email":return"Invalid email";case"auth/user-not-found":return"User not found";case"auth/missing-password":return"Missing password";case"auth/invalid-login-credentials":return"Invalid login credentials";default:return"Unknown error"}}},data(){return{email:"",password:"",error:""}}};const ye=(0,f.A)(we,[["render",Le]]);var xe=ye;const Pe={class:"vh-100",style:{"background-color":"white"}},Ie={class:"container py-5 h-100"},Ee={class:"row d-flex justify-content-center align-items-center h-100"},Ce={class:"col col-xl-10"},Se={class:"card",style:{"border-radius":"1rem"}},De={class:"row g-0"},Ue=(0,o.Fv)('<div class="col-md-6 col-lg-5 d-none d-md-block"><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style="border-radius:1rem 0 0 1rem;"><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="2000"><img src="'+q+'" class="d-block w-100" alt="cat1"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+J+'" class="d-block w-100" alt="cat2"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+N+'" class="d-block w-100" alt="cat3"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+R+'" class="d-block w-100" alt="cat4"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+K+'" class="d-block w-100" alt="cat5"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+Y+'" class="d-block w-100" alt="cat6"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+z+'" class="d-block w-100" alt="cat7"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+Z+'" class="d-block w-100" alt="cat8"></div><div class="carousel-item" data-bs-interval="2000"><img src="'+ee+'" class="d-block w-100" alt="cat9"></div></div></div></div>',1),Ae={class:"col-md-6 col-lg-7 d-flex align-items-center"},_e={class:"card-body p-4 p-lg-5 text-black"},Fe=(0,o.Lk)("div",{class:"d-flex align-items-center mb-3 pb-1"},[(0,o.Lk)("img",{src:te,alt:"Logo",style:{width:"99%",height:"99%","margin-right":"10px"}})],-1),Me=(0,o.Lk)("h5",{class:"fw-normal mb-3 pb-3",style:{"letter-spacing":"1px"}},"Sign up",-1),Te={key:0,class:"alert alert-danger small-alert"},Xe={class:"form-outline mb-4"},Oe=(0,o.Lk)("label",{class:"form-label",for:"form2Example17"},"Email address",-1),Ve={class:"form-outline"},je=(0,o.Lk)("label",{class:"form-label",for:"form2Example27"},"Password",-1),We={key:1,class:"text-danger"},Be={class:"pt-1 mb-4 mt-4"},Ge={class:"mb-3 pb-lg-2"};function He(e,t,s,i,r,l){const n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("section",Pe,[(0,o.Lk)("div",Ie,[(0,o.Lk)("div",Ee,[(0,o.Lk)("div",Ce,[(0,o.Lk)("div",Se,[(0,o.Lk)("div",De,[Ue,(0,o.Lk)("div",Ae,[(0,o.Lk)("div",_e,[(0,o.Lk)("form",null,[Fe,Me,r.error?((0,o.uX)(),(0,o.CE)("div",Te,(0,y.v_)(l.errorToString(r.error)),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",Xe,[(0,o.bo)((0,o.Lk)("input",{type:"email",placeholder:"jamessmith@example.com",id:"form2Example17",class:"form-control form-control-lg","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[a.Jo,r.email]]),Oe]),(0,o.Lk)("div",Ve,[(0,o.bo)((0,o.Lk)("input",{type:"password",placeholder:"•••••••••••••••",id:"form2Example27",class:"form-control form-control-lg","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[a.Jo,r.password]]),je]),r.password.length>0&&r.password.length<8?((0,o.uX)(),(0,o.CE)("div",We,"Password is too short (min. 8 characters)")):(0,o.Q3)("",!0),(0,o.Lk)("div",Be,[(0,o.Lk)("button",{class:"btn btn-dark btn-lg btn-block",type:"button",onClick:t[2]||(t[2]=(...e)=>l.register&&l.register(...e)),style:{"margin-right":"20px"}},"Register"),(0,o.Lk)("button",{type:"button",class:"btn btn-lg btn-outline-dark my-2",onClick:t[3]||(t[3]=(...e)=>l.signInWithGoogle&&l.signInWithGoogle(...e))}," Sign in with Google ")]),(0,o.Lk)("p",Ge,[(0,o.eW)("Already have an account? "),(0,o.bF)(n,{to:{name:"login"}},{default:(0,o.k6)((()=>[(0,o.eW)("Login here")])),_:1})])])])])])])])])])])}var Qe={name:"AppRegisterView",methods:{register(){(0,k.eJ)((0,k.xI)(),this.email,this.password).then((e=>{console.log(e),this.$router.push({name:"dashboard"})})).catch((e=>{this.error=e,console.log(e.code)}))},signInWithGoogle(){const e=new k.HF;(0,k.df)((0,k.xI)(),e).then((e=>{console.log(e),this.$router.push({name:"dashboard"})})).catch((e=>{alert(e.code)}))},errorToString(e){switch(e.code){case"auth/invalid-email":return"Invalid email";case"auth/user-not-found":return"User not found";case"auth/missing-password":return"Missing password";case"auth/invalid-login-credentials":return"Invalid login credentials";case"auth/missing-email":return"Missing email";default:return"Unknown error"}}},data(){return{email:"",password:"",error:""}}};const $e=(0,f.A)(Qe,[["render",He]]);var qe=$e;const Je={class:"p-5 d-flex flex-column"},Ne=(0,o.Lk)("h2",{class:"fw-bold font"},"Posts",-1),Re={class:"d-flex flex-column align-items-center"};function Ke(e,t,s,a,i,r){const l=(0,o.g2)("PostsList");return(0,o.uX)(),(0,o.CE)("div",Je,[Ne,(0,o.Lk)("div",Re,[(0,o.bF)(l,{uid:""})])])}function Ye(e,t,s,a,i,r){const l=(0,o.g2)("Post");return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.posts,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"",style:{width:"100%","max-width":"50rem"}},[1==e.data.data.visibleForOthers?((0,o.uX)(),(0,o.Wv)(l,{key:0,post:e},null,8,["post"])):(0,o.Q3)("",!0)])))),128)}var ze=s(9675),Ze=s(1606),et=s.n(Ze);const tt={getPostsByUserId:"[firedb] getPostsByUserId",addPost:"[firedb] addPost",updatePassword:"[auth] Update Password",getUserDetails:"[auth] Get User Details",getLikesForPosts:"[firedb] getLikesForPosts",incrementLikes:"[firedb] Increment Likes",decrementLikes:"[firedb] Decrement Likes",checkUserLike:"[firedb] Check User Like"},st={setPosts:"[firedb] setPosts",addPostSuccess:"[firedb] addPostSuccess",addPostStart:"[firedb] addPostStart",setLikes:"[firedb] setLikes",incrementLikesSuccess:"[firedb] Increment Likes Success"},at={posts:void 0,isLoading:!1,likes:{}},ot={[st.setPosts](e,t){e.posts=t},[st.addPostSuccess](e){e.isLoading=!1},[st.addPostStart](e){e.isLoading=!0},[st.setLikes](e,t){e.likes=t},[st.incrementLikesSuccess](e,{postId:t,newLikes:s}){et().set(e.likes,t,s),console.log(`Likes for post ${t} incremented successfully to ${s}`)}},it={[tt.getPostsByUserId](e,{uid:t}){return new Promise((s=>{e.commit(st.addPostStart);let a=(0,ze.P)((0,ze.rJ)(za,"posts"),(0,ze.My)("created","desc"));t&&(a=(0,ze.P)((0,ze.rJ)(za,"posts"),(0,ze._M)("uid","==",t),(0,ze.My)("created","desc"))),(0,ze.GG)(a).then((t=>{const a=t.docs.map((e=>(e.data(),{id:e.id,data:e.data()})));e.commit(st.setPosts,a),s()}))}))},[tt.addPost](e,t){return new Promise((s=>{const a=(0,k.xI)();(0,k.hg)(a,(a=>{(0,ze.gS)((0,ze.rJ)(za,"posts"),{data:t,uid:a.uid,created:(0,ze.O5)()}),e.commit(st.addPostSuccess),s()}))}))},[tt.updatePassword](e,{newPassword:t}){return new Promise(((e,s)=>{const a=(0,k.xI)(),o=a.currentUser;o?(0,k.f3)(o,t).then((()=>{e("Password updated successfully")})).catch((e=>{s(e)})):s("No authenticated user")}))},[tt.getLikesForPosts](e){return new Promise((t=>{const s=(0,ze.P)((0,ze.rJ)(za,"posts"),(0,ze.My)("created","desc"));(0,ze.GG)(s).then((s=>{const a=s.docs.map((e=>{const t=e.data();return{id:e.id,likes:t.likes||0}}));e.commit(st.setLikes,a),t(a)})).catch((e=>{console.error("Error getting likes for posts:",e),t([])}))}))},[tt.incrementLikes](e,{postId:t,userId:s}){const a=(0,ze.H9)(za,"posts",t),o=(0,ze.rJ)(za,"userLikes");return new Promise(((e,i)=>{(0,ze.mZ)(a,{likes:(0,ze.GV)(1)}).then((()=>(console.log("Likes incremented successfully."),(0,ze.gS)(o,{postId:t,userId:s,date:new Date})))).then((()=>{console.log("User like added successfully."),e()})).catch((e=>{console.error("Failed to increment likes or add user like:",e),i(e)}))}))},[tt.decrementLikes](e,{postId:t,userId:s}){const a=(0,ze.H9)(za,"posts",t),o=(0,ze.rJ)(za,"userLikes"),i=(0,ze.P)(o,(0,ze._M)("postId","==",t),(0,ze._M)("userId","==",s));return new Promise(((e,t)=>{(0,ze.GG)(i).then((s=>{s.forEach((e=>{(0,ze.kd)(e.ref)})),(0,ze.mZ)(a,{likes:(0,ze.GV)(-1)}).then((()=>{console.log("Likes decremented successfully."),e()})).catch((e=>{console.error("Failed to decrement likes:",e),t(e)}))})).catch((e=>{console.error("Failed to find user like document:",e),t(e)}))}))},[tt.checkUserLike](e,{postId:t,userId:s}){const a=(0,ze.rJ)(za,"userLikes"),o=(0,ze.P)(a,(0,ze._M)("postId","==",t),(0,ze._M)("userId","==",s));return(0,ze.GG)(o).then((e=>e.size>0)).catch((e=>(console.error("Failed to check user likes:",e),!1)))},[tt.getUserDetails](){return new Promise(((e,t)=>{const s=(0,k.xI)(),a=s.currentUser;if(a){const t={uid:a.uid,email:a.email,providers:a.providerData.map((e=>e.providerId)),created:a.metadata.creationTime,lastSignIn:a.metadata.lastSignInTime};e(t)}else t("No authenticated user")}))}};var rt={actions:it,mutations:ot,state:at},lt=s(782);const nt={class:"card-body position-relative"},ct=["id"],dt={class:"d-flex align-items-end"},ut=["data-bs-target"],pt={class:"card-text"},mt={class:"d-flex flex-row p-2"},ht={class:"position-absolute end-0"},gt={class:"d-flex flex-row justify-content-between align-items-center my-3"},bt={class:"container"},kt={class:"row align-items-center"},vt={class:"col-auto align-items-lg-start"},ft=(0,o.Lk)("i",{class:"bi bi-suit-heart mx-1"},null,-1),Lt=[ft],wt={class:"col-auto"},yt={class:"mb-0"};function xt(e,t,s,a,i,r){const l=(0,o.g2)("PostModal"),n=(0,o.g2)("EditPostButton"),c=(0,o.g2)("DeleteButton");return(0,o.uX)(),(0,o.CE)("div",{class:(0,y.C4)({card:!0,"border-white":!0,"mb-3":!0,shadow:!0,rounded:!0,[i.postColor]:!0}),style:{"min-height":"10rem"}},[(0,o.Lk)("div",nt,[(0,o.Lk)("div",{class:"modal fade",id:"id"+i.postId,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[(0,o.bF)(l,{postData:s.post.data.data,postId:i.postId},null,8,["postData","postId"])],8,ct),(0,o.Lk)("div",dt,[(0,o.Lk)("h5",{class:"card-title",style:{cursor:"pointer"},"data-bs-toggle":"modal","data-bs-target":"#id"+i.postId},(0,y.v_)(s.post.data.data.title),9,ut),r.isPostOwner?((0,o.uX)(),(0,o.Wv)(n,{key:0,postData:s.post.data.data,postId:i.postId},null,8,["postData","postId"])):(0,o.Q3)("",!0)]),(0,o.Lk)("p",pt,(0,y.v_)(s.post.data.data.content),1)]),(0,o.Lk)("div",mt,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.post.data.data.tags,((e,t)=>((0,o.uX)(),(0,o.CE)("small",{key:t,class:"p-1 fw-bold text-white me-2 mt-2 badge bg-success border"},(0,y.v_)(e),1)))),128))]),(0,o.Lk)("div",ht,[r.isPostOwner?((0,o.uX)(),(0,o.Wv)(c,{key:0,postId:i.postId},null,8,["postId"])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",gt,[(0,o.Lk)("div",bt,[(0,o.Lk)("div",kt,[(0,o.Lk)("div",vt,[(0,o.Lk)("button",{class:(0,y.C4)(["btn",{"btn-outline-primary":!i.userHasLiked,"btn-primary text-dark":i.userHasLiked}]),onClick:t[0]||(t[0]=(...e)=>r.toggleLike&&r.toggleLike(...e))},Lt,2)]),(0,o.Lk)("div",wt,[(0,o.Lk)("h6",yt,(0,y.v_)(i.postLikes),1)])])])])],2)}const Pt=(0,o.Lk)("h4",null,[(0,o.Lk)("i",{class:"bi bi-x text-danger"})],-1),It=[Pt];function Et(e,t,s,a,i,r){return(0,o.uX)(),(0,o.CE)("button",{type:"button",class:"btn btn-link",onClick:t[0]||(t[0]=(...e)=>r.deletePost&&r.deletePost(...e))},It)}var Ct={name:"DeleteButton",props:{postId:{type:String,required:!0}},methods:{deletePost(){return new Promise((e=>{(0,ze.kd)((0,ze.H9)(za,"posts",this.postId)).then((()=>{this.$router.go(),e()}))}))}}};const St=(0,f.A)(Ct,[["render",Et]]);var Dt=St;const Ut=["data-bs-target"],At=(0,o.Lk)("i",{class:"bi bi-pencil"},null,-1),_t=[At],Ft=["id"],Mt={class:"modal-dialog"},Tt=(0,o.Lk)("div",{class:"modal-header"},[(0,o.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Edit post"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Xt={class:"modal-body"},Ot={class:"mb-3"},Vt=(0,o.Lk)("label",{for:"titleInput",class:"form-label"},"Title",-1),jt={class:"form-group"},Wt=(0,o.Lk)("label",{for:"exampleFormControlTextarea1"},"Post content",-1),Bt={id:"textAreaHelpblock",class:"form-text text-muted"},Gt=(0,o.Lk)("div",null," Visibility ",-1),Ht={class:"form-check"},Qt=(0,o.Lk)("label",{class:"form-check-label",for:"flexRadioDefault2"}," Public ",-1),$t={class:"form-check"},qt=(0,o.Lk)("label",{class:"form-check-label",for:"flexRadioDefault1"}," Private ",-1),Jt={class:"form-group"},Nt=(0,o.Lk)("label",{for:"exampleFormSelect"},"Post color ",-1),Rt=(0,o.Lk)("option",{value:"text-bg-white"},"White",-1),Kt=(0,o.Lk)("option",{value:"text-bg-primary"},"Light Brown",-1),Yt=(0,o.Lk)("option",{value:"text-bg-secondary"},"Dark Brown",-1),zt=(0,o.Lk)("option",{value:"text-bg-warning"},"Light Sea",-1),Zt=[Rt,Kt,Yt,zt],es={class:"pt-3 pb-3"},ts={class:"form-check form-check-inline"},ss=(0,o.Lk)("label",{class:"form-check-label",for:"inlineCheckbox1"},"School",-1),as={class:"form-check form-check-inline"},os=(0,o.Lk)("label",{class:"form-check-label",for:"inlineCheckbox2"},"Work",-1),is={class:"form-check form-check-inline"},rs=(0,o.Lk)("label",{class:"form-check-label",for:"inlineCheckbox3"},"Personal",-1);function ls(e,t,s,i,r,l){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("button",{class:"btn btn-link text-info","data-bs-toggle":"modal","data-bs-target":"#id_edit"+s.postId},_t,8,Ut),(0,o.Lk)("div",{class:"modal fade modal-lg",id:"id_edit"+s.postId,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[(0,o.Lk)("div",Mt,[(0,o.Lk)("div",{class:(0,y.C4)({"modal-content":!0,[r.postColor]:!0})},[Tt,(0,o.Lk)("div",Xt,[(0,o.Lk)("form",{onSubmit:t[9]||(t[9]=(0,a.D$)((()=>{}),["prevent"]))},[(0,o.Lk)("div",null,[(0,o.Lk)("div",Ot,[Vt,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"titleInput",maxlength:"60","aria-describedby":"textHelp","onUpdate:modelValue":t[0]||(t[0]=e=>r.postTitle=e)},null,512),[[a.Jo,r.postTitle]])]),(0,o.Lk)("div",jt,[Wt,(0,o.bo)((0,o.Lk)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","aria-describedby":"textAreaHelpblock",maxlength:"255",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>r.postContent=e)},null,512),[[a.Jo,r.postContent]])]),(0,o.Lk)("small",Bt,(0,y.v_)(r.postContent.length)+"/255 ",1),Gt,(0,o.Lk)("div",Ht,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"true","onUpdate:modelValue":t[2]||(t[2]=e=>r.postVisibleForOthers=e),checked:""},null,512),[[a.XL,r.postVisibleForOthers]]),Qt]),(0,o.Lk)("div",$t,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:"false","onUpdate:modelValue":t[3]||(t[3]=e=>r.postVisibleForOthers=e)},null,512),[[a.XL,r.postVisibleForOthers]]),qt]),(0,o.Lk)("div",Jt,[Nt,(0,o.bo)((0,o.Lk)("select",{class:"form-select",id:"selectColor",disabled:"","onUpdate:modelValue":t[4]||(t[4]=e=>r.postColor=e)},Zt,512),[[a.u1,r.postColor]])]),(0,o.Lk)("div",es,[(0,o.Lk)("div",ts,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox",id:"checkbox1",value:"School","onUpdate:modelValue":t[5]||(t[5]=e=>r.isSchool=e)},null,512),[[a.lH,r.isSchool]]),ss]),(0,o.Lk)("div",as,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox",id:"checkbox2",value:"Work","onUpdate:modelValue":t[6]||(t[6]=e=>r.isWork=e)},null,512),[[a.lH,r.isWork]]),os]),(0,o.Lk)("div",is,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox",id:"checkbox3",value:"Personal","onUpdate:modelValue":t[7]||(t[7]=e=>r.isPersonal=e)},null,512),[[a.lH,r.isPersonal]]),rs])])]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{class:"btn btn-success p-1 m-1 text-white",onClick:t[8]||(t[8]=(...e)=>l.submit&&l.submit(...e))}," Submit ")])],32)])],2)])],8,Ft)],64)}var ns={name:"EditPostButton",props:{postData:{type:Object,required:!0},postId:{type:String,required:!0}},data(){return{postTitle:this.postData.title,postContent:this.postData.content,isSchool:this.postData.tags.includes("School"),isWork:this.postData.tags.includes("Work"),isPersonal:this.postData.tags.includes("Personal"),postColor:this.postData.color,postVisibleForOthers:this.postData.visibleForOthers}},methods:{async submit(){const e=(0,ze.H9)(za,"posts",this.postId),t=await(0,ze.x7)(e),s=t.data(),a={...s,data:{title:this.postTitle,content:this.postContent,color:this.postColor,visibleForOthers:"true"===this.postVisibleForOthers,tags:[this.isSchool?"School":null,this.isWork?"Work":null,this.isPersonal?"Personal":null].filter((e=>null!==e))}};(0,ze.mZ)(e,a),await new Promise((e=>setTimeout(e,500))),this.$router.go()}}};const cs=(0,f.A)(ns,[["render",ls]]);var ds=cs;const us={class:"modal-dialog"},ps={class:"modal-header"},ms={class:"modal-title fs-5",id:"exampleModalLabel"},hs=(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),gs={class:"modal-body position-relative"},bs={class:"d-flex flex-row"};function ks(e,t,s,a,i,r){return(0,o.uX)(),(0,o.CE)("div",us,[(0,o.Lk)("div",{class:(0,y.C4)({"modal-content":!0,[i.postColor]:!0})},[(0,o.Lk)("div",ps,[(0,o.Lk)("h1",ms,(0,y.v_)(s.postData.title),1),hs]),(0,o.Lk)("div",gs,[(0,o.Lk)("div",null,(0,y.v_)(s.postData.content),1),(0,o.Lk)("div",bs,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.postData.tags,((e,t)=>((0,o.uX)(),(0,o.CE)("small",{key:t,class:"fw-bold text-white me-2 mt-2 badge bg-success border"},(0,y.v_)(e),1)))),128))])])],2)])}var vs={name:"PostModal",props:{postData:{type:Object,required:!0},postId:{type:String,required:!0}},data(){return{postColor:this.postData.color}}};const fs=(0,f.A)(vs,[["render",ks]]);var Ls=fs,ws={name:"AppPostsView",props:{post:{type:Object,required:!0}},data(){return{auth:"",currentUserId:"",postId:this.post.id,postColor:this.post.data.data.color,postLikes:this.post.data.likes,userHasLiked:!1}},components:{DeleteButton:Dt,EditPostButton:ds,PostModal:Ls},mounted(){this.auth=k.xI,this.auth().onAuthStateChanged((e=>{e&&(this.currentUserId=e.uid,this.checkUserLike())}))},computed:{isPostOwner(){return this.post.data.uid===this.currentUserId}},methods:{toggleLike(){this.userHasLiked?this.$store.dispatch(tt.decrementLikes,{postId:this.post.id,userId:this.currentUserId}).then((()=>{this.userHasLiked=!1,this.postLikes-=1,console.log("Like removed successfully.")})).catch((e=>{console.error("Error decrementing likes:",e)})):this.$store.dispatch(tt.incrementLikes,{postId:this.post.id,userId:this.currentUserId}).then((()=>{this.userHasLiked=!0,this.postLikes+=1,console.log("Like added successfully.")})).catch((e=>{console.error("Error incrementing likes:",e)}))},checkUserLike(){this.$store.dispatch(tt.checkUserLike,{postId:this.post.id,userId:this.currentUserId}).then((e=>{this.userHasLiked=e}))}}};const ys=(0,f.A)(ws,[["render",xt]]);var xs=ys,Ps={name:"AppPostsView",props:{uid:{type:String,required:!1},onlyMyPosts:{type:Boolean,required:!1}},components:{Post:xs},computed:{...(0,lt.aH)({posts:e=>e.firebase.posts})},mounted(){this.$store.dispatch(tt.getPostsByUserId,{uid:this.uid})}};const Is=(0,f.A)(Ps,[["render",Ye]]);var Es=Is,Cs={name:"AppDashboardView",components:{PostsList:Es}};const Ss=(0,f.A)(Cs,[["render",Ke]]);var Ds=Ss;const Us={class:"container"},As={class:"row"},_s={class:"col-md-4 mt-4"},Fs=(0,o.Lk)("div",{class:"badge bg-success text-wrap fs-5 mb-4"},"Your Profile",-1),Ms={class:"col-md-8 mt-4"},Ts=(0,o.Lk)("div",{class:"badge bg-success text-wrap fs-5 mb-4"},"Your posts",-1);function Xs(e,t,s,a,i,r){const l=(0,o.g2)("app-user-data"),n=(0,o.g2)("app-user-posts");return(0,o.uX)(),(0,o.CE)("div",Us,[(0,o.Lk)("div",As,[(0,o.Lk)("div",_s,[Fs,(0,o.bF)(l)]),(0,o.Lk)("div",Ms,[Ts,(0,o.bF)(n)])])])}var Os=s.p+"img/profile-photo.3684c4a7.png",Vs=s.p+"img/google-icon.1f352370.png",js=s.p+"img/email-icon.72993c3c.png";const Ws={key:0,class:"container mb-2"},Bs={class:"row"},Gs=(0,o.Lk)("div",{class:"col-md-3"},[(0,o.Lk)("img",{src:Os,class:"img-fluid justify-content-center",style:{"max-width":"80px"}})],-1),Hs={class:"col-md-7 justify-content-center m-0"},Qs=(0,o.Lk)("div",{class:"badge bg-secondary text-wrap m-0"}," Created ",-1),$s={class:"h7 m-0"},qs=(0,o.Lk)("div",{class:"badge bg-secondary text-wrap mx-0"}," Last login ",-1),Js={class:"h7 m-0"},Ns={key:0,class:"col-md-2"},Rs={key:0,src:Vs,class:"img-fluid justify-content-center",style:{"max-width":"60px"}},Ks={key:1,src:js,class:"img-fluid justify-content-center",style:{"max-width":"60px"}};function Ys(e,t,s,a,i,r){const l=(0,o.g2)("app-user-form");return(0,o.uX)(),(0,o.CE)(o.FK,null,[i.userDetails?((0,o.uX)(),(0,o.CE)("div",Ws,[(0,o.Lk)("div",Bs,[Gs,(0,o.Lk)("div",Hs,[Qs,(0,o.Lk)("div",$s,(0,y.v_)(i.userDetails.created),1),qs,(0,o.Lk)("div",Js,(0,y.v_)(i.userDetails.lastSignIn),1)]),i.userDetails.providers?((0,o.uX)(),(0,o.CE)("div",Ns,[i.userDetails.providers.includes("google.com")?((0,o.uX)(),(0,o.CE)("img",Rs)):((0,o.uX)(),(0,o.CE)("img",Ks))])):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0),(0,o.bF)(l)],64)}const zs={key:0,class:"alert alert-success small-alert"},Zs={key:1,class:"alert alert-info small-alert"},ea=["disabled"],ta={class:"mb-3"},sa=["disabled"],aa=(0,o.Lk)("label",{for:"disabledTextInput",class:"form-label"},"Email",-1),oa=["placeholder"],ia={key:0,class:"mb-3"},ra=["disabled"],la=(0,o.Lk)("label",{for:"inputPassword5",class:"form-label"},"Password",-1),na=(0,o.Lk)("input",{type:"password",id:"inputPassword5",class:"form-control","aria-describedby":"passwordHelpBlock",placeholder:"•••••••••••"},null,-1),ca=[la,na],da={key:1},ua=(0,o.Lk)("label",{for:"inputPassword5",class:"form-label"},"Password",-1),pa=(0,o.Lk)("div",{class:"invalid-feedback"}," Please enter 6 characters password. ",-1),ma=["disabled"];function ha(e,t,s,i,r,l){return(0,o.uX)(),(0,o.CE)(o.FK,null,[r.successMessage?((0,o.uX)(),(0,o.CE)("div",zs,(0,y.v_)(r.successMessage),1)):(0,o.Q3)("",!0),r.errorMessage?((0,o.uX)(),(0,o.CE)("div",Zs,(0,y.v_)(r.errorMessage),1)):(0,o.Q3)("",!0),r.userDetails?((0,o.uX)(),(0,o.CE)("form",{key:2,class:"was-validated",onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>l.changePassword&&l.changePassword(...e)),["prevent"]))},[(0,o.Lk)("fieldset",{disabled:!r.editingMode},[(0,o.Lk)("div",ta,[(0,o.Lk)("fieldset",{disabled:r.editingMode},[aa,(0,o.Lk)("input",{type:"text",id:"disabledTextInput",class:"form-control",placeholder:r.userDetails.email},null,8,oa)],8,sa)]),r.userDetails.providers.includes("google.com")?((0,o.uX)(),(0,o.CE)("div",ia,[(0,o.Lk)("fieldset",{disabled:r.editingMode},ca,8,ra)])):((0,o.uX)(),(0,o.CE)("div",da,[ua,(0,o.bo)((0,o.Lk)("input",{type:"password",id:"inputPassword5",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>r.newPassword=e),class:"form-control","aria-describedby":"passwordHelpBlock",placeholder:"•••••••••••",minlength:"6"},null,512),[[a.Jo,r.newPassword]]),pa]))],8,ea),r.editingMode?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:0,type:"button",class:"btn btn-primary mb-5 mt-4",onClick:t[1]||(t[1]=(...e)=>l.setEditingMode&&l.setEditingMode(...e))},"Edit")),r.editingMode?((0,o.uX)(),(0,o.CE)("button",{key:1,type:"submit",class:"btn btn-secondary mb-5 mt-4",disabled:!r.newPassword||r.newPassword.length<6,onClick:t[2]||(t[2]=(...e)=>l.changePassword&&l.changePassword(...e))},"Submit",8,ma)):(0,o.Q3)("",!0),r.editingMode?((0,o.uX)(),(0,o.CE)("button",{key:2,type:"button",class:"btn btn-info mb-5 mx-2 mt-4",onClick:t[3]||(t[3]=(...e)=>l.setEditingMode&&l.setEditingMode(...e))},"Cancel")):(0,o.Q3)("",!0)],32)):(0,o.Q3)("",!0)],64)}var ga={name:"AppUserForm",components:{},props:{userId:{type:String,required:!0}},data(){return{userDetails:null,editingMode:!1,newPassword:"",repeatPassword:"",successMessage:"",errorMessage:""}},methods:{...(0,lt.i0)({getUserDetails:tt.getUserDetails,updatePassword:tt.updatePassword}),fetchUserDetails(){this.getUserDetails().then((e=>{this.userDetails=e})).catch((e=>{console.error(e)}))},setEditingMode(){this.editingMode=!this.editingMode},changePassword(){this.updatePassword({newPassword:this.newPassword}).then((()=>{this.successMessage="Password change successfully!"})).catch((e=>{this.errorMessage="An error occurred while changing the password - Sign Out and Sign In and try again.",console.log(e)})),this.setEditingMode()}},created(){this.fetchUserDetails()}};const ba=(0,f.A)(ga,[["render",ha]]);var ka=ba,va={name:"AppUserData",components:{AppUserForm:ka},data(){return{userDetails:null}},methods:{...(0,lt.i0)({getUserDetails:tt.getUserDetails}),fetchUserDetails(){this.getUserDetails().then((e=>{this.userDetails=e})).catch((e=>{console.error(e)}))}},created(){this.fetchUserDetails()}};const fa=(0,f.A)(va,[["render",Ys]]);var La=fa;function wa(e,t,s,a,i,r){const l=(0,o.g2)("PostsListProfileView");return i.userDetails?((0,o.uX)(),(0,o.Wv)(l,{key:0,uid:i.userDetails.uid},null,8,["uid"])):(0,o.Q3)("",!0)}function ya(e,t,s,a,i,r){const l=(0,o.g2)("Post");return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.posts,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"",style:{width:"100%","max-width":"50rem"}},[(0,o.bF)(l,{post:e},null,8,["post"])])))),128)}var xa={name:"AppPostsListProfileView",props:{uid:{type:String,required:!1},onlyMyPosts:{type:Boolean,required:!1}},components:{Post:xs},computed:{...(0,lt.aH)({posts:e=>e.firebase.posts})},created(){this.$store.dispatch(tt.getPostsByUserId,{uid:this.uid})}};const Pa=(0,f.A)(xa,[["render",ya]]);var Ia=Pa,Ea={name:"AppUserPosts",components:{PostsListProfileView:Ia},data(){return{userDetails:null}},methods:{...(0,lt.i0)({getUserDetails:tt.getUserDetails}),fetchUserDetails(){this.getUserDetails().then((e=>{this.userDetails=e})).catch((e=>{console.error(e)}))}},mounted(){this.fetchUserDetails()},created(){this.fetchUserDetails()}};const Ca=(0,f.A)(Ea,[["render",wa]]);var Sa=Ca,Da={name:"AppProfileView",components:{AppUserPosts:Sa,AppUserData:La}};const Ua=(0,f.A)(Da,[["render",Xs]]);var Aa=Ua;const _a=[{path:"/",name:"home",component:$},{path:"/login",name:"login",component:xe},{path:"/register",name:"register",component:qe},{path:"/dashboard",name:"dashboard",component:Ds,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:Aa,meta:{requiresAuth:!0}}],Fa=()=>new Promise(((e,t)=>{const s=(0,k.xI)().onAuthStateChanged((t=>{s(),e(t)}),t)})),Ma=new V.aE({routes:_a,history:(0,V.LA)()});Ma.beforeEach((async(e,t,s)=>{e.matched.some((e=>e.meta.requiresAuth))?await Fa()?s():(alert("You dont have permission to access this page. Please login first."),s("/")):s()}));var Ta=Ma;const Xa={model:"gpt-3.5-turbo",messages:[{role:"user",content:""},{role:"system",content:"Type enhanced title, based on post Content. Max. 80 characters, return just title string"}],max_tokens:250,top_p:1,temperature:.5,frequency_penalty:0,presence_penalty:0};var Oa=s(8355);const Va=Oa.A.create({headers:{Authorization:`Bearer ${{NODE_ENV:"production",VUE_APP_APIKEY:"AIzaSyCYGZYBEkIL1KwzQSCkisP--9Gd5f3Nuf0",VUE_APP_APPID:"1:667905530665:web:eac026c9621663b7ee7538",VUE_APP_AUTHDOMAIN:"catloversforum-uek.firebaseapp.com",VUE_APP_MESSAGINSENDERID:"667905530665",VUE_APP_PROJECTID:"catloversforum-uek",VUE_APP_STORAGEBUCKET:"catloversforum-uek.appspot.com",BASE_URL:"/"}.VUE_APP_OPENAI_KEY}`}}),ja=e=>Va.post("https://api.openai.com/v1/chat/completions",e).then((e=>e.data));var Wa={enhanceTitle:ja};const Ba={enhanceTitle:"[gpt] Enhance Title"},Ga={enhanceTitleStart:"[gpt] Enhance Title Start",enhanceTitleSuccess:"[gpt] Enhance Title Success",enhanceTitleFailure:"[gpt] Enhance Title Failure",setEnhancedTitle:"[gpt] Set Enhanced Title"},Ha={isLoading:!1,enhancedTitle:""},Qa={[Ga.enhanceTitleStart](e){e.isLoading=!0},[Ga.enhanceTitleSuccess](e,t){e.enhancedTitle=t},[Ga.enhanceTitleFailure](){},[Ga.setEnhancedTitle](e,t){e.enhancedTitle=t,e.isLoading=!1}},$a={[Ba.enhanceTitle](e,{postTitle:t,postContent:s}){return Xa.messages[0].content=`Post content: ${s}, title: ${t}`,new Promise((t=>{e.commit(Ga.enhanceTitleStart),Wa.enhanceTitle(Xa).then((s=>{const a=s.choices[0].message.content;e.commit(Ga.enhanceTitleSuccess,a),t(a)}))}))}};var qa={actions:$a,mutations:Qa,state:Ha},Ja=(0,lt.y$)({state:{},mutations:{},actions:{},modules:{firebase:rt,chatgpt:qa}}),Na=s(6400),Ra=s(4458);(0,Ra.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Ka={apiKey:"AIzaSyCYGZYBEkIL1KwzQSCkisP--9Gd5f3Nuf0",authDomain:"catloversforum-uek.firebaseapp.com",projectId:"catloversforum-uek",storageBucket:"catloversforum-uek.appspot.com",messagingSenderId:"667905530665",appId:"1:667905530665:web:eac026c9621663b7ee7538"},Ya=(0,Na.Wp)(Ka),za=(0,ze.aU)(Ya);(0,a.Ef)(O).use(Ta).use(Ja).mount("#app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,a,o,i){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],i=e[d][2];for(var l=!0,n=0;n<a.length;n++)(!1&i||r>=i)&&Object.keys(s.O).every((function(e){return s.O[e](a[n])}))?a.splice(n--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],l=a[1],n=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(n)var d=n(s)}for(t&&t(a);c<r.length;c++)i=r[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},a=self["webpackChunkcat_lovers_forum"]=self["webpackChunkcat_lovers_forum"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(5992)}));a=s.O(a)})();
//# sourceMappingURL=app.cd404d07.js.map