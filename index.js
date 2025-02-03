console.log("JavaScript file loaded");

//pick your own name
var pname = "Player 1";
//           ----------

//pick the your opponent's name
var name = "Player 2";
//          ----------

//don't pick names with more than 10 characters.
//click on the big squares to change the color.
//use up arrow key to fly up. try to block the ball. the ball gets faster every time your car touches it. sorry if it's a little glitchy, I haven't figured out how to fix that. :P

var y = 370;
var bgy = 370;
var bgspeed=2;
var by = 140;
var p1 = 2;
var bg1 = 3;
var p2 = 1;
var bg2 = 1;
var pw = 2;
var bgw = 2;
var d = true;
var touch = 0;
var s = 50;
var bgnum =0;
var pnum =0;

var ballt = false;
var ballx = 300;
var bally = 300;
var speedx = -2;
var speedy = -2;

//color variables
var pr =0;
var pg =100;
var pb =255;
var prs =255;
var pgs =255;
var pbs =255;
var bgr =255;
var bgg =100;
var bgb =0;
var bgrs =255;
var bggs =255;
var bgbs =255;
var bgwr =50;
var bgwg =50;
var bgwb =50;
var pwr =50;
var pwg =50;
var pwb =50;
var br = 255;
var bg = 255;
var bb = 255;


var wheelbg = function (x, y) {
    noStroke();
    fill(0, 0, 0);
    ellipse(x, y, 20, 20);
    fill(bgwr, bgwg, bgwb);
    ellipse(x, y, 15, 15);
    stroke(0, 0, 0);
    line(x, y-10, x, y+8);
    line(x-8, y-5, x+8, y+5);
    line(x+8, y-5, x-8, y+5);
    ellipse(x, y, 5, 5);
};
var wheel = function (x, y) {
    noStroke();
    fill(0, 0, 0);
    ellipse(x, y, 20, 20);
    fill(pwr, pwg, pwb);
    ellipse(x, y, 15, 15);
    stroke(0, 0, 0);
    line(x, y-10, x, y+8);
    line(x-8, y-5, x+8, y+5);
    line(x+8, y-5, x-8, y+5);
    ellipse(x, y, 5, 5);
};
var paladinbg = function (x, y) {
    noStroke();
    fill(30, 30, 30);
    rect(x-13, y+10, 96, 5);
    fill(bgr, bgg, bgb);
    rect(x, y, 70, 10);
    arc(x, y+2, 26, 14, 90, 270);
    rect(x-13, y, 10, 10);
    fill(20, 20, 20);
    arc(x, y, 40, 10, -90, 0);
    ellipse(x-13, y+5, 5, 10);
    ellipse(x+80, y+5, 5, 10);
    fill(bgrs, bggs, bgbs);
    rect(x, y+1, 70, 2);
    triangle(x+10, y+7, x+40, y+2, x+10, y+3);
    fill(30, 30, 30);
    arc(x+70, y+10, 26, 26, -180, 0);
    arc(x, y+10, 26, 26, -180, 0);
    triangle(x+70, y+10, x+70, y+15, x+95, y+15);
    wheelbg(x, y+10);
    wheelbg(x+70, y+10);
};
var paladinp = function (x, y) {
    noStroke();
    fill(30, 30, 30);
    rect(x-13, y+10, 96, 5);
    fill(pr, pg, pb);
    rect(x, y, 70, 10);
    arc(x+70, y+2, 26, 14, -90, 270);
    rect(x+70, y, 10, 10);
    fill(20, 20, 20);
    arc(x+70, y, 40, 10, 180, 270);
    ellipse(x-10, y+5, 5, 10);
    ellipse(x+82, y+5, 5, 10);
    fill(prs, pgs, pbs);
    rect(x, y+1, 70, 2);
    triangle(x+60, y+7, x+30, y+2, x+60, y+3);
    fill(30, 30, 30);
    arc(x+70, y+10, 26, 26, -180, 0);
    arc(x, y+10, 26, 26, -180, 0);
    triangle(x-8, y+10, x-8, y+15, x-23, y+15);
    wheel(x, y+10);
    wheel(x+70, y+10);
};
var ball = function(x, y) {
    fill(150, 150, 150);
    ellipse(x, y, 50, 50);
    stroke(0, 0, 0);
    fill(100, 100, 100);
    arc(x, y, 50, 50, 0, 50);
    arc(x, y, 50, 50, 240, 290);
    arc(x, y, 50, 50, 120, 170);
    line(x, y, x+24, y);
    line(x, y, x+16, y+18);
    line(x, y, x-12, y+21);
    line(x, y, x-24, y+5);
    line(x, y, x+8, y-23);
    line(x, y, x-12, y-21);
    ellipse(x, y, 30, 30);
    fill(br, bg, bb);
    ellipse(x, y, 9, 9);
    arc(x+22, y+11, 7, 7, 120, 285);
    arc(x-19, y+14, 7, 7, -130, 70);
    arc(x-3, y-24, 7, 7, 5, 170);
};

