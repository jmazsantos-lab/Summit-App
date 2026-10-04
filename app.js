
/* ================== Iconos ================== */
const P={
inbox:'<path d="M4 13h4l2 3h4l2-3h4"/><path d="M4 13l2-7h12l2 7v6H4z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
calendar:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
upcoming:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4M9 15h6M13 13l2 2-2 2"/>',
next:'<circle cx="12" cy="12" r="9"/><path d="M8 12h8M13 8.5l3.5 3.5-3.5 3.5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
cloud:'<path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 11 3.5 3.5 0 0 0 7 18z"/>',
grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
chart:'<path d="M5 20V11M11 20V5M17 20v-6M3 20h18"/>',
book:'<path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10"/>',
gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M5.5 18.5l1.8-1.8M16.7 7.3l1.8-1.8"/>',
flag:'<path d="M5 21V4h12l-2.5 4.5L17 13H5"/>',
bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
repeat:'<path d="M4 12V9.5A3.5 3.5 0 0 1 7.5 6H19l-3-3"/><path d="M20 12v2.5a3.5 3.5 0 0 1-3.5 3.5H5l3 3"/>',
close:'<path d="M6 6l12 12M18 6L6 18"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
kanban:'<rect x="4" y="4" width="4.5" height="16" rx="1.2"/><rect x="10" y="4" width="4.5" height="10" rx="1.2"/><rect x="16" y="4" width="4.5" height="13" rx="1.2"/>',
list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
sunsmall:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
auto:'<circle cx="12" cy="12" r="8"/><path d="M12 4v16" /><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
bolt:'<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
play:'<path d="M8 5l11 7-11 7z"/>',
pause:'<path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/>',
stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
trash:'<path d="M4 7h16M9.5 7V4.5h5V7M6 7l1 13h10l1-13"/>',
filter:'<path d="M4 5h16l-6 7.5V19l-4 2v-8.5z"/>',
at:'<circle cx="12" cy="12" r="3.5"/><path d="M15.5 12v1.5a2.5 2.5 0 0 0 5 0V12a8.5 8.5 0 1 0-3.4 6.8"/>',
more:'<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
arrowL:'<path d="M15 5l-7 7 7 7"/>',arrowR:'<path d="M9 5l7 7-7 7"/>',
note:'<path d="M6 4h9l3 3v13H6z"/><path d="M9 11h6M9 15h4"/>',
join:'<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.8"/><path d="M16 14.2a5.5 5.5 0 0 1 6 5.8"/>',
sparkle:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'
};
const ic=(n,s=18)=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||''}</svg>`;
const LOGO=`<svg viewBox="0 0 120 120" aria-hidden="true"><rect width="120" height="120" rx="27" fill="#EEF2EC"/><rect x=".75" y=".75" width="118.5" height="118.5" rx="26.3" fill="none" stroke="#1D1D1F" stroke-opacity=".07" stroke-width="1.5"/><path class="ck" d="M22 68l20 20 19-28 12 12 23-38" stroke="#5F7F6A" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ================== Fechas ================== */
const $=s=>document.querySelector(s);
const pad=n=>String(n).padStart(2,'0');
const iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const parse=s=>{const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
let TODAY=iso(new Date());
const addDays=(s,n)=>{const d=parse(s);d.setDate(d.getDate()+n);return iso(d)};
const diffDays=(a,b)=>Math.round((parse(a)-parse(b))/864e5);
const MES=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const MESL=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const WD=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
const WDC=WD.map(w=>w[0].toUpperCase()+w.slice(1));
const norm=s=>String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const nowLocal=()=>{const d=new Date();return iso(d)+'T'+pad(d.getHours())+':'+pad(d.getMinutes())};
function fmtDate(s){if(!s)return'';const d=diffDays(s,TODAY);if(d===0)return'Hoy';if(d===1)return'Mañana';if(d===-1)return'Ayer';const x=parse(s);if(d>1&&d<7)return WDC[x.getDay()];return x.getDate()+' '+MES[x.getMonth()]+(x.getFullYear()!==new Date().getFullYear()?' '+x.getFullYear():'')}
const fmtLong=s=>{const x=parse(s);return WDC[x.getDay()]+', '+x.getDate()+' de '+MESL[x.getMonth()]};
const fmtMin=m=>m>=60?(Math.floor(m/60)+' h'+(m%60?' '+m%60+' min':'')):m+' min';
function nextWeekday(wd,from=TODAY,incl=false){const d=parse(from);for(let i=incl?0:1;i<=7;i++){const x=new Date(d);x.setDate(d.getDate()+i);if(x.getDay()===wd)return iso(x)}}
function mondayOf(s){const d=parse(s);const k=(d.getDay()+6)%7;d.setDate(d.getDate()-k);return iso(d)}

/* ================== Estado, datos y sincronización ================== */
const CFG=window.SUMMIT_CONFIG||{};
let sb=null,ME=null,MEMAIL='',S=null,RT=null;
const U={view:'today',project:null,context:null,filter:null,sel:null,projMode:'list',statsTab:'global',statsProject:null,range:30,energy:'all',maxTime:0,calMonth:TODAY.slice(0,7),calSel:TODAY,showDone:false,notif:false,confirmDel:false,qaSection:null};
const uid=()=>{if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();const b=crypto.getRandomValues(new Uint8Array(16));b[6]=b[6]&15|64;b[8]=b[8]&63|128;const h=[...b].map(x=>x.toString(16).padStart(2,'0')).join('');return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20)};
const task=id=>S.tasks.find(t=>t.id===id);
const proj=id=>S.projects.find(p=>p.id===id);
const isOpen=t=>t.status==='open';
const dayOf=c=>c.slice(0,10);
const DEF_SETTINGS={theme:'system',leadDays:2,dailyDigest:'07:00',notifyOverdue:true,reviewDay:5,sysNotif:false,capacity:480,twoMinute:true,detailed:false,showPlan:false};
const DEF_CONTEXTS=['Casa','Ordenador','Teléfono','Recados','Reunión','Oficina'];

/* ¿Esta tarea es «mía» para las listas personales? (en proyectos compartidos, solo lo asignado a mí o lo que creé sin asignar) */
function mine(t){if(t.status==='done')return (t.completedBy||t.assigneeId||t.userId)===ME;return (t.assigneeId||t.userId)===ME}
const myT=()=>S.tasks.filter(mine);
const isOwner=p=>p&&p.ownerId===ME;
const membersOf=pid=>S.members[pid]||[];
const isShared=p=>p&&(membersOf(p.id).length>1||!!p.shareCode);
function personName(id){if(id===ME)return S.me.name||'Yo';for(const k in S.members){const m=S.members[k].find(x=>x.userId===id);if(m)return m.name||'Miembro'}return 'Otra persona'}
const initial=n=>(String(n||'?').trim()[0]||'?').toUpperCase();
function canDeleteTask(t){if(t.userId===ME)return true;const p=proj(t.projectId);return isOwner(p)}
function newTask(o){return Object.assign({id:uid(),userId:ME,title:'',notes:'',projectId:null,assigneeId:null,section:null,inbox:false,status:'open',priority:4,start:null,due:null,time:null,deadline:null,recur:null,reminder:null,contexts:[],energy:null,estimate:null,waitingFor:null,waitingSince:null,subtasks:[],created:TODAY,completed:null,completedBy:null,focusMin:0,source:'app',needsParse:false},o)}

/* ---------- Conversión entre la app y la base de datos ---------- */
const localStamp=d=>iso(d)+'T'+pad(d.getHours())+':'+pad(d.getMinutes());
function taskToRow(t){return{id:t.id,user_id:t.userId,project_id:t.projectId||null,assignee_id:t.assigneeId||null,section:t.section||null,inbox:!!t.inbox,status:t.status,priority:t.priority,title:(t.title||'').trim().slice(0,500)||'Sin título',notes:t.notes||'',start_date:t.start||null,due_date:t.due||null,due_time:t.time||null,deadline:t.deadline||null,recur:t.recur||null,reminder:t.reminder||null,contexts:t.contexts||[],energy:t.energy||null,estimate:t.estimate||null,waiting_for:t.waitingFor||null,waiting_since:t.waitingSince||null,subtasks:t.subtasks||[],created_on:t.created||TODAY,completed_at:t.completed?new Date(t.completed).toISOString():null,completed_by:t.completedBy||null,focus_min:t.focusMin||0,source:t.source||'app',needs_parse:!!t.needsParse}}
function rowToTask(r){return{id:r.id,userId:r.user_id,projectId:r.project_id,assigneeId:r.assignee_id,section:r.section,inbox:r.inbox,status:r.status,priority:r.priority,title:r.title,notes:r.notes||'',start:r.start_date,due:r.due_date,time:r.due_time,deadline:r.deadline,recur:r.recur,reminder:r.reminder,contexts:r.contexts||[],energy:r.energy,estimate:r.estimate,waitingFor:r.waiting_for,waitingSince:r.waiting_since,subtasks:r.subtasks||[],created:r.created_on,completed:r.completed_at?localStamp(new Date(r.completed_at)):null,completedBy:r.completed_by,focusMin:r.focus_min||0,source:r.source,needsParse:r.needs_parse}}
function projectToRow(p){return{id:p.id,owner_id:p.ownerId,area_id:p.area||null,name:(p.name||'').slice(0,120)||'Proyecto',color:p.color,sections:p.sections||[],status:p.status,goal:p.goal||'',review_every:p.reviewEvery||7,last_review:p.lastReview||null,position:p.position||0}}
function rowToProject(r){return{id:r.id,ownerId:r.owner_id,area:r.area_id,name:r.name,color:r.color,sections:r.sections||[],status:r.status,goal:r.goal||'',reviewEvery:r.review_every,lastReview:r.last_review,position:r.position,shareCode:r.share_code}}
const areaToRow=a=>({id:a.id,user_id:ME,name:a.name,position:a.position||0});
const focusToRow=l=>({id:l.id,user_id:ME,day:l.date,minutes:l.min,task_id:l.taskId||null,project_id:l.projectId||null});
function profileRow(){return{name:S.me.name||'',settings:Object.assign({},S.settings,{contexts:S.contexts,filters:S.filters,reviews:S.reviews,reviewChecks:S.reviewChecks,tz:S.settings.tz})}}

/* ---------- Cola de cambios: se guarda en el móvil y se envía cuando hay conexión ---------- */
const SHADOW={tasks:new Map(),projects:new Map(),areas:new Map(),focus_sessions:new Map(),profile:''};
let QUEUE=[],flushing=false,flushTimer=null,warned=false;
const cacheKey=()=>'summit-cache-'+ME,queueKey=()=>'summit-queue-'+ME;
function persistLocal(){try{localStorage.setItem(queueKey(),JSON.stringify(QUEUE));localStorage.setItem(cacheKey(),JSON.stringify({S,shadow:{tasks:[...SHADOW.tasks],projects:[...SHADOW.projects],areas:[...SHADOW.areas],focus_sessions:[...SHADOW.focus_sessions],profile:SHADOW.profile},at:Date.now()}))}catch(e){}}
function enqueue(op){
  const i=QUEUE.findIndex(q=>q.t===op.t&&q.id===op.id);
  if(i<0){QUEUE.push(op);return}
  const q=QUEUE[i];
  if(op.op==='delete'){if(q.op==='insert')QUEUE.splice(i,1);else QUEUE[i]=op;return}
  if(op.op==='update'){if(q.op==='insert'||q.op==='update')Object.assign(q.row,op.row);else QUEUE.push(op);return}
  QUEUE.push(op);
}
function diffTable(t,list,toRow,shadow,strip){
  const seen=new Set();
  for(const x of list){const r=toRow(x),j=JSON.stringify(r);seen.add(r.id);const prev=shadow.get(r.id);
    if(prev===undefined){enqueue({t,op:'insert',id:r.id,row:r});shadow.set(r.id,j)}
    else if(prev!==j){const old=JSON.parse(prev),patch={};for(const k in r)if(JSON.stringify(r[k])!==JSON.stringify(old[k]))patch[k]=r[k];strip.forEach(k=>delete patch[k]);if(Object.keys(patch).length)enqueue({t,op:'update',id:r.id,row:patch});shadow.set(r.id,j)}}
  for(const id of [...shadow.keys()])if(!seen.has(id)){enqueue({t,op:'delete',id});shadow.delete(id)}
}
function save(){
  if(!S)return;
  // Orden: áreas → proyectos → tareas, para que existan antes de referenciarlas
  diffTable('areas',S.areas,areaToRow,SHADOW.areas,['id','user_id']);
  diffTable('projects',S.projects.filter(isOwner),projectToRow,SHADOW.projects,['id','owner_id']);
  diffTable('tasks',S.tasks,taskToRow,SHADOW.tasks,['id','user_id']);
  diffTable('focus_sessions',S.focusLog,focusToRow,SHADOW.focus_sessions,['id','user_id']);
  const pj=JSON.stringify(profileRow());if(pj!==SHADOW.profile){SHADOW.profile=pj;enqueue({t:'profiles',op:'update',id:ME,row:JSON.parse(pj)})}
  persistLocal();clearTimeout(flushTimer);flushTimer=setTimeout(flush,600);
}
const isNetErr=e=>!e.code&&/fetch|network|load failed|timeout|abort/i.test(String(e.message||e));
async function flush(){
  if(flushing||!sb||!QUEUE.length)return;flushing=true;setSync('saving');let authRetries=0;
  try{
    while(QUEUE.length){
      const op=QUEUE[0];let res;
      try{
        if(op.op==='insert')res=await sb.from(op.t).insert(op.row);
        else if(op.op==='update')res=await sb.from(op.t).update(op.row).eq('id',op.id);
        else res=await sb.from(op.t).delete().eq('id',op.id);
      }catch(e){res={error:e}}
      if(res.error){
        const st=res.status||0,er=res.error;
        if(isNetErr(er)||st===0||st>=500||st===408||st===429){setSync('offline');break}
        if(st===401||er.code==='PGRST301'||er.code==='PGRST303'||/jwt|token/i.test(er.message||'')){
          const ok=authRetries++<2?await ensureSession():'offline';if(ok==='ok')continue;setSync('offline');if(ok==='expired')sessionExpired();break}
        if(er.code!=='23505'){console.warn('Summit: cambio descartado',op,res.error);if(!warned){warned=true;toast('No se pudo guardar un cambio: '+esc(res.error.message||'error'),{icon:'close',warn:true})}}
      }
      QUEUE.shift();persistLocal();
    }
    if(!QUEUE.length)setSync('ok');
  }finally{flushing=false}
}
function setSync(s){const t=({ok:'Todo guardado',saving:'Sincronizando…',offline:'Sin conexión: tus cambios se guardan aquí y se envían al volver la red'})[s]||'';const el=$('#sync');if(el){el.dataset.s=s;el.title=t}const pill=$('#netpill');if(pill){pill.hidden=s!=='offline';pill.title=t}}
/* ---------- Sincronización: se intenta al abrir, al volver la red y cada 30 s ---------- */
let SYNC_FAIL=false,syncing=false,expiredShown=false;
async function ensureSession(){
  if(!sb)return 'offline';
  try{
    const r=await sb.auth.getSession();
    if(r.data&&r.data.session){const exp=(r.data.session.expires_at||0)*1000;if(!exp||exp-Date.now()>30000)return 'ok'}
    if(r.error&&isNetErr(r.error))return 'offline';
    const rf=await sb.auth.refreshSession();
    if(rf.data&&rf.data.session)return 'ok';
    if(rf.error&&(isNetErr(rf.error)||rf.error.name==='AuthRetryableFetchError'||!rf.error.status||rf.error.status>=500))return 'offline';
    return 'expired';
  }catch(e){return 'offline'}
}
function sessionExpired(){if(expiredShown)return;expiredShown=true;toast('Tu sesión ha caducado. Entra de nuevo para sincronizar (no se pierde nada).',{icon:'user',btn:'Entrar',ms:15000,fn:()=>{expiredShown=false;showAuth('login')}})}
async function syncAll(force){
  if(syncing||!sb||!ME||!S)return;syncing=true;
  try{
    if(navigator.onLine===false){SYNC_FAIL=true;setSync('offline');return}
    const ss=await ensureSession();
    if(ss!=='ok'){SYNC_FAIL=true;setSync('offline');if(ss==='expired')sessionExpired();return}
    await flush();
    if(QUEUE.length){SYNC_FAIL=true;return}
    if(busyEditing()){setTimeout(()=>syncAll(force),2500);return}
    await withTimeout(loadAll(),20000);refreshToday();render();SYNC_FAIL=false;setSync('ok');
    if(!RT)subscribeLive();
  }catch(e){if(isSchemaErr(e)){showSchemaError();return}SYNC_FAIL=true;setSync('offline')}
  finally{syncing=false}
}
const withTimeout=(p,ms)=>Promise.race([p,new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),ms))]);
function busyEditing(){const a=document.activeElement;return !$('#modal').hidden||!!(a&&a.closest&&a.closest('#detail')&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))}
window.addEventListener('online',()=>{setSync('saving');syncAll(true)});
window.addEventListener('offline',()=>setSync('offline'));
setInterval(()=>{if(QUEUE.length||SYNC_FAIL)syncAll()},30000);

/* ---------- Carga desde Supabase ---------- */
async function fetchAll(table,build){
  let out=[],from=0;const N=1000;
  for(;;){let q=sb.from(table).select('*');if(build)q=build(q);const{data,error}=await q.range(from,from+N-1);if(error)throw error;out=out.concat(data||[]);if(!data||data.length<N)break;from+=N}
  return out;
}
let MENAME='';
async function loadAll(){
  const chk=await sb.from('profiles').select('id').eq('id',ME).maybeSingle();
  if(chk.error)throw chk.error;
  if(!chk.data){const r=await sb.rpc('iniciar_cuenta',{p_name:MENAME||''});if(r.error)throw r.error}
  const [prof,areas,projects,members,tasks,focus,sc,ck]=await Promise.all([
    sb.from('profiles').select('*').eq('id',ME).maybeSingle(),
    fetchAll('areas',q=>q.eq('user_id',ME).order('position')),
    fetchAll('projects',q=>q.order('position').order('created_at')),
    fetchAll('project_members'),
    fetchAll('tasks',q=>q.order('created_at')),
    fetchAll('focus_sessions',q=>q.eq('user_id',ME)),
    sb.from('shortcut_codes').select('user_id').eq('user_id',ME).maybeSingle(),
    sb.from('claude_keys').select('user_id,last_used').eq('user_id',ME).maybeSingle()
  ]);
  if(prof.error)throw prof.error;
  const p=prof.data||{name:'',settings:{}};const st=p.settings||{};
  const next={me:{name:p.name||MEMAIL.split('@')[0],email:MEMAIL},
    settings:Object.assign({},DEF_SETTINGS,st),contexts:st.contexts||DEF_CONTEXTS.slice(),filters:st.filters||[],reviews:st.reviews||[],reviewChecks:st.reviewChecks||{},
    areas:areas.map(a=>({id:a.id,name:a.name,position:a.position})),projects:projects.map(rowToProject),members:{},
    tasks:tasks.map(rowToTask),focusLog:focus.map(r=>({id:r.id,date:r.day,min:r.minutes,taskId:r.task_id,projectId:r.project_id})),hasShortcut:!!(sc&&sc.data),hasClaude:!!(ck&&ck.data),claudeUsed:ck&&ck.data?ck.data.last_used:null};
  delete next.settings.contexts;delete next.settings.filters;delete next.settings.reviews;delete next.settings.reviewChecks;
  members.forEach(m=>{(next.members[m.project_id]=next.members[m.project_id]||[]).push({userId:m.user_id,name:m.display_name,role:m.role})});
  const pids=new Set(next.projects.map(x=>x.id));next.tasks.forEach(t=>{if(t.projectId&&!pids.has(t.projectId)){t.projectId=null;t.section=null}});
  S=next;
  SHADOW.tasks=new Map(tasks.map(r=>[r.id,JSON.stringify(taskToRow(rowToTask(r)))]));
  SHADOW.projects=new Map(S.projects.filter(isOwner).map(x=>[x.id,JSON.stringify(projectToRow(x))]));
  SHADOW.areas=new Map(S.areas.map(a=>[a.id,JSON.stringify(areaToRow(a))]));
  SHADOW.focus_sessions=new Map(S.focusLog.map(l=>[l.id,JSON.stringify(focusToRow(l))]));
  SHADOW.profile=JSON.stringify({name:p.name||'',settings:st});
  const tz=(Intl.DateTimeFormat().resolvedOptions().timeZone)||'America/Havana';if(S.settings.tz!==tz)S.settings.tz=tz;
  // Entradas capturadas con el atajo: interpretar el lenguaje natural
  myT().filter(t=>t.needsParse&&t.userId===ME).forEach(t=>{const r=parseQuick(t.title);if(r.title)t.title=r.title;['due','time','deadline','recur','estimate'].forEach(k=>{if(r[k])t[k]=r[k]});if(r.priority<4)t.priority=r.priority;if(r.contexts.length)t.contexts=r.contexts;if(r.projectId){t.projectId=r.projectId;t.inbox=false}t.needsParse=false});
  save();
}
function loadCache(){try{const c=JSON.parse(localStorage.getItem(cacheKey())||'null');if(!c||!c.S)return false;S=c.S;SHADOW.tasks=new Map(c.shadow.tasks);SHADOW.projects=new Map(c.shadow.projects);SHADOW.areas=new Map(c.shadow.areas);SHADOW.focus_sessions=new Map(c.shadow.focus_sessions);SHADOW.profile=c.shadow.profile;return true}catch(e){return false}}
let reloadTimer=null;
function softReload(){clearTimeout(reloadTimer);reloadTimer=setTimeout(()=>syncAll(),1200)}
function subscribeLive(){
  try{if(RT)sb.removeChannel(RT);RT=sb.channel('summit-'+ME);['tasks','projects','project_members'].forEach(tb=>RT.on('postgres_changes',{event:'*',schema:'summit',table:tb},()=>softReload()));RT.subscribe()}catch(e){}
}
function refreshToday(){const t=iso(new Date());if(t!==TODAY){TODAY=t}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&S){refreshToday();render();syncAll()}});

