if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"d1b55877ea57dc01e52cd24b4139bce4","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"d1b55877ea57dc01e52cd24b4139bce4","url":"index.html"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"0c94f669654eac4dc4a5055e761e1ef7","url":"static/css/21.d0ad5517.chunk.css"},{"revision":"32eb27d1b10be0ad326a0c10f2731d22","url":"static/js/0.1c3e745f.chunk.js"},{"revision":"69fd178e0d768cc7cd79c2da7080ba58","url":"static/js/1.173dd8fc.chunk.js"},{"revision":"fc732a71d2f202c4d0d1e5ce1e4dd498","url":"static/js/10.c925a1b6.chunk.js"},{"revision":"5a14ce81cfb6f1bb0cd1e5ad2152f61a","url":"static/js/11.620de4f8.chunk.js"},{"revision":"093f412d1ae57e171b543efc06b9cb24","url":"static/js/12.9a1f7f54.chunk.js"},{"revision":"eccac03c10a7fdd15a26f751c4d162cb","url":"static/js/13.6b35a436.chunk.js"},{"revision":"d924c73fc9db3c1c7f282e00b719f136","url":"static/js/14.56eb67d9.chunk.js"},{"revision":"6d27135814e4f14c5e3517b66e1432b1","url":"static/js/15.72020197.chunk.js"},{"revision":"08b8318336e7defa1267d15f3e2efbef","url":"static/js/16.7a8f18fd.chunk.js"},{"revision":"4a76062872afeed2e0e60ce6e37d2bcf","url":"static/js/17.a95ad851.chunk.js"},{"revision":"46ade1c3e21b9aaf0555836bafb8bb6f","url":"static/js/18.86f0e7d8.chunk.js"},{"revision":"d2e299707bfbaf49e84c3d3b6189bd9a","url":"static/js/19.3b0567e7.chunk.js"},{"revision":"dc83222c76cef8513e4d43e2df1502f9","url":"static/js/2.0ffb00f7.chunk.js"},{"revision":"7b3639e3e940a18cb480af7f59b98dd9","url":"static/js/20.465da881.chunk.js"},{"revision":"da8d1298cf0d6edf3a5148e574def2a3","url":"static/js/21.c34c3a02.chunk.js"},{"revision":"73e7477a5190b8dc119fe7e0634c4a27","url":"static/js/22.102d4800.chunk.js"},{"revision":"d8a19042832f21245f0909691e6ba97b","url":"static/js/23.153d5299.chunk.js"},{"revision":"1be9c069b16a1e4f9a13c27184382b43","url":"static/js/24.19d0ad07.chunk.js"},{"revision":"67a9f5cbe625ee34bb2c1601736335a7","url":"static/js/25.162dd1e0.chunk.js"},{"revision":"6b032cde5d0871331ab81f6ea019c920","url":"static/js/26.cc4aa3bb.chunk.js"},{"revision":"46ab21540d4369023b776edcf6f0b40d","url":"static/js/27.f7ae0354.chunk.js"},{"revision":"4ce3d31811ac60cbfc78e1674fb90044","url":"static/js/28.2087d57a.chunk.js"},{"revision":"81327c02fa31f670bba20240b9ef00a0","url":"static/js/29.0b8705f8.chunk.js"},{"revision":"4dd82e6484fdf82730d76b203e3ea6c2","url":"static/js/3.c0b1f7fb.chunk.js"},{"revision":"dee0b7228793233c8ea4b24510731c49","url":"static/js/30.24ee8336.chunk.js"},{"revision":"d20353dca020d183e8953652aeb11340","url":"static/js/31.b330fa28.chunk.js"},{"revision":"63a99f551a5daf717e6c24e5314119de","url":"static/js/32.22168364.chunk.js"},{"revision":"b9138d83c346b41ad4e96cf04217ee25","url":"static/js/33.778715e1.chunk.js"},{"revision":"b667d8a05b47f6f1972003d87c64236c","url":"static/js/34.7eed0e3c.chunk.js"},{"revision":"ee42af092f4ea46b71499fd3b5deda58","url":"static/js/35.b3b72d13.chunk.js"},{"revision":"a4235e3ce6181d45c7d35cb12ed0dfa0","url":"static/js/36.9bc1b571.chunk.js"},{"revision":"c02f63e9f86e8e3767e9fca78b7b63b6","url":"static/js/37.8157a5c2.chunk.js"},{"revision":"7672c03ab8c142171feb92f6480a88a8","url":"static/js/38.e06dd333.chunk.js"},{"revision":"a0282a66d871d2126f7d4c5e5610b030","url":"static/js/39.ba3da673.chunk.js"},{"revision":"945daa7fe4ffbf5338808dba96f76175","url":"static/js/4.0b49e78b.chunk.js"},{"revision":"6043eb0f8ce4418e51da23cb4e21f849","url":"static/js/40.e7abb317.chunk.js"},{"revision":"cf5ec7df567bd9b047335fc91e508832","url":"static/js/41.06cf3ae4.chunk.js"},{"revision":"5a5bb8a6c0d6579f2d88c0c858d85330","url":"static/js/42.6acbc95c.chunk.js"},{"revision":"0de16e1c56f521d7c24506a0d5698efa","url":"static/js/43.3259322d.chunk.js"},{"revision":"e5f7c38347ed703a3cb79d8af775437b","url":"static/js/44.b916d8ab.chunk.js"},{"revision":"35d2ce3d5c83707cf83d9f534096ebc9","url":"static/js/45.64f2124e.chunk.js"},{"revision":"97dbfb5da5bd0a848dd8c9a52ab00b61","url":"static/js/46.1ef2a2e5.chunk.js"},{"revision":"5ebdba880d5c252b56dbd6072d687a52","url":"static/js/47.6c4f5bc9.chunk.js"},{"revision":"716db8fda3788361940f5b31fa483ef4","url":"static/js/5.8d6c69ef.chunk.js"},{"revision":"ca95a8b4eb7fa2dc7588b5ca433b4dfc","url":"static/js/6.ec4ecd94.chunk.js"},{"revision":"3c47b210566d53d4965c32a93e67ed22","url":"static/js/7.78e898a3.chunk.js"},{"revision":"dc3e518603b9ca3014e3fce456ee22a4","url":"static/js/main.93ed9163.chunk.js"},{"revision":"dd56dda2f1020a36a61a1e0608a2f45b","url":"static/js/runtime-main.8fc51b5a.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
