"use strict";(self.webpackChunksort_awesome_list=self.webpackChunksort_awesome_list||[]).push([[7934],{7934:function(n,e,t){t.r(e),t.d(e,{cmake:function(){return r}});var i=/({)?[a-zA-Z0-9_]+(})?/;function a(n,e){for(var t,i,a=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){a=!0;break}i=t}return a&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}var r={name:"cmake",startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(n,e){return n.eatSpace()?null:function(n,e){var t=n.next();return"$"===t?n.match(i)?"variableName.special":"variable":e.continueString?(n.backUp(1),a(n,e)):n.match(/(\s+)?\w+\(/)||n.match(/(\s+)?\w+\ \(/)?(n.backUp(1),"def"):"#"==t?(n.skipToEnd(),"comment"):"'"==t||'"'==t?(e.pending=t,a(n,e)):"("==t||")"==t?"bracket":t.match(/[0-9]/)?"number":(n.eatWhile(/[\w-]/),null)}(n,e)}}}}]);
//# sourceMappingURL=7934.01877eef.chunk.js.map