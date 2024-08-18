import{r as x,j as _}from"./index-CQgnHqw8.js";import{_ as $,C as H,r as y,S as K,F as q,g as G,a as W,u as X,d as Y,e as z}from"./App-CW3bKci6.js";import"./firebaseConfig-CAPoEHPC.js";/**
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
 */const S="firebasestorage.googleapis.com",Z="storageBucket",J=2*60*1e3,Q=10*60*1e3;/**
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
 */class g extends q{constructor(e,s,n=0){super(U(e),`Firebase Storage: ${s} (${U(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return U(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var m;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(m||(m={}));function U(t){return"storage/"+t}function ee(){const t="An unknown error occurred, please check the error payload for server response.";return new g(m.UNKNOWN,t)}function te(){return new g(m.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function se(){return new g(m.CANCELED,"User canceled the upload/download.")}function ne(t){return new g(m.INVALID_URL,"Invalid URL '"+t+"'.")}function ie(t){return new g(m.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function P(t){return new g(m.INVALID_ARGUMENT,t)}function j(){return new g(m.APP_DELETED,"The Firebase app was deleted.")}function re(t){return new g(m.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class f{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=f.makeFromUrl(e,s)}catch{return new f(e,"")}if(n.path==="")return n;throw ie(e)}static makeFromUrl(e,s){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(p){p.path.charAt(p.path.length-1)==="/"&&(p.path_=p.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),o={bucket:1,path:3};function l(p){p.path_=decodeURIComponent(p.path)}const h="v[A-Za-z0-9_]+",R=s.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",k=new RegExp(`^https?://${R}/${h}/b/${i}/o${d}`,"i"),b={bucket:1,path:3},v=s===S?"(?:storage.googleapis.com|storage.cloud.google.com)":s,u="([^?#]*)",N=new RegExp(`^https?://${v}/${i}/${u}`,"i"),T=[{regex:c,indices:o,postModify:r},{regex:k,indices:b,postModify:l},{regex:N,indices:{bucket:1,path:2},postModify:l}];for(let p=0;p<T.length;p++){const I=T[p],A=I.regex.exec(e);if(A){const B=A[I.indices.bucket];let D=A[I.indices.path];D||(D=""),n=new f(B,D),I.postModify(n);break}}if(n==null)throw ne(e);return n}}class oe{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ae(t,e,s){let n=1,i=null,r=null,a=!1,c=0;function o(){return c===2}let l=!1;function h(...u){l||(l=!0,e.apply(null,u))}function R(u){i=setTimeout(()=>{i=null,t(k,o())},u)}function d(){r&&clearTimeout(r)}function k(u,...N){if(l){d();return}if(u){d(),h.call(null,u,...N);return}if(o()||a){d(),h.call(null,u,...N);return}n<64&&(n*=2);let T;c===1?(c=2,T=0):T=(n+Math.random())*1e3,R(T)}let b=!1;function v(u){b||(b=!0,d(),!l&&(i!==null?(u||(c=2),clearTimeout(i),R(0)):u||(c=1)))}return R(0),r=setTimeout(()=>{a=!0,v(!0)},s),v}function ce(t){t(!1)}/**
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
 */function le(t){return t!==void 0}function C(t,e,s,n){if(n<e)throw P(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw P(`Invalid value for '${t}'. Expected ${s} or less.`)}function ue(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const i=e(n)+"="+e(t[n]);s=s+i+"&"}return s=s.slice(0,-1),s}/**
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
 */var w;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(w||(w={}));/**
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
 */function he(t,e){const s=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return s||i||r}/**
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
 */class de{constructor(e,s,n,i,r,a,c,o,l,h,R,d=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=R,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,b)=>{this.resolve_=k,this.reject_=b,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new O(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=c=>{const o=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const c=r.getErrorCode()===w.NO_ERROR,o=r.getStatus();if(!c||he(o,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===w.ABORT;n(!1,new O(!1,null,h));return}const l=this.successCodes_.indexOf(o)!==-1;n(!0,new O(l,r))})},s=(n,i)=>{const r=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const o=this.callback_(c,c.getResponse());le(o)?r(o):r()}catch(o){a(o)}else if(c!==null){const o=ee();o.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,o)):a(o)}else if(i.canceled){const o=this.appDelete_?j():se();a(o)}else{const o=te();a(o)}};this.canceled_?s(!1,new O(!1,null,!0)):this.backoffId_=ae(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ce(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class O{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function pe(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _e(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fe(t,e){e&&(t["X-Firebase-GMPID"]=e)}function me(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ge(t,e,s,n,i,r,a=!0){const c=ue(t.urlParams),o=t.url+c,l=Object.assign({},t.headers);return fe(l,e),pe(l,s),_e(l,r),me(l,n),new de(o,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function Re(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function be(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class E{constructor(e,s){this._service=e,s instanceof f?this._location=s:this._location=f.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new E(e,s)}get root(){const e=new f(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=Re(this._location.path);if(e===null)return null;const s=new f(this._location.bucket,e);return new E(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw re(e)}}function L(t,e){const s=e==null?void 0:e[Z];return s==null?null:f.makeFromBucketSpec(s,t)}class Te{constructor(e,s,n,i,r){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=S,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J,this._maxUploadRetryTime=Q,this._requests=new Set,i!=null?this._bucket=f.makeFromBucketSpec(i,this._host):this._bucket=L(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=f.makeFromBucketSpec(this._url,e):this._bucket=L(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new E(this,e)}_makeRequest(e,s,n,i,r=!0){if(this._deleted)return new oe(j());{const a=ge(e,this._appId,n,i,s,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,i).getPromise()}}const F="@firebase/storage",M="0.12.6";/**
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
 */const ke="storage";function ve(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Te(s,n,i,e,K)}function Ne(){$(new H(ke,ve,"PUBLIC").setMultipleInstances(!0)),y(F,M,""),y(F,M,"esm2017")}Ne();function Ee(){const[t,e]=x.useState(!1),[s,n]=x.useState(null),i=G(),r=W(),a=X(),c=()=>{a("/")};x.useEffect(()=>{(async()=>{const h=i.currentUser;if(h){const R=Y(r,"users",h.uid),d=await z(R);d.exists()&&n(d.data())}})()},[i,r]);const o=()=>{e(l=>!l)};return _.jsx(_.Fragment,{children:_.jsxs("div",{className:"bg-[#f1f5fb] w-screen h-screen relative",children:[_.jsxs("div",{className:" p-2 w-full flex justify-between items-center",children:[_.jsx("ion-icon",{name:"menu-outline"}),_.jsx("div",{onClick:o,children:_.jsx("ion-icon",{name:"person-circle-outline"})})]}),_.jsxs("div",{className:`lg:w-1/6 overflow-hidden transition-all ${t?"absolute":"hidden"} right-0 bg-white flex flex-col justify-start items-center  w-1/2 border-2 rounded-lg`,children:[_.jsx("button",{className:"p-1 py-2 px-2 w-full hover:bg-purple-600 hover:text-white border-b-2",children:"Account"}),_.jsx("button",{className:"p-1 py-2 px-2 w-full hover:bg-purple-600 hover:text-white border-b-2",children:"User Data"}),_.jsx("button",{onClick:c,className:"text-red-500 w-full px-2 p-1 hover:bg-red-200 py-2",children:"Logout"})]})]})})}export{Ee as default};