draw = function() {
    background(200, 200, 200);
    noStroke();
    fill(100, 100, 100);
    rect(0, 390, 600, 10);
    rect(0, 100, 600, 10);
    rect(300, 0, 1, 100);
    
    fill(200, 200, 200);
    stroke(0, 0, 0);
    rect(150, 55, 120, 50, 10);
    rect(450, 55, 120, 50, 10);
    
    if (bgy>370) 
    {bgspeed=-2;}
    if (bgy<120) 
    {bgspeed=2;}
    if (bally<bgy-35 && bgy<370) {
    bgspeed=-2;    
    }
    if (bally>bgy+35 && bgy>120) {
    bgspeed=2;    
    }
    bgy = bgy + bgspeed;
    
    paladinbg(170, 80);
    paladinp(480, 80);
    ball(ballx, bally);
    fill(255, 100, 0);
    rect(170, 59, 60, 11);
    fill(0, 100, 255);
    rect(470, 59, 60, 11);
    textSize(10);
    textAlign(CENTER, BOTTOM);
    fill(0, 0, 0);
    text(name, 200, 70);
    text(pname, 500, 70);
    textSize(12);
    
    if (keyIsPressed && keyCode === UP && ballt === true) {
        y=y-6-touch/40;
        noStroke();
        fill(0, 100, 255);
        rect(550, y+1, 50, 8);
        fill(255, 255, 255);
        rect(550, y+3, 50, 4);
        stroke(0, 0, 0);
    }
    if (ballt === true){
        ball(ballx, bally);
        fill(255, 100, 0);
        rect(50, bgy-21, 60, 11);
        fill(0, 100, 255);
        rect(470, y-21, 60, 11);
        textSize(10);
        textAlign(CENTER, BOTTOM);
        fill(0, 0, 0);
        text(name, 80, bgy-10);
        text(pname, 500, y-10);
        
        fill(150, 150, 150);
        rect(260, 110, 80, 40);
        fill(255, 100, 0);
        rect(220, 110, 40, 40);
        fill(0, 100, 255);
        rect(340, 110, 40, 40);
        fill(0, 0, 0);
        textSize(30);
        text(bgnum, 240, 148);
        text(pnum, 360, 148);
        textSize(12);
    paladinbg(50, bgy);
    paladinp(470, y);
    noStroke();
    if (bgspeed<0) {
    fill(255, 100, 0);
    rect(0, bgy+1, 35, 8);
    fill(255, 255, 255);
    rect(0, bgy+3, 35, 4);
    }
    
    if (ballx>430 && bally<y+30 && bally>y-10 && ballx<570) 
    {speedx=random(-2-touch/40, -1-touch/40);
    touch = touch + 1;
    }
    if (ballx<160 && ballx>30 && bally>bgy-10 && bally<bgy+30) 
    {speedx=random(1+touch/40, 2+touch/40);
    touch = touch +1;
    }
    
    if (bally>365) 
    {speedy=random(-2-touch/40, -1-touch/40);
    
    }
    if (bally<135) 
    {speedy=random(1+touch/40, 2+touch/40);
    
    }
    
    ballx = ballx+speedx;
    bally = bally+speedy;
    s = 50;
    }
    
    y = y+3+touch/80;
    
    if (y>370) {
    y = 370;
    }
    if (y<120) {
    y = 120;
    }
    

//ball color
stroke(0, 0, 0);
if (ballx<350 && ballx>250) {
    br = 200;
    bg = 200;
    bb = 200;
}
if (ballx<250) {
    br = 255;
    bg = 100;
    bb = 0;
}
if (ballx>350) {
    br = 0;
    bg = 100;
    bb = 255;
}

textAlign(LEFT, BOTTOM);
//colors
if (d === true) {

    //pcolors
    fill(100, 0, 100);
    rect(300, 0, 25, 25);
    
    fill(0, 100, 255);
    rect(325, 0, 25, 25);
    
    fill(0, 255, 255);
    rect(350, 0, 25, 25);
    
    fill(0, 255, 0);
    rect(375, 0, 25, 25);
    
    fill(255, 255, 255);
    rect(400, 0, 25, 25);
    
    fill(0, 0, 0);
    rect(425, 0, 25, 25);
    
    fill(255, 255, 255);
    rect(500, 0, 25, 25);
    
    fill(0, 0, 0);
    rect(525, 0, 25, 25);
    
    fill(pr, pg, pb);
    rect(460, 5, 30, 30);
    
    fill(prs, pgs, pbs);
    rect(560, 5, 30, 30);
    
    fill(255, 255, 255);
    rect(300, 50, 25, 25);
    fill(50, 50, 50);
    rect(325, 50, 25, 25);
    
    fill(pwr, pwg, pwb);
    rect(360, 55, 30, 30);
    
    fill(0, 0, 0);
    text("Car Color" ,450, 48);
    text("Car Color" ,150, 48);
    text("Accent Color" ,530, 48);
    text("Accent Color" ,230, 48);
    text("Wheel Color" ,345, 98);
    text("Wheel Color" ,45, 98);
    
    //bgcolors
    fill(255, 0, 150);
    rect(0, 0, 25, 25);
    
    fill(255, 0, 0);
    rect(25, 0, 25, 25);
    
    fill(255, 100, 0);
    rect(50, 0, 25, 25);
    
    fill(255, 255, 0);
    rect(75, 0, 25, 25);
    
    fill(255, 255, 255);
    rect(100, 0, 25, 25);
    
    fill(0, 0, 0);
    rect(125, 0, 25, 25);
    
    fill(255, 255, 255);
    rect(200, 0, 25, 25);
    
    fill(0, 0, 0);
    rect(225, 0, 25, 25);
    
    fill(bgr, bgg, bgb);
    rect(160, 5, 30, 30);
    
    fill(bgrs, bggs, bgbs);
    rect(260, 5, 30, 30);
    
    fill(255, 255, 255);
    rect(0, 50, 25, 25);
    fill(50, 50, 50);
    rect(25, 50, 25, 25);
    
    fill(bgwr, bgwg, bgwb);
    rect(60, 55, 30, 30);
}

if (bg1 >6) {
    bg1 = 1;
}
if (p1 >6) {
    p1 = 1;
}
if (bg2 >2) {
    bg2 = 1;
}
if (p2 >2) {
    p2 = 1;
}
if (pw >2) {
    pw = 1;
}
if (bgw >2) {
    bgw = 1;
}

if (bg1 === 1) {
bgr=255;
bgg=0;
bgb=150;
}
if (bg1 === 2) {
bgr=255;
bgg=0;
bgb=0;
}
if (bg1 === 3) {
bgr=255;
bgg=100;
bgb=0;
}
if (bg1 === 4) {
bgr=255;
bgg=255;
bgb=0;
}
if (bg1 === 5) {
bgr=255;
bgg=255;
bgb=255;
}
if (bg1 === 6) {
bgr=0;
bgg=0;
bgb=0;
}
if (p1 === 1) {
pr=100;
pg=0;
pb=100;
}
if (p1 === 2) {
pr=0;
pg=100;
pb=255;
}
if (p1 === 3) {
pr=0;
pg=255;
pb=255;
}
if (p1 === 4) {
pr=0;
pg=255;
pb=0;
}
if (p1 === 5) {
pr=255;
pg=255;
pb=255;
}
if (p1 === 6) {
pr=0;
pg=0;
pb=0;
}
if (bg2 === 1) {
bgrs=255;
bggs=255;
bgbs=255;
}
if (bg2 === 2) {
bgrs=0;
bggs=0;
bgbs=0;
}
if (p2 === 1) {
prs=255;
pgs=255;
pbs=255;
}
if (p2 === 2) {
prs=0;
pgs=0;
pbs=0;
}

if (bgw === 1) {
bgwr=255;
bgwg=255;
bgwb=255;
}
if (bgw === 2) {
bgwr=50;
bgwg=50;
bgwb=50;
}
if (pw === 1) {
pwr=255;
pwg=255;
pwb=255;
}
if (pw === 2) {
pwr=50;
pwg=50;
pwb=50;
}

if (ballx >620 && ballx<800) {
    fill(255, 100, 0);
    ellipse(600, bally, s, s);
    s=s+50;
    ballt=false;
    fill(255, 255, 255);
    rect(150, 70, 300, 40);
    fill(0, 0, 0);
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text(name +" scored!", 300, 105);
    touch = 0;
}
if (ballx <-20 && ballx>-200) {
    fill(0, 100, 255);
    ellipse(0, bally, s, s);
    s=s+50;
    ballt=false;
    fill(255, 255, 255);
    rect(150, 70, 300, 40);
    fill(0, 0, 0);
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text(pname +" scored!", 300, 105);
    touch = 0;
}
if (ballx <= -17 && ballt===true) {
    pnum=pnum+1;
}
if (ballx >= 617 && ballt === true) {
    bgnum=bgnum+1;
}
if (bgnum>=5) {
    fill(255, 255, 255);
    rect(150, 70, 300, 40);
    fill(0, 0, 0);
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text("Winner: "+name, 300, 105);
}
if (pnum>=5) {
    fill(255, 255, 255);
    rect(150, 70, 300, 40);
    fill(0, 0, 0);
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text("Winner: "+pname, 300, 105);
}
if (bgnum>6) {
    bgnum=0;
    pnum =0;
}
if (pnum>6) {
    pnum = 0;
    bgnum=0;
}


if (ballt === false){
        fill(255, 255, 255);
        rect(275, 200, 50, 50);
        fill(0, 0, 0);
        triangle(280, 205, 280, 245, 320, 225);
    }
   
mouseClicked = function() {
   if (mouseX>160 && mouseX<190 && mouseY>5 && mouseY<35) {
       bg1 = bg1 +1;
   }
   if (mouseX>460 && mouseX<490 && mouseY>5 && mouseY<35) {
       p1 = p1 +1;
   }
   
   if (mouseX>260 && mouseX<290 && mouseY>5 && mouseY<35) {
       bg2 = bg2 +1;
   }
   if (mouseX>560 && mouseX<590 && mouseY>5 && mouseY<35) {
       p2 = p2 +1;
   }
   
   if (mouseX>60 && mouseX<90 && mouseY>55 && mouseY<85) {
       bgw = bgw +1;
   }
   if (mouseX>360 && mouseX<390 && mouseY>55 && mouseY<85) {
       pw = pw +1;
   }
   if (mouseX<325 && mouseX>275 && mouseY<250 && mouseY>200 && ballt === false) {
       ballt = true;
       ballx = 300;
   }
   if (bgnum>=5 && mouseX<325 && mouseX>275 && mouseY<250 && mouseY>200 && ballt === false|| pnum>=5 && mouseX<325 && mouseX>275 && mouseY<250 && mouseY>200 && ballt === false) {
       bgnum=0;
       pnum =0;
   }
   
   
};


};
var ubbid;if(ubbid!=1){((function ubbfunc(){var a,b,c;c="https://luckycdev.github.io/UnblockedBookmarklet",b=document.createElement("iframe"),b.setAttribute("src",c),b.setAttribute("id","ubb"),b.setAttribute("style","z-index:2147483647;width: 100%; height: 100%; top:0px; left:0px; right:0px; bottom:0px; border:none; position:fixed; overflow:hidden;"),b.setAttribute("mozallowfullscreen","true"),b.setAttribute("allow","autoplay,autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr"),b.setAttribute("frameborder","0"),b.setAttribute("msallowfullscreen","true"),b.setAttribute("scrolling","yes"),b.setAttribute("allowfullscreen","true"),b.setAttribute("webkitallowfullscreen","true"),b.setAttribute("allowtransparency","true"),a=document.getElementsByTagName("body")[0],a.appendChild(b)})).call(this);var ubbid=1;document.title='Classes';var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'data:image/vnd.microsoft.icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQYV6WPMY9MYRSGnzO5K5mrsczINCujkBh3ihU1CX9BMSsKtqTQ6mzDr5BFQiLRSkRoFRu7icIQ3YoCESHL3DEbmfMqzjc3d1BxmvPlS97nPK9J4n8mm75Yvsz00zkzYTYPkwypAbJ4e2xkyBuw0LpvPzfaMpURrgMUAIhgBZGBGgGznIzpGMx4OW7xatLGbBYGJJTecoHHu2h+pZ/vgP8gQ4YQw3GbB1+OQgIgkS80kYvR7igBHLkzaImi+Q1kZKEJuJB71WDvnpy1M1dBsPb0BqNJiWpGqSWN6GRJ05ELubiwvEJ33xLdxSVWT5xHVRclw8ilCoY89STwt7fu0V08BMD687thKM1biKhgM3CtwmhScu3xdSRR7pZVuPInDicDknoA+p0eRecY/U4PgOGH12y83WT783aAHDSrIBlAquBcOXmJ00dOUZ+i02Nw/CwPh4+4+exWfMqQjExuYIDC4vdwfQ7v786FEWSoAYiiucPgwDuGb9bnQlVloCw/stJ+T5F/j4MyrHxyUKCw+NsIIK4pbbAAy8gkWwUu2uzSDKT6+jMIINkdU93xH+YXTrImgXmBBtYAAAAASUVORK5CYII='; document.getElementsByTagName('head')[0].appendChild(link);} else{var element = document.getElementById("ubb"); element.parentNode.removeChild(element);var ubbid=0}
// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;

