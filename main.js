var canvas = new fabric.Canvas("Mycanvas")
var playerx = 50
var playery = 50
var blockwidth = 30
var blockheight = 30
var palyerobject = ""
var blockobject = ""

function updateplayer(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(120);
        playerobject.scaleToHeight(120);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject)
    })
}

function updateblock(block){
    fabric.Image.fromURL(block,function(img){
        blockobject=img
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject)
    })
}