/* ---------- Cuentas ---------- */
let RESET_EMAIL='';
function showAuth(mode,msg){
  $('#app').hidden=true;$('#tabbar').hidden=true;$('#fab').hidden=true;const a=$('#auth');a.hidden=false;
  const f={login:['Entrar',''],signup:['Crear cuenta',''],reset:['Enviar código','Te enviaremos un código por correo.'],code:['Cambiar contraseña','Escribe el código del correo.'],newpass:['Nueva contraseña','']}[mode];
  a.innerHTML=`<form class="auth-card" id="auth-form" data-mode="${mode}" novalidate>
    ${LOGO.replace('<svg','<svg class="auth-logo"')}<h1>Summit</h1>${f[1]?`<p>${f[1]}</p>`:''}
    ${mode==='login'||mode==='signup'?`<div class="seg auth-seg"><button type="button" class="${mode==='login'?'on':''}" data-auth="login">Entrar</button><button type="button" class="${mode==='signup'?'on':''}" data-auth="signup">Crear cuenta</button></div>`:''}
    ${mode==='signup'?`<label class="field"><span>Tu nombre</span><input class="inp" id="au-name" autocomplete="name" required></label>`:''}
    ${mode==='code'?`<label class="field"><span>Código del correo</span><input class="inp mono" id="au-code" inputmode="numeric" autocomplete="one-time-code" maxlength="10" style="font-size:20px;letter-spacing:.2em;text-align:center" required></label>`:''}
    ${mode!=='newpass'&&mode!=='code'?`<label class="field"><span>Correo electrónico</span><input class="inp" id="au-email" type="email" autocomplete="email" required></label>`:''}
    ${mode!=='reset'?`<label class="field"><span>${mode==='code'||mode==='newpass'?'Nueva contraseña':'Contraseña'}</span><input class="inp" id="au-pass" type="password" autocomplete="${mode==='login'?'current-password':'new-password'}" minlength="8" required></label>`:''}
    <p class="auth-msg ${msg&&msg.err?'err':''}" id="au-msg">${msg?esc(msg.text):''}</p>
    <button class="btn primary auth-go" type="submit">${f[0]}</button>
    ${mode==='login'?'<button type="button" class="linkbtn" data-auth="reset">¿Has olvidado la contraseña?</button>':''}
    ${mode==='reset'?'<button type="button" class="linkbtn" data-auth="code">Ya tengo un código</button><button type="button" class="linkbtn" data-auth="login">Volver</button>':''}
    ${mode==='code'?`<p class="auth-msg" style="text-align:center">${RESET_EMAIL?'Enviado a '+esc(RESET_EMAIL)+' · ':''}<button type="button" class="linkbtn" data-auth="reset">Pedir otro código</button></p>`:''}
  </form>`;
}
function authMsg(text,err){const m=$('#au-msg');if(m){m.textContent=text;m.classList.toggle('err',!!err)}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-auth]');if(b){e.preventDefault();showAuth(b.dataset.auth)}});
document.addEventListener('submit',async e=>{
  if(e.target.id!=='auth-form')return;e.preventDefault();const mode=e.target.dataset.mode;const v=id=>{const x=$(id);return x?x.value.trim():''};
  const btn=e.target.querySelector('.auth-go');btn.disabled=true;authMsg('Un momento…');
  const redirect=location.origin+location.pathname;
  try{
    if(mode==='login'){const{data,error}=await sb.auth.signInWithPassword({email:v('#au-email'),password:$('#au-pass').value});if(error)throw error;await start(data.user)}
    if(mode==='signup'){if(!v('#au-name'))throw new Error('Escribe tu nombre');if($('#au-pass').value.length<8)throw new Error('La contraseña debe tener al menos 8 caracteres');
      const{data,error}=await sb.auth.signUp({email:v('#au-email'),password:$('#au-pass').value,options:{data:{name:v('#au-name')},emailRedirectTo:redirect}});if(error)throw error;
      if(data.session)await start(data.user);else showAuth('login',{text:'Cuenta creada. Te hemos enviado un correo: abre el enlace para confirmarla y después entra aquí.'})}
    if(mode==='reset'){const em=v('#au-email');if(!em)throw new Error('Escribe tu correo');const{error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:redirect});if(error)throw error;RESET_EMAIL=em;showAuth('code',{text:'Si el correo tiene cuenta, te llegará un código en unos minutos. Revisa también la carpeta de spam.'});return}
    if(mode==='code'){const code=v('#au-code').replace(/\s/g,'');if(!RESET_EMAIL)throw new Error('Vuelve atrás y escribe tu correo para pedir el código');if(!/^\d{6,10}$/.test(code))throw new Error('El código son los números que aparecen en el correo');if($('#au-pass').value.length<8)throw new Error('La contraseña debe tener al menos 8 caracteres');
      const r=await sb.auth.verifyOtp({email:RESET_EMAIL,token:code,type:'recovery'});if(r.error)throw r.error;const u2=await sb.auth.updateUser({password:$('#au-pass').value});if(u2.error)throw u2.error;toast('Contraseña cambiada. Guárdala cuando Safari te lo ofrezca.');await start(u2.data.user);return}
    if(mode==='newpass'){if($('#au-pass').value.length<8)throw new Error('La contraseña debe tener al menos 8 caracteres');const{data,error}=await sb.auth.updateUser({password:$('#au-pass').value});if(error)throw error;toast('Contraseña actualizada');await start(data.user)}
  }catch(err){authMsg(traducir(err.message),true)}finally{if(btn)btn.disabled=false}
});
function traducir(m){m=String(m||'');if(/token has expired|otp_expired|invalid.*(otp|token)|Token has expired or is invalid/i.test(m))return 'El código no es válido o ha caducado. Pide otro código.';if(/same.*password|different from the old/i.test(m))return 'La contraseña nueva debe ser distinta de la anterior.';if(/weak|at least/i.test(m)&&/password/i.test(m))return 'La contraseña es demasiado débil. Usa al menos 8 caracteres con letras y números.';if(/invalid login/i.test(m))return 'Correo o contraseña incorrectos.';if(/email not confirmed/i.test(m))return 'Confirma tu correo: abre el enlace que te enviamos.';if(/already registered|already exists/i.test(m))return 'Ya existe una cuenta con ese correo. Entra o recupera la contraseña.';if(/rate limit/i.test(m))return 'Demasiados intentos. Espera unos minutos.';if(/fetch|network|load failed/i.test(m))return 'Sin conexión. Comprueba tu red e inténtalo de nuevo.';if(/signups not allowed|signup is disabled/i.test(m))return 'El registro está cerrado. Pide una invitación a quien administra Summit.';return m}
const LASTKEY='summit-last-user';
function rememberUser(u){try{localStorage.setItem(LASTKEY,JSON.stringify({id:u.id,email:u.email||'',user_metadata:{name:(u.user_metadata&&u.user_metadata.name)||''}}))}catch(e){}}
function lastUser(){try{return JSON.parse(localStorage.getItem(LASTKEY)||'null')}catch(e){return null}}
function hasCacheFor(id){try{return !!localStorage.getItem('summit-cache-'+id)}catch(e){return false}}
function showApp(){$('#auth').hidden=true;$('#app').hidden=false;$('#tabbar').hidden=false;$('#fab').hidden=false;applyTheme();render();fUpdate()}
async function start(user,offline){
  const same=ME===user.id&&S;
  ME=user.id;MEMAIL=user.email||'';MENAME=(user.user_metadata&&user.user_metadata.name)||'';
  rememberUser(user);
  try{QUEUE=JSON.parse(localStorage.getItem(queueKey())||'[]')}catch(e){QUEUE=[]}
  if(same||loadCache()){
    // Abre al instante con los datos del dispositivo y sincroniza en segundo plano
    showApp();afterStart();setSync(offline||navigator.onLine===false?'offline':'saving');
    if(!offline)syncAll(true);else SYNC_FAIL=true;
    return;
  }
  if(offline){showAuth('login',{text:'Sin conexión. La primera vez necesitas internet para descargar tus datos.',err:true});return}
  try{await withTimeout(loadAll(),20000)}catch(e){console.warn(e);if(isSchemaErr(e)){showSchemaError();return}showAuth('login',{text:'No se pudo conectar. La primera vez necesitas internet para descargar tus datos.',err:true});return}
  showApp();setSync('ok');subscribeLive();afterStart();
}
function isSchemaErr(e){const m=String((e&&(e.message||e.hint))||'');return (e&&e.code==='PGRST106')||/schema must be one of|Invalid schema|exposed schemas/i.test(m)}
function showSchemaError(){$('#app').hidden=true;$('#tabbar').hidden=true;$('#fab').hidden=true;const a=$('#auth');a.hidden=false;a.innerHTML=`<div class="auth-card">${LOGO.replace('<svg','<svg class="auth-logo"')}<h1>Summit</h1><p>Falta un paso en Supabase: en <b>Project Settings → Data API → Exposed schemas</b>, añade <b>summit</b> y pulsa <b>Save</b>. Después vuelve a abrir Summit.</p><button class="btn primary auth-go" onclick="location.reload()">Reintentar</button></div>`}
async function signOut(){
  if(QUEUE.length&&!confirmSignOut){confirmSignOut=true;toast('Hay '+QUEUE.length+' cambios sin enviar. Conéctate antes de cerrar sesión o pulsa otra vez para descartarlos.',{icon:'cloud',warn:true,ms:8000});setTimeout(()=>confirmSignOut=false,8000);return}
  try{await sb.auth.signOut()}catch(e){}try{localStorage.removeItem(cacheKey());localStorage.removeItem(queueKey());localStorage.removeItem(LASTKEY)}catch(e){}location.replace(location.pathname)}
let confirmSignOut=false;

/* ================== Consultas ================== */
function alerts(){
  const L=S.settings.leadDays,res=[];
  myT().forEach(t=>{
    if(!(t.status==='open'||t.status==='waiting'))return;
    if(t.deadline){const dd=diffDays(t.deadline,TODAY);
      if(dd<0&&S.settings.notifyOverdue)res.push({t,k:'overdue',sev:0,txt:'Fecha límite vencida hace '+(-dd)+(dd===-1?' día':' días')});
      else if(dd===0)res.push({t,k:'today',sev:1,txt:'La fecha límite es hoy'});
      else if(dd>0&&dd<=L)res.push({t,k:'soon',sev:2,txt:'Fecha límite '+(dd===1?'mañana':'en '+dd+' días')+' ('+fmtDate(t.deadline)+')'});
    }
    if(t.due===TODAY&&t.time&&t.status==='open')res.push({t,k:'rem',sev:3,txt:'Programada hoy a las '+t.time+(t.reminder?' · aviso '+t.reminder:'')});
  });
  return res.sort((a,b)=>a.sev-b.sev);
}
const alertColor={overdue:'var(--bad)',today:'var(--deadline)',soon:'var(--p2)',rem:'var(--accent)'};
function isAvail(t){return isOpen(t)&&!t.inbox&&(!t.start||t.start<=TODAY)}
function byPrioDate(a,b){return a.priority-b.priority||(a.due||'9')<(b.due||'9')?-1:1}
function sortTasks(arr){return arr.slice().sort((a,b)=>{if(a.priority!==b.priority)return a.priority-b.priority;const da=a.deadline||a.due||'9999',db=b.deadline||b.due||'9999';return da<db?-1:da>db?1:0})}
function sortByTime(arr){return arr.slice().sort((a,b)=>{if(a.time&&b.time)return a.time<b.time?-1:1;if(a.time)return-1;if(b.time)return 1;return a.priority-b.priority})}
function projectsWithoutNext(){return S.projects.filter(p=>p.status==='active'&&!S.tasks.some(t=>t.projectId===p.id&&isOpen(t)))}
function applyFilter(q){
  return myT().filter(t=>{
    if(!isOpen(t))return false;
    if(q.maxPrio&&t.priority>q.maxPrio)return false;
    if(q.dueWithin&&!(t.due&&diffDays(t.due,TODAY)<=q.dueWithin))return false;
    if(q.deadlineWithin&&!(t.deadline&&diffDays(t.deadline,TODAY)<=q.deadlineWithin))return false;
    if(q.context&&!(t.contexts||[]).includes(q.context))return false;
    if(q.maxEst&&!(t.estimate&&t.estimate<=q.maxEst))return false;
    if(q.projectId&&t.projectId!==q.projectId)return false;
    if(q.energy&&t.energy!==q.energy)return false;
    return true;
  });
}

/* ================== Parser de entrada rápida ================== */
function findProject(q){q=norm(q).replace(/[-_]/g,'');return S.projects.find(p=>norm(p.name).replace(/\s+/g,'').startsWith(q))||S.projects.find(p=>norm(p.name).split(/\s+/).some(w=>w.startsWith(q)))}
function findContext(q){const n=norm(q);const c=S.contexts.find(c=>norm(c).startsWith(n));if(c)return c;const nc=q[0].toUpperCase()+q.slice(1);S.contexts.push(nc);return nc}
function dateWord(w){const n=norm(w).replace(/[.,]$/,'');if(n==='hoy')return TODAY;if(n==='manana')return addDays(TODAY,1);const i=WD.map(norm).indexOf(n);if(i>=0)return nextWeekday(i);const m=n.match(/^(\d{1,2})\/(\d{1,2})$/);if(m){const y=new Date().getFullYear();let c=iso(new Date(y,+m[2]-1,+m[1]));if(c<TODAY)c=iso(new Date(y+1,+m[2]-1,+m[1]));return c}return null}
function parseQuick(txt,dry){
  const r={title:'',projectId:null,contexts:[],priority:4,due:null,time:null,deadline:null,recur:null,estimate:null};
  const w=txt.trim().split(/\s+/).filter(Boolean),out=[];
  for(let i=0;i<w.length;i++){
    const x=w[i],n=norm(x),nx=norm(w[i+1]||'');
    if(x[0]==='#'&&x.length>1){const p=findProject(x.slice(1));if(p){r.projectId=p.id;continue}}
    if(x[0]==='@'&&x.length>1){if(dry){const c=S.contexts.find(c=>norm(c).startsWith(norm(x.slice(1))));r.contexts.push(c||x.slice(1))}else r.contexts.push(findContext(x.slice(1)));continue}
    if(/^!([1-4])$/.test(x)){r.priority=+x[1];continue}
    if(/^~\d+(m|min|h)$/i.test(x)){const v=parseInt(x.slice(1));r.estimate=/h$/i.test(x)?v*60:v;continue}
    if(/^\d{1,2}:\d{2}$/.test(x)){r.time=x.padStart(5,'0');continue}
    if(n==='a'&&nx==='las'&&/^\d{1,2}(:\d{2})?$/.test(w[i+2]||'')){const v=w[i+2];r.time=v.includes(':')?v.padStart(5,'0'):pad(+v)+':00';i+=2;continue}
    if(['plazo','deadline','limite'].includes(n)&&w[i+1]){let j=i+1;if(['el','hasta'].includes(norm(w[j]))&&w[j+1])j++;let dd=null;if(norm(w[j])==='pasado'&&norm(w[j+1]||'')==='manana'){dd=addDays(TODAY,2);j++}else dd=dateWord(w[j]);if(dd){r.deadline=dd;i=j;continue}}
    if(n==='cada'&&w[i+1]){const map={dia:'Cada día',semana:'Cada semana',mes:'Cada mes',ano:'Cada año'};if(map[nx]){r.recur=map[nx];if(!r.due)r.due=TODAY;i++;continue}const wi=WD.map(norm).indexOf(nx);if(wi>=0){r.recur='Cada '+WD[wi];if(!r.due)r.due=nextWeekday(wi,TODAY,true);i++;continue}}
    if(n==='pasado'&&nx==='manana'){r.due=addDays(TODAY,2);i++;continue}
    if(n==='el'&&dateWord(w[i+1]||'')&&!r.due){r.due=dateWord(w[i+1]);i++;continue}
    const dt=dateWord(x);if(dt&&!r.due){r.due=dt;continue}
    out.push(x);
  }
  r.title=out.join(' ');return r;
}

/* ================== Recurrencia ================== */
function nextRecur(rule,from){
  const n=norm(rule);let r;
  if(n.includes('laborable')){r=addDays(from,1);while([0,6].includes(parse(r).getDay()))r=addDays(r,1);return r}
  if(n.includes('2 semanas'))return addDays(from,14);
  if(n.includes('dia'))return addDays(from,1);
  if(n.includes('semana'))return addDays(from,7);
  if(n.includes('mes')){const d=parse(from);d.setMonth(d.getMonth()+1);return iso(d)}
  if(n.includes('ano')){const d=parse(from);d.setFullYear(d.getFullYear()+1);return iso(d)}
  const wi=WD.map(norm).findIndex(w=>n.endsWith(w));if(wi>=0)return nextWeekday(wi,from);
  return addDays(from,7);
}

/* ================== Render: barra lateral ================== */
function navLink(view,icon,label,count,extra='',hot=false){
  const active=U.view===view&&!extra?' active':'';
  return `<a class="${active}" data-act="nav" data-view="${view}" ${extra}>${ic(icon)}<span>${label}</span>${count!==undefined&&count!==''?`<span class="n${hot?' hot':''}">${count}</span>`:''}</a>`;
}
function pLink(p){return `<a class="${U.view==='project'&&U.project===p.id?'active':''}" data-act="nav" data-view="project" data-id="${p.id}"><i class="dot" style="--c:${p.color}"></i><span>${esc(p.name)}</span>${isShared(p)?`<span class="n" title="Compartido">${ic('users',14)}</span>`:''}</a>`}
function renderSidebar(){if(!S)return;
  const inbox=myT().filter(t=>t.inbox&&isOpen(t)).length;
  const today=myT().filter(t=>isOpen(t)&&((t.due&&t.due<=TODAY)||(t.deadline&&t.deadline<=TODAY))).length;
  const over=myT().filter(t=>isOpen(t)&&((t.due&&t.due<TODAY)||(t.deadline&&t.deadline<TODAY))).length;
  const moreViews=['next','waiting','someday','review','matrix','focus','stats','logbook','filter','context'];
  const inMore=moreViews.includes(U.view)||(U.view==='project'&&proj(U.project)?.status==='done');
  let h=`<div class="brand">${LOGO}<b>Summit</b></div>
  <nav class="nav">
    ${navLink('inbox','inbox','Bandeja',inbox||'')}
    ${navLink('today','sun','Hoy',today||'','',over>0)}
    ${navLink('upcoming','upcoming','Próximos')}
    ${navLink('calendar','calendar','Calendario')}
  </nav>
  <nav class="nav"><div class="nav-h">Proyectos<span class="hbtns"><button data-act="joinProject" aria-label="Unirse a un proyecto compartido" title="Unirse con código">${ic('join',15)}</button><button data-act="newProject" aria-label="Nuevo proyecto" title="Nuevo proyecto">${ic('plus',15)}</button></span></div>
    ${S.projects.filter(p=>p.status!=='done'&&isOwner(p)).map(pLink).join('')}
    ${S.projects.some(p=>!isOwner(p))?'<div class="area">Compartidos conmigo</div>'+S.projects.filter(p=>!isOwner(p)).map(pLink).join(''):''}
  </nav>
  <details class="more" data-key="sbMore" ${U.sbMore||inMore?'open':''}><summary>Más</summary>
  <nav class="nav">
    ${navLink('next','next','Próximas acciones')}
    ${navLink('waiting','clock','En espera')}
    ${navLink('someday','cloud','Algún día / Quizás')}
    ${navLink('review','refresh','Revisión semanal',reviewDue()?'•':'','',reviewDue())}
    ${navLink('matrix','grid','Matriz Eisenhower')}
    ${navLink('focus','target','Enfoque')}
    ${navLink('stats','chart','Estadísticas')}
    ${navLink('logbook','book','Registro')}
    <div class="nav-h">Filtros<button data-act="newFilter" aria-label="Nuevo filtro">${ic('plus',15)}</button></div>
    ${S.filters.map(f=>`<a class="${U.view==='filter'&&U.filter===f.id?'active':''}" data-act="nav" data-view="filter" data-id="${f.id}">${ic('filter')}<span>${esc(f.name)}</span></a>`).join('')}
    <div class="nav-h">Contextos</div>
    ${S.contexts.map(c=>`<a class="${U.view==='context'&&U.context===c?'active':''}" data-act="nav" data-view="context" data-id="${esc(c)}">${ic('at')}<span>${esc(c)}</span></a>`).join('')}
    ${S.projects.some(p=>p.status==='done')?'<div class="nav-h">Proyectos completados</div>'+S.projects.filter(p=>p.status==='done').map(p=>`<a data-act="nav" data-view="project" data-id="${p.id}" class="${U.view==='project'&&U.project===p.id?'active':''}"><i class="dot" style="--c:${p.color}"></i><span>${esc(p.name)}</span></a>`).join(''):''}
  </nav></details>
  <div class="sb-foot"><nav class="nav">${navLink('settings','gear','Ajustes')}</nav><div class="acct"><span class="av">${esc(initial(S.me.name))}</span><div class="acct-t"><b>${esc(S.me.name)}</b><span>${esc(MEMAIL)}</span></div><span id="sync" class="sync" data-s="${QUEUE.length?'saving':'ok'}" title="Todo guardado"></span></div></div>`;
  $('#sidebar').innerHTML=h;
}
function reviewDue(){const last=S.reviews[0];return !last||diffDays(TODAY,last)>=7}

