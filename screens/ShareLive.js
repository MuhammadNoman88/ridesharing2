import React, { useState, useEffect } from 'react';
import { View, Text, Button, PermissionsAndroid, Share,ImageBackground } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Linking } from 'react-native';

const ShareLive = () => {
  const [location, setLocation] = useState(null);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    // Request location permission on component mount
    requestLocationPermission();
    return () => {
      // Clean up on component unmount
      Geolocation.stopObserving();
    };
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.warn('Failed to request location permission', error);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.warn('Error getting current location', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const startSharingLocation = () => {
    setIsSharing(true);
    Geolocation.watchPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.warn('Error watching location', error);
      },
      { enableHighAccuracy: true, distanceFilter: 10 }
    );
  };

  const stopSharingLocation = () => {
    setIsSharing(false);
    Geolocation.stopObserving();
  };

  const shareLocation = () => {
    const { latitude, longitude } = location;
    const shareText = `My current location: ${latitude}, ${longitude}`;
    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    Share.share({
      message: `${shareText}\n\n${mapsLink}`,
    });
  };

  const openMaps = () => {
    const { latitude, longitude } = location;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View>
         <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{height: 750, width: 410}}>
      {location ? (
        <View>
            
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <Button title="Open in Maps" onPress={openMaps} />
        </View>
      ) : (
        <Text>Waiting for location...</Text>
      )}
      {isSharing ? (
        < Button title="Stop Sharing" onPress={stopSharingLocation} />
      ) : (
        <Button title="Start Sharing" onPress={startSharingLocation} />
      )}
      <Button title="Share" onPress={shareLocation} />
      </ImageBackground>
    </View>
  );
};

export default ShareLive;
