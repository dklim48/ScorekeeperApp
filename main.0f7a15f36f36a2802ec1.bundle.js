webpackJsonp([1,5],{"+3h6":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.players=[],this.fullRounds=[]}return l.prototype.setupGame=function(l){this.players=l.players;for(var n=0;n<2*l.rounds;n++)n<l.rounds?this.fullRounds.push(n+1):this.fullRounds.push(l.rounds-(n-l.rounds))},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},"/RbJ":function(l,n,u){"use strict";var t=u("3j3K"),e=u("BGEi");u.d(n,"a",function(){return a});var a=function(){function l(){this.gameSettings=new e.a,this.playerName="",this.gameSettingsSelected=new t.V}return l.prototype.addPlayer=function(){this.gameSettings.players.push(this.playerName),this.playerName="",this.gameSettings.rounds>this.maxRounds()&&(this.gameSettings.rounds=this.maxRounds())},l.prototype.removePlayer=function(l){this.gameSettings.players.splice(l,1)},l.prototype.changeRounds=function(l){this.gameSettings.rounds+l>=1&&this.gameSettings.rounds+l<=this.maxRounds()&&(this.gameSettings.rounds+=l)},l.prototype.maxRounds=function(){return Math.floor(51/this.gameSettings.players.length)},l.prototype.startGame=function(){this.gameSettingsSelected.emit(this.gameSettings)},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},"/fcW":function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="/fcW"},1:function(l,n,u){l.exports=u("x35b")},"1A80":function(l,n,u){"use strict";function t(l){return o._25(0,[(l()(),o._26(0,null,null,1,"app-header",[],null,null,null,i.a,i.b)),o._27(114688,null,0,s.a,[],null,null),(l()(),o._28(null,["\n"])),(l()(),o._26(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o._27(212992,null,0,r.y,[r.q,o.W,o.e,[8,null],o.T],null,null)],function(l,n){l(n,1,0),l(n,4,0)},null)}function e(l){return o._25(0,[(l()(),o._26(0,null,null,1,"app-root",[],null,null,null,t,_)),o._27(49152,null,0,c.a,[],null,null)],null,null)}var a=u("Ni5f"),o=u("3j3K"),i=u("r8N4"),s=u("3avZ"),r=u("5oXY"),c=u("YWx4");u.d(n,"a",function(){return p});var d=[a.a],_=o._24({encapsulation:0,styles:d,data:{}}),p=o._29("app-root",c.a,e,{},{},[])},"2UVl":function(l,n,u){"use strict";function t(l){return s._25(0,[(l()(),s._26(0,null,null,4,"li",[["class","list-group-item justify-content-between"]],null,null,null,null,null)),(l()(),s._28(null,["\n            ","\n            "])),(l()(),s._26(0,null,null,1,"span",[["class","badge badge-default badge-pill"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.removePlayer(l.context.index)&&t}return t},null,null)),(l()(),s._28(null,["Remove"])),(l()(),s._28(null,["\n          "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function e(l){return s._25(0,[(l()(),s._26(0,null,null,1,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),s._28(null,["\n            Maximum rounds: ","\n          "]))],null,function(l,n){l(n,1,0,n.component.maxRounds())})}function a(l){return s._25(0,[(l()(),s._26(0,null,null,90,"div",[["aria-hidden","true"],["aria-labelledby","exampleModalLabel"],["class","modal fade"],["id","gameInfoModal"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),s._28(null,["\n  "])),(l()(),s._26(0,null,null,87,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),s._28(null,["\n    "])),(l()(),s._26(0,null,null,84,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),s._28(null,["\n      "])),(l()(),s._26(0,null,null,10,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,1,"h5",[["class","modal-title"],["id","exampleModalLabel"]],null,null,null,null,null)),(l()(),s._28(null,["Game Settings"])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,4,"button",[["aria-label","Close"],["class","close"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),s._28(null,["×"])),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n      "])),(l()(),s._28(null,["\n      "])),(l()(),s._26(0,null,null,60,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,14,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,5,"input",[["class","form-control"],["placeholder","Add Player"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==s._30(l,23)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==s._30(l,23).onTouched()&&t}if("compositionstart"===n){t=!1!==s._30(l,23)._compositionStart()&&t}if("compositionend"===n){t=!1!==s._30(l,23)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.playerName=u)&&t}return t},null,null)),s._27(16384,null,0,c.d,[s.O,s.P,[2,c.e]],null,null),s._32(1024,null,c.f,function(l){return[l]},[c.d]),s._27(671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),s._32(2048,null,c.h,null,[c.g]),s._27(16384,null,0,c.i,[c.h],null,null),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._28(null,["\n            "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.addPlayer()&&t}return t},null,null)),(l()(),s._28(null,["Add"])),(l()(),s._28(null,["\n          "])),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,4,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._31(16777216,null,null,1,null,t)),s._27(802816,null,0,d.l,[s.W,s._7,s.l],{ngForOf:[0,"ngForOf"]},null),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),s._28(null,["\n            "])),(l()(),s._26(0,null,null,1,"label",[["for","rounds"]],null,null,null,null,null)),(l()(),s._28(null,["Rounds:"])),(l()(),s._28(null,["\n          "])),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,23,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),s._28(null,["\n            "])),(l()(),s._26(0,null,null,20,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),s._28(null,["\n              "])),(l()(),s._26(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._28(null,["\n                "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.changeRounds(-1)&&t}return t},null,null)),(l()(),s._28(null,["Down"])),(l()(),s._28(null,["\n              "])),(l()(),s._28(null,["\n              "])),(l()(),s._26(0,null,null,5,"input",[["class","form-control"],["disabled",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==s._30(l,61)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==s._30(l,61).onTouched()&&t}if("compositionstart"===n){t=!1!==s._30(l,61)._compositionStart()&&t}if("compositionend"===n){t=!1!==s._30(l,61)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.gameSettings.rounds=u)&&t}return t},null,null)),s._27(16384,null,0,c.d,[s.O,s.P,[2,c.e]],null,null),s._32(1024,null,c.f,function(l){return[l]},[c.d]),s._27(671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.f]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),s._32(2048,null,c.h,null,[c.g]),s._27(16384,null,0,c.i,[c.h],null,null),(l()(),s._28(null,["\n              "])),(l()(),s._26(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._28(null,["\n                "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.changeRounds(1)&&t}return t},null,null)),(l()(),s._28(null,["Up"])),(l()(),s._28(null,["\n              "])),(l()(),s._28(null,["\n            "])),(l()(),s._28(null,["\n          "])),(l()(),s._28(null,["\n          "])),(l()(),s._31(16777216,null,null,1,null,e)),s._27(16384,null,0,d.m,[s.W,s._7],{ngIf:[0,"ngIf"]},null),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n      "])),(l()(),s._28(null,["\n      "])),(l()(),s._26(0,null,null,7,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),s._28(null,["Cancel"])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-primary"],["data-dismiss","modal"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.startGame()&&t}return t},null,null)),(l()(),s._28(null,["Start"])),(l()(),s._28(null,["\n      "])),(l()(),s._28(null,["\n    "])),(l()(),s._28(null,["\n  "])),(l()(),s._28(null,["\n"]))],function(l,n){var u=n.component;l(n,25,0,u.playerName),l(n,39,0,u.gameSettings.players),l(n,63,0,"",u.gameSettings.rounds),l(n,76,0,u.gameSettings.players.length>0)},function(l,n){l(n,22,0,s._30(n,27).ngClassUntouched,s._30(n,27).ngClassTouched,s._30(n,27).ngClassPristine,s._30(n,27).ngClassDirty,s._30(n,27).ngClassValid,s._30(n,27).ngClassInvalid,s._30(n,27).ngClassPending),l(n,60,0,s._30(n,65).ngClassUntouched,s._30(n,65).ngClassTouched,s._30(n,65).ngClassPristine,s._30(n,65).ngClassDirty,s._30(n,65).ngClassValid,s._30(n,65).ngClassInvalid,s._30(n,65).ngClassPending)})}function o(l){return s._25(0,[(l()(),s._26(0,null,null,1,"app-upanddownmodal",[],null,null,null,a,p)),s._27(114688,null,0,r.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("Ec55"),s=u("3j3K"),r=u("/RbJ"),c=u("NVOs"),d=u("2Je8");u.d(n,"b",function(){return p}),n.a=a;var _=[i.a],p=s._24({encapsulation:0,styles:_,data:{}});s._29("app-upanddownmodal",r.a,o,{},{gameSettingsSelected:"gameSettingsSelected"},[])},"3avZ":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},"6YQ/":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},BGEi:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.players=[],this.rounds=null}return l}()},Ec55:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["@media (max-height:414px){.modalScroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:150px}}"]},Iksp:function(l,n,u){"use strict";var t=u("+3h6"),e=u("Q4XH");u.d(n,"a",function(){return a});var a=(e.a,t.a,function(){function l(){}return l}())},Ni5f:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},Q4XH:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},W4iK:function(l,n,u){"use strict";function t(l){return r._25(0,[(l()(),r._26(0,null,null,1,"div",[["class","col"]],null,null,null,null,null)),(l()(),r._28(null,["\n      ","\n    "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function e(l){return r._25(0,[(l()(),r._26(0,null,null,10,"div",[["class","col"]],null,null,null,null,null)),(l()(),r._28(null,["\n      "])),(l()(),r._26(0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._26(0,null,null,1,"span",[["class","badge badge-default"]],null,null,null,null,null)),(l()(),r._28(null,["Bid: ",""])),(l()(),r._26(0,null,null,1,"span",[["class","badge badge-success"]],null,null,null,null,null)),(l()(),r._28(null,["Made: ",""])),(l()(),r._28(null,["\n      "])),(l()(),r._26(0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._28(null,["Gain: "," Total: ",""])),(l()(),r._28(null,["\n    "]))],null,function(l,n){l(n,4,0,n.context.$implicit[n.context.index].bid[n.parent.context.index]),l(n,6,0,n.context.$implicit[n.context.index].made[n.parent.context.index]),l(n,9,0,n.context.$implicit[n.context.index].gain[n.parent.context.index],n.context.$implicit[n.context.index].total[n.parent.context.index])})}function a(l){return r._25(0,[(l()(),r._26(0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._28(null,["\n    "])),(l()(),r._31(16777216,null,null,1,null,e)),r._27(802816,null,0,c.l,[r.W,r._7,r.l],{ngForOf:[0,"ngForOf"]},null),(l()(),r._28(null,["\n  "]))],function(l,n){l(n,3,0,n.component.players)},null)}function o(l){return r._25(0,[(l()(),r._26(0,null,null,29,"div",[["class","container"]],null,null,null,null,null)),(l()(),r._28(null,["\n  "])),(l()(),r._26(0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._28(null,["\n    "])),(l()(),r._26(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r._28(null,["Up and Down"])),(l()(),r._28(null,["\n  "])),(l()(),r._28(null,["\n  "])),(l()(),r._26(0,null,null,11,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),r._28(null,["\n    "])),(l()(),r._28(null,["\n    "])),(l()(),r._26(0,null,null,1,"button",[["class","btn btn-primary newGame"],["data-target","#gameInfoModal"],["data-toggle","modal"],["type","button"]],null,null,null,null,null)),(l()(),r._28(null,["New Game"])),(l()(),r._28(null,["\n    "])),(l()(),r._26(0,null,null,1,"app-upanddownmodal",[],null,[[null,"gameSettingsSelected"]],function(l,n,u){var t=!0,e=l.component;if("gameSettingsSelected"===n){t=!1!==e.setupGame(u)&&t}return t},_.a,_.b)),r._27(114688,null,0,p.a,[],null,{gameSettingsSelected:"gameSettingsSelected"}),(l()(),r._28(null,["\n    "])),(l()(),r._26(0,null,null,1,"app-upanddownroundmodal",[],null,[[null,"gameSettingsSelected"]],function(l,n,u){var t=!0,e=l.component;if("gameSettingsSelected"===n){t=!1!==e.setupGame(u)&&t}return t},g.a,g.b)),r._27(114688,null,0,f.a,[],null,{gameSettingsSelected:"gameSettingsSelected"}),(l()(),r._28(null,["\n  "])),(l()(),r._28(null,["\n  "])),(l()(),r._26(0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._28(null,["\n    "])),(l()(),r._31(16777216,null,null,1,null,t)),r._27(802816,null,0,c.l,[r.W,r._7,r.l],{ngForOf:[0,"ngForOf"]},null),(l()(),r._28(null,["\n  "])),(l()(),r._28(null,["\n  "])),(l()(),r._31(16777216,null,null,1,null,a)),r._27(802816,null,0,c.l,[r.W,r._7,r.l],{ngForOf:[0,"ngForOf"]},null),(l()(),r._28(null,["\n"]))],function(l,n){var u=n.component;l(n,15,0),l(n,18,0),l(n,24,0,u.players),l(n,28,0,u.fullRounds)},null)}function i(l){return r._25(0,[(l()(),r._26(0,null,null,1,"app-upanddown",[],null,null,null,o,h)),r._27(114688,null,0,d.a,[],null,null)],function(l,n){l(n,1,0)},null)}var s=u("mwVJ"),r=u("3j3K"),c=u("2Je8"),d=u("+3h6"),_=u("2UVl"),p=u("/RbJ"),g=u("uLFq"),f=u("tfrA");u.d(n,"a",function(){return v});var m=[s.a],h=r._24({encapsulation:0,styles:m,data:{}}),v=r._29("app-upanddown",d.a,i,{},{},[])},YWx4:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="app works!"}return l}()},"i+fr":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},kZql:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},kke6:function(l,n,u){"use strict";var t=u("3j3K"),e=u("Iksp"),a=u("YWx4"),o=u("wZfO"),i=u("W4iK"),s=u("1A80"),r=u("2Je8"),c=u("Qbdm"),d=u("NVOs"),_=u("Fzro"),p=u("5oXY"),g=u("Q4XH"),f=u("+3h6");u.d(n,"a",function(){return m});var m=t.b(e.a,[a.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[o.a,i.a,s.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,r.a,r.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,c.b,c.c,[c.d]),t.d(6144,t.p,null,[c.b]),t.d(4608,c.e,c.f,[]),t.d(5120,c.g,function(l,n,u,t){return[new c.h(l),new c.i(n),new c.j(u,t)]},[c.d,c.d,c.d,c.e]),t.d(4608,c.k,c.k,[c.g,t.q]),t.d(135680,c.l,c.l,[c.d]),t.d(4608,c.m,c.m,[c.k,c.l]),t.d(6144,t.r,null,[c.m]),t.d(6144,c.n,null,[c.l]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,c.o,c.o,[c.d]),t.d(4608,c.p,c.p,[c.d]),t.d(4608,d.a,d.a,[]),t.d(4608,_.a,_.a,[]),t.d(4608,_.b,_.c,[]),t.d(5120,_.d,_.e,[]),t.d(4608,_.f,_.f,[_.a,_.b,_.d]),t.d(4608,_.g,_.h,[]),t.d(5120,_.i,_.j,[_.f,_.g]),t.d(5120,p.a,p.b,[p.c]),t.d(4608,p.d,p.d,[]),t.d(6144,p.e,null,[p.d]),t.d(135680,p.f,p.f,[p.c,t.t,t.u,t.v,p.e]),t.d(4608,p.g,p.g,[]),t.d(5120,p.h,p.i,[p.j]),t.d(5120,t.w,function(l){return[l]},[p.h]),t.d(512,r.c,r.c,[]),t.d(1024,t.x,c.q,[]),t.d(1024,t.y,function(){return[p.k()]},[]),t.d(512,p.j,p.j,[t.v]),t.d(1024,t.z,function(l,n,u){return[c.r(l,n),p.l(u)]},[[2,c.s],[2,t.y],p.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,c.t,c.t,[[3,c.t]]),t.d(512,d.b,d.b,[]),t.d(512,d.c,d.c,[]),t.d(512,_.k,_.k,[]),t.d(1024,p.m,p.n,[[3,p.c]]),t.d(512,p.o,p.p,[]),t.d(512,p.q,p.q,[]),t.d(256,p.r,{},[]),t.d(1024,r.d,p.s,[r.e,[2,r.f],p.r]),t.d(512,r.g,r.g,[r.d]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,p.t,function(){return[[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:g.a},{path:"upanddown",component:f.a}]]},[]),t.d(1024,p.c,p.u,[t.D,p.o,p.q,r.g,t.v,t.t,t.u,p.t,p.r,[2,p.v],[2,p.w]]),t.d(512,p.x,p.x,[[2,p.m],[2,p.c]]),t.d(512,e.a,e.a,[])])})},mwVJ:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["@media (max-width:576px){.newGame[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}}"]},r8N4:function(l,n,u){"use strict";function t(l){return o._25(0,[(l()(),o._26(0,null,null,25,"nav",[["class","navbar navbar-toggleable-md navbar-light bg-faded"]],null,null,null,null,null)),(l()(),o._28(null,["\n  "])),(l()(),o._26(0,null,null,3,"button",[["aria-controls","navbarNav"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler navbar-toggler-right"],["data-target","#navbarNav"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),o._28(null,["\n    "])),(l()(),o._26(0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),o._28(null,["\n  "])),(l()(),o._28(null,["\n  "])),(l()(),o._26(0,null,null,2,"a",[["class","navbar-brand"],["routerLink","/home"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._30(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),o._27(671744,null,0,i.z,[i.c,i.a,s.d],{routerLink:[0,"routerLink"]},null),(l()(),o._28(null,["Scorekeeper"])),(l()(),o._28(null,["\n  "])),(l()(),o._26(0,null,null,13,"div",[["class","collapse navbar-collapse"],["id","navbarNav"]],null,null,null,null,null)),(l()(),o._28(null,["\n    "])),(l()(),o._26(0,null,null,10,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(l()(),o._28(null,["\n      "])),(l()(),o._26(0,null,null,7,"li",[["class","nav-item active"],["data-target",".navbar-collapse.show"],["data-toggle","collapse"]],null,null,null,null,null)),(l()(),o._28(null,["\n        "])),(l()(),o._26(0,null,null,4,"a",[["class","nav-link"],["routerLink","/upanddown"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._30(l,18).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),o._27(671744,null,0,i.z,[i.c,i.a,s.d],{routerLink:[0,"routerLink"]},null),(l()(),o._28(null,["Up and Down "])),(l()(),o._26(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),o._28(null,["(current)"])),(l()(),o._28(null,["\n      "])),(l()(),o._28(null,["\n    "])),(l()(),o._28(null,["\n  "])),(l()(),o._28(null,["\n"]))],function(l,n){l(n,8,0,"/home"),l(n,18,0,"/upanddown")},function(l,n){l(n,7,0,o._30(n,8).target,o._30(n,8).href),l(n,17,0,o._30(n,18).target,o._30(n,18).href)})}function e(l){return o._25(0,[(l()(),o._26(0,null,null,1,"app-header",[],null,null,null,t,d)),o._27(114688,null,0,r.a,[],null,null)],function(l,n){l(n,1,0)},null)}var a=u("i+fr"),o=u("3j3K"),i=u("5oXY"),s=u("2Je8"),r=u("3avZ");u.d(n,"b",function(){return d}),n.a=t;var c=[a.a],d=o._24({encapsulation:0,styles:c,data:{}});o._29("app-header",r.a,e,{},{},[])},tfrA:function(l,n,u){"use strict";var t=u("3j3K"),e=u("BGEi");u.d(n,"a",function(){return a});var a=function(){function l(){this.gameSettings=new e.a,this.playerName="",this.gameSettingsSelected=new t.V}return l.prototype.addPlayer=function(){this.gameSettings.players.push(this.playerName),this.playerName="",this.gameSettings.rounds>this.maxRounds()&&(this.gameSettings.rounds=this.maxRounds())},l.prototype.removePlayer=function(l){this.gameSettings.players.splice(l,1)},l.prototype.changeRounds=function(l){this.gameSettings.rounds+l>=1&&this.gameSettings.rounds+l<=this.maxRounds()&&(this.gameSettings.rounds+=l)},l.prototype.maxRounds=function(){return Math.floor(51/this.gameSettings.players.length)},l.prototype.startGame=function(){this.gameSettingsSelected.emit(this.gameSettings)},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},uLFq:function(l,n,u){"use strict";function t(l){return s._25(0,[(l()(),s._26(0,null,null,4,"li",[["class","list-group-item justify-content-between"]],null,null,null,null,null)),(l()(),s._28(null,["\n            ","\n            "])),(l()(),s._26(0,null,null,1,"span",[["class","badge badge-default badge-pill"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.removePlayer(l.context.index)&&t}return t},null,null)),(l()(),s._28(null,["Remove"])),(l()(),s._28(null,["\n          "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function e(l){return s._25(0,[(l()(),s._26(0,null,null,1,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),s._28(null,["\n            Maximum rounds: ","\n          "]))],null,function(l,n){l(n,1,0,n.component.maxRounds())})}function a(l){return s._25(0,[(l()(),s._26(0,null,null,90,"div",[["aria-hidden","true"],["aria-labelledby","exampleModalLabel"],["class","modal fade"],["id","gameInfoModal"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),s._28(null,["\n  "])),(l()(),s._26(0,null,null,87,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),s._28(null,["\n    "])),(l()(),s._26(0,null,null,84,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),s._28(null,["\n      "])),(l()(),s._26(0,null,null,10,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,1,"h5",[["class","modal-title"],["id","exampleModalLabel"]],null,null,null,null,null)),(l()(),s._28(null,["Game Settings"])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,4,"button",[["aria-label","Close"],["class","close"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),s._28(null,["×"])),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n      "])),(l()(),s._28(null,["\n      "])),(l()(),s._26(0,null,null,60,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,14,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,5,"input",[["class","form-control"],["placeholder","Add Player"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==s._30(l,23)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==s._30(l,23).onTouched()&&t}if("compositionstart"===n){t=!1!==s._30(l,23)._compositionStart()&&t}if("compositionend"===n){t=!1!==s._30(l,23)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.playerName=u)&&t}return t},null,null)),s._27(16384,null,0,c.d,[s.O,s.P,[2,c.e]],null,null),s._32(1024,null,c.f,function(l){return[l]},[c.d]),s._27(671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),s._32(2048,null,c.h,null,[c.g]),s._27(16384,null,0,c.i,[c.h],null,null),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._28(null,["\n            "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.addPlayer()&&t}return t},null,null)),(l()(),s._28(null,["Add"])),(l()(),s._28(null,["\n          "])),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,4,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._31(16777216,null,null,1,null,t)),s._27(802816,null,0,d.l,[s.W,s._7,s.l],{ngForOf:[0,"ngForOf"]},null),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),s._28(null,["\n            "])),(l()(),s._26(0,null,null,1,"label",[["for","rounds"]],null,null,null,null,null)),(l()(),s._28(null,["Rounds:"])),(l()(),s._28(null,["\n          "])),(l()(),s._28(null,["\n          "])),(l()(),s._26(0,null,null,23,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),s._28(null,["\n            "])),(l()(),s._26(0,null,null,20,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),s._28(null,["\n              "])),(l()(),s._26(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._28(null,["\n                "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.changeRounds(-1)&&t}return t},null,null)),(l()(),s._28(null,["Down"])),(l()(),s._28(null,["\n              "])),(l()(),s._28(null,["\n              "])),(l()(),s._26(0,null,null,5,"input",[["class","form-control"],["disabled",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==s._30(l,61)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==s._30(l,61).onTouched()&&t}if("compositionstart"===n){t=!1!==s._30(l,61)._compositionStart()&&t}if("compositionend"===n){t=!1!==s._30(l,61)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.gameSettings.rounds=u)&&t}return t},null,null)),s._27(16384,null,0,c.d,[s.O,s.P,[2,c.e]],null,null),s._32(1024,null,c.f,function(l){return[l]},[c.d]),s._27(671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.f]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),s._32(2048,null,c.h,null,[c.g]),s._27(16384,null,0,c.i,[c.h],null,null),(l()(),s._28(null,["\n              "])),(l()(),s._26(0,null,null,4,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._28(null,["\n                "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.changeRounds(1)&&t}return t},null,null)),(l()(),s._28(null,["Up"])),(l()(),s._28(null,["\n              "])),(l()(),s._28(null,["\n            "])),(l()(),s._28(null,["\n          "])),(l()(),s._28(null,["\n          "])),(l()(),s._31(16777216,null,null,1,null,e)),s._27(16384,null,0,d.m,[s.W,s._7],{ngIf:[0,"ngIf"]},null),(l()(),s._28(null,["\n        "])),(l()(),s._28(null,["\n      "])),(l()(),s._28(null,["\n      "])),(l()(),s._26(0,null,null,7,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-secondary"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),s._28(null,["Cancel"])),(l()(),s._28(null,["\n        "])),(l()(),s._26(0,null,null,1,"button",[["class","btn btn-primary"],["data-dismiss","modal"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.startGame()&&t}return t},null,null)),(l()(),s._28(null,["Start"])),(l()(),s._28(null,["\n      "])),(l()(),s._28(null,["\n    "])),(l()(),s._28(null,["\n  "])),(l()(),s._28(null,["\n"]))],function(l,n){var u=n.component;l(n,25,0,u.playerName),l(n,39,0,u.gameSettings.players),l(n,63,0,"",u.gameSettings.rounds),l(n,76,0,u.gameSettings.players.length>0)},function(l,n){l(n,22,0,s._30(n,27).ngClassUntouched,s._30(n,27).ngClassTouched,s._30(n,27).ngClassPristine,s._30(n,27).ngClassDirty,s._30(n,27).ngClassValid,s._30(n,27).ngClassInvalid,s._30(n,27).ngClassPending),l(n,60,0,s._30(n,65).ngClassUntouched,s._30(n,65).ngClassTouched,s._30(n,65).ngClassPristine,s._30(n,65).ngClassDirty,s._30(n,65).ngClassValid,s._30(n,65).ngClassInvalid,s._30(n,65).ngClassPending)})}function o(l){return s._25(0,[(l()(),s._26(0,null,null,1,"app-upanddownroundmodal",[],null,null,null,a,p)),s._27(114688,null,0,r.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("wzME"),s=u("3j3K"),r=u("tfrA"),c=u("NVOs"),d=u("2Je8");u.d(n,"b",function(){return p}),n.a=a;var _=[i.a],p=s._24({encapsulation:0,styles:_,data:{}});s._29("app-upanddownroundmodal",r.a,o,{},{gameSettingsSelected:"gameSettingsSelected"},[])},wZfO:function(l,n,u){"use strict";function t(l){return o._25(0,[(l()(),o._26(0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),o._28(null,["\n  "])),(l()(),o._26(0,null,null,4,"div",[["class","row text-center"]],null,null,null,null,null)),(l()(),o._28(null,["\n    "])),(l()(),o._26(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o._28(null,["Because now a days we're more likely to have phones the pencil and paper. Also, because we all have that friend that keeps score.... and always seems to win."])),(l()(),o._28(null,["\n  "])),(l()(),o._28(null,["\n"]))],null,null)}function e(l){return o._25(0,[(l()(),o._26(0,null,null,1,"app-home",[],null,null,null,t,r)),o._27(114688,null,0,i.a,[],null,null)],function(l,n){l(n,1,0)},null)}var a=u("6YQ/"),o=u("3j3K"),i=u("Q4XH");u.d(n,"a",function(){return c});var s=[a.a],r=o._24({encapsulation:0,styles:s,data:{}}),c=o._29("app-home",i.a,e,{},{},[])},wzME:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["@media (max-height:414px){.modalScroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:150px}}"]},x35b:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("3j3K"),e=u("kZql"),a=u("Qbdm"),o=u("kke6");e.a.production&&u.i(t.a)(),u.i(a.a)().bootstrapModuleFactory(o.a)}},[1]);