/* ================== Render: filas ================== */
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function fmtDT(c){if(!c)return'';const d=dayOf(c);return fmtDate(d)+' · '+c.slice(11,16)}
function taskRow(t,o={}){
  const p=proj(t.projectId),ch=[];
  if(!S.settings.detailed)return taskRowSimple(t,o,p);
  if(t.status==='done')ch.push(`<span class="chip">${ic('check',13)} ${fmtDT(t.completed)}</span>`);
  if(t.due&&t.status!=='done'){const od=t.due<TODAY;ch.push(`<span class="chip ${od?'bad':t.due===TODAY?'ok':''}">${ic('calendar',13)} ${fmtDate(t.due)}${t.time?' · '+t.time:''}</span>`)}
  if(t.deadline&&t.status!=='done'){const dd=diffDays(t.deadline,TODAY);ch.push(`<span class="chip dl ${dd<0?'bad':dd<=S.settings.leadDays?'hot':''}">${ic('flag',13)} ${dd<0?'Venció '+fmtDate(t.deadline).toLowerCase():'Límite '+fmtDate(t.deadline).toLowerCase()}</span>`)}
  if(t.deadline&&t.status==='done'){const ok=dayOf(t.completed)<=t.deadline;ch.push(`<span class="chip ${ok?'ok':'bad'}">${ic('flag',13)} ${ok?'A tiempo':'Fuera de plazo'}</span>`)}
  if(t.recur)ch.push(`<span class="chip">${ic('repeat',13)} ${esc(t.recur)}</span>`);
  if(t.subtasks&&t.subtasks.length){const dn=t.subtasks.filter(s=>s.done).length;ch.push(`<span class="chip">${ic('list',13)} ${dn}/${t.subtasks.length}</span>`)}
  if(t.status==='waiting'&&t.waitingFor)ch.push(`<span class="chip">${ic('user',13)} ${esc(t.waitingFor)}${t.waitingSince?' · '+diffDays(TODAY,t.waitingSince)+' d':''}</span>`);
  if(t.estimate)ch.push(`<span class="chip mono">${fmtMin(t.estimate)}</span>`);
  if(t.energy)ch.push(`<span class="chip">${ic('bolt',13)} ${t.energy}</span>`);
  (t.contexts||[]).forEach(c=>ch.push(`<span class="chip ctx">@${esc(c)}</span>`));
  if(t.start&&t.start>TODAY&&t.status==='open')ch.push(`<span class="chip">Disponible ${fmtDate(t.start).toLowerCase()}</span>`);
  if(!o.hideProject&&p)ch.push(`<span class="chip"><i class="dot" style="--c:${p.color}"></i>${esc(p.name)}${t.section&&!o.hideSection?' / '+esc(t.section):''}</span>`);
  return `<div class="task ${t.status==='done'?'done':''} ${U.sel===t.id?'sel':''}" data-act="open" data-id="${t.id}"${o.drag?' draggable="true"':''}>
    <button class="check p${t.priority}" data-act="check" data-id="${t.id}" aria-label="${t.status==='done'?'Reabrir':'Completar'}: ${esc(t.title)}">${ic('check',12)}</button>
    <div class="t-body"><div class="t-title">${esc(t.title)}</div>${ch.length?`<div class="t-meta">${ch.join('')}</div>`:''}</div></div>`;
}
function fmtShort(d){const n=diffDays(d,TODAY),x=parse(d);if(n===0)return'Hoy';if(n===1)return'Mañana';if(n===-1)return'Ayer';if(n>1&&n<7)return WDC[x.getDay()].slice(0,3);return x.getDate()+' '+MES[x.getMonth()]}
function miniRing(done,total){const r=5,C=2*Math.PI*r,f=total?done/total:0;return `<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="${r}" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="2"/><circle cx="7" cy="7" r="${r}" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-f)}" transform="rotate(-90 7 7)"/></svg>`}
function taskRowSimple(t,o,p){
  const b=[];
  if(t.status==='done'){b.push(`<span class="bdg">${fmtShort(dayOf(t.completed))}</span>`)}
  else{
    if(t.assigneeId&&(t.assigneeId!==ME||o.hideProject)&&isShared(p))b.push(`<span class="av-s as" title="Asignada a ${esc(personName(t.assigneeId))}">${esc(initial(personName(t.assigneeId)))}</span>`);
    if(t.status==='waiting')b.push(`<span class="av-s" title="En espera de ${esc(t.waitingFor||'')}">${esc((t.waitingFor||'?')[0].toUpperCase())}</span>`);
    if(t.due){const n=diffDays(t.due,TODAY);b.push(`<span class="bdg ${n<0?'late':n===0?'today':''}" title="Fecha: ${fmtLong(t.due)}">${fmtShort(t.due)}${t.time?' '+t.time:''}</span>`)}
    if(t.deadline){const n=diffDays(t.deadline,TODAY);const cls=n<0?'late':n<=S.settings.leadDays?'hot':'far';b.push(`<span class="bdg dl ${cls}" title="Fecha límite: ${fmtLong(t.deadline)}">${ic('flag',11)}${n<0?n+' d':n===0?'hoy':n+' d'}</span>`)}
  }
  const ic2=[];
  if(t.recur)ic2.push(`<span title="${esc(t.recur)}">${ic('repeat',13)}</span>`);
  if(t.subtasks&&t.subtasks.length){const dn=t.subtasks.filter(x=>x.done).length;ic2.push(`<span title="Subtareas ${dn}/${t.subtasks.length}">${miniRing(dn,t.subtasks.length)}</span>`)}
  if(t.notes)ic2.push(`<span title="Tiene notas">${ic('note',13)}</span>`);
  if(ic2.length)b.push(`<span class="icons">${ic2.join('')}</span>`);
  if(!o.hideProject&&p)b.push(`<i class="dot pdot" style="--c:${p.color}" title="${esc(p.name)}"></i>`);
  return `<div class="task s pr${t.priority} ${t.status==='done'?'done':''} ${U.sel===t.id?'sel':''}" data-act="open" data-id="${t.id}"${o.drag?' draggable="true"':''}>
    <button class="check p${t.priority}" data-act="check" data-id="${t.id}" aria-label="${t.status==='done'?'Reabrir':'Completar'}: ${esc(t.title)}">${ic('check',12)}</button>
    <div class="t-row"><div class="t-title">${esc(t.title)}</div>${b.length?`<div class="bdgs">${b.join('')}</div>`:''}</div></div>`;
}
function group(title,tasks,o={}){
  if(!tasks.length&&!o.keep)return'';
  return `<section class="grp"><h3 class="${o.cls||''}">${title}<span class="cnt">${tasks.length}</span>${o.right?`<span class="r">${o.right}</span>`:''}</h3>${tasks.map(t=>taskRow(t,o)).join('')}${o.add?`<button class="addrow" data-act="quickIn" data-section="${esc(o.add)}">${ic('plus',16)} Añadir tarea</button>`:''}</section>`;
}
const empty=(t,s)=>`<div class="empty"><b>${t}</b>${s}</div>`;
function vh(title,sub,act=''){return `<div class="vh"><div><h1>${title}</h1>${sub?`<div class="sub">${sub}</div>`:''}</div>${act?`<div class="act">${act}</div>`:''}</div>`}

/* ================== Vistas ================== */
const V={};
V.inbox=()=>{
  const ts=myT().filter(t=>t.inbox&&isOpen(t));
  return vh('Bandeja','',ts.length?`<button class="btn primary" data-act="clarify">Procesar</button>`:'')+
  (ts.length?ts.map(t=>taskRow(t)).join('')+`<button class="addrow" data-act="quick">${ic('plus',16)} Añadir</button>`:empty('Bandeja vacía',''));
};
V.today=()=>{
  const open=myT().filter(isOpen);
  const over=open.filter(t=>(t.due&&t.due<TODAY)||(t.deadline&&t.deadline<TODAY));
  const tod=sortByTime(open.filter(t=>!over.includes(t)&&(t.due===TODAY||t.deadline===TODAY)));
  const soon=alerts().filter(a=>a.k==='soon');
  const doneToday=myT().filter(t=>t.status==='done'&&dayOf(t.completed)===TODAY);
  let h=vh('Hoy',fmtLong(TODAY));
  if(soon.length)h+=`<details class="notice" data-key="todayNotice" ${U.todayNotice?'open':''}><summary>${ic('flag',14)} ${soon.length} ${soon.length===1?'fecha límite próxima':'fechas límite próximas'}</summary>${soon.map(a=>`<div class="a" data-act="open" data-id="${a.t.id}"><span class="w">${fmtDate(a.t.deadline)}</span><span>${esc(a.t.title)}</span></div>`).join('')}</details>`;
  if(S.settings.showPlan){const est=[...over,...tod].reduce((a,t)=>a+(t.estimate||30),0),cap=S.settings.capacity;h+=`<div class="plan"><span class="lbl">Carga planificada</span><span class="val">${fmtMin(est)} / ${fmtMin(cap)}</span><div class="meter"><i style="width:${Math.min(100,est/cap*100)}%" class="${est>cap?'over':''}"></i></div></div>`}
  h+=group('Vencidas',sortTasks(over),{cls:'bad'});
  h+=over.length?group('Hoy',tod):tod.map(t=>taskRow(t)).join('');
  if(!tod.length&&!over.length)h+=empty('Nada para hoy','');
  h+=`<button class="addrow" data-act="quick">${ic('plus',16)} Añadir tarea</button>`;
  if(doneToday.length)h+=`<details class="more" data-key="doneToday" ${U.doneToday?'open':''} style="margin-top:18px"><summary>${doneToday.length} ${doneToday.length===1?'completada':'completadas'} hoy</summary>${doneToday.map(t=>taskRow(t)).join('')}</details>`;
  return h;
};
V.upcoming=()=>{
  let h=vh('Próximos','');let any=false;
  for(let i=1;i<=14;i++){
    const d=addDays(TODAY,i);const ts=sortByTime(myT().filter(t=>(t.status==='open'||t.status==='waiting')&&(t.due===d||t.deadline===d)));
    if(!ts.length)continue;any=true;const x=parse(d);
    h+=group((i===1?'Mañana · ':'')+WDC[x.getDay()]+' '+x.getDate()+' '+MES[x.getMonth()],ts);
  }
  return h+(any?'':empty('Semana despejada',''));
};
V.next=()=>{
  let ts=myT().filter(isAvail);
  if(U.energy!=='all')ts=ts.filter(t=>t.energy===U.energy);
  if(U.maxTime)ts=ts.filter(t=>t.estimate&&t.estimate<=U.maxTime);
  const by={};ts.forEach(t=>{const c=t.contexts[0]||'Sin contexto';(by[c]=by[c]||[]).push(t)});
  const active=(U.energy!=='all'?1:0)+(U.maxTime?1:0);
  let h=vh('Próximas acciones','');
  h+=`<details class="more" data-key="nextFilters" ${U.nextFilters||active?'open':''} style="margin:-14px 0 16px"><summary>${ic('filter',15)} Filtrar${active?' · '+active+' activo'+(active>1?'s':''):''}</summary><div class="toolbar" style="padding:6px 10px 0"><span class="tl">Energía</span><div class="chips">${[['all','Toda'],['baja','Baja'],['media','Media'],['alta','Alta']].map(([k,l])=>`<button class="fchip ${U.energy===k?'on':''}" data-act="setU" data-k="energy" data-v="${k}">${l}</button>`).join('')}</div>
  <span class="tl">Tiempo</span><div class="chips">${[[0,'Cualquiera'],[15,'≤ 15 min'],[30,'≤ 30 min'],[60,'≤ 1 h']].map(([k,l])=>`<button class="fchip ${U.maxTime==k?'on':''}" data-act="setU" data-k="maxTime" data-v="${k}">${l}</button>`).join('')}</div></div></details>`;
  const keys=Object.keys(by).sort((a,b)=>a==='Sin contexto'?1:b==='Sin contexto'?-1:by[b].length-by[a].length);
  h+=keys.map(k=>group(k==='Sin contexto'?k:'@'+esc(k),sortTasks(by[k]))).join('')||empty('Sin resultados','');
  return h;
};
V.waiting=()=>{
  const ts=myT().filter(t=>t.status==='waiting');const by={};
  ts.forEach(t=>{(by[t.waitingFor||'Sin asignar']=by[t.waitingFor||'Sin asignar']||[]).push(t)});
  return vh('En espera','')+
   (Object.keys(by).map(k=>group(ic('user',15)+' '+esc(k),by[k])).join('')||empty('Nada en espera',''));
};
V.someday=()=>{
  const sd=myT().filter(t=>t.status==='someday'),rf=myT().filter(t=>t.status==='reference');
  return vh('Algún día','')+
  group('Algún día / Quizás',sd,{keep:true})+group('Material de referencia',rf,{keep:true});
};
V.logbook=()=>{
  const ts=myT().filter(t=>t.status==='done').sort((a,b)=>a.completed<b.completed?1:-1).slice(0,160);
  const by={};ts.forEach(t=>{(by[dayOf(t.completed)]=by[dayOf(t.completed)]||[]).push(t)});
  return vh('Registro','')+Object.keys(by).map(d=>group(fmtDate(d)===WDC[parse(d).getDay()]||Math.abs(diffDays(d,TODAY))>1?fmtLong(d):fmtDate(d),by[d])).join('');
};
V.context=()=>{
  const c=U.context;const ts=sortTasks(myT().filter(t=>isAvail(t)&&t.contexts.includes(c)));
  return vh('@'+esc(c),'')+(ts.map(t=>taskRow(t)).join('')||empty('Sin acciones',''));
};
V.filter=()=>{
  const f=S.filters.find(x=>x.id===U.filter);if(!f)return'';
  const q=f.q,desc=[];if(q.maxPrio)desc.push('prioridad P'+q.maxPrio+' o superior');if(q.dueWithin)desc.push('fecha en '+q.dueWithin+' días');if(q.deadlineWithin)desc.push('fecha límite en '+q.deadlineWithin+' días');if(q.context)desc.push('@'+q.context);if(q.maxEst)desc.push('≤ '+q.maxEst+' min');if(q.energy)desc.push('energía '+q.energy);if(q.projectId)desc.push(proj(q.projectId)?.name||'');
  const ts=sortTasks(applyFilter(q));
  return vh(esc(f.name),'Filtro: '+desc.join(' · '),`<button class="btn ghost sm danger" data-act="delFilter" data-id="${f.id}">${ic('trash',15)} Eliminar filtro</button>`)+(ts.map(t=>taskRow(t)).join('')||empty('Sin resultados','Ninguna tarea abierta cumple este filtro.'));
};
V.project=()=>{
  const p=proj(U.project);if(!p)return'';
  const all=S.tasks.filter(t=>t.projectId===p.id),open=all.filter(t=>t.status!=='done'),done=all.filter(t=>t.status==='done');
  const pct=all.length?Math.round(done.length/all.length*100):0;
  let h=`<div class="phead">${ring(pct,p.color,44)}<div style="min-width:0"><h1>${esc(p.name)}</h1><div class="meta"><span>${open.length} abiertas</span>${isShared(p)?`<span class="avs">${membersOf(p.id).map(m=>`<span class="av-s" title="${esc(m.name)}">${esc(initial(m.name))}</span>`).join('')}</span>`:''}${!isOwner(p)?`<span>de ${esc(personName(p.ownerId))}</span>`:''}${p.status==='paused'?'<span>En pausa</span>':''}${p.status==='done'?'<span>Completado</span>':''}</div></div>
  <div class="act"><div class="seg"><button class="${U.projMode==='list'?'on':''}" data-act="setU" data-k="projMode" data-v="list" aria-label="Lista">${ic('list',15)}</button><button class="${U.projMode==='board'?'on':''}" data-act="setU" data-k="projMode" data-v="board" aria-label="Tablero">${ic('kanban',15)}</button></div>
  <button class="iconbtn" data-act="projStats" data-id="${p.id}" aria-label="Estadísticas del proyecto" title="Estadísticas">${ic('chart',17)}</button><button class="iconbtn ${isShared(p)?'on':''}" data-act="shareProject" data-id="${p.id}" aria-label="Compartir proyecto" title="${isOwner(p)?'Compartir':'Personas del proyecto'}">${ic('users',17)}</button>${isOwner(p)?`<button class="iconbtn" data-act="editProject" data-id="${p.id}" aria-label="Editar proyecto" title="Editar proyecto">${ic('more',17)}</button>`:''}</div></div>`;
  const secs=[...p.sections];const noSec=open.filter(t=>!t.section||!secs.includes(t.section));
  if(U.projMode==='board'){
    const cols=[{k:'',n:'Sin sección',ts:noSec},...secs.map(s=>({k:s,n:s,ts:open.filter(t=>t.section===s)}))].filter(c=>c.k||c.ts.length);
    h+=`<div class="board">${cols.map(c=>`<div class="col" data-drop="${esc(c.k)}"><h4>${esc(c.n)}<span>${c.ts.length}</span></h4>${sortTasks(c.ts).map(t=>taskRow(t,{hideProject:true,drag:true})).join('')}<button class="addrow" data-act="quickIn" data-section="${esc(c.k)}">${ic('plus',16)} Añadir</button></div>`).join('')}</div>`;
  }else{
    if(noSec.length||!secs.length)h+=group(secs.length?'Sin sección':'Tareas',sortTasks(noSec),{hideProject:true,keep:!secs.length,add:secs.length?'':' '});
    secs.forEach(s=>h+=group(esc(s),sortTasks(open.filter(t=>t.section===s)),{hideProject:true,hideSection:true,keep:true,add:s}));
    if(!open.length&&!secs.length)h+=empty('Sin tareas','Añade la próxima acción.');
    if(isOwner(p))h+=`<button class="addrow" data-act="addSection" style="color:var(--faint)">${ic('plus',16)} Añadir sección</button>`;
    if(done.length)h+=`<details class="more" data-key="showDone" ${U.showDone?'open':''} style="margin-top:10px"><summary>${done.length} completadas</summary>${done.sort((a,b)=>a.completed<b.completed?1:-1).slice(0,40).map(t=>taskRow(t,{hideProject:true})).join('')}</details>`;
  }
  return h;
};
V.calendar=()=>{
  const [y,m]=U.calMonth.split('-').map(Number);const first=new Date(y,m-1,1);
  let start=mondayOf(iso(first));const cells=[];
  for(let i=0;i<42;i++){const d=addDays(start,i);cells.push(d);if(i>=34&&parse(d).getMonth()!==m-1&&i%7===6)break}
  const items=d=>myT().filter(t=>(t.status==='open'||t.status==='waiting')&&(t.due===d||t.deadline===d));
  let h=vh('Calendario','');
  h+=`<div class="cal-nav"><button class="iconbtn" data-act="calMove" data-v="-1" aria-label="Mes anterior">${ic('arrowL')}</button><b>${MESL[m-1]} ${y}</b><button class="iconbtn" data-act="calMove" data-v="1" aria-label="Mes siguiente">${ic('arrowR')}</button><button class="btn sm" data-act="calMove" data-v="0">Hoy</button></div>`;
  h+=`<div class="cal">${['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].map(x=>`<div class="dh">${x}</div>`).join('')}`;
  cells.forEach(d=>{const x=parse(d),its=items(d);
    h+=`<div class="d ${x.getMonth()!==m-1?'out':''} ${d===TODAY?'today':''} ${d===U.calSel?'sel':''}" data-act="calDay" data-d="${d}"><span class="num">${x.getDate()}</span>${its.slice(0,3).map(t=>{const p=proj(t.projectId);const dl=t.deadline===d&&t.due!==d;return `<div class="pill ${dl?'dl':''}" style="--c:${p?p.color:'var(--p4)'}">${dl?'⚑ ':''}${esc(t.title)}</div>`}).join('')}${its.length>3?`<span class="more">+${its.length-3} más</span>`:''}</div>`});
  h+=`</div>`;
  const sel=items(U.calSel);
  h+=`<div style="margin-top:18px">${group(fmtLong(U.calSel),sortByTime(sel),{keep:true})}<button class="addrow" data-act="quick" data-pre="${parse(U.calSel).getDate()}/${parse(U.calSel).getMonth()+1} ">${ic('plus',16)} Añadir</button></div>`;
  return h;
};
V.matrix=()=>{
  const ts=myT().filter(t=>isOpen(t)&&!t.inbox);
  const urg=t=>(t.deadline&&diffDays(t.deadline,TODAY)<=2)||(t.due&&diffDays(t.due,TODAY)<=1);
  const imp=t=>t.priority<=2;
  const Q=[['q1','Hacer ahora','Importante y urgente',ts.filter(t=>imp(t)&&urg(t))],['q2','Planificar','Importante, no urgente: aquí se gana el control',ts.filter(t=>imp(t)&&!urg(t))],['q3','Delegar','Urgente, poco importante',ts.filter(t=>!imp(t)&&urg(t))],['q4','Aparcar o eliminar','Ni urgente ni importante',ts.filter(t=>!imp(t)&&!urg(t))]];
  return vh('Matriz Eisenhower','')+
  `<div class="matrix">${Q.map(([c,t,s,arr])=>`<div class="q ${c}"><h3>${t}<span class="cnt">${arr.length}</span></h3><p>${s}</p>${sortTasks(arr).slice(0,8).map(x=>taskRow(x)).join('')||'<p>Sin tareas.</p>'}${arr.length>8?`<p>+${arr.length-8} más</p>`:''}</div>`).join('')}</div>`;
};

/* ---------- Enfoque ---------- */
const F={preset:[25,5],phase:'work',left:25*60,total:25*60,running:false,iv:null,taskId:null};
V.focus=()=>{
  const av=sortTasks(myT().filter(isAvail));
  const todayLog=S.focusLog.filter(l=>l.date===TODAY);const mins=todayLog.reduce((a,l)=>a+l.min,0);
  const weekMins=S.focusLog.filter(l=>diffDays(TODAY,l.date)<7).reduce((a,l)=>a+l.min,0);
  return vh('Enfoque','')+
  `<div class="focus"><div class="card timer">
    <div class="seg">${[[25,5,'25 / 5'],[50,10,'50 / 10'],[90,15,'90 / 15']].map(([a,b,l])=>`<button class="${F.preset[0]===a?'on':''}" data-act="preset" data-a="${a}" data-b="${b}">${l}</button>`).join('')}</div>
    <div class="clock"><svg viewBox="0 0 260 260"><circle cx="130" cy="130" r="118" fill="none" stroke="var(--surface-2)" stroke-width="12"/><circle id="f-ring" cx="130" cy="130" r="118" fill="none" stroke="${F.phase==='work'?'var(--accent)':'var(--ok)'}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${2*Math.PI*118}" stroke-dashoffset="${2*Math.PI*118*(1-F.left/F.total)}"/></svg>
      <div class="t"><b id="f-time">${pad(Math.floor(F.left/60))}:${pad(F.left%60)}</b><span>${F.phase==='work'?'Concentración':'Descanso'}</span></div></div>
    <label class="field" style="width:min(360px,100%)"><span class="flabel">Tarea</span><select class="inp" id="f-task"><option value="">Sin tarea concreta</option>${av.map(t=>`<option value="${t.id}" ${F.taskId===t.id?'selected':''}>${esc(t.title)}</option>`).join('')}</select></label>
    <div class="ctrl"><button class="btn primary" data-act="fToggle">${F.running?ic('pause',16)+' Pausar':ic('play',16)+' Empezar'}</button><button class="btn" data-act="fReset">${ic('stop',16)} Reiniciar</button><button class="btn ghost" data-act="fSkip">Saltar fase</button></div>
  </div>
  <div class="stack"><div class="kpi"><div class="l">Enfoque hoy</div><div class="v">${fmtMin(mins)}</div><div class="d">${todayLog.length} sesiones</div></div>
  <div class="kpi"><div class="l">Últimos 7 días</div><div class="v">${(weekMins/60).toFixed(1)}<small>h</small></div></div></div></div>`;
};
function fUpdate(){
  const t=$('#f-time'),r=$('#f-ring');const C=2*Math.PI*118;
  if(t)t.textContent=pad(Math.floor(F.left/60))+':'+pad(F.left%60);
  if(r)r.setAttribute('stroke-dashoffset',C*(1-F.left/F.total));
  const pill=$('#fpill');pill.classList.toggle('on',F.running);pill.innerHTML=ic('target',14)+' '+pad(Math.floor(F.left/60))+':'+pad(F.left%60);
}
function fPhaseEnd(){
  clearInterval(F.iv);F.running=false;
  if(F.phase==='work'){const min=F.preset[0];const t=task(F.taskId);S.focusLog.push({id:uid(),date:TODAY,min,taskId:F.taskId,projectId:t?t.projectId:null});if(t)t.focusMin=(t.focusMin||0)+min;save();notify('Sesión completada','+'+min+' min de enfoque'+(t?' en «'+t.title+'»':''));F.phase='break';F.total=F.left=F.preset[1]*60}
  else{notify('Descanso terminado','Listo para otra sesión');F.phase='work';F.total=F.left=F.preset[0]*60}
  if(U.view==='focus')renderView();fUpdate();
}

