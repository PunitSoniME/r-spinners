import{j as oa}from"./jsx-runtime-B_VdY94X.js";import{W as o,A as i,g as t,P as ia}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const ta=o`
    100% { background-size: 100% }
`,w={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||w.height};
  width: ${a=>a.width||w.width};
  background: linear-gradient(
      ${a=>a.color||w.color} 0 0
    )
    0/0% no-repeat ${a=>a.bgColor||w.bgColor};
  animation-name: ${ta};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||w.animationDuration}s;
`;const na=o`
  	100% { background-size: 110% }
`,k={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||k.height};
  width: ${a=>a.width||k.width};
  border-radius: 20px;
  background: linear-gradient(
      ${a=>a.color||k.color} 0 0
    )
    0/0% no-repeat ${a=>a.bgColor||k.bgColor};
  animation-name: ${na};
  animation-timing-function: steps(10);
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const ea=o`
  	100% { background-size: 100% }
`,D={color1:"#dc2626",color2:"#0369a1",height:"20px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||D.height};
  width: ${a=>a.width||D.width};
  background: repeating-linear-gradient(
        135deg,
        ${a=>a.color1||D.color1} 0 10px,
        ${a=>a.color2||D.color2} 0 20px
      )
      0/0% no-repeat,
    repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation-name: ${ea};
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const sa=o`
	100% { background-size: 120% }
