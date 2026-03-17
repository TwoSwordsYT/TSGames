<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Update Log</title>

<style>
html, body {
    margin: 0;
    padding: 20px;
    background: #000;
}

/* SCALE WRAPPER (THIS IS THE MAGIC) */
.scale {
    transform: scale(0.75);        /* adjust this */
    transform-origin: top left;    /* keeps it aligned */
}

/* MAIN PANEL */
.wrapper {
    width: 241px;
    height: 335px;
    overflow: hidden;
    border: 1px solid #00bfff;
    font-family: Arial, Helvetica, sans-serif;
    color: #00bfff;
}

/* HEADER IMAGE */
.header-wrap {
    width: 100%;
    height: 55px;
    overflow: hidden;
}

.header-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* SUBHEADER */
.subheader {
    font-size: 8px;
    text-align: center;
    padding: 3px;
    border-bottom: 1px solid #00bfff;
}

/* CONTENT */
.content {
    padding: 4px;
    font-size: 8px;
    line-height: 1.1;
}

/* VERSION */
.version {
    font-weight: bold;
    margin-top: 3px;
}

/* BULLETS */
.item::before {
    content: "■ ";
}

/* DIVIDER */
.divider {
    border-bottom: 1px solid #00bfff;
    margin: 4px 0;
}
</style>
</head>

<body>

<div class="scale">
    <div class="wrapper">

        <div class="header-wrap">
            <img src="images/updatelog.png">
        </div>

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
</div>

</body>
</html>