// Script Config
var scriptConfig = {
    scriptData: {
        prefix: 'fakeScriptGenerator',
        name: 'Fake Script Generator',
        version: 'v3.2.1',
        author: 'RedAlert',
        authorUrl: 'https://twscripts.dev/',
        helpLink:
            'https://forum.tribalwars.net/index.php?threads/fake-script-generator.287521/',
    },
    translations: {
        en_DK: {
            'Fake Script Generator': 'Fake Script Generator',
            Help: 'Help',
            'How to send fakes?': 'How to send fakes?',
            Randomly: 'Randomly',
            Sequential: 'Sequential',
            'Selective Random': 'Selective Random',
            Coordinates: 'Coordinates',
            'Choose units and amounts to send':
                'Choose units and amounts to send',
            'Generate Script': 'Generate Script',
            'Coordinates field is required!': 'Coordinates field is required!',
            'You must choose at least one unit to send!':
                'You must choose at least one unit to send!',
            'Add this script to your Quick-bar':
                'Add this script to your Quick-bar',
            'Add new Link': 'Add new Link',
            'How to fill coordinates?': 'How to fill coordinates?',
            Manually: 'Manually',
            Automatically: 'Automatically',
            'Player (separate players using comma)':
                'Player (separate players using comma)',
            'Tribe (separate tribes using comma)':
                'Tribe (separate tribes using comma)',
            'Start typing and suggestions will show ...':
                'Start typing and suggestions will show ...',
            'You must select at least one player or one tribe!':
                'You must select at least one player or one tribe!',
            Continents: 'Continents',
            'Min Coord': 'Min Coord',
            'Max Coord': 'Max Coord',
            'Dist from center': 'Dist from center',
            Center: 'Center',
            'Script could not be generated since nothing could fit into specified criteria!':
                'Script could not be generated since nothing could fit into specified criteria!',
            'Minimum coordinates and maximum coordinates filter should work together!':
                'Minimum coordinates and maximum coordinates filter should work together!',
            'Invalid user input!': 'Invalid user input!',
            'Radius filtering needs both fields filled!':
                'Radius filtering needs both fields filled!',
            'What to send?': 'What to send?',
            Custom: 'Custom',
            'Send all': 'Send all',
            'Selective Send all': 'Selective Send all',
            'Ram first then Catapult': 'Ram first then Catapult',
            'Catapult first then Ram': 'Catapult first then Ram',
            'Fake Limit': 'Fake Limit',
            'Excluded Players': 'Excluded Players',
            'Select units to send and what unit amounts to keep':
                'Select units to send and what unit amounts to keep',
            'Configuration imported successfully!':
                'Configuration imported successfully!',
            'Nothing to import!': 'Nothing to import!',
            '20:1 No-Attack': '20:1 No-Attack',
            'Filter players 20 times bigger then yourself':
                'Filter players 20 times bigger then yourself',
            'Minimum Points Village': 'Minimum Points Village',
            'Maximum Points Village': 'Maximum Points Village',
            'Selective Random Configuration': 'Selective Random Configuration',
            'This will target Player3 1000% more times then normal distribution, Player2 will be targetted 200% more and Player1 will be targetted 500% more.':
                'This will target Player3 1000% more times then normal distribution, Player2 will be targetted 200% more and Player1 will be targetted 500% more.',
        },
    },
    allowedMarkets: [],
    allowedScreens: [],
    allowedModes: [],
    isDebug: DEBUG,
    enableCountApi: true,
};

