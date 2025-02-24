import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import DribbleZoneHeader from '../components/DribbleZoneHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <DribbleZoneHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Formula 1', '05.04 14:00', 'Spanish Grand Prix \n' + 'Race Day')}
        {renderBroadcast('IndyCar', '07.04 16:30', 'Detroit Grand Prix \n' + 'Final Lap')}
        {renderBroadcast('NASCAR Cup', '09.04 18:45', 'Bristol Motor Speedway \n' + 'Final Stage')}
        {renderBroadcast('MotoGP', '11.04 20:00', 'Dutch TT \n' + 'Race')}
        {renderBroadcast('WEC', '13.04 15:30', 'Spa 6 Hours \n' + 'Mid-Race')}
        {renderBroadcast('Formula E', '15.04 14:45', 'London E-Prix \n' + 'Final Sprint')}
        {renderBroadcast('Rally WRC', '17.04 18:00', 'Rally Mexico \n' + 'Power Stage')}
        {renderBroadcast('DTM', '19.04 19:15', 'Hockenheim \n' + 'Main Race')}
        {renderBroadcast('Extreme E', '21.04 17:30', 'Arctic X-Prix \n' + 'Final')}
        {renderBroadcast('Super GT', '23.04 18:45', 'Fuji Speedway \n' + 'Last Hour')}

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    paddingVertical: 5,
  },
});
