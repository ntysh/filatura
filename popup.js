const DEFAULT_POPUP_WIDTH = 520;
const DEFAULT_POPUP_HEIGHT = 200;

const FIREFOX_POPUP_CHROME_HEIGHT = 88;

const PRESSED_STATE_MS = 320;

const popupCheck = document.querySelector?.("#popup-check");
const entryGate = document.querySelector?.("#entry-gate");

const openEntryGate = () => {
  if (!entryGate) {
    return;
  }

  entryGate.hidden = false;
  document.body?.classList.add("popup-check-active");
  entryGate.querySelector("#entry-gate-action")?.focus();
};

if (popupCheck) {
  const popupCheckAction = document.querySelector("#popup-check-action");
  const popupCheckStatus = document.querySelector("#popup-check-status");

  popupCheckAction.addEventListener("click", () => {
    const firstWindow = window.open(
      "about:blank",
      "filatura-popup-check-1",
      "popup=yes,width=180,height=120,resizable=yes,scrollbars=yes"
    );
    const secondWindow = window.open(
      "about:blank",
      "filatura-popup-check-2",
      "popup=yes,width=180,height=120,resizable=yes,scrollbars=yes"
    );

    const firstOpened = Boolean(firstWindow);
    const secondOpened = Boolean(secondWindow);

    if (firstWindow && firstWindow !== window) {
      firstWindow.close();
    }
    if (secondWindow && secondWindow !== window) {
      secondWindow.close();
    }

    if (firstOpened && secondOpened) {
      popupCheck.hidden = true;
      openEntryGate();
      return;
    }

    popupCheckStatus.innerHTML = "POP-UPS ARE BLOCKED.<br>ALLOW POP-UPS FOR THIS SITE IN YOUR BROWSER, THEN TRY AGAIN.";
    popupCheckAction.textContent = "TRY AGAIN";
  });
}

entryGate?.querySelector("#entry-gate-action")?.addEventListener("click", () => {
  entryGate.hidden = true;
  document.body?.classList.remove("popup-check-active");
});

document.querySelector?.("#messages")?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  openEntryGate();
});

