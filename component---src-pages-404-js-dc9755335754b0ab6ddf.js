(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(159),s=a(157),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=l;var u="1097489062"},148:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(148);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(163),r=a.n(n),i=a(164),o=a.n(i);o.a.baseFontSize="16.2px",o.a.baseLineHeight=1.64,o.a.googleFonts=[{name:"Vollkorn SC",styles:["400"]},{name:"Vollkorn",styles:["400","400i","700","700i"]}],o.a.headerFontFamily=["Vollkorn SC","serif"],o.a.bodyFontFamily=["Vollkorn","sans-serif"],o.a.overrideThemeStyles=function(e,t){e.rhythm;return{"a, a:hover, a:active, a:visited":{color:"#1e1e1e",textDecoration:"none"},blockquote:{fontSize:"inherit"},"h1,h2,h3,h4,h5,h6":{color:"#fff"}}};var c=new r.a(o.a);var s=c.rhythm,l=c.scale;c.adjustFontSizeTo},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},156:function(e){e.exports={data:{banner:{childImageSharp:{fluid:{srcSet:"/static/55ab9d049550427527abb0b6d5b124c3/a7042/banner.jpg 480w,\n/static/55ab9d049550427527abb0b6d5b124c3/3bde0/banner.jpg 960w,\n/static/55ab9d049550427527abb0b6d5b124c3/981ba/banner.jpg 1920w,\n/static/55ab9d049550427527abb0b6d5b124c3/ee0de/banner.jpg 2880w"}}},site:{siteMetadata:{author:"Иван Человеконенавистник",description:"Ведь ангелы тоже умирают..."}}}}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});a(165);var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(166),l=a.n(s),u=a(17);function d(e,t){return t.filter(function(e){return Array.isArray(e)&&e.length>=2}).map(function(t){var a=t[0],n=t[1],r=t[2];return{property:e+":"+a,content:n||r}})}function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=e.type,p=e.image,m=e.otherMeta,h=n.data,f=h.site.siteMetadata,b=h.icon,g=t||f.description,y=(p||b).childImageSharp;return y=(y.fixed||y.fluid).src,i.a.createElement(u.Location,null,function(e){var t=e.location;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+f.title,meta:[{name:"description",content:g}].concat(d("og",[["url",f.url+t.pathname],["title",c],["description",g],["type",s],["image",y],["image:alt",g]]),m).concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})})}p.defaultProps={lang:"en",meta:[],keywords:[],description:"",type:"website",otherMeta:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired,type:c.a.oneOf(["website","article"]),otherMeta:c.a.arrayOf(c.a.shape({name:c.a.string.isRequired,content:c.a.string.isRequired}))},t.a=p},158:function(e){e.exports={data:{icon:{childImageSharp:{fixed:{src:"/static/5e5e0082ed2f10ec7e193a176479ed38/8b208/icon.png"}}},site:{siteMetadata:{url:"https://myownheaven.com",title:"Блог Иван Человеконенавистника",description:"Ведь ангелы тоже умирают...",author:"Иван Человеконенавистник",social:{facebook:"https://facebook.com/ivan.chelovekonenavistnik"}}}}}},159:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=(a(162),a(151)),s=a.n(c),l=(a(34),a(35),a(74),a(156)),u=a(33),d=a.n(u),p=a(149),m=a(152),h=a.n(m),f=a(150),b=a(153),g=b.a.header.withConfig({displayName:"BlogHeader__Header",componentId:"sc-115mjau-0"})(["",""],function(e){return e.srcSet.split(",").map(function(e,t){var a=e.trim().split(" "),n=a[0],r=a[1],i="background-image: url("+n+");";return t>0&&(i="@media (min-width: "+r.replace(/w/,"px")+"){\n        "+i+"\n      }"),i}).join("")}),y="671455968",v=function(e){var t=e.blog,a=void 0===t?null:t;return o.a.createElement(p.b,{query:y,render:function(e){var t=e.banner,n=e.site;return o.a.createElement(g,{srcSet:t.childImageSharp.fluid.srcSet,className:h()(a&&s.a.WithBlogHeader)},o.a.createElement("div",{className:s.a.Container,style:{height:"100%"}},o.a.createElement(d.a,{className:s.a.ToHome,to:"/"},o.a.createElement("h1",null,n.siteMetadata.author),o.a.createElement("h3",null,o.a.createElement("i",null,n.siteMetadata.description))),a&&o.a.createElement("div",{className:s.a.BlogPostHeader},o.a.createElement("h1",null,a.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-1/12),{display:"block",marginBottom:Object(f.a)(.15),marginTop:Object(f.a)(0),fontFamily:"'Vollkorn',serif"})},a.frontmatter.date," by ",n.siteMetadata.author,a.category&&o.a.createElement(o.a.Fragment,null,"   |   ",o.a.createElement("strong",null,a.category.title.toUpperCase()))))))},data:l})},E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:h()(s.a.Layout,this.props.blog&&s.a.HasBlogPost)},o.a.createElement(v,{blog:this.props.blog}),o.a.createElement("main",{style:{paddingTop:"1px",marginTop:"-1px"}},o.a.createElement("div",{className:s.a.Container},this.props.children)))},t}(o.a.Component);E.defaultProps={blog:null};t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-dc9755335754b0ab6ddf.js.map