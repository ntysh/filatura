const schemaNodes = {
  "root": {
    "url": "01-root.html",
    "name": "root",
    "width": 320,
    "height": 120,
    "offsetX": -1080,
    "offsetY": -340
  },
  "pocket": {
    "url": "02-pocket.html",
    "name": "pocket",
    "width": 320,
    "height": 120,
    "offsetX": -760,
    "offsetY": -195
  },
  "kharms": {
    "url": "03-kharms.html",
    "name": "kharms",
    "width": 340,
    "height": 120,
    "offsetX": -520,
    "offsetY": -285
  },
  "befriend": {
    "url": "04-befriend.html",
    "name": "befriend",
    "width": 300,
    "height": 105,
    "offsetX": -765,
    "offsetY": -100
  },
  "cyberfeminism": {
    "url": "05-cyberfeminism.html",
    "name": "cyberfeminism",
    "width": 300,
    "height": 100,
    "offsetX": -450,
    "offsetY": -35
  },
  "opportunity": {
    "url": "06-opportunity.html",
    "name": "opportunity",
    "width": 320,
    "height": 110,
    "offsetX": -790,
    "offsetY": 20
  },
  "failure": {
    "url": "07-failure.html",
    "name": "failure",
    "width": 310,
    "height": 100,
    "offsetX": -390,
    "offsetY": 70
  },
  "revolutions": {
    "url": "08-revolutions.html",
    "name": "revolutions",
    "width": 360,
    "height": 135,
    "offsetX": -390,
    "offsetY": 155
  },
  "balaclava": {
    "url": "09-balaclava.html",
    "name": "balaclava",
    "width": 330,
    "height": 115,
    "offsetX": -835,
    "offsetY": 130
  },
  "affirmation": {
    "url": "10-affirmation.html",
    "name": "affirmation",
    "width": 300,
    "height": 100,
    "offsetX": -875,
    "offsetY": 220
  },
  "haunt": {
    "url": "11-haunt.html",
    "name": "haunt",
    "width": 310,
    "height": 100,
    "offsetX": -435,
    "offsetY": 260
  },
  "debug": {
    "url": "12-debug.html",
    "name": "debug",
    "width": 310,
    "height": 100,
    "offsetX": -930,
    "offsetY": 315
  },
  "qa": {
    "url": "13-qa.html",
    "name": "qa",
    "width": 340,
    "height": 100,
    "offsetX": -555,
    "offsetY": 350
  }
};

function getSchemaOrigin() {
  // ASSUMPTION:
  // (0,0) = middle of the RIGHT edge of the main browser window.
  const base = window.opener && !window.opener.closed ? window.opener : window;
  return {
    x: base.screenX + base.outerWidth,
    y: base.screenY + (base.outerHeight / 2)
  };
}

function openNode(id) {
  const item = schemaNodes[id];
  if (!item) return false;

  const origin = getSchemaOrigin();
  const left = Math.round(origin.x + item.offsetX);
  const top = Math.round(origin.y + item.offsetY);

  window.open(
    item.url,
    `mistake-schema-${item.name}`,
    [
      `width=${item.width}`,
      `height=${item.height}`,
      `left=${left}`,
      `top=${top}`,
      'resizable=yes',
      'scrollbars=no',
      'toolbar=no',
      'menubar=no',
      'location=no',
      'status=no'
    ].join(',')
  );

  return false;
}

function openFullSchema() {
  Object.keys(schemaNodes).forEach((id) => openNode(id));
}

async function preloadSchema() {
  const urls = [
    'popup.css',
    ...Object.values(schemaNodes).map(node => node.url)
  ];

  await Promise.all(
    urls.map(url =>
      fetch(url, { cache: 'force-cache' }).catch(() => null)
    )
  );
}
