# An example Mendix application with Web and Native tests

Native test for login path with various methodologies using Appium Inspector.

There are several different versions of the same test (using plain tap, with selectors, with a mixture) so that you can evaluate the options and see the difference yourself.

# What's in this folder

Everything apart from the node_modules folder. This is so that you can compare your folder structure to that of this, working test.

# Setup
- Follow installation instructions on Confluence (Expert Services > Technical Excellence CoP > Automated testing > Appium Inspector) to install Node.js and Appium Inspector (includes appium installation);
- Create new folder in a convienent place in your file directory and execute the following comamnds from the documentation from Appium: https://appium.io/docs/en/2.2/quickstart/test-js/
- Once the project is setup, copy one of the tests within this folder and modify the path to your apk (e.g. "C:/Users/...")
- Once appium is running (by running `appium`) and your device is connected, run the test by executing `node login.js`
- Your device should execute the login test using the MxShopee app 

Happy testing!