const buttonWindows = {

  'ylc': [
      {
      url: 'pages/ylc.html',
      name: 'ylc',
      width: 700,
      height: 600,
      offsetX: 0,
      offsetY: 0
    },
    
          {
      url: 'pages/quote-diary.html',
      name: 'ylc2',
      width: 400,
      height: 300,
      offsetX: 0,
      offsetY: 500
    },
 

        {
      url: 'pages/bobine-vid.html',
      name: 'bobine-vid',
      offsetX: 550,
      offsetY: 250,
      width: 200,
      height: 800,
    }
  ],

  'sequence-knitting': [

    {
      url: 'pages/code.html',
      name: 'sequence-code',
      width: 600,
      height: 500,
      offsetX: 400,
      offsetY: 50
    },
    {      url: 'pages/button-01-algorithm-hardware.html',
      name: 'algorithm',
      width: 100,
      height: 100,
      offsetX: 0,
      offsetY: 0
    },

  ],

  'order-menu': [
    {
      url: 'pages/order-menu.html',
      name: 'order-menu-main'
    },
     {      url: 'pages/button-02-click-here-to-code.html',
      name: 'button-02-click-here-to-code',
      width: 100,
      height: 100,
      offsetX: 0,
      offsetY: 0
    },
  ],

  'machine-settings': [
    {
      url: 'pages/machine-settings.html',
      name: 'machine-settings-main'
    },     
    {      url: 'pages/button-03-document-code-index.html',
      name: 'button-03-document-code-index',
      width: 100,
      height: 100,
      offsetX: 0,
      offsetY: 0
    },
  ],

  'service': [
    {
      url: 'pages/service.html',
      name: 'service-main'
    },
    
        {      url: 'pages/button-06-anything-to-code-you.html',
      name: 'button-06-anything-to-code-you',
      width: 100,
      height: 100,
      offsetX: 0,
      offsetY: 0
    },
  ],

  'load-save': [
    {
      url: 'pages/converter.html',
      name: 'ascii-converter',
      width: 960,
      height: 650
    }
  ],

  'edit-knitting-program': [
    {
      url: 'pages/code2.html',
      name: 'edit-knitting-program-main',
      width: 210,
      height: 200,
      offsetX: -400,
      offsetY: -50
    },
    {
      url: 'pages/sintral.html',
      name: 'sintral',
      width: 700,
      height: 600,
      offsetX: 400,
      offsetY: 50
    },
        {
      url: 'pages/code-collage.html',
      name: 'code-collage',
      width: 300,
      height: 300,
      offsetX: -50,
      offsetY: 200
    }      
  ],

  'carriage-speed': [
    {
      url: 'pages/carriage-speed.html',
      name: 'carriage-speed-main',
      width: 600,
      height: 500,
      offsetX: 0,
      offsetY: -50
    },
        {      url: 'pages/button-06-anything-to-code-you.html',
      name: 'button-06-anything-to-code-you',
      width: 100,
      height: 200,
      offsetX: 100,
      offsetY: 100
    }
 
    
  ],

  'racking-correction': [
  {
    url: 'pages/needle1.html',
    name: 'needle-photo-01',
    width: 310,
    height: 420,
    offsetX: 80,
    offsetY: -390
  },



  {
    url: 'pages/needle2.html',
    name: 'needle-photo-02',
    width: 330,
    height: 440,
    offsetX: 170,
    offsetY: 70
  },
    {
    url: 'pages/quote-penelope1.html',
    name: 'quote-penelope1',
    width: 430,
    height: 280,
    offsetX: 430,
    offsetY: -150
  },
    {
    url: 'pages/quote-penelope2.html',
    name: 'quote-penelope2',
    width: 430,
    height: 280,
    offsetX: 600,
    offsetY: 50
  }
  ],

  'setup-pattern': [
    {
      url: 'pages/code-collage.html',
      name: 'code-collage',
      width: 600,
      height: 1200,
    }
  ],

  'release-clamps': [
    {
      url: 'pages/release-clamps.html',
      name: 'release-clamps-main'
    }
  ],

  'yarn-carrier': [
     {
      url: 'pages/guide.html',
      name: 'guide',
      width: 400,
      height: 200,
      offsetX: 110,
      offsetY: 300
    },
        {
      url: 'pages/hook.html',
      name: 'hook',
      width: 400,
      height: 500,
      offsetX: 510,
      offsetY: -50
    }
  ],

 'stitch-tension': [
  {
    "url": "pages/1.html",
    "name": "1",
    "width": 240,
    "height": 90,
    "offsetX": -520,
    "offsetY": -260
  },
  {
    "url": "pages/2.html",
    "name": "2",
    "width": 190,
    "height": 85,
    "offsetX": -330,
    "offsetY": -170
  },
  {
    "url": "pages/3.html",
    "name": "3",
    "width": 180,
    "height": 85,
    "offsetX": -150,
    "offsetY": -280
  },
  {
    "url": "pages/4.html",
    "name": "4",
    "width": 230,
    "height": 90,
    "offsetX": -30,
    "offsetY": -120
  },
  {
    "url": "pages/5.html",
    "name": "5",
    "width": 250,
    "height": 150,
    "offsetX": -260,
    "offsetY": -10
  },
  {
    "url": "pages/6.html",
    "name": "6",
    "width": 220,
    "height": 90,
    "offsetX": -480,
    "offsetY": 80
  },
  {
    "url": "pages/7.html",
    "name": "7",
    "width": 200,
    "height": 90,
    "offsetX": -270,
    "offsetY": 150
  },
  {
    "url": "pages/8.html",
    "name": "8",
    "width": 170,
    "height": 85,
    "offsetX": -70,
    "offsetY": 70
  },
  {
    "url": "pages/9.html",
    "name": "9",
    "width": 210,
    "height": 90,
    "offsetX": -120,
    "offsetY": 230
  },
  {
    "url": "pages/10.html",
    "name": "10",
    "width": 245,
    "height": 90,
    "offsetX": -390,
    "offsetY": 300
  },
  {
    "url": "pages/11.html",
    "name": "11",
    "width": 235,
    "height": 90,
    "offsetX": -610,
    "offsetY": 220
  },
  {
    "url": "pages/12.html",
    "name": "12",
    "width": 130,
    "height": 80,
    "offsetX": -690,
    "offsetY": 40
  },
  {
    "url": "pages/13.html",
    "name": "13",
    "width": 140,
    "height": 80,
    "offsetX": -720,
    "offsetY": -150
  },
  {
    "url": "pages/14.html",
    "name": "14",
    "width": 150,
    "height": 80,
    "offsetX": -560,
    "offsetY": -350
  }
],


  'same-sen-area-size': [
    {
      url: 'pages/same-sen-area-size.html',
      name: 'same-sen-area-size-main'
    }
  ],

  'fabric-take-down': [
    {
      url: 'pages/fabric-take-down.html',
      name: 'fabric-take-down-main'
    },
    {
      url: 'pages/quote-diary2.html',
      name: 'fab',
      width: 400,
      height: 300,
      offsetX: 0,
      offsetY: 500
    },
 
  ],

  // ==========================================================
  // MACHINE START
  // ==========================================================

  'machine-start': [
     { url: 'pages/confirm-message.html',
      name: 'confirm-message',
      width: 600,
      height: 600,
      offsetX: 300,
      offsetY: -300
    },
       { url: 'pages/machine-start.html',
      name: 'machine-start',
      width: 200,
      height: 100,
      offsetX: -100,
      offsetY: -100
      }
  ],


  // ==========================================================
  // MACHINE STOP
  // ==========================================================

  'machine-stop': [
    {
      url: 'pages/machine-stop.html',
      name: 'machine-stop-main',
      width: 100,
      height: 80,
    }
  ],


  'changeable-monitoring': [
    {
      url: 'pages/changeable-monitoring.html',
      name: 'changeable-monitoring-main'
    }
  ],

  'cycle-counters': [
    {
      url: 'pages/cycle-counters.html',
      name: 'cycle-counters-main'
    },
    
           {
      url: 'pages/button-01-algorithm-hardware.html',
      name: 'algorithm',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 0
    },
  ],

  'manual-interventions': [
    {
      url: 'pages/manual-interventions.html',
      name: 'manual-interventions-main'
    }
  ],

  'comb-take-down': [
    {
      url: 'pages/comb-take-down.html',
      name: 'comb-take-down-main'
    }
  ],

 'help': [
   {
      url: 'pages/parts1.html',
      name: 'parts1',
      width: 640,
      height: 500,
      offsetX: 10,
      offsetY: 10
    },

    {
      url: 'pages/parts2.html',
      name: 'parts2',
      width: 400,
      height: 400,
      offsetX: 500,
      offsetY: 150
    },
    {
      url: 'pages/confirm-message.html',
      name: 'confirm-message1',
      offsetX: 350,
      offsetY: -850
    }
    
  ],

  'direct-commands': [
    {
      url: 'pages/direct-commands.html',
      name: 'direct-commands-main'
    },
       {
      url: 'pages/button-01-algorithm-hardware.html',
      name: 'algorithm',
      width: 100,
      height: 100,
      offsetX: 0,
      offsetY: 0
    },
  ],

  'messages': [
    {
      url: 'pages/messages.html',
      name: 'messages-main'
    }
  ],

  'speed-75': [
    {
      url: 'pages/sheep-vid.html',
      name: 'sheep-vid',
            width: 200,
      height: 200,
            offsetX: -500,
      offsetY: -150
    },
      {    url: 'pages/wool-transformation.html',
      name: 'wool',
      width: 800,
      height: 300,
      offsetX: 50,
      offsetY: -50
    },
  ],

  'additional-functions': [
    {
      url: 'pages/additional-functions.html',
      name: 'additional-functions-main',
            width: 800,
      height: 900,
      offsetX: -10,
      offsetY: -100
    },
          {    url: 'pages/knitting.html',
      name: 'wool1',
            width: 200,
      height: 200,
            offsetX: -600,
      offsetY: -100
    },
  ],

  'confirm-message': [
    {
      url: 'pages/confirm-message.html',
      name: 'confirm-message-main'
    },
            {      url: 'pages/button-03-document-code-index.html',
      name: 'button-03-document-code-index',
      width: 100,
      height: 100,
      offsetX: 0,
      offsetY: 0
    }
  ]

};

