<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Update Log</title>

<style>
/* Remove all default spacing */
html, body {
    margin: 0;
    padding: 0;
    background: #000;
}

/* EXACT SIZE LOCK */
.wrapper {
    width: 254px;
    height: 353px;
    overflow: hidden;
    border: 1px solid #00bfff;
    font-family: Arial, Helvetica, sans-serif;
    color: #00bfff;
}

/* HEADER IMAGE */
.header-img {
    width: 254px;
    height: 50px;
    object-fit: cover;
    display: block;
}

/* SUBHEADER */
.subheader {
    font-size: 9px;
    text-align: center;
    padding: 4px;
    border-bottom: 1px solid #00bfff;
}

/* CONTENT AREA */
.content {
    padding: 5px;
    font-size: 9px;
    line-height: 1.15;
}

/* VERSION */
.version {
    font-weight: bold;
    margin-top: 4px;
}

/* BULLET STYLE */
.item::before {
    content: "■ ";
}

/* DIVIDER */
.divider {
    border-bottom: 1px solid #00bfff;
    margin: 5px 0;
}
</style>
</head>

<body>

<div class="wrapper">

    <img src="updatelog.png" class="header-img">

    <div class="subheader">
        LATEST AVAILABLE BUILD: 0.0.1
    </div>

    <div class="content">

        <div class="version">V0.0.1</div>
        <div class="item">ADDED SPOON CHARACTER</div>
        <div class="item">REMOVED SPOON CHARACTER</div>
        <div class="item">ADDED DLC CONTENT</div>
        <div class="item">UPDATED MOVEMENT</div>
        <div class="item">TWEAKED DLC</div>
        <div class="item">TWEAKED EARN RATES</div>

        <div class="divider"></div>

        <div class="version">V0.0.1</div>
        <div class="item">EXAMPLE TEXT UPDATE</div>
        <div class="item">NEW OUTFITS</div>

        <div class="divider"></div>

        <div class="version">V0.0.1</div>
        <div class="item">TOWNMAP REVAMP</div>
        <div class="item">KYOTO ADDED</div>
        <div class="item">FIXED RANKED BUG FIX</div>

    </div>

</div>

</body>
</html>