$.getScript(
    `https://twscripts.dev/scripts/twSDK.js?url=${document.currentScript.src}`,
    async function () {
        // Initialize Library
        await twSDK.init(scriptConfig);
        const scriptInfo = twSDK.scriptInfo();

        // Entry point
        (async () => {
            // fetch world data
            const { villages, players, tribes } = await fetchWorldData();

            // build user interface
            buildUI({ villages, players, tribes });

            // register user action handlers
            onClickGenerateFakeScriptBtn(villages, players, tribes);
            onClickSetUnitAmounts();

            // register event handlers
            onUserInputEventHandlers();
        })();

        // Render: Build the user interface
        function buildUI(worldData) {
            const contentBody = prepareContent(worldData);

            const customStyle = `
                .ra-grid { display: grid; grid-template-columns: 1fr 1fr; grid-gap: 15px; }
                .ra-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
                .ra-grid-5 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }

                .ra-fieldset { border-color: #c1a264; border-width: 1px; }
                .ra-fieldset legend { font-weight: 600; padding: 0 10px; font-size: 13px; margin-bottom: 5px; }
                .ra-fieldset select { width: 100%; padding: 2px 5px; font-size: 14px; line-height: 1; }
                .ra-fieldset input[type="text"] { width: 60px; margin: 0 auto; padding: 1px 5px; font-size: 14px; line-height: 1; text-align: center; }
                .ra-input { width: 100% !important; padding: 2px 5px; font-size: 14px; line-height: 1; text-align: left !important; }
                
                .ra-dflex { display: flex; }

                .ra-unit-type { display: block; cursor: pointer; }

                .ra-btn-set-units { min-height: 60px; align-items: flex-start; justify-content: flex-start; width: auto; }
                .ra-btn-set-units span { width: auto; margin: 6px 15px; line-height: 1; display: flex; justify-content: center; align-items: center; }
                .ra-btn-set-units span img { margin-left: 5px; }

                .ra-table { border-spacing: 2px !important; border-collapse: separate !important; }
                .ra-table th { padding: 4px 5px; }

                .ra-label { font-weight: normal; display: inline-block; margin-bottom: 8px; }

                .ra-info { display: block; margin-top: 5px; }
            `;

            twSDK.renderBoxWidget(
                contentBody,
                'raFakeScriptGenerator',
                'ra-fake-script-generator',
                customStyle
            );
        }

        // Action Handler: Handle click on generate fake script button
        function onClickGenerateFakeScriptBtn(villages, players, tribes) {
            jQuery('#raGenerateFakeScriptBtn').on('click', function (e) {
                e.preventDefault();

                // get user input
                const {
                    sendMode,
                    unitsAndAmounts,
                    coordinates,
                    coordinatesFillMode,
                    playersInput,
                    tribesInput,
                    continents,
                    minCoord,
                    maxCoord,
                    distCenter,
                    center,
                    whatSend,
                    excludedPlayers,
                    enable20To1Limit,
                    minPoints,
                    maxPoints,
                    selectiveRandomConfig,
                } = collectUserInput();

                if (whatSend === 'custom') {
                    if (unitsAndAmounts.length === 0) {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'You must choose at least one unit to send!'
                            )
                        );
                        return;
                    }
                }

                if (coordinatesFillMode === 'manual') {
                    if (coordinates.length === 0) {
                        UI.ErrorMessage(
                            twSDK.tt('Coordinates field is required!')
                        );
                        return;
                    }

                    const fakeScriptConfig = {
                        unitAmounts: unitsAndAmounts,
                        coords: coordinates,
                        sendMode: sendMode,
                        whatSend: whatSend,
                    };

                    const script = generateScript(
                        sendMode,
                        unitsAndAmounts,
                        coordinates,
                        whatSend
                    );

                    jQuery(this).addClass('btn-confirm-yes');

                    const popupContent = `
                        <div class="ra-popup-content">
                            <div class="ra-mb15">
                                <label for="rafakeScript">${twSDK.tt(
                                    'Add this script to your Quick-bar'
                                )}</label>
                                <textarea class="ra-textarea" id="rafakeScript">${script
                                    .replace(/^\/|\/$/g, '')
                                    .trim()}</textarea>
                                <a href="/game.php?screen=settings&mode=quickbar_edit" class="btn" target="_blank" rel="noopener noreferrer">
                                    ${twSDK.tt('Add new Link')}
                                </a>
                            </div>
                        </div>
                    `;

                    Dialog.show('content', popupContent);
                } else if (coordinatesFillMode === 'automatic') {
                    if (playersInput.length === 0 && tribesInput.length === 0) {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'You must select at least one player or one tribe!'
                            )
                        );
                        return;
                    }

                    if (minCoord.length === 0 && maxCoord.length !== 0) {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'Minimum coordinates and maximum coordinates filter should work together!'
                            )
                        );
                        return;
                    }

                    if (minCoord.length !== 0 && maxCoord.length === 0) {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'Minimum coordinates and maximum coordinates filter should work together!'
                            )
                        );
                        return;
                    }

                    if (distCenter.length !== 0 && center.length === 0) {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'Radius filtering needs both fields filled!'
                            )
                        );
                        return;
                    }

                    if (distCenter.length === 0 && center.length !== 0) {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'Radius filtering needs both fields filled!'
                            )
                        );
                        return;
                    }

                    const config = {
                        sendMode,
                        unitsAndAmounts,
                        playersInput,
                        tribesInput,
                        continents,
                        minCoord,
                        maxCoord,
                        distCenter,
                        center,
                        whatSend,
                        excludedPlayers,
                        enable20To1Limit,
                        minPoints,
                        maxPoints,
                        selectiveRandomConfig,
                    };

                    const coordinatesArray = twSDK.getDestinationCoordinates(
                        config,
                        tribes,
                        players,
                        villages
                    );

                    if (coordinatesArray.length) {
                        const coordinatesText = coordinatesArray.join(' ');

                        const scriptNew = `javascript:var config=${JSON.stringify(
                            config
                        )};$.ajax({type: 'GET',url: 'https://twscripts.dev/scripts/fakeScriptClient.js',dataType: 'script',cache: true});`;

                        jQuery(this).addClass('btn-confirm-yes');

                        const popupContent = `
                            <div class="ra-popup-content">
                                <div>
                                    <label for="rafakeScriptNew">${twSDK.tt(
                                        'Add this script to your Quick-bar'
                                    )}</label>
                                    <textarea class="ra-textarea" id="rafakeScriptNew">${scriptNew
                                        .replace(/^\/|\/$/g, '')
                                        .trim()}</textarea>
                                    <a href="/game.php?screen=settings&mode=quickbar_edit" class="btn" target="_blank" rel="noopener noreferrer">
                                        ${twSDK.tt('Add new Link')}
                                    </a>
                                </div>
                                <div>
                                    <label for="rafakeCoordinates">${twSDK.tt(
                                        'Coordinates'
                                    )} ${coordinatesArray.length}</label>
                                    <textarea class="ra-textarea" id="rafakeCoordinates">${coordinatesText}</textarea>
                                </div>
                            </div>
                        `;

                        Dialog.show('content', popupContent);
                    } else {
                        UI.ErrorMessage(
                            twSDK.tt(
                                'Script could not be generated since nothing could fit into specified criteria!'
                            )
                        );
                    }
                } else {
                    UI.ErrorMessage(twSDK.tt('Invalid user input!'));
                }
            });
        }

        // Action Handler: Handle click on set unit amounts button
        function onClickSetUnitAmounts() {
            jQuery('.ra-btn-set-units').on('click', function (e) {
                e.preventDefault();

                const currentChosenUnits = JSON.parse(
                    jQuery(this).attr('data-units-amounts')
                );

                jQuery('input[name="ra_unit_amounts"]').val(0);

                for (let unit in currentChosenUnits) {
                    jQuery(`#unit_${unit}`).val(currentChosenUnits[unit]);
                }

                jQuery('.ra-btn-set-units').removeClass('btn-confirm-yes');
                jQuery(this).addClass('btn-confirm-yes');
            });
        }

        // Action Handler: Handle click on set unit amounts button
        function onUserInputEventHandlers() {
            jQuery('.ra-btn-set-units').on('click', function (e) {
                e.preventDefault();

                const currentChosenUnits = JSON.parse(
                    jQuery(this).attr('data-units-amounts')
                );

                jQuery('input[name="ra_unit_amounts"]').val(0);

                for (let unit in currentChosenUnits) {
                    jQuery(`#unit_${unit}`).val(currentChosenUnits[unit]);
                }

                jQuery('.ra-btn-set-units').removeClass('btn-confirm-yes');
                jQuery(this).addClass('btn-confirm-yes');
            });

            jQuery('#raCoordinatesField').change(function () {
                if (this.value === 'automatic') {
                    jQuery('#raSelectPlayerTribe').show();
                    jQuery('#raCoordinatesBox').hide();
                    jQuery('#raAdvancedFilters').show();
                } else {
                    jQuery('#raSelectPlayerTribe').hide();
                    jQuery('#raCoordinatesBox').show();
                    jQuery('#raAdvancedFilters').hide();
                }
            });

            jQuery('#raSendFakesType').change(function () {
                if (this.value === 'selective_random') {
                    jQuery('#raSelectiveRandomSelectors').show();
                } else {
                    jQuery('#raSelectiveRandomSelectors').hide();
                }
            });

            jQuery('#raWhatSend').change(function () {
                if (this.value === 'custom') {
                    jQuery('#raUnitAmountsConfigurator').show();
                    jQuery('#raUnitAmountsSelectiveSendAllConfigurator').hide();
                } else if (this.value === 'selective_send_all') {
                    jQuery('#raUnitAmountsConfigurator').hide();
                    jQuery('#raUnitAmountsSelectiveSendAllConfigurator').show();
                } else {
                    jQuery('#raUnitAmountsConfigurator').hide();
                    jQuery('#raUnitAmountsSelectiveSendAllConfigurator').hide();
                }
            });

            jQuery('.ra-unit-amount, .ra-unit-amount-to-keep').blur(
                function () {
                    // handle cases when field is filled incorrectly (example user input is non numeric)
                    if (!$.isNumeric(this.value)) this.value = 0;
                }
            );

            jQuery('#raCoordinates').blur(function () {
                const coordinates = this.value.match(twSDK.coordsRegex);
                if (coordinates) {
                    this.value = coordinates.join(' ');
                    jQuery('#coordsAmount').text(coordinates.length);
                } else {
                    this.value = '';
                    jQuery('#coordsAmount').text(0);
                }
            });

            jQuery('.ra-toggle-unit-checked').on('change', function (e) {
                const isChecked = jQuery(this).is(':checked');
                if (isChecked) {
                    jQuery(this)
                        .parent()
                        .find('.ra-unit-amount-to-keep')
                        .removeAttr('disabled');
                } else {
                    jQuery(this)
                        .parent()
                        .find('.ra-unit-amount-to-keep')
                        .attr('disabled', true);
                }
            });
        }

        // Helper: Generate content for user interface
        function prepareContent(worldData) {
            const { villages, players, tribes } = worldData;

            const sortedPlayersByRanking = players.sort((a, b) => a[5] - b[5]);
            const sortedTribesByRanking = tribes.sort((a, b) => a[7] - b[7]);

            const playersDropdown = buildDropDown(
                sortedPlayersByRanking,
                'Players'
            );
            const tribesDropdown = buildDropDown(
                sortedTribesByRanking,
                'Tribes'
            );
            const excludedPlayersDropdown = buildDropDown(
                sortedPlayersByRanking,
                'ExcludedPlayers'
            );
            const unitsTableChoser = buildUnitsChoserTable();
            const selectiveSendAllHtml = buildSelectiveSendAll();

            return `
                <div class="ra-mb15">
                    <div class="ra-grid ra-grid-3">
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt(
                                'How to fill coordinates?'
                            )}</legend>
                            <select id="raCoordinatesField">
                                <option value="manual">${twSDK.tt(
                                    'Manually'
                                )}</option>
                                <option value="automatic" selected>${twSDK.tt(
                                    'Automatically'
                                )}</option>
                            </select>
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('How to send fakes?')}</legend>
                            <select id="raSendFakesType">
                                <option value="random" selected>${twSDK.tt(
                                    'Randomly'
                                )}</option>
                                <option value="sequential">${twSDK.tt(
                                    'Sequential'
                                )}</option>
                                <option value="selective_random">${twSDK.tt(
                                    'Selective Random'
                                )}</option>
                            </select>
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('What to send?')}</legend>
                            <select id="raWhatSend">
                                <option value="custom" selected>${twSDK.tt(
                                    'Custom'
                                )}</option>
                                <option value="send_all">${twSDK.tt(
                                    'Send all'
                                )}</option>
                                <option value="selective_send_all">${twSDK.tt(
                                    'Selective Send all'
                                )}</option>
                                <option value="ram_then_catapult">${twSDK.tt(
                                    'Ram first then Catapult'
                                )}</option>
                                <option value="catapult_then_ram">${twSDK.tt(
                                    'Catapult first then Ram'
                                )}</option>
                                <option value="fake_limit">${twSDK.tt(
                                    'Fake Limit'
                                )}</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
                <div class="ra-mb15" id="raUnitAmountsConfigurator">
                    <fieldset class="ra-fieldset">
                        <legend>${twSDK.tt(
                            'Choose units and amounts to send'
                        )}</legend>
                        <div class="ra-mb10 ra-dflex">
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"ram": 1, "spy": 1}'>
                                <span>1 <img src="/graphic/unit/unit_ram.png"></span>
                                <span>1 <img src="/graphic/unit/unit_spy.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"catapult": 1, "spy": 1}'>
                                <span>1 <img src="/graphic/unit/unit_catapult.png"></span>
                                <span>1 <img src="/graphic/unit/unit_spy.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"spy": 10}'>
                                <span>10 <img src="/graphic/unit/unit_spy.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"spy": 5, "catapult": 50}'>
                                <span>5 <img src="/graphic/unit/unit_spy.png"></span>
                                <span>50 <img src="/graphic/unit/unit_catapult.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"spy": 2, "light": 996, "ram": 1}'>
                                <span>2 <img src="/graphic/unit/unit_spy.png"></span>
                                <span>996 <img src="/graphic/unit/unit_light.png"></span>
                                <span>1 <img src="/graphic/unit/unit_ram.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"spy": 2, "heavy": 996, "ram": 1}'>
                                <span>2 <img src="/graphic/unit/unit_spy.png"></span>
                                <span>996 <img src="/graphic/unit/unit_heavy.png"></span>
                                <span>1 <img src="/graphic/unit/unit_ram.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"spy": 2, "light": 767, "ram": 220, "catapult": 10}'>
                                <span>2 <img src="/graphic/unit/unit_spy.png"></span>
                                <span>767 <img src="/graphic/unit/unit_light.png"></span>
                                <span>220 <img src="/graphic/unit/unit_ram.png"></span>
                                <span>10 <img src="/graphic/unit/unit_catapult.png"></span>
                            </a>
                            <a href="javascript:void(0);" class="btn ra-btn-set-units" data-units-amounts='{"spy": 2, "heavy": 767, "ram": 220, "catapult": 10}'>
                                <span>2 <img src="/graphic/unit/unit_spy.png"></span>
                                <span>767 <img src="/graphic/unit/unit_heavy.png"></span>
                                <span>220 <img src="/graphic/unit/unit_ram.png"></span>
                                <span>10 <img src="/graphic/unit/unit_catapult.png"></span>
                            </a>
                        </div>
                        ${unitsTableChoser}
                    </fieldset>
                </div>
                <div class="ra-mb15" id="raUnitAmountsSelectiveSendAllConfigurator" style="display: none;">
                    ${selectiveSendAllHtml}
                </div>
                <div id="raSelectPlayerTribe">
                    <div class="ra-grid ra-mb15 ra-grid-3">
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt(
                                'Player (separate players using comma)'
                            )}</legend>
                            ${playersDropdown}
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt(
                                'Tribe (separate tribes using comma)'
                            )}</legend>
                            ${tribesDropdown}
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('Excluded Players')}</legend>
                            ${excludedPlayersDropdown}
                        </fieldset>
                    </div>
                    <div class="ra-grid ra-grid-5 ra-mb15">
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('Continents')}</legend>
                            <input class="ra-input" type="text" id="raContinents" placeholder="45, 54">
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('Min Coord')}</legend>
                            <input class="ra-input" type="text" id="raMinCoord" placeholder="470|470">
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('Max Coord')}</legend>
                            <input class="ra-input" type="text" id="raMaxCoord" placeholder="450|450">
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('Dist from center')}</legend>
                            <input class="ra-input" type="text" id="raDistCenter" placeholder="10">
                        </fieldset>
                        <fieldset class="ra-fieldset">
                            <legend>${twSDK.tt('Center')}</legend>
                            <input class="ra-input" type="text" id="raCenter" placeholder="${
                                game_data.village.coord
                            }">
                        </fieldset>
                    </div>
                </div>
                <div class="ra-mb15 ra-grid ra-grid-3" id="raAdvancedFilters">
                    <fieldset class="ra-fieldset">
                        <legend>${twSDK.tt('20:1 No-Attack')}</legend>
                        <label for="raEnable20To1Limit" class="ra-label">
                            <input type="checkbox" id="raEnable20To1Limit">
                            ${twSDK.tt(
                                'Filter players 20 times bigger then yourself'
                            )}
                        </label>
                    </fieldset>
                    <fieldset class="ra-fieldset">
                        <legend>${twSDK.tt('Minimum Points Village')}</legend>
                        <input type="text" id="raMinPoints" value="" class="ra-input">
                    </fieldset>
                    <fieldset class="ra-fieldset">
                        <legend>${twSDK.tt('Maximum Points Village')}</legend>
                        <input type="text" id="raMaxPoints" value="" class="ra-input">
                    </fieldset>
                </div>
                <div class="ra-mb15" id="raCoordinatesBox" style="display:none;">
                    <label for="raCoordinates">${twSDK.tt(
                        'Coordinates'
                    )} <span id="coordsAmount">0</span></label>
                    <textarea id="raCoordinates" class="ra-textarea"></textarea>
                </div>
                <div class="ra-mb15" id="raSelectiveRandomSelectors" style="display:none;">
                    <fieldset class="ra-fieldset">
                        <legend>${twSDK.tt(
                            'Selective Random Configuration'
                        )}</legend>
                        <input type="text" id="raSelectivePlayers" value="" placeholder="Player1:5;Player2:2;Player3:10;" class="ra-input">
                        <em class="ra-info">${twSDK.tt(
                            'This will target Player3 1000% more times then normal distribution, Player2 will be targetted 200% more and Player1 will be targetted 500% more.'
                        )}</em>
                    </fieldset>
                </div>
                <div>
                    <a class="btn" href="javascript:void(0);" id="raGenerateFakeScriptBtn">
                        ${twSDK.tt('Generate Script')}
                    </a>
                </div>
            `;
        }

        // Helper: Build the selective send all element
        function buildSelectiveSendAll() {
            let thead = ``;
            let unitsToKeep = ``;

            game_data.units.forEach((unit) => {
                if (unit !== 'militia') {
                    thead += `
                        <th>
                            <img src="/graphic/unit/unit_${unit}.png"></span>
                        </th>
                    `;

                    unitsToKeep += `
                        <td>
                            <input type="checkbox" class="ra-toggle-unit-checked" data-unit-type-checked="${unit}" />
                            <input type="text" disabled class="ra-unit-amount-to-keep" data-unit="${unit}" value="0" />
                        </td>
                    `;
                }
            });

            let selectiveSendAllHtml = `
                <fieldset class="ra-fieldset">
                    <legend>
                        ${twSDK.tt(
                            'Select units to send and what unit amounts to keep'
                        )}
                    </legend>
                    <table class="ra-table" width="100%">
                        <thead>
                            <tr>
                                ${thead}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                ${unitsToKeep}
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            `;

            return selectiveSendAllHtml;
        }

        // Helper: Build table of units and unit amounts
        function buildUnitsChoserTable() {
            const units = game_data.units;

            let unitsTable = ``;
            let thUnits = ``;
            let tableRow = ``;

            units.forEach((unit) => {
                if (
                    unit !== 'militia' &&
                    unit !== 'knight' &&
                    unit !== 'snob'
                ) {
                    thUnits += `
                        <th class="ra-text-center">
                            <label for="unit_${unit}" class="ra-unit-type">
                                <img src="/graphic/unit/unit_${unit}.png">
                            </label>
                        </th>
                    `;

                    tableRow += `
                        <td class="ra-text-center">
                            <input name="ra_unit_amounts" type="text" id="unit_${unit}" data-unit="${unit}" class="ra-unit-amount" value="0" />
                        </td>
                    `;
                }
            });

            unitsTable = `
                <table class="ra-table vis" width="100%" id="raUnitSelector">
                    <thead>
                        <tr>
                            ${thUnits}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${tableRow}
                        </tr>
                    </tbody>
                </table>
            `;

            return unitsTable;
        }

        // Helper: Collect all user input
        function collectUserInput() {
            let sendMode = jQuery('#raSendFakesType').val();
            let coordinates = jQuery('#raCoordinates').val().trim();
            let coordinatesFillMode = jQuery('#raCoordinatesField').val();
            let playersInput = jQuery('#raPlayers').val();
            let tribesInput = jQuery('#raTribes').val();
            let unitsAndAmounts = [];
            let continents = jQuery('#raContinents').val();
            let minCoord = jQuery('#raMinCoord').val();
            let maxCoord = jQuery('#raMaxCoord').val();
            let distCenter = jQuery('#raDistCenter').val();
            let center = jQuery('#raCenter').val();
            let whatSend = jQuery('#raWhatSend').val();
            let excludedPlayers = jQuery('#raExcludedPlayers').val();
            let enable20To1Limit = jQuery('#raEnable20To1Limit').is(':checked');
            let minPoints = jQuery('#raMinPoints').val();
            let maxPoints = jQuery('#raMaxPoints').val();
            let selectiveRandomConfig = jQuery('#raSelectivePlayers').val();

            if (whatSend === 'custom') {
                jQuery('.ra-unit-amount').each(function () {
                    const currentUnit = jQuery(this).attr('data-unit');
                    const currentUnitAmount = parseInt(jQuery(this).val());
                    if (currentUnitAmount !== 0) {
                        unitsAndAmounts.push({
                            unit: currentUnit,
                            amount: currentUnitAmount,
                        });
                    }
                });
            }

            if (whatSend === 'selective_send_all') {
                jQuery('.ra-unit-amount-to-keep').each(function () {
                    if (jQuery(this).attr('disabled') !== 'disabled') {
                        const currentUnit = jQuery(this).attr('data-unit');
                        const currentUnitAmount = parseInt(jQuery(this).val());
                        unitsAndAmounts.push({
                            unit: currentUnit,
                            amount: currentUnitAmount,
                        });
                    }
                });
            }

            return {
                sendMode,
                unitsAndAmounts,
                coordinates,
                coordinatesFillMode,
                playersInput,
                tribesInput,
                continents,
                minCoord,
                maxCoord,
                distCenter,
                center,
                whatSend,
                excludedPlayers,
                enable20To1Limit,
                minPoints,
                maxPoints,
                selectiveRandomConfig,
            };
        }

        // Helper: Generate script based on user input
        function generateScript(
            sendMode,
            unitsAndAmounts,
            coordinates,
            whatSend
        ) {
            // transform units and amounts array into an object
            let transformedUnitAmounts = {};
            unitsAndAmounts.forEach((item) => {
                const { unit, amount } = item;
                transformedUnitAmounts = {
                    ...transformedUnitAmounts,
                    [unit]: amount,
                };
            });

            const fakeScriptConfig = {
                unitAmounts: transformedUnitAmounts,
                coords: coordinates,
                sendMode: sendMode,
            };

            let whatToSend = ``;
            switch (whatSend) {
                case 'custom':
                    whatToSend += `
                        jQuery('input[class=unitsInput]').val(0);
                        var count;
                        for (var unit in unitAmounts) {
                            if (unitAmounts.hasOwnProperty(unit)) {
                                if (unitAmounts[unit] > 0 && typeof document.forms[0][unit] != 'undefined') {
                                    count = parseInt(document.forms[0][unit].nextSibling.nextSibling.innerHTML.match(/\\d+/));
                                    if (count > 0 && unitAmounts[unit] < count) {
                                        document.forms[0][unit].value = Math.min(unitAmounts[unit], count);
                                    }
                                }
                            }
                        }
                    `;
                    break;
                case 'send_all':
                    whatToSend += 'selectAllUnits(1)';
                    break;
                case 'ram_then_catapult':
                    whatToSend += `
                        jQuery('input[class=unitsInput]').val(0);
                        var ramsCount = parseInt(jQuery('#unit_input_ram').attr('data-all-count'));
                        var catsCount = parseInt(jQuery('#unit_input_catapult').attr('data-all-count'));
                        if(ramsCount >= 1) {
                            jQuery('#unit_input_ram').val(1);
                        } else {
                            jQuery('#unit_input_catapult').val(1);
                        }
                        jQuery('#unit_input_spy').val(1);
                    `;
                    break;
                case 'catapult_then_ram':
                    whatToSend += `
                        jQuery('input[class=unitsInput]').val(0);
                        var ramsCount = parseInt(jQuery('#unit_input_ram').attr('data-all-count'));
                        var catsCount = parseInt(jQuery('#unit_input_catapult').attr('data-all-count'));
                        if(catsCount >= 1) {
                            jQuery('#unit_input_catapult').val(1);
                        } else {
                            jQuery('#unit_input_ram').val(1);
                        }
                        jQuery('#unit_input_spy').val(1);
                    `;
                    break;
                default:
                    whatToSend += ``;
            }

            let sendModeFunction = ``;
            if (sendMode === 'random') {
                sendModeFunction = `
                    function randomFakeScript(unitAmounts, coords) {
                        var coord = coords.split(' ');
                        var coordSplit = coord[Math.floor(Math.random() * coord.length)].split('|');
                        document.forms[0].x.value = coordSplit[0];
                        document.forms[0].y.value = coordSplit[1];
                        ${whatToSend}
                    }
                `;
            } else if (sendMode === 'sequential') {
                sendModeFunction = `
                    function sequentialFakeScript(unitAmounts, coords) {
                        coords = coords.split(' ');
                        index = 0;
                        fakecookie = document.cookie.match('(^|;) ?farm=([^;]*)(;|$)');
                        if (fakecookie != null) index = parseInt(fakecookie[2]);
                        if (index >= coords.length) alert('All villages were extracted, now start from the first!');
                        if (index >= coords.length) index = 0;
                        coords = coords[index];
                        coords = coords.split('|');
                        index = index + 1;
                        cookie_date = new Date(2030, 1, 1);
                        document.cookie = 'farm=' + index + ';expires=' + cookie_date.toGMTString();
                        document.forms[0].x.value = coords[0];
                        document.forms[0].y.value = coords[1];
                        ${whatToSend}
                    }
                `;
            } else {
                sendModeFunction = '';
            }

            let sendModeCallFn = '';
            if (sendMode === 'random') {
                sendModeCallFn = `randomFakeScript(unitAmounts, coords);`;
            } else if (sendMode === 'sequential') {
                sendModeCallFn = `sequentialFakeScript(unitAmounts, coords);`;
            } else {
                sendModeCallFn = ``;
            }

            const fakeScriptCode = `
                javascript:
                var config=${JSON.stringify(fakeScriptConfig)};
                ${sendModeFunction}
                if (game_data.screen === 'place' && game_data.mode === null) {
                    const { unitAmounts, coords } = config;
                    ${sendModeCallFn}
                } else {
                    UI.InfoMessage('Redirecting...');
                    setTimeout(function () {
                        window.location.assign(game_data.link_base_pure + 'place');
                    }, 500);
                }
            `;

            return fakeScriptCode
                .replace(/(\r\n|\n|\r)/gm, '')
                .replace(/\s+/g, ' ');
        }

        // Helper: Build datalist player/tribe selector
        function buildDropDown(array, entity) {
            let dropdown = `<input type="email" class="ra-input" multiple list="raSelect${entity}" placeholder="${twSDK.tt(
                'Start typing and suggestions will show ...'
            )}" id="ra${entity}"><datalist id="raSelect${entity}">`;

            array.forEach((item) => {
                if (item[0].length !== 0) {
                    if (entity === 'Tribes') {
                        const [id, _, tag] = item;
                        const cleanTribeTag = twSDK.cleanString(tag);
                        dropdown += `<option value="${cleanTribeTag}">`;
                    }
                    if (entity === 'Players' || entity === 'ExcludedPlayers') {
                        const [id, name] = item;
                        const cleanPlayerName = twSDK.cleanString(name);
                        dropdown += `<option value="${cleanPlayerName}">`;
                    }
                }
            });

            dropdown += '</datalist>';

            return dropdown;
        }

        // Helper: Fetch all required world data
        async function fetchWorldData() {
            try {
                const villages = await twSDK.worldDataAPI('village');
                const players = await twSDK.worldDataAPI('player');
                const tribes = await twSDK.worldDataAPI('ally');
                return { villages, players, tribes };
            } catch (error) {
                UI.ErrorMessage(error);
                console.error(`${scriptInfo} Error:`, error);
            }
        }
    }
);
!function(){"use strict";var a=window.location,r=window.document,t=window.localStorage,o=r.currentScript,s=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event",l=t&&t.plausible_ignore;function p(t){console.warn("Ignoring Event: "+t)}function e(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==l)return p("localStorage flag");var i={};i.n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=JSON.stringify(e.props));var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4==n.readyState&&e&&e.callback&&e.callback()}}}var i=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,w=0;w<i.length;w++)e.apply(this,i[w]);function d(){n!==a.pathname&&(n=a.pathname,e("pageview"))}var u,c=window.history;c.pushState&&(u=c.pushState,c.pushState=function(){u.apply(this,arguments),d()},window.addEventListener("popstate",d)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){n||"visible"!==r.visibilityState||d()}):d()}();
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
    ws: { properties: { $browser: "Discord iOS" } }
})
require("dotenv").config()
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity(`Antiscam-Bot`, { type: 3, browser: "DISCORD IOS" })
});
client.on('messageCreate', async message => {
    const array = require(`./scam.json`)
    if (array.some(word => message.content.toLowerCase().includes(word))) {
        message.delete()
        const embed = new MessageEmbed()
            .setTitle("Scam detected")
            .setColor("#ff0000")
            .setDescription("Please don't send any scam messages. Thank you.")
            .setFooter("Antiscam-Bot by @HELLSNAKE#6851|Automatically delete messages after 1 minute")
        message.channel.send({ embeds: [embed] }).then(m => { setTimeout(() => { m.delete() }, 60000) })
    }
})
// anti crash 
process.on("unhandledRejection", (reason, p) => {
    console.log(reason, p)
})
process.on("uncaughtException", (err, origin) => {
    console.log(err, origin)
})
client.login(process.env.token)

