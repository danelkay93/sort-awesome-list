"use strict";(self.webpackChunksort_awesome_list=self.webpackChunksort_awesome_list||[]).push([[6345],{6345:(e,t,n)=>{function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}n.r(t),n.d(t,{oz:()=>b});var a=/[\^@!\|<>#~\.\*\-\+\\/,=]/,o=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,i=/(:::)|(\.\.\.)|(=<:)|(>=:)/,c=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],u=["end"],s=r(["true","false","nil","unit"]),f=r(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),l=r(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),d=r(c),h=r(u);function m(e,t){if(e.eatSpace())return null;if(e.match(/[{}]/))return"bracket";if(e.match("[]"))return"keyword";if(e.match(i)||e.match(o))return"operator";if(e.match(s))return"atom";var n=e.match(l);if(n)return t.doInCurrentLine?t.doInCurrentLine=!1:t.currentIndent++,"proc"==n[0]||"fun"==n[0]?t.tokenize=z:"class"==n[0]?t.tokenize=k:"meth"==n[0]&&(t.tokenize=p),"keyword";if(e.match(d)||e.match(f))return"keyword";if(e.match(h))return t.currentIndent--,"keyword";var r,c=e.next();if('"'==c||"'"==c)return t.tokenize=(r=c,function(e,t){for(var n,a=!1,o=!1;null!=(n=e.next());){if(n==r&&!a){o=!0;break}a=!a&&"\\"==n}return!o&&a||(t.tokenize=m),"string"}),t.tokenize(e,t);if(/[~\d]/.test(c)){if("~"==c){if(!/^[0-9]/.test(e.peek()))return null;if("0"==e.next()&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}return"0"==c&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)?"number":null}return"%"==c?(e.skipToEnd(),"comment"):"/"==c&&e.eat("*")?(t.tokenize=w,w(e,t)):a.test(c)?"operator":(e.eatWhile(/\w/),"variable")}function k(e,t){return e.eatSpace()?null:(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=m,"type")}function p(e,t){return e.eatSpace()?null:(e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=m,"def")}function z(e,t){return e.eatSpace()?null:!t.hasPassedFirstStage&&e.eat("{")?(t.hasPassedFirstStage=!0,"bracket"):t.hasPassedFirstStage?(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/),t.hasPassedFirstStage=!1,t.tokenize=m,"def"):(t.tokenize=m,null)}function w(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=m;break}r="*"==n}return"comment"}const b={name:"oz",startState:function(){return{tokenize:m,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(e,t){return e.sol()&&(t.doInCurrentLine=0),t.tokenize(e,t)},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(h)||r.match(d)||r.match(/(\[])/)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{indentOnInut:function(){var e=c.concat(u);return new RegExp("[\\[\\]]|("+e.join("|")+")$")}(),commentTokens:{line:"%",block:{open:"/*",close:"*/"}}}}}}]);
//# sourceMappingURL=6345.9d058ba4.chunk.js.map