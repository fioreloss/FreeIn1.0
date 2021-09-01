import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Modal,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; //pencil
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import EditorTextComponent from '../../../components/Shared/EditorTextComponent';
import EditorTextArea from '../../../components/Shared/EditorTextArea';
import CancelUploadBtn from '../../../components/CancelUploadBtn';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function AddShop({navigation}) {
  const [image, setImage] = useState();
  const [visible, setVisible] = React.useState(false);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);

      // this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);

      // this.bs.current.snapTo(1);
    });
  };

  bs = React.createRef();

  return (
    <LinearGradient
      colors={['#F3D7B8', '#AD5F56', '#D08972', '#C57862', '#DFA37D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.4, 1, 0, 0.98, 0.78]}
      style={styles.container1}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <ModalPoup visible={visible}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Feather name="x-square" size={30} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPressIn={() => setVisible(false)}
                  onPress={choosePhotoFromLibrary}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <MaterialIcons
                    name="add-photo-alternate"
                    size={50}
                    color="green"
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      paddingLeft: 20,
                      color: 'green',
                      fontWeight: 'bold',
                    }}>
                    Gallery
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={() => setVisible(false)}
                  onPress={takePhotoFromCamera}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 20,
                  }}>
                  <MaterialIcons name="add-a-photo" size={42} color="green" />
                  <Text
                    style={{
                      fontSize: 20,
                      paddingLeft: 20,
                      color: 'green',
                      fontWeight: 'bold',
                    }}>
                    Capture
                  </Text>
                </TouchableOpacity>
              </View>
            </ModalPoup>

            <TouchableOpacity onPress={() => setVisible(true)}>
              <View style={{}}>
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 10, zIndex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: 'green',
                      borderRadius: 10,
                      width: 100,
                      height: 100,
                    }}>
                    <Ionicons
                      name="add-circle-outline"
                      size={50}
                      color="green"
                      style={{
                        opacity: 0.6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={styles.text1}>
              <TouchableOpacity onPress={takePhotoFromCamera}>
                <EvilIcons name="pencil" size={36} color="green" />
              </TouchableOpacity>
              Carica Foto
            </Text>
            {/* <Text style={styles.text1}>
                Dimensioni minime di “808 x 632 pixel”
              </Text> */}
            <View style={styles.view}>
              <EditorTextComponent
                name="Nome Prodotto"
                required="(obbligatorio)"
                placeholder="Assegna un nome al prodotto massimo xx caratteri"
                placeholderTextColor="black"
              />
              <EditorTextComponent
                name="Location / Link"
                required="(obbligatorio)"
                placeholder="inserisci link"
                placeholderTextColor="black"
              />
              <EditorTextComponent
                name="Prezzo"
                required="(obbligatorio)"
                placeholder="Inserisci prezzo"
                placeholderTextColor="black"
              />
              <EditorTextArea
                name="Testo"
                required="(obbligatorio)"
                placeholder="Inserisci descrizione massimo 37 caratteri"
                placeholderTextColor="black"
              />
            </View>
            <CancelUploadBtn cancelAction={'Editor'} uploadAction={''} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    alignItems: 'center',
  },
  container1: {
    // height: HEIGHT,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },

  view: {
    flexDirection: 'column',
  },
  text1: {
    paddingBottom: 10,
    fontSize: 15,
    marginRight: 20,
    fontFamily: 'SemiBold',
    alignSelf: 'center',
    color: 'black',
    marginBottom: 5,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
