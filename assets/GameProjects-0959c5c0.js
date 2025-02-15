import{d as u,_ as h,c as C,w,T as y,o as i,a,b as o,t as _,n as p,e as b,p as j,f as $,r as v,F as P,g as D,h as g,i as k}from"./index-bdfbc358.js";const T=u({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}});const f=e=>(j("data-v-4b49e71a"),e=e(),$(),e),L={key:0},S=f(()=>o("div",{class:"overlay"},null,-1)),B={class:"dialog-title"},G=f(()=>o("i",{class:"fa fa-times fa-lg fa-fw"},null,-1)),I=[G],V={class:"dialog-content"},H=["innerHTML"],M={class:"dialog-bottom"};function N(e,t,r,l,c,d){return i(),C(y,{name:"fade"},{default:w(()=>[e.visible?(i(),a("div",L,[S,o("div",{class:"dialog",style:p({"background-color":e.color})},[o("h1",B,_(e.title),1),o("div",{onClick:t[0]||(t[0]=n=>e.$emit("close")),class:"dialog-close"},I),o("div",V,[o("div",{innerHTML:e.htmlContent},null,8,H),o("div",M,[o("a",{onClick:t[1]||(t[1]=n=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):b("",!0)]),_:1})}const O=h(T,[["render",N],["__scopeId","data-v-4b49e71a"]]),F=u({name:"ProjectsList",components:{ProjectDetailsOverlay:O},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}});const U={class:"projects-list"},W=["onClick"],z={class:"title-text"};function A(e,t,r,l,c,d){const n=v("ProjectDetailsOverlay");return i(),a("div",null,[o("div",U,[(i(!0),a(P,null,D(e.projects,s=>(i(),a("div",{key:s.id,onClick:q=>e.showDetails(s),class:k(["project-item",{wide:s.isWide,high:s.isHigh}])},[o("div",{class:"project-item-image",style:p({"background-image":"url("+s.iconUrl+")"})},null,4),o("div",{class:"title-bar",style:p({"background-color":s.accentColor+"DD"})},[o("div",z,_(s.name),1)],4)],10,W))),128))]),g(n,{onClose:t[0]||(t[0]=s=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const R=h(F,[["render",A],["__scopeId","data-v-1042e5e6"]]);class m{constructor(t,r,l,c,d="#000000",n=!0,s=!0){this.id=t,this.name=r,this.htmlDescription=c,this.iconUrl=l,this.isHigh=n,this.isWide=s,this.accentColor=d}}const E=[new m("project-1","GeoConnect","img/projects/GeoConnectPic.png",`
    <div class="paragraph">
     <strong>GeoConnect</strong> is a match-3 game in which the user has to draw a line to connect identical tokens in order to score points. The user is rewarded for longer connections, and has to aim to beat increasing scores consecutively. Made in Godot.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/TLvcCvV-UBA" frameborder="0" allowfullscreen></iframe>
    </div>
    `,"#23bd69",!0),new m("project-2","Fruit Ninja VR Clone","img/projects/FruitNinjaClonePic.png",`
        <div class="paragraph">
         VR clone of fruit ninja, a game in which you have to slice objects in the air as they are thrown at you. Made in Unity.
        </div>
        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/YH6QnXuW5gM" frameborder="0" allowfullscreen></iframe>
        </div>
        `,"#348feb",!0)],Q=u({name:"GameProjects",components:{ProjectsList:R},data:function(){return{projects:E}}}),X=o("h1",null,"Projects",-1);function Y(e,t,r,l,c,d){const n=v("ProjectsList");return i(),a("div",null,[X,g(n,{projects:e.projects},null,8,["projects"])])}const K=h(Q,[["render",Y]]);export{K as default};
