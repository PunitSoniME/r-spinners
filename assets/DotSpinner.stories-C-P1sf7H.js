import{j as ia}from"./jsx-runtime-B_VdY94X.js";import{W as n,A as i,g as t,D as ta}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const oa=n`
    { 
      to { clip-path: inset(0 -34% 0 0) } 
    }
`,V={size:"60px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||V.size};
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side,
      ${a=>a.color||V.color} 90%,
      #0000
    )
    0 / calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation-name: ${oa};
  animation-timing-function: steps(4);
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const ra=n`
	{ 
		to { background-position: 150% } 
	}
`,v={size:"60px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||v.size};
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side,
      ${a=>a.color||v.color} 90%,
      #0000
    )
    0 / calc(100% / 3) 100% no-repeat;
  animation-name: ${ra};
  animation-timing-function: steps(3);
  animation-duration: ${a=>a.animationDuration||v.animationDuration}s;
`;const ea=n`
	20% { background-position: 0%   0%, 50%  50%, 100%  50% }
	40% { background-position: 0% 100%, 50%   0%, 100%  50% }
	60% { background-position: 0%  50%, 50% 100%, 100%   0% }
	80% { background-position: 0%  50%, 50%  50%, 100% 100% }
`,S={size:"60px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||S.size};
  aspect-ratio: 2;
  --_g: no-repeat
    radial-gradient(
      circle closest-side,
      ${a=>a.color||S.color} 90%,
      #0000
    );
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation-name: ${ea};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||S.animationDuration}s;
`;const sa=n`
	to { 
		width:25px;
		aspect-ratio: 1;
	}
`,D={size:"60px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||D.size};
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side at left 6px top 50%,
      ${a=>a.color||D.color} 90%,
      #0000
    ),
    radial-gradient(
      circle closest-side,
      ${a=>a.color||D.color} 90%,
      #0000
    ),
    radial-gradient(
      circle closest-side at right 6px top 50%,
      ${a=>a.color} 90%,
      #0000
    );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation-name: ${sa};
  animation-direction: alternate;
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ca=a=>n`
	0%   { box-shadow: 20px 0 ${a}, -20px 0 #0002; background: ${a} }
	33%  { box-shadow: 20px 0 ${a}, -20px 0 #0002; background: #0002 }
	66%  { box-shadow: 20px 0 #0002,-20px 0 ${a}; background: #0002 }
	100% { box-shadow: 20px 0 #0002,-20px 0 ${a}; background: ${a} }
`,h={size:"15px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||h.size};
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: ${a=>ca(a.color||h.color)};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${a=>a.animationDuration||h.animationDuration}s;
`;const ma=a=>n`
	0%  { box-shadow: 15px 0 ${a}, -25px 0 ${a} }
	50% { box-shadow: 15px 0 ${a}, -15px 0 ${a} }
	100% { box-shadow: 25px 0 ${a}, -15px 0 ${a} }
`,z={size:"15px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||z.size};
  aspect-ratio: 1;
  background: ${a=>a.color||z.color};
  border-radius: 50%;
  animation-name: ${a=>ma(a.color||z.color)};
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: ${a=>a.animationDuration||z.animationDuration}s;
`;const pa=n`
	33% { background-size: calc(100%/3) 0%  , calc(100%/3) 100%, calc(100%/3) 100% }
	50% { background-size: calc(100%/3) 100%, calc(100%/3) 0%  , calc(100%/3) 100% }
	66% { background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%  }
`,k={size:"60px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||k.size};
  aspect-ratio: 4;
  --_g: no-repeat
    radial-gradient(
      circle closest-side,
      ${a=>a.color||k.color} 90%,
      #0000
    );
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation-name: ${pa};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const da=n`
  100% { transform: translateX(25px) }
`,ua=n`
  100% { transform: rotate(-180deg) translateX(25px) }
`,f={size:"15px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||f.size};
  aspect-ratio: 1;
  position: relative;
  animation-duration: ${a=>a.animationDuration||f.animationDuration}s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${a=>a.color||f.color};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: ${a=>a.animationDuration||f.animationDuration}s;
    animation-play-state: ${a=>a.animationPlayState};
  }
  &:before {
    box-shadow: -25px 0 ${a=>a.color||f.color};
    animation-name: ${da};
  }
  &:after {
    transform: rotate(0deg) translateX(25px);
    animation-name: ${ua};
  }
`;const la=n`
  0% , 49.9% { transform: scale(1) }
  50%, 100%  { transform: scale(-1) }
`,ga=a=>n`
  100% { box-shadow: 52px 0 ${a} }
`,$a=n`
  100% { transform: translateX(13px) rotate(-180deg) translateX(13px) }
`,s={size:"15px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||s.size};
  aspect-ratio: 1;
  position: relative;
  animation-name: ${la};
  animation-play-state: ${a=>a.animationPlayState};
  animation-duration: ${a=>a.animationDuration||s.animationDuration}s;
  animation-timing-function: steps(3);

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${a=>a.color||s.color};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-duration: ${a=>(a.animationDuration||s.animationDuration)/2}s;
    animation-play-state: ${a=>a.animationPlayState};
  }
  &:before {
    box-shadow: 26px 0 ${a=>a.color||s.color};
    transform: translateX(-26px);
    animation-name: ${a=>ga(a.color||s.color)};
  }
  &:after {
    animation-name: ${$a};
    transform: translateX(13px) rotate(0deg) translateX(13px);
  }
`;const ba=a=>n`
  50% { transform: translateX(${a}) }
`,xa=a=>n`
  100% { transform: rotate(-360deg) translateX(${a}) }
`,e={size:"15px",gap:"26px",color:"#ea580c",animationDuration:2};i`
  width: ${a=>a.size||e.size};
  aspect-ratio: 1;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${a=>a.color||e.color};

    animation-duration: ${a=>a.animationDuration||e.animationDuration}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${a=>a.animationPlayState};
  }
  &:before {
    box-shadow: -${a=>a.gap||e.gap} 0 ${a=>a.color};
    animation-name: ${a=>ba(a.gap||e.gap)};
  }
  &:after {
    transform: rotate(0deg)
      translateX(${a=>a.gap||e.gap});
    animation-name: ${a=>xa(a.gap||e.gap)};
  }
`;const o={animationDuration:1,stop:!1,style:{}},Va={title:"Dot Spinner",decorators:[a=>ia.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},r=a=>ia.jsx(ta,{...a}),c=r.bind({});c.args={variant:"variant1",...V,...o};c.argTypes=t(c.args);const m=r.bind({});m.args={variant:"variant2",...v,...o};m.argTypes=t(m.args);const p=r.bind({});p.args={variant:"variant3",...S,...o};p.argTypes=t(p.args);const d=r.bind({});d.args={variant:"variant4",...D,...o};d.argTypes=t(d.args);const u=r.bind({});u.args={variant:"variant5",...h,...o};u.argTypes=t(u.args);const l=r.bind({});l.args={variant:"variant6",...z,...o};l.argTypes=t(l.args);const g=r.bind({});g.args={variant:"variant7",...k,...o};g.argTypes=t(g.args);const $=r.bind({});$.args={variant:"variant8",...f,...o};$.argTypes=t($.args);const b=r.bind({});b.args={variant:"variant9",...s,...o};b.argTypes=t(b.args);const x=r.bind({});x.args={variant:"variant10",...e,...o};x.argTypes=t(x.args);var w,y,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var X,_,P;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var j,A,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,O,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,B,C;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var F,G,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,N;$.parameters={...$.parameters,docs:{...(L=$.parameters)==null?void 0:L.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(N=(M=$.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,U,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,aa,na;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <DotSpinner {...args} />",...(na=(aa=x.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};const va=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{c as Variant1,x as Variant10,m as Variant2,p as Variant3,d as Variant4,u as Variant5,l as Variant6,g as Variant7,$ as Variant8,b as Variant9,va as __namedExportsOrder,Va as default};
