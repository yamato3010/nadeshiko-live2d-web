"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Live2DCubismFramework = exports.CubismMatrix44 = void 0;
var CubismMatrix44 = (function () {
    function CubismMatrix44() {
        this._tr = new Float32Array(16);
        this.loadIdentity();
    }
    CubismMatrix44.multiply = function (a, b, dst) {
        var c = new Float32Array([
            0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0,
        ]);
        var n = 4;
        for (var i = 0; i < n; ++i) {
            for (var j = 0; j < n; ++j) {
                for (var k = 0; k < n; ++k) {
                    c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                }
            }
        }
        for (var i = 0; i < 16; ++i) {
            dst[i] = c[i];
        }
    };
    CubismMatrix44.prototype.loadIdentity = function () {
        var c = new Float32Array([
            1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0,
            1.0,
        ]);
        this.setMatrix(c);
    };
    CubismMatrix44.prototype.setMatrix = function (tr) {
        for (var i = 0; i < 16; ++i) {
            this._tr[i] = tr[i];
        }
    };
    CubismMatrix44.prototype.getArray = function () {
        return this._tr;
    };
    CubismMatrix44.prototype.getScaleX = function () {
        return this._tr[0];
    };
    CubismMatrix44.prototype.getScaleY = function () {
        return this._tr[5];
    };
    CubismMatrix44.prototype.getTranslateX = function () {
        return this._tr[12];
    };
    CubismMatrix44.prototype.getTranslateY = function () {
        return this._tr[13];
    };
    CubismMatrix44.prototype.transformX = function (src) {
        return this._tr[0] * src + this._tr[12];
    };
    CubismMatrix44.prototype.transformY = function (src) {
        return this._tr[5] * src + this._tr[13];
    };
    CubismMatrix44.prototype.invertTransformX = function (src) {
        return (src - this._tr[12]) / this._tr[0];
    };
    CubismMatrix44.prototype.invertTransformY = function (src) {
        return (src - this._tr[13]) / this._tr[5];
    };
    CubismMatrix44.prototype.translateRelative = function (x, y) {
        var tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            x,
            y,
            0.0,
            1.0,
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    };
    CubismMatrix44.prototype.translate = function (x, y) {
        this._tr[12] = x;
        this._tr[13] = y;
    };
    CubismMatrix44.prototype.translateX = function (x) {
        this._tr[12] = x;
    };
    CubismMatrix44.prototype.translateY = function (y) {
        this._tr[13] = y;
    };
    CubismMatrix44.prototype.scaleRelative = function (x, y) {
        var tr1 = new Float32Array([
            x,
            0.0,
            0.0,
            0.0,
            0.0,
            y,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    };
    CubismMatrix44.prototype.scale = function (x, y) {
        this._tr[0] = x;
        this._tr[5] = y;
    };
    CubismMatrix44.prototype.multiplyByMatrix = function (m) {
        CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
    };
    CubismMatrix44.prototype.clone = function () {
        var cloneMatrix = new CubismMatrix44();
        for (var i = 0; i < this._tr.length; i++) {
            cloneMatrix._tr[i] = this._tr[i];
        }
        return cloneMatrix;
    };
    return CubismMatrix44;
}());
exports.CubismMatrix44 = CubismMatrix44;
var $ = __importStar(require("./cubismmatrix44"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMatrix44 = $.CubismMatrix44;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));
//# sourceMappingURL=cubismmatrix44.js.map