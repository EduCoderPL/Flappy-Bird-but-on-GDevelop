gdjs.Main_32GameCode = {};
gdjs.Main_32GameCode.GDBirdObjects1_1final = [];

gdjs.Main_32GameCode.GDFloorObjects1_1final = [];

gdjs.Main_32GameCode.GDPipeBottomObjects1_1final = [];

gdjs.Main_32GameCode.GDPipeTopObjects1_1final = [];

gdjs.Main_32GameCode.GDFloorObjects1= [];
gdjs.Main_32GameCode.GDFloorObjects2= [];
gdjs.Main_32GameCode.GDFloorObjects3= [];
gdjs.Main_32GameCode.GDBackgroundObjects1= [];
gdjs.Main_32GameCode.GDBackgroundObjects2= [];
gdjs.Main_32GameCode.GDBackgroundObjects3= [];
gdjs.Main_32GameCode.GDBirdObjects1= [];
gdjs.Main_32GameCode.GDBirdObjects2= [];
gdjs.Main_32GameCode.GDBirdObjects3= [];
gdjs.Main_32GameCode.GDPipeTopObjects1= [];
gdjs.Main_32GameCode.GDPipeTopObjects2= [];
gdjs.Main_32GameCode.GDPipeTopObjects3= [];
gdjs.Main_32GameCode.GDPipeBottomObjects1= [];
gdjs.Main_32GameCode.GDPipeBottomObjects2= [];
gdjs.Main_32GameCode.GDPipeBottomObjects3= [];
gdjs.Main_32GameCode.GDButtonObjects1= [];
gdjs.Main_32GameCode.GDButtonObjects2= [];
gdjs.Main_32GameCode.GDButtonObjects3= [];
gdjs.Main_32GameCode.GDStartTextObjects1= [];
gdjs.Main_32GameCode.GDStartTextObjects2= [];
gdjs.Main_32GameCode.GDStartTextObjects3= [];
gdjs.Main_32GameCode.GDEndTextObjects1= [];
gdjs.Main_32GameCode.GDEndTextObjects2= [];
gdjs.Main_32GameCode.GDEndTextObjects3= [];
gdjs.Main_32GameCode.GDScoreTextObjects1= [];
gdjs.Main_32GameCode.GDScoreTextObjects2= [];
gdjs.Main_32GameCode.GDScoreTextObjects3= [];
gdjs.Main_32GameCode.GDPointColliderObjects1= [];
gdjs.Main_32GameCode.GDPointColliderObjects2= [];
gdjs.Main_32GameCode.GDPointColliderObjects3= [];


gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeBottomObjects1Objects = Hashtable.newFrom({"PipeBottom": gdjs.Main_32GameCode.GDPipeBottomObjects1});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeTopObjects1Objects = Hashtable.newFrom({"PipeTop": gdjs.Main_32GameCode.GDPipeTopObjects1});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPointColliderObjects1Objects = Hashtable.newFrom({"PointCollider": gdjs.Main_32GameCode.GDPointColliderObjects1});
gdjs.Main_32GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "MENU";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("GAME");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects2[i].getBehavior("Physics2").setDynamic();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects2[i].getBehavior("Physics2").setLinearVelocityY(-(800));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects2[i].playAnimation();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Start Interface");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextPipe");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "GAME";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects2);
{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects2[i].getBehavior("Physics2").setLinearVelocityY(-(800));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "GAMEOVER";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("PipeBottom"), gdjs.Main_32GameCode.GDPipeBottomObjects1);
gdjs.copyArray(runtimeScene.getObjects("PipeTop"), gdjs.Main_32GameCode.GDPipeTopObjects1);
gdjs.copyArray(runtimeScene.getObjects("PointCollider"), gdjs.Main_32GameCode.GDPointColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Main_32GameCode.GDScoreTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("MENU");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "NextPipe");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].getBehavior("Physics2").setStatic();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Start Interface");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "End Interface");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].setY(250);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreTextObjects1[i].setBBText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPipeTopObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPipeTopObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPipeBottomObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPipeBottomObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPointColliderObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPointColliderObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Main_32GameCode.GDBirdObjects2});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeTopObjects2Objects = Hashtable.newFrom({"PipeTop": gdjs.Main_32GameCode.GDPipeTopObjects2});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Main_32GameCode.GDBirdObjects2});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeBottomObjects2Objects = Hashtable.newFrom({"PipeBottom": gdjs.Main_32GameCode.GDPipeBottomObjects2});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Main_32GameCode.GDBirdObjects2});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDFloorObjects2Objects = Hashtable.newFrom({"Floor": gdjs.Main_32GameCode.GDFloorObjects2});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPointColliderObjects1Objects = Hashtable.newFrom({"PointCollider": gdjs.Main_32GameCode.GDPointColliderObjects1});
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.Main_32GameCode.GDBirdObjects1});
gdjs.Main_32GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Main_32GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].getBehavior("Physics2").setStatic();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Start Interface");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "End Interface");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].setY(250);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreTextObjects1[i].setBBText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextPipe") > 2;
if (isConditionTrue_0) {
gdjs.Main_32GameCode.GDPipeBottomObjects1.length = 0;

gdjs.Main_32GameCode.GDPipeTopObjects1.length = 0;

gdjs.Main_32GameCode.GDPointColliderObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextPipe");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeBottomObjects1Objects, 600, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / 2, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeTopObjects1Objects, 600, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / 2, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPointColliderObjects1Objects, 600, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), "");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(200, 400));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPipeTopObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPipeTopObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPipeBottomObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPipeBottomObjects1[i].setZOrder(1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Main_32GameCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32GameCode.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("PipeBottom"), gdjs.Main_32GameCode.GDPipeBottomObjects1);
gdjs.copyArray(runtimeScene.getObjects("PipeTop"), gdjs.Main_32GameCode.GDPipeTopObjects1);
gdjs.copyArray(runtimeScene.getObjects("PointCollider"), gdjs.Main_32GameCode.GDPointColliderObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDFloorObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDFloorObjects1[i].setXOffset(gdjs.Main_32GameCode.GDFloorObjects1[i].getXOffset() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBackgroundObjects1[i].setXOffset(gdjs.Main_32GameCode.GDBackgroundObjects1[i].getXOffset() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 2));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].getBehavior("Physics2").setLinearVelocityY(gdjs.evtTools.common.clamp((gdjs.Main_32GameCode.GDBirdObjects1[i].getBehavior("Physics2").getLinearVelocityY()), -(800), 600));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].setAngle(gdjs.evtTools.common.clamp((gdjs.Main_32GameCode.GDBirdObjects1[i].getBehavior("Physics2").getLinearVelocityY()) * 90 / 600, -(45), 90));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPipeTopObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPipeTopObjects1[i].setX(gdjs.Main_32GameCode.GDPipeTopObjects1[i].getX() + (-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPipeBottomObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPipeBottomObjects1[i].setX(gdjs.Main_32GameCode.GDPipeBottomObjects1[i].getX() + (-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDPointColliderObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPointColliderObjects1[i].setX(gdjs.Main_32GameCode.GDPointColliderObjects1[i].getX() + (-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Main_32GameCode.GDBirdObjects1.length = 0;

gdjs.Main_32GameCode.GDFloorObjects1.length = 0;

gdjs.Main_32GameCode.GDPipeBottomObjects1.length = 0;

gdjs.Main_32GameCode.GDPipeTopObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Main_32GameCode.GDBirdObjects1_1final.length = 0;
gdjs.Main_32GameCode.GDFloorObjects1_1final.length = 0;
gdjs.Main_32GameCode.GDPipeBottomObjects1_1final.length = 0;
gdjs.Main_32GameCode.GDPipeTopObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("PipeTop"), gdjs.Main_32GameCode.GDPipeTopObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects2Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeTopObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Main_32GameCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32GameCode.GDBirdObjects1_1final.indexOf(gdjs.Main_32GameCode.GDBirdObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDBirdObjects1_1final.push(gdjs.Main_32GameCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Main_32GameCode.GDPipeTopObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32GameCode.GDPipeTopObjects1_1final.indexOf(gdjs.Main_32GameCode.GDPipeTopObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDPipeTopObjects1_1final.push(gdjs.Main_32GameCode.GDPipeTopObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("PipeBottom"), gdjs.Main_32GameCode.GDPipeBottomObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects2Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPipeBottomObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Main_32GameCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32GameCode.GDBirdObjects1_1final.indexOf(gdjs.Main_32GameCode.GDBirdObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDBirdObjects1_1final.push(gdjs.Main_32GameCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Main_32GameCode.GDPipeBottomObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32GameCode.GDPipeBottomObjects1_1final.indexOf(gdjs.Main_32GameCode.GDPipeBottomObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDPipeBottomObjects1_1final.push(gdjs.Main_32GameCode.GDPipeBottomObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Main_32GameCode.GDFloorObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects2Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDFloorObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Main_32GameCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32GameCode.GDBirdObjects1_1final.indexOf(gdjs.Main_32GameCode.GDBirdObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDBirdObjects1_1final.push(gdjs.Main_32GameCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Main_32GameCode.GDFloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32GameCode.GDFloorObjects1_1final.indexOf(gdjs.Main_32GameCode.GDFloorObjects2[j]) === -1 )
            gdjs.Main_32GameCode.GDFloorObjects1_1final.push(gdjs.Main_32GameCode.GDFloorObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Main_32GameCode.GDBirdObjects1_1final, gdjs.Main_32GameCode.GDBirdObjects1);
gdjs.copyArray(gdjs.Main_32GameCode.GDFloorObjects1_1final, gdjs.Main_32GameCode.GDFloorObjects1);
gdjs.copyArray(gdjs.Main_32GameCode.GDPipeBottomObjects1_1final, gdjs.Main_32GameCode.GDPipeBottomObjects1);
gdjs.copyArray(gdjs.Main_32GameCode.GDPipeTopObjects1_1final, gdjs.Main_32GameCode.GDPipeTopObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "GAME";
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32GameCode.GDBirdObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("GAMEOVER");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBirdObjects1[i].getBehavior("Physics2").setLinearVelocityY(-(800));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "End Interface");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Main_32GameCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("PointCollider"), gdjs.Main_32GameCode.GDPointColliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDPointColliderObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBirdObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32GameCode.GDPointColliderObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Main_32GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDPointColliderObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDPointColliderObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score"))));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreTextObjects1[i].setBBText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4))));
}
}}

}


};

gdjs.Main_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32GameCode.GDFloorObjects1.length = 0;
gdjs.Main_32GameCode.GDFloorObjects2.length = 0;
gdjs.Main_32GameCode.GDFloorObjects3.length = 0;
gdjs.Main_32GameCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32GameCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32GameCode.GDBackgroundObjects3.length = 0;
gdjs.Main_32GameCode.GDBirdObjects1.length = 0;
gdjs.Main_32GameCode.GDBirdObjects2.length = 0;
gdjs.Main_32GameCode.GDBirdObjects3.length = 0;
gdjs.Main_32GameCode.GDPipeTopObjects1.length = 0;
gdjs.Main_32GameCode.GDPipeTopObjects2.length = 0;
gdjs.Main_32GameCode.GDPipeTopObjects3.length = 0;
gdjs.Main_32GameCode.GDPipeBottomObjects1.length = 0;
gdjs.Main_32GameCode.GDPipeBottomObjects2.length = 0;
gdjs.Main_32GameCode.GDPipeBottomObjects3.length = 0;
gdjs.Main_32GameCode.GDButtonObjects1.length = 0;
gdjs.Main_32GameCode.GDButtonObjects2.length = 0;
gdjs.Main_32GameCode.GDButtonObjects3.length = 0;
gdjs.Main_32GameCode.GDStartTextObjects1.length = 0;
gdjs.Main_32GameCode.GDStartTextObjects2.length = 0;
gdjs.Main_32GameCode.GDStartTextObjects3.length = 0;
gdjs.Main_32GameCode.GDEndTextObjects1.length = 0;
gdjs.Main_32GameCode.GDEndTextObjects2.length = 0;
gdjs.Main_32GameCode.GDEndTextObjects3.length = 0;
gdjs.Main_32GameCode.GDScoreTextObjects1.length = 0;
gdjs.Main_32GameCode.GDScoreTextObjects2.length = 0;
gdjs.Main_32GameCode.GDScoreTextObjects3.length = 0;
gdjs.Main_32GameCode.GDPointColliderObjects1.length = 0;
gdjs.Main_32GameCode.GDPointColliderObjects2.length = 0;
gdjs.Main_32GameCode.GDPointColliderObjects3.length = 0;

gdjs.Main_32GameCode.eventsList1(runtimeScene);

return;

}

gdjs['Main_32GameCode'] = gdjs.Main_32GameCode;
