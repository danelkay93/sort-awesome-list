"use strict";(self.webpackChunksort_awesome_list=self.webpackChunksort_awesome_list||[]).push([[5090],{5090:(O,T,E)=>{function e(O){for(var T={},E=O.split(" "),e=0;e<E.length;++e)T[E[e]]=!0;return T}E.r(T),E.d(T,{pig:()=>C});var I="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",N="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",A="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ",R=e(I),S=e(N),t=e(A),L=/[*+\-%<>=&?:\/!|]/;function r(O,T,E){return T.tokenize=E,E(O,T)}function n(O,T){for(var E,e=!1;E=O.next();){if("/"==E&&e){T.tokenize=U;break}e="*"==E}return"comment"}function U(O,T){var E,e=O.next();return'"'==e||"'"==e?r(O,T,(E=e,function(O,T){for(var e,I=!1,N=!1;null!=(e=O.next());){if(e==E&&!I){N=!0;break}I=!I&&"\\"==e}return!N&&I||(T.tokenize=U),"error"})):/[\[\]{}\(\),;\.]/.test(e)?null:/\d/.test(e)?(O.eatWhile(/[\w\.]/),"number"):"/"==e?O.eat("*")?r(O,T,n):(O.eatWhile(L),"operator"):"-"==e?O.eat("-")?(O.skipToEnd(),"comment"):(O.eatWhile(L),"operator"):L.test(e)?(O.eatWhile(L),"operator"):(O.eatWhile(/[\w\$_]/),S&&S.propertyIsEnumerable(O.current().toUpperCase())&&!O.eat(")")&&!O.eat(".")?"keyword":R&&R.propertyIsEnumerable(O.current().toUpperCase())?"builtin":t&&t.propertyIsEnumerable(O.current().toUpperCase())?"type":"variable")}const C={name:"pig",startState:function(){return{tokenize:U,startOfLine:!0}},token:function(O,T){return O.eatSpace()?null:T.tokenize(O,T)},languageData:{autocomplete:(I+A+N).split(" ")}}}}]);
//# sourceMappingURL=5090.e1282685.chunk.js.map