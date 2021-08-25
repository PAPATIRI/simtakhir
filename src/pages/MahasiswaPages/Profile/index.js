import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcArrowDown, IcDropDown, IcHamburgerMenu} from '../../../assets';
import {TopNavbar, CardProfile, Gap} from '../../../components';
import {colors, fonts} from '../../../utils';

let dataSkripsi = [
  {
    title: 'Detail Tugas Akhir',
    dataDetail: [
      {
        label: 'judul',
        judul:
          'pengembangan aplikasi mobile berbasis android untuk sistem pengelolaan tugas akhir mahasiswaa',
      },
      {
        label: 'deskripsi',
        judul:
          'merupakan pengembangan sistem berbasis mobile yang merupakan alternatif dari sistem berbasis web dengan memanfaatkan api',
      },
    ],
  },
  {
    title: 'Jadwal Sidang',
    dataDetail: [
      {
        label: 'ruang',
        judul: 'kampus 4 R.4.6.01',
      },
      {
        label: 'waktu',
        judul: '21 september 2021 10.30',
      },
    ],
  },
  {
    title: 'Logbook',
    dataDetail: [
      {
        label: 'keterangan',
        judul: 'terakhir ditambahkan 7 hari yang lalu',
      },
    ],
  },
];

const Profile = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);

  return (
    <View style={styles.page}>
      <View style={styles.topNavWrapper}>
        <TopNavbar iconRight={<IcHamburgerMenu />} />
        <View style={styles.emptyView}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.cardWrapper}>
          <CardProfile />
        </View>
        <View style={styles.menuList}>
          {dataSkripsi.map(({title, dataDetail}, index) => {
            return (
              <TouchableOpacity
                key={title}
                activeOpacity={0.7}
                onPress={() => {
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                style={styles.dropDownWrapper}>
                <View style={styles.dropDown}>
                  <View style={styles.heading}>
                    <Text style={styles.titleDropDown} key={title}>
                      {title}
                    </Text>
                    <IcArrowDown />
                  </View>
                  <View style={styles.subCategoryList}>
                    {index === currentIndex &&
                      dataDetail.map((data, label, judul) => (
                        <View>
                          <Text style={styles.subtitle} key={label}>
                            {data.label}
                          </Text>
                          <Gap height={5} />
                          <Text style={styles.dropDownContent} key={judul}>
                            {data.judul}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 3,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardWrapper: {
    marginTop: -75,
    flex: 1,
    paddingHorizontal: 20,
  },
  topNavWrapper: {
    flex: 1,
  },
  emptyView: {
    flex: 1,
  },
  menuList: {
    flex: 2,
    paddingHorizontal: 20,
  },
  dropDownWrapper: {},

  dropDown: {
    paddingHorizontal: 20,
    paddingTop: 12,
    marginBottom: 10,
    backgroundColor: colors.primary,
    elevation: 1,
    borderRadius: 5,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleDropDown: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    color: colors.text.accent,
  },
  subtitle: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.primary,
  },
  dropDownContent: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 15,
    lineHeight: 16 * 1.5,
  },
});
