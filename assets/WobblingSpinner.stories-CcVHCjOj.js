import{j as ta}from"./jsx-runtime-B_VdY94X.js";import{W as i,A as t,g as n,b as na}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const oa=i`
    50% { background-position: right }
`,w={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||w.height};
  width: ${a=>a.width||w.width};
  background: linear-gradient(
      ${a=>a.color||w.color} 0 0
    )
    left/20px 20px no-repeat
    ${a=>a.bgColor||w.bgColor};
  animation-name: ${oa};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||w.animationDuration}s;
`;const ra=i`
  	50% { background-position: right }
`,D={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||D.height};
  width: ${a=>a.width||D.width};
  border-radius: 20px;
  background: radial-gradient(
      farthest-side,
      ${a=>a.color||D.color} 94%,
      #0000
    )
    left/20px 20px no-repeat
    ${a=>a.bgColor||D.bgColor};
  animation-name: ${ra};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ea=i`
	50% { 
		left: 100%;
		transform: translateX(calc(-100% - 4px))
	}
`,V={color:"#dc2626",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||V.height};
  width: ${a=>a.width||V.width};
  border-radius: 40px;
  color: ${a=>a.color||V.color};
  border: 2px solid;
  position: relative;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    width: 25%;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: ${ea};
    animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${a=>a.animationPlayState};
  }
`;const sa=i`
  100% { transform:translateX(80px) }
`,ca=i`
  33% { clip-path: inset(0 0 0 -100px) }
  50% { clip-path: inset(0 0 0 0)      }
  83% { clip-path: inset(0 -100px 0 0) }
`,c={color:"#dc2626",height:"20px",width:"20px",animationDuration:1};t`
  height: ${a=>a.height||c.height};
  width: ${a=>a.width||c.width};
  background: ${a=>a.color||c.color};
  box-shadow: 0 0 60px 15px ${a=>a.color||c.color};
  transform: translate(-80px);
  clip-path: inset(0);
  animation-name: ${sa}, ${ca};
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, normal;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-duration: ${a=>a.animationDuration===0?.5:(a.animationDuration||c.animationDuration)/2}s,
    ${a=>a.animationDuration||c.animationDuration}s;
`;const ga=i`
	50% { background-position: top right, bottom right }
`,g={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||g.height};
  width: ${a=>a.width||g.width};
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 50%,
    calc(100% - 10px) 100%,
    10px 100%,
    0 50%
  );
  background: conic-gradient(
        from 135deg at top,
        ${a=>a.color||g.color} 90deg,
        #0000 0
      )
      top left,
    conic-gradient(
        from -45deg at bottom,
        ${a=>a.color||g.color} 90deg,
        #0000 0
      )
      bottom left,
    ${a=>a.bgColor||g.bgColor};
  background-size: 20px 50%;
  background-repeat: no-repeat;
  animation-name: ${ga};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||g.animationDuration}s;
`;const ma=i`
	50% {background-position: right }
