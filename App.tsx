import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Polygon, Geojson} from 'react-native-maps';
import {colors} from './colors';
import {dataSet} from './dataset';
const App = (props: any) => {
  const values = dataSet.sort((x, y) => y - x).slice(0, 3);
  console.log('value check', values);
  const [region, setRegion] = useState({
    latitude: 29.940495,
    longitude: 69.448587,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  const [coordinateArray, setCoordinateArray] = useState([
    {latitude: 29.940495, longitude: 69.448587},
    {latitude: 11.940495, longitude: 72.448587},
    {latitude: 34.940495, longitude: 75.448587},
    {latitude: 36.940495, longitude: 77.448587},
  ]);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]); //number and names of countries and their values of long and lat in JSON
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.12,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            List of Internet Users WorldWide
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: '2.%',
            }}>
            {/* <View style={styles.dataBox}></View>
            <View style={styles.dataBox}></View>
            <View style={styles.dataBox}></View> */}
            {values.map((data: any, index: number) => {
              return (
                <View style={styles.dataBox}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    {'Country: ' + data['Country or Area']}
                  </Text>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    {'Users: ' + data['Internet Users']}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View style={{flex: 0.9}}>
        <MapView
          region={region}
          onRegionChange={newRegion => {
            console.log('newRegion', newRegion);
            console.log('current regionnn', region);
          }}
          style={{flex: 1}}>
          {/* <Polygon
            style={{flex: 1}}
            tappable={true}
            coordinates={coordinateArray}
            fillColor={colors.PRIMARY}
            // strokeColor={colors.SECONDARY}
            strokeWidth={1}
            onPress={() => {
              console.log('pressed');
            }}
          /> */}
          {numbers.map((data: any, index: number) => {
            return (
              <Polygon
                style={{flex: 1}}
                tappable={true}
                coordinates={coordinateArray}
                fillColor={colors.PRIMARY}
                // strokeColor={colors.SECONDARY}
                strokeWidth={1}
                onPress={() => {
                  console.log('pressed');
                }}
              />
            );
          })}
        </MapView>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {flex: 1, padding: '5%', backgroundColor: '#f0f2f7'},

  dataBox: {
    height: 65,
    width: 130,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 5,
    padding: '2%',
  },
});
