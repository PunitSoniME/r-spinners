import{j as ta}from"./jsx-runtime-B_VdY94X.js";import{W as o,A as t,g as i,C as ia}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const ra=o`
  to {
    background-size: 100% 3px;
  }
`,D={color:"#1e293b",size:"1.5rem",animationDuration:2};t`
  font-size: ${a=>a.fontSize||D.size};
  color: ${a=>a.color||D.color};

  &:before {
    content: '${a=>a.text}';
  }
  background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
  padding-bottom: 8px;
  animation-name: ${ra};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ea=o`
  to {
    opacity: 0;
  }
`,V={color:"#1e293b",size:"1.5rem",animationDuration:2};t`
  font-size: ${a=>a.fontSize||V.size};
  color: ${a=>a.color||V.color};

  &:before {
    content: '${a=>a.text}';
  }
  animation-name: ${ea};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const sa=o`
  to {
    background-position: 80% 100%
  }
`,v={color:"#1e293b",size:"1.5rem",animationDuration:2};t`
  font-size: ${a=>a.fontSize||v.size};
  color: ${a=>a.color||v.color};

  &:before {
    content: '${a=>a.text}';
  }
  background: repeating-linear-gradient(90deg, currentColor 0 8%, #0000 0 10%)
    200% 100%/200% 3px no-repeat;
  padding: 0 5px 8px 0;
  animation-name: ${sa};
  animation-timing-function: steps(6);
  animation-duration: ${a=>a.animationDuration||v.animationDuration}s;
`;const ca=()=>o`
	to {
		clip-path: inset(0 -1ch 0 0);
	}
`,k={color:"#1e293b",size:"1.5rem",animationDuration:2};t`
  font-size: ${a=>a.fontSize||k.size};
  color: ${a=>a.color||k.color};

  &:before {
    content: '${a=>a.text}';
  }
  animation-name: ${ca};
  clip-path: inset(0 100% 0 0);
  animation-timing-function: steps(${a=>a.text.length+1});
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const la=()=>o`
	to {
		clip-path: inset(0 -1ch 0 0);
	}
`,C={color:"#1e293b",size:"1.5rem",animationDuration:2,noOfCharactersToBlinkAtLast:3};t`
  font-size: ${a=>a.fontSize||C.size};
  color: ${a=>a.color||C.color};

  &:before {
    content: '${a=>a.text}';
  }
  animation-name: ${la};
  clip-path: inset(0 ${a=>a.noOfCharactersToBlinkAtLast}ch 0 0);
  animation-timing-function: steps(
    ${a=>a.noOfCharactersToBlinkAtLast+1}
  );
  animation-duration: ${a=>a.animationDuration||C.animationDuration}s;
`;const ma=()=>o`
	to {
		background-position: left;
	}
`,x={color:"#1e293b",size:"1.5rem",animationColor:"#be123c",animationDuration:2};t`
  font-size: ${a=>a.fontSize||x.size};
  color: ${a=>a.color||x.color};

  &:before {
    content: '${a=>a.text}';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      ${a=>a.animationColor||x.animationColor}
        calc(50% + 0.5ch),
      ${a=>a.color||x.color} 0
    )
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${ma};
  animation-timing-function: steps(${a=>a.text.length+1});
  animation-duration: ${a=>a.animationDuration||x.animationDuration}s;
`;const ga=a=>o`
	to {
		text-shadow: -${a+1}ch 0 var(--c), 0ch 0 var(--c);
	}
`,S={color:"#1e293b",size:"1.5rem",animationDuration:2};t`
  font-size: ${a=>a.fontSize||S.size};
  color: ${a=>a.color||S.color};

  &:before {
    content: '${a=>a.text}';
  }
  --c: ${a=>a.color||S.color};
  color: #0000;
  overflow: hidden;
  animation-name: ${a=>ga(a.text.length)};
  animation-timing-function: linear;
  text-shadow: 0 0 var(--c), ${a=>a.text.length+1}ch 0 var(--c);
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;
`;const $a=()=>o`
	to {
		background-position: left;
	}
`,l={color:"#1e293b",size:"1.5rem",animationColor:"#be123c",animationDuration:3};t`
  font-size: ${a=>a.fontSize||l.size};
  color: ${a=>a.color||l.color};

  &:before {
    content: '${a=>a.text}';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      ${a=>a.color||l.color} calc(50% - 0.5ch),
      ${a=>a.animationColor||l.animationColor} 0
        calc(50% + 0.5ch),
      ${a=>a.color||l.color} 0
    )
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${$a};
  animation-timing-function: steps(${a=>a.text.length+1});
  animation-duration: ${a=>a.animationDuration||l.animationDuration}s;
