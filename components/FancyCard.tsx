import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://madainproject.com/content/media/collect/faisal_masjid_11728.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Faisal Masjid</Text>
          <Text style={styles.cardLabel}>Islamabad , Pakistan</Text>
          <Text style={styles.cardDescription}>
            The Faisal Mosque (Urdu: فیصل مسجد, romanized: faisal masjid) is the
            national mosque of Pakistan, located in the capital city, Islamabad.
            It is the fifth-largest mosque in the world, the largest mosque
            outside the Middle East, and the largest within South Asia, located
            on the foothills of Margalla Hills in Islamabad. It is named after
            the late King Faisal of Saudi Arabia.
          </Text>
          <Text style={styles.cardFooter}>
            Shah Faisal Ave, E-8, Islamabad, Islamabad Capital Territory 44000
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 420,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    padding: 4,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
