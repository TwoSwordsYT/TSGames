<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Update Log</title>

<style>
body {
    margin: 0;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* FIXED PANEL SIZE */
.container {
    width: 254px;
    height: 353px;
    background: #000;
    color: #00bfff;
    font-family: Arial, Helvetica, sans-serif;
    overflow-y: auto; /* scroll if needed */
    border: 1px solid #00bfff;
}

/* HEADER IMAGE */
.header-img {
    width: 100%;
    display: block;
}

/* SUBHEADER */
.subheader {
    font-size: 10px;
    padding: 6px;
    border-bottom: 1px solid #00bfff;
    text-align: center;
}

/* SECTION */
.section {
    padding: 6px;
}

/* VERSION TEXT */
.version {
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 4px;
}

/* LIST */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    font-size: 10px;
    margin: 3px 0;
    padding-left: 10px;
    position: relative;
}

/* custom bullets */
li::before {
    content: "";
    width: 4px;
    height: 4px;
    background: #00bfff;
    position: absolute;
    left: 0;
    top: 5px;
}

/* DIVIDER */
.divider {
    border-bottom: 1px solid #00bfff;
    margin: 6px 0;
}
</style>
</head>

<body>

<div class="container">

    <img src="updatelog.png" class="header-img">

    <div class="subheader">LATEST AVAILABLE BUILD: 0.0.1</div>

    <div class="section">
        <div class="version">V0.0.1</div>
        <ul>
            <li>ADDED SPOON CHARACTER</li>
            <li>REMOVED SPOON CHARACTER</li>
            <li>ADDED DLC CONTENT</li>
            <li>UPDATED MOVEMENT</li>
            <li>TWEAKED DLC</li>
            <li>TWEAKED EARN RATES</li>
        </ul>
    </div>

    <div class="divider"></div>

    <div class="section">
        <div class="version">V0.0.1</div>
        <ul>
            <li>EXAMPLE TEXT UPDATE</li>
            <li>NEW OUTFITS</li>
        </ul>
    </div>

    <div class="divider"></div>

    <div class="section">
        <div class="version">V0.0.1</div>
        <ul>
            <li>TOWNMAP REVAMP</li>
            <li>KYOTO ADDED</li>
            <li>FIXED RANKED BUG FIX</li>
        </ul>
    </div>

</div>

</body>
</html>
