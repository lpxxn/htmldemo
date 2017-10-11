webpackJsonpA([2], {
    "+h1B": function (n, l, t) {
        "use strict";
        var u = t("/oeL"), o = t("aR8+"), e = t("wQAS"), r = t("Gcjq"), i = t("ZErz"), a = t("q4dy"), c = t("qbdv"),
            s = t("fc+i"), d = t("bm2B"), f = t("CPp0"), p = t("BkNc"), g = t("zNX7"), _ = t("vgTp"), h = t("K181"),
            m = t("ECCM");
        t.d(l, "a", function () {
            return v
        });
        var v = u.b(o.a, [e.a], function (n) {
            return u.c([u.d(512, u.e, u.f, [[8, [r.a, i.a, a.a]], [3, u.e], u.g]), u.d(5120, u.h, u.i, [[3, u.h]]), u.d(4608, c.a, c.b, [u.h]), u.d(5120, u.j, u.k, []), u.d(5120, u.l, u.m, []), u.d(5120, u.n, u.o, []), u.d(4608, s.b, s.c, [s.d]), u.d(6144, u.p, null, [s.b]), u.d(4608, s.e, s.f, []), u.d(5120, s.g, function (n, l, t, u) {
                return [new s.h(n), new s.i(l), new s.j(t, u)]
            }, [s.d, s.d, s.d, s.e]), u.d(4608, s.k, s.k, [s.g, u.q]), u.d(135680, s.l, s.l, [s.d]), u.d(4608, s.m, s.m, [s.k, s.l]), u.d(6144, u.r, null, [s.m]), u.d(6144, s.n, null, [s.l]), u.d(4608, u.s, u.s, [u.q]), u.d(4608, s.o, s.o, [s.d]), u.d(4608, s.p, s.p, [s.d]), u.d(4608, d.a, d.a, []), u.d(4608, f.a, f.a, []), u.d(4608, f.b, f.c, []), u.d(5120, f.d, f.e, []), u.d(4608, f.f, f.f, [f.a, f.b, f.d]), u.d(4608, f.g, f.h, []), u.d(5120, f.i, f.j, [f.f, f.g]), u.d(5120, p.a, p.b, [p.c]), u.d(4608, p.d, p.d, []), u.d(6144, p.e, null, [p.d]), u.d(135680, p.f, p.f, [p.c, u.t, u.u, u.v, p.e]), u.d(4608, p.g, p.g, []), u.d(5120, p.h, p.i, [p.j]), u.d(5120, u.w, function (n) {
                return [n]
            }, [p.h]), u.d(4608, g.a, g.a, [f.i]), u.d(512, c.c, c.c, []), u.d(512, u.x, _.a, [u.v]), u.d(1024, u.y, function () {
                return [p.k()]
            }, []), u.d(512, p.j, p.j, [u.v]), u.d(1024, u.z, function (n, l, t) {
                return [s.q(n, l), p.l(t)]
            }, [[2, s.r], [2, u.y], p.j]), u.d(512, u.A, u.A, [[2, u.z]]), u.d(131584, u.B, u.B, [u.q, u.C, u.v, u.x, u.e, u.A]), u.d(2048, u.D, null, [u.B]), u.d(512, u.E, u.E, [u.D]), u.d(512, s.s, s.s, [[3, s.s]]), u.d(512, d.b, d.b, []), u.d(512, d.c, d.c, []), u.d(1024, p.m, p.n, [[3, p.c]]), u.d(512, p.o, p.p, []), u.d(512, p.q, p.q, []), u.d(256, p.r, {}, []), u.d(1024, c.d, p.s, [c.e, [2, c.f], p.r]), u.d(512, c.g, c.g, [c.d]), u.d(512, u.u, u.u, []), u.d(512, u.t, u.F, [u.u, [2, u.G]]), u.d(1024, p.t, function () {
                return [[{path: "", component: h.a}, {path: "login", component: h.a}, {
                    path: "home",
                    component: m.a
                }, {path: "**", component: h.a}]]
            }, []), u.d(1024, p.c, p.u, [u.D, p.o, p.q, c.g, u.v, u.t, u.u, p.t, p.r, [2, p.v], [2, p.w]]), u.d(512, p.x, p.x, [[2, p.m], [2, p.c]]), u.d(512, f.k, f.k, []), u.d(512, o.a, o.a, [])])
        })
    }, 1: function (n, l, t) {
        n.exports = t("cDNt")
    }, ECCM: function (n, l, t) {
        "use strict";
        var u = t("zNX7");
        t.d(l, "a", function () {
            return o
        });
        var o = function () {
            function n(n) {
                this.checkLogin = n, this.isLogin = !1
            }

            return n.prototype.ngOnInit = function () {
                var n = this;
                this.checkLogin.checkLogin().then(function (l) {
                    n.isLogin = !0, console.log(l, l.data.state)
                })
            }, n.ctorParameters = function () {
                return [{type: u.a}]
            }, n
        }()
    }, Gcjq: function (n, l, t) {
        "use strict";
        function u(n) {
            return r._25(0, [(n()(), r._26(0, null, null, 32, "div", [["class", "wrapper"]], null, null, null, null, null)), (n()(), r._27(null, ["\n  "])), (n()(), r._26(0, null, null, 29, "form", [["class", "form-signin"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (n, l, t) {
                var u = !0, o = n.component;
                if ("submit" === l) {
                    u = !1 !== r._31(n, 4).onSubmit(t) && u
                }
                if ("reset" === l) {
                    u = !1 !== r._31(n, 4).onReset() && u
                }
                if ("submit" === l) {
                    u = !1 !== o.onLogin(t, r._31(n, 14).value, r._31(n, 19).value) && u
                }
                return u
            }, null, null)), r._28(16384, null, 0, a.d, [], null, null), r._28(16384, null, 0, a.e, [[8, null], [8, null]], null, null), r._32(2048, null, a.f, null, [a.e]), r._28(16384, null, 0, a.g, [a.f], null, null), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, null, null, 1, "h2", [["class", "form-signin-heading"]], null, null, null, null, null)), (n()(), r._27(null, ["\n      Please Sign In\n    "])), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, null, null, 1, "label", [["class", "sr-only"], ["for", "inputEmailOrPhone"]], null, null, null, null, null)), (n()(), r._27(null, ["Email address"])), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, [["inputEmailOrPhone", 1]], null, 0, "input", [["autofocus", ""], ["class", "form-control"], ["id", "inputEmailOrPhone"], ["placeholder", "Email Or Phone"], ["required", ""], ["type", "text"]], null, null, null, null, null)), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, null, null, 1, "label", [["class", "sr-only"], ["for", "inputPwd"]], null, null, null, null, null)), (n()(), r._27(null, ["Password"])), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, [["inputPwd", 1]], null, 0, "input", [["class", "form-control"], ["id", "inputPwd"], ["placeholder", "Password"], ["required", ""], ["type", "password"]], null, null, null, null, null)), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, null, null, 6, "div", [["class", "checkbox"]], null, null, null, null, null)), (n()(), r._27(null, ["\n      "])), (n()(), r._26(0, null, null, 3, "label", [], null, null, null, null, null)), (n()(), r._27(null, ["\n        "])), (n()(), r._26(0, null, null, 0, "input", [["type", "checkbox"], ["value", "remeber-me"]], null, null, null, null, null)), (n()(), r._27(null, ["\n        Rember me\n      "])), (n()(), r._27(null, ["\n    "])), (n()(), r._27(null, ["\n    "])), (n()(), r._26(0, null, null, 1, "button", [["class", "btn btn-lg btn-primary btn-block"], ["type", "submit"]], null, null, null, null, null)), (n()(), r._27(null, ["Sign In"])), (n()(), r._27(null, ["\n  "])), (n()(), r._27(null, ["\n"])), (n()(), r._27(null, ["\n"]))], null, function (n, l) {
                n(l, 2, 0, r._31(l, 6).ngClassUntouched, r._31(l, 6).ngClassTouched, r._31(l, 6).ngClassPristine, r._31(l, 6).ngClassDirty, r._31(l, 6).ngClassValid, r._31(l, 6).ngClassInvalid, r._31(l, 6).ngClassPending)
            })
        }

        function o(n) {
            return r._25(0, [(n()(), r._26(0, null, null, 1, "crm-login", [], null, null, null, u, f)), r._28(49152, null, 0, i.a, [c.c, s.i], null, null)], null, null)
        }

        var e = t("hXE1"), r = t("/oeL"), i = t("K181"), a = t("bm2B"), c = t("BkNc"), s = t("CPp0");
        t.d(l, "a", function () {
            return p
        });
        var d = [e.a], f = r._24({encapsulation: 0, styles: d, data: {}}), p = r._29("crm-login", i.a, o, {}, {}, [])
    }, JdMA: function (n, l, t) {
        "use strict";
        t.d(l, "a", function () {
            return u
        });
        var u = [""]
    }, K181: function (n, l, t) {
        "use strict";
        var u = t("BkNc"), o = t("CPp0");
        t.d(l, "a", function () {
            return e
        });
        var e = function () {
            function n(n, l) {
                this.router = n, this.http = l
            }

            return n.prototype.onLogin = function (n, l, t) {
                var u = this;
                console.log("login"), n.preventDefault();
                var e = "Code=" + l + "&Pwd=" + t, r = new o.l;
                r.append("Accept", "application/json"), r.append("Content-Type", "application/x-www-form-urlencoded"), this.http.post("https://localhost:44379/Login", e, {
                    headers: r,
                    withCredentials: !0
                }).subscribe(function (n) {
                    u.router.navigate(["home"])
                }, function (n) {
                    alert(n.text()), console.log(n.text())
                })
            }, n.prototype.signup = function (n) {
                n.preventDefault(), this.router.navigate(["signup"])
            }, n.ctorParameters = function () {
                return [{type: u.c}, {type: o.i}]
            }, n
        }()
    }, PxAq: function (n, l, t) {
        "use strict";
        t.d(l, "a", function () {
            return u
        });
        var u = function () {
            function n() {
                if (this.isLogined = !1, this.baseUrl = "https://localhost:44379/", n.__instance)throw new Error("Error: Instantiation failed: Usee CrmConfig.getInstance() instead of new. ")
            }

            return n.getInstance = function () {
                return this.__instance
            }, n
        }();
        u.__instance = new u
    }, ZErz: function (n, l, t) {
        "use strict";
        function u(n) {
            return i._25(0, [(n()(), i._26(0, null, null, 4, "div", [], null, null, null, null, null)), (n()(), i._27(null, ["\n  "])), (n()(), i._26(0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), i._27(null, ["\n    home works!\n  "])), (n()(), i._27(null, ["\n"]))], null, null)
        }

        function o(n) {
            return i._25(0, [(n()(), i._30(16777216, null, null, 1, null, u)), i._28(16384, null, 0, a.l, [i._6, i._7], {ngIf: [0, "ngIf"]}, null), (n()(), i._27(null, ["\n\n"]))], function (n, l) {
                n(l, 1, 0, l.component.isLogin)
            }, null)
        }

        function e(n) {
            return i._25(0, [(n()(), i._26(0, null, null, 1, "app-home", [], null, null, null, o, f)), i._28(114688, null, 0, c.a, [s.a], null, null)], function (n, l) {
                n(l, 1, 0)
            }, null)
        }

        var r = t("JdMA"), i = t("/oeL"), a = t("qbdv"), c = t("ECCM"), s = t("zNX7");
        t.d(l, "a", function () {
            return p
        });
        var d = [r.a], f = i._24({encapsulation: 0, styles: d, data: {}}), p = i._29("app-home", c.a, e, {}, {}, [])
    }, "aR8+": function (n, l, t) {
        "use strict";
        var u = t("K181"), o = t("BkNc"), e = t("ECCM");
        t.d(l, "a", function () {
            return i
        });
        var r = [{path: "", component: u.a}, {path: "login", component: u.a}, {path: "home", component: e.a}, {
            path: "**",
            component: u.a
        }], i = (o.x.forRoot(r), function () {
            function n() {
            }

            return n
        }())
    }, cDNt: function (n, l, t) {
        "use strict";
        Object.defineProperty(l, "__esModule", {value: !0});
        var u = t("/oeL"), o = t("p5Ee"), e = t("fc+i"), r = t("+h1B");
        o.a.production && t.i(u.a)(), t.i(e.a)().bootstrapModuleFactory(r.a)
    }, hXE1: function (n, l, t) {
        "use strict";
        t.d(l, "a", function () {
            return u
        });
        var u = [".wrapper[_ngcontent-%COMP%]{margin-top:80px;margin-bottom:80px}.form-signin[_ngcontent-%COMP%]{max-width:330px;padding:15px;margin:0 auto}.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%]{margin-bottom:10px}.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{font-weight:400}.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{position:relative;height:auto;box-sizing:border-box;padding:10px;font-size:16px}.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{z-index:2}.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}"]
    }, p5Ee: function (n, l, t) {
        "use strict";
        t.d(l, "a", function () {
            return u
        });
        var u = {production: !0}
    }, q4dy: function (n, l, t) {
        "use strict";
        function u(n) {
            return e._25(0, [(n()(), e._26(0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (n()(), e._27(null, ["\n  "])), (n()(), e._26(16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), e._28(212992, null, 0, r.y, [r.q, e._6, e.e, [8, null], e._14], null, null), (n()(), e._27(null, ["\n"])), (n()(), e._27(null, ["\n\n"]))], function (n, l) {
                n(l, 3, 0)
            }, null)
        }

        function o(n) {
            return e._25(0, [(n()(), e._26(0, null, null, 1, "app-root", [], null, null, null, u, c)), e._28(49152, null, 0, i.a, [], null, null)], null, null)
        }

        var e = t("/oeL"), r = t("BkNc"), i = t("wQAS");
        t.d(l, "a", function () {
            return s
        });
        var a = [], c = e._24({encapsulation: 2, styles: a, data: {}}), s = e._29("app-root", i.a, o, {}, {}, [])
    }, qtrl: function (n, l) {
        function t(n) {
            throw new Error("Cannot find module '" + n + "'.")
        }

        t.keys = function () {
            return []
        }, t.resolve = t, n.exports = t, t.id = "qtrl"
    }, vgTp: function (n, l, t) {
        "use strict";
        var u = t("/oeL"), o = t("BkNc");
        t.d(l, "a", function () {
            return e
        });
        var e = function () {
            function n(n) {
                var l = this;
                this.injector = n, setTimeout(function () {
                    return l.router = l.injector.get(o.c)
                })
            }

            return n.prototype.handleError = function (n) {
                if (console.log("global error", n), n.rejection && n.rejection._body) {
                    "1004" === JSON.parse(n.rejection._body).error.errorCode && (console.log("please LogIn"), this.router.navigate([""]))
                }
            }, n.ctorParameters = function () {
                return [{type: u.v}]
            }, n
        }()
    }, wQAS: function (n, l, t) {
        "use strict";
        t.d(l, "a", function () {
            return u
        });
        var u = function () {
            function n() {
                this.title = "AgmCrm"
            }

            return n.ctorParameters = function () {
                return []
            }, n
        }()
    }, zNX7: function (n, l, t) {
        "use strict";
        var u = t("CPp0"), o = t("5v8a"), e = (t.n(o), t("PxAq")), r = t("xpf9"), i = (t.n(r), t("82j9"));
        t.n(i);
        t.d(l, "a", function () {
            return a
        });
        var a = function () {
            function n(n) {
                this.http = n, this.url = "CheckLoginStatus"
            }

            return n.prototype.checkLogin = function () {
                var n = e.a.getInstance().baseUrl, l = n + this.url;
                return this.http.get(l, {withCredentials: !0}).map(function (n) {
                    return n.json()
                }).toPromise().then(function (n) {
                    return n || {}
                }).catch(this.handleErrorPromise)
            }, n.prototype.handleErrorPromise = function (n) {
                return console.error(n.message || n), Promise.reject(n)
            }, n.ctorParameters = function () {
                return [{type: u.i}]
            }, n
        }()
    }
}, [1]);