/* ---------- Revisión semanal ---------- */
V.review=()=>{
  const inbox=myT().filter(t=>t.inbox&&isOpen(t)).length,wait=myT().filter(t=>t.status==='waiting'),some=myT().filter(t=>t.status==='someday').length,act=S.projects.filter(p=>p.status==='active');
  const phases=[
    ['Obtener claridad','Vacía todo lo que tienes pendiente de procesar.',[['r1','Recoger papeles, notas y apuntes sueltos'],['r2','Procesar la bandeja de entrada',inbox+' pendientes'],['r3','Vaciar la cabeza: anotar todo lo que te preocupa']]],
    ['Ponerse al día','Revisa tus listas para que vuelvan a ser fiables.',[['r4','Revisar la lista de próximas acciones',myT().filter(isAvail).length+' acciones'],['r5','Revisar el calendario de la semana pasada'],['r6','Revisar el calendario de las próximas dos semanas'],['r7','Revisar la lista En espera',wait.length+' elementos'],['r8','Revisar cada proyecto activo',act.length+' proyectos']]],
    ['Ser creativo','Levanta la vista y decide qué activar.',[['r9','Revisar Algún día / Quizás',some+' ideas'],['r10','Anotar ideas y proyectos nuevos']]]
  ];
  const all=phases.flatMap(p=>p[2]).length,dn=phases.flatMap(p=>p[2]).filter(i=>S.reviewChecks[i[0]]).length;
  const noNext=projectsWithoutNext(),oldWait=wait.filter(t=>t.waitingSince&&diffDays(TODAY,t.waitingSince)>7),over=myT().filter(t=>isOpen(t)&&t.deadline&&t.deadline<TODAY),stale=act.filter(p=>diffDays(TODAY,p.lastReview||'2000-01-01')>=(p.reviewEvery||7));
  const dls=myT().filter(t=>(isOpen(t)||t.status==='waiting')&&t.deadline&&t.deadline>=TODAY&&diffDays(t.deadline,TODAY)<=14).sort((a,b)=>a.deadline<b.deadline?-1:1);
  const ins=(title,arr,fn)=>!arr.length?'':`<div class="card"><h3>${title} <span class="mono" style="color:var(--faint);font-size:13px">${arr.length}</span></h3><div class="insight">${arr.length?arr.map(fn).join(''):'<p class="cap" style="margin:6px 0 0">Todo en orden.</p>'}</div></div>`;
  return vh('Revisión semanal','Última: '+(S.reviews[0]?fmtLong(S.reviews[0]):'nunca'))+
  `  <div class="g2"><div class="card"><div class="progress"><i style="width:${dn/all*100}%"></i></div>
  ${phases.map(([t,c,items])=>`<div class="phase"><h3>${t}</h3>${items.map(([id,l,n])=>`<label class="ck ${S.reviewChecks[id]?'done':''}"><input type="checkbox" id="rv-${id}" data-rv="${id}" ${S.reviewChecks[id]?'checked':''}><span>${l}</span>${n?`<span class="n">${n}</span>`:''}</label>`).join('')}</div>`).join('')}
  <button class="btn primary" data-act="finishReview" ${dn<all?'':''}>${ic('check',16)} Marcar revisión como completada</button></div>
  <div class="stack">
  ${ins('Proyectos sin próxima acción',noNext,p=>`<div class="row" data-act="nav" data-view="project" data-id="${p.id}"><i class="dot" style="--c:${p.color}"></i>${esc(p.name)}<span class="x">añadir acción</span></div>`)}
  ${ins('Proyectos pendientes de revisar',stale,p=>`<div class="row" data-act="markReviewed" data-id="${p.id}"><i class="dot" style="--c:${p.color}"></i>${esc(p.name)}<span class="x">marcar revisado</span></div>`)}
  ${ins('Esperas de más de 7 días',oldWait,t=>`<div class="row" data-act="open" data-id="${t.id}">${esc(t.title)}<span class="x">${esc(t.waitingFor)} · ${diffDays(TODAY,t.waitingSince)} d</span></div>`)}
  ${ins('Fechas límite vencidas',over,t=>`<div class="row" data-act="open" data-id="${t.id}">${esc(t.title)}<span class="x">${fmtDate(t.deadline)}</span></div>`)}
  ${ins('Fechas límite en los próximos 14 días',dls,t=>`<div class="row" data-act="open" data-id="${t.id}">${esc(t.title)}<span class="x">${fmtDate(t.deadline)}</span></div>`)}
  </div></div>`;
};

