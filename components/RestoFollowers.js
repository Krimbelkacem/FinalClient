import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const RestoFollowers = () => {
  const followers = [
    {
      id: 1,
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
      name: "John Doe",
      age: "30",
    },
    {
      id: 2,
      avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
      name: "John Doe",
      age: "30",
    },
    {
      id: 3,
      avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
      name: "John Doe",
      age: "30",
    },
    {
      id: 4,
      avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
      name: "John Doe",
      age: "30",
    },
    {
      id: 5,
      avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
      name: "John Doe",
      age: "30",
    },
    {
      id: 6,
      avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
      name: "John Doe",
      age: "30",
    },
  ];

  const handleEditPress = () => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.statCount}>1234</Text>
        <Text style={styles.statLabel}>Friends</Text>
      </View>

      <View style={styles.section}>
        <View>
          <ScrollView horizontal contentContainerStyle={styles.friendsScroll}>
            {followers.map(({ avatar, id }) => (
              <View style={styles.friendCard} key={id}>
                <Image style={styles.friendImage} source={{ uri: avatar }} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          ullamcorper nisi.
        </Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handleEditPress}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: 180,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -70,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    textAlign: "center",
    color: "#A9A9A9",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  statCount: {
    color: "#999",
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 16,
    color: "#999",
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#9400D3",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  friendCard: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 2,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendsScroll: {
    paddingBottom: 10,
  },
};

export default RestoFollowers;
