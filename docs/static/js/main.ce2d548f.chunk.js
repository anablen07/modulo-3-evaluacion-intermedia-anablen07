(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),o=n(2),a=n.n(o),i=(n(13),n(3)),p=n(4),u=n(6),m=n(7),l=(n(14),function(e){return s.a.createElement("li",{className:"pokemonList__pokemon"},s.a.createElement("div",{className:"pokemonList__pokemon-info"},s.a.createElement("h2",null,e.pokemonName),s.a.createElement("img",{src:e.imgSrc,alt:e.pokemonName}),s.a.createElement("ul",{className:"types"},e.pokemonTypes.map((function(e,t){return s.a.createElement("li",{key:t},e)})))))}),c=function(e){return s.a.createElement("ul",null,s.a.createElement("h1",null,"Mi lista de Pokemon"),e.dataList.map((function(e,t){return s.a.createElement(l,{key:t,imgSrc:e.url,pokemonName:e.name,pokemonTypes:e.types})})))},k=n(5),h=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={data:k},r}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(c,{dataList:this.state.data}))}}]),n}(s.a.Component);a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.ce2d548f.chunk.js.map