<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UPDATE LOG</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      height: 100vh;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Courier New", Courier, monospace;
    }
    .container {
      width: 255px;
      height: 353px;
      background: #000814;
      border: 2px solid #00aaff;
      box-shadow: 0 0 25px rgba(0, 170, 255, 0.6);
      overflow: hidden;
      position: relative;
      color: #bbddff;
    }
    .banner {
      width: 100%;
      height: 72px;
      display: block;
      background: #000;
    }
    .content {
      height: calc(353px - 72px);
      padding: 8px 11px 8px;
      font-size: 10.5px;
      line-height: 1.35;
      overflow-y: auto;
      color: #a0e0ff;
    }
    .build-label {
      color: #ffff44;
      font-weight: bold;
      font-size: 11.5px;
      margin-bottom: 9px;
      text-shadow: 0 0 5px #ffff44;
    }
    .section {
      margin-bottom: 13px;
    }
    .version {
      color: #00ffaa;
      font-weight: bold;
      font-size: 11px;
      display: block;
      margin-bottom: 4px;
      border-bottom: 1px solid rgba(0, 255, 170, 0.3);
      padding-bottom: 2px;
    }
    ul {
      list-style: none;
      margin-left: 12px;
    }
    li {
      position: relative;
      margin: 2px 0;
    }
    li:before {
      content: "■";
      position: absolute;
      left: -13px;
      color: #00ffaa;
      font-size: 9px;
    }
    .divider {
      height: 1px;
      background: #00aaff;
      box-shadow: 0 0 6px #00aaff;
      margin: 9px 0;
    }
  </style>
</head>
<body>

    <div class="build-label">LATEST AVAILABLE BUILD: 0.0.I</div>

    <div class="section">
      <span class="version">V0.0.I</span>
      <ul>
        <li>ADDED SPOON CHARACTER</li>
        <li>REMOVED SPOON CHARACTER</li>
        <li>ADDED DLC</li>
        <li>UPDATED MOVEMENT</li>
        <li>TWEAKED DLC</li>
        <li>TWEAKED EARN RATES</li>
      </ul>
      <div class="divider"></div>
    </div>

    <div class="section">
      <span class="version">V0.0.I</span>
      <ul>
        <li>EXAMPLE TEXT UPDATE</li>
        <li>NEW OUTFITS</li>
      </ul>
      <div class="divider"></div>
    </div>

    <div class="section">
      <span class="version">V0.0.I</span>
      <ul>
        <li>TOWNMAP REVAMP</li>
        <li>KYOTO ADDED</li>
        <li>FIXED RANKED BUG FIX</li>
      </ul>
    </div>

  </div>
</div>

</body>
</html>
