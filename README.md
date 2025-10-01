# Gunfire Client by React + Threejs
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



![ezgif-122fca163dde21 (1)](https://github.com/user-attachments/assets/61cfc9fb-3cdb-49d1-905e-c0505daa8690)

demo : https://eddhall0821.github.io/gunfire-client/

## Note

**components/GunRecoil.js** 

총기 반동을 구현하기 위해 카메라의 회전에 일시적인 변화를 주는 방식을 사용했습니다. 카메라의 최종 회전 상태는 짐벌락(Gimbal Lock) 문제를 피하고 부드러운 누적 회전을 보장하기 위해 쿼터니안(Quaternion) 으로 유지합니다. 그러나 반동은 X축 만을 빠르게 변화시키는 연산이므로, 이를 직관적으로 다루기 위해 일시적으로 Euler 각도로 변환하여 수정한 뒤 다시 쿼터니안으로 되돌리는 방식을 채택했습니다.

이 접근법은 사용자가 마우스로 제어하는 시점 회전과 총기 반동 효과가 자연스럽게 합쳐지며, 연속적인 발사 상황에서도 안정적인 회전 처리가 가능합니다.



소켓통신을 이용한 간단한 멀티플레이 기능을 구현했으나, 3차원 공간에서의 멀티플레이 디버깅에 어려움을 겪었습니다. 이에 따라 다음 프로젝트에서는 2D 환경을 기반으로 멀티플레이를 구현하였습니다. (https://github.com/eddhall0821/dodge-client)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