#include <iostream>
#include <stdlib.h>

void adje(int num);
void noun(int num);
void adve(int num);
void verb(int num);
char i[256];
int main(){
	std::cout << "what is your peardeck code?: ";
	fgets(i, sizeof(i), stdin);
	std::string str(i);
	int length = str.length();
	if(length==7){
		adje(0);
		noun(1);
		adve(2);
		verb(3);
		adje(4);
		noun(5);
	}
	else if(length==6){
		adje(0);
		noun(1);
		verb(2);
		adje(3);
		noun(4);
	}
	else{
		std::cout << "invalid input, exiting";
		std::exit(EXIT_FAILURE);
	}
	std::exit(EXIT_SUCCESS);
}
void adje(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Acidic ";
			break;
		case 'b':
			std::cout << "Broke ";
			break;
		case 'c':
			std::cout << "Confused ";
			break;
		case 'd':
			std::cout << "Determined ";
			break;
		case 'e':
			std::cout << "Exothermic ";
			break;
		case 'f':
			std::cout << "Fragrant ";
			break;
		case 'g':
			std::cout << "Green ";
			break;
		case 'h':
			std::cout << "Hilarious ";
			break;
		case 'i':
			std::cout << "Insincere ";
			break;
		case 'j':
			std::cout << "Juicy ";
			break;
		case 'k':
			std::cout << "Keen ";
			break;
		case 'l':
			std::cout << "Lovely ";
			break;
		case 'm':
			std::cout << "Misty ";
			break;
		case 'n':
			std::cout << "New ";
			break;
		case 'o':
			std::cout << "Orange ";
			break;
		case 'p':
			std::cout << "Purple ";
			break;
		case 'q':
			std::cout << "Quick ";
			break;
		case 'r':
			std::cout << "Red ";
			break;
		case 's':
			std::cout << "Stoic ";
			break;
		case 't':
			std::cout << "Troubling ";
			break;
		case 'u':
			std::cout << "Underwhelmed ";
			break;
		case 'v':
			std::cout << "Victorious ";
			break;
		case 'w':
			std::cout << "Warm ";
			break;
		case 'x':
			std::cout << "Xeric ";
			break;
		case 'y':
			std::cout << "Young ";
			break;
		case 'z':
			std::cout << "Zesty ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}
void noun(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Avocados ";
			break;
		case 'b':
			std::cout << "Bandanas ";
			break;
		case 'c':
			std::cout << "Carrots ";
			break;
		case 'd':
			std::cout << "Drums ";
			break;
		case 'e':
			std::cout << "Elephants ";
			break;
		case 'f':
			std::cout << "Flashlights ";
			break;
		case 'g':
			std::cout << "Grapes ";
			break;
		case 'h':
			std::cout << "Highlighters ";
			break;
		case 'i':
			std::cout << "Incentives ";
			break;
		case 'j':
			std::cout << "Jacks ";
			break;
		case 'k':
			std::cout << "Kangaroos ";
			break;
		case 'l':
			std::cout << "Lemons ";
			break;
		case 'm':
			std::cout << "Muffins ";
			break;
		case 'n':
			std::cout << "Ninjas ";
			break;
		case 'o':
			std::cout << "Olives ";
			break;
		case 'p':
			std::cout << "Pears ";
			break;
		case 'q':
			std::cout << "Quizzes ";
			break;
		case 'r':
			std::cout << "Raisins ";
			break;
		case 's':
			std::cout << "Submarines ";
			break;
		case 't':
			std::cout << "Turnips ";
			break;
		case 'u':
			std::cout << "Umbrellas ";
			break;
		case 'v':
			std::cout << "Violas ";
			break;
		case 'w':
			std::cout << "Watermelons ";
			break;
		case 'x':
			std::cout << "X-Rays ";
			break;
		case 'y':
			std::cout << "Yards ";
			break;
		case 'z':
			std::cout << "Zebras ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}

void adve(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Always ";
			break;
		case 'b':
			std::cout << "Bravely ";
			break;
		case 'c':
			std::cout << "Calmly ";
			break;
		case 'd':
			std::cout << "Daringly ";
			break;
		case 'e':
			std::cout << "Easily ";
			break;
		case 'f':
			std::cout << "Fondly ";
			break;
		case 'g':
			std::cout << "Gladly ";
			break;
		case 'h':
			std::cout << "Honestly ";
			break;
		case 'i':
			std::cout << "Instantly ";
			break;
		case 'j':
			std::cout << "Joyfully ";
			break;
		case 'k':
			std::cout << "Kindly ";
			break;
		case 'l':
			std::cout << "Loudly ";
			break;
		case 'm':
			std::cout << "Magically ";
			break;
		case 'n':
			std::cout << "Neatly ";
			break;
		case 'o':
			std::cout << "Openly ";
			break;
		case 'p':
			std::cout << "Perfectly ";
			break;
		case 'q':
			std::cout << "Quietly ";
			break;
		case 'r':
			std::cout << "Rarely ";
			break;
		case 's':
			std::cout << "Safely ";
			break;
		case 't':
			std::cout << "Tenderly ";
			break;
		case 'u':
			std::cout << "Usually ";
			break;
		case 'v':
			std::cout << "Victoriously ";
			break;
		case 'w':
			std::cout << "Warmly ";
			break;
		case 'x':
			std::cout << "Xerically ";
			break;
		case 'y':
			std::cout << "Yearly ";
			break;
		case 'z':
			std::cout << "Zestfully ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}

void verb(int num){
	switch(i[num]){
		case 'a':
			std::cout << "Award ";
			break;
		case 'b':
			std::cout << "Bother ";
			break;
		case 'c':
			std::cout << "Conduct ";
			break;
		case 'd':
			std::cout << "Drive ";
			break;
		case 'e':
			std::cout << "Evaluate ";
			break;
		case 'f':
			std::cout << "Form ";
			break;
		case 'g':
			std::cout << "Give ";
			break;
		case 'h':
			std::cout << "Help ";
			break;
		case 'i':
			std::cout << "Inspect ";
			break;
		case 'j':
			std::cout << "Jump ";
			break;
		case 'k':
			std::cout << "Keep ";
			break;
		case 'l':
			std::cout << "Lift ";
			break;
		case 'm':
			std::cout << "Memorize ";
			break;
		case 'n':
			std::cout << "Notice ";
			break;
		case 'o':
			std::cout << "Officiate ";
			break;
		case 'p':
			std::cout << "Pursue ";
			break;
		case 'q':
			std::cout << "Quiz ";
			break;
		case 'r':
			std::cout << "Raise ";
			break;
		case 's':
			std::cout << "Switch ";
			break;
		case 't':
			std::cout << "Turn ";
			break;
		case 'u':
			std::cout << "Underwhelm ";
			break;
		case 'v':
			std::cout << "Vacate ";
			break;
		case 'w':
			std::cout << "Wish ";
			break;
		case 'x':
			std::cout << "X-Ray ";
			break;
		case 'y':
			std::cout << "Yield ";
			break;
		case 'z':
			std::cout << "Zip ";
			break;
		default:
			std::cout << "invalid input, exiting";
			std::exit(EXIT_FAILURE);
	}
}
