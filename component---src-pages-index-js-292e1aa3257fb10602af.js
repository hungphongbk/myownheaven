(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(158),c=a(156),s=a(4),l=a.n(s),d=a(150),u=a(149),p=a(155),b=p.a.div.withConfig({displayName:"PostItemOne__Wrapper",componentId:"zfd8ko-0"})(["position:relative;padding:","rem ","rem ","rem;border-radius:","rem;&:hover{background-color:#2d2d2d;}"],.7*1.3,.7,.7*3,1.4/3),m=[null,function(e){var t=e.post,a=t.frontmatter.title||t.fields.slug;return i.a.createElement(b,null,i.a.createElement(u.a,{style:{boxShadow:"none"},to:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}],f=function(e){return i.a.createElement(m[e.itemType],e)};f.propTypes={itemType:l.a.number.isRequired};var h=f,g=(a(76),a(56),a(37),a(183),{desktop:1024,tablet:768,phone:0}),E=Object.keys(g).reduce(function(e,t){return e[t]=function(e){return"\n    @media (min-width: "+g[t]+"px) {\n      "+e+"\n    }\n  "},e},{}),y=function(e,t,a){return a("\n  flex: 0 0 "+100/e.columns[t]+"%;\n  width: "+100/e.columns[t]+"%};\n")},w=p.a.div.withConfig({displayName:"PostGrid",componentId:"sc-1ohvoxb-0"})(["display:flex;flex-wrap:wrap;margin:","rem;> *{","}> *{","}> *{","}"],-.7,function(e){return y(e,0,E.phone)},function(e){return y(e,1,E.tablet)},function(e){return y(e,2,E.desktop)});a.d(t,"pageQuery",function(){return x});var v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(w,{columns:[1,2,2]},a.map(function(e){var t=e.node;return i.a.createElement(h,{key:t.fields.slug,itemType:1,post:t})})))},t}(i.a.Component),x=(t.default=v,"2785444898")},148:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},149:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(148);var s=r.a.createContext({}),l=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(160),r=a.n(n),A=a(161),i=a.n(A);i.a.baseFontSize="15.6px",i.a.baseLineHeight=1.64,i.a.googleFonts=[{name:"Vollkorn SC",styles:["400"]},{name:"Vollkorn",styles:["400","400i","700","700i"]}],i.a.headerFontFamily=["Vollkorn SC","serif"],i.a.bodyFontFamily=["Vollkorn","sans-serif"],i.a.overrideThemeStyles=function(e,t){e.rhythm;return{"a, a:hover, a:active, a:visited":{color:"#1e1e1e",textDecoration:"none"},blockquote:{fontSize:"inherit"},"h1,h2,h3,h4,h5,h6":{color:"#fff"}}};var o=new r.a(i.a);var c=o.rhythm,s=o.scale;o.adjustFontSizeTo},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e){e.exports={data:{banner:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF7YGzoyGH/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQISAxP/2gAIAQEAAQUCd5mK1I6bF0tHtZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAgMAAAAAAAAAAAAAAAAAARAREiEy/9oACAEBAAY/AmxONsrI6P/EABkQAQEBAQEBAAAAAAAAAAAAAAEAEUEhYf/aAAgBAQABPyHsuX1AhvHRIXKyR6v/2gAMAwEAAgADAAAAEBAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBABAQEBAQAAAAAAAAAAAAAAAREAIYH/2gAIAQEAAT8QOaRoLLuSh2g3UMYOCKLx3HhAA5MtHzhv/9k=",aspectRatio:1.5,src:"/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg",srcSet:"/static/55ab9d049550427527abb0b6d5b124c3/a7042/banner.jpg 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/3bde0/banner.jpg 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/ee0de/banner.jpg 2880w",srcWebp:"/static/55ab9d049550427527abb0b6d5b124c3/873c1/banner.webp",srcSetWebp:"/static/55ab9d049550427527abb0b6d5b124c3/671be/banner.webp 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/d5a3c/banner.webp 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/873c1/banner.webp 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/b27ea/banner.webp 2880w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},site:{siteMetadata:{author:"Иван Человеконенавистник",description:"Ведь ангелы тоже умирают..."}}}}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return d});a(162);var n=a(157),r=a(0),A=a.n(r),i=a(4),o=a.n(i),c=a(163),s=a.n(c),l=a(17);function d(e,t){return t.filter(function(e){return Array.isArray(e)&&e.length>=2}).map(function(t){var a=t[0],n=t[1],r=t[2];return{property:e+":"+a,content:n||r}})}function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,c=e.type,u=e.image,p=e.otherMeta,b=n.data,m=b.site.siteMetadata,f=b.icon,h=t||m.description,g=(u||f).childImageSharp;return g=(g.fixed||g.fluid).srcWebp,A.a.createElement(l.Location,null,function(e){var t=e.location;return A.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+m.title,meta:[{name:"description",content:h}].concat(d("og",[["url",m.url+t.pathname],["title",o],["description",h],["type",c],["image",g],["image:alt",h]]),p).concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})})}u.defaultProps={lang:"en",meta:[],keywords:[],description:"",type:"website",otherMeta:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,type:o.a.oneOf(["website","article"]),otherMeta:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired,content:o.a.string.isRequired}))},t.a=u},157:function(e){e.exports={data:{icon:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVQ4yz2U2Su8YRTH3xuFC8Q9KcQfgJJEitBkuSApBpE0F5JGuHGhLAllKWsRKctItuxCEcrIkH1Qsi9jZoxlxvw+7zy/PBdv5zzP+Z7zfb7nPK9kt9u/v78fHx+/vr6wX19fLRbL7+8vOx8fHzab7enpCYOjl5cXEYPx/v6OIYH8/Pw0mUwGg6G/v//6+ppd8BxzRBaj0cip1WolxcDAwMHBwc/PD5ucSg8PD29vb6J+S0vL0NDQ/v4+BdnZ29ubmpqyO9bNzc3S0lJjY+Px8TEu9e7v7yXSYIEn8cbGBmfDw8NkIWJ6erq+vh5jdHS0uLiYmrOzs1CAFFwASjbHury8bGtrM5vNOTk5qampERERYWFh3KKvry8/Px+3oqLC1dV1Z2dnc3NTq9VCE5RMm8oXFxddXV0w8fHxCQwMdHZ29vPzS05OLiwsDA0NzcrK8vT0DAoK6unpmZmZWV9fh45MWwi4vb3d1NRUU1OTmZlZW1ubkJCQl5eHW1paWlVVFR0dXVJSUl1dHR8f39vbu7q6CnmAktBmd3cXWEhIiEKhqKur02g0Xl5eubm5RUVFLi4uKpXq7OyMADc3t6ioqLm5OatjybS5PWpVVlampKR4e3u3t7crHEupVGZnZ8fExMTGxqJZZGQkQhQUFBwdHf2nLZqMgwywoh8nJyfu7u7kCg4O9vDwQHl/f39kp/lqtRpSBCM4QIkxwIEVHaZPNDkxMZH6SUlJ5eXlcXFx4eHhuGThqpQhbG1tDbXlCcMHsLi4CPPOzk5fX19Ijo2NMQ8cDw4OOjk5dXd3Qxg66enper3+8PBweXmZIZUWFhaQlHnAGB8fp7crKyuTk5M0CWNrawsh2GfUmpubOzo65ufnQXILuiNXZrxOT09vb28RD/58dTpda2sroXBhtgAw+VdXV3d3d7wTgjEASiAZLBjyFcrBn7lnthoaGsrKymj7+fm5eGH0lizIxJ0xJLNjId2fAZK5ZRK5fEBAwMjICHGAUZsvBYjBliuL9wRVAPRdTCubTHtGRkZaWhpask81CJOXo+fnZ9LJaiOa2KJ1YgsXg4xoPjExQdtBAuBLXgzBX1YbDGwJNTkW9XFFFt4A4y1Iin+DMEAKQ/r7DQna4n+EQX36zzyJewq2wvj7Df0DF/KJ191a+okAAAAASUVORK5CYII=",width:260,height:260,src:"/static/5e5e0082ed2f10ec7e193a176479ed38/8b208/icon.png",srcSet:"/static/5e5e0082ed2f10ec7e193a176479ed38/8b208/icon.png 1x",srcWebp:"/static/5e5e0082ed2f10ec7e193a176479ed38/c5389/icon.webp",srcSetWebp:"/static/5e5e0082ed2f10ec7e193a176479ed38/c5389/icon.webp 1x"}}},site:{siteMetadata:{url:"https://myownheaven.com",title:"Блог Иван Человеконенавистника",description:"Ведь ангелы тоже умирают...",author:"Иван Человеконенавистник",social:{facebook:"https://facebook.com/ivan.chelovekonenavistnik"}}}}}},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=(a(159),a(151)),c=a.n(o),s=(a(34),a(35),a(74),a(154)),l=a(33),d=a.n(l),u=a(149),p=a(152),b=a.n(p),m=a(150),f=a(155),h=f.a.header.withConfig({displayName:"BlogHeader__Header",componentId:"sc-115mjau-0"})(["",""],function(e){return e.srcSet.split(",").map(function(e,t){var a=e.trim().split(" "),n=a[0],r=a[1],A="background-image: url("+n+");";return t>0&&(A="@media (min-width: "+r.replace(/w/,"px")+"){\n        "+A+"\n      }"),A}).join("")}),g="3902628348",E=function(e){var t=e.blog,a=void 0===t?null:t;return i.a.createElement(u.b,{query:g,render:function(e){var t=e.banner,n=e.site;return i.a.createElement(h,{srcSet:t.childImageSharp.fluid.srcSetWebp,className:b()(a&&c.a.WithBlogHeader)},i.a.createElement("div",{className:c.a.Container,style:{height:"100%"}},i.a.createElement(d.a,{className:c.a.ToHome,to:"/"},i.a.createElement("h1",null,n.siteMetadata.author),i.a.createElement("h3",null,i.a.createElement("i",null,n.siteMetadata.description))),a&&i.a.createElement("div",{className:c.a.BlogPostHeader},i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(m.b)(-1/12),{display:"block",marginBottom:Object(m.a)(.15),marginTop:Object(m.a)(0),fontFamily:"'Vollkorn',serif"})},a.frontmatter.date," by ",n.siteMetadata.author,a.category&&i.a.createElement(i.a.Fragment,null,"   |   ",i.a.createElement("strong",null,a.category.title.toUpperCase()))))))},data:s})},y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:b()(c.a.Layout,this.props.blog&&c.a.HasBlogPost)},i.a.createElement(E,{blog:this.props.blog}),i.a.createElement("main",{style:{paddingTop:"1px",marginTop:"-1px"}},i.a.createElement("div",{className:c.a.Container+" mt20"},this.props.children)))},t}(i.a.Component);y.defaultProps={blog:null};t.a=y},183:function(e,t,a){var n=a(25),r=a(36);a(184)("keys",function(){return function(e){return r(n(e))}})},184:function(e,t,a){var n=a(11),r=a(19),A=a(18);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*A(function(){a(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-pages-index-js-292e1aa3257fb10602af.js.map