`,e={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||e.height};
  width: ${a=>a.width||e.width};
  background: linear-gradient(
      ${a=>a.color||e.color} 0 0
    )
    left/10px 100% no-repeat
    ${a=>a.bgColor||e.bgColor};
  position: relative;
  animation-name: ${ma};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0.2, 1, 1);
  animation-duration: ${a=>a.animationDuration||e.animationDuration}s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(
        ${a=>a.color||e.color} 0 0
      )
      left/10px 100% no-repeat
      ${a=>a.bgColor||e.bgColor};
    animation: inherit;
  }
  &:before {
    top: 0;
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
  }
  &:after {
    bottom: 0;
    animation-timing-function: cubic-bezier(0, 0.4, 1, 1);
  }
`;const da=i`
  100% { left: 1px; } 
`,la=i`
  100% { top: 0.3px; } 
`,v={color:"#dc2626",height:"20px",width:"20px",animationDuration:1};t`
  height: ${a=>a.height||v.height};
  width: ${a=>a.width||v.width};
  border-radius: 50%;
  background: radial-gradient(at 30% 30%, #0000, #000a)
    ${a=>a.color||v.color};
  position: relative;
  left: 0px;
  top: 0px;
  animation-name: ${da}, ${la};
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-iteration-count: infinite;
  animation-duration: ${a=>a.animationDuration||v.animationDuration}s,
    ${a=>a.animationDuration===0?.5:(a.animationDuration||v.animationDuration)/2}s;
`;const pa=()=>i`
	100% { transform: rotate(1deg) }
`,S={color:"#dc2626",stickColor:"#eee",height:"20px",width:"20px",animationDuration:1};t`
  height: ${a=>a.height||S.height};
  width: ${a=>a.width||S.width};
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -200%;
  background: radial-gradient(at 30% 30%, #0000, #000a)
    ${a=>a.color};
  animation-name: ${pa};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    inset: -200% 8px 100%;
    background: ${a=>a.stickColor};
  }
`;const ua=()=>i`
	100% { transform: rotate(1deg) } 
`,k={color:"#dc2626",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||k.height};
  width: ${a=>a.width||k.width};
  color: #514b82;
  background: radial-gradient(
        farthest-side,
        ${a=>a.color||k.color} 98%,
        #0000
      )
      left / 20px 20px,
    radial-gradient(
        farthest-side,
        ${a=>a.color||k.color} 98%,
        #0000
      )
      right / 20px 20px,
    radial-gradient(farthest-side, #000 98%, #0000) center/5px 5px,
    linear-gradient(${a=>a.color} 0 0) center/100% 2px;
  background-repeat: no-repeat;
  animation-name: ${ua};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -150, 0.5, 150);
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const ha=i`
  0%,49.99% { transform: scaleX(1) }
  50%,100% { transform: scaleX(-1) } 
`,ba=i`
  100% { transform: rotate(1turn) }
`,s={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};t`
  height: ${a=>a.height||s.height};
  width: ${a=>a.width||s.width};
  width: calc(100px - 14px);
  height: 50px;
  border-radius: 50px;
  background: radial-gradient(
        farthest-side,
        #0000 calc(100% - 15px),
        ${a=>a.bgColor||s.bgColor} calc(100% - 14px)
          99%,
        #0000
      )
      left,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 15px),
        ${a=>a.bgColor||s.bgColor} calc(100% - 14px)
          99%,
        #0000
      )
      right;
  background-size: calc(50% + 7px) 100%;
  background-repeat: no-repeat;
  position: relative;
  animation-name: ${ha};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  animation-duration: ${a=>a.animationDuration||s.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${a=>a.color||s.color};
    transform-origin: -14px 50%;

    animation-name: ${ba};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${a=>a.animationDuration===0?.5:(a.animationDuration||s.animationDuration)/2}s;
    animation-play-state: ${a=>a.animationPlayState};
  }
`;const o={animationDuration:1,stop:!1,style:{}},wa={title:"Wobbling Spinner",decorators:[a=>ta.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},r=a=>ta.jsx(na,{...a}),m=r.bind({});m.args={variant:"variant1",...w,...o};m.argTypes=n(m.args);const d=r.bind({});d.args={variant:"variant2",...D,...o};d.argTypes=n(d.args);const l=r.bind({});l.args={variant:"variant3",...V,...o};l.argTypes=n(l.args);const p=r.bind({});p.args={variant:"variant4",...c,...o};p.argTypes=n(p.args);const u=r.bind({});u.args={variant:"variant5",...g,...o};u.argTypes=n(u.args);const h=r.bind({});h.args={variant:"variant6",...e,...o};h.argTypes=n(h.args);const b=r.bind({});b.args={variant:"variant7",...v,...o};b.argTypes=n(b.args);const $=r.bind({});$.args={variant:"variant8",...S,...o};$.argTypes=n($.args);const f=r.bind({});f.args={variant:"variant9",...k,...o};f.argTypes=n(f.args);const x=r.bind({});x.args={variant:"variant10",...s,...o};x.argTypes=n(x.args);var C,y,W;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(W=(y=m.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var T,z,j;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var X,A,P;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var E,_,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var R,q,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,G,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,N;$.parameters={...$.parameters,docs:{...(L=$.parameters)==null?void 0:L.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(N=(M=$.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,U,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,aa,ia;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <WobblingSpinner {...args} />",...(ia=(aa=x.parameters)==null?void 0:aa.docs)==null?void 0:ia.source}}};const Da=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{m as Variant1,x as Variant10,d as Variant2,l as Variant3,p as Variant4,u as Variant5,h as Variant6,b as Variant7,$ as Variant8,f as Variant9,Da as __namedExportsOrder,wa as default};
