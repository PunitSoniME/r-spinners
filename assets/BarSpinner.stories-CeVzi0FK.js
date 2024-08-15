import{j as na}from"./jsx-runtime-B_VdY94X.js";import{W as r,A as n,g as i,B as ia}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const oa=r`
  0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
  33% { background-size: 20% 10% , 20% 100%, 20% 100% }
  50% { background-size: 20% 100%, 20% 10% , 20% 100% }
  66% { background-size: 20% 100%, 20% 100%, 20% 10%  }
  100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`,z={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||z.size};
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(${a=>a.color||z.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 100%;
  animation-name: ${oa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||z.animationDuration}s;
`;const ta=r`
    0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
    20% { background-size: 20% 60% , 20% 100%, 20% 100% }
    40% { background-size: 20% 80% , 20% 60% , 20% 100% }
    60% { background-size: 20% 100%, 20% 80% , 20% 60%  }
    80% { background-size: 20% 100%, 20% 100%, 20% 80%  }
    100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`,v={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||v.size};
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(${a=>a.color||v.color} 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  animation-name: ${ta};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||v.animationDuration}s;
`;const ea=r`
    100% { background-position: left top, center top, right top }
`,$={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||$.size};
  aspect-ratio: 1;
  background: linear-gradient(
        #0000 calc(1 * 100% / 6),
        ${a=>a.color||$.color} 0 calc(3 * 100% / 6),
        #0000 0
      )
      left bottom,
    linear-gradient(
        #0000 calc(2 * 100% / 6),
        ${a=>a.color||$.color} 0 calc(4 * 100% / 6),
        #0000 0
      )
      center bottom,
    linear-gradient(
        #0000 calc(3 * 100% / 6),
        ${a=>a.color||$.color} 0 calc(5 * 100% / 6),
        #0000 0
      )
      right bottom;
  background-size: 20% 600%;
  background-repeat: no-repeat;
  animation-name: ${ea};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||$.animationDuration}s;
`;const sa=r`
    33%  { background-position: 0% 50%, 50% 100%, 100% 100% }
    50%  { background-position: 0%  0%, 50%  50%, 100% 100% }
    66%  { background-position: 0%  0%, 50%   0%, 100%  50% }
    100% { background-position: 0%  0%, 50%   0%, 100%   0% }
`,k={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||k.size};
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(
      ${a=>a.color||k.color} calc(50% - 10px),
      #0000 0 calc(50% + 10px),
      ${a=>a.color||k.color} 0
    );
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% calc(200% + 20px);
  animation-name: ${sa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const ca=r`
    20% { background-position: 0% 50% , 50% 100%, 100% 100% }
    40% { background-position: 0% 0%  , 50% 50% , 100% 100% }
    60% { background-position: 0% 100%, 50% 0%  , 100% 50%  }
    80% { background-position: 0% 100%, 50% 100%, 100% 0%   }
`,D={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||D.size};
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(${a=>a.color||D.color} 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% 65%;
  animation-name: ${ca};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ua=r`
    20% { background-position: 0% 0%  , 50% 50% , 100% 50%  }
    40% { background-position: 0% 100%, 50% 0%  , 100% 50%  }
    60% { background-position: 0% 50% , 50% 100%, 100% 0%   }
    80% { background-position: 0% 50% , 50% 50% , 100% 100% }
`,V={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||V.size};
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(${a=>a.color||V.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 50%;
  animation-name: ${ua};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const da=r`
    0%  { background-size: 20% 50% , 20% 50% , 20% 50% }
    20% { background-size: 20% 20% , 20% 50% , 20% 50% }
    40% { background-size: 20% 100%, 20% 20% , 20% 50% }
    60% { background-size: 20% 50% , 20% 100%, 20% 20% }
    80% { background-size: 20% 50% , 20% 50% , 20% 100%}
    100%{ background-size: 20% 50% , 20% 50% , 20% 50% }
`,f={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||f.size};
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(${a=>a.color||f.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  animation-name: ${da};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${a=>a.animationDuration||f.animationDuration}s;
`;const ga=r`
    16.67% { background-position: 0% 0%  , 50% 100%, 100% 100% }
    33.33% { background-position: 0% 0%  , 50% 0%  , 100% 100% }
    50%    { background-position: 0% 0%  , 50% 0%  , 100% 0%   }
    66.67% { background-position: 0% 100%, 50% 0%  , 100% 0%   }
    83.33% { background-position: 0% 100%, 50% 100%, 100% 0%   }
`,S={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||S.size};
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(${a=>a.color||S.color} 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% 65%;
  animation-name: ${ga};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;
`;const ma=r`
    33% { background-position: 0% 0%  , 50% 100%,100% 0%   }
    66% { background-position: 0% 100%, 50% 0%  ,100% 100% }
`,x={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||x.size};
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(${a=>a.color||x.color} 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 60%;
  animation-name: ${ma};
  animation-duration: ${a=>a.animationDuration||x.animationDuration}s;
`;const pa=r`
    33%  { background-position: 0   0   , 100% 100% }
    66%  { background-position: 0   100%, 100% 0   }
    100% { background-position: 50% 100%, 50%  0   }
`,y={color:"#991b1b",size:"45px",animationDuration:1};n`
  width: ${a=>a.size||y.size};
  aspect-ratio: 1.2;
  --c: no-repeat
    repeating-linear-gradient(
      90deg,
      ${a=>a.color||y.color} 0 20%,
      #0000 0 40%
    );
  background: var(--c) 50% 0, var(--c) 50% 100%;
  background-size: calc(500% / 6) 50%;
  animation-name: ${pa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||y.animationDuration}s;
`;const o={animationDuration:1,stop:!1,style:{}},ka={title:"Bar Spinner",decorators:[a=>na.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},t=a=>na.jsx(ia,{...a}),e=t.bind({});e.args={variant:"variant1",...z,...o};e.argTypes=i(e.args);const s=t.bind({});s.args={variant:"variant2",...v,...o};s.argTypes=i(s.args);const c=t.bind({});c.args={variant:"variant3",...$,...o};c.argTypes=i(c.args);const u=t.bind({});u.args={variant:"variant4",...k,...o};u.argTypes=i(u.args);const d=t.bind({});d.args={variant:"variant5",...D,...o};d.argTypes=i(d.args);const g=t.bind({});g.args={variant:"variant6",...V,...o};g.argTypes=i(g.args);const m=t.bind({});m.args={variant:"variant7",...f,...o};m.argTypes=i(m.args);const p=t.bind({});p.args={variant:"variant8",...S,...o};p.argTypes=i(p.args);const l=t.bind({});l.args={variant:"variant9",...x,...o};l.argTypes=i(l.args);const b=t.bind({});b.args={variant:"variant10",...y,...o};b.argTypes=i(b.args);var B,h,T;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(T=(h=e.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var w,j,A;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,W,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,P,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var q,C,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var G,H,I;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,N,Q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,aa,ra;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <BarSpinner {...args} />",...(ra=(aa=b.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};const za=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{e as Variant1,b as Variant10,s as Variant2,c as Variant3,u as Variant4,d as Variant5,g as Variant6,m as Variant7,p as Variant8,l as Variant9,za as __namedExportsOrder,ka as default};