/* ---------- Gráficos ---------- */
function ring(pct,color,size=58){const r=size/2-5,C=2*Math.PI*r;return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${pct} % completado"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="6"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-pct/100)}" transform="rotate(-90 ${size/2} ${size/2})"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" style="font:700 ${size/4.2}px var(--f-display);fill:var(--ink)">${pct}%</text></svg>`}
function axisMax(v){return Math.max(4,Math.ceil(v/4)*4)}
function bars(vals,labels,o={}){
  const W=640,H=o.h||180,L=30,R=6,T=10,B=24,iw=W-L-R,ih=H-T-B,mx=axisMax(Math.max(...vals,0)),n=vals.length,bw=iw/n,g=Math.min(8,bw*.28),every=o.every||1;
  let s=`<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="${o.aria||'Gráfico de barras'}">`;
  for(let k=0;k<=4;k++){const y=T+ih-ih*k/4;s+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" class="gl"/><text x="${L-6}" y="${y+3.5}" class="al" text-anchor="end">${mx*k/4}</text>`}
  vals.forEach((v,i)=>{const bh=ih*v/mx,x=L+i*bw+g/2,y=T+ih-bh,c=Array.isArray(o.color)?o.color[i]:(o.color||'var(--accent)');
    s+=`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(bw-g).toFixed(1)}" height="${bh.toFixed(1)}" rx="${Math.min(3,(bw-g)/2).toFixed(1)}" fill="${c}" ${o.hl!==undefined&&i!==o.hl?'fill-opacity=".55"':''}><title>${labels[i]}: ${v}</title></rect>`;
    if(i%every===0)s+=`<text x="${(x+(bw-g)/2).toFixed(1)}" y="${H-7}" class="al" text-anchor="middle">${labels[i]}</text>`});
  return s+'</svg>';
}
function lines(series,labels,o={}){
  const W=640,H=o.h||190,L=30,R=10,T=12,B=24,iw=W-L-R,ih=H-T-B,mx=axisMax(Math.max(...series.flatMap(s=>s.vals),0)),n=labels.length,every=o.every||1;
  const X=i=>L+(n===1?iw/2:iw*i/(n-1)),Y=v=>T+ih-ih*v/mx;
  let s=`<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="${o.aria||'Gráfico de líneas'}">`;
  for(let k=0;k<=4;k++){const y=T+ih-ih*k/4;s+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" class="gl"/><text x="${L-6}" y="${y+3.5}" class="al" text-anchor="end">${mx*k/4}</text>`}
  labels.forEach((l,i)=>{if(i%every===0)s+=`<text x="${X(i).toFixed(1)}" y="${H-7}" class="al" text-anchor="middle">${l}</text>`});
  series.forEach((se,si)=>{const pts=se.vals.map((v,i)=>X(i).toFixed(1)+','+Y(v).toFixed(1));
    if(se.area)s+=`<polygon points="${X(0)},${T+ih} ${pts.join(' ')} ${X(n-1)},${T+ih}" fill="${se.color}" fill-opacity=".12"/>`;
    s+=`<polyline points="${pts.join(' ')}" fill="none" stroke="${se.color}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" ${se.dash?'stroke-dasharray="5 5"':''}/>`;
    const lv=se.vals[n-1];s+=`<circle cx="${X(n-1)}" cy="${Y(lv)}" r="4" fill="${se.color}"/>`});
  return s+'</svg>';
}
function heat(counts,weeks=18){
  const cs=13,gp=3,L=26,T=16;const start=addDays(mondayOf(TODAY),-(weeks-1)*7);
  const W=L+weeks*(cs+gp),H=T+7*(cs+gp);const mx=Math.max(1,...Object.values(counts));
  let s=`<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Mapa de calor de tareas completadas">`;
  ['L','','X','','V','','D'].forEach((l,i)=>{if(l)s+=`<text x="0" y="${T+i*(cs+gp)+10}" class="al">${l}</text>`});
  let lastM=-1;
  for(let w=0;w<weeks;w++){for(let d=0;d<7;d++){const day=addDays(start,w*7+d);if(day>TODAY)continue;const v=counts[day]||0;const lvl=v?Math.ceil(v/mx*4):0;
    if(d===0){const m=parse(day).getMonth();if(m!==lastM){s+=`<text x="${L+w*(cs+gp)}" y="10" class="al">${MES[m]}</text>`;lastM=m}}
    s+=`<rect x="${L+w*(cs+gp)}" y="${T+d*(cs+gp)}" width="${cs}" height="${cs}" rx="3" fill="${lvl?'var(--accent)':'var(--surface-2)'}" fill-opacity="${lvl?[0,.28,.5,.75,1][lvl]:1}"><title>${fmtDate(day)}: ${v}</title></rect>`}}
  return s+'</svg>';
}
function hbars(items){const mx=Math.max(1,...items.map(i=>i.v));return `<div class="hb">${items.map(i=>`<div class="lab">${i.c?`<i class="dot" style="--c:${i.c}"></i>`:''}${esc(i.l)}</div><div class="bar"><i style="width:${i.v/mx*100}%;--c:${i.c||'var(--accent)'}"></i></div><div class="v">${i.f?i.f(i.v):i.v}</div>`).join('')}</div>`}

/* ---------- Estadísticas ---------- */
function doneIn(from,to=TODAY,pred=()=>true){return myT().filter(t=>t.status==='done'&&dayOf(t.completed)>=from&&dayOf(t.completed)<=to&&pred(t))}
function streak(){const set=new Set(myT().filter(t=>t.status==='done').map(t=>dayOf(t.completed)));let d=set.has(TODAY)?TODAY:addDays(TODAY,-1),n=0;while(set.has(d)){n++;d=addDays(d,-1)}return n}
function onTime(arr){const w=arr.filter(t=>t.deadline);if(!w.length)return null;return Math.round(w.filter(t=>dayOf(t.completed)<=t.deadline).length/w.length*100)}
function lead(arr){if(!arr.length)return null;return arr.reduce((a,t)=>a+Math.max(0,diffDays(dayOf(t.completed),t.created)),0)/arr.length}
function weekly(n,pred){const labels=[],vals=[];const m0=mondayOf(TODAY);for(let i=n-1;i>=0;i--){const s=addDays(m0,-7*i),e=addDays(s,6);labels.push(parse(s).getDate()+' '+MES[parse(s).getMonth()]);vals.push(pred(s,e))}return{labels,vals}}
function delta(a,b){if(!b)return'';const p=Math.round((a-b)/b*100);return `<div class="d ${p>=0?'up':'down'}">${p>=0?'▲':'▼'} ${Math.abs(p)} % vs periodo anterior</div>`}
V.stats=()=>{
  let h=vh('Estadísticas','');
  h+=`<div class="tabs"><button class="${U.statsTab==='global'?'on':''}" data-act="setU" data-k="statsTab" data-v="global">General</button><button class="${U.statsTab==='project'?'on':''}" data-act="setU" data-k="statsTab" data-v="project">Por proyecto</button></div>`;
  return h+(U.statsTab==='global'?statsGlobal():statsProject());
};
function statsGlobal(){
  const R=U.range,from=addDays(TODAY,-(R-1)),pfrom=addDays(from,-R),pto=addDays(from,-1);
  const cur=doneIn(from),prev=doneIn(pfrom,pto);
  const fm=S.focusLog.filter(l=>l.date>=from).reduce((a,l)=>a+l.min,0),pfm=S.focusLog.filter(l=>l.date>=pfrom&&l.date<=pto).reduce((a,l)=>a+l.min,0);
  const ot=onTime(cur),ld=lead(cur),wip=myT().filter(t=>isOpen(t)||t.status==='waiting').length,overdue=myT().filter(t=>isOpen(t)&&t.deadline&&t.deadline<TODAY).length;
  let h=`<div class="toolbar"><span class="tl">Periodo</span><div class="seg">${[7,30,90].map(r=>`<button class="${R===r?'on':''}" data-act="setU" data-k="range" data-v="${r}">${r} días</button>`).join('')}</div></div>`;
  h+=`<div class="kpis">
    <div class="kpi"><div class="l">Completadas</div><div class="v">${cur.length}</div>${delta(cur.length,prev.length)}</div>
    <div class="kpi"><div class="l">Racha actual</div><div class="v">${streak()}<small>días</small></div><div class="d">con al menos una tarea</div></div>
    <div class="kpi"><div class="l">Fechas límite cumplidas</div><div class="v">${ot===null?'—':ot+'<small>%</small>'}</div><div class="d">${overdue} vencidas abiertas</div></div>
    <div class="kpi"><div class="l">Tiempo de enfoque</div><div class="v">${(fm/60).toFixed(1)}<small>h</small></div>${delta(fm,pfm)}</div>
</div>`;
  let series;
  if(R===90){series=weekly(13,(s,e)=>doneIn(s,e).length)}
  else{series={labels:[],vals:[]};for(let i=R-1;i>=0;i--){const d=addDays(TODAY,-i);series.labels.push(R===7?WDC[parse(d).getDay()].slice(0,3):String(parse(d).getDate()));series.vals.push(doneIn(d,d).length)}}
  h+=`<div class="card" style="margin-bottom:12px"><h3>Tareas completadas</h3><p class="cap">${R===90?'Por semana':'Por día'} · promedio ${(cur.length/(R===90?13:R)).toFixed(1)} ${R===90?'por semana':'por día'}</p>${bars(series.vals,series.labels,{every:R===30?5:R===90?2:1,hl:series.vals.length-1,aria:'Tareas completadas por periodo'})}</div>`;
  const counts={};myT().filter(t=>t.status==='done').forEach(t=>{const d=dayOf(t.completed);counts[d]=(counts[d]||0)+1});
  const flow=weekly(12,(s,e)=>0);const cr=flow.labels.map((_,i)=>{const s=addDays(mondayOf(TODAY),-7*(11-i)),e=addDays(s,6);return myT().filter(t=>t.created>=s&&t.created<=e).length});const cp=flow.labels.map((_,i)=>{const s=addDays(mondayOf(TODAY),-7*(11-i)),e=addDays(s,6);return doneIn(s,e).length});
  h+=`<details class="more block" data-key="statsMore" ${U.statsMore?'open':''}><summary>Ver análisis completo<span class="hint2">constancia, flujo, proyectos, horarios</span></summary><div class="kpis"><div class="kpi"><div class="l">Lead time medio</div><div class="v">${ld===null?'—':ld.toFixed(1)}<small>días</small></div><div class="d">de creación a cierre</div></div><div class="kpi"><div class="l">Trabajo en curso</div><div class="v">${wip}</div><div class="d">abiertas + en espera</div></div></div><div class="g2"><div class="card"><h3>Constancia</h3><p class="cap">Tareas completadas por día, últimas 18 semanas</p>${heat(counts)}</div>
  <div class="card"><h3>Entrada frente a salida</h3><p class="cap">Creadas frente a completadas, por semana</p>${lines([{vals:cr,color:'var(--p2)',dash:true},{vals:cp,color:'var(--accent)',area:true}],flow.labels,{every:3,h:170,aria:'Creadas frente a completadas'})}<div class="legend"><span><i style="--c:var(--p2)"></i>Creadas</span><span><i style="--c:var(--accent)"></i>Completadas</span></div></div></div>`;
  const byP=S.projects.map(p=>({l:p.name,c:p.color,v:cur.filter(t=>t.projectId===p.id).length})).filter(x=>x.v).sort((a,b)=>b.v-a.v);
  const wd=[1,2,3,4,5,6,0].map(i=>cur.filter(t=>parse(dayOf(t.completed)).getDay()===i).length);
  const hrs=[];for(let hh=6;hh<=21;hh++)hrs.push(cur.filter(t=>+t.completed.slice(11,13)===hh).length);
  h+=`<div class="g2"><div class="card"><h3>Por proyecto</h3>${hbars(byP)}</div>
  <div class="card"><h3>Cuándo rindes más</h3>${bars(wd,['L','M','X','J','V','S','D'],{h:120,aria:'Por día de la semana'})}${bars(hrs,hrs.map((_,i)=>String(6+i)),{h:120,every:3,color:'var(--ok)',aria:'Por hora'})}</div></div>`;
  const rows=S.projects.map(p=>{const pd=cur.filter(t=>t.projectId===p.id);return{p,open:S.tasks.filter(t=>t.projectId===p.id&&(isOpen(t)||t.status==='waiting')).length,done:pd.length,ot:onTime(pd),ld:lead(pd),fm:S.focusLog.filter(l=>l.projectId===p.id&&l.date>=from).reduce((a,l)=>a+l.min,0)}});
  h+=`<div class="card"><h3>Comparativa de proyectos</h3><div class="tablewrap"><table class="t"><thead><tr><th>Proyecto</th><th class="n">Abiertas</th><th class="n">Completadas</th><th class="n">A tiempo</th><th class="n">Lead time</th><th class="n">Enfoque</th></tr></thead><tbody>${rows.map(r=>`<tr data-act="projStats" data-id="${r.p.id}"><td><i class="dot" style="--c:${r.p.color}"></i> ${esc(r.p.name)}</td><td class="n">${r.open}</td><td class="n">${r.done}</td><td class="n">${r.ot===null?'—':r.ot+' %'}</td><td class="n">${r.ld===null?'—':r.ld.toFixed(1)+' d'}</td><td class="n">${fmtMin(r.fm)}</td></tr>`).join('')}</tbody></table></div></div></details>`;
  return h;
}
function statsProject(){
  const p=proj(U.statsProject)||S.projects[0];U.statsProject=p.id;
  const all=S.tasks.filter(t=>t.projectId===p.id),done=all.filter(t=>t.status==='done'),open=all.filter(t=>t.status!=='done');
  const pct=all.length?Math.round(done.length/all.length*100):0,ot=onTime(done),ld=lead(done),fm=S.focusLog.filter(l=>l.projectId===p.id).reduce((a,l)=>a+l.min,0),over=open.filter(t=>t.deadline&&t.deadline<TODAY).length;
  let h=`<div class="toolbar"><label class="field" style="min-width:min(320px,100%)"><span class="flabel">Proyecto</span><select class="inp" id="st-proj">${S.projects.map(x=>`<option value="${x.id}" ${x.id===p.id?'selected':''}>${esc(x.name)}</option>`).join('')}</select></label></div>`;
  h+=`<div class="phead">${ring(pct,p.color,72)}<div><h1 style="font-size:24px">${esc(p.name)}</h1><div class="meta"><span>${all.length} tareas en total</span><span>${done.length} completadas</span><span>${open.length} abiertas</span></div></div><div class="act"><button class="btn sm" data-act="nav" data-view="project" data-id="${p.id}">Abrir proyecto</button></div></div>`;
  h+=`<div class="kpis"><div class="kpi"><div class="l">A tiempo</div><div class="v">${ot===null?'—':ot+'<small>%</small>'}</div><div class="d">de las que tenían fecha límite</div></div>
  <div class="kpi"><div class="l">Lead time medio</div><div class="v">${ld===null?'—':ld.toFixed(1)}<small>días</small></div></div>
  <div class="kpi"><div class="l">Tiempo de enfoque</div><div class="v">${(fm/60).toFixed(1)}<small>h</small></div></div>
  <div class="kpi"><div class="l">Vencidas abiertas</div><div class="v" style="${over?'color:var(--bad)':''}">${over}</div></div></div>`;
  const W=weekly(10,()=>0);const ends=W.labels.map((_,i)=>addDays(addDays(mondayOf(TODAY),-7*(9-i)),6));
  const cumC=ends.map(e=>all.filter(t=>t.created<=e).length),cumD=ends.map(e=>done.filter(t=>dayOf(t.completed)<=e).length);
  const wk=weekly(10,(s,e)=>done.filter(t=>dayOf(t.completed)>=s&&dayOf(t.completed)<=e).length);
  h+=`<div class="card" style="margin-bottom:12px"><h3>Burn-up</h3><p class="cap">Alcance frente a completado</p>${lines([{vals:cumC,color:'var(--faint)',dash:true},{vals:cumD,color:p.color,area:true}],W.labels,{every:3,h:180,aria:'Burn-up del proyecto'})}<div class="legend"><span><i style="--c:var(--faint)"></i>Alcance</span><span><i style="--c:${p.color}"></i>Completado</span></div></div>
  <details class="more block" data-key="statsMore" ${U.statsMore?'open':''}><summary>Ver análisis completo<span class="hint2">ritmo, prioridades, secciones, historial</span></summary><div class="g2"><div class="card"><h3>Ritmo semanal</h3><p class="cap">Tareas completadas por semana</p>${bars(wk.vals,wk.labels,{every:3,color:p.color,hl:wk.vals.length-1,h:180,aria:'Completadas por semana'})}</div></div>`;
  const prio=[1,2,3,4].map(n=>({l:'P'+n,c:`var(--p${n})`,v:open.filter(t=>t.priority===n).length}));
  const secs=(p.sections.length?p.sections:['(sin sección)']).map(s=>({l:s,c:p.color,v:done.filter(t=>(t.section||'(sin sección)')===s).length}));
  h+=`<div class="g2"><div class="card"><h3>Abiertas por prioridad</h3>${hbars(prio)}</div><div class="card"><h3>Completadas por sección</h3><p class="cap">Histórico del proyecto</p>${hbars(secs)}</div></div>`;
  h+=`<div class="card">${group('Últimas completadas',done.sort((a,b)=>a.completed<b.completed?1:-1).slice(0,8),{hideProject:true,keep:true})}</div></details>`;
  return h;
}

/* ================== Panel de detalle ================== */
function moreHint(t){const x=[];if(t.section)x.push(t.section);if(t.time)x.push(t.time);if(t.recur)x.push(t.recur.toLowerCase());if(t.reminder)x.push('aviso '+t.reminder.toLowerCase());if(t.start)x.push('diferida');if(t.status!=='open')x.push(({waiting:'en espera',someday:'algún día',reference:'referencia',done:'completada'})[t.status]);if(t.estimate)x.push(fmtMin(t.estimate));return esc(x.join(' · '))}
function renderDetail(){
  const el=$('#detail'),app=$('#app');const t=task(U.sel);
  if(!t){el.hidden=true;app.classList.remove('has-detail');return}
  el.hidden=false;app.classList.add('has-detail');
  const p=proj(t.projectId);
  const dateF=(id,lab,val,extra='')=>`<label class="field"><span>${lab}</span><input class="inp" type="date" id="${id}" data-f="${id.slice(2)}" value="${val||''}">${extra}</label>`;
  el.innerHTML=`<div class="dp">
   <div class="dp-top"><span class="crumb">${p?`<i class="dot" style="--c:${p.color}"></i>${esc(p.name)}${t.section?' / '+esc(t.section):''}`:t.inbox?ic('inbox',15)+' Bandeja de entrada':'Sin proyecto'}</span><span class="sp"></span>
    <button class="iconbtn" data-act="startFocus" data-id="${t.id}" aria-label="Enfocarse en esta tarea" title="Enfocarse">${ic('target')}</button>
    <button class="iconbtn" data-act="askDel" aria-label="Eliminar tarea" title="Eliminar">${ic('trash')}</button>
    <button class="iconbtn" data-act="closeDetail" aria-label="Cerrar">${ic('close')}</button></div>
   ${U.confirmDel?`<div class="confirm"><span>¿Eliminar esta tarea definitivamente?</span><button class="btn sm danger" data-act="delTask">Eliminar</button><button class="btn sm ghost" data-act="cancelDel">Cancelar</button></div>`:''}
   <div class="dp-title"><button class="check p${t.priority}" data-act="check" data-id="${t.id}" aria-label="Completar" style="${t.status==='done'?'background:var(--pc);color:#fff':''}">${ic('check',13)}</button><textarea id="d-title" data-f="title" rows="1">${esc(t.title)}</textarea></div>
   <div class="dp-fields">${fieldChips(t,'task')}</div>
   <div class="subs">${t.subtasks.map((s,i)=>`<div class="sub ${s.done?'done':''}"><input type="checkbox" id="sub-c-${i}" data-sub="${i}" ${s.done?'checked':''} aria-label="Completar subtarea"><input type="text" id="sub-t-${i}" data-subt="${i}" value="${esc(s.t)}"><button data-act="delSub" data-i="${i}" aria-label="Quitar subtarea">${ic('close',14)}</button></div>`).join('')}
    <div class="sub"><span style="width:16px;display:grid;place-items:center;color:var(--faint)">${ic('plus',14)}</span><input type="text" id="sub-new" placeholder="Añadir subtarea"></div></div>
   <textarea class="inp notes" id="d-notes" data-f="notes" placeholder="Notas">${esc(t.notes)}</textarea>
   <details class="more" data-key="dpMore" ${U.dpMore?'open':''}><summary>Más opciones<span class="hint2">${moreHint(t)}</span></summary><div class="more-body">
   <div class="frow"><label class="field"><span>Hora</span><input class="inp" type="time" id="d-time" data-f="time" value="${t.time||''}"></label><label class="field"><span>Recordatorio</span><select class="inp" id="d-reminder" data-f="reminder"><option value="">Sin recordatorio</option>${['A la hora','15 min antes','1 h antes','1 día antes','2 días antes'].map(r=>`<option ${t.reminder===r?'selected':''}>${r}</option>`).join('')}</select></label></div>
   <div class="frow"><label class="field"><span>Repetición</span><select class="inp" id="d-recur" data-f="recur"><option value="">No se repite</option>${['Cada día','Cada día laborable','Cada semana','Cada 2 semanas','Cada mes','Cada año',...WD.map(w=>'Cada '+w)].map(r=>`<option ${t.recur===r?'selected':''}>${r}</option>`).join('')}${t.recur&&!['Cada día','Cada día laborable','Cada semana','Cada 2 semanas','Cada mes','Cada año',...WD.map(w=>'Cada '+w)].includes(t.recur)?`<option selected>${esc(t.recur)}</option>`:''}</select></label>${dateF('d-start','Disponible desde',t.start)}</div>
   <div class="frow"><label class="field"><span>Estado</span><select class="inp" id="d-status" data-f="status">${[['open','Próxima acción'],['waiting','En espera'],['someday','Algún día / Quizás'],['reference','Referencia'],['done','Completada']].map(([k,l])=>`<option value="${k}" ${t.status===k?'selected':''}>${l}</option>`).join('')}</select></label>
   ${t.status==='waiting'?`<label class="field"><span>En espera de</span><input class="inp" id="d-waitingFor" data-f="waitingFor" value="${esc(t.waitingFor||'')}" placeholder="Persona o área"></label>`:`<label class="field"><span>Estimación</span><select class="inp" id="d-estimate" data-f="estimate"><option value="">—</option>${[5,10,15,30,45,60,90,120,180,240].map(n=>`<option value="${n}" ${t.estimate==n?'selected':''}>${fmtMin(n)}</option>`).join('')}</select></label>`}</div>
   <div class="frow"><label class="field"><span>Sección</span><select class="inp" id="d-section" data-f="section"><option value="">—</option>${(p?p.sections:[]).map(s=>`<option ${s===t.section?'selected':''}>${esc(s)}</option>`).join('')}</select></label><span></span></div>
   <div class="field"><span class="flabel">Energía necesaria</span><div class="seg">${[['','—'],['baja','Baja'],['media','Media'],['alta','Alta']].map(([k,l])=>`<button class="${(t.energy||'')===k?'on':''}" data-act="setEnergy" data-v="${k}">${l}</button>`).join('')}</div></div>
   </div></details>
   <div class="dp-foot"><span>${isShared(p)?'De '+esc(personName(t.userId))+' · ':''}Creada ${fmtDate(t.created).toLowerCase()}${t.completed?' · completada '+fmtDate(dayOf(t.completed)).toLowerCase():''}${t.focusMin?' · '+fmtMin(t.focusMin)+' de enfoque':''}</span><button class="linkbtn kbd-hint" data-act="shortcuts">Atajos: 1-4 · H · M · P · C · E · ?</button></div>
  </div>`;
}

/* ================== Render general ================== */
const titles={inbox:'Bandeja',today:'Hoy',upcoming:'Próximos',next:'Próximas acciones',waiting:'En espera',someday:'Algún día',calendar:'Calendario',matrix:'Matriz',focus:'Enfoque',review:'Revisión',stats:'Estadísticas',logbook:'Registro',settings:'Ajustes'};
function renderView(){$('#view').innerHTML=(V[U.view]||V.today)()}
function renderTabbar(){
  const T=[['inbox','inbox','Bandeja'],['today','sun','Hoy'],['upcoming','upcoming','Próximos'],['focus','target','Enfoque'],['stats','chart','Datos']];
  $('#tabbar').innerHTML=T.map(([v,i,l])=>`<button class="${U.view===v?'on':''}" data-act="nav" data-view="${v}">${ic(i,21)}${l}</button>`).join('');
}
function updateBell(){const n=alerts().filter(a=>a.k!=='rem').length;$('#b-bell').innerHTML=ic('bell',20)+(n?`<span class="badge">${n}</span>`:'')}
function themeIcon(){if(!$('#b-theme'))return;const t=S.settings.theme;$('#b-theme').innerHTML=ic(t==='dark'?'moon':t==='light'?'sunsmall':'auto',19);$('#b-theme').title='Tema: '+({system:'sistema',light:'claro',dark:'oscuro'})[t]}
function applyTheme(){let t=S?S.settings.theme:null;if(!t){try{t=localStorage.getItem('summit-theme')||'system'}catch(e){t='system'}}else{try{localStorage.setItem('summit-theme',t)}catch(e){}}if(t==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',t);themeIcon()}
function render(){if(!S)return;renderSidebar();renderView();renderDetail();renderTabbar();updateBell();if(!U.notif)$('#notif').hidden=true;else renderNotif()}
function renderNotif(){
  const a=alerts();const n=$('#notif');n.hidden=false;
  n.innerHTML=`<h4>Notificaciones<button class="iconbtn" data-act="bell" aria-label="Cerrar">${ic('close',16)}</button></h4>`+(a.length?a.map(x=>`<div class="nt" data-act="open" data-id="${x.t.id}"><i style="--c:${alertColor[x.k]}"></i><div><b>${esc(x.t.title)}</b><span>${x.txt}</span></div></div>`).join(''):'<p class="cap" style="padding:6px">Sin avisos pendientes.</p>')+`<div style="padding:8px 6px 2px"><button class="btn sm ghost" data-act="nav" data-view="settings">${ic('gear',15)} Configurar avisos</button></div>`;
}

/* ================== Acciones ================== */
function toast(msg,o={}){const d=document.createElement('div');d.className='toast'+(o.warn?' warn':'');d.innerHTML=`${ic(o.icon||'check',18)}<span class="tx">${msg}</span>${o.btn?`<button>${o.btn}</button>`:''}`;if(o.btn)d.querySelector('button').onclick=()=>{o.fn&&o.fn();d.remove()};$('#toasts').appendChild(d);setTimeout(()=>d.remove(),o.ms||4200)}
function notify(title,body,o={}){toast(`<b>${esc(title)}</b> · ${esc(body)}`,o);try{if(S&&S.settings.sysNotif&&'Notification' in window&&Notification.permission==='granted'&&navigator.serviceWorker)navigator.serviceWorker.ready.then(r=>r.showNotification(title,{body,icon:'icon-192.png',badge:'icon-192.png'}))}catch(e){}}
function complete(t){
  if(t.status==='done'){t.status='open';t.completed=null;t.completedBy=null;save();render();return}
  const prev=JSON.parse(JSON.stringify(t));
  t.status='done';t.completed=nowLocal();t.completedBy=ME;t.inbox=false;let spawned=null;
  if(t.recur){const base=t.due||TODAY;let nd=nextRecur(t.recur,base);let g=0;while(nd<=TODAY&&g++<400)nd=nextRecur(t.recur,nd);
    spawned=Object.assign(JSON.parse(JSON.stringify(t)),{id:uid(),userId:ME,completedBy:null,status:'open',completed:null,due:nd,deadline:t.deadline?addDays(t.deadline,diffDays(nd,base)):null,created:TODAY,focusMin:0,subtasks:t.subtasks.map(s=>({t:s.t,done:false}))});S.tasks.push(spawned)}
  save();
  toast(`Completada: ${esc(t.title)}${spawned?' · se repite '+fmtDate(spawned.due).toLowerCase():''}`,{btn:'Deshacer',fn:()=>{Object.assign(t,prev);if(spawned)S.tasks=S.tasks.filter(x=>x.id!==spawned.id);save();render()}});
}
const A={};
A.nav=el=>{U.view=el.dataset.view;if(el.dataset.id){if(U.view==='project')U.project=el.dataset.id;if(U.view==='context')U.context=el.dataset.id;if(U.view==='filter')U.filter=el.dataset.id}U.notif=false;document.body.classList.remove('drawer');closeModal();render();$('#main').scrollTop=0};
A.open=el=>{U.sel=el.dataset.id;U.confirmDel=false;U.notif=false;closeModal();render()};
A.closeDetail=()=>{U.sel=null;render()};
A.check=(el,e)=>{e.stopPropagation();const t=task(el.dataset.id);if(!t)return;const row=el.closest('.task');if(row&&t.status!=='done'){row.classList.add('completing');setTimeout(()=>{complete(t);render()},260)}else{complete(t);render()}};
A.drawer=()=>document.body.classList.toggle('drawer');
A.theme=()=>{const o=['system','light','dark'];S.settings.theme=o[(o.indexOf(S.settings.theme)+1)%3];applyTheme();save();if(U.view==='settings')renderView()};
A.setTheme=el=>{S.settings.theme=el.dataset.v;applyTheme();save();renderView()};
A.bell=()=>{U.notif=!U.notif;if(U.notif)renderNotif();else $('#notif').hidden=true};
A.setU=el=>{let v=el.dataset.v;if(['maxTime','range'].includes(el.dataset.k))v=+v;U[el.dataset.k]=v;renderView()};
A.toggleDone=()=>{U.showDone=!U.showDone;renderView()};
A.calMove=el=>{const v=+el.dataset.v;if(!v){U.calMonth=TODAY.slice(0,7);U.calSel=TODAY}else{const[y,m]=U.calMonth.split('-').map(Number);const d=new Date(y,m-1+v,1);U.calMonth=iso(d).slice(0,7)}renderView()};
A.calDay=el=>{U.calSel=el.dataset.d;renderView()};
A.projStats=el=>{U.view='stats';U.statsTab='project';U.statsProject=el.dataset.id;render();$('#main').scrollTop=0};
A.setPrio=el=>{const t=task(U.sel);t.priority=+el.dataset.v;save();render()};
A.setEnergy=el=>{const t=task(U.sel);t.energy=el.dataset.v||null;save();render()};
A.togCtx=el=>{const t=task(U.sel),c=el.dataset.v;t.contexts=t.contexts.includes(c)?t.contexts.filter(x=>x!==c):[...t.contexts,c];save();render()};
A.delSub=el=>{const t=task(U.sel);t.subtasks.splice(+el.dataset.i,1);save();render()};
A.askDel=()=>{const t=task(U.sel);if(t&&!canDeleteTask(t))return toast('Solo quien creó la tarea o el propietario del proyecto puede eliminarla',{icon:'close'});U.confirmDel=true;renderDetail()};A.cancelDel=()=>{U.confirmDel=false;renderDetail()};
A.delTask=()=>{const t=task(U.sel);S.tasks=S.tasks.filter(x=>x.id!==U.sel);U.sel=null;U.confirmDel=false;save();render();toast('Tarea eliminada: '+esc(t.title),{icon:'trash'})};
A.startFocus=el=>{F.taskId=el.dataset.id;U.view='focus';U.sel=null;render()};
A.preset=el=>{if(F.running)return toast('Pausa el temporizador para cambiar la duración',{icon:'clock'});F.preset=[+el.dataset.a,+el.dataset.b];F.phase='work';F.total=F.left=F.preset[0]*60;renderView();fUpdate()};
A.fToggle=()=>{if(F.running){clearInterval(F.iv);F.running=false}else{F.running=true;F.iv=setInterval(()=>{F.left--;if(F.left<=0)fPhaseEnd();else fUpdate()},1000)}renderView();fUpdate()};
A.fReset=()=>{clearInterval(F.iv);F.running=false;F.phase='work';F.total=F.left=F.preset[0]*60;renderView();fUpdate()};
A.fSkip=()=>{F.left=0;fPhaseEnd()};
A.finishReview=()=>{S.reviews.unshift(TODAY);S.reviewChecks={};S.projects.forEach(p=>{if(p.status==='active')p.lastReview=TODAY});save();render();toast('Revisión semanal completada. Sistema al día.')};
A.markReviewed=el=>{const p=proj(el.dataset.id);p.lastReview=TODAY;save();renderView();toast('Proyecto revisado: '+esc(p.name))};
A.toggleSet=el=>{S.settings[el.dataset.k]=!S.settings[el.dataset.k];save();renderView();updateBell()};
A.askPerm=async()=>{
  try{if(!('Notification' in window))throw 0;let p=Notification.permission;if(p==='default')p=await Notification.requestPermission();if(p==='granted'){S.settings.sysNotif=true;save();new Notification('Summit',{body:'Las notificaciones funcionan correctamente.'});toast('Notificaciones del sistema activadas')}else throw 0}
  catch(e){notify('Aviso de prueba','Este prototipo no puede usar las notificaciones del sistema; en la PWA instalada llegarán como push.',{icon:'bell'})}
  renderView()};
A.exportJson=()=>{const s=JSON.stringify(S,null,1);const ta=$('#json-out');ta.hidden=false;ta.value=s;try{navigator.clipboard.writeText(s).then(()=>toast('Copia de seguridad copiada al portapapeles'),()=>{ta.select();toast('Selecciona y copia el texto de abajo',{icon:'copy'})})}catch(e){ta.select();toast('Selecciona y copia el texto de abajo',{icon:'copy'})}};
A.copyTxt=el=>{const t=$('#'+el.dataset.src).textContent;try{navigator.clipboard.writeText(t).then(()=>toast('Copiado'),()=>toast('Selecciona el texto y cópialo',{icon:'copy'}))}catch(e){toast('Selecciona el texto y cópialo',{icon:'copy'})}};
A.delFilter=el=>{S.filters=S.filters.filter(f=>f.id!==el.dataset.id);U.view='today';save();render()};
A.addSection=()=>{modal(`<h2>Nueva sección</h2><input class="inp" id="sec-name" placeholder="Nombre de la sección"><div class="row end"><button class="btn ghost" data-act="close">Cancelar</button><button class="btn primary" data-act="saveSection">Crear sección</button></div>`);setTimeout(()=>$('#sec-name').focus(),30)};
A.saveSection=()=>{const v=$('#sec-name').value.trim();if(!v)return;proj(U.project).sections.push(v);save();closeModal();render()};
A.close=()=>closeModal();
A.quick=el=>openQuick(el.dataset.pre||'');
A.quickIn=el=>openQuick('',{section:(el.dataset.section||'').trim()||null});
A.qaSave=()=>qaSave(false);
A.palette=()=>openPalette();
A.clarify=()=>{U.clar={q:myT().filter(t=>t.inbox&&isOpen(t)).map(t=>t.id),i:0,step:'q1'};renderClarify()};
A.cl=el=>clarStep(el.dataset.v);
A.newProject=()=>openProjectModal();
A.editProject=el=>isOwner(proj(el.dataset.id))?openProjectModal(el.dataset.id):openShareModal(el.dataset.id);
A.swatch=el=>{document.querySelectorAll('.swatches button').forEach(b=>b.classList.remove('on'));el.classList.add('on')};
A.saveProject=el=>saveProject(el.dataset.id);
A.projStatus=el=>{const p=proj(el.dataset.id);p.status=el.dataset.v;save();closeModal();render();toast('Proyecto '+({active:'reactivado',paused:'en pausa',done:'completado'})[el.dataset.v])};
A.newFilter=()=>openFilterModal();
A.saveFilter=()=>saveFilter();

document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');
  if(!el){if(U.notif&&!e.target.closest('#notif')){U.notif=false;$('#notif').hidden=true}return}
  if(U.notif&&!el.closest('#notif')&&el.dataset.act!=='bell'){U.notif=false;$('#notif').hidden=true}
  const f=A[el.dataset.act];if(f)f(el,e);
});
/* Campos del panel de detalle */
$('#detail').addEventListener('change',e=>{
  const t=task(U.sel);if(!t)return;const el=e.target;
  if(el.dataset.f){const f=el.dataset.f;let v=el.value;
    if(f==='title')return;
    if(f==='estimate')v=v?+v:null;else if(v==='')v=null;
    if(f==='projectId'){t.projectId=v;t.inbox=!v;t.section=null;if(!isShared(proj(v)))t.assigneeId=null}
    else if(f==='status'){t.status=v;if(v==='done'){t.completed=nowLocal();t.completedBy=ME}else{t.completed=null;t.completedBy=null}if(v==='waiting'&&!t.waitingSince)t.waitingSince=TODAY;if(v!=='open'||t.projectId)t.inbox=false}
    else t[f]=v;
    save();render();return}
  if(el.dataset.sub!==undefined){t.subtasks[+el.dataset.sub].done=el.checked;save();render()}
  if(el.dataset.subt!==undefined){t.subtasks[+el.dataset.subt].t=el.value;save();renderView()}
});
$('#detail').addEventListener('input',e=>{const t=task(U.sel);if(!t)return;if(e.target.id==='d-title'){t.title=e.target.value;save();const r=document.querySelector(`.task[data-id="${t.id}"] .t-title`);if(r)r.textContent=t.title}if(e.target.id==='d-notes'){t.notes=e.target.value;save()}});
$('#detail').addEventListener('keydown',e=>{if(e.target.id==='sub-new'&&e.key==='Enter'&&e.target.value.trim()){const t=task(U.sel);t.subtasks.push({t:e.target.value.trim(),done:false});save();render();setTimeout(()=>{const n=$('#sub-new');n&&n.focus()},20)}if(e.target.id==='d-title'&&e.key==='Enter'){e.preventDefault();e.target.blur();render()}});
/* Otros controles */
document.addEventListener('change',e=>{
  const id=e.target.id;
  if(id==='f-task')F.taskId=e.target.value||null;
  if(id==='st-proj'){U.statsProject=e.target.value;renderView()}
  if(id==='set-lead'){S.settings.leadDays=+e.target.value;save();render()}
  if(id==='set-digest'){S.settings.dailyDigest=e.target.value;save()}
  if(id==='set-rev'){S.settings.reviewDay=+e.target.value;save()}
  if(id==='set-cap'){S.settings.capacity=+e.target.value;save()}
  if(e.target.dataset.rv){S.reviewChecks[e.target.dataset.rv]=e.target.checked;save();renderView()}
});
document.addEventListener('toggle',e=>{const k=e.target.dataset&&e.target.dataset.key;if(k)U[k]=e.target.open},true);
/* Arrastrar en el tablero */
document.addEventListener('dragstart',e=>{const t=e.target.closest('.task[draggable="true"]');if(t){e.dataTransfer.setData('text/plain',t.dataset.id);e.dataTransfer.effectAllowed='move'}});
document.addEventListener('dragover',e=>{const c=e.target.closest('[data-drop]');if(c){e.preventDefault();c.classList.add('over')}});
document.addEventListener('dragleave',e=>{const c=e.target.closest('[data-drop]');if(c&&!c.contains(e.relatedTarget))c.classList.remove('over')});
document.addEventListener('drop',e=>{const c=e.target.closest('[data-drop]');if(!c)return;e.preventDefault();const t=task(e.dataTransfer.getData('text/plain'));if(t){t.section=c.dataset.drop||null;save();render()}});

/* ================== Modales ================== */
function modal(inner,cls=''){const m=$('#modal');m.innerHTML=`<div class="scr" data-act="close"></div><div class="mcard ${cls}" role="dialog" aria-modal="true">${inner}</div>`;m.hidden=false}
function closeModal(){const m=$('#modal');m.hidden=true;m.innerHTML='';U.qaSection=null;QA=null;closePicker()}
/* ================== Campos rápidos: proyecto, fecha, límite, prioridad, contexto ================== */
function weekendDate(){const d=parse(TODAY);const w=d.getDay();return w===6||w===0?TODAY:nextWeekday(6)}
function nextMonday(){return nextWeekday(1)}
const PICK_DATES=()=>[{v:TODAY,label:'Hoy',icon:'sun',hint:WDC[parse(TODAY).getDay()].slice(0,3)},{v:addDays(TODAY,1),label:'Mañana',icon:'sunsmall',hint:WDC[parse(addDays(TODAY,1)).getDay()].slice(0,3)},{v:weekendDate(),label:'Fin de semana',icon:'calendar',hint:fmtShort(weekendDate())},{v:nextMonday(),label:'Próxima semana',icon:'upcoming',hint:fmtShort(nextMonday())},{v:'__pick',label:'Elegir fecha…',icon:'calendar'},{v:'',label:'Sin fecha',icon:'close'}];
function visibleProjects(){return S.projects.filter(p=>p.status!=='done')}
function chipVals(o){
  const p=proj(o.projectId);
  return {
    project:p?`<i class="dot" style="--c:${p.color}"></i>${esc(p.name)}`:`${ic('inbox',14)}Bandeja`,
    due:o.due?`${ic('calendar',14)}${fmtShort(o.due)}${o.time?' '+o.time:''}`:`${ic('calendar',14)}Fecha`,
    deadline:o.deadline?`${ic('flag',14)}${fmtShort(o.deadline)}`:`${ic('flag',14)}Límite`,
    priority:`<i class="pf" style="--c:var(--p${o.priority||4})">${ic('flag',14)}</i>${o.priority&&o.priority<4?'P'+o.priority:'Prioridad'}`,
    contexts:(o.contexts&&o.contexts.length)?`${ic('at',14)}${esc(o.contexts.join(', '))}`:`${ic('at',14)}Contexto`
  };
}
function fieldChips(o,scope){
  const c=chipVals(o),on=k=>({project:!!o.projectId,due:!!o.due,deadline:!!o.deadline,priority:o.priority&&o.priority<4,contexts:o.contexts&&o.contexts.length})[k];
  const p=proj(o.projectId);
  let h=['project','due','deadline','priority','contexts'].map(k=>`<button type="button" class="fchip2 ${on(k)?'on':''} ${k==='deadline'&&o.deadline&&diffDays(o.deadline,TODAY)<=S.settings.leadDays?'hot':''}" data-act="pick" data-f="${k}" data-scope="${scope}">${c[k]}</button>`).join('');
  if(scope==='task'&&isShared(p)){const t=o;h+=`<button type="button" class="fchip2 ${t.assigneeId?'on':''}" data-act="pick" data-f="assignee" data-scope="task">${ic('user',14)}${t.assigneeId?esc(t.assigneeId===ME?'Yo':personName(t.assigneeId)):'Asignar'}</button>`}
  return h;
}

/* ---------- Selector flotante ---------- */
let PK=null;
function closePicker(){const el=$('#picker');if(el)el.remove();PK=null}
function openPicker(cfg){
  closePicker();PK=Object.assign({idx:0,q:''},cfg);
  const el=document.createElement('div');el.id='picker';el.className='picker';el.setAttribute('role','listbox');document.body.appendChild(el);
  drawPicker();
  const r=cfg.anchor?cfg.anchor.getBoundingClientRect():null;
  if(r&&window.innerWidth>700){const top=Math.min(r.bottom+6,window.innerHeight-el.offsetHeight-10);el.style.left=Math.max(10,Math.min(r.left,window.innerWidth-el.offsetWidth-10))+'px';el.style.top=Math.max(10,top)+'px'}
  else el.classList.add('sheet');
  // Con teclado físico, foco inmediato para que lo que se escriba vaya al buscador; en el móvil, sin abrir el teclado
  const fi=()=>{const i=el.querySelector('.pk-in');if(i)i.focus({preventScroll:true})};
  if(window.matchMedia&&matchMedia('(hover:hover)').matches)fi();setTimeout(fi,20);
}
function pickerItems(){const q=norm(PK.q.trim());let it=PK.items();if(q)it=it.filter(x=>norm(x.label).includes(q));if(PK.create&&q&&!it.some(x=>norm(x.label)===q))it.push({v:'__new',label:'Crear «'+PK.q.trim()+'»',icon:'plus'});return it}
function drawPicker(){
  const el=$('#picker');if(!el||!PK)return;const it=pickerItems();PK.idx=Math.min(PK.idx,Math.max(0,it.length-1));
  el.innerHTML=`<div class="pk-h">${esc(PK.title)}${PK.multi?'<button class="pk-done" data-pk="done">Listo</button>':''}</div>
  ${PK.search?`<input class="pk-in" id="pk-in" placeholder="Buscar…" value="${esc(PK.q)}" autocomplete="off">`:'<input class="pk-in pk-hidden" id="pk-in" aria-hidden="true">'}
  <div class="pk-list">${it.map((x,i)=>`<button class="pk-it ${i===PK.idx?'on':''} ${PK.isOn&&PK.isOn(x.v)?'sel':''}" data-pk="${i}">${x.color?`<i class="dot" style="--c:${x.color}"></i>`:x.icon?ic(x.icon,16):''}<span>${esc(x.label)}</span>${x.hint?`<small>${esc(x.hint)}</small>`:''}${PK.isOn&&PK.isOn(x.v)?ic('check',15):''}</button>`).join('')||'<p class="pk-empty">Sin resultados</p>'}</div>
  ${PK.datePick?`<div class="pk-date"><input type="date" class="inp" id="pk-date" value="${PK.dateVal||''}"><button class="btn sm primary" data-pk="date">Usar</button></div>`:''}`;
  const inp=el.querySelector('.pk-in');if(inp){inp.oninput=()=>{PK.q=inp.value;PK.idx=0;drawPicker();const n=$('#pk-in');n.focus();n.setSelectionRange(n.value.length,n.value.length)}}
}
function pickerChoose(i){
  const it=pickerItems()[i];if(!it)return;
  if(it.v==='__pick'){PK.datePick=true;drawPicker();setTimeout(()=>{const d=$('#pk-date');if(d){d.focus();try{d.showPicker&&d.showPicker()}catch(e){}}},30);return}
  const v=it.v==='__new'?{create:PK.q.trim()}:it.v;
  const keep=PK.multi;PK.onPick(v);
  if(keep){PK.q='';drawPicker();const n=$('#pk-in');n&&n.focus()}else closePicker();
}
document.addEventListener('click',e=>{
  const pk=e.target.closest('[data-pk]');
  if(pk){e.preventDefault();e.stopPropagation();const v=pk.dataset.pk;if(v==='done')return closePicker();if(v==='date'){const d=$('#pk-date').value;if(d){PK.onPick(d);closePicker()}return}pickerChoose(+v);return}
  if(PK&&!e.target.closest('#picker')&&!e.target.closest('[data-act="pick"]'))closePicker();
},true);
document.addEventListener('keydown',e=>{
  if(!PK)return;
  if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closePicker();return}
  if(e.target&&e.target.id==='pk-date'){if(e.key==='Enter'){e.preventDefault();const d=e.target.value;if(d){PK.onPick(d);closePicker()}}return}
  const n=pickerItems().length;
  if(e.key==='ArrowDown'){e.preventDefault();PK.idx=(PK.idx+1)%Math.max(1,n);drawPicker();$('#pk-in').focus()}
  else if(e.key==='ArrowUp'){e.preventDefault();PK.idx=(PK.idx-1+n)%Math.max(1,n);drawPicker();$('#pk-in').focus()}
  else if(e.key==='Enter'){e.preventDefault();e.stopPropagation();pickerChoose(PK.idx)}
  else if(!PK.search&&/^[1-9]$/.test(e.key)){e.preventDefault();pickerChoose(+e.key-1)}
},true);

/* Abre el selector adecuado para un campo de una tarea ('task') o de la entrada rápida ('qa') */
function pickField(f,scope,anchor){
  const tgt=scope==='task'?task(U.sel):QA;if(!tgt)return;
  const cur=scope==='qa'?qaMerged():tgt;
  const apply=(patch)=>{
    if(scope==='task'){Object.assign(tgt,patch);if('projectId' in patch){tgt.inbox=!patch.projectId&&tgt.status==='open';tgt.section=null;if(!isShared(proj(patch.projectId)))tgt.assigneeId=null}save();render()}
    else{Object.assign(QA.pick,patch);qaRefresh()}
  };
  if(f==='project'){
    openPicker({anchor,title:'Mover a proyecto',search:true,items:()=>[{v:'',label:'Bandeja',icon:'inbox'},...visibleProjects().map(p=>({v:p.id,label:p.name,color:p.color,hint:isOwner(p)?'':'compartido'}))],isOn:v=>(cur.projectId||'')===v,
      onPick:v=>apply({projectId:v||null})});
  }else if(f==='due'||f==='deadline'){
    openPicker({anchor,title:f==='due'?'Fecha':'Fecha límite',items:PICK_DATES,datePick:false,dateVal:cur[f]||'',isOn:v=>(cur[f]||'')===v,onPick:v=>apply({[f]:v||null})});
  }else if(f==='priority'){
    openPicker({anchor,title:'Prioridad',items:()=>[1,2,3,4].map(n=>({v:n,label:n<4?'Prioridad '+n:'Sin prioridad',icon:'flag',color:`var(--p${n})`,hint:String(n)})),isOn:v=>(cur.priority||4)===v,onPick:v=>apply({priority:v})});
  }else if(f==='contexts'){
    openPicker({anchor,title:'Contextos',search:true,multi:true,create:true,items:()=>S.contexts.map(c=>({v:c,label:'@'+c})),isOn:v=>(cur.contexts||[]).includes(v),
      onPick:v=>{let c=v&&v.create?v.create.replace(/^@/,''):v;if(v&&v.create&&!S.contexts.includes(c)){S.contexts.push(c);save()}const list=(scope==='task'?tgt.contexts:qaMerged().contexts).slice();const i=list.indexOf(c);if(i>=0)list.splice(i,1);else list.push(c);apply({contexts:list});cur.contexts=list}});
  }else if(f==='assignee'&&scope==='task'){
    const p=proj(tgt.projectId);if(!isShared(p))return;
    openPicker({anchor,title:'Asignar a',items:()=>[{v:'',label:'Sin asignar',icon:'close'},...membersOf(p.id).map(m=>({v:m.userId,label:m.userId===ME?'Yo':m.name,icon:'user'}))],isOn:v=>(tgt.assigneeId||'')===v,onPick:v=>apply({assigneeId:v||null})});
  }
}
A.pick=el=>pickField(el.dataset.f,el.dataset.scope,el);

/* ================== Entrada rápida contextual ================== */
let QA=null;
function quickDefaults(extra){
  const d={projectId:null,section:null,due:null,deadline:null,priority:4,contexts:[],status:'open'};
  if(U.view==='project'&&proj(U.project)){d.projectId=U.project}
  if(U.view==='today')d.due=TODAY;
  if(U.view==='calendar')d.due=U.calSel;
  if(U.view==='context'&&U.context)d.contexts=[U.context];
  if(U.view==='someday')d.status='someday';
  if(U.view==='waiting')d.status='waiting';
  return Object.assign(d,extra||{});
}
function qaMerged(){
  const inp=$('#qa-in');const r=parseQuick(inp?inp.value:'',true);const d=QA.def,pk=QA.pick;
  const m={projectId:d.projectId,due:d.due,deadline:d.deadline,priority:d.priority,contexts:d.contexts.slice(),time:null,recur:null,estimate:null,title:r.title};
  if(r.projectId)m.projectId=r.projectId;if(r.due)m.due=r.due;if(r.deadline)m.deadline=r.deadline;if(r.priority<4)m.priority=r.priority;
  if(r.contexts.length)m.contexts=[...new Set([...m.contexts,...r.contexts])];m.time=r.time;m.recur=r.recur;m.estimate=r.estimate;
  for(const k in pk)m[k]=pk[k];
  return m;
}
function qaRefresh(){const f=$('#qa-fields');if(f&&QA)f.innerHTML=fieldChips(qaMerged(),'qa')}
function openQuick(pre,extra){
  QA={def:quickDefaults(extra),pick:{}};
  const where=QA.def.projectId?proj(QA.def.projectId).name:QA.def.status==='someday'?'Algún día':'';
  modal(`<div class="qa">
    <input class="qa-in" id="qa-in" value="${esc(pre||'')}" placeholder="Nueva tarea${where?' en '+esc(where):''}" autocomplete="off" aria-label="Nueva tarea">
    <div class="qa-ac" id="qa-ac" hidden></div>
    <div class="qa-fields" id="qa-fields"></div>
    <div class="qa-foot"><span class="qa-tip">Intro añade · Mayús+Intro añade otra · <kbd>#</kbd> proyecto <kbd>@</kbd> contexto <kbd>!</kbd> prioridad</span><button class="btn ghost sm" data-act="close">Cancelar</button><button class="btn primary sm" data-act="qaSave">Añadir</button></div>
  </div>`,'qa-card');
  const inp=$('#qa-in');
  inp.addEventListener('input',()=>{qaRefresh();qaAutocomplete()});
  inp.addEventListener('keydown',e=>{
    const ac=$('#qa-ac');
    if(!ac.hidden&&['ArrowDown','ArrowUp','Tab','Enter'].includes(e.key)){
      const its=[...ac.querySelectorAll('.pk-it')];let i=its.findIndex(x=>x.classList.contains('on'));
      if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();its.forEach(x=>x.classList.remove('on'));i=(i+(e.key==='ArrowDown'?1:-1)+its.length)%its.length;its[i].classList.add('on');return}
      if(i>=0){e.preventDefault();its[i].click();return}
    }
    if(e.key==='Escape'&&!ac.hidden){e.preventDefault();e.stopPropagation();ac.hidden=true;return}
    if(e.key==='Enter'){e.preventDefault();qaSave(e.shiftKey)}
  });
  qaRefresh();
  /* Enfoque inmediato, dentro del mismo toque: así el teclado del iPhone se abre solo.
     El segundo intento cubre navegadores que ignoran el primero. */
  const focusIn=()=>{try{inp.focus({preventScroll:true});inp.setSelectionRange(inp.value.length,inp.value.length)}catch(_){}};
  focusIn();setTimeout(()=>{if(document.activeElement!==inp)focusIn()},60);
}
/* Sugerencias al escribir #, @ o ! */
function qaAutocomplete(){
  const inp=$('#qa-in'),ac=$('#qa-ac');const pos=inp.selectionStart||inp.value.length;const before=inp.value.slice(0,pos);
  const m=before.match(/(^|\s)([#@!])([^\s#@!]*)$/);if(!m){ac.hidden=true;return}
  const sym=m[2],q=norm(m[3]);let items=[];
  if(sym==='#')items=[{v:'',label:'Bandeja',icon:'inbox'},...visibleProjects().map(p=>({v:p.id,label:p.name,color:p.color}))].filter(x=>!q||norm(x.label).includes(q));
  if(sym==='@')items=S.contexts.map(c=>({v:c,label:'@'+c})).filter(x=>!q||norm(x.label).includes(q));
  if(sym==='!')items=[1,2,3,4].map(n=>({v:n,label:n<4?'Prioridad '+n:'Sin prioridad',color:`var(--p${n})`})).filter(x=>!q||String(x.v).startsWith(q));
  if(sym==='@'&&m[3]&&!items.some(x=>norm(x.label)==='@'+q))items.push({v:{create:m[3]},label:'Crear @'+m[3],icon:'plus'});
  if(!items.length){ac.hidden=true;return}
  ac.hidden=false;ac.innerHTML=items.slice(0,8).map((x,i)=>`<button type="button" class="pk-it ${i===0?'on':''}" data-qa="${i}">${x.color?`<i class="dot" style="--c:${x.color}"></i>`:x.icon?ic(x.icon,16):''}<span>${esc(x.label)}</span></button>`).join('');
  ac.querySelectorAll('[data-qa]').forEach(b=>b.onclick=ev=>{ev.preventDefault();const x=items[+b.dataset.qa];
    const start=pos-m[0].length+m[1].length;inp.value=(inp.value.slice(0,start)+inp.value.slice(pos)).replace(/\s{2,}/g,' ');
    if(sym==='#')QA.pick.projectId=x.v||null;
    if(sym==='!')QA.pick.priority=x.v;
    if(sym==='@'){let c=x.v&&x.v.create?x.v.create:x.v;if(!S.contexts.includes(c)){S.contexts.push(c);save()}const list=qaMerged().contexts;if(!list.includes(c))list.push(c);QA.pick.contexts=list}
    ac.hidden=true;qaRefresh();inp.focus();inp.setSelectionRange(start,start)});
}
function qaSave(again){
  const inp=$('#qa-in');if(!inp||!QA)return;const m=qaMerged();
  if(!m.title)return toast('Escribe qué hay que hacer',{icon:'close'});
  const p=proj(m.projectId);
  const t=newTask({title:m.title,projectId:m.projectId,section:p&&QA.def.section&&p.sections.includes(QA.def.section)?QA.def.section:null,
    inbox:!m.projectId&&QA.def.status==='open',status:QA.def.status,waitingSince:QA.def.status==='waiting'?TODAY:null,priority:m.priority||4,due:m.due,time:m.time,deadline:m.deadline,recur:m.recur,reminder:m.time?'A la hora':null,contexts:m.contexts,estimate:m.estimate});
  S.tasks.push(t);save();render();
  if(again){inp.value='';QA.pick={};qaRefresh();inp.focus();toast('Añadida: '+esc(t.title),{ms:1800});return}
  closeModal();
  toast('Añadida'+(p?' a '+esc(p.name):m.projectId===null&&t.inbox?' a la Bandeja':''),{btn:'Abrir',fn:()=>{U.sel=t.id;render()}});
}

/* ================== Atajos de teclado ================== */
const SHORTCUTS=[['Q','Nueva tarea'],['/','Buscar'],['J  K','Bajar · subir por la lista'],['1 – 4','Prioridad'],['H','Fecha: hoy'],['M','Fecha: mañana'],['D','Elegir fecha'],['L','Fecha límite'],['P','Mover a proyecto'],['C','Contextos'],['A','Asignar (compartidos)'],['E','Completar'],['Supr','Eliminar'],['Esc','Cerrar'],['?','Ver atajos']];
function openShortcuts(){modal(`<h2>Atajos de teclado</h2><div class="kbd-grid">${SHORTCUTS.map(([k,l])=>`<kbd>${k}</kbd><span>${l}</span>`).join('')}</div><p class="cap" style="margin-top:12px">En la entrada rápida: <kbd>#</kbd> proyecto, <kbd>@</kbd> contexto, <kbd>!</kbd> prioridad, y fechas como «mañana» o «viernes».</p><div class="row end"><button class="btn primary" data-act="close">Entendido</button></div>`)}
A.shortcuts=()=>openShortcuts();
function moveSel(dir){
  const rows=[...document.querySelectorAll('#view .task[data-id]')];if(!rows.length)return;
  let i=rows.findIndex(r=>r.dataset.id===U.sel);i=i<0?(dir>0?0:rows.length-1):Math.max(0,Math.min(rows.length-1,i+dir));
  U.sel=rows[i].dataset.id;U.confirmDel=false;render();const r=document.querySelector(`#view .task[data-id="${U.sel}"]`);r&&r.scrollIntoView({block:'nearest'});
}
document.addEventListener('keydown',e=>{
  if(!S||PK||e.ctrlKey||e.metaKey||e.altKey)return;
  const a=document.activeElement;if(/INPUT|TEXTAREA|SELECT/.test(a.tagName)||!$('#modal').hidden)return;
  const k=e.key;
  if(k==='?'){e.preventDefault();openShortcuts();return}
  if(k==='j'||k==='ArrowDown'){if(k==='j'||U.sel){e.preventDefault();moveSel(1)}return}
  if(k==='k'||k==='ArrowUp'){if(k==='k'||U.sel){e.preventDefault();moveSel(-1)}return}
  const t=task(U.sel);if(!t)return;
  const chip=f=>document.querySelector(`#detail [data-act="pick"][data-f="${f}"]`);
  const set=patch=>{Object.assign(t,patch);save();render()};
  if(/^[1-4]$/.test(k)){e.preventDefault();set({priority:+k});toast('Prioridad '+(k==='4'?'quitada':k),{ms:1200});return}
  const map={h:()=>{set({due:TODAY});toast('Para hoy',{ms:1200})},m:()=>{set({due:addDays(TODAY,1)});toast('Para mañana',{ms:1200})},d:()=>pickField('due','task',chip('due')),l:()=>pickField('deadline','task',chip('deadline')),p:()=>pickField('project','task',chip('project')),c:()=>pickField('contexts','task',chip('contexts')),'@':()=>pickField('contexts','task',chip('contexts')),a:()=>pickField('assignee','task',chip('assignee')),e:()=>{complete(t);render()},Delete:()=>A.askDel(),Backspace:()=>A.askDel()};
  if(map[k]){e.preventDefault();map[k]()}
});

/* ================== Gestos táctiles ================== */
/* 1) Deslizar desde el borde izquierdo abre el menú (y deslizar a la izquierda lo cierra).
   2) Con una tarea abierta, deslizar hacia abajo la cierra y vuelve a la pantalla anterior. */
(function gestures(){
  let g=null;
  const narrow=()=>window.matchMedia('(max-width:860px)').matches;
  const side=()=>$('#sidebar'),det=()=>$('#detail');
  const modalOpen=()=>!$('#modal').hidden||document.querySelector('.picker');
  const reset=el=>{if(!el)return;el.style.transition='';el.style.transform=''};
  document.addEventListener('touchstart',e=>{
    g=null;if(!S||e.touches.length!==1||modalOpen())return;
    const t=e.touches[0],drawerOpen=document.body.classList.contains('drawer');
    const inDetail=!!(e.target.closest&&e.target.closest('#detail'))&&!det().hidden;
    if(narrow()&&!drawerOpen&&t.clientX<=26&&!inDetail)g={type:'menu',x:t.clientX,y:t.clientY,t:Date.now(),on:false};
    else if(narrow()&&drawerOpen)g={type:'menuclose',x:t.clientX,y:t.clientY,t:Date.now(),on:false};
    else if(inDetail&&det().scrollTop<=0)g={type:'detail',x:t.clientX,y:t.clientY,t:Date.now(),on:false};
  },{passive:true});
  document.addEventListener('touchmove',e=>{
    if(!g)return;const t=e.touches[0],dx=t.clientX-g.x,dy=t.clientY-g.y;
    if(!g.on){
      const h=g.type==='detail'?(dy>8&&Math.abs(dy)>Math.abs(dx)*1.4):(Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)*1.4&&(g.type==='menu'?dx>0:dx<0));
      if(!h){if(Math.abs(dx)>14||Math.abs(dy)>14)g=null;return}
      g.on=true;
    }
    e.preventDefault();
    if(g.type==='detail'){const d=det();d.style.transition='none';d.style.transform=`translateY(${Math.max(0,dy)}px)`}
    else{const s=side(),w=s.offsetWidth||280;s.style.transition='none';
      const x=g.type==='menu'?Math.min(0,-w+dx):Math.min(0,dx);s.style.transform=`translateX(${x}px)`;s.style.boxShadow='var(--shadow)'}
  },{passive:false});
  const end=e=>{
    if(!g||!g.on){g=null;return}
    const c=(e.changedTouches&&e.changedTouches[0])||{clientX:g.x,clientY:g.y},dx=c.clientX-g.x,dy=c.clientY-g.y,fast=(Date.now()-g.t)<280;
    const type=g.type;g=null;
    if(type==='detail'){
      const d=det();
      if(dy>110||(fast&&dy>50)){d.style.transition='transform .18s ease';d.style.transform='translateY(100%)';setTimeout(()=>{reset(d);A.closeDetail()},170)}
      else{d.style.transition='transform .18s ease';d.style.transform='';setTimeout(()=>reset(d),200)}
      return;
    }
    const s=side();s.style.transition='';s.style.transform='';s.style.boxShadow='';
    const w=s.offsetWidth||280;
    if(type==='menu'){if(dx>w*.3||(fast&&dx>40))document.body.classList.add('drawer')}
    else if(-dx>w*.25||(fast&&-dx>40))document.body.classList.remove('drawer');
  };
  document.addEventListener('touchend',end,{passive:true});
  document.addEventListener('touchcancel',()=>{if(g&&g.on){reset(det());const s=side();s.style.transition='';s.style.transform='';s.style.boxShadow=''}g=null},{passive:true});
})();

/* Paleta de comandos */
function openPalette(){
  modal(`<input class="pal-in" id="pal-in" placeholder="Buscar tareas, proyectos o vistas…" autocomplete="off" aria-label="Buscar"><div class="pal-list" id="pal-list"></div>`);
  const inp=$('#pal-in');let idx=0,items=[];
  const views=[['inbox','inbox','Bandeja de entrada'],['today','sun','Hoy'],['upcoming','upcoming','Próximos'],['calendar','calendar','Calendario'],['next','next','Próximas acciones'],['waiting','clock','En espera'],['someday','cloud','Algún día / Quizás'],['review','refresh','Revisión semanal'],['matrix','grid','Matriz Eisenhower'],['focus','target','Enfoque'],['stats','chart','Estadísticas'],['logbook','book','Registro'],['settings','gear','Ajustes']];
  const draw=()=>{const q=norm(inp.value.trim());
    items=[...views.filter(v=>!q||norm(v[2]).includes(q)).map(v=>({act:'nav',view:v[0],html:ic(v[1],16)+v[2],k:'Vista'})),
      ...S.projects.filter(p=>!q||norm(p.name).includes(q)).map(p=>({act:'nav',view:'project',id:p.id,html:`<i class="dot" style="--c:${p.color}"></i>${esc(p.name)}`,k:'Proyecto'})),
      ...(q?myT().filter(t=>t.status!=='done'&&(norm(t.title).includes(q)||norm(t.notes).includes(q))).slice(0,12).map(t=>({act:'open',id:t.id,html:ic('check',16)+esc(t.title),k:proj(t.projectId)?.name||'Bandeja'})):[]),
      ...(q?[{act:'quick',pre:inp.value,html:ic('plus',16)+'Crear tarea «'+esc(inp.value)+'»',k:'Nueva'}]:[])].slice(0,20);
    idx=Math.min(idx,items.length-1);
    $('#pal-list').innerHTML=items.map((it,i)=>`<div class="pal-item ${i===idx?'on':''}" data-act="${it.act}" ${it.view?`data-view="${it.view}"`:''} ${it.id?`data-id="${it.id}"`:''} ${it.pre!==undefined?`data-pre="${esc(it.pre)}"`:''}>${it.html}<span class="k">${esc(it.k)}</span></div>`).join('')};
  inp.addEventListener('input',()=>{idx=0;draw()});
  inp.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){idx=Math.min(idx+1,items.length-1);draw();e.preventDefault()}if(e.key==='ArrowUp'){idx=Math.max(idx-1,0);draw();e.preventDefault()}if(e.key==='Enter'){const el=document.querySelectorAll('.pal-item')[idx];if(el)el.click()}});
  draw();setTimeout(()=>inp.focus(),30);
}
/* Procesar bandeja (Clarify GTD) */
function renderClarify(){
  const C=U.clar;const t=task(C.q[C.i]);
  if(!t){modal(`<div class="clar" style="text-align:center;padding:10px 0">${LOGO.replace('<svg','<svg style="width:64px;height:64px;margin:0 auto 10px;display:block"')}<h2>Bandeja vacía</h2><p class="cap">Has procesado ${C.q.length} elementos. Mente como el agua.</p><div class="row" style="justify-content:center"><button class="btn primary" data-act="close">Cerrar</button></div></div>`);render();return}
  const head=`<div class="clar"><div class="step">Procesando ${C.i+1} de ${C.q.length}</div><div class="item">${esc(t.title)}</div>`;
  const opt=(v,b,s)=>`<button class="opt" data-act="cl" data-v="${v}"><b>${b}</b><span>${s}</span></button>`;
  let body='';
  if(C.step==='q1')body=`<p class="q">¿Requiere alguna acción?</p><div class="opts">${opt('yes','Sí, requiere acción','Definiremos el siguiente paso físico y visible')}${opt('no','No','Eliminar, aparcar o guardar como referencia')}</div>`;
  if(C.step==='no')body=`<p class="q">¿Qué hacemos con ello?</p><div class="opts">${opt('trash','Eliminar','No aporta nada')}${opt('someday','Algún día / Quizás','Podría interesarte más adelante')}${opt('ref','Guardar como referencia','Información útil sin acción asociada')}</div>`;
  if(C.step==='two')body=`<p class="q">¿Se puede hacer en menos de 2 minutos?</p><div class="opts">${opt('now','Sí: hazlo ahora','Se marca como completada')}${opt('long','No, lleva más tiempo','Continuar')}</div>`;
  if(C.step==='who')body=`<p class="q">¿Te corresponde hacerlo a ti?</p><div class="opts">${opt('me','Sí, lo hago yo','Asignar proyecto, fechas y contexto')}${opt('deleg','Delegar','Pasará a la lista En espera')}</div>`;
  if(C.step==='deleg')body=`<label class="field"><span>¿A quién se lo delegas?</span><input class="inp" id="cl-who" placeholder="Persona o área"></label><div class="row end"><button class="btn primary" data-act="cl" data-v="saveDeleg">Mover a En espera</button></div>`;
  if(C.step==='org')body=`<div class="stack"><div class="frow"><label class="field"><span>Proyecto</span><select class="inp" id="cl-p"><option value="">Acción suelta</option>${S.projects.filter(p=>p.status==='active').map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></label><label class="field"><span>Contexto</span><select class="inp" id="cl-c"><option value="">—</option>${S.contexts.map(c=>`<option>${esc(c)}</option>`).join('')}</select></label></div>
   <div class="frow3"><label class="field"><span>Fecha</span><input class="inp" type="date" id="cl-d"></label><label class="field"><span>Fecha límite</span><input class="inp" type="date" id="cl-dl" value="${t.deadline||''}"></label><label class="field"><span>Prioridad</span><select class="inp" id="cl-pr">${[1,2,3,4].map(n=>`<option value="${n}" ${n===t.priority?'selected':''}>P${n}</option>`).join('')}</select></label></div></div><div class="row end"><button class="btn primary" data-act="cl" data-v="saveOrg">Guardar y siguiente</button></div>`;
  modal(head+body+`<div class="row"><button class="btn ghost sm" data-act="cl" data-v="skip">Saltar</button><button class="btn ghost sm" data-act="close">Terminar más tarde</button></div></div>`);
}
function clarStep(v){
  const C=U.clar,t=task(C.q[C.i]);const next=()=>{C.i++;C.step='q1';save();renderClarify()};
  if(v==='yes')C.step=S.settings.twoMinute?'two':'who';
  else if(v==='no')C.step='no';
  else if(v==='long')C.step='who';
  else if(v==='deleg')C.step='deleg';
  else if(v==='me')C.step='org';
  else if(v==='trash'){S.tasks=S.tasks.filter(x=>x.id!==t.id);return next()}
  else if(v==='someday'){t.status='someday';t.inbox=false;return next()}
  else if(v==='ref'){t.status='reference';t.inbox=false;return next()}
  else if(v==='now'){t.status='done';t.completed=nowLocal();t.completedBy=ME;t.inbox=false;return next()}
  else if(v==='skip')return next();
  else if(v==='saveDeleg'){t.status='waiting';t.waitingFor=$('#cl-who').value.trim()||'Sin asignar';t.waitingSince=TODAY;t.inbox=false;return next()}
  else if(v==='saveOrg'){t.projectId=$('#cl-p').value||null;const c=$('#cl-c').value;if(c)t.contexts=[c];t.due=$('#cl-d').value||null;t.deadline=$('#cl-dl').value||null;t.priority=+$('#cl-pr').value;t.inbox=false;return next()}
  renderClarify();
}
/* Proyectos */
const COLORS=['#5F7F6A','#4E6A8A','#8A6D3B','#9A5B6B','#6B6399','#3F7F7A','#B0703C','#7A7F3A','#5B6770','#A34E4E'];
const TPL={
  none:{n:'Proyecto vacío',s:[],t:[]},
  com:{n:'Comisionamiento de equipo',s:['Preparación','Instalación','Pruebas FAT/SAT','Formación y entrega'],t:[['Definir alcance y responsables','Preparación'],['Revisar documentación del fabricante','Preparación'],['Checklist de seguridad de máquina','Instalación'],['Prueba SAT con producto','Pruebas FAT/SAT'],['Formación de operadores','Formación y entrega'],['Acta de entrega y lecciones aprendidas','Formación y entrega']]},
  dmaic:{n:'Proyecto Lean Six Sigma (DMAIC)',s:['Definir','Medir','Analizar','Mejorar','Controlar'],t:[['Redactar el project charter','Definir'],['Mapa SIPOC','Definir'],['Plan de recogida de datos y MSA','Medir'],['Diagrama de Ishikawa y 5 porqués','Analizar'],['Plan de acción y pilotos','Mejorar'],['Plan de control y estandarización','Controlar']]},
  kaizen:{n:'Evento Kaizen',s:['Antes','Durante','Después'],t:[['Seleccionar equipo y área','Antes'],['Recoger datos de la situación actual','Antes'],['Gemba walk inicial','Durante'],['Implementar mejoras rápidas','Durante'],['Seguimiento a 30 días','Después']]},
  personal:{n:'Proyecto personal',s:['Ideas','Por hacer','Compras'],t:[]}
};
function openProjectModal(id){
  const p=id?proj(id):null;
  modal(`<h2>${p?'Editar proyecto':'Nuevo proyecto'}</h2><div class="stack">
  <label class="field"><span>Nombre</span><input class="inp" id="pm-name" value="${esc(p?.name||'')}" placeholder="Ej.: Reducción de mermas en llenadora"></label>
  <label class="field"><span>Resultado deseado</span><input class="inp" id="pm-goal" value="${esc(p?.goal||'')}" placeholder="¿Cómo sabrás que está terminado?"></label>
  <div class="frow"><label class="field"><span>Área</span><select class="inp" id="pm-area">${S.areas.map(a=>`<option value="${a.id}" ${p?.area===a.id?'selected':''}>${esc(a.name)}</option>`).join('')}</select></label>
  <label class="field"><span>Revisar cada</span><select class="inp" id="pm-rev">${[[7,'Semana'],[14,'2 semanas'],[30,'Mes']].map(([n,l])=>`<option value="${n}" ${(p?.reviewEvery||7)==n?'selected':''}>${l}</option>`).join('')}</select></label></div>
  ${p?'':`<label class="ck" style="padding:4px 0"><input type="checkbox" id="pm-share"><span><b>Compartir con otras personas</b><br><span class="cap">Genera un código para que otra persona se una y añada tareas</span></span></label>`}
  ${p?'':`<label class="field"><span>Plantilla</span><select class="inp" id="pm-tpl">${Object.entries(TPL).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join('')}</select></label>`}
  <div class="field"><span class="flabel">Color</span><div class="swatches">${COLORS.map((c,i)=>`<button style="--c:${c}" class="${(p?p.color===c:i===0)?'on':''}" data-act="swatch" data-c="${c}" aria-label="Color ${i+1}"></button>`).join('')}</div></div></div>
  ${p?`<div class="row">${p.status!=='active'?`<button class="btn sm" data-act="projStatus" data-id="${p.id}" data-v="active">Reactivar</button>`:`<button class="btn sm" data-act="projStatus" data-id="${p.id}" data-v="paused">Poner en pausa</button><button class="btn sm" data-act="projStatus" data-id="${p.id}" data-v="done">${ic('check',15)} Completar proyecto</button>`}</div>`:''}
  ${p?`<div class="row"><button class="btn sm danger" data-act="delProject" data-id="${p.id}">${ic('trash',15)} Eliminar proyecto</button></div>`:''}
  <div class="row end"><button class="btn ghost" data-act="close">Cancelar</button><button class="btn primary" data-act="saveProject" ${p?`data-id="${p.id}"`:''}>${p?'Guardar':'Crear proyecto'}</button></div>`);
  setTimeout(()=>$('#pm-name').focus(),30);
}
function saveProject(id){
  const name=$('#pm-name').value.trim();if(!name)return toast('El proyecto necesita un nombre',{icon:'close'});
  const color=document.querySelector('.swatches .on')?.dataset.c||COLORS[0];
  if(id){const p=proj(id);Object.assign(p,{name,goal:$('#pm-goal').value.trim(),area:$('#pm-area').value,reviewEvery:+$('#pm-rev').value,color})}
  else{const tp=TPL[$('#pm-tpl').value];const p={id:uid(),ownerId:ME,shareCode:null,position:S.projects.length,name,goal:$('#pm-goal').value.trim(),area:$('#pm-area').value,color,sections:[...tp.s],status:'active',reviewEvery:+$('#pm-rev').value,lastReview:TODAY};S.projects.push(p);
    tp.t.forEach(([ti,se])=>S.tasks.push(newTask({title:ti,projectId:p.id,section:se,priority:3})));
    U.view='project';U.project=p.id}
  const share=!id&&$('#pm-share')&&$('#pm-share').checked;const newId=U.project;
  save();closeModal();render();toast(id?'Proyecto actualizado':'Proyecto creado: '+esc(name));
  if(share){(async()=>{try{await flush();const c=await rpc('compartir_proyecto',{p_project:newId,p_nuevo:false});const pp=proj(newId);if(pp){pp.shareCode=c;persistLocal();openShareModal(newId);render()}}catch(e){toast('El proyecto se ha creado, pero no se pudo generar el código: '+esc(e.message),{icon:'close',warn:true})}})()}
}
function openFilterModal(){
  modal(`<h2>Nuevo filtro</h2><div class="stack"><label class="field"><span>Nombre</span><input class="inp" id="fm-name" placeholder="Ej.: Cosas rápidas en planta"></label>
  <div class="frow"><label class="field"><span>Prioridad mínima</span><select class="inp" id="fm-prio"><option value="">Cualquiera</option>${[1,2,3].map(n=>`<option value="${n}">P${n} o superior</option>`).join('')}</select></label>
  <label class="field"><span>Contexto</span><select class="inp" id="fm-ctx"><option value="">Cualquiera</option>${S.contexts.map(c=>`<option>${esc(c)}</option>`).join('')}</select></label></div>
  <div class="frow"><label class="field"><span>Fecha en los próximos</span><select class="inp" id="fm-due"><option value="">Sin límite</option>${[1,3,7,14,30].map(n=>`<option value="${n}">${n} días</option>`).join('')}</select></label>
  <label class="field"><span>Fecha límite en los próximos</span><select class="inp" id="fm-dl"><option value="">Sin límite</option>${[3,7,14,30].map(n=>`<option value="${n}">${n} días</option>`).join('')}</select></label></div>
  <div class="frow"><label class="field"><span>Duración máxima</span><select class="inp" id="fm-est"><option value="">Cualquiera</option>${[5,15,30,60].map(n=>`<option value="${n}">${fmtMin(n)}</option>`).join('')}</select></label>
  <label class="field"><span>Proyecto</span><select class="inp" id="fm-proj"><option value="">Todos</option>${S.projects.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></label></div></div>
  <div class="row end"><button class="btn ghost" data-act="close">Cancelar</button><button class="btn primary" data-act="saveFilter">Guardar filtro</button></div>`);
}
function saveFilter(){const name=$('#fm-name').value.trim()||'Filtro sin nombre';const q={};const g=(id,k,num=true)=>{const v=$(id).value;if(v)q[k]=num?+v:v};g('#fm-prio','maxPrio');g('#fm-ctx','context',false);g('#fm-due','dueWithin');g('#fm-dl','deadlineWithin');g('#fm-est','maxEst');g('#fm-proj','projectId',false);const f={id:uid(),name,q};S.filters.push(f);U.view='filter';U.filter=f.id;save();closeModal();render()}

