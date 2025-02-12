import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    
  
  },
  text: {
    marginLeft: 30,
    paddingBottom: 5,
    color: '#A6A5A7',
  },
  signup_text: {
    fontSize: 20,
    marginLeft: 30,
    paddingBottom: 5,
    color: '#555',
  },
  image: {
    width: '100%',
    height: '50%',
    top: -80,
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    top: 0,
  },
  tab: {
    paddingVertical: 10,
    top: 0,
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    fontSize: 16,
    color: '#ff0000',
    borderBottomWidth: 2,
    borderBottomColor: '#ff0000',
  },
  sample: {
    borderColor: '#555',
    borderWidth: 2,
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    textAlignVertical: "center",
    paddingLeft: 25,
  }, 
  signup_input: {
    height: 50,
    marginHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    textAlignVertical: "center",
    paddingLeft: 25,
  },
  
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  linkText: {
    color: '#ff0000',
    marginHorizontal: 30,
  },  
 button: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signup_button: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    marginHorizontal: 15,
    marginTop:40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    height: 55,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    color: '#000',
    textAlign: 'center',
    paddingBottom: 50,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust width as needed
  },
  scrollView: {
    marginVertical: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
 logoContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // For Android
    marginBottom :  10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 5,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginVertical: 20,
  },
  progressBar: {
    width: '30%', // Adjust the width percentage as needed
    height: '100%',
    backgroundColor: '#3B5998',
    borderRadius: 2,
  },

appBar: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
  backgroundColor: '#FFDCDC',
  elevation: 4,
},
searchBox: {
  flex: 1,
  marginHorizontal: 10,
  padding: 8,
  borderRadius: 4,
  backgroundColor: '#F0F0F0',
},
icon: {
  width: 24,
  height: 24,
},
contentContainer: {
  padding: 20,
},
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
  watchlistContainer: {
    backgroundColor: '#FFF', 
    top:10,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // For Android
    marginBottom: 10, // Space below the container
  },
  watchlistIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchlistText: {
    fontSize: 16,
    marginLeft: 10,
  },
  arrowIcon: {
    color: '#000',
  },
appBarContainer: {
  width: '100%',
  backgroundColor: '#FFDCDC',
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  paddingHorizontal: 15,
  paddingVertical: 10,
},
  safeArea: {
    // marginTop: '5%',
    flex:1,
    backgroundColor: '#FFF',
  },
appBar: {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
iconLeft: {
    position: 'absolute',
    left: 15,
},
iconRight: {
  position: 'absolute',
  right: 15,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  flex: 1,
 },
  icon: {
   color: '#000',
 },
searchContainer: {
  flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
},
searchIcon: {
  marginRight: 10,
  color: '#000',
},
searchBox: {
  flex: 1,
  paddingVertical: 8,
},
totalPlantsContainer: {
  backgroundColor: '#FFF', // White background for the container
  padding: 15,
  top:10,
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4, // For Android
  marginBottom: 20, // Space below the container
},
totalPlantsTitle: {
  fontSize: 16,
  marginLeft: 10,
  color: '#000', 
},
heading: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: 'center', // Center text horizontally
},
line: {
  height: 1,
  backgroundColor: '#CCC',
  marginVertical: 10
},
plantStatusContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
plantStatusText: {
  fontSize: 16,
  marginLeft: 10,
  marginBottom:10,
},
totalPlantsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    // Drop shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // Drop shadow for Android
    elevation: 5,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'gray',
  },

  graphContainer: {
  backgroundColor: '#FFF',
  borderRadius: 8,
  padding: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4,
  marginBottom: 20,},
  
  productionContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  productionText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#CCC',
    marginVertical: 10,
  },
  },);
  
export default styles;