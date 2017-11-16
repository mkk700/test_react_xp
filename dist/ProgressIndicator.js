"use strict";
/**
* ProgressIndicator.tsx
* Copyright: Microsoft 2017
*
* Circular progress indicator that shows off the use of ImageSVG
* ReactXP extension.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RX = require("reactxp");
var styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    })
};
var ProgressIndicator = (function (_super) {
    __extends(ProgressIndicator, _super);
    function ProgressIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressIndicator.prototype.render = function () {
        var size = this.props.size;
        var progress = this.props.progress;
        var radius = size / 2;
        var deg = progress * 360;
        var radians = Math.PI * (deg - 90) / 180;
        var endX = radius + radius * Math.cos(radians);
        var endY = radius + radius * Math.sin(radians);
        var path = 'M' + radius + ',' + radius +
            ' L' + radius + ',0' +
            ' A' + radius + ',' + radius + ' 0 ' + (deg > 180 ? 1 : 0) + ',1 ' + endX + ',' + endY +
            'z';
        return (RX.createElement(RX.View, { style: styles.container },
            RX.createElement(RX.Text, { style: styles.welcome }, "Welcome to ReactXP")));
    };
    return ProgressIndicator;
}(RX.Component));
exports.default = ProgressIndicator;
//# sourceMappingURL=ProgressIndicator.js.map