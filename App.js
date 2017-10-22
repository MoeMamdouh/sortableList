import SortableListView from 'react-native-sortable-listview'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

let data = {
  1: { text: 1 },
  2: { text: 2 },
  3: { text: 3 },
  4: { text: 4 },
  5: { text: 5 },
  6: { text: 6 },
  7: { text: 7 },
  8: { text: 8 },
  9: { text: 9 },
  10: { text: 10 },
  a: { text: 'a' },
  b: { text: 'b' },
  c: { text: 'c' },
  d: { text: 'd' },
  e: { text: 'e' },
  f: { text: 'f' },
  g: { text: 'g' },
  h: { text: 'h' },
  i: { text: 'i' },
  j: { text: 'j' },
  k: { text: 'k' },
}

let order = Object.keys(data) //Array of keys

class RowComponent extends Component {

  render() {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: 'red',
          borderBottomWidth: 1,
          borderColor: '#eee',
          margin: 30,
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data.text}</Text>
      </TouchableHighlight>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
        //ref="sortableList"
        ref={(sortableListView) => { this.sortableListView = sortableListView; }}
      />
    )
  }
}

export default App