/* ================== Teclado ================== */
document.addEventListener('keydown',e=>{
  const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&S){e.preventDefault();openPalette();return}
  if(e.key==='Escape'){if(!$('#modal').hidden)closeModal();else if(U.notif){U.notif=false;$('#notif').hidden=true}else if(U.sel){U.sel=null;render()}return}
  if(typing||!$('#modal').hidden||!S||PK)return;
  if(e.key==='q'||e.key==='n'){e.preventDefault();openQuick('')}
  if(e.key==='/'){e.preventDefault();openPalette()}
});

/* ---------- Ajustes ---------- */
V.settings=()=>{
  const s=S.settings;
  const sw=(k)=>`<button class="switch ${s[k]?'on':''}" data-act="toggleSet" data-k="${k}" role="switch" aria-checked="${!!s[k]}" aria-label="${k}"></button>`;
  const base=(CFG.SUPABASE_URL||'').replace(/\/+$/,'');
  let code='';try{code=localStorage.getItem('summit-sc-'+ME)||''}catch(e){}
  let ck='';try{ck=localStorage.getItem('summit-ck-'+ME)||''}catch(e){}
  const row=(l,ctrl)=>`<div class="set"><div class="l"><b>${l}</b></div>${ctrl}</div>`;
  const copyRow=(l,v,id)=>`<div class="set"><div class="l" style="min-width:0"><b>${l}</b><span class="mono" style="overflow-wrap:anywhere" id="${id}">${esc(v)}</span></div><button class="btn sm" data-act="copyTxt" data-src="${id}">${ic('copy',15)} Copiar</button></div>`;
  const sel=(id,opts,cur)=>`<select class="inp" id="${id}" style="width:auto">${opts.map(([v,l])=>`<option value="${v}" ${cur==v?'selected':''}>${l}</option>`).join('')}</select>`;
  const grp=(key,icon,title,val,body)=>`<details class="sgroup" data-key="${key}" ${U[key]?'open':''}><summary>${ic(icon,18)}<b>${title}</b>${val?`<span class="sv">${val}</span>`:''}</summary><div class="sbody">${body}</div></details>`;
  return vh('Ajustes')+`<div class="sgroups">
  ${grp('sgAcc','user','Cuenta',esc(S.me.name),row('Nombre',`<input class="inp" id="set-name" value="${esc(S.me.name)}" style="width:min(200px,100%)">`)+row(esc(MEMAIL),`<button class="btn sm" data-act="logout">Cerrar sesión</button>`))}
  ${grp('sgView','sun','Apariencia',({system:'Automático',light:'Claro',dark:'Oscuro'})[s.theme],
    row('Tema',`<div class="seg">${[['system','Auto'],['light','Claro'],['dark','Oscuro']].map(([k,l])=>`<button class="${s.theme===k?'on':''}" data-act="setTheme" data-v="${k}">${l}</button>`).join('')}</div>`)+
    row('Más detalles en las listas',sw('detailed'))+row('Carga del día en Hoy',sw('showPlan'))+
    `<details class="more"><summary>Cómo leer una tarea</summary><div class="leg"><span><button class="check p1" tabindex="-1" aria-hidden="true"></button>Prioridad</span><span><span class="bdg today">Hoy</span><span class="bdg late">Ayer</span>Fecha</span><span><span class="bdg dl hot">${ic('flag',11)}2 d</span>Días a la fecha límite</span><span><span class="av-s">C</span>Persona</span><span><span style="color:var(--faint);display:inline-flex;gap:4px">${ic('repeat',13)}${miniRing(1,3)}${ic('note',13)}</span>Repite · subtareas · notas</span></div></details>`)}
  ${grp('sgNot','bell','Avisos',s.leadDays+(s.leadDays==1?' día antes':' días antes'),
    row('Avisar antes de la fecha límite',sel('set-lead',[1,2,3,5,7].map(n=>[n,n+(n===1?' día':' días')]),s.leadDays))+
    row('Avisar de vencidas',sw('notifyOverdue'))+
    row('Día de revisión semanal',sel('set-rev',WDC.map((w,i)=>[i,w]),s.reviewDay))+
    row('Notificaciones',`<button class="btn sm" data-act="askPerm">Activar</button>`))}
  ${grp('sgPlan','target','Planificación','',row('Capacidad diaria',sel('set-cap',[240,360,420,480,540,600].map(n=>[n,fmtMin(n)]),s.capacity))+row('Regla de los 2 minutos',sw('twoMinute')))}
  ${grp('sgAreas','folder','Áreas y contextos',S.areas.length+' áreas · '+S.contexts.length+' contextos',
    `<div class="flabel">Áreas</div><div class="editlist">${S.areas.map(a=>`<div class="erow"><input class="inp" id="area-${a.id}" data-area="${a.id}" value="${esc(a.name)}" aria-label="Nombre del área">${S.projects.some(p=>p.area===a.id)?'':`<button class="iconbtn" data-act="delArea" data-id="${a.id}" aria-label="Eliminar área">${ic('trash',16)}</button>`}</div>`).join('')}<div class="erow"><input class="inp" id="area-new" placeholder="+ Nueva área"></div></div>
    <div class="flabel" style="margin-top:12px">Contextos</div><div class="ctxs" style="margin-top:6px">${S.contexts.map(c=>`<button class="on" data-act="delCtx" data-v="${esc(c)}" title="Quitar">@${esc(c)} ×</button>`).join('')}</div><div class="erow" style="margin-top:8px"><input class="inp" id="ctx-new" placeholder="+ Nuevo contexto"></div>`)}
  ${grp('sgSc','bolt','Atajos de iPhone',S.hasShortcut?'Activo':'',
    `<div class="set"><div class="l"><b>Código personal</b></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn sm ${S.hasShortcut?'':'primary'}" data-act="scNew">${S.hasShortcut?'Nuevo código':'Generar'}</button>${S.hasShortcut?'<button class="btn sm danger" data-act="scRevoke">Revocar</button>':''}</div></div>
    ${code?copyRow('Tu código',code,'sc-code'):''}${copyRow('URL para capturar',base+'/rest/v1/rpc/summit_capturar_tarea','sc-url')}${copyRow('URL del resumen',base+'/rest/v1/rpc/summit_resumen','sc-url2')}${copyRow('Clave (apikey)',CFG.SUPABASE_ANON_KEY||'','sc-key')}
    <details class="more" data-key="scSteps" ${U.scSteps?'open':''}><summary>Crear «Capturar en Summit»</summary><ol class="steps">
      <li><b>Atajos → +</b>. Añade <b>Solicitar entrada</b> (Texto).</li>
      <li>Añade <b>Obtener contenido de URL</b>: URL para capturar · <b>POST</b> · encabezados <code>apikey</code> y <code>Content-Type: application/json</code> · cuerpo JSON <code>p_codigo</code> y <code>p_texto</code> (Entrada proporcionada).</li>
      <li>Añade <b>Mostrar notificación</b> con el resultado.</li>
      <li>Asígnalo al <b>Botón de Acción</b>, a un widget o a Siri.</li></ol></details>
    <details class="more" data-key="scSteps2" ${U.scSteps2?'open':''}><summary>Crear el resumen de cada mañana</summary><ol class="steps">
      <li><b>Atajos → Automatización → Hora del día</b> (07:00, diariamente, ejecutar inmediatamente).</li>
      <li><b>Obtener contenido de URL</b>: URL del resumen · POST · mismos encabezados · JSON con <code>p_codigo</code>.</li>
      <li><b>Mostrar notificación</b> con el resultado.</li></ol></details>`)}
  ${grp('sgCl','sparkle','Claude',S.hasClaude?'Conectado':'',
    `<div class="set"><div class="l"><b>Clave del conector</b>${S.hasClaude&&S.claudeUsed?`<span>Último uso ${fmtDate(iso(new Date(S.claudeUsed))).toLowerCase()}</span>`:''}</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn sm ${S.hasClaude?'':'primary'}" data-act="ckNew">${S.hasClaude?'Nueva clave':'Generar'}</button>${S.hasClaude?'<button class="btn sm danger" data-act="ckRevoke">Revocar</button>':''}</div></div>
    ${ck?copyRow('URL del conector (privada)',base+'/functions/v1/summit-mcp?key='+ck,'ck-url'):''}
    <details class="more" data-key="ckSteps" ${U.ckSteps?'open':''}><summary>Añadirlo en Claude</summary><ol class="steps">
      <li>Copia la URL del conector.</li>
      <li>Claude → <b>Personalizar → Conectores → + → Añadir conector personalizado</b>.</li>
      <li>Nombre <b>Summit</b>, pega la URL, <b>sin inicio de sesión</b>.</li></ol></details>`)}
  ${grp('sgData','copy','Datos',QUEUE.length?QUEUE.length+' sin enviar':'Sincronizado',
    row(QUEUE.length?QUEUE.length+' cambios pendientes':'Todo sincronizado',`<button class="btn sm" data-act="syncNow">Sincronizar</button>`)+row('Copia de seguridad (JSON)',`<button class="btn sm" data-act="exportJson">Descargar</button>`)+row('Atajos de teclado',`<button class="btn sm" data-act="shortcuts">Ver</button>`))}
  </div><p class="cap" style="text-align:center;margin:14px 0 0">Summit ${APP_VERSION}</p>`;
};
/* ---------- Proyectos compartidos ---------- */
function openShareModal(pid){
  const p=proj(pid);if(!p)return;const ms=membersOf(p.id);const own=isOwner(p);
  const list=`<div class="members">${ms.map(m=>`<div class="mrow"><span class="av-s">${esc(initial(m.name))}</span><span class="mn">${esc(m.name||'Miembro')}${m.userId===ME?' (tú)':''}</span><span class="mr">${m.role==='owner'?'Propietario':'Miembro'}</span>${own&&m.userId!==ME?`<button class="iconbtn" data-act="kick" data-p="${p.id}" data-u="${m.userId}" aria-label="Quitar a ${esc(m.name)}">${ic('close',15)}</button>`:''}</div>`).join('')}</div>`;
  if(own){
    modal(`<h2>Compartir «${esc(p.name)}»</h2>
    <p class="cap">Quien se una verá y podrá añadir tareas a este proyecto. El resto de tu Summit sigue siendo privado.</p>
    ${p.shareCode?`<div class="codebox"><span class="mono" id="share-code">${esc(p.shareCode)}</span><button class="btn sm" data-act="copyTxt" data-src="share-code">${ic('copy',15)} Copiar</button></div>
    <p class="cap">Se une con el icono ${ic('join',14)} junto a <b>Proyectos</b>.</p>`:`<div class="row"><button class="btn primary" data-act="shareGen" data-id="${p.id}">Generar código para compartir</button></div>`}
    <div class="flabel" style="margin-top:14px">Personas (${ms.length})</div>${list}
    <div class="row">${p.shareCode?`<button class="btn sm" data-act="shareGen" data-id="${p.id}" data-new="1">Generar código nuevo</button><button class="btn sm ghost" data-act="shareStop" data-id="${p.id}">Dejar de aceptar personas</button>`:''}<span style="flex:1"></span><button class="btn" data-act="close">Cerrar</button></div>`);
  }else{
    modal(`<h2>${esc(p.name)}</h2><p class="cap">Proyecto compartido por ${esc(personName(p.ownerId))}. Puedes añadir, completar y asignar tareas.</p>
    <div class="flabel" style="margin-top:10px">Personas (${ms.length})</div>${list}
    <div class="row"><button class="btn sm danger" data-act="leave" data-id="${p.id}">Abandonar proyecto</button><span style="flex:1"></span><button class="btn" data-act="close">Cerrar</button></div>`);
  }
}
function openJoinModal(){
  modal(`<h2>Unirse a un proyecto</h2><p class="cap">Escribe el código que te han pasado.</p>
  <input class="inp mono" id="join-code" placeholder="SUM-XXXX-XXXX-XXXX" autocomplete="off" autocapitalize="characters" style="font-size:17px;padding:10px">
  <p class="auth-msg err" id="join-msg"></p>
  <div class="row end"><button class="btn ghost" data-act="close">Cancelar</button><button class="btn primary" data-act="joinGo">Unirme</button></div>`);
  setTimeout(()=>$('#join-code').focus(),30);
}
async function rpc(name,args){if(!sb)throw new Error('Sin conexión. Inténtalo cuando vuelva la red.');const{data,error}=await sb.rpc(name,args||{});if(error)throw new Error(traducir(error.message));return data}
A.shareProject=el=>openShareModal(el.dataset.id);
A.joinProject=()=>openJoinModal();
A.shareGen=async el=>{try{await flush();const c=await rpc('compartir_proyecto',{p_project:el.dataset.id,p_nuevo:!!el.dataset.new});const p=proj(el.dataset.id);p.shareCode=c;persistLocal();openShareModal(p.id);render()}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.shareStop=async el=>{try{await rpc('dejar_de_compartir',{p_project:el.dataset.id});const p=proj(el.dataset.id);p.shareCode=null;persistLocal();openShareModal(p.id);toast('Ya nadie más puede unirse. Las personas actuales siguen dentro.')}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.kick=async el=>{try{await rpc('quitar_miembro',{p_project:el.dataset.p,p_user:el.dataset.u});await loadAll();openShareModal(el.dataset.p);render()}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.leave=async el=>{if(!el.dataset.ok){el.dataset.ok='1';el.textContent='Pulsa otra vez para confirmar';return}try{await rpc('abandonar_proyecto',{p_project:el.dataset.id});closeModal();U.view='today';await loadAll();render();toast('Has salido del proyecto')}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.joinGo=async()=>{const c=$('#join-code').value.trim();if(!c)return;try{await flush();const pid=await rpc('unirse_a_proyecto',{p_codigo:c});await loadAll();closeModal();U.view='project';U.project=pid;render();toast('Te has unido a «'+esc(proj(pid)?.name||'proyecto')+'»')}catch(e){$('#join-msg').textContent=e.message}};

/* ---------- Acciones de ajustes y cuenta ---------- */
A.logout=()=>signOut();
A.ckNew=async el=>{if(S.hasClaude&&!el.dataset.ok){el.dataset.ok='1';el.textContent='Pulsa otra vez: la URL anterior dejará de funcionar';return}try{const c=await rpc('generar_clave_claude');try{localStorage.setItem('summit-ck-'+ME,c)}catch(e){}S.hasClaude=true;S.claudeUsed=null;U.ckSteps=true;renderView();toast('Clave generada. Copia la URL del conector en Claude.')}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.ckRevoke=async el=>{if(!el.dataset.ok){el.dataset.ok='1';el.textContent='Pulsa otra vez para revocar';return}try{await rpc('revocar_clave_claude');try{localStorage.removeItem('summit-ck-'+ME)}catch(e){}S.hasClaude=false;renderView();toast('Claude ya no tiene acceso a tu Summit.',{icon:'close'})}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.syncNow=async()=>{await flush();try{await loadAll();render();toast(QUEUE.length?'Quedan cambios pendientes: sin conexión':'Sincronizado')}catch(e){toast('Sin conexión',{icon:'cloud'})}};
A.scNew=async()=>{try{const c=await rpc('generar_codigo_atajo');try{localStorage.setItem('summit-sc-'+ME,c)}catch(e){}S.hasShortcut=true;U.scSteps=true;renderView();toast('Código generado. Cópialo en tus atajos.')}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.scRevoke=async el=>{if(!el.dataset.ok){el.dataset.ok='1';el.textContent='Pulsa otra vez para revocar';return}try{await rpc('revocar_codigo_atajo');try{localStorage.removeItem('summit-sc-'+ME)}catch(e){}S.hasShortcut=false;renderView();toast('Código revocado. Tus atajos dejarán de funcionar hasta que pongas uno nuevo.',{icon:'close'})}catch(e){toast(esc(e.message),{icon:'close',warn:true})}};
A.copyTxt=el=>{const t=$('#'+el.dataset.src).textContent;try{navigator.clipboard.writeText(t).then(()=>toast('Copiado'),()=>toast('Selecciona el texto y cópialo',{icon:'copy'}))}catch(e){toast('Selecciona el texto y cópialo',{icon:'copy'})}};
A.exportJson=()=>{const data=JSON.stringify({app:'Summit',version:APP_VERSION,exportado:new Date().toISOString(),cuenta:MEMAIL,areas:S.areas,proyectos:S.projects,tareas:S.tasks,enfoque:S.focusLog,ajustes:profileRow()},null,1);const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));a.download='summit-'+TODAY+'.json';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)};
A.delArea=el=>{S.areas=S.areas.filter(a=>a.id!==el.dataset.id);save();renderView()};
A.delCtx=el=>{S.contexts=S.contexts.filter(c=>c!==el.dataset.v);save();renderView()};
A.delProject=el=>{if(!el.dataset.ok){el.dataset.ok='1';el.textContent='Pulsa otra vez: se borrarán también sus tareas';return}const id=el.dataset.id;S.tasks=S.tasks.filter(t=>t.projectId!==id);S.projects=S.projects.filter(p=>p.id!==id);U.view='today';U.sel=null;save();closeModal();render();toast('Proyecto eliminado',{icon:'trash'})};
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.id==='set-name'){const v=el.value.trim();if(v){S.me.name=v;const m=Object.values(S.members).flat().filter(x=>x.userId===ME);m.forEach(x=>x.name=v);save();renderSidebar()}}
  if(el.dataset&&el.dataset.area){const a=S.areas.find(x=>x.id===el.dataset.area);if(a&&el.value.trim()){a.name=el.value.trim();save();renderSidebar()}}
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;const el=e.target;
  if(el.id==='area-new'&&el.value.trim()){S.areas.push({id:uid(),name:el.value.trim(),position:S.areas.length});save();renderView();setTimeout(()=>$('#area-new')&&$('#area-new').focus(),20)}
  if(el.id==='ctx-new'&&el.value.trim()){const v=el.value.trim().replace(/^@/,'');if(!S.contexts.includes(v))S.contexts.push(v);save();renderView();setTimeout(()=>$('#ctx-new')&&$('#ctx-new').focus(),20)}
  if(el.id==='join-code'){e.preventDefault();A.joinGo()}
});
A.askPerm=async()=>{try{if(!('Notification' in window))throw 0;let p=Notification.permission;if(p==='default')p=await Notification.requestPermission();if(p!=='granted')throw 0;S.settings.sysNotif=true;save();notify('Summit','Notificaciones activadas')}catch(e){toast('Este navegador no permite notificaciones. En iPhone, instala Summit en la pantalla de inicio y usa el resumen diario del atajo.',{icon:'bell',ms:7000})}renderView()};

/* ================== Arranque ================== */
const APP_VERSION='1.2.2';
function afterStart(){
  const q=new URLSearchParams(location.search);
  const add=q.get('add'),view=q.get('view');
  if(q.has('add')||view)history.replaceState(null,'',location.pathname);
  if(view&&V[view]){U.view=view;render()}
  if(q.has('add'))setTimeout(()=>openQuick(add?add+' ':''),350);
  if(location.hash&&/access_token|type=/.test(location.hash))history.replaceState(null,'',location.pathname);
  const a=alerts().filter(x=>x.k!=='rem');
  if(a.length){const x=a[0];setTimeout(()=>notify(x.k==='overdue'?'Fecha límite vencida':x.k==='today'?'Fecha límite hoy':'Fecha límite próxima',x.t.title+' · '+x.txt,{warn:true,icon:'flag',btn:'Ver',fn:()=>{U.sel=x.t.id;render()},ms:7000}),1400)}
}
function showLibError(){
  const a=$('#auth');a.hidden=false;$('#app').hidden=true;
  a.innerHTML=`<div class="auth-card">${LOGO.replace('<svg','<svg class="auth-logo"')}<h1>Summit</h1><p>No se ha podido cargar Summit. Comprueba la conexión a internet y pulsa Reintentar.</p><button class="btn primary auth-go" onclick="location.reload()">Reintentar</button><p class="cap" style="margin-top:10px;opacity:.6">Versión ${APP_VERSION} · falta supabase.min.js</p></div>`;
}
/* Si la librería de Supabase no cargó pero el dispositivo ya tiene tus datos, Summit abre igualmente
   sin conexión y vuelve a intentar cargarla cada 20 s o al volver la red; entonces sincroniza. */
const LIB_URLS=['supabase.min.js','https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.min.js','https://unpkg.com/@supabase/supabase-js@2.117.2/dist/umd/supabase.min.js'];
let libTrying=false;
function retryLib(){
  if(window.supabase||libTrying)return;libTrying=true;let i=0;
  const next=()=>{if(window.supabase||i>=LIB_URLS.length){libTrying=false;if(window.supabase)libReady();return}
    const s=document.createElement('script');s.src=LIB_URLS[i++]+(i===1?'?r='+Date.now():'');s.onload=next;s.onerror=next;document.head.appendChild(s)};
  next();
}
function libReady(){
  if(sb||!window.supabase)return;makeClient();
  sb.auth.getSession().then(r=>{const ses=r.data&&r.data.session;if(ses&&ses.user.id===ME){syncAll(true)}else if(!ses&&!(r.error&&isNetErr(r.error)))sessionExpired()}).catch(()=>{});
}
function makeClient(){
  sb=window.supabase.createClient(CFG.SUPABASE_URL.replace(/\/+$/,'').replace(/\/rest\/v1$/,''),CFG.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true},db:{schema:'summit',retry:false}});
  sb.auth.onAuthStateChange(ev=>{if(ev==='PASSWORD_RECOVERY')setTimeout(()=>showAuth('newpass'),0)});
}
function showConfigError(){
  const a=$('#auth');a.hidden=false;$('#app').hidden=true;
  a.innerHTML=`<div class="auth-card">${LOGO.replace('<svg','<svg class="auth-logo"')}<h1>Summit</h1><p>Falta configurar la conexión con Supabase. Edita el archivo <b>config.js</b> en GitHub con la URL y la clave de tu proyecto (paso 2 de la guía).</p></div>`;
}
$('.menu-btn').innerHTML=ic('menu',20);
$('#b-search').innerHTML=ic('search',19);$('#b-add').innerHTML=ic('plus',16)+' Añadir tarea';$('#fab').innerHTML=ic('plus',26);
applyTheme();
(function splash(){
  const sp=$('#splash');let seen=false;try{seen=sessionStorage.getItem('summit-splash')==='1';sessionStorage.setItem('summit-splash','1')}catch(e){}
  const reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(seen){sp.remove();return}
  setTimeout(()=>{sp.classList.add('out');setTimeout(()=>sp.remove(),450)},reduce?200:1250);
})();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
(async function boot(){
  if(typeof CFG==='undefined'||!CFG||!CFG.SUPABASE_URL||/TU-PROYECTO/i.test(CFG.SUPABASE_URL)||!CFG.SUPABASE_ANON_KEY||/TU-CLAVE/i.test(CFG.SUPABASE_ANON_KEY)){showConfigError();return}
  if(!window.supabase){
    const lu=lastUser();
    if(lu&&hasCacheFor(lu.id)){await start(lu,true);setSync('offline');window.addEventListener('online',retryLib);setInterval(retryLib,20000);retryLib();return}
    showLibError();return;
  }
  const recovering=/type=recovery/.test(location.hash);
  const hp=new URLSearchParams(location.hash.slice(1)||location.search.slice(1));const linkErr=hp.get('error_code')||hp.get('error');
  if(linkErr)history.replaceState(null,'',location.pathname);
  makeClient();
  // Arranque instantáneo: si este dispositivo ya tiene tus datos, se abre con ellos sin esperar a la red
  const lu0=lastUser();
  if(lu0&&hasCacheFor(lu0.id)&&!recovering&&!linkErr){
    await start(lu0,true);
    sb.auth.getSession().then(r=>{
      const ses=r.data&&r.data.session;
      if(ses&&ses.user.id===lu0.id){rememberUser(ses.user);syncAll(true);return}
      if(ses){location.reload();return}
      const er=r.error;
      if(er&&(isNetErr(er)||er.name==='AuthRetryableFetchError'||!er.status||er.status>=500)){SYNC_FAIL=true;setSync('offline');return}
      if(navigator.onLine===false){SYNC_FAIL=true;setSync('offline');return}
      sessionExpired();
    }).catch(()=>{SYNC_FAIL=true;setSync('offline')});
    return;
  }
  let session=null,sessErr=null;try{const r=await withTimeout(sb.auth.getSession(),8000);session=r.data.session;sessErr=r.error}catch(e){sessErr=e}
  if(recovering&&!linkErr){showAuth('newpass');return}
  if(linkErr&&!session){showAuth('reset',{text:/expired/.test(linkErr)?'El enlace del correo ha caducado o ya se usó. Pide un código nuevo aquí.':'El enlace del correo no es válido. Pide un código nuevo aquí.',err:true});return}
  if(session){await start(session.user);return}
  const lu=lastUser();
  if(lu&&hasCacheFor(lu.id)){
    const offline=navigator.onLine===false||(sessErr&&(isNetErr(sessErr)||sessErr.name==='AuthRetryableFetchError'||/timeout/i.test(sessErr.message||'')));
    if(offline){await start(lu,true);return}
    if(!sessErr){await start(lu,true);sessionExpired();return}
  }
  showAuth('login');
})();
setInterval(()=>{if(!S)return;refreshToday();const now=new Date(),hm=pad(now.getHours())+':'+pad(now.getMinutes());myT().forEach(t=>{if(isOpen(t)&&t.due===TODAY&&t.time===hm&&t._n!==TODAY){t._n=TODAY;notify('Recordatorio',t.title+' · ahora',{icon:'bell'})}})},30000);
