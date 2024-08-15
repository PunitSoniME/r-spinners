import{j as ta}from"./jsx-runtime-B_VdY94X.js";import{W as i,A as n,g as t,I as ra}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const oa=i`
  100% { background-position: right };
`,D={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||D.height};
  width: ${a=>a.width||D.width};
  background: repeating-linear-gradient(
      90deg,
      ${a=>a.color||D.color} 0 calc(25% - 5px),
      #0000 0 25%
    )
    left/calc(4 * 100%/3) 100%;
  animation-name: ${oa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ea=i`
  100% { background-position: 0 0 };
`,V={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||V.height};
  width: ${a=>a.width||V.width};
  background: radial-gradient(
      circle closest-side,
      ${a=>a.color||V.color} 92%,
      #0000
    )
    calc(100% / 3) 0 / calc(100% / 4) 100%;
  animation-name: ${ea};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const ca=i`
  	100% { background-position: right };
`,y={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||y.height};
  width: ${a=>`calc(${a.width||y.width} / 0.707)`};
  background: repeating-linear-gradient(
      -45deg,
      ${a=>a.color||y.color} 0 15px,
      #0000 0 20px
    )
    left/200% 100%;
  animation-name: ${ca};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||y.animationDuration}s;
`;const sa=()=>i`
	100% { background-position: top right, bottom right };
`,b={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||b.height};
  width: ${a=>{const v=a.width||b.width;return v.includes("px")?`calc(${v} / 0.707);`:`calc(${v} / cos(45deg));`}}
  background: repeating-linear-gradient(
        135deg,
        ${a=>a.color||b.color} 0 15px,
        #0000 0 20px
      )
      left top,
    repeating-linear-gradient(
        45deg,
        ${a=>a.color||b.color} 0 15px,
        #0000 0 20px
      )
      left bottom;
  background-size: 200% 50%;
  background-repeat: no-repeat;
  animation-name: ${sa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||b.animationDuration}s;
`;const ga=()=>i`
	100% { background-position: 0% 0% };
`,f={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||f.height};
  width: ${a=>a.width||f.width};
  background: radial-gradient(
      circle 10px at right 7px top 50%,
      #0000 92%,
      ${a=>a.color||f.color}
    ),
    radial-gradient(
      circle 10px at right 0 top 50%,
      ${a=>a.color||f.color} 92%,
      #0000
    );
  background-size: calc(100% / 3) 100%;
  background-position: 50% 0%;
  animation-name: ${ga};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||f.animationDuration}s;
`;const da=()=>i`
	100% { background-position: 0 0 };
`,w={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||w.height};
  width: ${a=>a.width||w.width};
  background: conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      ${a=>a.color||w.color} 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      ${a=>a.color||w.color} 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 0;
  background-size: calc(100% / 4) 100%;
  animation-name: ${da};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||w.animationDuration}s;
`;const pa=()=>i`
	100% { background-position: 0 50% };
`,k={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||k.height};
  width: ${a=>a.width||k.width};
  background: linear-gradient(
        90deg,
        ${a=>a.color||k.color} 50%,
        #0000 0
      )
      repeat-x,
    conic-gradient(
      from 45deg at right 7px top 50%,
      ${a=>a.color||k.color} 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 50%;
  background-size: calc(100% / 4) 60%, calc(100% / 4) 100%;
  animation-name: ${pa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const ma=()=>i`
	100% { background-position: -8px 0%,-8px 50%,-8px 100% };
`,c={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||c.height};
  width: ${a=>a.width||c.width};
  background: linear-gradient(
        90deg,
        ${a=>a.color||c.color} 50%,
        #0000 0
      )
      0 0%,
    linear-gradient(
        -90deg,
        ${a=>a.color||c.color} 50%,
        #0000 0
      )
      0 50%,
    linear-gradient(
        90deg,
        ${a=>a.color||c.color} 50%,
        #0000 0
      )
      0 100%;
  background-size: 8px calc(100% / 3);
  background-repeat: repeat-x;
  animation-name: ${ma};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||c.animationDuration}s;
`;const ua=()=>i`
  100% { background-position: -300% 0 };
`,e={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||e.height};
  width: ${a=>a.width||e.width};
  background: linear-gradient(
      90deg,
      #0000 16px,
      ${a=>a.color||e.color} 0 30px,
      #0000 0
    ),
    radial-gradient(
      circle closest-side at 68% 50%,
      ${a=>a.color||e.color} 92%,
      #0000
    ),
    conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      ${a=>a.color||e.color} 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      ${a=>a.color||e.color} 90deg,
      #0000 0
    );
  background-position: 0 0;
  background-size: calc(3 * 100% / 4) 100%;
  background-repeat: repeat-x;
  animation-name: ${ua};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||e.animationDuration}s;
`;const la=i`
	100% { background-position: -20px 0%, 20px 0% };
`,S={height:"14px",width:"90px",color:"#0369a1",animationDuration:1};n`
  height: ${a=>a.height||S.height};
  width: ${a=>a.width||S.width};
  background: linear-gradient(90deg, ${a=>a.color} 50%, #0000 0) 0
      0%,
    linear-gradient(
        -90deg,
        ${a=>a.color||S.color} 50%,
        #0000 0
      )
      0 0%;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation-name: ${la};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;
`;const r={stop:!1,style:{}},ba={title:"Infinity Spinner",decorators:[a=>ta.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},o=a=>ta.jsx(ra,{...a}),s=o.bind({});s.args={variant:"variant1",...D,...r};s.argTypes=t(s.args);const g=o.bind({});g.args={variant:"variant2",...V,...r};g.argTypes=t(g.args);const d=o.bind({});d.args={variant:"variant3",...y,...r};d.argTypes=t(d.args);const p=o.bind({});p.args={variant:"variant4",...b,...r};p.argTypes=t(p.args);const m=o.bind({});m.args={variant:"variant5",...f,...r};m.argTypes=t(m.args);const u=o.bind({});u.args={variant:"variant6",...w,...r};u.argTypes=t(u.args);const l=o.bind({});l.args={variant:"variant7",...k,...r};l.argTypes=t(l.args);const h=o.bind({});h.args={variant:"variant8",...c,...r};h.argTypes=t(h.args);const $=o.bind({});$.args={variant:"variant9",...e,...r};$.argTypes=t($.args);const x=o.bind({});x.args={variant:"variant10",...S,...r};x.argTypes=t(x.args);var I,T,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var j,A,E;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(E=(A=g.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,_,O;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,R,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var B,C,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,M;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,Q,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(Z=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ia,na;x.parameters={...x.parameters,docs:{...(aa=x.parameters)==null?void 0:aa.docs,source:{originalSource:"args => <InfinitySpinner {...args} />",...(na=(ia=x.parameters)==null?void 0:ia.docs)==null?void 0:na.source}}};const fa=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{s as Variant1,x as Variant10,g as Variant2,d as Variant3,p as Variant4,m as Variant5,u as Variant6,l as Variant7,h as Variant8,$ as Variant9,fa as __namedExportsOrder,ba as default};
