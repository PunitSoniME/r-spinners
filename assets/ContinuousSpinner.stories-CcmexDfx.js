import{j as ta}from"./jsx-runtime-B_VdY94X.js";import{W as i,A as t,g as o,a as oa}from"./stories.util-D3rIfu5m.js";import"./index-Cp6HKLZC.js";const na=i`
    0% { background-position: right; }
`,V={color:"#514b82",height:"20px",width:"120px",animationDuration:2};t`
  height: ${a=>a.height||V.height};
  width: ${a=>a.width||V.width};

  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%)
    ${a=>a.color||V.color};
  background-size: 300% 100%;
  animation-name: ${na};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||V.animationDuration}s;
`;const ra=i`
  	100% { background-position: right -50px top 0 }
`,x={color:"#514b82",height:"20px",width:"120px",bgColor:"lightgrey",animationDuration:2};t`
  height: ${a=>a.height||x.height};
  width: ${a=>a.width||x.width};

  background: linear-gradient(
      90deg,
      #0000,
      ${a=>a.color||x.color}
    )
    left -50px top 0/50px 20px no-repeat ${a=>a.bgColor||x.bgColor};
  animation-name: ${ra};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||x.animationDuration}s;
`;const ea=i`
  	100% { background-position: right -30px top 0 }
`,w={color:"#514b82",height:"20px",width:"120px",bgColor:"lightgrey",animationDuration:2};t`
  height: ${a=>a.height||w.height};
  width: ${a=>a.width||w.width};

  transform: skewX(-45deg);
  background: linear-gradient(
      ${a=>a.color||w.color} 0 0
    )
    left -30px top 0/30px 20px no-repeat ${a=>a.bgColor||w.bgColor};
  animation-name: ${ea};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||w.animationDuration}s;
`;const sa=()=>i`
	100% { left: calc(100% + 20px) }
`,f={color:"#514b82",height:"20px",width:"120px",animationDuration:2};t`
  height: ${a=>a.height||f.height};
  width: ${a=>a.width||f.width};

  color: ${a=>a.color||f.color};
  border-radius: 40px;
  border: 2px solid;
  position: relative;
  overflow: hidden;
  animation-duration: ${a=>a.animationDuration||f.animationDuration}s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    width: 14px;
    top: 0;
    bottom: 0;
    left: -20px;
    border-radius: inherit;
    background: currentColor;
    box-shadow: -10px 0 12px 3px currentColor;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);

    animation-name: ${sa};
    animation-timing-function: linear;
    animation-duration: ${a=>a.animationDuration||f.animationDuration}s;
    animation-play-state: ${a=>a.animationPlayState};
  }
`;const ca=()=>i`
	100% { background-position: right -40px top 0, center }
`,D={color:"#514b82",height:"20px",width:"120px",secondaryColor:"lightgrey",animationDuration:2};t`
  height: ${a=>a.height||D.height};
  width: ${a=>a.width||D.width};

  background: linear-gradient(
        ${a=>a.color||D.color} 0 0
      )
      left -40px top 0/40px 20px,
    linear-gradient(
        ${a=>a.secondaryColor||D.secondaryColor} 0 0
      )
      center/100% 50%;
  background-repeat: no-repeat;
  animation-name: ${ca};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||D.animationDuration}s;
`;const ga=()=>i`
	100% { 
		background-position: left; 
		-webkit-mask-position:left 
	}
`,e={color:"#514b82",height:"20px",width:"120px",animationDuration:2};t`
  height: ${a=>a.height||e.height};
  width: ${a=>a.width||e.width};

  background: radial-gradient(
        circle 10px,
        ${a=>a.color||e.color} 95%,
        #0000
      )
      right/calc(200% + 20px) 100%,
    linear-gradient(${a=>a.color||e.color} 0 0)
      center/100% 6px;
  background-repeat: no-repeat;
  -webkit-mask: radial-gradient(
      circle 4px,
      #0000 93%,
      ${a=>a.color||e.color}
    )
    right/calc(200% + 20px) 100%;
  animation-name: ${ga};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||e.animationDuration}s;
`;const pa=()=>i`
	100% { background-position: right -25% top 0 }
`,s={color:"#514b82",bgColor:"#eee",height:"20px",width:"120px",animationDuration:2};t`
  height: ${a=>a.height||s.height};
  width: ${a=>a.width||s.width};

  -webkit-mask: linear-gradient(
      90deg,
      ${a=>a.color||s.color} 70%,
      #0000 0
    )
    left/20% 100%;
  background: linear-gradient(
      ${a=>a.color||s.color} 0 0
    )
    left -25% top 0 /20% 100% no-repeat
    ${a=>a.bgColor||s.bgColor};
  animation-name: ${pa};
  animation-timing-function: linear;
  animation-timing-function: steps(6);
  animation-duration: ${a=>a.animationDuration||s.animationDuration}s;
`;const da=()=>i`
	100% { background-position: top left }
`,y={color:"#514b82",height:"40px",width:"40px",animationDuration:2};t`
  height: ${a=>a.height||y.height};
  width: ${a=>a.width||y.width};

  background: linear-gradient(
      to bottom right,
      #0000 calc(50% - 40px),
      #fff 50%,
      #0000 calc(50% + 40px)
    )
    bottom right/calc(200% + 80px) calc(200% + 80px)
    ${a=>a.color||y.color};
  animation-name: ${da};
  animation-duration: ${a=>a.animationDuration||y.animationDuration}s;
`;const ua=()=>i`
  100% { background-position: calc(200% - 5px) }
`,C={color:"#ccc",dotColor:"#514b82",height:"20px",width:"120px",animationDuration:2};t`
  height: ${a=>a.height||C.height};
  width: ${a=>a.width||C.width};

  background: radial-gradient(
      circle closest-side,
      ${a=>a.dotColor||C.dotColor} 94%,
      #0000
    )
    50% 50% / calc(50% + 10px) 70% repeat-x
    ${a=>a.color||C.color};
  animation-name: ${ua};
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: ${a=>a.animationDuration||C.animationDuration}s;
`;const la=i`
	100% { background-position: right -40px top 0 }
`,k={color:"#514b82",height:"20px",width:"120px",bgColor:"lightgrey",animationDuration:2};t`
  height: ${a=>a.height||k.height};
  width: ${a=>a.width||k.width};

  background: linear-gradient(
      ${a=>a.color||k.color} 0 0
    )
    left -40px top 0/40px 100% no-repeat ${a=>a.bgColor||k.bgColor};
  -webkit-mask: linear-gradient(#000 0 0) top / 100% 5px no-repeat,
    linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
    repeating-linear-gradient(90deg, #000 0 5px, #0000 0 20%)
      left/calc(100% - 5px) 100%;
  animation-name: ${la};
  animation-timing-function: linear;
  animation-duration: ${a=>a.animationDuration||k.animationDuration}s;
`;const n={animationDuration:1,stop:!1,style:{}},ba={title:"Continuous Spinner",decorators:[a=>ta.jsx(a,{})],parameters:{layout:"centered",controls:{expanded:!0}}},r=a=>ta.jsx(oa,{...a}),c=r.bind({});c.args={variant:"variant1",...V,...n};c.argTypes=o(c.args);const g=r.bind({});g.args={variant:"variant2",...x,...n};g.argTypes=o(g.args);const p=r.bind({});p.args={variant:"variant3",...w,...n};p.argTypes=o(p.args);const d=r.bind({});d.args={variant:"variant4",...f,...n};d.argTypes=o(d.args);const u=r.bind({});u.args={variant:"variant5",...D,...n};u.argTypes=o(u.args);const l=r.bind({});l.args={variant:"variant6",...e,...n};l.argTypes=o(l.args);const m=r.bind({});m.args={variant:"variant7",...s,...n};m.argTypes=o(m.args);const h=r.bind({});h.args={variant:"variant8",...y,...n};h.argTypes=o(h.args);const $=r.bind({});$.args={variant:"variant9",...C,...n};$.argTypes=o($.args);const b=r.bind({});b.args={variant:"variant10",...k,...n};b.argTypes=o(b.args);var S,v,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var j,A,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(z=(A=g.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var E,P,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,O,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var X,q,B;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,G,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,U,Y;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(Y=(U=$.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,aa,ia;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:"args => <ContinuousSpinner {...args} />",...(ia=(aa=b.parameters)==null?void 0:aa.docs)==null?void 0:ia.source}}};const xa=["Variant1","Variant2","Variant3","Variant4","Variant5","Variant6","Variant7","Variant8","Variant9","Variant10"];export{c as Variant1,b as Variant10,g as Variant2,p as Variant3,d as Variant4,u as Variant5,l as Variant6,m as Variant7,h as Variant8,$ as Variant9,xa as __namedExportsOrder,ba as default};
