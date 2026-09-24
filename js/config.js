window.ALAD_CONFIG = {
  "stageWidth": 3584,
  "stageHeight": 864,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": false,
  "clockTimezone": "America/Lima",
  "projectId": "p_mue9bui327ucfh",
  "backgrounds": [
    {
      "id": "b_muedu5se9cy5kb",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mue9bui327ucfh/1790262822728_gloria_1920x1080.mp4",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_mue9qk2h29m1ca",
      "type": "countdown",
      "target": "2026-12-26T04:59:00.000Z",
      "tokenPrefix": "cuenta-regresiva-navidad"
    }
  ],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [
    {
      "id": "bp_muecfufu7s53gu",
      "maxWidth": 1920,
      "width": 1920,
      "height": 1080
    }
  ],
  "elements": [
    {
      "id": "e_mue9rbxvh16y06",
      "resourceId": "r_mue9qk2h29m1ca",
      "type": "countdown",
      "enabled": true,
      "x": 3.7,
      "y": 19.1,
      "width": 26,
      "height": 29.9,
      "align": "center",
      "zIndex": 2,
      "fontSize": 192,
      "fontWeight": "700",
      "color": "#e7c872",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 30,
      "lineHeight": 1.2,
      "fontFamilyKey": "BodoniModa_9pt-ExtraBold",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_muecfufu7s53gu": {
          "x": 3.5,
          "y": 26.8,
          "fontSize": 126
        }
      },
      "countdownTarget": "2026-10-23T15:39:58.387Z",
      "countdownLabels": false,
      "padZero": true,
      "countdownShowDays": true,
      "countdownShowHours": false,
      "countdownShowMinutes": false,
      "countdownShowSeconds": false
    },
    {
      "id": "e_mue9t30178yc53",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 2,
      "y": 18.7,
      "width": 11.2,
      "height": 37.7,
      "align": "center",
      "zIndex": 2,
      "fontSize": 192,
      "fontWeight": "300",
      "color": "#e7c872",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "BodoniModa_9pt-ExtraBold",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_muecfufu7s53gu": {
          "width": 10,
          "x": 2.5,
          "y": 26.5,
          "fontSize": 131
        }
      },
      "text": "0"
    }
  ]
};
