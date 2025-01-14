var _____WB$wombat$assign$function_____ = function(name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } } {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
        var t = t || {};
        this.Int32Array || (this.Int32Array = Array, this.Float32Array = Array), t.Mat3 = function(t) { this.elements = t ? t : [0, 0, 0, 0, 0, 0, 0, 0, 0] }, t.Mat3.prototype.identity = function() { this.elements[0] = 1, this.elements[1] = 0, this.elements[2] = 0, this.elements[3] = 0, this.elements[4] = 1, this.elements[5] = 0, this.elements[6] = 0, this.elements[7] = 0, this.elements[8] = 1 }, t.Mat3.prototype.setZero = function() { var t = this.elements;
            t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 0 }, t.Mat3.prototype.setTrace = function(t) { var e = this.elements;
            e[0] = t.x, e[4] = t.y, e[8] = t.z }, t.Mat3.prototype.vmult = function(e, i) { i = i || new t.Vec3; var n = this.elements,
                o = e.x,
                a = e.y,
                s = e.z; return i.x = n[0] * o + n[1] * a + n[2] * s, i.y = n[3] * o + n[4] * a + n[5] * s, i.z = n[6] * o + n[7] * a + n[8] * s, i }, t.Mat3.prototype.smult = function(t) { for (var e = 0; this.elements.length > e; e++) this.elements[e] *= t }, t.Mat3.prototype.mmult = function(e) { for (var i = new t.Mat3, n = 0; 3 > n; n++)
                for (var o = 0; 3 > o; o++) { for (var a = 0, s = 0; 3 > s; s++) a += e.elements[n + 3 * s] * this.elements[s + 3 * o];
                    i.elements[n + 3 * o] = a }
            return i }, t.Mat3.prototype.solve = function(e, i) { i = i || new t.Vec3; for (var n = 3, o = 4, a = [], s = 0; n * o > s; s++) a.push(0); var s, r; for (s = 0; 3 > s; s++)
                for (r = 0; 3 > r; r++) a[s + o * r] = this.elements[s + 3 * r];
            a[3] = e.x, a[7] = e.y, a[11] = e.z; var h, c, l = 3,
                u = l,
                p = 4;
            do { if (s = u - l, 0 === a[s + o * s])
                    for (r = s + 1; u > r; r++)
                        if (0 !== a[s + o * r]) { h = p;
                            do c = p - h, a[c + o * s] += a[c + o * r]; while (--h); break }
                if (0 !== a[s + o * s])
                    for (r = s + 1; u > r; r++) { var d = a[s + o * r] / a[s + o * s];
                        h = p;
                        do c = p - h, a[c + o * r] = s >= c ? 0 : a[c + o * r] - a[c + o * s] * d; while (--h) } } while (--l); if (i.z = a[2 * o + 3] / a[2 * o + 2], i.y = (a[1 * o + 3] - a[1 * o + 2] * i.z) / a[1 * o + 1], i.x = (a[0 * o + 3] - a[0 * o + 2] * i.z - a[0 * o + 1] * i.y) / a[0 * o + 0], isNaN(i.x) || isNaN(i.y) || isNaN(i.z) || 1 / 0 === i.x || 1 / 0 === i.y || 1 / 0 === i.z) throw "Could not solve equation! Got x=[" + ("" + i) + "], b=[" + ("" + e) + "], A=[" + ("" + this) + "]"; return i }, t.Mat3.prototype.e = function(t, e, i) { return void 0 === i ? this.elements[e + 3 * t] : (this.elements[e + 3 * t] = i, void 0) }, t.Mat3.prototype.copy = function(e) { e = e || new t.Mat3; for (var i = 0; this.elements.length > i; i++) e.elements[i] = this.elements[i]; return e }, t.Mat3.prototype.toString = function() { for (var t = "", e = ",", i = 0; 9 > i; i++) t += this.elements[i] + e; return t }, t.Mat3.prototype.reverse = function(e) { e = e || new t.Mat3; for (var i = 3, n = 6, o = [], a = 0; i * n > a; a++) o.push(0); var a, s; for (a = 0; 3 > a; a++)
                for (s = 0; 3 > s; s++) o[a + n * s] = this.elements[a + 3 * s];
            o[3] = 1, o[9] = 0, o[15] = 0, o[4] = 0, o[10] = 1, o[16] = 0, o[5] = 0, o[11] = 0, o[17] = 1; var r, h, c = 3,
                l = c,
                u = n;
            do { if (a = l - c, 0 === o[a + n * a])
                    for (s = a + 1; l > s; s++)
                        if (0 !== o[a + n * s]) { r = u;
                            do h = u - r, o[h + n * a] += o[h + n * s]; while (--r); break }
                if (0 !== o[a + n * a])
                    for (s = a + 1; l > s; s++) { var p = o[a + n * s] / o[a + n * a];
                        r = u;
                        do h = u - r, o[h + n * s] = a >= h ? 0 : o[h + n * s] - o[h + n * a] * p; while (--r) } } while (--c);
            a = 2;
            do { s = a - 1;
                do { var p = o[a + n * s] / o[a + n * a];
                    r = n;
                    do h = n - r, o[h + n * s] = o[h + n * s] - o[h + n * a] * p; while (--r) } while (s--) } while (--a);
            a = 2;
            do { var p = 1 / o[a + n * a];
                r = n;
                do h = n - r, o[h + n * a] = o[h + n * a] * p; while (--r) } while (a--);
            a = 2;
            do { s = 2;
                do { if (h = o[i + s + n * a], isNaN(h) || 1 / 0 === h) throw "Could not reverse! A=[" + ("" + this) + "]";
                    e.e(a, s, h) } while (s--) } while (a--); return e }, t.Vec3 = function(t, e, i) { this.x = t || 0, this.y = e || 0, this.z = i || 0 }, t.Vec3.prototype.cross = function(e, i) { var n = e.x,
                o = e.y,
                a = e.z,
                s = this.x,
                r = this.y,
                h = this.z; return i = i || new t.Vec3, i.x = r * a - h * o, i.y = h * n - s * a, i.z = s * o - r * n, i }, t.Vec3.prototype.set = function(t, e, i) { return this.x = t, this.y = e, this.z = i, this }, t.Vec3.prototype.vadd = function(e, i) { return i ? (i.x = e.x + this.x, i.y = e.y + this.y, i.z = e.z + this.z, void 0) : new t.Vec3(this.x + e.x, this.y + e.y, this.z + e.z) }, t.Vec3.prototype.vsub = function(e, i) { return i ? (i.x = this.x - e.x, i.y = this.y - e.y, i.z = this.z - e.z, void 0) : new t.Vec3(this.x - e.x, this.y - e.y, this.z - e.z) }, t.Vec3.prototype.crossmat = function() { return new t.Mat3([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]) }, t.Vec3.prototype.normalize = function() { var t = this.x,
                e = this.y,
                i = this.z,
                n = Math.sqrt(t * t + e * e + i * i); if (n > 0) { var o = 1 / n;
                this.x *= o, this.y *= o, this.z *= o } else this.x = 0, this.y = 0, this.z = 0; return n }, t.Vec3.prototype.unit = function(e) { e = e || new t.Vec3; var i = this.x,
                n = this.y,
                o = this.z,
                a = Math.sqrt(i * i + n * n + o * o); return a > 0 ? (a = 1 / a, e.x = i * a, e.y = n * a, e.z = o * a) : (e.x = 1, e.y = 0, e.z = 0), e }, t.Vec3.prototype.norm = function() { var t = this.x,
                e = this.y,
                i = this.z; return Math.sqrt(t * t + e * e + i * i) }, t.Vec3.prototype.norm2 = function() { return this.dot(this) }, t.Vec3.prototype.distanceTo = function(t) { var e = this.x,
                i = this.y,
                n = this.z,
                o = t.x,
                a = t.y,
                s = t.z; return Math.sqrt((o - e) * (o - e) + (a - i) * (a - i) + (s - n) * (s - n)) }, t.Vec3.prototype.mult = function(e, i) { i = i || new t.Vec3; var n = this.x,
                o = this.y,
                a = this.z; return i.x = e * n, i.y = e * o, i.z = e * a, i }, t.Vec3.prototype.dot = function(t) { return this.x * t.x + this.y * t.y + this.z * t.z }, t.Vec3.prototype.isZero = function() { return 0 === this.x && 0 === this.y && 0 === this.z }, t.Vec3.prototype.negate = function(e) { return e = e || new t.Vec3, e.x = -this.x, e.y = -this.y, e.z = -this.z, e };
        var e = new t.Vec3,
            i = new t.Vec3;
        t.Vec3.prototype.tangents = function(t, n) { var o = this.norm(); if (o > 0) { var a = e,
                    s = 1 / o;
                a.set(this.x * s, this.y * s, this.z * s); var r = i;
                .9 > Math.abs(a.x) ? (r.set(1, 0, 0), a.cross(r, t)) : (r.set(0, 1, 0), a.cross(r, t)), a.cross(t, n) } else t.set(1, 0, 0).normalize(), n.set(0, 1, 0).normalize() }, t.Vec3.prototype.toString = function() { return this.x + "," + this.y + "," + this.z }, t.Vec3.prototype.copy = function(e) { return e = e || new t.Vec3, e.x = this.x, e.y = this.y, e.z = this.z, e }, t.Vec3.prototype.lerp = function(t, e, i) { var n = this.x,
                o = this.y,
                a = this.z;
            i.x = n + (t.x - n) * e, i.y = o + (t.y - o) * e, i.z = a + (t.z - a) * e }, t.Vec3.prototype.almostEquals = function(t, e) { return void 0 === e && (e = 1e-6), Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e ? !1 : !0 }, t.Vec3.prototype.almostZero = function(t) { return void 0 === t && (t = 1e-6), Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t ? !1 : !0 }, t.Quaternion = function(t, e, i, n) { this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== i ? i : 0, this.w = void 0 !== n ? n : 1 }, t.Quaternion.prototype.set = function(t, e, i, n) { this.x = t, this.y = e, this.z = i, this.w = n }, t.Quaternion.prototype.toString = function() { return this.x + "," + this.y + "," + this.z + "," + this.w }, t.Quaternion.prototype.setFromAxisAngle = function(t, e) { var i = Math.sin(.5 * e);
            this.x = t.x * i, this.y = t.y * i, this.z = t.z * i, this.w = Math.cos(.5 * e) }, t.Quaternion.prototype.toAxisAngle = function(e) { e = e || new t.Vec3, this.normalize(); var i = 2 * Math.acos(this.w),
                n = Math.sqrt(1 - this.w * this.w); return .001 > n ? (e.x = this.x, e.y = this.y, e.z = this.z) : (e.x = this.x / n, e.y = this.y / n, e.z = this.z / n), [e, i] }, t.Quaternion.prototype.setFromVectors = function(t, e) { var i = t.cross(e);
            this.x = i.x, this.y = i.y, this.z = i.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e), this.normalize() };
        var n = new t.Vec3,
            o = new t.Vec3,
            a = new t.Vec3;
        t.Quaternion.prototype.mult = function(e, i) { i = i || new t.Quaternion; var s = this.w,
                r = n,
                h = o,
                c = a; return r.set(this.x, this.y, this.z), h.set(e.x, e.y, e.z), i.w = s * e.w - r.dot(h), r.cross(h, c), i.x = s * h.x + e.w * r.x + c.x, i.y = s * h.y + e.w * r.y + c.y, i.z = s * h.z + e.w * r.z + c.z, i }, t.Quaternion.prototype.inverse = function(e) { var i = this.x,
                n = this.y,
                o = this.z,
                a = this.w;
            e = e || new t.Quaternion, this.conjugate(e); var s = 1 / (i * i + n * n + o * o + a * a); return e.x *= s, e.y *= s, e.z *= s, e.w *= s, e }, t.Quaternion.prototype.conjugate = function(e) { return e = e || new t.Quaternion, e.x = -this.x, e.y = -this.y, e.z = -this.z, e.w = this.w, e }, t.Quaternion.prototype.normalize = function() { var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
            0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this.w *= t) }, t.Quaternion.prototype.normalizeFast = function() { var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
            0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, this.y *= t, this.z *= t, this.w *= t) }, t.Quaternion.prototype.vmult = function(e, i) { if (i = i || new t.Vec3, 0 === this.w) i.x = e.x, i.y = e.y, i.z = e.z;
            else { var n = e.x,
                    o = e.y,
                    a = e.z,
                    s = this.x,
                    r = this.y,
                    h = this.z,
                    c = this.w,
                    l = c * n + r * a - h * o,
                    u = c * o + h * n - s * a,
                    p = c * a + s * o - r * n,
                    d = -s * n - r * o - h * a;
                i.x = l * c + d * -s + u * -h - p * -r, i.y = u * c + d * -r + p * -s - l * -h, i.z = p * c + d * -h + l * -r - u * -s } return i }, t.Quaternion.prototype.copy = function(t) { t.x = this.x, t.y = this.y, t.z = this.z, t.w = this.w }, t.Quaternion.prototype.toEuler = function(t, e) { e = e || "YZX"; var i, n, o, a = this.x,
                s = this.y,
                r = this.z,
                h = this.w; switch (e) {
                case "YZX":
                    var c = a * s + r * h; if (c > .499 && (i = 2 * Math.atan2(a, h), n = Math.PI / 2, o = 0), -.499 > c && (i = -2 * Math.atan2(a, h), n = -Math.PI / 2, o = 0), isNaN(i)) { var l = a * a,
                            u = s * s,
                            p = r * r;
                        i = Math.atan2(2 * s * h - 2 * a * r, 1 - 2 * u - 2 * p), n = Math.asin(2 * c), o = Math.atan2(2 * a * h - 2 * s * r, 1 - 2 * l - 2 * p) } break;
                default:
                    throw Error("Euler order " + e + " not supported yet.") }
            t.y = i, t.z = n, t.x = o }, t.EventTarget = function() { var t = {};
            this.addEventListener = function(e, i) { void 0 === t[e] && (t[e] = []), -1 === t[e].indexOf(i) && t[e].push(i) }, this.dispatchEvent = function(e) { for (var i in t[e.type]) t[e.type][i](e) }, this.removeEventListener = function(e, i) { var n = t[e].indexOf(i); - 1 !== n && t[e].splice(n, 1) } }, t.ObjectPool = function() { this.objects = [], this.type = Object }, t.ObjectPool.prototype.release = function() { for (var t = arguments.length, e = 0; e !== t; e++) this.objects.push(arguments[e]) }, t.ObjectPool.prototype.get = function() { return 0 === this.objects.length ? this.constructObject() : this.objects.pop() }, t.ObjectPool.prototype.constructObject = function() { throw Error("constructObject() not implemented in this ObjectPool subclass yet!") }, t.Vec3Pool = function() { t.ObjectPool.call(this), this.type = t.Vec3 }, t.Vec3Pool.prototype = new t.ObjectPool, t.Vec3Pool.prototype.constructObject = function() { return new t.Vec3 }, t.Shape = function() { this.type = 0, this.aabbmin = new t.Vec3, this.aabbmax = new t.Vec3, this.boundingSphereRadius = 0, this.boundingSphereRadiusNeedsUpdate = !0 }, t.Shape.prototype.constructor = t.Shape, t.Shape.prototype.computeBoundingSphereRadius = function() { throw "computeBoundingSphereRadius() not implemented for shape type " + this.type }, t.Shape.prototype.getBoundingSphereRadius = function() { return this.boundingSphereRadiusNeedsUpdate && this.computeBoundingSphereRadius(), this.boundingSphereRadius }, t.Shape.prototype.volume = function() { throw "volume() not implemented for shape type " + this.type }, t.Shape.prototype.calculateLocalInertia = function() { throw "calculateLocalInertia() not implemented for shape type " + this.type };
        var s = new t.Vec3,
            r = new t.Vec3;
        t.Shape.prototype.calculateTransformedInertia = function(e, i, n) { n = n || new t.Vec3; var o = s,
                a = r; return this.calculateLocalInertia(e, o), i.vmult(o, a), n.x = Math.abs(a.x), n.y = Math.abs(a.y), n.z = Math.abs(a.z), n }, t.Shape.calculateLocalAABB = function() { throw Error(".calculateLocalAABB is not implemented for this Shape yet!") }, t.Shape.types = { SPHERE: 1, PLANE: 2, BOX: 4, COMPOUND: 8, CONVEXPOLYHEDRON: 16 }, t.Body = function(e) { t.EventTarget.apply(this), this.type = e, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new t.Vec3, this.collisionFilterGroup = 1, this.collisionFilterMask = 1 }, t.Body.DYNAMIC = 1, t.Body.STATIC = 2, t.Body.KINEMATIC = 4, t.Particle = function(e, i) { if ("number" != typeof e) throw Error("Argument 1 (mass) must be a number."); if (i !== void 0 && !(i instanceof t.Material)) throw Error("Argument 3 (material) must be an instance of CANNON.Material.");
            t.Body.call(this, "particle"), this.position = new t.Vec3, this.initPosition = new t.Vec3, this.velocity = new t.Vec3, this.initVelocity = new t.Vec3, this.force = new t.Vec3, this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = i, this.linearDamping = .01, this.motionstate = 0 >= e ? t.Body.STATIC : t.Body.DYNAMIC, this.allowSleep = !0, this.sleepState = 0, this.sleepSpeedLimit = .1, this.sleepTimeLimit = 1, this.timeLastSleepy = 0 }, t.Particle.prototype = new t.Body, t.Particle.prototype.constructor = t.Particle, t.Particle.prototype.isAwake = function() { return 0 === this.sleepState }, t.Particle.prototype.isSleepy = function() { return 1 === this.sleepState }, t.Particle.prototype.isSleeping = function() { return 2 === this.sleepState }, t.Particle.prototype.wakeUp = function() { var t = this.sleepState;
            this.sleepState = 0, 2 === t && this.dispatchEvent({ type: "wakeup" }) }, t.Particle.prototype.sleep = function() { this.sleepState = 2 }, t.Particle.prototype.sleepTick = function(t) { if (this.allowSleep) { var e = this.sleepState,
                    i = this.velocity.norm2(),
                    n = Math.pow(this.sleepSpeedLimit, 2);
                0 === e && n > i ? (this.sleepState = 1, this.timeLastSleepy = t, this.dispatchEvent({ type: "sleepy" })) : 1 === e && i > n ? this.wakeUp() : 1 === e && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleepState = 2, this.dispatchEvent({ type: "sleep" })) } }, t.RigidBody = function(e, i, n) { if ("number" != typeof e) throw Error("Argument 1 (mass) must be a number."); if (n !== void 0 && !(n instanceof t.Material)) throw Error("Argument 3 (material) must be an instance of CANNON.Material.");
            t.Particle.call(this, e, n), this.tau = new t.Vec3, this.quaternion = new t.Quaternion, this.initQuaternion = new t.Quaternion, this.angularVelocity = new t.Vec3, this.initAngularVelocity = new t.Vec3, this.shape = i, this.inertia = new t.Vec3, i.calculateLocalInertia(e, this.inertia), this.inertiaWorld = new t.Vec3, this.inertia.copy(this.inertiaWorld), this.inertiaWorldAutoUpdate = !1, this.invInertia = new t.Vec3(this.inertia.x > 0 ? 1 / this.inertia.x : 0, this.inertia.y > 0 ? 1 / this.inertia.y : 0, this.inertia.z > 0 ? 1 / this.inertia.z : 0), this.invInertiaWorld = new t.Vec3, this.invInertia.copy(this.invInertiaWorld), this.invInertiaWorldAutoUpdate = !1, this.angularDamping = .01, this.aabbmin = new t.Vec3, this.aabbmax = new t.Vec3, this.aabbNeedsUpdate = !0, this.wlambda = new t.Vec3 }, t.RigidBody.prototype = new t.Particle(0), t.RigidBody.prototype.constructor = t.RigidBody, t.RigidBody.prototype.computeAABB = function() { this.shape.calculateWorldAABB(this.position, this.quaternion, this.aabbmin, this.aabbmax), this.aabbNeedsUpdate = !1 };
        var h = new t.Vec3,
            c = new t.Vec3;
        t.RigidBody.prototype.applyForce = function(t, e) { var i = h;
            e.vsub(this.position, i); var n = c;
            i.cross(t, n), this.force.vadd(t, this.force), this.tau.vadd(n, this.tau) };
        var l = new t.Vec3,
            u = new t.Vec3,
            p = new t.Vec3;
        t.RigidBody.prototype.applyImpulse = function(t, e) { var i = l;
            e.vsub(this.position, i); var n = u;
            t.copy(n), n.mult(this.invMass, n), this.velocity.vadd(n, this.velocity); var o = p;
            i.cross(t, o), o.x *= this.invInertia.x, o.y *= this.invInertia.y, o.z *= this.invInertia.z, this.angularVelocity.vadd(o, this.angularVelocity) }, t.Sphere = function(e) { t.Shape.call(this), this.radius = void 0 !== e ? Number(e) : 1, this.type = t.Shape.types.SPHERE }, t.Sphere.prototype = new t.Shape, t.Sphere.prototype.constructor = t.Sphere, t.Sphere.prototype.calculateLocalInertia = function(e, i) { i = i || new t.Vec3; var n = 2 * e * this.radius * this.radius / 5; return i.x = n, i.y = n, i.z = n, i }, t.Sphere.prototype.volume = function() { return 4 * Math.PI * this.radius / 3 }, t.Sphere.prototype.computeBoundingSphereRadius = function() { this.boundingSphereRadiusNeedsUpdate = !1, this.boundingSphereRadius = this.radius }, t.Sphere.prototype.calculateWorldAABB = function(t, e, i, n) { for (var o = this.radius, a = ["x", "y", "z"], s = 0; a.length > s; s++) { var r = a[s];
                i[r] = t[r] - o, n[r] = t[r] + o } }, t.SPHSystem = function() { this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = [] }, t.SPHSystem.prototype.add = function(t) { this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([]) }, t.SPHSystem.prototype.remove = function(t) { var e = this.particles.indexOf(t); - 1 !== e && (this.particles.splice(e, 1), this.neighbors.length > this.particles.length && this.neighbors.pop()) };
        var d = new t.Vec3;
        t.SPHSystem.prototype.getNeighbors = function(t, e) { for (var i = this.particles.length, n = t.id, o = this.smoothingRadius * this.smoothingRadius, a = d, s = 0; s !== i; s++) { var r = this.particles[s];
                r.position.vsub(t.position, a), n !== r.id && o > a.norm2() && e.push(r) } };
        var v = new t.Vec3,
            y = new t.Vec3,
            f = new t.Vec3,
            m = new t.Vec3,
            w = new t.Vec3,
            b = new t.Vec3;
        t.SPHSystem.prototype.update = function() { for (var t = this.particles.length, e = v, i = this.speedOfSound, n = this.eps, o = 0; o !== t; o++) { var a = this.particles[o],
                    s = this.neighbors[o];
                s.length = 0, this.getNeighbors(a, s), s.push(this.particles[o]); for (var r = s.length, h = 0, c = 0; c !== r; c++) { a.position.vsub(s[c].position, e); var l = e.norm(),
                        u = this.w(l);
                    h += s[c].mass * u }
                this.densities[o] = h, this.pressures[o] = i * i * (this.densities[o] - this.density) } for (var p = y, d = f, x = m, g = w, V = b, o = 0; o !== t; o++) { var z = this.particles[o];
                p.set(0, 0, 0), d.set(0, 0, 0); for (var E, S, s = this.neighbors[o], r = s.length, c = 0; c !== r; c++) { var N = s[c];
                    z.position.vsub(N.position, g); var M = g.norm();
                    E = -N.mass * (this.pressures[o] / (this.densities[o] * this.densities[o] + n) + this.pressures[c] / (this.densities[c] * this.densities[c] + n)), this.gradw(g, x), x.mult(E, x), p.vadd(x, p), N.velocity.vsub(z.velocity, V), V.mult(1 / (1e-4 + this.densities[o] * this.densities[c]) * this.viscosity * N.mass, V), S = this.nablaw(M), V.mult(S, V), d.vadd(V, d) }
                d.mult(z.mass, d), p.mult(z.mass, p), z.force.vadd(d, z.force), z.force.vadd(p, z.force) } }, t.SPHSystem.prototype.w = function(t) { var e = this.smoothingRadius; return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3) }, t.SPHSystem.prototype.gradw = function(t, e) { var i = t.norm(),
                n = this.smoothingRadius;
            t.mult(945 / (32 * Math.PI * Math.pow(n, 9)) * Math.pow(n * n - i * i, 2), e) }, t.SPHSystem.prototype.nablaw = function(t) { var e = this.smoothingRadius,
                i = 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e); return i }, t.Box = function(e) { t.Shape.call(this), this.halfExtents = e, this.type = t.Shape.types.BOX, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation() }, t.Box.prototype = new t.Shape, t.Box.prototype.constructor = t.Box, t.Box.prototype.updateConvexPolyhedronRepresentation = function() { var e = this.halfExtents.x,
                i = this.halfExtents.y,
                n = this.halfExtents.z,
                o = t.Vec3,
                a = new t.ConvexPolyhedron([new o(-e, -i, -n), new o(e, -i, -n), new o(e, i, -n), new o(-e, i, -n), new o(-e, -i, n), new o(e, -i, n), new o(e, i, n), new o(-e, i, n)], [
                    [3, 2, 1, 0],
                    [4, 5, 6, 7],
                    [5, 4, 1, 0],
                    [2, 3, 6, 7],
                    [0, 4, 7, 3],
                    [1, 2, 5, 6]
                ], [new o(0, 0, -1), new o(0, 0, 1), new o(0, -1, 0), new o(0, 1, 0), new o(-1, 0, 0), new o(1, 0, 0)]);
            this.convexPolyhedronRepresentation = a }, t.Box.prototype.calculateLocalInertia = function(e, i) { i = i || new t.Vec3; var n = this.halfExtents; return i.x = 1 / 12 * e * (2 * 2 * n.y * n.y + 2 * 2 * n.z * n.z), i.y = 1 / 12 * e * (2 * 2 * n.x * n.x + 2 * 2 * n.z * n.z), i.z = 1 / 12 * e * (2 * 2 * n.y * n.y + 2 * 2 * n.x * n.x), i }, t.Box.prototype.getSideNormals = function(t, e) { var i = t,
                n = this.halfExtents; if (i[0].set(n.x, 0, 0), i[1].set(0, n.y, 0), i[2].set(0, 0, n.z), i[3].set(-n.x, 0, 0), i[4].set(0, -n.y, 0), i[5].set(0, 0, -n.z), void 0 !== e)
                for (var o = 0; o !== i.length; o++) e.vmult(i[o], i[o]); return i }, t.Box.prototype.volume = function() { return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z }, t.Box.prototype.computeBoundingSphereRadius = function() { this.boundingSphereRadius = this.halfExtents.norm(), this.boundingSphereRadiusNeedsUpdate = !1 };
        var x = new t.Vec3;
        new t.Vec3, t.Box.prototype.forEachWorldCorner = function(t, e, i) { for (var n = this.halfExtents, o = [
                    [n.x, n.y, n.z],
                    [-n.x, n.y, n.z],
                    [-n.x, -n.y, n.z],
                    [-n.x, -n.y, -n.z],
                    [n.x, -n.y, -n.z],
                    [n.x, n.y, -n.z],
                    [-n.x, n.y, -n.z],
                    [n.x, -n.y, n.z]
                ], a = 0; o.length > a; a++) x.set(o[a][0], o[a][1], o[a][2]), e.vmult(x, x), t.vadd(x, x), i(x.x, x.y, x.z) }, t.Box.prototype.calculateWorldAABB = function(t, e, i, n) { i.set(1 / 0, 1 / 0, 1 / 0), n.set(-1 / 0, -1 / 0, -1 / 0), this.forEachWorldCorner(t, e, function(t, e, o) { t > n.x && (n.x = t), e > n.y && (n.y = e), o > n.z && (n.z = o), i.x > t && (i.x = t), i.y > e && (i.y = e), i.z > o && (i.z = o) }) }, t.Plane = function() { t.Shape.call(this), this.type = t.Shape.types.PLANE, this.worldNormal = new t.Vec3, this.worldNormalNeedsUpdate = !0 }, t.Plane.prototype = new t.Shape, t.Plane.prototype.constructor = t.Plane, t.Plane.prototype.computeWorldNormal = function(t) { var e = this.worldNormal;
            e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1 }, t.Plane.prototype.calculateLocalInertia = function(e, i) { return i = i || new t.Vec3 }, t.Plane.prototype.volume = function() { return 1 / 0 };
        var g = new t.Vec3;
        t.Plane.prototype.calculateWorldAABB = function(t, e, i, n) { g.set(0, 0, 1), e.vmult(g, g), i.set(-1 / 0, -1 / 0, -1 / 0), n.set(1 / 0, 1 / 0, 1 / 0), 1 === g.x && (n.x = t.x), 1 === g.y && (n.y = t.y), 1 === g.z && (n.z = t.z), -1 === g.x && (i.x = t.x), -1 === g.y && (i.y = t.y), -1 === g.z && (i.z = t.z) }, t.Compound = function() { t.Shape.call(this), this.type = t.Shape.types.COMPOUND, this.childShapes = [], this.childOffsets = [], this.childOrientations = [] }, t.Compound.prototype = new t.Shape, t.Compound.prototype.constructor = t.Compound, t.Compound.prototype.addChild = function(e, i, n) { i = i || new t.Vec3, n = n || new t.Quaternion, this.childShapes.push(e), this.childOffsets.push(i), this.childOrientations.push(n) }, t.Compound.prototype.volume = function() { for (var t = 0, e = this.childShapes.length, i = 0; i !== e; i++) t += this.childShapes[i].volume(); return t };
        var V = new t.Vec3,
            z = new t.Vec3;
        t.Compound.prototype.calculateLocalInertia = function(e, i) { i = i || new t.Vec3; for (var n = this.volume(), o = z, a = 0, s = this.childShapes.length; a !== s; a++) { var r = this.childShapes[a],
                    h = this.childOffsets[a];
                this.childOrientations[a]; var c = r.volume() / n * e;
                r.calculateLocalInertia(c, o), i.vadd(o, i); var l = V;
                l.set(c * h.x * h.x, c * h.y * h.y, c * h.z * h.z), i.vadd(l, i) } return i }, t.Compound.prototype.computeBoundingSphereRadius = function() { for (var t = 0, e = 0; this.childShapes.length > e; e++) { var i = this.childShapes[e];
                i.boundingSphereRadiusNeedsUpdate && i.computeBoundingSphereRadius(); var n = this.childOffsets[e].norm() + i.boundingSphereRadius;
                n > t && (t = n) }
            this.boundingSphereRadius = t, this.boundingSphereRadiusNeedsUpdate = !1 };
        var E = new t.Vec3,
            S = new t.Vec3,
            N = new t.Vec3,
            M = new t.Quaternion;
        t.Compound.prototype.calculateWorldAABB = function(t, e, i, n) { var o = this.childShapes.length;
            i.set(1 / 0, 1 / 0, 1 / 0), n.set(-1 / 0, -1 / 0, -1 / 0); for (var a = 0; a !== o; a++) this.childOffsets[a].copy(N), e.vmult(N, N), t.vadd(N, N), e.mult(this.childOrientations[a], M), this.childShapes[a].calculateWorldAABB(N, M, S, E), S.x < i.x && (i.x = S.x), S.y < i.y && (i.y = S.y), S.z < i.z && (i.z = S.z), E.x > n.x && (n.x = E.x), E.y > n.y && (n.y = E.y), E.z > n.z && (n.z = E.z) }, t.ConvexPolyhedron = function(e, i) {
            function n(t, e, i, n) { e.vsub(t, c), i.vsub(e, h), h.cross(c, n), n.isZero() || n.normalize() }

            function o(t, e, i, n, o) { for (var a = t.vertices.length, s = null, r = null, h = t.vertices, c = 0; a > c; c++) { h[c].copy(V), n.vmult(V, V), V.vadd(i, V); var l = V.dot(e);
                    (null === s || l > s) && (s = l), (null === r || r > l) && (r = l) } if (r > s) { var u = r;
                    r = s, s = u }
                o[0] = s, o[1] = r }

            function a(t, e) { var i = r.faces[t],
                    o = r.vertices[i[0]],
                    a = r.vertices[i[1]],
                    s = r.vertices[i[2]]; return n(o, a, s, e) }

            function s(t) { var e = r.faces[t],
                    i = r.faceNormals[t],
                    n = r.vertices[e[0]],
                    o = -i.dot(n); return o } var r = this;
            t.Shape.call(this), this.type = t.Shape.types.CONVEXPOLYHEDRON; var h = new t.Vec3,
                c = new t.Vec3;
            this.vertices = e || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.faces = i || [], this.faceNormals = []; for (var l = 0; this.faces.length > l; l++) { for (var u = 0; this.faces[l].length > u; u++)
                    if (!this.vertices[this.faces[l][u]]) throw Error("Vertex " + this.faces[l][u] + " not found!");
                var p = new t.Vec3;
                a(l, p), p.negate(p), this.faceNormals.push(p); var d = this.vertices[this.faces[l][0]]; if (0 > p.dot(d)) { console.warn("Face normal " + l + " (" + ("" + p) + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule."); for (var u = 0; this.faces[l].length > u; u++) console.warn("Vertex " + this.faces[l][u] + ": (" + ("" + this.vertices[i[l][u]]) + ")") } }
            this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], this.uniqueEdges = []; for (var v = this.vertices.length, y = 0; v > y; y++) { var f = this.vertices[y]; if (!(f instanceof t.Vec3)) throw "Argument 1 must be instance of CANNON.Vec3";
                this.uniqueEdges.push(f) } for (var l = 0; this.faces.length > l; l++)
                for (var m = this.faces[l].length, w = m, u = 0; w > u; u++) { var b = (u + 1) % m,
                        x = new t.Vec3;
                    this.vertices[this.faces[l][u]].vsub(this.vertices[this.faces[l][b]], x), x.normalize(); for (var g = !1, f = 0; this.uniqueEdges.length > f; f++)
                        if (this.uniqueEdges[f].almostEquals(x) || this.uniqueEdges[f].almostEquals(x)) { g = !0; break }
                    g || this.uniqueEdges.push(x), x && (x.face1 = l) }
            var V = new t.Vec3;
            this.testSepAxis = function(t, e, i, n, a, s) { var r = [],
                    h = [],
                    c = this;
                o(c, t, i, n, r), o(e, t, a, s, h); var l = r[0],
                    u = r[1],
                    p = h[0],
                    d = h[1]; if (d > l || u > p) return !1; var v = l - d,
                    y = p - u,
                    f = y > v ? v : y; return f }; var z = new t.Vec3,
                E = new t.Vec3,
                S = new t.Vec3,
                N = new t.Vec3,
                M = new t.Vec3,
                P = new t.Vec3;
            this.findSeparatingAxis = function(t, e, i, n, o, a) { for (var s = 1 / 0, r = this, h = 0, c = r.faces.length, l = 0; c > l; l++) { r.faceNormals[l].copy(z), i.vmult(z, z); var u = r.testSepAxis(z, t, e, i, n, o); if (u === !1) return !1;
                    s > u && (s = u, z.copy(a)) } for (var p = t.faces.length, l = 0; p > l; l++) { t.faceNormals[l].copy(E), o.vmult(E, E), h++; var u = r.testSepAxis(E, t, e, i, n, o); if (u === !1) return !1;
                    s > u && (s = u, E.copy(a)) } for (var d = 0, v = 0; r.uniqueEdges.length > v; v++) { r.uniqueEdges[v].copy(N), i.vmult(N, N); for (var y = 0; t.uniqueEdges.length > y; y++)
                        if (t.uniqueEdges[y].copy(M), o.vmult(M, M), N.cross(M, P), d++, !P.almostZero()) { P.normalize(); var f = r.testSepAxis(P, t, e, i, n, o); if (f === !1) return !1;
                            s > f && (s = f, P.copy(a)) } } return n.vsub(e, S), S.dot(a) > 0 && a.negate(a), !0 }; var q = new t.Vec3;
            this.clipAgainstHull = function(e, i, n, o, a, s, r, h, c) { if (!(e instanceof t.Vec3)) throw Error("posA must be Vec3"); if (!(i instanceof t.Quaternion)) throw Error("quatA must be Quaternion"); for (var l = -1, u = -1 / 0, p = 0; n.faces.length > p; p++) { n.faceNormals[p].copy(q), a.vmult(q, q); var d = q.dot(s);
                    d > u && (u = d, l = p) } for (var v = [], y = n.faces[l], f = y.length, m = 0; f > m; m++) { var w = n.vertices[y[m]],
                        b = new t.Vec3;
                    w.copy(b), a.vmult(b, b), o.vadd(b, b), v.push(b) }
                l >= 0 && this.clipFaceAgainstHull(s, e, i, v, r, h, c) }; var j = new t.Vec3,
                C = new t.Vec3,
                B = new t.Vec3,
                I = new t.Vec3,
                R = new t.Vec3,
                O = new t.Vec3,
                A = new t.Vec3,
                T = new t.Vec3;
            this.clipFaceAgainstHull = function(e, i, n, o, a, r, h) { if (!(e instanceof t.Vec3)) throw Error("sep normal must be vector"); if (!(o instanceof Array)) throw Error("world verts must be array");
                a = Number(a), r = Number(r); for (var c = this, l = [], u = o, p = l, d = -1, v = 1 / 0, y = 0; c.faces.length > y; y++) { c.faceNormals[y].copy(j), n.vmult(j, j); var f = j.dot(e);
                    v > f && (v = f, d = y) } if (0 > d) return console.log("--- did not find any closest face... ---"), void 0; var m = c.faces[d];
                m.connectedFaces = []; for (var w = 0; c.faces.length > w; w++)
                    for (var b = 0; c.faces[w].length > b; b++) - 1 !== m.indexOf(c.faces[w][b]) && w !== d && -1 === m.connectedFaces.indexOf(w) && m.connectedFaces.push(w);
                u.length; for (var x = m.length, g = 0; x > g; g++) { var V = c.vertices[m[g]],
                        z = c.vertices[m[(g + 1) % x]];
                    V.vsub(z, C), C.copy(B), n.vmult(B, B), i.vadd(B, B), this.faceNormals[d].copy(I), n.vmult(I, I), i.vadd(I, I), B.cross(I, R), R.negate(R), V.copy(O), n.vmult(O, O), i.vadd(O, O); var E, S = (-O.dot(R), m.connectedFaces[g]);
                    this.faceNormals[S].copy(A); var N = s(S);
                    A.copy(T), n.vmult(T, T); var E = N - T.dot(i); for (this.clipFaceAgainstPlane(u, p, T, E); u.length;) u.shift(); for (; p.length;) u.push(p.shift()) }
                this.faceNormals[d].copy(A); var N = s(d);
                A.copy(T), n.vmult(T, T); for (var E = N - T.dot(i), w = 0; u.length > w; w++) { var M = T.dot(u[w]) + E; if (a >= M && (console.log("clamped: depth=" + M + " to minDist=" + (a + "")), M = a), r >= M) { var P = u[w]; if (0 >= M) { var q = { point: P, normal: T, depth: M };
                            h.push(q) } } } }, this.clipFaceAgainstPlane = function(e, i, n, o) { if (!(n instanceof t.Vec3)) throw Error("planeNormal must be Vec3, " + n + " given"); if (!(e instanceof Array)) throw Error("invertices must be Array, " + e + " given"); if (!(i instanceof Array)) throw Error("outvertices must be Array, " + i + " given"); var a, s, r = e.length; if (2 > r) return i; var h = e[e.length - 1],
                    c = e[0];
                a = n.dot(h) + o; for (var l = 0; r > l; l++) { if (c = e[l], s = n.dot(c) + o, 0 > a)
                        if (0 > s) { var u = new t.Vec3;
                            c.copy(u), i.push(u) } else { var u = new t.Vec3;
                            h.lerp(c, a / (a - s), u), i.push(u) }
                    else if (0 > s) { var u = new t.Vec3;
                        h.lerp(c, a / (a - s), u), i.push(u), i.push(c) }
                    h = c, a = s } return i }; var r = this;
            this.calculateLocalInertia = function(t, e) { r.computeAABB(); var i = this.aabbmax.x - this.aabbmin.x,
                    n = this.aabbmax.y - this.aabbmin.y,
                    o = this.aabbmax.z - this.aabbmin.z;
                e.x = 1 / 12 * t * (2 * 2 * n * n + 2 * 2 * o * o), e.y = 1 / 12 * t * (2 * 2 * i * i + 2 * 2 * o * o), e.z = 1 / 12 * t * (2 * 2 * n * n + 2 * 2 * i * i) }, new t.Vec3, this.computeAABB = function() { var t = this.vertices.length,
                    e = this.aabbmin,
                    i = this.aabbmax,
                    n = this.vertices;
                e.set(1 / 0, 1 / 0, 1 / 0), i.set(-1 / 0, -1 / 0, -1 / 0); for (var o = 0; t > o; o++) { var a = n[o];
                    a.x < e.x ? e.x = a.x : a.x > i.x && (i.x = a.x), a.y < e.y ? e.y = a.y : a.y > i.y && (i.y = a.y), a.z < e.z ? e.z = a.z : a.z > i.z && (i.z = a.z) } } }, t.ConvexPolyhedron.prototype = new t.Shape, t.ConvexPolyhedron.prototype.constructor = t.ConvexPolyhedron, t.ConvexPolyhedron.prototype.computeWorldVertices = function(e, i) { for (var n = this.vertices.length; n > this.worldVertices.length;) this.worldVertices.push(new t.Vec3); for (var o = this.vertices, a = this.worldVertices, s = 0; s !== n; s++) i.vmult(o[s], a[s]), e.vadd(a[s], a[s]);
            this.worldVerticesNeedsUpdate = !1 }, t.ConvexPolyhedron.prototype.computeWorldFaceNormals = function(e) { for (var i = this.faceNormals.length; i > this.worldFaceNormals.length;) this.worldFaceNormals.push(new t.Vec3); for (var n = this.faceNormals, o = this.worldFaceNormals, a = 0; a !== i; a++) e.vmult(n[a], o[a]);
            this.worldFaceNormalsNeedsUpdate = !1 }, t.ConvexPolyhedron.prototype.computeBoundingSphereRadius = function() { for (var t = 0, e = this.vertices, i = 0, n = e.length; i !== n; i++) { var o = e[i].norm2();
                o > t && (t = o) }
            this.boundingSphereRadius = Math.sqrt(t), this.boundingSphereRadiusNeedsUpdate = !1 };
        var P = new t.Vec3;
        t.ConvexPolyhedron.prototype.calculateWorldAABB = function(t, e, i, n) { for (var o, a, s, r, h, c, l = this.vertices.length, u = this.vertices, p = 0; l > p; p++) { u[p].copy(P), e.vmult(P, P), t.vadd(P, P); var d = P;
                o > d.x || void 0 === o ? o = d.x : (d.x > r || void 0 === r) && (r = d.x), a > d.y || void 0 === a ? a = d.y : (d.y > h || void 0 === h) && (h = d.y), s > d.z || void 0 === s ? s = d.z : (d.z > c || void 0 === c) && (c = d.z) }
            i.set(o, a, s), n.set(r, h, c) }, t.ConvexPolyhedron.prototype.volume = function() { return this.boundingSphereRadiusNeedsUpdate && this.computeBoundingSphereRadius(), 4 * Math.PI * this.boundingSphereRadius / 3 }, t.ConvexPolyhedron.prototype.getAveragePointLocal = function(e) { e = e || new t.Vec3; for (var i = this.vertices.length, n = this.vertices, o = 0; i > o; o++) e.vadd(n[o], e); return e.mult(1 / i, e), e }, t.ConvexPolyhedron.prototype.transformAllPoints = function(t, e) { var i = this.vertices.length,
                n = this.vertices; if (e) { for (var o = 0; i > o; o++) { var a = n[o];
                    e.vmult(a, a) } for (var o = 0; this.faceNormals.length > o; o++) { var a = this.faceNormals[o];
                    e.vmult(a, a) } } if (t)
                for (var o = 0; i > o; o++) { var a = n[o];
                    a.vadd(t, a) } };
        var q = new t.Vec3,
            j = new t.Vec3,
            C = new t.Vec3;
        t.ConvexPolyhedron.prototype.pointIsInside = function(t) { var e = this.vertices.length,
                i = this.vertices,
                n = this.faces,
                o = this.faceNormals,
                a = null,
                s = this.faces.length,
                r = q;
            this.getAveragePointLocal(r); for (var h = 0; s > h; h++) { this.faces[h].length; var e = o[h],
                    c = i[n[h][0]],
                    l = j;
                t.vsub(c, l); var u = e.dot(l),
                    p = C;
                r.vsub(c, p); var d = e.dot(p); if (0 > u && d > 0 || u > 0 && 0 > d) return !1 } return a ? 1 : -1 }, t.Cylinder = function(e, i, n, o) { var a = o,
                s = [],
                r = [],
                h = [],
                c = [],
                l = [],
                u = Math.cos,
                p = Math.sin;
            s.push(new t.Vec3(i * u(0), i * p(0), .5 * -n)), c.push(0), s.push(new t.Vec3(e * u(0), e * p(0), .5 * n)), l.push(1); for (var d = 0; a > d; d++) { var v = 2 * Math.PI / a * (d + 1),
                    y = 2 * Math.PI / a * (d + .5);
                a - 1 > d ? (s.push(new t.Vec3(i * u(v), i * p(v), .5 * -n)), c.push(2 * d + 2), s.push(new t.Vec3(e * u(v), e * p(v), .5 * n)), l.push(2 * d + 3), r.push(new t.Vec3(u(y), p(y), 0)), h.push([2 * d + 2, 2 * d + 3, 2 * d + 1, 2 * d])) : (h.push([0, 1, 2 * d + 1, 2 * d]), r.push(new t.Vec3(u(y), p(y), 0))) }
            h.push(l), r.push(new t.Vec3(0, 0, 1)); for (var f = [], d = 0; c.length > d; d++) f.push(c[c.length - d - 1]);
            h.push(f), r.push(new t.Vec3(0, 0, -1)), this.type = t.Shape.types.CONVEXPOLYHEDRON, t.ConvexPolyhedron.call(this, s, h, r) }, t.Cylinder.prototype = new t.ConvexPolyhedron, t.Ray = function(e, i) {
            function n(t, e, i) { return i.vsub(t, V), p = V.dot(e), e.mult(p, z), z.vadd(t, z), d = i.distanceTo(z) }

            function o(t, e, i, n) { return n.vsub(e, V), i.vsub(e, E), t.vsub(e, S), v = V.dot(V), y = V.dot(E), f = V.dot(S), m = E.dot(E), w = E.dot(S), b = 1 / (v * m - y * y), x = (m * f - y * w) * b, g = (v * w - y * f) * b, x >= 0 && g >= 0 && 1 > x + g }
            this.origin = e || new t.Vec3, this.direction = i || new t.Vec3; var a = 1e-4;
            this.setPrecision = function(t) { a = t }; var s = new t.Vec3,
                r = new t.Vec3,
                h = new t.Vec3;
            new t.Vec3, new t.Vec3; var c = new t.Vec3,
                l = new t.Vec3,
                u = new t.Vec3;
            this.intersectBody = function(e) { return e.shape instanceof t.ConvexPolyhedron ? this.intersectShape(e.shape, e.quaternion, e.position, e) : e.shape instanceof t.Box ? this.intersectShape(e.shape.convexPolyhedronRepresentation, e.quaternion, e.position, e) : (console.warn("Ray intersection is this far only implemented for ConvexPolyhedron and Box shapes."), void 0) }, this.intersectShape = function(e, i, p, d) { var v, y = []; if (e instanceof t.ConvexPolyhedron) { var f = n(this.origin, this.direction, p); if (f > e.getBoundingSphereRadius()) return y; for (var m, w, b = e.faces, x = e.vertices, g = e.faceNormals, V = 0; b.length > V; V++) { var z = b[V],
                            E = g[V],
                            S = i,
                            N = p; if (x[z[0]].copy(c), S.vmult(c, c), c.vadd(N, c), c.vsub(this.origin, c), S.vmult(E, l), m = this.direction.dot(l), !(a > Math.abs(m)) && (w = l.dot(c) / m, !(0 > w) && 0 > m)) { this.direction.mult(w, u), u.vadd(this.origin, u), x[z[0]].copy(s), S.vmult(s, s), N.vadd(s, s); for (var M = 1; z.length - 1 > M; M++)
                                if (x[z[M]].copy(r), x[z[M + 1]].copy(h), S.vmult(r, r), S.vmult(h, h), N.vadd(r, r), N.vadd(h, h), o(u, s, r, h)) { v = { distance: this.origin.distanceTo(u), point: u.copy(), face: z, body: d }, y.push(v); break } } } } return y }, this.intersectBodies = function(t) { for (var e = [], i = 0, n = t.length; n > i; i++) { var o = this.intersectBody(t[i]);
                    Array.prototype.push.apply(e, o) } return e.sort(function(t, e) { return t.distance - e.distance }), e }; var p, d, v, y, f, m, w, b, x, g, V = new t.Vec3,
                z = new t.Vec3,
                E = new t.Vec3,
                S = new t.Vec3 }, t.Ray.prototype.constructor = t.Ray, t.Broadphase = function() { this.world = null, this.useBoundingBoxes = !1 }, t.Broadphase.prototype.constructor = t.BroadPhase, t.Broadphase.prototype.collisionPairs = function() {
            throw Error("collisionPairs not implemented for this BroadPhase class!")
        };
        var B = t.Body.STATIC | t.Body.KINEMATIC;
        t.Broadphase.prototype.needBroadphaseCollision = function(e, i) { return 0 === (e.collisionFilterGroup & i.collisionFilterMask) || 0 === (i.collisionFilterGroup & e.collisionFilterMask) ? !1 : 0 === (e.motionstate & B) && !e.isSleeping() || 0 === (i.motionstate & B) && !i.isSleeping() ? e.shape || i.shape ? e.shape instanceof t.Plane && i.shape instanceof t.Plane ? !1 : !0 : !1 : !1 }, t.Broadphase.prototype.intersectionTest = function(t, e, i, n) { this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, i, n) : this.doBoundingSphereBroadphase(t, e, i, n) };
        var I = new t.Vec3,
            R = new t.Vec3,
            O = (new t.Quaternion, new t.Vec3);
        t.Broadphase.prototype.doBoundingSphereBroadphase = function(e, i, n, o) { var a = t.Shape.types,
                s = a.SPHERE | a.BOX | a.COMPOUND | a.CONVEXPOLYHEDRON,
                r = a.PLANE;
            t.Body.STATIC | t.Body.KINEMATIC; var h = I,
                c = R,
                l = O,
                u = e.shape,
                p = i.shape; if (u && p) { var d = u.type,
                    v = p.type; if (d & s && v & s) { i.position.vsub(e.position, h), u.boundingSphereRadiusNeedsUpdate && u.computeBoundingSphereRadius(), p.boundingSphereRadiusNeedsUpdate && p.computeBoundingSphereRadius(); var y = u.boundingSphereRadius + p.boundingSphereRadius;
                    y * y > h.norm2() && (n.push(e), o.push(i)) } else if (d & s && v & a.PLANE || v & s && d & a.PLANE) { var f = d === r ? e : i,
                        m = d !== r ? e : i,
                        w = m.shape,
                        b = f.shape;
                    m.position.vsub(f.position, h), b.worldNormalNeedsUpdate && b.computeWorldNormal(f.quaternion), c = b.worldNormal, w.boundingSphereRadiusNeedsUpdate && w.computeBoundingSphereRadius(); var x = h.dot(c) - w.boundingSphereRadius;
                    0 > x && (n.push(e), o.push(i)) } } else if (u || p) { var g = u ? i : e,
                    V = u ? e : i,
                    w = V.shape,
                    z = w.type; if (z & s) { if (z === a.SPHERE) g.position.vsub(V.position, l), w.radius * w.radius >= l.norm2() && (n.push(g), o.push(V));
                    else if (z === a.CONVEXPOLYHEDRON || z === a.BOX || z === a.COMPOUND) { w.boundingSphereRadiusNeedsUpdate && w.computeBoundingSphereRadius(); var E = w.boundingSphereRadius;
                        g.position.vsub(V.position, l), E * E >= l.norm2() && (n.push(g), o.push(V)) } } else if (z === a.PLANE) { var S = V;
                    c.set(0, 0, 1), S.quaternion.vmult(c, c), g.position.vsub(S.position, l), 0 >= c.dot(l) && (n.push(g), o.push(V)) } } else; }, t.Broadphase.prototype.doBoundingBoxBroadphase = function(e, i, n, o) { var a = e.shape,
                s = i.shape; if (e.aabbNeedsUpdate && e.computeAABB(), i.aabbNeedsUpdate && i.computeAABB(), a && s) e.aabbmax.x < i.aabbmin.x || e.aabbmax.y < i.aabbmin.y || e.aabbmax.z < i.aabbmin.z || e.aabbmin.x > i.aabbmax.x || e.aabbmin.y > i.aabbmax.y || e.aabbmin.z > i.aabbmax.z || (n.push(e), o.push(i));
            else if (a || s) { var r = a ? i : e,
                    h = a ? e : i;
                h.shape instanceof t.Plane, r.position.x < h.aabbmin.x || r.position.y < h.aabbmin.y || r.position.z < h.aabbmin.z || r.position.x > h.aabbmax.x || r.position.y > h.aabbmax.y || r.position.z > h.aabbmax.z || (n.push(e), o.push(i)) } else; };
        var A = {},
            T = [],
            F = [];
        t.Broadphase.prototype.makePairsUnique = function(t, e) { for (var i = A, n = T, o = F, a = t.length, s = 0; s !== a; s++) n[s] = t[s], o[s] = e[s];
            t.length = 0, e.length = 0; for (var s = 0; s !== a; s++) { var r = n[s].id,
                    h = o[s].id,
                    c = h > r ? r + "," + h : h + "," + r;
                i[c] = s } for (var c in i) { var s = i[c];
                t.push(n[s]), e.push(o[s]), delete i[c] } }, t.NaiveBroadphase = function() { t.Broadphase.apply(this) }, t.NaiveBroadphase.prototype = new t.Broadphase, t.NaiveBroadphase.prototype.constructor = t.NaiveBroadphase, t.NaiveBroadphase.prototype.collisionPairs = function(t, e, i) { var n, o, a, s, r = t.bodies,
                h = r.length; for (n = 0; n !== h; n++)
                for (o = 0; o !== n; o++) a = r[n], s = r[o], this.needBroadphaseCollision(a, s) && this.intersectionTest(a, s, e, i) }, t.GridBroadphase = function(e, i, n, o, a) { t.Broadphase.apply(this), this.nx = n || 10, this.ny = o || 10, this.nz = a || 10, this.aabbMin = e || new t.Vec3(100, 100, 100), this.aabbMax = i || new t.Vec3(-100, -100, -100), this.bins = [] }, t.GridBroadphase.prototype = new t.Broadphase, t.GridBroadphase.prototype.constructor = t.GridBroadphase;
        var k = new t.Vec3,
            U = new t.Vec3;
        t.GridBroadphase.prototype.collisionPairs = function(e, i, n) { var o = e.numObjects(),
                a = e.bodies,
                s = this.aabbMax,
                r = this.aabbMin,
                h = this.nx,
                c = this.ny,
                l = this.nz,
                u = s.x,
                p = s.y,
                d = s.z,
                v = r.x,
                y = r.y,
                f = r.z,
                m = h / (u - v),
                w = c / (p - y),
                b = l / (d - f),
                x = (u - v) / h,
                g = (p - y) / c,
                V = (d - f) / l,
                z = t.Shape.types,
                E = z.SPHERE,
                S = z.PLANE;
            z.BOX, z.COMPOUND, z.CONVEXPOLYHEDRON; for (var N = this.bins, M = h * c * l, P = N.length - 1; P !== M; P++) N.push([]); for (var P = 0; P !== M; P++) N[P].length = 0; for (var q = Math.floor, P = 0; P !== o; P++) { var j = a[P],
                    C = j.shape; switch (C.type) {
                    case E:
                        for (var B = j.position.x, I = j.position.y, R = j.position.z, O = C.radius, A = q(m * (B - O - v)), T = q(w * (I - O - y)), F = q(b * (R - O - f)), W = q(m * (B + O - v)), L = q(w * (I + O - y)), D = q(b * (R + O - f)), H = A; H !== W + 1; H++)
                            for (var Q = T; Q !== L + 1; Q++)
                                for (var X = F; X !== D + 1; X++) { var G = H,
                                        Y = Q,
                                        Z = X,
                                        _ = G * (c - 1) * (l - 1) + Y * (l - 1) + Z;
                                    _ >= 0 && M > _ && N[_].push(j) }
                        break;
                    case S:
                        var K = k,
                            J = U,
                            $ = .25 * (x * x + g * g + V * V),
                            te = C.worldNormal;
                        C.worldNormalNeedsUpdate && C.computeWorldNormal(j.quaternion); for (var H = 0; H !== h; H++)
                            for (var Q = 0; Q !== c; Q++)
                                for (var X = 0; X !== l; X++) { var G = H,
                                        Y = Q,
                                        Z = X; if (J.set(G * x + v, Y * g + y, Z * V + f), J.vsub(j.position, K), $ > K.dot(te)) { var _ = G * (c - 1) * (l - 1) + Y * (l - 1) + Z;
                                        N[_].push(j) } }
                        break;
                    default:
                        console.warn("Shape " + C.type + " not supported in GridBroadphase!") } } for (var P = 0; P !== M; P++)
                for (var ee = N[P], H = 0, ie = ee.length; H !== ie; H++)
                    for (var j = ee[H], Q = 0; Q !== H; Q++) { var ne = ee[Q];
                        this.needBroadphaseCollision(j, ne) && this.intersectionTest(j, ne, i, n) }
            this.makePairsUnique(i, n) }, t.Solver = function() { this.equations = [] }, t.Solver.prototype.solve = function() { return 0 }, t.Solver.prototype.addEquation = function(t) { this.equations.push(t) }, t.Solver.prototype.removeEquation = function(t) { var e = this.equations,
                i = e.indexOf(t); - 1 !== i && e.splice(i, 1) }, t.Solver.prototype.removeAllEquations = function() { this.equations.length = 0 }, t.GSSolver = function() { t.Solver.call(this), this.iterations = 10, this.tolerance = 0 }, t.GSSolver.prototype = new t.Solver;
        var W = [],
            L = [],
            D = [];
        t.GSSolver.prototype.solve = function(t, e) { var i, n, o, a, s, r, h = (this.d, this.k, 0),
                c = this.iterations,
                l = this.tolerance * this.tolerance,
                u = (this.a, this.b),
                p = this.equations,
                d = p.length,
                v = e.bodies,
                y = v.length,
                f = t,
                m = L,
                w = D,
                b = W;
            m.length = 0, w.length = 0, b.length = 0; for (var x = 0; x !== d; x++) { var g = p[x];
                g.spookParamsNeedsUpdate && (g.updateSpookParams(f), g.spookParamsNeedsUpdate = !1), b[x] = 0, w[x] = g.computeB(f), m[x] = 1 / g.computeC() } if (0 !== d) { for (var x = 0; x !== y; x++) { var u = v[x],
                        V = u.vlambda,
                        z = u.wlambda;
                    V.set(0, 0, 0), z && z.set(0, 0, 0) } for (h = 0; h !== c; h++) { a = 0; for (var E = 0; E !== d; E++) { var g = p[E];
                        i = w[E], n = m[E], r = b[E], s = g.computeGWlambda(), o = n * (i - s - g.eps * r), g.minForce > r + o ? o = g.minForce - r : r + o > g.maxForce && (o = g.maxForce - r), b[E] += o, a += o > 0 ? o : -o, g.addToWlambda(o) } if (l > a * a) break } for (var x = 0; x !== y; x++) { var u = v[x],
                        S = u.velocity,
                        N = u.angularVelocity;
                    S.vadd(u.vlambda, S), N && N.vadd(u.wlambda, N) } } return h }, t.SplitSolver = function(e) { t.Solver.call(this), this.subsolver = e }, t.SplitSolver.prototype = new t.Solver;
        var H = [],
            Q = [],
            X = [],
            G = { bodies: null };
        t.SplitSolver.prototype.solve = function(e, i) {
            function n(t) { for (var e = t.length, i = 0; i !== e; i++) { var n = t[i]; if (!(n.visited || n.body.motionstate & x)) return n } return !1 }

            function o(t, e) { var i = []; for (i.push(t), t.visited = !0, e(t); i.length;)
                    for (var o, a = i.pop(); o = n(a.children);) o.visited = !0, e(o), i.push(o) }

            function a(t) { z.push(t.body); for (var e = t.eqs.length, i = 0; i !== e; i++) { var n = t.eqs[i]; - 1 === V.indexOf(n) && V.push(n) } } for (var s = H, r = i.bodies, h = this.equations, c = h.length, l = r.length, u = this.subsolver, p = s.length; p !== l; p++) s.push({ body: r[p], children: [], eqs: [], visited: !1 }); for (var p = 0; p !== l; p++) { var d = s[p];
                d.body = r[p], d.children.length = 0, d.eqs.length = 0, d.visited = !1 } for (var v = 0; v !== c; v++) { var y = h[v],
                    p = r.indexOf(y.bi),
                    f = r.indexOf(y.bj),
                    m = s[p],
                    w = s[f];
                m.children.push(w), m.eqs.push(y), w.children.push(m), w.eqs.push(y) } for (var b, x = t.Body.STATIC, g = 0, V = Q, z = X, E = G; b = n(s);) { V.length = 0, z.length = 0, o(b, a); for (var S = V.length, p = 0; p !== S; p++) u.addEquation(V[p]);
                E.bodies = z, u.solve(e, E), u.removeAllEquations(), g++ } return g }, t.Material = function(t) { this.name = t, this.id = -1 }, t.ContactMaterial = function(t, e, i, n) { this.id = -1, this.materials = [t, e], this.friction = void 0 !== i ? Number(i) : .3, this.restitution = void 0 !== n ? Number(n) : .3, this.contactEquationStiffness = 1e7, this.contactEquationRegularizationTime = 3, this.frictionEquationStiffness = 1e7, this.frictionEquationRegularizationTime = 3 }, t.World = function() { t.EventTarget.apply(this), this.allowSleep = !1, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.last_dt = this.default_dt, this.nextId = 0, this.gravity = new t.Vec3, this.broadphase = null, this.bodies = [], this.solver = new t.GSSolver, this.constraints = [], this.contactgen = new t.ContactGenerator, this.collisionMatrix = [], this.collisionMatrixPrevious = [], this.materials = [], this.contactmaterials = [], this.mats2cmat = [], this.defaultMaterial = new t.Material("default"), this.defaultContactMaterial = new t.ContactMaterial(this.defaultMaterial, this.defaultMaterial, .3, 0), this.doProfiling = !1, this.profile = { solve: 0, makeContactConstraints: 0, broadphase: 0, integrate: 0, nearphase: 0 }, this.subsystems = [] }, t.World.prototype.getContactMaterial = function(e, i) { if (e instanceof t.Material && i instanceof t.Material) { var n = e.id,
                    o = i.id; if (o > n) { var a = n;
                    n = o, o = a } return this.contactmaterials[this.mats2cmat[n + o * this.materials.length]] } }, t.World.prototype.numObjects = function() { return this.bodies.length }, t.World.prototype.collisionMatrixGet = function(t, e, i) { if (e > t) { var n = e;
                e = t, t = n } return t = (t * (t + 1) >> 1) + e - 1, i === void 0 || i ? this.collisionMatrix[t] : this.collisionMatrixPrevious[t] }, t.World.prototype.collisionMatrixSet = function(t, e, i, n) { if (e > t) { var o = e;
                e = t, t = o }
            t = (t * (t + 1) >> 1) + e - 1, n === void 0 || n ? this.collisionMatrix[t] = i : this.collisionMatrixPrevious[t] = i }, t.World.prototype.collisionMatrixTick = function() { var t = this.collisionMatrixPrevious;
            this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t; for (var e = 0, i = this.collisionMatrix.length; e !== i; e++) this.collisionMatrix[e] = 0 }, t.World.prototype.add = function(e) { e.id = this.id(), e.index = this.bodies.length, this.bodies.push(e), e.world = this, e.position.copy(e.initPosition), e.velocity.copy(e.initVelocity), e.timeLastSleepy = this.time, e instanceof t.RigidBody && (e.angularVelocity.copy(e.initAngularVelocity), e.quaternion.copy(e.initQuaternion)); var i = this.numObjects();
            this.collisionMatrix.length = i * (i - 1) >> 1 }, t.World.prototype.addConstraint = function(t) { this.constraints.push(t), t.id = this.id() }, t.World.prototype.removeConstraint = function(t) { var e = this.constraints.indexOf(t); - 1 !== e && this.constraints.splice(e, 1) }, t.World.prototype.id = function() { return this.nextId++ }, t.World.prototype.remove = function(t) { t.world = null; var e = this.numObjects() - 1,
                i = this.bodies;
            i.splice(t.index, 1); for (var n = t.index; e > n; n++) i[n].index = n;
            this.collisionMatrixPrevious.length = this.collisionMatrix.length = e * (e - 1) >> 1 }, t.World.prototype.addMaterial = function(t) { if (-1 === t.id) { var e = this.materials.length;
                this.materials.push(t), t.id = this.materials.length - 1; for (var i = 0; i !== 2 * e + 1; i++) this.mats2cmat.push(-1) } }, t.World.prototype.addContactMaterial = function(t) { this.addMaterial(t.materials[0]), this.addMaterial(t.materials[1]); var e, i;
            t.materials[0].id > t.materials[1].id ? (e = t.materials[0].id, i = t.materials[1].id) : (i = t.materials[0].id, e = t.materials[1].id), this.contactmaterials.push(t), t.id = this.contactmaterials.length - 1, this.mats2cmat[e + this.materials.length * i] = t.id }, t.World.prototype._now = function() { return window.performance.webkitNow ? window.performance.webkitNow() : Date.now() };
        var Y = { type: "postStep" },
            Z = { type: "collide", "with": null, contact: null },
            _ = [],
            K = [],
            J = [],
            $ = [],
            te = new t.Vec3,
            ee = (new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Quaternion, new t.Quaternion),
            ie = new t.Quaternion;
        t.World.prototype.step = function(e) { var i, n = this.contacts,
                o = J,
                a = $,
                s = this.numObjects(),
                r = this.bodies,
                h = this.solver,
                c = this.gravity,
                l = this.doProfiling,
                u = this.profile,
                p = t.Body.DYNAMIC,
                d = this._now,
                v = this.constraints,
                y = t.FrictionEquation,
                f = K,
                m = c.norm(),
                w = c.x,
                b = c.y,
                x = c.z,
                g = 0; for (l && (i = d()), void 0 === e && (e = this.last_dt || this.default_dt), g = 0; g !== s; g++) { var V = r[g]; if (V.motionstate & p) { var z = V.force,
                        E = V.mass;
                    z.x += E * w, z.y += E * b, z.z += E * x } } for (var g = 0, S = this.subsystems.length; g !== S; g++) this.subsystems[g].update();
            l && (i = d()), o.length = 0, a.length = 0, this.broadphase.collisionPairs(this, o, a), l && (u.broadphase = d() - i), this.collisionMatrixTick(), l && (i = d()); var N = _,
                M = n.length; for (g = 0; g !== M; g++) N.push(n[g]);
            n.length = 0, this.contactgen.getContacts(o, a, this, n, N), l && (u.nearphase = d() - i), l && (i = d()); var P = n.length,
                q = this.frictionEquations.length; for (g = 0; g !== q; g++) f.push(this.frictionEquations[g]);
            this.frictionEquations.length = 0; for (var j = 0; j !== P; j++) { var C = n[j],
                    V = C.bi,
                    B = C.bj,
                    g = r.indexOf(V),
                    I = r.indexOf(B),
                    R = this.getContactMaterial(V.material, B.material) || this.defaultContactMaterial,
                    O = R.friction;
                R.restitution; var A = te;
                A.set(B.position.x + C.rj.x - V.position.x - C.ri.x, B.position.y + C.rj.y - V.position.y - C.ri.y, B.position.z + C.rj.z - V.position.z - C.ri.z); var T = A.dot(C.ni); if (0 > T) { if (C.restitution = R.restitution, C.penetration = T, C.stiffness = R.contactEquationStiffness, C.regularizationTime = R.contactEquationRegularizationTime, h.addEquation(C), O > 0) { var F = O * m,
                            k = V.invMass + B.invMass;
                        k > 0 && (k = 1 / k); var U = f,
                            W = U.length ? U.pop() : new y(V, B, F * k),
                            L = U.length ? U.pop() : new y(V, B, F * k);
                        this.frictionEquations.push(W), this.frictionEquations.push(L), W.bi = L.bi = V, W.bj = L.bj = B, W.minForce = L.minForce = -F * k, W.maxForce = L.maxForce = F * k, C.ri.copy(W.ri), C.rj.copy(W.rj), C.ri.copy(L.ri), C.rj.copy(L.rj), C.ni.tangents(W.t, L.t), h.addEquation(W), h.addEquation(L) }
                    this.collisionMatrixSet(g, I, 1, !0), this.collisionMatrixGet(g, I, !0) !== this.collisionMatrixGet(g, I, !1) && (Z.with = B, Z.contact = C, V.dispatchEvent(Z), Z.with = V, B.dispatchEvent(Z), V.wakeUp(), B.wakeUp()) } }
            l && (u.makeContactConstraints = d() - i), l && (i = d()); var D = v.length; for (g = 0; g !== D; g++) { var C = v[g];
                C.update(); for (var I = 0, H = C.equations.length; I !== H; I++) { var Q = C.equations[I];
                    h.addEquation(Q) } }
            h.solve(e, this), l && (u.solve = d() - i), h.removeAllEquations(); var X = Math.pow; for (g = 0; g !== s; g++) { var V = r[g]; if (V.motionstate & p) { var G = X(1 - V.linearDamping, e),
                        ne = V.velocity;
                    ne.mult(G, ne); var oe = V.angularVelocity; if (oe) { var ae = X(1 - V.angularDamping, e);
                        oe.mult(ae, oe) } } } for (this.dispatchEvent(Y), g = 0; g !== s; g++) { var V = r[g];
                V.preStep && V.preStep.call(V) }
            l && (i = d()); var se = ee,
                re = ie,
                he = this.stepnumber,
                ce = t.Body.DYNAMIC | t.Body.KINEMATIC,
                le = 0 === he % (this.quatNormalizeSkip + 1),
                ue = this.quatNormalizeFast,
                pe = .5 * e,
                de = t.Shape.types.PLANE,
                ve = t.Shape.types.CONVEXPOLYHEDRON; for (g = 0; g !== s; g++) { var ye = r[g],
                    fe = ye.shape,
                    me = ye.force,
                    we = ye.tau; if (ye.motionstate & ce) { var be = ye.velocity,
                        xe = ye.angularVelocity,
                        ge = ye.position,
                        Ve = ye.quaternion,
                        ze = ye.invMass,
                        Ee = ye.invInertia; if (be.x += me.x * ze * e, be.y += me.y * ze * e, be.z += me.z * ze * e, ye.angularVelocity && (xe.x += we.x * Ee.x * e, xe.y += we.y * Ee.y * e, xe.z += we.z * Ee.z * e), ye.isSleeping() || (ge.x += be.x * e, ge.y += be.y * e, ge.z += be.z * e, ye.angularVelocity && (se.set(xe.x, xe.y, xe.z, 0), se.mult(Ve, re), Ve.x += pe * re.x, Ve.y += pe * re.y, Ve.z += pe * re.z, Ve.w += pe * re.w, le && (ue ? Ve.normalizeFast() : Ve.normalize())), ye.aabbmin && (ye.aabbNeedsUpdate = !0)), fe) switch (fe.type) {
                        case de:
                            fe.worldNormalNeedsUpdate = !0; break;
                        case ve:
                            fe.worldFaceNormalsNeedsUpdate = !0, fe.worldVerticesNeedsUpdate = !0 } }
                ye.force.set(0, 0, 0), ye.tau && ye.tau.set(0, 0, 0) } for (l && (u.integrate = d() - i), this.time += e, this.stepnumber += 1, this.dispatchEvent(Y), g = 0; g !== s; g++) { var V = r[g],
                    Se = V.postStep;
                Se && Se.call(V) } for (g = 0; g !== s; g++) { var ye = r[g];
                ye.inertiaWorldAutoUpdate && ye.quaternion.vmult(ye.inertia, ye.inertiaWorld), ye.invInertiaWorldAutoUpdate && ye.quaternion.vmult(ye.invInertia, ye.invInertiaWorld) } if (this.allowSleep)
                for (g = 0; g !== s; g++) r[g].sleepTick(this.time) }, t.ContactGenerator = function() {
            function e(e, i) { if (f.length) { var n = f.pop(); return n.bi = e, n.bj = i, n } return new t.ContactEquation(e, i) }

            function i(t) { var e;
                e = t.ri, t.ri = t.rj, t.rj = e, t.ni.negate(t.ni), e = t.bi, t.bi = t.bj, t.bj = e }

            function n(t, i, n, o, a, s, r, h, c) { var l = e(h, c);
                c.position.vsub(o, l.ni), l.ni.normalize(), l.ni.copy(l.ri), l.ni.copy(l.rj), l.ri.mult(i.radius, l.ri), l.rj.mult(-n.radius, l.rj), t.push(l) }

            function o(t, i, n, o, a, s, r, h, c) { var l = e(h, c);
                l.ni.set(0, 0, 1), r.vmult(l.ni, l.ni), l.ni.negate(l.ni), l.ni.normalize(), l.ni.mult(i.radius, l.ri), o.vsub(a, w), l.ni.mult(l.ni.dot(w), b), w.vsub(b, l.rj), b.norm2() <= i.radius * i.radius && t.push(l) }

            function a(t, e, i) { for (var n = null, o = t.length, a = 0; a !== o; a++) { var s = t[a],
                        r = x;
                    t[(a + 1) % o].vsub(s, r); var h = g;
                    r.cross(e, h); var c = V;
                    i.vsub(s, c); var l = h.dot(c); if (!(null === n || l > 0 && n === !0 || 0 >= l && n === !1)) return !1;
                    null === n && (n = l > 0) } return !0 }

            function s(t, i, n, o, a, s, r, h, c) { var l = M;
                o.vsub(a, z), n.getSideNormals(l, r); for (var u = i.radius, p = !1, d = q, v = j, y = C, f = null, w = 0, b = 0, x = 0, g = null, V = 0, B = l.length; V !== B && p === !1; V++) { var I = E;
                    l[V].copy(I); var R = I.norm();
                    I.normalize(); var O = z.dot(I); if (R + u > O && O > 0) { var A = S,
                            T = N;
                        l[(V + 1) % 3].copy(A), l[(V + 2) % 3].copy(T); var F = A.norm(),
                            k = T.norm();
                        A.normalize(), T.normalize(); var U = z.dot(A),
                            W = z.dot(T); if (F > U && U > -F && k > W && W > -k) { var L = Math.abs(O - R - u);
                            (null === g || g > L) && (g = L, b = U, x = W, f = R, I.copy(d), A.copy(v), T.copy(y), w++) } } } if (w) { p = !0; var D = e(h, c);
                    d.mult(-u, D.ri), d.copy(D.ni), D.ni.negate(D.ni), d.mult(f, d), v.mult(b, v), d.vadd(v, d), y.mult(x, y), d.vadd(y, D.rj), t.push(D) } for (var H = m.get(), Q = P, X = 0; 2 !== X && !p; X++)
                    for (var G = 0; 2 !== G && !p; G++)
                        for (var Y = 0; 2 !== Y && !p; Y++)
                            if (H.set(0, 0, 0), X ? H.vadd(l[0], H) : H.vsub(l[0], H), G ? H.vadd(l[1], H) : H.vsub(l[1], H), Y ? H.vadd(l[2], H) : H.vsub(l[2], H), a.vadd(H, Q), Q.vsub(o, Q), u * u > Q.norm2()) { p = !0; var D = e(h, c);
                                Q.copy(D.ri), D.ri.normalize(), D.ri.copy(D.ni), D.ri.mult(u, D.ri), H.copy(D.rj), t.push(D) }
                m.release(H), H = null; for (var Z = m.get(), _ = m.get(), D = m.get(), K = m.get(), L = m.get(), J = l.length, X = 0; X !== J && !p; X++)
                    for (var G = 0; G !== J && !p; G++)
                        if (X % 3 !== G % 3) { l[G].cross(l[X], Z), Z.normalize(), l[X].vadd(l[G], _), o.copy(D), D.vsub(_, D), D.vsub(a, D); var $ = D.dot(Z);
                            Z.mult($, K); for (var Y = 0; Y === X % 3 || Y === G % 3;) Y++;
                            o.copy(L), L.vsub(K, L), L.vsub(_, L), L.vsub(a, L); var te = Math.abs($),
                                ee = L.norm(); if (l[Y].norm() > te && u > ee) { p = !0; var ie = e(h, c);
                                _.vadd(K, ie.rj), ie.rj.copy(ie.rj), L.negate(ie.ni), ie.ni.normalize(), ie.rj.copy(ie.ri), ie.ri.vadd(a, ie.ri), ie.ri.vsub(o, ie.ri), ie.ri.normalize(), ie.ri.mult(u, ie.ri), t.push(ie) } }
                m.release(Z, _, D, K, L) }

            function r(t, i, n, o, s, r, h, c, l) { o.vsub(s, B); for (var u = n.faceNormals, p = n.faces, d = n.vertices, v = i.radius, y = 0; y !== d.length; y++) { var f = d[y],
                        w = A;
                    h.vmult(f, w), s.vadd(w, w); var b = O; if (w.vsub(o, b), v * v > b.norm2()) { g = !0; var x = e(c, l); return b.copy(x.ri), x.ri.normalize(), x.ri.copy(x.ni), x.ri.mult(v, x.ri), w.vsub(s, x.rj), t.push(x), void 0 } } for (var g = !1, y = 0, V = p.length; y !== V && g === !1; y++) { var z = u[y],
                        E = p[y],
                        S = T;
                    h.vmult(z, S); var N = F;
                    h.vmult(d[E[0]], N), N.vadd(s, N); var M = k;
                    S.mult(-v, M), o.vadd(M, M); var P = U;
                    M.vsub(N, P); var q = P.dot(S),
                        j = W; if (o.vsub(N, j), 0 > q && j.dot(S) > 0) { for (var C = [], L = 0, D = E.length; L !== D; L++) { var H = m.get();
                            h.vmult(d[E[L]], H), s.vadd(H, H), C.push(H) } if (a(C, S, o)) { g = !0; var x = e(c, l);
                            S.mult(-v, x.ri), S.negate(x.ni); var Q = m.get();
                            S.mult(-q, Q); var X = m.get();
                            S.mult(-v, X), o.vsub(s, x.rj), x.rj.vadd(X, x.rj), x.rj.vadd(Q, x.rj), m.release(Q), m.release(X), t.push(x); for (var L = 0, G = C.length; L !== G; L++) m.release(C[L]); return } for (var L = 0; L !== E.length; L++) { var Y = m.get(),
                                Z = m.get();
                            h.vmult(d[E[(L + 1) % E.length]], Y), h.vmult(d[E[(L + 2) % E.length]], Z), s.vadd(Y, Y), s.vadd(Z, Z); var _ = I;
                            Z.vsub(Y, _); var K = R;
                            _.unit(K); var J = m.get(),
                                $ = m.get();
                            o.vsub(Y, $); var te = $.dot(K);
                            K.mult(te, J), J.vadd(Y, J); var ee = m.get(); if (J.vsub(o, ee), te > 0 && _.norm2() > te * te && v * v > ee.norm2()) { var x = e(c, l);
                                J.vsub(s, x.rj), J.vsub(o, x.ni), x.ni.normalize(), x.ni.mult(v, x.ri), t.push(x); for (var L = 0, G = C.length; L !== G; L++) m.release(C[L]); return m.release(Y), m.release(Z), m.release(J), m.release(ee), m.release($), void 0 }
                            m.release(Y), m.release(Z), m.release(J), m.release(ee), m.release($) } for (var L = 0, G = C.length; L !== G; L++) m.release(C[L]) } } }

            function h(t, e, i, n, o, a, s, r, h) { l(t, e, i.convexPolyhedronRepresentation, n, o, a, s, r, h) }

            function c(e, i, n, o, a, s, r, h, c) { for (var l = L, u = D, p = 0, d = 0, v = n.childShapes.length; d !== v; d++) { var f = [],
                        m = u.pop() || new t.Quaternion,
                        w = l.pop() || new t.Vec3;
                    r.mult(n.childOrientations[d], m), m.normalize(), r.vmult(n.childOffsets[d], w), a.vadd(w, w), y(f, i, n.childShapes[d], o, w, s, m, h, c), u.push(m); var b = w;
                    i || (p += f.length); for (var x = 0; x !== f.length; x++) r.vmult(n.childOffsets[d], b), f[x].rj.vadd(b, f[x].rj), e.push(f[x]);
                    l.push(w) } }

            function l(t, i, n, o, a, s, r, h, c) { var l = H,
                    u = Q;
                u.set(0, 0, 1), s.vmult(u, u); for (var p = X, d = 0; d !== n.vertices.length; d++) { n.vertices[d].copy(l), r.vmult(l, l), a.vadd(l, l), l.vsub(o, p); var v = u.dot(p); if (0 >= v) { var y = G;
                        u.mult(u.dot(l), y), l.vsub(y, y); var f = e(h, c);
                        u.copy(f.ni), y.copy(f.ri), l.vsub(a, f.rj), t.push(f) } } }

            function u(t, i, n, o, a, s, r, h, c) { var l = Y; if (i.findSeparatingAxis(n, o, s, a, r, l)) { var u = [],
                        p = Z;
                    i.clipAgainstHull(o, s, n, a, r, l, -100, 100, u); for (var d = 0; d !== u.length; d++) { var v = e(h, c);
                        l.negate(v.ni), u[d].normal.negate(p), p.mult(u[d].depth, p), u[d].point.vadd(p, v.ri), u[d].point.copy(v.rj), v.rj.vsub(a, v.rj), v.ri.vsub(o, v.ri), t.push(v) } } }

            function p(t, i, n, o, a, s, r, h, c) { var l = _;
                l.set(0, 0, 1), c.quaternion.vmult(l, l); var u = K;
                o.vsub(c.position, u); var p = l.dot(u); if (0 >= p) { var d = e(h, c);
                    l.copy(d.ni), d.ni.negate(d.ni), d.ri.set(0, 0, 0); var v = J;
                    l.mult(l.dot(o), v), o.vsub(v, v), v.copy(d.rj), t.push(d) } }

            function d(t, i, n, o, a, s, r, h, c) { var l = $;
                l.set(0, 0, 1), o.vsub(a, l); var u = l.norm2(); if (n.radius * n.radius >= u) { var p = e(h, c);
                    l.normalize(), l.copy(p.rj), p.rj.mult(n.radius, p.rj), l.copy(p.ni), p.ni.negate(p.ni), p.ri.set(0, 0, 0), t.push(p) } }

            function v(t, i, n, o, a, s, r, h, c) { var l = -1,
                    u = ie,
                    p = oe,
                    d = null,
                    v = 0,
                    y = ee; if (o.copy(y), y.vsub(a, y), r.conjugate(te), te.vmult(y, y), n.pointIsInside(y)) { n.worldVerticesNeedsUpdate && n.computeWorldVertices(a, r), n.worldFaceNormalsNeedsUpdate && n.computeWorldFaceNormals(r); for (var f = 0, m = n.faces.length; f !== m; f++) { var w = [n.worldVertices[n.faces[f][0]]],
                            b = n.worldFaceNormals[f];
                        o.vsub(w[0], ne); var x = -b.dot(ne);
                        (null === d || Math.abs(x) < Math.abs(d)) && (d = x, l = f, b.copy(u), v++) } if (-1 !== l) { var g = e(h, c);
                        u.mult(d, p), p.vadd(o, p), p.vsub(a, p), p.copy(g.rj), u.negate(g.ni), g.ri.set(0, 0, 0), t.push(g) } else console.warn("Point found inside convex, but did not find penetrating face!") } }

            function y(e, a, f, m, w, b, x, g, V) { var z = !1,
                    E = t.Shape.types,
                    S = E.SPHERE,
                    N = E.PLANE,
                    M = E.BOX,
                    P = E.COMPOUND,
                    q = E.CONVEXPOLYHEDRON; if (a && f) { if (a.type > f.type) { var j;
                        j = f, f = a, a = j, j = w, w = m, m = j, j = x, x = b, b = j, j = V, V = g, g = j, z = !0 } } else if (a && !f) { var j;
                    j = f, f = a, a = j, j = w, w = m, m = j, j = x, x = b, b = j, j = V, V = g, g = j, z = !0 } if (a && f) { if (a.type === S) switch (f.type) {
                        case S:
                            n(e, a, f, m, w, b, x, g, V); break;
                        case N:
                            o(e, a, f, m, w, b, x, g, V); break;
                        case M:
                            s(e, a, f, m, w, b, x, g, V); break;
                        case P:
                            c(e, a, f, m, w, b, x, g, V); break;
                        case q:
                            r(e, a, f, m, w, b, x, g, V); break;
                        default:
                            console.warn("Collision between CANNON.Shape.types.SPHERE and " + f.type + " not implemented yet.") } else if (a.type === E.PLANE) switch (f.type) {
                        case E.PLANE:
                            throw Error("Plane-plane collision... wait, you did WHAT?");
                        case E.BOX:
                            h(e, a, f, m, w, b, x, g, V); break;
                        case E.COMPOUND:
                            c(e, a, f, m, w, b, x, g, V); break;
                        case E.CONVEXPOLYHEDRON:
                            l(e, a, f, m, w, b, x, g, V); break;
                        default:
                            console.warn("Collision between CANNON.Shape.types.PLANE and " + f.type + " not implemented yet.") } else if (a.type === E.BOX) switch (f.type) {
                        case E.BOX:
                            y(e, a.convexPolyhedronRepresentation, f.convexPolyhedronRepresentation, m, w, b, x, g, V); break;
                        case E.COMPOUND:
                            c(e, a, f, m, w, b, x, g, V); break;
                        case E.CONVEXPOLYHEDRON:
                            y(e, a.convexPolyhedronRepresentation, f, m, w, b, x, g, V); break;
                        default:
                            console.warn("Collision between CANNON.Shape.types.BOX and " + f.type + " not implemented yet.") } else if (a.type === E.COMPOUND) switch (f.type) {
                        case E.COMPOUND:
                            c(e, a, f, m, w, b, x, g, V); break;
                        case E.CONVEXPOLYHEDRON:
                            var C = [];
                            c(C, f, a, w, m, x, b, V, g); for (var B = 0; B !== C.length; B++) i(C[B]), e.push(C[B]); break;
                        default:
                            console.warn("Collision between CANNON.Shape.types.COMPOUND and " + f.type + " not implemented yet.") } else if (a.type === E.CONVEXPOLYHEDRON) switch (f.type) {
                        case E.CONVEXPOLYHEDRON:
                            u(e, a, f, m, w, b, x, g, V); break;
                        default:
                            console.warn("Collision between CANNON.Shape.types.CONVEXPOLYHEDRON and " + f.type + " not implemented yet.") } } else switch (f.type) {
                    case E.PLANE:
                        p(e, a, f, m, w, b, x, g, V); break;
                    case E.SPHERE:
                        d(e, a, f, m, w, b, x, g, V); break;
                    case E.BOX:
                        v(e, a, f.convexPolyhedronRepresentation, m, w, b, x, g, V); break;
                    case E.CONVEXPOLYHEDRON:
                        v(e, a, f, m, w, b, x, g, V); break;
                    case E.COMPOUND:
                        c(e, a, f, m, w, b, x, g, V); break;
                    default:
                        console.warn("Collision between CANNON.Particle and " + f.type + " not implemented yet.") }
                for (var I = 0, R = e.length; z && I !== R; I++) i(e[I]) }
            this.contactReduction = !1; var f = [],
                m = new t.Vec3Pool,
                w = new t.Vec3,
                b = new t.Vec3,
                x = new t.Vec3,
                g = new t.Vec3,
                V = new t.Vec3,
                z = new t.Vec3,
                E = new t.Vec3,
                S = new t.Vec3,
                N = new t.Vec3,
                M = [new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3, new t.Vec3],
                P = new t.Vec3,
                q = new t.Vec3,
                j = new t.Vec3,
                C = new t.Vec3,
                B = new t.Vec3,
                I = new t.Vec3,
                R = new t.Vec3,
                O = new t.Vec3,
                A = new t.Vec3,
                T = new t.Vec3,
                F = new t.Vec3,
                k = new t.Vec3,
                U = new t.Vec3,
                W = new t.Vec3;
            new t.Vec3, new t.Vec3; var L = [],
                D = [],
                H = new t.Vec3,
                Q = new t.Vec3,
                X = new t.Vec3,
                G = new t.Vec3,
                Y = new t.Vec3,
                Z = new t.Vec3,
                _ = new t.Vec3,
                K = new t.Vec3,
                J = new t.Vec3,
                $ = new t.Vec3,
                te = new t.Quaternion,
                ee = new t.Vec3;
            new t.Vec3; var ie = new t.Vec3,
                ne = new t.Vec3,
                oe = new t.Vec3;
            this.reduceContacts = function() {}, this.getContacts = function(t, e, i, n, o) { f = o; for (var a = 0, s = t.length; a !== s; a++) { var r = t[a],
                        h = e[a];
                    y(n, r.shape, h.shape, r.position, h.position, r.quaternion, h.quaternion, r, h) } } }, t.Equation = function(t, e, i, n) { this.id = -1, this.minForce = i === void 0 ? -1e6 : i, this.maxForce = n === void 0 ? 1e6 : n, this.bi = t, this.bj = e, this.stiffness = 1e7, this.regularizationTime = 5, this.a = 0, this.b = 0, this.eps = 0, this.spookParamsNeedsUpdate = !0 }, t.Equation.prototype.constructor = t.Equation, t.Equation.prototype.updateSpookParams = function(t) { var e = this.regularizationTime,
                i = this.stiffness;
            this.a = 4 / (t * (1 + 4 * e)), this.b = 4 * e / (1 + 4 * e), this.eps = 4 / (t * t * i * (1 + 4 * e)) }, t.ContactEquation = function(e, i) { t.Equation.call(this, e, i, 0, 1e6), this.restitution = 0, this.ri = new t.Vec3, this.rj = new t.Vec3, this.penetrationVec = new t.Vec3, this.ni = new t.Vec3, this.rixn = new t.Vec3, this.rjxn = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.biInvInertiaTimesRixn = new t.Vec3, this.bjInvInertiaTimesRjxn = new t.Vec3 }, t.ContactEquation.prototype = new t.Equation, t.ContactEquation.prototype.constructor = t.ContactEquation, t.ContactEquation.prototype.reset = function() { this.invInertiaTimesRxnNeedsUpdate = !0 };
        var ne = new t.Vec3,
            oe = new t.Vec3,
            ae = new t.Vec3;
        t.ContactEquation.prototype.computeB = function(t) { var e = this.a,
                i = this.b,
                n = this.bi,
                o = this.bj,
                a = this.ri,
                s = this.rj,
                r = this.rixn,
                h = this.rjxn,
                c = ae,
                l = n.velocity,
                u = n.angularVelocity ? n.angularVelocity : c,
                p = n.force,
                d = n.tau ? n.tau : c,
                v = o.velocity,
                y = o.angularVelocity ? o.angularVelocity : c,
                f = o.force,
                m = o.tau ? o.tau : c,
                w = this.penetrationVec,
                b = n.invMass,
                x = o.invMass,
                g = this.invIi,
                V = this.invIj;
            n.invInertia ? g.setTrace(n.invInertia) : g.identity(), o.invInertia ? V.setTrace(o.invInertia) : V.identity(); var z = this.ni;
            a.cross(z, r), s.cross(z, h); var w = this.penetrationVec;
            w.set(0, 0, 0), w.vadd(o.position, w), w.vadd(s, w), w.vsub(n.position, w), w.vsub(a, w); var E = z.dot(w),
                S = ne,
                N = oe;
            g.vmult(d, S), V.vmult(m, N); var M = this.restitution + 1,
                P = M * v.dot(z) - M * l.dot(z) + y.dot(h) - u.dot(r),
                q = f.dot(z) * x - p.dot(z) * b + h.dot(N) - r.dot(S),
                j = -E * e - P * i - t * q; return j }, new t.Vec3, new t.Vec3, t.ContactEquation.prototype.computeC = function() { var t = this.bi,
                e = this.bj,
                i = this.rixn,
                n = this.rjxn,
                o = t.invMass,
                a = e.invMass,
                s = o + a + this.eps,
                r = this.invIi,
                h = this.invIj; return r.vmult(i, this.biInvInertiaTimesRixn), h.vmult(n, this.bjInvInertiaTimesRjxn), s += this.biInvInertiaTimesRixn.dot(i), s += this.bjInvInertiaTimesRjxn.dot(n) };
        var se = new t.Vec3;
        t.ContactEquation.prototype.computeGWlambda = function() { var t = this.bi,
                e = this.bj,
                i = se,
                n = 0; return e.vlambda.vsub(t.vlambda, i), n += i.dot(this.ni), t.wlambda && (n -= t.wlambda.dot(this.rixn)), e.wlambda && (n += e.wlambda.dot(this.rjxn)), n };
        var re = new t.Vec3,
            he = new t.Vec3;
        t.ContactEquation.prototype.addToWlambda = function(t) { var e = this.bi,
                i = this.bj,
                n = (this.rixn, this.rjxn, e.invMass),
                o = i.invMass,
                a = this.ni,
                s = re,
                r = he;
            a.mult(n * t, r), e.vlambda.vsub(r, e.vlambda), a.mult(o * t, r), i.vlambda.vadd(r, i.vlambda), void 0 !== e.wlambda && (this.biInvInertiaTimesRixn.mult(t, s), e.wlambda.vsub(s, e.wlambda)), void 0 !== i.wlambda && (this.bjInvInertiaTimesRjxn.mult(t, s), i.wlambda.vadd(s, i.wlambda)) }, t.FrictionEquation = function(e, i, n) { t.Equation.call(this, e, i, -n, n), this.ri = new t.Vec3, this.rj = new t.Vec3, this.t = new t.Vec3, this.rixt = new t.Vec3, this.rjxt = new t.Vec3, this.wixri = new t.Vec3, this.wjxrj = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.relVel = new t.Vec3, this.relForce = new t.Vec3, this.biInvInertiaTimesRixt = new t.Vec3, this.bjInvInertiaTimesRjxt = new t.Vec3 }, t.FrictionEquation.prototype = new t.Equation, t.FrictionEquation.prototype.constructor = t.FrictionEquation;
        var ce = new t.Vec3,
            le = new t.Vec3,
            ue = new t.Vec3;
        t.FrictionEquation.prototype.computeB = function(t) { var e = this.a,
                i = this.b,
                n = this.bi,
                o = this.bj,
                a = this.ri,
                s = this.rj,
                r = this.rixt,
                h = this.rjxt,
                c = this.wixri,
                l = this.wjxrj,
                u = ue,
                p = n.velocity,
                d = n.angularVelocity ? n.angularVelocity : u,
                v = n.force,
                y = n.tau ? n.tau : u,
                f = o.velocity,
                m = o.angularVelocity ? o.angularVelocity : u,
                w = o.force,
                b = o.tau ? o.tau : u,
                x = (this.relVel, this.relForce, n.invMass),
                g = o.invMass,
                V = this.invIi,
                z = this.invIj,
                E = this.t,
                S = ce,
                N = le;
            n.invInertia && V.setTrace(n.invInertia), o.invInertia && z.setTrace(o.invInertia), a.cross(E, r), s.cross(E, h), d.cross(a, c), m.cross(s, l), V.vmult(y, S), z.vmult(b, N); var M = 0,
                P = f.dot(E) - p.dot(E) + l.dot(E) - c.dot(E),
                q = w.dot(E) * g - v.dot(E) * x + h.dot(N) - r.dot(S),
                j = -M * e - P * i - t * q; return j }, t.FrictionEquation.prototype.computeC = function() { var t = this.bi,
                e = this.bj,
                i = this.rixt,
                n = this.rjxt,
                o = t.invMass,
                a = e.invMass,
                s = o + a + this.eps,
                r = this.invIi,
                h = this.invIj; return r.vmult(i, this.biInvInertiaTimesRixt), h.vmult(n, this.bjInvInertiaTimesRjxt), s += this.biInvInertiaTimesRixt.dot(i), s += this.bjInvInertiaTimesRjxt.dot(n) };
        var pe = new t.Vec3;
        t.FrictionEquation.prototype.computeGWlambda = function() { var t = this.bi,
                e = this.bj,
                i = 0,
                n = pe; return e.vlambda.vsub(t.vlambda, n), i += n.dot(this.t), t.wlambda && (i -= t.wlambda.dot(this.rixt)), e.wlambda && (i += e.wlambda.dot(this.rjxt)), i };
        var de = new t.Vec3;
        t.FrictionEquation.prototype.addToWlambda = function(t) { var e = this.bi,
                i = this.bj,
                n = (this.rixt, this.rjxt, e.invMass),
                o = i.invMass,
                a = this.t,
                s = de,
                r = e.wlambda,
                h = i.wlambda;
            a.mult(n * t, s), e.vlambda.vsub(s, e.vlambda), a.mult(o * t, s), i.vlambda.vadd(s, i.vlambda), r && (this.biInvInertiaTimesRixt.mult(t, s), r.vsub(s, r)), h && (this.bjInvInertiaTimesRjxt.mult(t, s), h.vadd(s, h)) }, t.RotationalEquation = function(e, i) { t.Equation.call(this, e, i, -1e6, 1e6), this.ni = new t.Vec3, this.nj = new t.Vec3, this.nixnj = new t.Vec3, this.njxni = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.relVel = new t.Vec3, this.relForce = new t.Vec3 }, t.RotationalEquation.prototype = new t.Equation, t.RotationalEquation.prototype.constructor = t.RotationalEquation, t.RotationalEquation.prototype.computeB = function(e) { var i = this.a,
                n = this.b,
                o = this.bi,
                a = this.bj,
                s = this.ni,
                r = this.nj,
                h = this.nixnj,
                c = this.njxni;
            o.velocity; var l = o.angularVelocity ? o.angularVelocity : new t.Vec3;
            o.force, o.tau ? o.tau : new t.Vec3, a.velocity; var u = a.angularVelocity ? a.angularVelocity : new t.Vec3;
            a.force, a.tau ? a.tau : new t.Vec3, o.invMass, a.invMass; var p = this.invIi,
                d = this.invIj;
            o.invInertia ? p.setTrace(o.invInertia) : p.identity(), a.invInertia ? d.setTrace(a.invInertia) : d.identity(), s.cross(r, h), r.cross(s, c); var v = -s.dot(r),
                y = c.dot(l) + h.dot(u),
                f = 0,
                m = -v * i - y * n - e * f; return m }, t.RotationalEquation.prototype.computeC = function() { var t = this.bi,
                e = this.bj,
                i = this.nixnj,
                n = this.njxni;
            t.invMass, e.invMass; var o = this.eps,
                a = this.invIi,
                s = this.invIj; return t.invInertia ? a.setTrace(t.invInertia) : a.identity(), e.invInertia ? s.setTrace(e.invInertia) : s.identity(), o += a.vmult(n).dot(n), o += s.vmult(i).dot(i) };
        var se = new t.Vec3;
        t.RotationalEquation.prototype.computeGWlambda = function() { var t = this.bi,
                e = this.bj,
                i = 0; return t.wlambda && (i += t.wlambda.dot(this.njxni)), e.wlambda && (i += e.wlambda.dot(this.nixnj)), i }, t.RotationalEquation.prototype.addToWlambda = function(t) { var e = this.bi,
                i = this.bj,
                n = this.nixnj; if (this.njxni, e.invMass, i.invMass, e.wlambda) { var o = this.invIi;
                e.wlambda.vsub(o.vmult(n).mult(t), e.wlambda) } if (i.wlambda) { var o = this.invIj;
                i.wlambda.vadd(o.vmult(n).mult(t), i.wlambda) } }, t.Constraint = function(t, e) { this.equations = [], this.bodyA = t, this.bodyB = e }, t.Constraint.prototype.update = function() { throw Error("method update() not implmemented in this Constraint subclass!") }, t.DistanceConstraint = function(e, i, n, o) { t.Constraint.call(this, e, i), o === void 0 && (o = 1e6); var a = this.equations = [new t.ContactEquation(e, i)],
                s = a[0];
            s.minForce = -o, s.maxForce = o, this.update = function() { i.position.vsub(e.position, s.ni), s.ni.normalize(), s.ni.mult(.5 * n, s.ri), s.ni.mult(.5 * -n, s.rj) } }, t.DistanceConstraint.prototype = new t.Constraint, t.RotationalMotorEquation = function(e, i, n) { n = n || 1e6, t.Equation.call(this, e, i, -n, n), this.axisA = new t.Vec3, this.axisB = new t.Vec3, this.invIi = new t.Mat3, this.invIj = new t.Mat3, this.targetVelocity = 0 }, t.RotationalMotorEquation.prototype = new t.Equation, t.RotationalMotorEquation.prototype.constructor = t.RotationalMotorEquation, t.RotationalMotorEquation.prototype.computeB = function(e) {
            var i = this.a,
                n = this.b,
                o = this.bi,
                a = this.bj,
                s = this.axisA,
                r = this.axisB;
            o.velocity;
            var h = o.angularVelocity ? o.angularVelocity : new t.Vec3;
            o.force, o.tau ? o.tau : new t.Vec3, a.velocity;
            var c = a.angularVelocity ? a.angularVelocity : new t.Vec3;
            a.force, a.tau ? a.tau : new t.Vec3, o.invMass, a.invMass;
            var l = this.invIi,
                u = this.invIj;
            o.invInertia ? l.setTrace(o.invInertia) : l.identity(), a.invInertia ? u.setTrace(a.invInertia) : u.identity();
            var p = 0,
                d = s.dot(h) + r.dot(c) + this.targetVelocity,
                v = 0,
                y = -p * i - d * n - e * v;
            return y
        }, t.RotationalMotorEquation.prototype.computeC = function() { var t = this.bi,
                e = this.bj,
                i = this.axisA,
                n = this.axisB;
            t.invMass, e.invMass; var o = this.eps,
                a = this.invIi,
                s = this.invIj; return t.invInertia ? a.setTrace(t.invInertia) : a.identity(), e.invInertia ? s.setTrace(e.invInertia) : s.identity(), o += a.vmult(i).dot(n), o += s.vmult(n).dot(n) };
        var se = new t.Vec3;
        t.RotationalMotorEquation.prototype.computeGWlambda = function() { var t = this.bi,
                e = this.bj,
                i = this.axisA,
                n = this.axisB,
                o = 0; return t.wlambda && (o += t.wlambda.dot(i)), e.wlambda && (o += e.wlambda.dot(n)), o }, t.RotationalMotorEquation.prototype.addToWlambda = function(t) { var e = this.bi,
                i = this.bj,
                n = this.axisA,
                o = this.axisB; if (e.invMass, i.invMass, e.wlambda) { var a = this.invIi;
                e.wlambda.vsub(a.vmult(n).mult(t), e.wlambda) } if (i.wlambda) { var a = this.invIj;
                i.wlambda.vadd(a.vmult(o).mult(t), i.wlambda) } }, t.HingeConstraint = function(e, i, n, o, a, s, r) { t.Constraint.call(this, e, o), r = r || 1e6; var h = this,
                c = this.equations = [new t.RotationalEquation(e, o), new t.RotationalEquation(e, o), new t.ContactEquation(e, o), new t.ContactEquation(e, o), new t.ContactEquation(e, o)];
            this.getRotationalEquation1 = function() { return c[0] }, this.getRotationalEquation2 = function() { return c[1] }, this.getPointToPointEquation1 = function() { return c[2] }, this.getPointToPointEquation2 = function() { return c[3] }, this.getPointToPointEquation3 = function() { return c[4] }; var l, u = this.getRotationalEquation1(),
                p = this.getRotationalEquation2(),
                d = this.getPointToPointEquation1(),
                v = this.getPointToPointEquation2(),
                y = this.getPointToPointEquation3();
            v.minForce = y.minForce = d.minForce = -r, v.maxForce = y.maxForce = d.maxForce = r; var f = i.unit(),
                m = a.unit(),
                w = new t.Vec3,
                b = new t.Vec3,
                x = new t.Vec3;
            n.cross(f, w), n.cross(w, b), s.cross(m, x), w.normalize(), x.normalize(); var g = !1;
            this.motorTargetVelocity = 0, this.motorMinForce = -r, this.motorMaxForce = r, this.enableMotor = function() { g || (l = new t.RotationalMotorEquation(e, o, r), c.push(l), g = !0) }, this.disableMotor = function() { g && (g = !1, l = null, c.pop()) }, this.update = function() { d.ni.set(1, 0, 0), v.ni.set(0, 1, 0), y.ni.set(0, 0, 1), e.quaternion.vmult(i, d.ri), o.quaternion.vmult(a, d.rj), d.ri.copy(v.ri), d.rj.copy(v.rj), d.ri.copy(y.ri), d.rj.copy(y.rj), e.quaternion.vmult(w, u.ni), o.quaternion.vmult(s, u.nj), e.quaternion.vmult(b, p.ni), o.quaternion.vmult(s, p.nj), g && (e.quaternion.vmult(n, l.axisA), o.quaternion.vmult(s, l.axisB), l.targetVelocity = h.motorTargetVelocity, l.maxForce = h.motorMaxForce, l.minForce = h.motorMinForce) } }, t.HingeConstraint.prototype = new t.Constraint, t.PointToPointConstraint = function(e, i, n, o, a) { t.Constraint.call(this, e, n); var s = this.equations = [new t.ContactEquation(e, n), new t.ContactEquation(e, n), new t.ContactEquation(e, n)],
                r = s[0],
                h = s[1],
                c = s[2];
            h.minForce = c.minForce = r.minForce = -a, h.maxForce = c.maxForce = r.maxForce = a, this.update = function() { n.position.vsub(e.position, r.ni), r.ni.normalize(), e.quaternion.vmult(i, r.ri), n.quaternion.vmult(o, r.rj), r.ni.tangents(h.ni, c.ni), r.ri.copy(h.ri), r.rj.copy(h.rj), r.ri.copy(c.ri), r.rj.copy(c.rj) } }, t.PointToPointConstraint.prototype = new t.Constraint, "undefined" != typeof module ? module.exports = t : this.CANNON = t
    }).apply(this);

}
/*
     FILE ARCHIVED ON 10:45:27 Aug 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:16:28 May 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 85.503
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.053
  RedisCDXSource: 1.599
  esindex: 0.006
  LoadShardBlock: 67.051 (3)
  PetaboxLoader3.datanode: 129.658 (5)
  load_resource: 620.697
  PetaboxLoader3.resolve: 518.429
  loaddict: 29.334
*/