`;const ua=(a,n)=>o`
  25% {text-shadow: -${n.length+1}ch 0 ${a[0]}, 0ch 0 ${a[1]}, ${n.length+1}ch 0 ${a[2]}, ${n.length+2}ch 0 ${a[3]}, ${n.length+3}ch 0 ${a[0]}}
  50% {text-shadow: -${n.length+2}ch 0 ${a[0]}, -${n.length+1}ch 0 ${a[1]},  0ch 0 ${a[2]}, ${n.length+1}ch 0 ${a[3]}, ${n.length+2}ch 0 ${a[0]}}
  75% {text-shadow: -${n.length+3}ch 0 ${a[0]}, -${n.length+2}ch 0 ${a[1]}, -${n.length+1}ch 0 ${a[2]},  0ch 0 ${a[3]}, ${n.length+1}ch 0 ${a[0]}}
  100%{text-shadow: -${n.length+4}ch 0 ${a[0]}, -${n.length+3}ch 0 ${a[1]}, -${n.length+2}ch 0 ${a[2]}, -${n.length+1}ch 0 ${a[3]}, 0ch 0 ${a[0]}}
`,s={color:"#1e293b",size:"1.5rem",animationDuration:3,colors:["#000","#b91c1c","#0369a1","#15803d"]};t`
  font-size: ${a=>a.fontSize||s.size};
  color: ${a=>a.color||s.color};

  &:before {
    content: '${a=>a.text}';
  }
  color: #0000;
  font-weight: bold;
  font-family: monospace;
  overflow: hidden;
  text-shadow: 0 0 ${a=>a.colors[0]||s.colors[0]},
    ${a=>a.text.length+1}ch 0
      ${a=>a.colors[1]||s.colors[1]},
    ${a=>a.text.length+2}ch 0
      ${a=>a.colors[2]||s.colors[2]},
    ${a=>a.text.length+3}ch 0
      ${a=>a.colors[3]||s.colors[3]},
    ${a=>a.text.length+4}ch 0
      ${a=>a.colors[0]||s.colors[0]};
  animation-name: ${a=>ua(a.colors,a.text)};
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: ${a=>a.animationDuration||s.animationDuration}s;
`;const da=o`
	25% { background-position: calc(1*100%/3) 0 }
	50% { background-position: calc(2*100%/3) 0 }
	75% { background-position: calc(3*100%/3) 0 }
	100% { background-position: calc(4*100%/3) 0 }
`,c={color:"#1e293b",size:"1.5rem",animationDuration:3,colors:["#000","#b91c1c","#0369a1","#15803d"]};t`
  font-size: ${a=>a.fontSize||c.size};
  color: ${a=>a.color||c.color};

  &:before {
    content: '${a=>a.text}';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      ${a=>a.colors[0]||c.colors[0]} 25%,
      ${a=>a.colors[1]||c.colors[1]} 0 50%,
      ${a=>a.colors[2]||c.colors[2]} 0 75%,
      ${a=>a.colors[3]||c.colors[3]} 0
    )
    0 0/400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: ${da};
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: ${a=>a.animationDuration||c.animationDuration}s;
`;const r={text:"loading...",stop:!1,style:{}},ba={title:"Classic Spinner",decorators:[a=>ta.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},e=a=>ta.jsx(ia,{...a}),m=e.bind({});m.args={variant:"variant1",...D,...r};m.argTypes=i(m.args);const g=e.bind({});g.args={variant:"variant2",...V,...r};g.argTypes=i(g.args);const $=e.bind({});$.args={variant:"variant3",...v,...r};$.argTypes=i($.args);const u=e.bind({});u.args={variant:"variant4",...k,...r};u.argTypes=i(u.args);const d=e.bind({});d.args={variant:"variant5",...C,...r};d.argTypes=i(d.args);const p=e.bind({});p.args={variant:"variant6",...x,...r};p.argTypes=i(p.args);const h=e.bind({});h.args={variant:"variant7",...S,...r};h.argTypes=i(h.args);const f=e.bind({});f.args={variant:"variant8",...l,...r};f.argTypes=i(f.args);const b=e.bind({});b.args={variant:"variant9",...s,...r};b.argTypes=i(b.args);const z=e.bind({});z.args={variant:"variant10",...c,...r};z.argTypes=i(z.args);var y,T,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var A,j,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(O=(j=g.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var B,L,E;$.parameters={...$.parameters,docs:{...(B=$.parameters)==null?void 0:B.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(E=(L=$.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,_,P;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,q,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,H,I;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,M;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,na,oa;z.parameters={...z.parameters,docs:{...(aa=z.parameters)==null?void 0:aa.docs,source:{originalSource:"args => <ClassicSpinner {...args} />",...(oa=(na=z.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};const za=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{m as Variant1,z as Variant10,g as Variant2,$ as Variant3,u as Variant4,d as Variant5,p as Variant6,h as Variant7,f as Variant8,b as Variant9,za as __namedExportsOrder,ba as default};
