if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+a.slice(1)};return Promise.all(c.map((a=>{switch(a){case"exports":return s;case"module":return o;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/15c8b8364bdc57a13d41aab3548f394012995df3.a56c504578ba653fe460.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/1f803228.0e94b11f9e0e319252b1.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/24765cf59c0238fbb84302ae060fc6823c6dcddc.1c4d61e81ec52106a4a1.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/66817c2da6ead7bf971a219be97bed402c082498.6d7ed8bb507c354a36ae.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/801a6084.a66041e95c1355e27311.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/9879efba857a33bef3d47db69f0a5b2dc4fb4453.d6dce338f01520ef1e02.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/a9a7754c.2ab8c731f88739d823e3.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/af59f56e1a2f958570b762518a8c3e034ef93423.a2f4abe09dec310b294b.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/cb1608f2.e2603020f4df0f2cb6be.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/commons.a31daa1c5e8d3eb4131a.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/eb21eb5bc0fc6a4b6724216acda191ccfedb05dc.1be6c92e643718454bc1.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/framework.29f9e2f3d4a33bafbaa5.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/main-8681acbbe3ba93d12850.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/404-7c68d0e1ea8913b57934.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/_app-9de0ef8ba04f4c000725.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/_error-28245c34b7a9a00aed37.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/about-4cd1fd0ca366cb55dcb8.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/auth-16a721a8ff7987c15256.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/contacts-f60c456544f3a50a85cf.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/index-68c912b5137dba04f801.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/investors-d12fe834b77ac58dc457.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/media-29c84d71e4090a15e347.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/media/%5BsectionId%5D-666d646d2057b8497e12.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/order-d33409e5d7c1333261ea.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-f63153701ccd46c77b54.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/policies-eebcaaf1b95b83bfa3fc.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/policies/payment-fe7baaff6863b23ecb3e.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/policies/privacy-303d2ec236f0778af378.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/policies/refund-c2d4630e6e2ffca3ba59.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/policies/terms-51237605beea5c87f14f.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/profile-b13462e89a5a9e2ba112.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/pages/profile/account-ae6ccc6ff9721fc127c7.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/polyfills-4afc5958938009b0eaac.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/262d71d3f406701e9266.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/2ef2451f29604bce64a3.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/43a086c41f62b8cfa8ce.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/4a2057d466f15525c577.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/4dbaa10873d27e81f960.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/a8e8d4d2c334dc61655b.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/aba95a0fc98588e1f49d.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/b78b8247fc7522894602.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/c73e4c09a9e6844ea14b.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/d2962b6865465ac221db.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/css/dc49bf6437d3aac4fbb9.css",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-brands-400.330e879afe4a0abb35f235e29be3084f.ttf",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-brands-400.5f63cb7f47b6ea89773b43a6e687e5a5.woff",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-brands-400.6e63bd22128f27b83f228bf5ef541156.woff2",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-brands-400.98f20b9ec79b2fee02a300f4b716629f.eot",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-brands-400.ed0e540d8e089280d0dbc669a5a3721f.svg",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-regular-400.150efb2cd831e937a0d003ae540cd2f3.svg",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-regular-400.2c154b0f8c0d8d1661627d1ddb317b12.woff2",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-regular-400.62a07ffeac77696f17ef438f49ce6790.eot",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-regular-400.ac2367644e559de4ff330fbb7c273e70.ttf",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-regular-400.ea5a41ec4a24ce93298ee053b6357e18.woff",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-solid-900.3eb06c702e27fb110194f5a16c45cb8e.woff2",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-solid-900.6606667d9800a27eb8b5f61ccb66d510.eot",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-solid-900.915a0b79c22a1c1f64da9e0a90a12f02.ttf",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-solid-900.aa8bc92fd8476b5b456f3e7fcbfda2ef.svg",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/media/fa-solid-900.f4f93856730733912b1e06ad64c0baf7.woff",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/vb-BzoXO0O1GaPaet_AB5/_buildManifest.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/_next/static/vb-BzoXO0O1GaPaet_AB5/_ssgManifest.js",revision:"vb-BzoXO0O1GaPaet_AB5"},{url:"/android-icon-144x144.png",revision:"7e918dc773db9e796930c703769722d9"},{url:"/android-icon-192x192.png",revision:"0d8e7ae0448561e2f5a6ffb325effda2"},{url:"/android-icon-36x36.png",revision:"b046f8cb24b630bf0182e11f39b2808e"},{url:"/android-icon-48x48.png",revision:"5a72bb75f7ce9483283037714fc0e3a8"},{url:"/android-icon-72x72.png",revision:"e9ad51e3858f8ba56ba24fac39e973f1"},{url:"/android-icon-96x96.png",revision:"f85b5ff05032c6edec1b3d9ecc15c0c6"},{url:"/apple-icon-114x114.png",revision:"9c914d4b56a5af8ec21bc112b48ede28"},{url:"/apple-icon-120x120.png",revision:"a76708f5ca7c87082be0112b3321370a"},{url:"/apple-icon-144x144.png",revision:"7e918dc773db9e796930c703769722d9"},{url:"/apple-icon-152x152.png",revision:"95d10cf984dec0479dac42474d1edcd8"},{url:"/apple-icon-180x180.png",revision:"64e9a9e3e87a2a9e2ed4d08df81910dd"},{url:"/apple-icon-57x57.png",revision:"0a1d2687014632c938c9fcb4c1ba1265"},{url:"/apple-icon-60x60.png",revision:"9356da818e4efa8569c2a3726c23861e"},{url:"/apple-icon-72x72.png",revision:"e9ad51e3858f8ba56ba24fac39e973f1"},{url:"/apple-icon-76x76.png",revision:"5425e83d7f0a68228279a9465e154c1c"},{url:"/apple-icon-precomposed.png",revision:"fa5b46de1d9a8c112edbaa3286380b78"},{url:"/apple-icon.png",revision:"fa5b46de1d9a8c112edbaa3286380b78"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"a24c4484d0d00424a2ab57db60d1d499"},{url:"/favicon-32x32.png",revision:"2fd2eb1a13d7bd967e7ffb7c5e894b04"},{url:"/favicon-96x96.png",revision:"f85b5ff05032c6edec1b3d9ecc15c0c6"},{url:"/favicon.ico",revision:"c1027a74b60886b7224d7213936f348f"},{url:"/icons/icon-128x128.png",revision:"719e2c45c81202cc1cc68ff6b0593fb2"},{url:"/icons/icon-144x144.png",revision:"ff80d8ad0d9b0c153b389fe2025d1f0e"},{url:"/icons/icon-152x152.png",revision:"e90e881100ea180be9d29a7b53c1ef88"},{url:"/icons/icon-168x168.png",revision:"2b276052c233effb00002fa4d0dc5b54"},{url:"/icons/icon-192x192.png",revision:"b9b1d0d1fcc8b6ec7481a69cd2c85694"},{url:"/icons/icon-256x256.png",revision:"0b337a42715a03e05f1837ce5695654a"},{url:"/icons/icon-384x384.png",revision:"75976b459c324b0be93061dcfb3f6c95"},{url:"/icons/icon-48x48.png",revision:"e9d6b18cde99e3c8464ff302f76a2b7b"},{url:"/icons/icon-512x512.png",revision:"f94faefb732d03c86b12d0f976dc96cd"},{url:"/icons/icon-72x72.png",revision:"e2591491b1a6c50af6939d37c950989d"},{url:"/icons/icon-96x96.png",revision:"9fcbf3f9f3dc04def474f87015b3a06d"},{url:"/img/Group97.svg",revision:"85779f9092235d80696cfa5899fe3658"},{url:"/img/USD.svg",revision:"d95634be80ec4f8bda2bf36e7058cdc3"},{url:"/img/circleDragIcon.svg",revision:"713191aa5ab0845df06c9f542bc98135"},{url:"/img/dribbble_1.gif",revision:"e430101033efff9a294eaafecbac846a"},{url:"/img/main-logo.png",revision:"df6615ab5ecb634f95f8eb3fa989b40c"},{url:"/img/portrait.webp",revision:"fee14740b3166d9e18501e7e113b5baf"},{url:"/js/hammer.min.js",revision:"5e096613a4835a9f0756fd09d566e0ac"},{url:"/js/howler.min.js",revision:"9f1ec0d4a61f84f92706a28fd8a6079a"},{url:"/js/iscroll-probe.min.js",revision:"6c9779a7645782274130a62e641da1a7"},{url:"/js/jquery.js",revision:"fa16a8422bc9b5b2cd59a6d92db089f5"},{url:"/js/mo.min.js",revision:"26ef0b3085df6882bf4d1c2214c50c78"},{url:"/js/scrolloverflow.min.js",revision:"bd15c5abb2580697212a3e42c3679395"},{url:"/manifest.json",revision:"b774ddd8e909bb158a783c05bacb5dba"},{url:"/ms-icon-144x144.png",revision:"7e918dc773db9e796930c703769722d9"},{url:"/ms-icon-150x150.png",revision:"73401f8be28efa6f7ec911f9b33d4ff6"},{url:"/ms-icon-310x310.png",revision:"6708a0f9e1d32d9a75c0f6582e4f63b3"},{url:"/ms-icon-70x70.png",revision:"aa34260c0967e57a9f5f6637b377a1de"},{url:"/static/locales/ae/aboutPage.json",revision:"9c894d52c57e5d171246ddafcf53e588"},{url:"/static/locales/ae/accountPage.json",revision:"3318459750af271b86ef6099ebe3f40b"},{url:"/static/locales/ae/authPage.json",revision:"d736ffb580a15678b580c3eafc904daf"},{url:"/static/locales/ae/common.json",revision:"6d66e5ddadaa66b162f81b96476d7fc2"},{url:"/static/locales/ae/contactPage.json",revision:"94b4efc249c0abfacf3df3c2bc61b3f3"},{url:"/static/locales/ae/indexPage.json",revision:"f0ccb144d19a7bdcf92715eb9a18920d"},{url:"/static/locales/ae/investorsPage.json",revision:"6d66e5ddadaa66b162f81b96476d7fc2"},{url:"/static/locales/ae/mediaPage.json",revision:"ffbb54f73abbd6b39ee9e70b1d706958"},{url:"/static/locales/ae/orderPage.json",revision:"2e921016b2a778c06b9a46eb466d72cf"},{url:"/static/locales/ae/policiesPage.json",revision:"08e7a3178cfc019f6aed44ea1d19ce17"},{url:"/static/locales/ae/profilePage.json",revision:"09d667275e740f984a8e642d901967aa"},{url:"/static/locales/cn/aboutPage.json",revision:"6d170374dde13278bfa5a020162746b2"},{url:"/static/locales/cn/accountPage.json",revision:"69d697f87a1fb69705500114eed3896d"},{url:"/static/locales/cn/authPage.json",revision:"00a7781282cfb0ef15d285f82c25f41a"},{url:"/static/locales/cn/common.json",revision:"017e3d1f00c0c238aba187e12aa3d861"},{url:"/static/locales/cn/contactPage.json",revision:"00ccf7559b624afc0cd5ffe8e0d32670"},{url:"/static/locales/cn/indexPage.json",revision:"f3a2fb9a2f9e73cdb51b25b4bfbbc6ff"},{url:"/static/locales/cn/investorsPage.json",revision:"017e3d1f00c0c238aba187e12aa3d861"},{url:"/static/locales/cn/mediaPage.json",revision:"e0c026f6cec6a040c85c57e4c26e13c8"},{url:"/static/locales/cn/orderPage.json",revision:"c7a7cbba813a13d6a0fdb5e48f078927"},{url:"/static/locales/cn/policiesPage.json",revision:"17ddc120f985d3b0829ee590ab47597f"},{url:"/static/locales/cn/profilePage.json",revision:"1a1f8054f6df81df206ce7debea594ea"},{url:"/static/locales/en/aboutPage.json",revision:"4fe765c5429f6cf9d2b307711d8dc2b1"},{url:"/static/locales/en/accountPage.json",revision:"8521e786bb1a29d692811e1a4f409954"},{url:"/static/locales/en/authPage.json",revision:"23402d9b4df990040303232a6775d6e7"},{url:"/static/locales/en/common.json",revision:"75dc4951d79f0ac2d26c1132e84a2b33"},{url:"/static/locales/en/contactPage.json",revision:"ab3cb005d1f9f360ff4e5cd00f57a5a0"},{url:"/static/locales/en/indexPage.json",revision:"a216aff58169e8218ea47126813bc0c9"},{url:"/static/locales/en/investorsPage.json",revision:"75dc4951d79f0ac2d26c1132e84a2b33"},{url:"/static/locales/en/mediaPage.json",revision:"6513d5b3cdb2c89a291b6930b0fd5055"},{url:"/static/locales/en/orderPage.json",revision:"e0ed77d9f738d03e701fdd1d6d2394af"},{url:"/static/locales/en/policiesPage.json",revision:"215efa420115d6e814aea085ef4d96c1"},{url:"/static/locales/en/profilePage.json",revision:"54795f37172940487528d68eae2dff88"},{url:"/static/locales/es/aboutPage.json",revision:"b17f9daaa1a3eadba9fbb7fbc102a05b"},{url:"/static/locales/es/accountPage.json",revision:"8582c5587f2a3fef9229e58683e84259"},{url:"/static/locales/es/authPage.json",revision:"3c21dbcabf82734cb803d4ae08c8daf3"},{url:"/static/locales/es/common.json",revision:"62457b7d8df59b3feb3d3e139d4a33fe"},{url:"/static/locales/es/contactPage.json",revision:"81a2129e4ddb73375b8ea763aa795c2f"},{url:"/static/locales/es/indexPage.json",revision:"416f7dec2a974783ba72d9b38efeab11"},{url:"/static/locales/es/investorsPage.json",revision:"431b4e1cb8dfb1f55280bbfeea256db2"},{url:"/static/locales/es/mediaPage.json",revision:"e26048f8defd6a73b8f9b6116c4cda89"},{url:"/static/locales/es/orderPage.json",revision:"7465b7aec8f3ad648cdd6151f103d242"},{url:"/static/locales/es/policiesPage.json",revision:"1b226f7b5f876e034066b652dfc5afc4"},{url:"/static/locales/es/profilePage.json",revision:"2a5befe91a4f90719cd044132f48d2a6"},{url:"/static/locales/fr/aboutPage.json",revision:"daa6ba54ce5eb5d6cb1d3c94839dc791"},{url:"/static/locales/fr/accountPage.json",revision:"350923bfd4127dde8a87c964a82eefe1"},{url:"/static/locales/fr/authPage.json",revision:"2cfc025ed7565638eea5ece87a789420"},{url:"/static/locales/fr/common.json",revision:"3c36ef8a635858dde60e50069b01c987"},{url:"/static/locales/fr/contactPage.json",revision:"3b0e681f62b27bc075e77ca26a57a06c"},{url:"/static/locales/fr/indexPage.json",revision:"63f938b44dec3963b154a248fbd42f40"},{url:"/static/locales/fr/investorsPage.json",revision:"daa6ba54ce5eb5d6cb1d3c94839dc791"},{url:"/static/locales/fr/mediaPage.json",revision:"1e6c86be17b088c170ab4e33d4976829"},{url:"/static/locales/fr/orderPage.json",revision:"5ed68952b27a0f2d38f0ff36e69d0c12"},{url:"/static/locales/fr/policiesPage.json",revision:"71af8d726bc9adb2b0d05f89cbccdd9b"},{url:"/static/locales/fr/profilePage.json",revision:"a48d2a16e08bbe23dfa32a1dd3d51b93"},{url:"/static/locales/ru/aboutPage.json",revision:"473a6d90d6e710b7620f587b4245ee93"},{url:"/static/locales/ru/accountPage.json",revision:"826bc00fd9fa7ac2fc77722a67f9d24a"},{url:"/static/locales/ru/authPage.json",revision:"362cb942938b580c9715d5c5b90a3055"},{url:"/static/locales/ru/common.json",revision:"c3bafa73006463cff31949c1ccbbe7dc"},{url:"/static/locales/ru/contactPage.json",revision:"5ca753bf76f43661f5d874290dc3322a"},{url:"/static/locales/ru/indexPage.json",revision:"e18949cc00ff2a4b55a6d799feefe693"},{url:"/static/locales/ru/investorsPage.json",revision:"4079f086c4172aca79823f50d9259fec"},{url:"/static/locales/ru/mediaPage.json",revision:"561923a46b8e3476ed37030fd1bc2ddb"},{url:"/static/locales/ru/orderPage.json",revision:"cf2c3b76a9d589d20363411bd7f98791"},{url:"/static/locales/ru/policiesPage.json",revision:"5aee07984ebfc9d4be3876d44e14a9df"},{url:"/static/locales/ru/profilePage.json",revision:"7e21296079bd680c73ce75054a9dad56"},{url:"/static/locales/uz/aboutPage.json",revision:"bcc6bcb53d9895e5be08d2d8f855d6c2"},{url:"/static/locales/uz/accountPage.json",revision:"5ffeda4f0f9ceef52fede12ac75d5243"},{url:"/static/locales/uz/authPage.json",revision:"f9a553101c7b1dba19d22699d5f5b356"},{url:"/static/locales/uz/common.json",revision:"8ed62e10029dd0ee54b5f9655d6b8ef2"},{url:"/static/locales/uz/contactPage.json",revision:"1ee18fc9513f656ffed18a4ceb100c55"},{url:"/static/locales/uz/indexPage.json",revision:"352d6bc7e4004c02b41c74cad8d1fd5e"},{url:"/static/locales/uz/investorsPage.json",revision:"bcc6bcb53d9895e5be08d2d8f855d6c2"},{url:"/static/locales/uz/mediaPage.json",revision:"872adb2dd1c6315e7ae5b014113f2293"},{url:"/static/locales/uz/orderPage.json",revision:"9b783f0890020e201c0202d4f1ae95d0"},{url:"/static/locales/uz/policiesPage.json",revision:"b5f44b7dbb6cc835291ce041b6f98262"},{url:"/static/locales/uz/profilePage.json",revision:"bf1cafd8b033310a574f67454dd33f8f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
