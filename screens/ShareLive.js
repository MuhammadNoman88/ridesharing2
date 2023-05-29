import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid, Share, ImageBackground, Linking } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const ShareLive = () => {
  const [location, setLocation] = useState(null);
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    requestLocationPermission();

    return () => {
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
    const shareText = `My Live location: ${latitude}, ${longitude}`;
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

  const styles = {
    button: {
      backgroundColor: '#23BBE8',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/bg22.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        {location ? (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Latitude: {location.latitude}</Text>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Longitude: {location.longitude}</Text>
            <TouchableOpacity style={styles.button} onPress={openMaps}>
              <Text style={styles.buttonText}>Open in Maps</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Waiting for location...</Text>
        )}
        {isSharing ? (
          <TouchableOpacity style={styles.button} onPress={stopSharingLocation}>
            <Text style={styles.buttonText}>Stop Sharing</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={startSharingLocation}>
            <Text style={styles.buttonText}>Start Sharing</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={shareLocation}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ShareLive;
