module.exports = {
  dependency: {
    platforms: {
      android: {
        componentDescriptors: ["AppRatingBarComponentDescriptor"],
        cmakeListsPath: "./src/main/jni/CMakeLists.txt",
      },
      ios: null,
    },
  },
};
