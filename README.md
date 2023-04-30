# JustInTime
Just In Time Application for UNC Nursing Staff and UNC Center for Nursing Excellence

This is a mobile app where users (nurses) can receive useful information updates such as policy changes, new resources, and other information that is necessary for them to perform their job. Administrators can use the admin portal to add new posts to send to the nurse users. 

# Admin Portal
Link to admin: https://just-in-time-5698c.web.app <br>
Link to Firebase database console: https://console.firebase.google.com/

# Download and Usage
Adminstrators can login to the website through the link above using any web browser and add, change, and remove posts. Administrator accounts need to be given access through the Firebase console and request can be accessed by emailing anhhuynh@live.unc.edu or abyerle@gmail.com.<br>
The mobile app is currently not deployed and needs to be deployed to the app store or some other platform to download. In the meantime, the app can be run by pulling the repository and then run through the Expo Go app. Instructions on how to setup Expo Go can be found <a href='https://docs.expo.dev/get-started/installation/'>here</a> by first following the "Installation" guide and then "Create your first app". After creating an Expo Go account, email abyerle@gmail.com to add your account to the account owner's <a href='https://expo.dev/accounts/zizzer0/settings/members'>expo account members.</a> This will grant permissions for running the mobile app. In the future consider creating an organization to further customize account permissions<br>

A video detailing how to set up and run the application can also be found <a href='https://youtu.be/4ELwhdD0wQE'>here</a>.

# App Details
![image](https://user-images.githubusercontent.com/49326544/206061285-b4039af6-e609-4ae0-8c45-5b4f669a4804.png)
![image](https://user-images.githubusercontent.com/49326544/206061340-a435720f-0f3e-4c32-b68c-7b2ce7a1a7c7.png)
![image](https://user-images.githubusercontent.com/49326544/206064078-6b399e2c-6ef3-4aac-bddd-c909c4469654.png)
![image](https://user-images.githubusercontent.com/49326544/206061378-b1269ef5-8207-433c-bbce-bbec75331620.png)

The app is written in JavaScript, with the React framework for the web admin portal and React Native for the app. It is compiled with Expo and has a Firebase Realtime Database back-end system used to query data.

To continue technical work on the project, you will need a web browser and a Simulator (preferably a macOS device with an iPhone available) with Expo Go downloaded on the phone. Node.js will be needed for package installation. We recommend VSCode as the development environment of choice. After the cloned repository has been downloaded on the computer, you can open the folder in VSCode and run the command `npm ci --legacy-peer-deps` from the VSCode terminal to download the needed packages to run the application. Additionally, run `npm install` in both application directories. Add --force if needed. This will need to be done within the proper directories, which means after `cd`ing into both the admin-app directory and the JustInTime Mobile App directory. In the admin app directory, run `npm run dev` to and navigate to localhost:3000 in the browser.

In the mobile app directory, run the command `npm start` to run the application with Expo Go. From the mobile app, a QR code can be scanned with a phone or opened with a simulator app, after which development can continue. 

# Setting Up Notifications
Mobile app push notifications are only compatible with Android applications because the client still needs to buy an apple developer account. After purchasing and IOS developer account, IOS notifications can be added and the app can be be deployed to the app store. Notifications for android can be run with an android simulator run from android studio application or a physical android device. The Firebase Cloud Messaging library enables sending notifications from the admin portal to the mobile app. Notifications can only be run from outside of the Expo Go app. This process can be completed by <a href='https://docs.expo.dev/develop/development-builds/create-a-build/?redirected'>creating an Expo development build</a>. This involves installing the Expo Go cli and running the corresponding eas build command `eas build --profile development --platform android` in the mobile app directory. See <a href='https://github.com/AndrewByerle/push-notifications-demo'>our push notification demo</a> for steps detailing how we set this up.

After installing the development build, uncomment all lines in `/JustInTime Mobile App/src/notifications/notifications.js` to use the firebase messaging library. These lines were commented so that the app would load successfully without the development build installed.


# Web app details
![image](https://user-images.githubusercontent.com/49326544/206061845-110a6056-7c63-4fa6-b922-253fd7eb5a19.png)
![image](https://user-images.githubusercontent.com/49326544/206061918-45e402e0-0ffe-429f-8811-585a26857aac.png)

The web app is done in pure React.js and can be deployed from a local terminal. To do so, you need to have Firebase tools installed with `npm install -g firebase-tools`, `npm run build` to create a build directory, `firebase login` with your Firebase credentials, and lastly `firebase deploy`.

# App Hosting
If you want to deploy the app onto an App store, you will need to run a build process as described <a href="https://docs.expo.dev/archive/classic-updates/building-standalone-apps/">here</a>, which should automatically generate the ios and android directories. These can then be loaded with XCode or Android Studio to run and deploy them into apps that can then be hosted on the respective app stores. To do this, you will need to set up an iOS developer account and a Google developer account and go through an app verification process. 

Additionally, if you want to host videos within the app itself, you may need to purchase a different tier of cloud storage for video and resource hosting.

We do not expect any copyright, intellectual property, or HIPAA conflicts since the client mentioned that all data is publicly available and not linked to any patients.

# Web app Authentication
For now, everyone can sign up to the system and view the web portal. However, only certain authorized users will be able to make changes and edits. To start the process, first let the user sign up to the web admin. Then, as an administrator, log into the Firebase Console. On the left side panel you will see a "authentication" tab. Switch to the authentication tab, and a list of all authenticated users will be available. Every account comes with an indentifier (the email), and an UID. If you want to give edit access to a specific account, copy the account's UID. Then go to the 'realtime database' tab, and just create a new entry {UID: true} under the "admins" subtree. Just replace UID with the one you copied. Afterwards, the user who was granted access can log in as normally, but now can make changes to the database. If you need more control over the access of the database, go to the 'rules' tab on the realtime database. But this would need further understanding of Firebase's documentation.

# Future work
What's left to do? This app is relatively close to deployment - with another semester, it is very likely that this can become a fully functional and hosted application. 
* Admin portal polishing. There needs to be added an option to store credentials into localStorage and provide the option to sign out, in addition to better validation and checks for security. The author tag should also update accordingly, with a username field added to the database admins
* Firebase analytics. The mobile app can be configured with Firebase analytics to get data on page views and app interaction. This can be a great way to understand how the app is being used.
* Creating developer Apple/Google accounts. A paid subscription will be needed to host the app and let nurses download it.
* A more thorough testing suite. Currently, there are Jest tests that can be run with `npm test -- --watchAll` in the mobile app directory. However, navigation and interaction were harder to capture and test programatically, and will need more time to test and debug.

# Contact
If you have any issues or questions about further development/use, feel free to open a GitHub issue and reach out!

# Fake Logins
User with Full (View/Editing) Access <br>
Email: theosteiner@gmail.com <br>
Password: lskmfdl <br> 

User with Restricted (View Only) Access <br>
Email: restrictedemail@gmail.com <br>
Password: dweiufbewifbei <br>
