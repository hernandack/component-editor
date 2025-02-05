import{j as u}from"./jsx-runtime-C6qLVRqm.js";import{w as Re,e as B,u as M}from"./index-D28qYmiA.js";import{r as T,R as $e}from"./index-C2WPW1L7.js";const j={};let qe=0;function L(e,n){const o=`atom${++qe}`,t={toString(){return(j?"production":void 0)!=="production"&&this.debugLabel?o+":"+this.debugLabel:o}};return typeof e=="function"?t.read=e:(t.init=e,t.read=We,t.write=Pe),t}function We(e){return e(this)}function Pe(e,n,o){return n(this,typeof o=="function"?o(e(this)):o)}const le=(e,n)=>e.unstable_is?e.unstable_is(n):n===e,Y=e=>"init"in e,X=e=>!!e.write,F=new WeakMap,ee=e=>{var n;return ne(e)&&!((n=F.get(e))!=null&&n[1])},ze=(e,n)=>{const o=F.get(e);if(o)o[1]=!0,o[0].forEach(t=>t(n));else if((j?"production":void 0)!=="production")throw new Error("[Bug] cancelable promise not found")},He=e=>{if(F.has(e))return;const n=[new Set,!1];F.set(e,n);const o=()=>{n[1]=!0};e.then(o,o),e.onCancel=t=>{n[0].add(t)}},ne=e=>typeof(e==null?void 0:e.then)=="function",ce=e=>"v"in e||"e"in e,W=e=>{if("e"in e)throw e.e;if((j?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v},be=(e,n,o)=>{o.p.has(e)||(o.p.add(e),n.then(()=>{o.p.delete(e)},()=>{o.p.delete(e)}))},Fe=(e,n,o,t)=>{var p;if((j?"production":void 0)!=="production"&&o===e)throw new Error("[Bug] atom cannot depend on itself");n.d.set(o,t.n),ee(n.v)&&be(e,n.v,t),(p=t.m)==null||p.t.add(e)},Ge=Symbol.for("JOTAI.EXPERIMENTAL.FLUSHSTOREHOOK"),Se=(...e)=>{const[n,o,t,p,h,w]=e,d=s=>{if((j?"production":void 0)!=="production"&&!s)throw new Error("Atom is undefined or null");let r=n(s);return r||(r={d:new Map,p:new Set,n:0},o(s,r),h==null||h(s,$)),r},g=new WeakMap,l=new Map,y=new Set,C=new Set,m=()=>{var s;const r=[],f=i=>{try{i()}catch(c){r.push(c)}};do{(s=$[Ge])==null||s.call($);const i=new Set,c=i.add.bind(i);l.forEach(a=>{var v;return(v=a.m)==null?void 0:v.l.forEach(c)}),l.clear(),y.forEach(c),y.clear(),C.forEach(c),C.clear(),i.forEach(f),l.size&&D()}while(l.size||y.size||C.size);if(r.length)throw r[0]},_=(s,r,f)=>{const i="v"in r,c=r.v,a=ee(r.v)?r.v:null;if(ne(f)){He(f);for(const v of r.d.keys())be(s,f,d(v));r.v=f}else r.v=f;delete r.e,(!i||!Object.is(c,r.v))&&(++r.n,a&&ze(a,f))},b=s=>{var r,f;const i=d(s);if(ce(i)&&(i.m&&g.get(s)!==i.n||Array.from(i.d).every(([x,q])=>b(x).n===q)))return i;i.d.clear();let c=!0;const a=()=>{i.m&&(V(s,i),D(),m())},v=x=>{if(le(s,x)){const Z=d(x);if(!ce(Z))if(Y(x))_(x,Z,x.init);else throw new Error("no atom init");return W(Z)}const q=b(x);try{return W(q)}finally{Fe(s,i,x,q),c||a()}};let S,I;const E={get signal(){return S||(S=new AbortController),S.signal},get setSelf(){return(j?"production":void 0)!=="production"&&!X(s)&&console.warn("setSelf function cannot be used with read-only atom"),!I&&X(s)&&(I=(...x)=>{if((j?"production":void 0)!=="production"&&c&&console.warn("setSelf function cannot be called in sync"),!c)return ae(s,...x)}),I}},O=i.n;try{const x=t(s,v,E);return _(s,i,x),ne(x)&&((r=x.onCancel)==null||r.call(x,()=>S==null?void 0:S.abort()),x.then(a,a)),i}catch(x){return delete i.v,i.e=x,++i.n,i}finally{c=!1,O!==i.n&&g.get(s)===O&&(g.set(s,i.n),l.set(s,i),(f=i.u)==null||f.call(i))}},A=s=>W(b(s)),R=s=>{var r;const f=new Map;for(const i of((r=s.m)==null?void 0:r.t)||[]){const c=d(i);c.m&&f.set(i,c)}for(const i of s.p)f.set(i,d(i));return f},se=s=>{const r=[s];for(;r.length;){const f=r.pop();for(const[i,c]of R(f))g.set(i,c.n),r.push(c)}},D=()=>{var s;const r=[],f=new WeakSet,i=new WeakSet,c=Array.from(l);for(;c.length;){const[a,v]=c[c.length-1];if(i.has(a)){c.pop();continue}if(f.has(a)){g.get(a)===v.n?r.push([a,v,v.n]):(g.delete(a),l.set(a,v)),i.add(a),c.pop();continue}f.add(a);for(const[S,I]of R(v))f.has(S)||c.push([S,I])}for(let a=r.length-1;a>=0;--a){const[v,S,I]=r[a];let E=!1;for(const O of S.d.keys())if(O!==v&&l.has(O)){E=!0;break}E&&(b(v),V(v,S),I!==S.n&&(l.set(v,S),(s=S.u)==null||s.call(S))),g.delete(v)}},U=(s,...r)=>{let f=!0;const i=a=>W(b(a)),c=(a,...v)=>{var S;const I=d(a);try{if(le(s,a)){if(!Y(a))throw new Error("atom not writable");const E=I.n,O=v[0];_(a,I,O),V(a,I),E!==I.n&&(l.set(a,I),(S=I.u)==null||S.call(I),se(I));return}else return U(a,...v)}finally{f||(D(),m())}};try{return p(s,i,c,...r)}finally{f=!1}},ae=(s,...r)=>{try{return U(s,...r)}finally{D(),m()}},V=(s,r)=>{var f;if(r.m&&!ee(r.v)){for(const[i,c]of r.d)if(!r.m.d.has(i)){const a=d(i);K(i,a).t.add(s),r.m.d.add(i),c!==a.n&&(l.set(i,a),(f=a.u)==null||f.call(a),se(a))}for(const i of r.m.d||[])if(!r.d.has(i)){r.m.d.delete(i);const c=J(i,d(i));c==null||c.t.delete(s)}}},K=(s,r)=>{var f;if(!r.m){b(s);for(const i of r.d.keys())K(i,d(i)).t.add(s);if(r.m={l:new Set,d:new Set(r.d.keys()),t:new Set},(f=r.h)==null||f.call(r),X(s)){const i=r.m,c=()=>{let a=!0;const v=(...S)=>{try{return U(s,...S)}finally{a||(D(),m())}};try{const S=w(s,v);S&&(i.u=()=>{a=!0;try{S()}finally{a=!1}})}finally{a=!1}};C.add(c)}}return r.m},J=(s,r)=>{var f;if(r.m&&!r.m.l.size&&!Array.from(r.m.t).some(i=>{var c;return(c=d(i).m)==null?void 0:c.d.has(s)})){const i=r.m.u;i&&y.add(i),delete r.m,(f=r.h)==null||f.call(r);for(const c of r.d.keys()){const a=J(c,d(c));a==null||a.t.delete(s)}return}return r.m},$={get:A,set:ae,sub:(s,r)=>{const f=d(s),c=K(s,f).l;return c.add(r),m(),()=>{c.delete(r),J(s,f),m()}},unstable_derive:s=>Se(...s(...e))};return $},Ue=e=>{const n=new Set;let o,t=0;const p=e.unstable_derive((...d)=>{const[g,l,,y]=d;return o=g,d[1]=function(m,_){l(m,_);const b=_.h;_.h=()=>{b==null||b(),_.m?n.add(m):n.delete(m)}},d[3]=function(m,_,b,...A){return t?b(m,...A):y(m,_,b,...A)},d}),h=p.set;return Object.assign(p,{dev4_get_internal_weak_map:()=>({get:d=>{const g=o(d);if(!(!g||g.n===0))return g}}),dev4_get_mounted_atoms:()=>n,dev4_restore_atoms:d=>{h({read:()=>null,write:(l,y)=>{++t;try{for(const[C,m]of d)Y(C)&&y(C,m)}finally{--t}}})}})},te=()=>{const e=new WeakMap,n=Se(o=>e.get(o),(o,t)=>e.set(o,t).get(o),(o,...t)=>o.read(...t),(o,...t)=>o.write(...t),(o,...t)=>{var p;return(p=o.unstable_onInit)==null?void 0:p.call(o,...t)},(o,...t)=>{var p;return(p=o.onMount)==null?void 0:p.call(o,...t)});return(j?"production":void 0)!=="production"?Ue(n):n};let N;const Ve=()=>(N||(N=te(),(j?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=N),globalThis.__JOTAI_DEFAULT_STORE__!==N&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),N),_e={},ke=T.createContext(void 0),xe=e=>T.useContext(ke)||Ve(),Ke=({children:e,store:n})=>{const o=T.useRef(void 0);return!n&&!o.current&&(o.current=te()),T.createElement(ke.Provider,{value:n||o.current},e)},ye=e=>typeof(e==null?void 0:e.then)=="function",Je=e=>{e.status="pending",e.then(n=>{e.status="fulfilled",e.value=n},n=>{e.status="rejected",e.reason=n})},Ze=$e.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(Je(e),e)}),Q=new WeakMap,Xe=e=>{let n=Q.get(e);return n||(n=new Promise((o,t)=>{let p=e;const h=g=>l=>{p===g&&o(l)},w=g=>l=>{p===g&&t(l)},d=g=>{"onCancel"in g&&typeof g.onCancel=="function"&&g.onCancel(l=>{if((_e?"production":void 0)!=="production"&&l===g)throw new Error("[Bug] p is not updated even after cancelation");ye(l)?(Q.set(l,n),p=l,l.then(h(l),w(l)),d(l)):o(l)})};e.then(h(e),w(e)),d(e)}),Q.set(e,n)),n};function Qe(e,n){const o=xe(),[[t,p,h],w]=T.useReducer(l=>{const y=o.get(e);return Object.is(l[0],y)&&l[1]===o&&l[2]===e?l:[y,o,e]},void 0,()=>[o.get(e),o,e]);let d=t;if((p!==o||h!==e)&&(w(),d=o.get(e)),T.useEffect(()=>{const l=o.sub(e,()=>{w()});return w(),l},[o,e,void 0]),T.useDebugValue(d),ye(d)){const l=Xe(d);return Ze(l)}return d}function Ye(e,n){const o=xe();return T.useCallback((...p)=>{if((_e?"production":void 0)!=="production"&&!("write"in e))throw new Error("not writable atom");return o.set(e,...p)},[o,e])}function k(e,n){return[Qe(e),Ye(e)]}const G=[{option:{label:"Option 1",value:"option-1"},icon:""},{option:{label:"Option with icon",value:"option-icon"},icon:""},{option:{label:"Long Long option 3",value:"long-option-3"},icon:""},{option:{label:"Long Long Long option 4",value:"long-option-4"},icon:""},{option:{label:"Long Long Long Long option 5",value:"long-option-5"},icon:""},{option:{label:"Long Long Long Long Long option 6",value:"long-option-6"},icon:""}],Ce=L(void 0),Ie=L(!0),Te=L(G),oe=L(void 0),re=L(!0),Le=L("Label"),Ae=L(!0);L(void 0);const en=L(!1),ie=L("");L({padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},backgroundColor:"white"});L({padding:{top:8,right:16,bottom:8,left:16},margin:{top:0,right:0,bottom:0,left:0},backgroundColor:"white",activeBackgroundColor:"#f0fdfa",textColor:"black",activeTextColor:"black",fontSize:14,fontStyle:"inherit"});const Be=({selectedOptions:e,setIsSelected:n})=>{const[,o]=k(oe),t=h=>{n&&n(h)},p=h=>{if(e){const w=e.filter(d=>d.option.value!==h);o(w)}};return u.jsxs("div",{className:"select-input relative px-2 py-2 rounded-sm min-h-12",onClick:()=>t(!0),"data-testid":"select-input",children:[u.jsx("div",{className:"select-input__values w-full flex gap-2",children:e&&e.map(h=>u.jsxs("div",{className:"select-input__value flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-xl","data-testid":"select-input-value",children:[u.jsx("span",{className:"select-input__value__label","data-testid":"select-input-label",children:h.option.label}),u.jsx("span",{className:"select-input__value__remove w-4 h-4 cursor-pointer opacity-70 hover:opacity-100",onClick:()=>p(h.option.value),"data-testid":"select-input-remove",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),u.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",u.jsxs("g",{id:"Edit / Close_Circle",children:[" ",u.jsx("path",{id:"Vector",d:"M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," "]})," "]})]})})]},h.option.value))}),u.jsx("span",{className:"select-input__arrow absolute right-3 inset-y-1/2 -translate-y-1/2 w-4 h-4","data-testid":"select-input-arrow",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),u.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",u.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})})]})};Be.__docgenInfo={description:"",methods:[],displayName:"SelectInput",props:{selectedOptions:{required:!1,tsType:{name:"union",raw:"IOptionItem[] | undefined",elements:[{name:"Array",elements:[{name:"IOptionItem"}],raw:"IOptionItem[]"},{name:"undefined"}]},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},isOutlined:{required:!1,tsType:{name:"boolean"},description:""},setSelectedOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: IOptionItem | null) => void",signature:{arguments:[{type:{name:"union",raw:"IOptionItem | null",elements:[{name:"IOptionItem"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},setIsSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},setIsOutlined:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}};const je=()=>{const[e,n]=k(ie),o=t=>{n(t.target.value)};return u.jsxs("div",{className:"select-search flex items-center py-2 px-4 border-b border-gray-300 gap-4","data-testid":"select-search",children:[u.jsx("span",{className:"select-search__icon w-6 h-6 opacity-50",children:u.jsx("svg",{className:"w-full object-contain",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"select-search-icon",children:u.jsx("path",{d:"M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx("input",{type:"text",className:"select-search__keywords w-full outline-0 border-0",value:e,onChange:o,"data-testid":"select-search-keyword"})]})};je.__docgenInfo={description:"",methods:[],displayName:"SelectSearch"};const Oe=({children:e,styles:n})=>u.jsx("div",{className:"dropdown w-full flex flex-col max-h-60 overflow-y-auto",style:{padding:n!=null&&n.padding?`${n.padding.top}px ${n.padding.right}px ${n.padding.bottom}px ${n.padding.left}px`:void 0,margin:n!=null&&n.margin?`${n.margin.top}px ${n.margin.right}px ${n.margin.bottom}px ${n.margin.left}px`:void 0,backgroundColor:n!=null&&n.backgroundColor?`${n.backgroundColor}`:"white"},"data-testid":"select-dropdown-dropdown",children:e});Oe.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},styles:{required:!0,tsType:{name:"union",raw:"IDropdownStyles | undefined",elements:[{name:"IDropdownStyles"},{name:"undefined"}]},description:""}}};const Ee=(e,n)=>{if(!n)return e;const o=e.split(new RegExp(`(${n})`,"gi"));return u.jsx(u.Fragment,{children:o.map((t,p)=>t.toLowerCase()===n.toLowerCase()?u.jsx("span",{className:"bg-teal-500",children:t},p):t)})};Ee.__docgenInfo={description:"",methods:[],displayName:"searchHighlight"};const De=({option:e,icon:n,isSelected:o,styles:t})=>{const[p,h]=T.useState(!1),[w,d]=k(oe),[g]=k(re),[l]=k(ie),y=()=>{if(g)if(w){const m=w.some(_=>_.option.value===e.value);d(m?w.filter(_=>_.option.value!==e.value):[...w,{option:e,icon:n}])}else d([{option:e,icon:n}]);else d([{option:e,icon:n}])},C=m=>{h(m)};return u.jsxs("div",{className:`cursor-pointer py-2 px-4 hover:bg-teal-50 ${o?"is-selected":""} ${p?"is-hovered":""}`,onClick:y,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),style:{padding:t!=null&&t.padding?`${t.padding.top}px ${t.padding.right}px ${t.padding.bottom}px ${t.padding.left}px`:void 0,margin:t!=null&&t.margin?`${t.margin.top}px ${t.margin.right}px ${t.margin.bottom}px ${t.margin.left}px`:void 0,backgroundColor:t!=null&&t.backgroundColor&&(o||p)&&(t!=null&&t.activeBackgroundColor)?t.activeBackgroundColor:t==null?void 0:t.backgroundColor,color:t!=null&&t.textColor&&(o||p)&&(t!=null&&t.activeTextColor)?t.activeTextColor:t==null?void 0:t.textColor,fontSize:t==null?void 0:t.fontSize,fontStyle:t==null?void 0:t.fontStyle},"data-testid":"option-item",children:[n&&u.jsx("span",{className:"option__icon",children:n}),u.jsx("span",{className:"option__label","data-testid":"option-label",children:Ee(e.label,l)})]})};De.__docgenInfo={description:"",methods:[],displayName:"Option",props:{option:{required:!0,tsType:{name:"IOptionData"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},styles:{required:!1,tsType:{name:"IOptionStyles"},description:""}}};const Me=({withSearch:e,options:n,selectedOptions:o,dropdownStyles:t,optionStyles:p})=>u.jsxs("div",{className:"select-dropdown__dropdown-search bg-white border border-gray-300 absolute top-[116%] left-0 shadow-2xl w-full","data-testid":"dropdown-search",children:[e&&u.jsx(je,{}),u.jsx(Oe,{styles:t,children:n&&n.map(h=>u.jsx(De,{option:h.option,isSelected:o&&o.some(w=>w.option.value===h.option.value),styles:p},h.option.value))})]});Me.__docgenInfo={description:"",methods:[],displayName:"DropdownSearch",props:{withSearch:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"IOptionItem"}],raw:"IOptionItem[]"},description:""},selectedOptions:{required:!1,tsType:{name:"Array",elements:[{name:"IOptionItem"}],raw:"IOptionItem[]"},description:""},dropdownStyles:{required:!1,tsType:{name:"IDropdownStyles"},description:""},optionStyles:{required:!1,tsType:{name:"IOptionStyles"},description:""}}};const Ne=({dropdownStyles:e,optionStyles:n})=>{const[o]=k(Ce),[t]=k(Te),[p]=k(Le),[h]=k(oe),[w]=k(re),[d]=k(Ae),[g,l]=k(en),[y]=k(Ie),[C]=k(ie),m=T.useRef(null),_=T.useCallback(A=>{l(A)},[l]);T.useEffect(()=>{const A=R=>{m.current&&!m.current.contains(R.target)&&_(!1)};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[m,_]);const b=t?t.filter(A=>A.option.label.toLowerCase().includes(C.toLowerCase())).slice(0,20):[];return u.jsxs("div",{id:o,ref:m,className:"select-dropdown relative z-[2000] flex items-center",onClick:()=>_(!0),onBlur:()=>_(!1),"data-testid":"select-dropdown",children:[u.jsx("div",{className:"select-dropdown__label flex-initial basis-36","data-testid":"select-field-label",children:p}),u.jsxs("div",{className:`
        select-dropdown__menu relative z-10 border transition-colors duration-300 flex-auto basis-full
        ${d?"bg-white border-gray-400 hover:border-gray-600 text-black":"bg-gray-300 text-black border-transparent hover:bg-gray-400"}
        ${w?"select-dropdown--multiple":"select-dropdown--single"}
      `,children:[u.jsx(Be,{selectedOptions:h,setIsSelected:l}),g&&u.jsx(Me,{withSearch:y,options:b,selectedOptions:h,dropdownStyles:e,optionStyles:n})]})]})};Ne.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown",props:{id:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"IOptionItem"}],raw:"IOptionItem[]"},description:""},outlined:{required:!1,tsType:{name:"boolean"},description:""},withSearch:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},optionLabel:{required:!1,tsType:{name:"string"},description:""},dropdownStyles:{required:!1,tsType:{name:"IDropdownStyles"},description:""},optionStyles:{required:!1,tsType:{name:"IOptionStyles"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const nn=e=>{const[,n]=k(Ce),[,o]=k(Te),[,t]=k(Ae),[,p]=k(Ie),[,h]=k(re),[,w]=k(Le);T.useEffect(()=>{n(e.id),o(e.options),t(e.outlined),p(e.withSearch),h(e.multiple),w(e.optionLabel)},[e,n,o,t,p,h,w])},cn={title:"Modules/Select Dropdown",component:Ne,tags:["autodocs"],decorators:[(e,n)=>{const o=te();return u.jsxs(Ke,{store:o,children:[u.jsx(tn,{args:n.args}),u.jsx(e,{})]})}],argTypes:{id:{control:"text"},options:{control:"object"},optionLabel:{control:"text"},withSearch:{control:"boolean"},multiple:{control:"boolean"},onChange:{control:"text"},outlined:{control:"boolean"}}},P={args:{id:"sdd-1",withSearch:!0,options:G,multiple:!0,optionLabel:"Label",onChange:()=>{console.log("change")},outlined:!0}},z={args:{id:"sdd-1",withSearch:!1,options:G,multiple:!1,optionLabel:"Label",onChange:()=>{console.log("change")},outlined:!1,dropdownStyles:{padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},backgroundColor:"white"},optionStyles:{padding:{top:8,right:16,bottom:8,left:16},margin:{top:0,right:0,bottom:0,left:0},backgroundColor:"white",activeBackgroundColor:"#f0fdfa",textColor:"black",activeTextColor:"black",fontSize:14,fontStyle:"inherit"}}},H={args:{id:"sdd-1",withSearch:!0,options:G,multiple:!0,optionLabel:"Label",outlined:!0,dropdownStyles:{padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},backgroundColor:"white"},optionStyles:{padding:{top:8,right:16,bottom:8,left:16},margin:{top:0,right:0,bottom:0,left:0},backgroundColor:"white",activeBackgroundColor:"#f0fdfa",textColor:"black",activeTextColor:"black",fontSize:14,fontStyle:"inherit"}},play:async({canvasElement:e,args:n})=>{var C,m,_;const o=Re(e),t=o.getByTestId("select-dropdown"),p=o.getByTestId("select-field-label"),h=o.getByTestId("select-input");await B(t).toBeInTheDocument(),await B(p).toBeInTheDocument(),await B(h).toBeInTheDocument(),await M.click(t);const w=await o.findByTestId("dropdown-search");B(w).toBeInTheDocument();const d=await o.findAllByTestId("option-item");B(d.length).toBeGreaterThan(0);for(const b of d)await M.hover(b),B(b).toHaveStyle(`background-color: ${(C=n.optionStyles)==null?void 0:C.activeBackgroundColor}`),await M.click(b),B(b).toHaveStyle(`background-color: ${(m=n.optionStyles)==null?void 0:m.activeBackgroundColor}`),await M.unhover(b),B(b).toHaveStyle(`background-color: ${(_=n.optionStyles)==null?void 0:_.activeBackgroundColor}`);const g=await o.findAllByTestId("select-input-label");B(g.length).toBe(d.length);const l=await o.findAllByTestId("select-input-remove");for(const b of l)await M.click(b);const y=o.queryAllByTestId("select-input-label");B(y.length).toBe(0)}},tn=({args:e})=>(nn(e),null);var de,ue,pe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    id: 'sdd-1',
    withSearch: true,
    options: optionData,
    multiple: true,
    optionLabel: 'Label',
    onChange: () => {
      console.log('change');
    },
    outlined: true
  }
}`,...(pe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,he,ge;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    id: 'sdd-1',
    withSearch: false,
    options: optionData,
    multiple: false,
    optionLabel: 'Label',
    onChange: () => {
      console.log('change');
    },
    outlined: false,
    dropdownStyles: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      backgroundColor: 'white'
    },
    optionStyles: {
      padding: {
        top: 8,
        right: 16,
        bottom: 8,
        left: 16
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      backgroundColor: 'white',
      activeBackgroundColor: '#f0fdfa',
      textColor: 'black',
      activeTextColor: 'black',
      fontSize: 14,
      fontStyle: 'inherit'
    }
  }
}`,...(ge=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var me,we,ve;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    id: 'sdd-1',
    withSearch: true,
    options: optionData,
    multiple: true,
    optionLabel: 'Label',
    outlined: true,
    dropdownStyles: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      backgroundColor: 'white'
    },
    optionStyles: {
      padding: {
        top: 8,
        right: 16,
        bottom: 8,
        left: 16
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      backgroundColor: 'white',
      activeBackgroundColor: '#f0fdfa',
      textColor: 'black',
      activeTextColor: 'black',
      fontSize: 14,
      fontStyle: 'inherit'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const selectDropdown = canvas.getByTestId('select-dropdown');
    const optionLabel = canvas.getByTestId('select-field-label');
    const selectInput = canvas.getByTestId('select-input');

    // Check initial elements
    await expect(selectDropdown).toBeInTheDocument();
    await expect(optionLabel).toBeInTheDocument();
    await expect(selectInput).toBeInTheDocument();

    // Simulate click event on SelectDropdown
    await userEvent.click(selectDropdown);

    // Wait for dropdown-search to appear
    const dropdownSearch = await canvas.findByTestId('dropdown-search');
    expect(dropdownSearch).toBeInTheDocument();

    // Check if dropdown-search contains option items
    const optionItems = await canvas.findAllByTestId('option-item');
    expect(optionItems.length).toBeGreaterThan(0);

    // Check hover and selected state for option items
    for (const optionItem of optionItems) {
      // Hover over the option item
      await userEvent.hover(optionItem);
      expect(optionItem).toHaveStyle(\`background-color: \${args.optionStyles?.activeBackgroundColor}\`);

      // Click the option item to select it
      await userEvent.click(optionItem);
      expect(optionItem).toHaveStyle(\`background-color: \${args.optionStyles?.activeBackgroundColor}\`);

      // Unhover the option item
      await userEvent.unhover(optionItem);
      expect(optionItem).toHaveStyle(\`background-color: \${args.optionStyles?.activeBackgroundColor}\`);
    }

    // Check if selected options are rendered in select input
    const selectedOptionLabels = await canvas.findAllByTestId('select-input-label');
    expect(selectedOptionLabels.length).toBe(optionItems.length);

    // Remove selected options
    const removeButtons = await canvas.findAllByTestId('select-input-remove');
    for (const removeButton of removeButtons) {
      await userEvent.click(removeButton);
    }

    // Check if all selected options are removed
    const remainingSelectedOptionLabels = canvas.queryAllByTestId('select-input-label');
    expect(remainingSelectedOptionLabels.length).toBe(0);
  }
}`,...(ve=(we=H.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};const dn=["Default","Styles","FullTesting"];export{P as Default,H as FullTesting,z as Styles,dn as __namedExportsOrder,cn as default};
