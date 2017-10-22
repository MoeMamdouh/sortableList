import SortableListView from 'react-native-sortable-listview'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
} from 'react-native';
import Item from './../components/item'
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
const data = {
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

class List1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <SortableListView
          style={{ flex: 1, flexWrap: 'wrap', width: 100, backgroundColor: 'green' }}
          data={data}
          order={order}
          onRowMoved={e => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0])
            this.forceUpdate()
          }}
          renderRow={row => <Item data={row} />}
          //ref="sortableList"
          ref={(sortableListView) => { this.sortableListView = sortableListView; }}
        />

        {/* <ListView
          //horizontal={true}
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap'
          }}
          dataSource={ds.cloneWithRows(data)}
          renderRow={row => <Item data={row} />}
        /> */}

        {/* <View style={{ height: 300, width: 300, backgroundColor: 'green', flexDirection: 'row', flexWrap:'wrap' }}>
          <Item data={1} />
          <Item data={1} />
          <Item data={1} />
          <Item data={1} />
          <Item data={1} />
        </View> */}
        {/* <View >

        </View> */}
      </View>
    )
  }
}

export default List1