`,c={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||c.height};
  width: ${a=>a.width||c.width};
  -webkit-mask: linear-gradient(
      90deg,
      ${a=>a.color||c.color} 70%,
      #0000 0
    )
    0/20%;
  background: linear-gradient(
      ${a=>a.color||c.color} 0 0
    )
    0/0% no-repeat ${a=>a.bgColor||c.bgColor};
  animation-name: ${sa};
  animation-timing-function: steps(6);
  animation-duration: ${a=>a.animationDuration||c.animationDuration}s;
`;const ca=o`
	100% { background-size: 120% }
`,r={color:"#dc2626",height:"30px",width:"74px",animationDuration:1};i`
  height: ${a=>a.height||r.height};
  width: ${a=>a.width||r.width};
  border: 2px solid ${a=>a.color||r.color};
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(
      90deg,
      ${a=>a.color||r.color} 0 10px,
      #0000 0 15px
    )
    0/0% no-repeat content-box content-box;
  position: relative;
  animation-name: ${ca};
  animation-timing-function: steps(6);
  animation-duration: ${a=>a.animationDuration||r.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    width: 10px;
    background: linear-gradient(
          #0000 calc(50% - 7px),
          ${a=>a.color||r.color} 0 calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          ${a=>a.color||r.color} 0 calc(50% + 7px),
          #0000 0
        )
        left / 100% 100%,
      linear-gradient(
          ${a=>a.color||r.color} calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          ${a=>a.color||r.color} 0
        )
        left / 2px 100%,
      linear-gradient(
          #0000 calc(50% - 5px),
          ${a=>a.color||r.color} 0 calc(50% + 5px),
          #0000 0
        )
        right/2px 100%;
    background-repeat: no-repeat;
  }
`;const ga=o`
	100% { inset: 0 }
`,f={color:"#dc2626",height:"22px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||f.height};
  width: ${a=>a.width||f.width};
  color: ${a=>a.color||f.color};
  border-radius: 20px;
  border: 2px solid;
  position: relative;
  animation-duration: ${a=>a.animationDuration||f.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: ${ga};
    animation-duration: ${a=>a.animationDuration||f.animationDuration}s;
    animation-play-state: ${a=>a.animationPlayState};
    animation-iteration-count: infinite;
  }
`;const da=o`
	100% { background-size: 100% }
`,V={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||V.height};
  width: ${a=>a.width||V.width};
  -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) 0 0/25%
      100%,
    linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px)
      no-repeat;
  background: linear-gradient(
      ${a=>a.color||V.color} 0 0
    )
    0/0% no-repeat ${a=>a.bgColor||V.bgColor};
  animation-name: ${da};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const pa=()=>o`
	100% { background-size: 100% 115% }
`,v={color:"#dc2626",bgColor:"#eee",height:"60px",width:"60px",animationDuration:1};i`
  height: ${a=>a.height||v.height};
  width: ${a=>a.width||v.width};
  border-radius: 50%;
  -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  background: linear-gradient(
      ${a=>a.color||v.color} 0 0
    )
    bottom/100% 0% no-repeat
    ${a=>a.bgColor||v.bgColor};
  animation-name: ${pa};
  animation-timing-function: steps(7);
  animation-duration: ${a=>a.animationDuration||v.animationDuration}s;
`;const la=()=>o`
	33%  {background-position:    0% 33% , 100% 33% , 200% 33% }
	66%  {background-position: -100%  66%, 0%   66% , 100% 66% }
	100% {background-position:    0% 100%, 100% 100%, 200% 100%}
`,s={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||s.height};
  width: ${a=>a.width||s.width};
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
      var(--r1) var(--r2) at top,
      #0000 79.5%,
      ${a=>a.color||s.color} 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at bottom,
      ${a=>a.color||s.color} 79.5%,
      #0000 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at top,
      #0000 79.5%,
      ${a=>a.color||s.color} 80%
    ),
    ${a=>a.bgColor||s.bgColor};
  background-size: 50.5% 220%;
  background-position: -100% 0%, 0% 0%, 100% 0%;
  background-repeat: no-repeat;
  animation-name: ${la};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||s.animationDuration}s;
`;const ma=o`
	100% { background-size: 120% 120% }
`,S={color:"#dc2626",bgColor:"#eee",height:"60px",width:"120px",animationDuration:1};i`
  height: ${a=>a.height||S.height};
  width: ${a=>a.width||S.width};
  border-radius: 200px 200px 0 0;
  -webkit-mask: repeating-radial-gradient(
    farthest-side at bottom,
    #0000 0,
    #000 1px 12%,
    #0000 calc(12% + 1px) 20%
  );
  background: radial-gradient(
      farthest-side at bottom,
      ${a=>a.color||S.color} 0 95%,
      #0000 0
    )
    bottom/0% 0% no-repeat ${a=>a.bgColor||S.bgColor};
  animation-name: ${ma};
  animation-timing-function: steps(6);
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;
`;const n={animationDuration:1,stop:!1,style:{}},ba={title:"Progress Spinner",decorators:[a=>oa.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},e=a=>oa.jsx(ia,{...a}),g=e.bind({});g.args={variant:"variant1",...w,...n};g.argTypes=t(g.args);const d=e.bind({});d.args={variant:"variant2",...k,...n};d.argTypes=t(d.args);const p=e.bind({});p.args={variant:"variant3",...D,...n};p.argTypes=t(p.args);const l=e.bind({});l.args={variant:"variant4",...c,...n};l.argTypes=t(l.args);const m=e.bind({});m.args={variant:"variant5",...r,...n};m.argTypes=t(m.args);const u=e.bind({});u.args={variant:"variant6",...f,...n};u.argTypes=t(u.args);const h=e.bind({});h.args={variant:"variant7",...V,...n};h.argTypes=t(h.args);const $=e.bind({});$.args={variant:"variant8",...v,...n};$.argTypes=t($.args);const b=e.bind({});b.args={variant:"variant9",...s,...n};b.argTypes=t(b.args);const x=e.bind({});x.args={variant:"variant10",...S,...n};x.argTypes=t(x.args);var C,y,P;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(P=(y=g.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var T,z,j;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var A,E,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,O,R;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,B,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,I;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(L=(K=h.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,N,Q;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(Q=(N=$.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,aa,ra;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <ProgressSpinner {...args} />",...(ra=(aa=x.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};const xa=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{g as Variant1,x as Variant10,d as Variant2,p as Variant3,l as Variant4,m as Variant5,u as Variant6,h as Variant7,$ as Variant8,b as Variant9,xa as __namedExportsOrder,ba as default};
