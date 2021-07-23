import React, {Component} from 'react';
import {Text, StyleSheet, View, UIManager, LayoutAnimation} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IcArrowDown, IcArrowUp} from '../../../assets';
import {colors} from '../../../utils';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  //   if(Platform.OS === 'android'){
  // 	  UIManager.setLayoutAnimationEnabledExperimental(true)
  //   }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
          <Icon
            name={this.state.expanded ? <IcArrowUp /> : <IcArrowDown />}
            size={30}
            color={Colors.DARKGRAY}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.accent,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  parentHr: {
    height: 1,
    color: colors.text.primary,
    width: '100%',
  },
  child: {
    backgroundColor: colors.text.primary,
    padding: 16,
  },
});
