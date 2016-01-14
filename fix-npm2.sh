# Ref https://github.com/alinz/example-react-native-redux/blob/master/Counter/package.json
rm -rf node_modules/react-native/node_modules/react
rm -rf node_modules/react-native/node_modules/fbjs
rm -rf node_modules/react/node_modules/fbjs
cd node_modules
find . -name .babelrc | grep -v packager | xargs rm
cd -
