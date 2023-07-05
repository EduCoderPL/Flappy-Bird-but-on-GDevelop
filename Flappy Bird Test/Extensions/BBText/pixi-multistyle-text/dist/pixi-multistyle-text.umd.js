!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("pixi.js-legacy")):"function"==typeof define&&define.amd?define(["pixi.js-legacy"],e):t.MultiStyleText=e(t.PIXI)}(this,function(t){var e=["pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture","mouseover","mouseenter","mousedown","mousemove","mouseup","mousecancel","mouseout","mouseleave","touchover","touchenter","touchdown","touchmove","touchup","touchcancel","touchout","touchleave"],i={bbcode:["[","]"],xml:["<",">"]},s=function(s){function o(t,i){var o=this;s.call(this,t),this.styles=i,e.forEach(function(t){o.on(t,function(t){return o.handleInteraction(t)})})}s&&(o.__proto__=s),(o.prototype=Object.create(s&&s.prototype)).constructor=o;var n={styles:{configurable:!0}};return o.prototype.handleInteraction=function(t){var e=t,i=t.data.getLocalPosition(this),s=this.hitboxes.reduce(function(t,e){return void 0!==t?t:e.hitbox.contains(i.x,i.y)?e:void 0},void 0);e.targetTag=void 0===s?void 0:s.tag},n.styles.set=function(e){for(var i in this.textStyles={},this.textStyles.default=this.assign({},o.DEFAULT_TAG_STYLE),e)"default"===i?this.assign(this.textStyles.default,e[i]):this.textStyles[i]=this.assign({},e[i]);"bbcode"===this.textStyles.default.tagStyle&&(this.textStyles.b=this.assign({},{fontStyle:"bold"}),this.textStyles.i=this.assign({},{fontStyle:"italic"}),this.textStyles.color=this.assign({},{fill:""}),this.textStyles.outline=this.assign({},{stroke:"",strokeThickness:6}),this.textStyles.font=this.assign({},{fontFamily:""}),this.textStyles.shadow=this.assign({},{dropShadowColor:"",dropShadow:!0,dropShadowBlur:3,dropShadowDistance:3,dropShadowAngle:2}),this.textStyles.size=this.assign({},{fontSize:"px"}),this.textStyles.spacing=this.assign({},{letterSpacing:""}),this.textStyles.align=this.assign({},{align:""})),this.withPrivateMembers()._style=new t.TextStyle(this.textStyles.default),this.withPrivateMembers().dirty=!0},o.prototype.setTagStyle=function(e,i){e in this.textStyles?this.assign(this.textStyles[e],i):this.textStyles[e]=this.assign({},i),this.withPrivateMembers()._style=new t.TextStyle(this.textStyles.default),this.withPrivateMembers().dirty=!0},o.prototype.deleteTagStyle=function(e){"default"===e?this.textStyles.default=this.assign({},o.DEFAULT_TAG_STYLE):delete this.textStyles[e],this.withPrivateMembers()._style=new t.TextStyle(this.textStyles.default),this.withPrivateMembers().dirty=!0},o.prototype.getTagRegex=function(t,e){var s=Object.keys(this.textStyles).join("|");s=t?"("+s+")":"(?:"+s+")";var o="bbcode"===this.textStyles.default.tagStyle?"\\"+i.bbcode[0]+s+"(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\"+i.bbcode[1]+"|\\"+i.bbcode[0]+"\\/"+s+"\\s*\\"+i.bbcode[1]:"\\"+i.xml[0]+s+"(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\"+i.xml[1]+"|\\"+i.xml[0]+"\\/"+s+"\\s*\\"+i.xml[1];return e&&(o="("+o+")"),new RegExp(o,"g")},o.prototype.getPropertyRegex=function(){return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')","g")},o.prototype.getBBcodePropertyRegex=function(){return new RegExp("[A-Za-z0-9_\\-]+=([A-Za-z0-9_\\-\\#]+)","g")},o.prototype._getTextDataPerLine=function(t){for(var e=[],s=this.getTagRegex(!0,!1),o=[this.assign({},this.textStyles.default)],n=[{name:"default",properties:{}}],r=0;r<t.length;r++){for(var a=[],h=[],l=void 0;l=s.exec(t[r]);)h.push(l);if(0===h.length)a.push(this.createTextData(t[r],o[o.length-1],n[n.length-1]));else{for(var c=0,x=0;x<h.length;x++){if(h[x].index>c&&a.push(this.createTextData(t[r].substring(c,h[x].index),o[o.length-1],n[n.length-1])),"/"===h[x][0][1])o.length>1&&(o.pop(),n.pop());else{for(var d={},g=this.getPropertyRegex(),p=void 0;p=g.exec(h[x][0]);)d[p[1]]=p[2]||p[3];if(n.push({name:h[x][1],properties:d}),"bbcode"===this.textStyles.default.tagStyle&&h[x][0].includes("=")&&this.textStyles[h[x][1]]){var u=this.getBBcodePropertyRegex().exec(h[x][0]),f={};Object.entries(this.textStyles[h[x][1]]).forEach(function(t){f[t[0]]="string"!=typeof t[1]?t[1]:u[1]+t[1]}),o.push(this.assign({},o[o.length-1],f))}else o.push(this.assign({},o[o.length-1],this.textStyles[h[x][1]]))}c=h[x].index+h[x][0].length}if(c<t[r].length){var y=this.createTextData(c?t[r].substring(c):t[r],o[o.length-1],n[n.length-1]);a.push(y)}}e.push(a)}var b=this.textStyles.default.tagStyle;return e[e.length-1].map(function(t){t.text.includes(i[b][0])&&(t.text=t.text.match("bbcode"===b?/^(.*)\[/:/^(.*)\</)[1])}),e},o.prototype.getFontString=function(e){return new t.TextStyle(e).toFontString()},o.prototype.createTextData=function(t,e,i){return{text:t,style:e,width:0,height:0,fontProperties:void 0,tag:i}},o.prototype.getDropShadowPadding=function(){var t=this,e=0,i=0;return Object.keys(this.textStyles).forEach(function(s){var o=t.textStyles[s],n=o.dropShadowBlur;e=Math.max(e,o.dropShadowDistance||0),i=Math.max(i,n||0)}),e+i},o.prototype.withPrivateMembers=function(){return this},o.prototype.updateText=function(){var e=this;if(this.withPrivateMembers().dirty){this.hitboxes=[],this.texture.baseTexture.resolution=this.resolution;var i=this.textStyles,s=this.text;this.withPrivateMembers()._style.wordWrap&&(s=this.wordWrap(this.text));for(var n=s.split(/(?:\r\n|\r|\n)/),r=this._getTextDataPerLine(n),a=[],h=[],l=[],c=0,x=0;x<n.length;x++){for(var d=0,g=0,p=0,u=0;u<r[x].length;u++){var f=r[x][u].style;this.context.font=this.getFontString(f),r[x][u].width=this.context.measureText(r[x][u].text).width,0!==r[x][u].text.length&&(r[x][u].width+=(r[x][u].text.length-1)*f.letterSpacing,u>0&&(d+=f.letterSpacing/2),u<r[x].length-1&&(d+=f.letterSpacing/2)),d+=r[x][u].width,r[x][u].fontProperties=t.TextMetrics.measureFont(this.context.font),r[x][u].height=r[x][u].fontProperties.fontSize,"number"==typeof f.valign?(g=Math.min(g,f.valign-r[x][u].fontProperties.descent),p=Math.max(p,f.valign+r[x][u].fontProperties.ascent)):(g=Math.min(g,-r[x][u].fontProperties.descent),p=Math.max(p,r[x][u].fontProperties.ascent))}a[x]=d,h[x]=g,l[x]=p,c=Math.max(c,d)}var y=Object.keys(i).map(function(t){return i[t]}).reduce(function(t,e){return Math.max(t,e.strokeThickness||0)},0),b=this.getDropShadowPadding(),S=c+2*y+2*b,v=l.reduce(function(t,e){return t+e},0)-h.reduce(function(t,e){return t+e},0)+2*y+2*b;this.canvas.width=S*this.resolution,this.canvas.height=v*this.resolution,this.context.scale(this.resolution,this.resolution),this.context.textBaseline="alphabetic",this.context.lineJoin="round";for(var m=b+y,w=[],T=0;T<r.length;T++){var P=r[T],k=void 0;switch(this.withPrivateMembers()._style.align){case"left":k=b+y;break;case"center":k=b+y+(c-a[T])/2;break;case"right":k=b+y+c-a[T]}for(var _=0;_<P.length;_++){var M=P[_],F=M.style,O=M.text,A=M.fontProperties,E=M.width,D=M.tag,B=m+A.ascent;switch(F.valign){case"top":break;case"baseline":B+=l[T]-A.ascent;break;case"middle":B+=(l[T]-h[T]-A.ascent-A.descent)/2;break;case"bottom":B+=l[T]-h[T]-A.ascent-A.descent;break;default:B+=l[T]-A.ascent-F.valign}if(0===F.letterSpacing)w.push({text:O,style:F,x:k,y:B,width:E,ascent:A.ascent,descent:A.descent,tag:D}),k+=P[_].width;else{this.context.font=this.getFontString(P[_].style);for(var W=0;W<O.length;W++){(W>0||_>0)&&(k+=F.letterSpacing/2);var j=this.context.measureText(O.charAt(W)).width;w.push({text:O.charAt(W),style:F,x:k,y:B,width:j,ascent:A.ascent,descent:A.descent,tag:D}),k+=j,(W<O.length-1||_<P.length-1)&&(k+=F.letterSpacing/2)}}}m+=l[T]-h[T]}this.context.save(),w.forEach(function(i){var s=i.style,o=i.text,n=i.x,r=i.y;if(s.dropShadow){e.context.font=e.getFontString(s);var a=s.dropShadowColor;"number"==typeof a&&(a=t.utils.hex2string(a)),e.context.shadowColor=a,e.context.shadowBlur=s.dropShadowBlur,e.context.shadowOffsetX=Math.cos(s.dropShadowAngle)*s.dropShadowDistance*e.resolution,e.context.shadowOffsetY=Math.sin(s.dropShadowAngle)*s.dropShadowDistance*e.resolution,e.context.fillText(o,n,r)}}),this.context.restore(),w.forEach(function(i){var s=i.style,o=i.text,n=i.x,r=i.y;if(void 0!==s.stroke&&s.strokeThickness){e.context.font=e.getFontString(s);var a=s.stroke;"number"==typeof a&&(a=t.utils.hex2string(a)),e.context.strokeStyle=a,e.context.lineWidth=s.strokeThickness,e.context.strokeText(o,n,r)}}),w.forEach(function(i){var s=i.style,o=i.text,n=i.x,r=i.y;if(void 0!==s.fill){e.context.font=e.getFontString(s);var a=s.fill;if("number"==typeof a)a=t.utils.hex2string(a);else if(Array.isArray(a))for(var h=0;h<a.length;h++){var l=a[h];"number"==typeof l&&(a[h]=t.utils.hex2string(l))}e.context.fillStyle=e._generateFillStyle(new t.TextStyle(s),[o]),e.context.fillText(o,n,r)}}),w.forEach(function(i){var s=i.style,n=i.x,r=i.y,a=i.width,h=i.ascent,l=i.descent,c=i.tag,x=-e.withPrivateMembers()._style.padding-e.getDropShadowPadding();e.hitboxes.push({tag:c,hitbox:new t.Rectangle(n+x,r-h+x,a,h+l)}),(void 0===s.debug?o.debugOptions.spans.enabled:s.debug)&&(e.context.lineWidth=1,o.debugOptions.spans.bounding&&(e.context.fillStyle=o.debugOptions.spans.bounding,e.context.strokeStyle=o.debugOptions.spans.bounding,e.context.beginPath(),e.context.rect(n,r-h,a,h+l),e.context.fill(),e.context.stroke(),e.context.stroke()),o.debugOptions.spans.baseline&&(e.context.strokeStyle=o.debugOptions.spans.baseline,e.context.beginPath(),e.context.moveTo(n,r),e.context.lineTo(n+a,r),e.context.closePath(),e.context.stroke()),o.debugOptions.spans.top&&(e.context.strokeStyle=o.debugOptions.spans.top,e.context.beginPath(),e.context.moveTo(n,r-h),e.context.lineTo(n+a,r-h),e.context.closePath(),e.context.stroke()),o.debugOptions.spans.bottom&&(e.context.strokeStyle=o.debugOptions.spans.bottom,e.context.beginPath(),e.context.moveTo(n,r+l),e.context.lineTo(n+a,r+l),e.context.closePath(),e.context.stroke()),o.debugOptions.spans.text&&(e.context.fillStyle="#ffffff",e.context.strokeStyle="#000000",e.context.lineWidth=2,e.context.font="8px monospace",e.context.strokeText(c.name,n,r-h+8),e.context.fillText(c.name,n,r-h+8),e.context.strokeText(a.toFixed(2)+"x"+(h+l).toFixed(2),n,r-h+16),e.context.fillText(a.toFixed(2)+"x"+(h+l).toFixed(2),n,r-h+16)))}),o.debugOptions.objects.enabled&&(o.debugOptions.objects.bounding&&(this.context.fillStyle=o.debugOptions.objects.bounding,this.context.beginPath(),this.context.rect(0,0,S,v),this.context.fill()),o.debugOptions.objects.text&&(this.context.fillStyle="#ffffff",this.context.strokeStyle="#000000",this.context.lineWidth=2,this.context.font="8px monospace",this.context.strokeText(S.toFixed(2)+"x"+v.toFixed(2),0,8,S),this.context.fillText(S.toFixed(2)+"x"+v.toFixed(2),0,8,S))),this.updateTexture()}},o.prototype.wordWrap=function(t){var e="",i=this.getTagRegex(!0,!0),s=t.split("\n"),o=this.withPrivateMembers()._style.wordWrapWidth,n=[this.assign({},this.textStyles.default)];this.context.font=this.getFontString(this.textStyles.default);for(var r=0;r<s.length;r++){for(var a=o,h=s[r].split(i),l=!0,c=0;c<h.length;c++)if(i.test(h[c]))e+=h[c],"/"===h[c][1]?(c+=2,n.pop()):(n.push(this.assign({},n[n.length-1],this.textStyles[h[++c]])),c++),this.context.font=this.getFontString(n[n.length-1]);else for(var x=h[c].split(" "),d=0;d<x.length;d++){var g=this.context.measureText(x[d]).width;if(this.withPrivateMembers()._style.breakWords&&g>a){var p=x[d].split("");d>0&&(e+=" ",a-=this.context.measureText(" ").width);for(var u=0;u<p.length;u++){var f=this.context.measureText(p[u]).width;f>a?(e+="\n"+p[u],a=o-f):(e+=p[u],a-=f)}}else if(this.withPrivateMembers()._style.breakWords)e+=x[d],a-=g;else{var y=g+(d>0?this.context.measureText(" ").width:0);y>a?(l||(e+="\n"),e+=x[d],a=o-g):(a-=y,d>0&&(e+=" "),e+=x[d])}l=!1}r<s.length-1&&(e+="\n")}return e},o.prototype.updateTexture=function(){var t=this.withPrivateMembers()._texture,e=this.getDropShadowPadding();t.baseTexture.setRealSize(this.canvas.width,this.canvas.height,this.resolution),t.trim.width=t.frame.width=this.canvas.width/this.resolution,t.trim.height=t.frame.height=this.canvas.height/this.resolution,t.trim.x=-this.withPrivateMembers()._style.padding-e,t.trim.y=-this.withPrivateMembers()._style.padding-e,t.orig.width=t.frame.width-2*(this.withPrivateMembers()._style.padding+e),t.orig.height=t.frame.height-2*(this.withPrivateMembers()._style.padding+e),this.withPrivateMembers()._onTextureUpdate(),t.baseTexture.emit("update",t.baseTexture),this.withPrivateMembers().dirty=!1},o.prototype.assign=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];for(var s=0,o=e;s<o.length;s+=1){var n=o[s];for(var r in n)t[r]=n[r]}return t},Object.defineProperties(o.prototype,n),o}(t.Text);return s.DEFAULT_TAG_STYLE={align:"left",breakWords:!1,dropShadow:!1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"#000000",dropShadowDistance:5,fill:"black",fillGradientType:t.TEXT_GRADIENT.LINEAR_VERTICAL,fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",valign:"baseline",wordWrap:!1,wordWrapWidth:100,tagStyle:"xml"},s.debugOptions={spans:{enabled:!1,baseline:"#44BB44",top:"#BB4444",bottom:"#4444BB",bounding:"rgba(255, 255, 255, 0.1)",text:!0},objects:{enabled:!1,bounding:"rgba(255, 255, 255, 0.05)",text:!0}},s});
