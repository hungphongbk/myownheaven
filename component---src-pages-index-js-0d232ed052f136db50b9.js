(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var A=a(7),n=a.n(A),r=a(0),i=a.n(r),o=a(149),c=a(157),s=a(155),l=a(150),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},i.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(i.a.Component);t.default=d;var u="2785444898"},148:function(e,t,a){var A;e.exports=(A=a(153))&&A.default||A},149:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var A=a(0),n=a.n(A),r=a(4),i=a.n(r),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(148);var s=n.a.createContext({}),l=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var A=a(159),n=a.n(A),r=a(160),i=a.n(r);i.a.baseFontSize="15.6px",i.a.baseLineHeight=1.64,i.a.googleFonts=[{name:"Vollkorn SC",styles:["400"]},{name:"Vollkorn",styles:["400","400i","700","700i"]}],i.a.headerFontFamily=["Vollkorn SC","serif"],i.a.bodyFontFamily=["Vollkorn","sans-serif"],i.a.overrideThemeStyles=function(e,t){e.rhythm;return{"a, a:hover, a:active, a:visited":{color:"#1e1e1e",textDecoration:"none"},blockquote:{fontSize:"inherit"},"h1,h2,h3,h4,h5,h6":{color:"#fff"}}};var o=new n.a(i.a);var c=o.rhythm,s=o.scale;o.adjustFontSizeTo},153:function(e,t,a){"use strict";a.r(t);a(34);var A=a(0),n=a.n(A),r=a(4),i=a.n(r),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e){e.exports={data:{banner:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF7YGzoyGH/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQISAxP/2gAIAQEAAQUCd5mK1I6bF0tHtZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAgMAAAAAAAAAAAAAAAAAARAREiEy/9oACAEBAAY/AmxONsrI6P/EABkQAQEBAQEBAAAAAAAAAAAAAAEAEUEhYf/aAAgBAQABPyHsuX1AhvHRIXKyR6v/2gAMAwEAAgADAAAAEBAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBABAQEBAQAAAAAAAAAAAAAAAREAIYH/2gAIAQEAAT8QOaRoLLuSh2g3UMYOCKLx3HhAA5MtHzhv/9k=",aspectRatio:1.5,src:"/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg",srcSet:"/static/55ab9d049550427527abb0b6d5b124c3/a7042/banner.jpg 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/3bde0/banner.jpg 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/ee0de/banner.jpg 2880w",srcWebp:"/static/55ab9d049550427527abb0b6d5b124c3/873c1/banner.webp",srcSetWebp:"/static/55ab9d049550427527abb0b6d5b124c3/671be/banner.webp 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/d5a3c/banner.webp 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/873c1/banner.webp 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/b27ea/banner.webp 2880w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},site:{siteMetadata:{author:"Иван Человеконенавистник",description:"Ведь ангелы тоже умирают..."}}}}},155:function(e,t,a){"use strict";a.d(t,"b",function(){return d});a(161);var A=a(156),n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(162),s=a.n(c),l=a(17);function d(e,t){return t.filter(function(e){return Array.isArray(e)&&e.length>=2}).map(function(t){var a=t[0],A=t[1],n=t[2];return{name:e+":"+a,content:A||n}})}function u(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,o=e.title,c=e.type,u=e.image,b=e.otherMeta,p=A.data,m=p.site.siteMetadata,g=p.icon,f=t||m.description,h=(u||g).childImageSharp;return h=(h.fixed||h.fluid).srcWebp,r.a.createElement(l.Location,null,function(e){var t=e.location;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+m.title,meta:[{name:"description",content:f}].concat(d("og",[["url",t.href],["title",o],["description",f],["type",c],["image",h],["image:alt",f]]),b).concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})})}u.defaultProps={lang:"en",meta:[],keywords:[],description:"",type:"website",otherMeta:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,type:o.a.oneOf(["website","article"]),otherMeta:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired,content:o.a.string.isRequired}))},t.a=u},156:function(e){e.exports={data:{icon:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVQ4yz2U2Su8YRTH3xuFC8Q9KcQfgJJEitBkuSApBpE0F5JGuHGhLAllKWsRKctItuxCEcrIkH1Qsi9jZoxlxvw+7zy/PBdv5zzP+Z7zfb7nPK9kt9u/v78fHx+/vr6wX19fLRbL7+8vOx8fHzab7enpCYOjl5cXEYPx/v6OIYH8/Pw0mUwGg6G/v//6+ppd8BxzRBaj0cip1WolxcDAwMHBwc/PD5ucSg8PD29vb6J+S0vL0NDQ/v4+BdnZ29ubmpqyO9bNzc3S0lJjY+Px8TEu9e7v7yXSYIEn8cbGBmfDw8NkIWJ6erq+vh5jdHS0uLiYmrOzs1CAFFwASjbHury8bGtrM5vNOTk5qampERERYWFh3KKvry8/Px+3oqLC1dV1Z2dnc3NTq9VCE5RMm8oXFxddXV0w8fHxCQwMdHZ29vPzS05OLiwsDA0NzcrK8vT0DAoK6unpmZmZWV9fh45MWwi4vb3d1NRUU1OTmZlZW1ubkJCQl5eHW1paWlVVFR0dXVJSUl1dHR8f39vbu7q6CnmAktBmd3cXWEhIiEKhqKur02g0Xl5eubm5RUVFLi4uKpXq7OyMADc3t6ioqLm5OatjybS5PWpVVlampKR4e3u3t7crHEupVGZnZ8fExMTGxqJZZGQkQhQUFBwdHf2nLZqMgwywoh8nJyfu7u7kCg4O9vDwQHl/f39kp/lqtRpSBCM4QIkxwIEVHaZPNDkxMZH6SUlJ5eXlcXFx4eHhuGThqpQhbG1tDbXlCcMHsLi4CPPOzk5fX19Ijo2NMQ8cDw4OOjk5dXd3Qxg66enper3+8PBweXmZIZUWFhaQlHnAGB8fp7crKyuTk5M0CWNrawsh2GfUmpubOzo65ufnQXILuiNXZrxOT09vb28RD/58dTpda2sroXBhtgAw+VdXV3d3d7wTgjEASiAZLBjyFcrBn7lnthoaGsrKymj7+fm5eGH0lizIxJ0xJLNjId2fAZK5ZRK5fEBAwMjICHGAUZsvBYjBliuL9wRVAPRdTCubTHtGRkZaWhpask81CJOXo+fnZ9LJaiOa2KJ1YgsXg4xoPjExQdtBAuBLXgzBX1YbDGwJNTkW9XFFFt4A4y1Iin+DMEAKQ/r7DQna4n+EQX36zzyJewq2wvj7Df0DF/KJ191a+okAAAAASUVORK5CYII=",width:260,height:260,src:"/static/5e5e0082ed2f10ec7e193a176479ed38/8b208/icon.png",srcSet:"/static/5e5e0082ed2f10ec7e193a176479ed38/8b208/icon.png 1x",srcWebp:"/static/5e5e0082ed2f10ec7e193a176479ed38/c5389/icon.webp",srcSetWebp:"/static/5e5e0082ed2f10ec7e193a176479ed38/c5389/icon.webp 1x"}}},site:{siteMetadata:{title:"Блог Иван Человеконенавистника",description:"Ведь ангелы тоже умирают...",author:"Иван Человеконенавистник",social:{facebook:"https://facebook.com/ivan.chelovekonenavistnik"}}}}}},157:function(e,t,a){"use strict";var A=a(7),n=a.n(A),r=a(0),i=a.n(r),o=(a(158),a(151)),c=a.n(o),s=(a(34),a(154)),l=a(33),d=a.n(l),u=a(149),b=a(152),p=a.n(b),m=a(150),g="3902628348",f=function(e){var t=e.blog,a=void 0===t?null:t;return i.a.createElement(u.b,{query:g,render:function(e){var t=e.banner,A=e.site,n={backgroundImage:"url("+t.childImageSharp.fluid.srcWebp+")"};return i.a.createElement("header",{style:n,className:p()(a&&c.a.WithBlogHeader)},i.a.createElement("div",{className:c.a.Container,style:{height:"100%"}},i.a.createElement(d.a,{className:c.a.ToHome,to:"/"},i.a.createElement("h1",null,A.siteMetadata.author),i.a.createElement("h3",null,i.a.createElement("i",null,A.siteMetadata.description))),a&&i.a.createElement("div",{className:c.a.BlogPostHeader},i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(m.b)(-1/12),{display:"block",marginBottom:Object(m.a)(.15),marginTop:Object(m.a)(0),fontFamily:"'Vollkorn',serif"})},a.frontmatter.date," by ",A.siteMetadata.author,a.category&&i.a.createElement(i.a.Fragment,null,"   |   ",i.a.createElement("strong",null,a.category.title.toUpperCase()))))))},data:s})},h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:p()(c.a.Layout,this.props.blog&&c.a.HasBlogPost)},i.a.createElement(f,{blog:this.props.blog}),i.a.createElement("main",{style:{paddingTop:"1px",marginTop:"-1px"}},i.a.createElement("div",{className:c.a.Container+" mt20"},this.props.children)))},t}(i.a.Component);h.defaultProps={blog:null};t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-js-0d232ed052f136db50b9.js.map