document.querySelectorAll(".gui-button").forEach((button) => {
  let releaseTimer;

  const press = () => {
    window.clearTimeout(releaseTimer);
    button.classList.add("is-pressed");
  };

  const release = () => {
    window.clearTimeout(releaseTimer);

    releaseTimer = window.setTimeout(() => {
      button.classList.remove("is-pressed");
    }, PRESSED_STATE_MS);
  };

  button.addEventListener("pointerdown", press);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("pointerleave", release);

  button.addEventListener("click", (event) => {
    press();
    release();

    const usesNativeNavigation =
      event.defaultPrevented
      || event.detail === 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey;

    if (usesNativeNavigation) {
      return;
    }

    const buttonRect = button.getBoundingClientRect();

    const viewportScreenX =
      event.screenX - event.clientX;

    const viewportScreenY =
      event.screenY - event.clientY;

    const buttonCenterX =
      viewportScreenX
      + buttonRect.left
      + buttonRect.width / 2;

    const buttonCenterY =
      viewportScreenY
      + buttonRect.top
      + buttonRect.height / 2;

    const configuredWindows = buttonWindows[button.id];

    const windowsToOpen =
      configuredWindows && configuredWindows.length > 0
        ? configuredWindows
        : [
            {
              url: button.href,
              name: `${button.id}-main`
            }
          ];

    event.preventDefault();

    windowsToOpen.forEach((item, index) => {

      const popupWidth =
        Number(item.width)
        || Number(button.dataset.popupWidth)
        || DEFAULT_POPUP_WIDTH;

      const popupHeight =
        Number(item.height)
        || Number(button.dataset.popupHeight)
        || DEFAULT_POPUP_HEIGHT;

      let popupLeft =
        buttonCenterX - popupWidth / 2;

      let popupTop =
        buttonCenterY
        - (
            popupHeight
            + FIREFOX_POPUP_CHROME_HEIGHT
          ) / 2;

      popupLeft += Number(item.offsetX) || 0;
      popupTop += Number(item.offsetY) || 0;

      if (Number.isFinite(Number(item.left))) {
        popupLeft = Number(item.left);
      }

      if (Number.isFinite(Number(item.top))) {
        popupTop = Number(item.top);
      }

      const features = [
        "popup=yes",
        `width=${popupWidth}`,
        `height=${popupHeight}`,
        `left=${Math.round(popupLeft)}`,
        `top=${Math.round(popupTop)}`,
        "resizable=yes",
        "scrollbars=yes"
      ].join(",");

      const windowName =
        item.name || `${button.id}-${index}`;

      const popupWindow = window.open(
        item.url || button.href,
        windowName,
        features
      );

      if (!popupWindow) {
        return;
      }

      popupWindow.opener = null;

      popupWindow.focus();

    });

  });

});
