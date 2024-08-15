import{j as oa}from"./jsx-runtime-B_VdY94X.js";import{W as r,A as o,g as t,R as ta}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const na=r`
    to { transform: rotate(.5turn) }
`,v={size:"45px",color:"#86198f",animationDuration:1,thickness:8};o`
  width: ${a=>a.size||v.size};
  aspect-ratio: 1;
  border-radius: 50%;
  border: ${a=>a.thickness||v.thickness}px solid;
  border-color: ${a=>a.color||v.color} #0000;
  animation-name: ${na};
  animation-duration: ${a=>a.animationDuration||v.animationDuration}s;
`;const ia=r`
    to { transform: rotate(1turn) }
`,b={size:"45px",color:"#86198f",animationDuration:1,thickness:8,secondaryColor:"#cbd5e1"};o`
  border: ${a=>a.thickness||b.thickness}px solid
    ${a=>a.secondaryColor||b.secondaryColor};
  border-right-color: ${a=>a.color||b.color};
  width: ${a=>a.size||b.size};
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: ${ia};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||b.animationDuration}s;
`;const ea=r`
	to { transform: rotate(1turn) }
`,e={size:"45px",color:"#86198f",animationDuration:1,thickness:8};o`
  width: ${a=>a.size||e.size};
  padding: ${a=>a.thickness||e.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${a=>a.color||e.color};
  --_m: conic-gradient(
      #0000 10%,
      ${a=>a.color||e.color}
    ),
    linear-gradient(${a=>a.color||e.color} 0 0)
      content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation-name: ${ea};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||e.animationDuration}s;
`;const sa=()=>r`
	to { transform: rotate(1turn) }
`,z={size:"45px",color:"#86198f",animationDuration:1,thickness:8};o`
  width: ${a=>a.size||z.size};
  --b: ${a=>a.thickness||z.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(
      #0000 10%,
      ${a=>a.color||z.color}
    )
    content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: ${sa};
  animation-timing-function: steps(10);
  animation-duration: ${a=>a.animationDuration||z.animationDuration}s;
`;const ca=()=>r`
	to { transform: rotate(.5turn) }
`,s={size:"45px",color:"#86198f",animationDuration:1,thickness:8};o`
  width: ${a=>a.size||s.size};
  --b: ${a=>a.thickness||s.thickness}px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${a=>a.color||s.color};
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      ${a=>a.color||s.color} 1deg 70deg,
      #0000 71deg 90deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      ${a=>a.color||s.color} calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: ${ca};
  animation-duration: ${a=>a.animationDuration||s.animationDuration}s;
`;const da=()=>r`
	to { transform: rotate(1turn) }
`,D={size:"45px",color:"#86198f",animationDuration:1,dotColor:"#86198f"};o`
  width: ${a=>a.size||D.size};
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: radial-gradient(
        farthest-side,
        ${a=>a.dotColor||D.dotColor} 95%,
        #0000
      )
      50% 0/12px 12px no-repeat,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 5px),
        ${a=>a.color||D.color} calc(100% - 4px)
      )
      content-box;
  animation-name: ${da};
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ma=()=>r`
	to { transform: rotate(.5turn) }
`,S={size:"45px",color:"#86198f",animationDuration:1};o`
  width: ${a=>a.size||S.size};
  aspect-ratio: 1;
  --_c: radial-gradient(
    farthest-side,
    ${a=>a.color||S.color} 92%,
    #0000
  );
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation-name: ${ma};
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;
`;const pa=()=>r`
	to { transform: rotate(.5turn) }
`,k={size:"45px",color:"#86198f",animationDuration:1};o`
  width: ${a=>a.size||k.size};
  aspect-ratio: 1;
  color: ${a=>a.color||k.color};
  --_c: no-repeat
    radial-gradient(
      farthest-side,
      ${a=>a.color||k.color} 92%,
      #0000
    );
  background: var(--_c) 50% 0 /12px 12px, var(--_c) 50% 100%/12px 12px,
    var(--_c) 100% 50%/12px 12px, var(--_c) 0 50%/12px 12px,
    var(--_c) 50% 50%/12px 12px,
    conic-gradient(
        from 90deg at 4px 4px,
        #0000 90deg,
        ${a=>a.color||k.color} 0
      ) -4px -4px / calc(50% + 2px) calc(50% + 2px);
  animation-name: ${pa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const ua=()=>r`
	to { transform: rotate(1turn) }
`,V={size:"45px",dotColor:"#86198f",animationDuration:2,color:"#ccc"};o`
  width: ${a=>a.size||V.size};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        ${a=>a.dotColor||V.dotColor} 95%,
        #0000
      )
      50% 1px/12px 12px no-repeat,
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 14px),
      ${a=>a.color||V.color} 0
    );
  animation-name: ${ua};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const la=r`
	to { transform: rotate(.5turn) }
`,h={size:"45px",color:"#86198f",animationDuration:1};o`
  &:before {
    content: '';
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);
  }

  width: ${a=>a.size||h.size};
  aspect-ratio: 1;
  color: #854f1d;
  border-radius: 50%;
  display: grid;
  background: conic-gradient(
        from 90deg at 4px 4px,
        #0000 90deg,
        ${a=>a.color||h.color} 0
      ) -4px -4px / calc(50% + 2px) calc(50% + 2px),
    radial-gradient(
        farthest-side,
        ${a=>a.color||h.color} 6px,
        #0000 7px calc(100% - 6px),
        ${a=>a.color||h.color} calc(100% - 5px)
      )
      no-repeat;
  position: relative;
  animation-name: ${la};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||h.animationDuration}s;
`;const n={animationDuration:1,stop:!1,style:{}},fa={title:"Rounded Spinner",decorators:[a=>oa.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},i=a=>oa.jsx(ta,{...a}),c=i.bind({});c.args={variant:"variant1",...v,...n};c.argTypes=t(c.args);const d=i.bind({});d.args={variant:"variant2",...b,...n};d.argTypes=t(d.args);const m=i.bind({});m.args={variant:"variant3",...e,...n};m.argTypes=t(m.args);const p=i.bind({});p.args={variant:"variant4",...z,...n};p.argTypes=t(p.args);const u=i.bind({});u.args={variant:"variant5",...s,...n};u.argTypes=t(u.args);const l=i.bind({});l.args={variant:"variant6",...D,...n};l.argTypes=t(l.args);const g=i.bind({});g.args={variant:"variant7",...S,...n};g.argTypes=t(g.args);const $=i.bind({});$.args={variant:"variant8",...k,...n};$.argTypes=t($.args);const x=i.bind({});x.args={variant:"variant9",...V,...n};x.argTypes=t(x.args);const f=i.bind({});f.args={variant:"variant10",...h,...n};f.argTypes=t(f.args);var y,w,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var R,T,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var j,A,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,O,P;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,B,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,I;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,N,Q;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(Q=(N=$.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,aa,ra;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <RoundedSpinner {...args} />",...(ra=(aa=f.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};const ba=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{c as Variant1,f as Variant10,d as Variant2,m as Variant3,p as Variant4,u as Variant5,l as Variant6,g as Variant7,$ as Variant8,x as Variant9,ba as __namedExportsOrder,fa as default};
