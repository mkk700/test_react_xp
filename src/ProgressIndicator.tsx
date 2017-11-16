/**
* ProgressIndicator.tsx
* Copyright: Microsoft 2017
*
* Circular progress indicator that shows off the use of ImageSVG
* ReactXP extension.
*/

import RX = require('reactxp');

export interface ProgressIndicatorProps extends RX.CommonStyledProps<RX.Types.ImageStyleRuleSet> {
    progress: number;
    fillColor: string;
    size: number;
}


const styles = {
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

class ProgressIndicator extends RX.Component<ProgressIndicatorProps, {}> {
    render() {
        const size = this.props.size;
        const progress = this.props.progress;
        const radius = size / 2;
        const deg = progress * 360;
        const radians = Math.PI * (deg - 90) / 180;
        const endX = radius + radius * Math.cos(radians);
        const endY = radius + radius * Math.sin(radians);
        const path = 'M' + radius + ',' + radius +
            ' L' + radius + ',0' +
            ' A' + radius + ',' + radius + ' 0 ' + (deg > 180 ? 1 : 0) + ',1 ' + endX + ',' + endY +
            'z';
        return (
            <RX.View style={styles.container}>
                <RX.Text style={styles.welcome}>
                    Welcome to ReactXP
                </RX.Text>
            </RX.View>
        );
    }
}

export default ProgressIndicator;
