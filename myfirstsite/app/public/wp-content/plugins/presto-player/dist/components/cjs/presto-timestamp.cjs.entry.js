"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index=require("./index-ffe3057f.js"),prestoTimestampCss=":host{display:inline}",PrestoTimestamp=class{constructor(e){index.registerInstance(this,e),this.time=void 0}handleClick(e){e.preventDefault();const t=document.body.querySelector("presto-player");t&&t.goToAndPlay(this.timeToSeconds(this.time))}timeToSeconds(e){let t,s=e.split(":");return s.length>1&&(t=60*parseInt(s[0])),parseInt(s[1])+parseInt(t)}render(){return index.h("a",{href:"#",class:"presto-timestamp",onClick:e=>this.handleClick(e)},index.h("slot",null,this.time))}};PrestoTimestamp.style=prestoTimestampCss,exports.presto_timestamp=PrestoTimestamp;