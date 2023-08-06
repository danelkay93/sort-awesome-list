"use strict";(self.webpackChunksort_awesome_list=self.webpackChunksort_awesome_list||[]).push([[9616],{9616:function(i,l,e){function t(i){var l=[],e="",t={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},a={};function n(i,l){for(var e,t=!1;null!=(e=i.next());){if("/"===e&&t){l.tokenize=null;break}t="*"===e}return"comment"}return"x86"===i?(e="#",a.al="variable",a.ah="variable",a.ax="variable",a.eax="variableName.special",a.rax="variableName.special",a.bl="variable",a.bh="variable",a.bx="variable",a.ebx="variableName.special",a.rbx="variableName.special",a.cl="variable",a.ch="variable",a.cx="variable",a.ecx="variableName.special",a.rcx="variableName.special",a.dl="variable",a.dh="variable",a.dx="variable",a.edx="variableName.special",a.rdx="variableName.special",a.si="variable",a.esi="variableName.special",a.rsi="variableName.special",a.di="variable",a.edi="variableName.special",a.rdi="variableName.special",a.sp="variable",a.esp="variableName.special",a.rsp="variableName.special",a.bp="variable",a.ebp="variableName.special",a.rbp="variableName.special",a.ip="variable",a.eip="variableName.special",a.rip="variableName.special",a.cs="keyword",a.ds="keyword",a.ss="keyword",a.es="keyword",a.fs="keyword",a.gs="keyword"):"arm"!==i&&"armv6"!==i||(e="@",t.syntax="builtin",a.r0="variable",a.r1="variable",a.r2="variable",a.r3="variable",a.r4="variable",a.r5="variable",a.r6="variable",a.r7="variable",a.r8="variable",a.r9="variable",a.r10="variable",a.r11="variable",a.r12="variable",a.sp="variableName.special",a.lr="variableName.special",a.pc="variableName.special",a.r13=a.sp,a.r14=a.lr,a.r15=a.pc,l.push((function(i,l){if("#"===i)return l.eatWhile(/\w/),"number"}))),{name:"gas",startState:function(){return{tokenize:null}},token:function(i,b){if(b.tokenize)return b.tokenize(i,b);if(i.eatSpace())return null;var r,u,s=i.next();if("/"===s&&i.eat("*"))return b.tokenize=n,n(i,b);if(s===e)return i.skipToEnd(),"comment";if('"'===s)return function(i,l){for(var e,t=!1;null!=(e=i.next());){if(e===l&&!t)return!1;t=!t&&"\\"===e}}(i,'"'),"string";if("."===s)return i.eatWhile(/\w/),u=i.current().toLowerCase(),(r=t[u])||null;if("="===s)return i.eatWhile(/\w/),"tag";if("{"===s)return"bracket";if("}"===s)return"bracket";if(/\d/.test(s))return"0"===s&&i.eat("x")?(i.eatWhile(/[0-9a-fA-F]/),"number"):(i.eatWhile(/\d/),"number");if(/\w/.test(s))return i.eatWhile(/\w/),i.eat(":")?"tag":(u=i.current().toLowerCase(),(r=a[u])||null);for(var c=0;c<l.length;c++)if(r=l[c](s,i,b))return r},languageData:{commentTokens:{line:e,block:{open:"/*",close:"*/"}}}}}e.r(l),e.d(l,{gas:function(){return a},gasArm:function(){return n}});var a=t("x86"),n=t("arm")}}]);
//# sourceMappingURL=9616.f859ee8e.chunk.js.map