(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),A=a.n(n),r=a(0),i=a.n(r),o=a(156),s=a(163),c=a(161),l=a(157),d=a(151),b=a.n(d),u=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,A=a.next;return i.a.createElement(s.a,{location:this.props.location,title:t,blog:e},i.a.createElement(c.a,{title:e.frontmatter.title,type:"article",description:e.frontmatter.description||e.excerpt}),i.a.createElement("div",{className:b.a.BlogContentWrapper},i.a.createElement("div",{className:b.a.BlogContent},i.a.createElement("div",{className:"mt20",dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,A&&i.a.createElement(o.a,{to:A.fields.slug,rel:"next"},A.frontmatter.title," →"))))))},t}(i.a.Component);t.default=u;var p="3654438753"},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(155);var c=A.a.createContext({}),l=function(e){return A.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return c});var n=a(164),A=a.n(n),r=a(165),i=a.n(r);i.a.baseFontSize="15px",i.a.baseLineHeight=1.64,i.a.googleFonts=[{name:"Vollkorn SC",styles:["400"]},{name:"Vollkorn",styles:["400","400i","700","700i"]}],i.a.headerFontFamily=["Vollkorn SC","serif"],i.a.bodyFontFamily=["Vollkorn","sans-serif"],i.a.overrideThemeStyles=function(e,t){e.rhythm;return{"a, a:hover, a:active, a:visited":{color:"#1e1e1e",textDecoration:"none"},blockquote:{fontSize:"inherit"}}};var o=new A.a(i.a);var s=o.rhythm,c=o.scale;o.adjustFontSizeTo},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return A.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},160:function(e){e.exports={data:{banner:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF7YGzoyGH/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQISAxP/2gAIAQEAAQUCd5mK1I6bF0tHtZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAgMAAAAAAAAAAAAAAAAAARAREiEy/9oACAEBAAY/AmxONsrI6P/EABkQAQEBAQEBAAAAAAAAAAAAAAEAEUEhYf/aAAgBAQABPyHsuX1AhvHRIXKyR6v/2gAMAwEAAgADAAAAEBAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBABAQEBAQAAAAAAAAAAAAAAAREAIYH/2gAIAQEAAT8QOaRoLLuSh2g3UMYOCKLx3HhAA5MtHzhv/9k=",aspectRatio:1.5,src:"/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg",srcSet:"/static/55ab9d049550427527abb0b6d5b124c3/a7042/banner.jpg 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/3bde0/banner.jpg 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/ee0de/banner.jpg 2880w",srcWebp:"/static/55ab9d049550427527abb0b6d5b124c3/873c1/banner.webp",srcSetWebp:"/static/55ab9d049550427527abb0b6d5b124c3/671be/banner.webp 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/d5a3c/banner.webp 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/873c1/banner.webp 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/b27ea/banner.webp 2880w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},site:{siteMetadata:{author:"Иван Человеконенавистник",description:"Ведь ангелы тоже умирают..."}}}}},161:function(e,t,a){"use strict";var n=a(162),A=a(0),r=a.n(A),i=a(4),o=a.n(i),s=a(166),c=a.n(s);function l(e){var t,a,A=e.description,i=e.lang,o=e.meta,s=e.keywords,l=e.title,d=e.type,b=n.data.site,u=A||b.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:i},title:l,titleTemplate:"%s | "+b.siteMetadata.title,meta:[{name:"description",content:u}].concat((t="og",a=[["title",l],["description",u],["type",d]],a.map(function(e){var a=e[0],n=e[1],A=e[2];return{name:t+":"+a,content:n||A}})),[{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:b.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}]).concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:"",type:"website"},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,type:o.a.oneOf(["website","article"])},t.a=l},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Блог Иван Человеконенавистника",description:"Ведь ангелы тоже умирают...",author:"Иван Человеконенавистник"}}}}},163:function(e,t,a){"use strict";var n=a(7),A=a.n(n),r=a(0),i=a.n(r),o=(a(148),a(147)),s=a.n(o),c=(a(34),a(160)),l=a(33),d=a.n(l),b=a(156),u=a(158),p=a.n(u),m=a(157),E="3902628348",g=function(e){var t=e.blog,a=void 0===t?null:t;return i.a.createElement(b.b,{query:E,render:function(e){var t=e.banner,n=e.site,A={backgroundImage:"url("+t.childImageSharp.fluid.srcWebp+")"};return i.a.createElement("header",{style:A,className:p()(a&&s.a.WithBlogHeader)},i.a.createElement("div",{className:s.a.Container,style:{height:"100%"}},i.a.createElement(d.a,{className:s.a.ToHome,to:"/"},i.a.createElement("h1",null,n.siteMetadata.author),i.a.createElement("h3",null,i.a.createElement("i",null,n.siteMetadata.description))),a&&i.a.createElement("div",{className:s.a.BlogPostHeader},i.a.createElement("h1",null,a.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(m.b)(-1/12),{display:"block",marginBottom:Object(m.a)(.15),marginTop:Object(m.a)(0),fontFamily:"'Vollkorn',serif"})},a.frontmatter.date," by ",n.siteMetadata.author))))},data:c})},h=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:p()(s.a.Layout,this.props.blog&&s.a.HasBlogPost)},i.a.createElement(g,{blog:this.props.blog}),i.a.createElement("main",{style:{paddingTop:"1px",marginTop:"-1px"}},i.a.createElement("div",{className:s.a.Container+" mt20"},this.props.children)))},t}(i.a.Component);h.defaultProps={blog:null};t.a=h}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9aa5d63e01401da256a1.js.map