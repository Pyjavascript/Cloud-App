const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Filelist-BzXyfKoG.js","assets/index-CxadAf1o.js","assets/index-CEqhRFGw.css","assets/firebaseConfig-CANu1Iuq.js"])))=>i.map(i=>d[i]);
import{f as L,h as Re,i as be,k as we,l as Te,C as ye,m as X,n as ke,S as Ee,F as Ae,_ as Ue,r as K,g as Oe,a as Ie,j as N,d as Ne,e as xe,b as De}from"./index-CxadAf1o.js";import{a as F}from"./firebaseConfig-CANu1Iuq.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="firebasestorage.googleapis.com",te="storageBucket",Pe=2*60*1e3,Ce=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Ae{constructor(t,n,s=0){super(M(t),`Firebase Storage: ${n} (${M(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return M(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var l;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(l||(l={}));function M(e){return"storage/"+e}function $(){const e="An unknown error occurred, please check the error payload for server response.";return new h(l.UNKNOWN,e)}function ve(e){return new h(l.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Le(e){return new h(l.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Se(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(l.UNAUTHENTICATED,e)}function Be(){return new h(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fe(e){return new h(l.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Me(){return new h(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function je(){return new h(l.CANCELED,"User canceled the upload/download.")}function He(e){return new h(l.INVALID_URL,"Invalid URL '"+e+"'.")}function $e(e){return new h(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ve(){return new h(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+te+"' property when initializing the app?")}function qe(){return new h(l.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ze(){return new h(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function We(e){return new h(l.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function H(e){return new h(l.INVALID_ARGUMENT,e)}function ne(){return new h(l.APP_DELETED,"The Firebase app was deleted.")}function Xe(e){return new h(l.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(e,t){return new h(l.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function x(e){throw new h(l.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=w.makeFromUrl(t,n)}catch{return new w(t,"")}if(s.path==="")return s;throw $e(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function c(m){m.path_=decodeURIComponent(m.path)}const p="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",R=new RegExp(`^https?://${g}/${p}/b/${r}/o${d}`,"i"),b={bucket:1,path:3},E=n===ee?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",I=new RegExp(`^https?://${E}/${r}/${f}`,"i"),T=[{regex:a,indices:u,postModify:o},{regex:R,indices:b,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let m=0;m<T.length;m++){const P=T[m],S=P.regex.exec(t);if(S){const me=S[P.indices.bucket];let B=S[P.indices.path];B||(B=""),s=new w(me,B),P.postModify(s);break}}if(s==null)throw He(t);return s}}class Ke{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function u(){return a===2}let c=!1;function p(...f){c||(c=!0,t.apply(null,f))}function g(f){r=setTimeout(()=>{r=null,e(R,u())},f)}function d(){o&&clearTimeout(o)}function R(f,...I){if(c){d();return}if(f){d(),p.call(null,f,...I);return}if(u()||i){d(),p.call(null,f,...I);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,g(T)}let b=!1;function E(f){b||(b=!0,d(),!c&&(r!==null?(f||(a=2),clearTimeout(r),g(0)):f||(a=1)))}return g(0),o=setTimeout(()=>{i=!0,E(!0)},n),E}function Ye(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){return e!==void 0}function Je(e){return typeof e=="object"&&!Array.isArray(e)}function V(e){return typeof e=="string"||e instanceof String}function G(e){return q()&&e instanceof Blob}function q(){return typeof Blob<"u"}function Y(e,t,n,s){if(s<t)throw H(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw H(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function se(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(U||(U={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n,s,r,o,i,a,u,c,p,g,d=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=g,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,b)=>{this.resolve_=R,this.reject_=b,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new C(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===U.NO_ERROR,u=o.getStatus();if(!a||Qe(u,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===U.ABORT;s(!1,new C(!1,null,p));return}const c=this.successCodes_.indexOf(u)!==-1;s(!0,new C(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Ze(u)?o(u):o()}catch(u){i(u)}else if(a!==null){const u=$();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(r.canceled){const u=this.appDelete_?ne():je();i(u)}else{const u=Me();i(u)}};this.canceled_?n(!1,new C(!1,null,!0)):this.backoffId_=Ge(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ye(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class C{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function tt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function nt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function st(e,t){t&&(e["X-Firebase-GMPID"]=t)}function rt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ot(e,t,n,s,r,o,i=!0){const a=se(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return st(c,t),tt(c,n),nt(c,o),rt(c,s),new et(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function at(...e){const t=it();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(q())return new Blob(e);throw new h(l.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ut(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){if(typeof atob>"u")throw We("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class j{constructor(t,n){this.data=t,this.contentType=n||null}}function lt(e,t){switch(e){case y.RAW:return new j(re(t));case y.BASE64:case y.BASE64URL:return new j(oe(e,t));case y.DATA_URL:return new j(dt(t),ft(t))}throw $()}function re(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function ht(e){let t;try{t=decodeURIComponent(e)}catch{throw D(y.DATA_URL,"Malformed data URL.")}return re(t)}function oe(e,t){switch(e){case y.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw D(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case y.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw D(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ct(t)}catch(r){throw r.message.includes("polyfill")?r:D(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ie{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw D(y.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=pt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function dt(e){const t=new ie(e);return t.base64?oe(y.BASE64,t.rest):ht(t.rest)}function ft(e){return new ie(e).contentType}function pt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,n){let s=0,r="";G(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(G(this.data_)){const s=this.data_,r=ut(s,t,n);return r===null?null:new k(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new k(s,!0)}}static getBlob(...t){if(q()){const n=t.map(s=>s instanceof k?s.data_:s);return new k(at.apply(null,n))}else{const n=t.map(i=>V(i)?lt(y.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new k(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){let t;try{t=JSON.parse(e)}catch{return null}return Je(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function gt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function ue(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){return t}class _{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||mt}}let v=null;function Rt(e){return!V(e)||e.length<2?e:ue(e)}function ce(){if(v)return v;const e=[];e.push(new _("bucket")),e.push(new _("generation")),e.push(new _("metageneration")),e.push(new _("name","fullPath",!0));function t(o,i){return Rt(i)}const n=new _("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new _("size");return r.xform=s,e.push(r),e.push(new _("timeCreated")),e.push(new _("updated")),e.push(new _("md5Hash",null,!0)),e.push(new _("cacheControl",null,!0)),e.push(new _("contentDisposition",null,!0)),e.push(new _("contentEncoding",null,!0)),e.push(new _("contentLanguage",null,!0)),e.push(new _("contentType",null,!0)),e.push(new _("metadata","customMetadata",!0)),v=e,v}function bt(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new w(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function wt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return bt(s,e),s}function le(e,t,n){const s=ae(t);return s===null?null:wt(e,s,n)}function Tt(e,t,n,s){const r=ae(t);if(r===null||!V(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const p=e.bucket,g=e.fullPath,d="/b/"+i(p)+"/o/"+i(g),R=z(d,n,s),b=se({alt:"media",token:c});return R+b})[0]}function yt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class he{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){if(!e)throw $()}function kt(e,t){function n(s,r){const o=le(e,r,t);return de(o!==null),o}return n}function Et(e,t){function n(s,r){const o=le(e,r,t);return de(o!==null),Tt(o,r,e.host,e._protocol)}return n}function fe(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Be():r=Se():n.getStatus()===402?r=Le(e.bucket):n.getStatus()===403?r=Fe(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function At(e){const t=fe(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=ve(e.path)),o.serverResponse=r.serverResponse,o}return n}function Ut(e,t,n){const s=t.fullServerUrl(),r=z(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new he(r,o,Et(e,n),i);return a.errorHandler=At(t),a}function Ot(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function It(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Ot(null,t)),s}function Nt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let m=0;m<2;m++)T=T+Math.random().toString().slice(2);return T}const u=a();i["Content-Type"]="multipart/related; boundary="+u;const c=It(t,s,r),p=yt(c,n),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+u+"--",R=k.getBlob(g,s,d);if(R===null)throw qe();const b={name:c.fullPath},E=z(o,e.host,e._protocol),f="POST",I=e.maxUploadRetryTime,A=new he(E,f,kt(e,n),I);return A.urlParams=b,A.headers=i,A.body=R.uploadData(),A.errorHandler=fe(t),A}class xt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Dt extends xt{initXhr(){this.xhr_.responseType="text"}}function pe(){return new Dt}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this._service=t,n instanceof w?this._location=n:this._location=w.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new O(t,n)}get root(){const t=new w(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ue(this._location.path)}get storage(){return this._service}get parent(){const t=_t(this._location.path);if(t===null)return null;const n=new w(this._location.bucket,t);return new O(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Xe(t)}}function Pt(e,t,n){e._throwIfRoot("uploadBytes");const s=Nt(e.storage,e._location,ce(),new k(t,!0),n);return e.storage.makeRequestWithTokens(s,pe).then(r=>({metadata:r,ref:e}))}function Ct(e){e._throwIfRoot("getDownloadURL");const t=Ut(e.storage,e._location,ce());return e.storage.makeRequestWithTokens(t,pe).then(n=>{if(n===null)throw ze();return n})}function vt(e,t){const n=gt(e._location.path,t),s=new w(e._location.bucket,n);return new O(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){return/^[A-Za-z]+:\/\//.test(e)}function St(e,t){return new O(e,t)}function _e(e,t){if(e instanceof W){const n=e;if(n._bucket==null)throw Ve();const s=new O(n,n._bucket);return t!=null?_e(s,t):s}else return t!==void 0?vt(e,t):e}function Bt(e,t){if(t&&Lt(t)){if(e instanceof W)return St(e,t);throw H("To use ref(service, url), the first argument must be a Storage instance.")}else return _e(e,t)}function Z(e,t){const n=t==null?void 0:t[te];return n==null?null:w.makeFromBucketSpec(n,e)}function Ft(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:ke(r,e.app.options.projectId))}class W{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ee,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pe,this._maxUploadRetryTime=Ce,this._requests=new Set,r!=null?this._bucket=w.makeFromBucketSpec(r,this._host):this._bucket=Z(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=w.makeFromBucketSpec(this._url,t):this._bucket=Z(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Y("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Y("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Ke(ne());{const i=ot(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const J="@firebase/storage",Q="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="storage";function Mt(e,t,n){return e=L(e),Pt(e,t,n)}function jt(e){return e=L(e),Ct(e)}function Ht(e,t){return e=L(e),Bt(e,t)}function $t(e=we(),t){e=L(e);const s=Re(e,ge).getImmediate({identifier:t}),r=be("storage");return r&&Vt(s,...r),s}function Vt(e,t,n,s={}){Ft(e,t,n,s)}function qt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new W(n,s,r,t,Ee)}function zt(){Te(new ye(ge,qt,"PUBLIC").setMultipleInstances(!0)),X(J,Q,""),X(J,Q,"esm2017")}zt();React.lazy(()=>Ue(()=>import("./Filelist-BzXyfKoG.js"),__vite__mapDeps([0,1,2,3])));function Kt(){const[e,t]=K.useState(null),[n,s]=K.useState(!1),r=Oe(F),o=Ie(F),i=$t(F),a=c=>{t(c.target.files[0])},u=()=>{if(!e||!r.currentUser)return;s(!0);const c=r.currentUser.email,p=Ht(i,`users/${c}/${e.name}`),g=Ne(o,"users",c);Mt(p,e).then(()=>jt(p)).then(d=>xe(g).then(R=>{const b=R.exists()?R.data():{files:[]},f=[...Array.isArray(b.files)?b.files:[],{name:e.name,url:d,createdAt:new Date}];return De(g,{files:f})})).then(()=>{alert("File uploaded successfully!")}).catch(d=>{console.error("Upload error:",d)}).finally(()=>{s(!1)})};return N.jsxs(N.Fragment,{children:[N.jsxs("div",{children:[N.jsx("input",{type:"file",onChange:a}),N.jsx("button",{onClick:u,disabled:n,children:n?"Uploading...":"Upload File"})]}),N.jsx(FileList,{})]})}export{Kt as default};
