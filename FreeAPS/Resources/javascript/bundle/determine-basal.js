var freeaps_determineBasal;(()=>{var e={5546:(e,r,a)=>{var t=a(6880);function o(e,r){r||(r=0);var a=Math.pow(10,r);return Math.round(e*a)/a}function n(e,r){return"mmol/L"===r.out_units?o(.0555*e,1):Math.round(e)}var i="",s="",l="",u="",m="",d="",c="",p="",b="",f="",g="",h="",B="",v=1,_=1,M=1,S=1,x=1,y=1,I=100;function F(e,r,a,t,i){if(void 0===a)return rT.error="Error: iob_data undefined. ",rT;var l=a;if(a.length,a.length>1&&(a=l[0]),void 0===a.activity||void 0===a.iob)return rT.error="Error: iob_data missing some property. ",rT;if(!t)return s=", autoISF-SMB disabled:, B30 running","AIMI B30";if(!e)return"oref";var u=n(r.min_bg,r);if(r.use_autoisf&&r.temptargetSet&&r.enableSMB_EvenOn_OddOff||r.use_autoisf&&r.min_bg==r.max_bg&&r.enableSMB_EvenOn_OddOff_always&&!r.temptargetSet){r.temptargetSet?msgType="TempTarget ":msgType="ProfileTarget ","mmol/L"==r.out_units?(evenTarget=o(10*u,0)%2==0,msgUnits=" has ",msgTail=" decimal"):(evenTarget=u%2==0,msgUnits=" is ",msgTail=" number"),evenTarget?msgEven="even":msgEven="odd",r.iob_threshold_percent<100&&r.iob_threshold_percent>0&&(I=r.iob_threshold_percent);var m=I;return evenTarget?0==r.max_iob?(console.error("SMB disabled because of maxIOB=0"),"blocked"):m/100<a.iob/(r.max_iob*i)?(console.error("iobTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),1!=i?(console.error("Full Loop modified maxIOB "+r.max_iob+" to effectively "+o(r.max_iob*i,2)+" due to profile % and/or exercise mode"),", effective maxIOB "+o(r.max_iob*i,2)):", maxIOB "+r.max_iob,s=", autoISF-SMB disabled:, iobTH exceeded",console.error("SMB disabled by Full Loop logic: IOB "+a.iob+" is more than "+m+"% of maxIOB "+r.max_iob),console.error("Full Loop capped"),"iobTH"):(console.error("SMB enabled - "+msgType+u+msgUnits+msgEven+msgTail),u<100?(console.error("iobTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),console.error("Loop at full power"),s=", autoISF-SMB enabled:, even TT","fullLoop"):(console.error("iobTH: "+o(m,1)+"%, IOB% of maxIOB at "+o(a.iob/(r.max_iob*i)*100,1)+"%"),s=", autoISF-SMB enabled:, even Target",console.error("Loop at medium power"),"enforced")):(console.error("SMB disabled - "+msgType+u+msgUnits+msgEven+msgTail),s=", autoISF-SMB disabled:, odd Target",console.error("Loop at minimum power"),"blocked")}return console.error("Full Loop disabled"),"oref"}function T(e,r,a){"bg"==a?(polyX=[50,60,80,90,100,110,150,180,200],polyY=[-.5,-.5,-.3,-.2,0,0,.5,.7,.7]):"delta"==a&&(polyX=[2,7,12,16,20],polyY=[0,0,.4,.7,.7]);var t=polyX.length-1,o=polyX[0],n=polyY[0],i=polyX[t],s=polyY[t],l=1,u=1,m=1,d=o;if(o>e)i=polyX[1],l=(u=n)+((s=polyY[1])-u)/(i-(m=o))*(e-m);else if(i<e)o=polyX[t-1],l=(u=n=polyY[t-1])+(s-u)/(i-(m=o))*(e-m);else for(var c=0;c<=t;c++){if(o=polyX[c],n=polyY[c],o==e){l=n;break}if(o>e){l=u+(n-u)/(o-(m=d))*(e-m);break}u=n,d=o}return l*="delta"==a?r.delta_ISFrange_weight:e>100?r.higher_ISFrange_weight:r.lower_ISFrange_weight}function w(e,r,a,t,n,i,s,l,u){console.error("check ratio "+o(e,2)+" against autoISF min: "+r+" and autoISF max: "+a),e<r?(b=" (lmtd.min)",c="weakest autoISF factor "+o(e,2)+" limited by autoISF_min "+r,console.error(c),e=r):e>a&&(b=" (lmtd.max)",c="strongest autoISF factor "+o(e,2)+" limited by autoISF_max "+a,console.error(c),e=a);var m=1;return s&&i.temptargetSet&&l>u?(m=e*t,n=" (exerciseMode)",console.error("autoISF adjusts sens "+t+", instead of profile.sens "+i.sens),f=n):e>=1?(m=Math.max(e,t),e>=t&&(n="")):(m=Math.min(e,t),e<=t&&(n="")),c="final ISF factor "+o(m,2)+n,console.error(c),m}e.exports=function(e,r,a,D,O,C,G,U,A,R,P,E,k,j,q){var L=0,W="",z="",H="",N="",X="",Y=0,Z=0,$=0,J=0,K=0,Q=0;const V=j.tddYtd,ee=j.tdd7d,re=j.hbt,ae=j.isEnabled;function te(e,r){var a=e.getTime();return new Date(a+36e5*r)}function oe(e){var r=D.bolus_increment;.025!=r&&(r=.05);var a=e/r;return a>=1?o(Math.floor(a)*r,5):0}function ne(e){function r(e){return e<10&&(e="0"+e),e}return r(e.getHours())+":"+r(e.getMinutes())+":00"}function ie(e,r){var a=new Date("1/1/1999 "+e),t=new Date("1/1/1999 "+r);return(a.getTime()-t.getTime())/36e5}function se(e,r){var a=0,t=r,o=(e-r)/36e5,n=0,i=o,s=0;do{if(o>0){var l=ne(t);k[0].rate;for(let e=0;e<k.length;e++){var u=k[e].start;if(l==u){if(e+1<k.length){o>=(s=ie(k[e+1].start,k[e].start))?n=s:o<s&&(n=o)}else if(e+1==k.length){let r=k[0].start;o>=(s=24-ie(k[e].start,r))?n=s:o<s&&(n=o)}a+=oe(k[e].rate*n),o-=n,t=te(t,n)}else if(l>u)if(e+1<k.length){var m=k[e+1].start;l<m&&(o>=(s=ie(m,l))?n=s:o<s&&(n=o),a+=oe(k[e].rate*n),o-=n,t=te(t,n))}else if(e==k.length-1){o>=(s=ie("23:59:59",l))?n=s:o<s&&(n=o),a+=oe(k[e].rate*n),o-=n,t=te(t,n)}}}}while(o>0&&o<i);return a}if(P.length){let e=P.length-1;var le=new Date(P[e].timestamp),ue=new Date(P[0].timestamp);if("TempBasalDuration"==P[0]._type&&(ue=new Date),(L=(ue-le)/36e5)<23.9&&L>21)K=se(le,(me=24-L,de=le.getTime(),new Date(de-36e5*me))),N="24 hours of data is required for an accurate tdd calculation. Currently only "+L.toPrecision(3)+" hours of pump history data are available. Using your pump scheduled basals to fill in the missing hours. Scheduled basals added: "+K.toPrecision(5)+" U. ";else N=""}else console.log("Pumphistory is empty!"),dynISFenabled=!1,enableDynamicCR=!1;var me,de,ce=0,pe=0;o((new Date(De).getTime()-C.lastBolusNormalTime)/6e4,1);for(let e=0;e<P.length;e++)if("Bolus"==P[e]._type&&(J+=P[e].amount,0==ce&&P[e].amount>=D.iTime_Start_Bolus)){ce=t(P[e].amount,D);var be=new Date(P[e].timestamp);pe=o((new Date-be)/36e5*60)}for(let e=1;e<P.length;e++)if("TempBasal"==P[e]._type&&P[e].rate>0){Y=e,Q=P[e].rate;var fe=P[e-1]["duration (min)"]/60,ge=fe,he=new Date(P[e-1].timestamp),Be=he;do{if(e--,0==e){Be=new Date;break}if("TempBasal"==P[e]._type||"PumpSuspend"==P[e]._type){Be=new Date(P[e].timestamp);break}}while(e>0);var ve=(Be-he)/36e5;ve<ge&&(fe=ve),$+=oe(Q*fe),e=Y}for(let e=0;e<P.length;e++)if(0,0==P[e]["duration (min)"]||"PumpResume"==P[e]._type){let r=new Date(P[e].timestamp),a=r,t=e;do{if(t>0&&(--t,"TempBasal"==P[t]._type)){a=new Date(P[t].timestamp);break}}while(t>0);(a-r)/36e5>0&&(K+=se(a,r))}for(let e=P.length-1;e>0;e--)if("TempBasalDuration"==P[e]._type){let r=P[e]["duration (min)"]/60,a=new Date(P[e].timestamp);var _e=a;let t=e;do{if(--t,t>=0&&("TempBasal"==P[t]._type||"PumpSuspend"==P[t]._type)){_e=new Date(P[t].timestamp);break}}while(t>0);if(0==e&&"TempBasalDuration"==P[0]._type&&(_e=new Date,r=P[e]["duration (min)"]/60),(_e-a)/36e5-r>0){K+=se(_e,te(a,r))}}var Me={TDD:o(Z=J+$+K,5),bolus:o(J,5),temp_basal:o($,5),scheduled_basal:o(K,5)},Se=Z;L>21?(z=". Bolus insulin: "+J.toPrecision(5)+" U",H=". Temporary basal insulin: "+$.toPrecision(5)+" U",W=". Insulin with scheduled basal rate: "+K.toPrecision(5)+" U",X=N+(" TDD past 24h is: "+Z.toPrecision(5)+" U")+z+H+W,tddReason=", TDD, 24h: "+o(Z,1)+", ytd: "+o(V,1)+", 7dØ: "+o(ee,1),console.error(X)):tddReason=", TDD: Not enough pumpData (< 21h)";var xe={},ye=0,Ie=0,Fe=new Date;if(R&&(Fe=new Date(R)),void 0===D||void 0===D.current_basal)return xe.error="Error: could not get current basal rate",xe;var Te=t(D.current_basal,D),we=Te,De=new Date;R&&(De=new Date(R));var Oe,Ce=new Date(e.date),Ge=o((De-Ce)/60/1e3,1),Ue=e.glucose,Ae=e.noise;Oe=n(e.delta,D);var Re=Math.min(e.delta,e.short_avgdelta),Pe=Math.min(e.short_avgdelta,e.long_avgdelta),Ee=Math.max(e.delta,e.short_avgdelta,e.long_avgdelta);(Ue<=10||38===Ue||Ae>=3)&&(xe.reason="CGM is calibrating, in ??? state, or noise is high");if(Ge>12||Ge<-5?xe.reason="If current system time "+De+" is correct, then BG data is too old. The last BG data was read "+Ge+"m ago at "+Ce:Ue>60&&e.cgmFlatMinutes>89&&(e.last_cal&&e.last_cal<3?xe.reason="CGM was just calibrated":xe.reason="Error: CGM data was suspiciously flat for the past ~"+o(e.cgmFlatMinutes,1)+"m"),Ue<=10||38===Ue||Ae>=3||Ge>12||Ge<-5||Ue>60&&e.cgmFlatMinutes>89||0===e.short_avgdelta&&0===e.long_avgdelta)return r.rate>we?(xe.reason+=". Replacing high temp basal of "+r.rate+" with neutral temp of "+we,xe.deliverAt=Fe,xe.temp="absolute",xe.duration=30,xe.rate=we,xe):0===r.rate&&r.duration>30?(xe.reason+=". Shortening "+r.duration+"m long zero temp to 30m. ",xe.deliverAt=Fe,xe.temp="absolute",xe.duration=30,xe.rate=0,xe):(xe.reason+=". Temp "+r.rate+" <= current basal "+o(we,2)+"U/hr; doing nothing. ",xe);var ke,je,qe,Le,We=D.max_iob;if(void 0!==D.min_bg&&(je=D.min_bg),void 0!==D.max_bg&&(qe=D.max_bg),void 0!==D.enableSMB_high_bg_target&&(Le=D.enableSMB_high_bg_target),void 0===D.min_bg||void 0===D.max_bg)return xe.error="Error: could not determine target_bg. ",xe;ke=(D.min_bg+D.max_bg)/2;var ze=1,He="",Ne=D.exercise_mode||D.high_temptarget_raises_sensitivity,Xe=100,Ye=160;D.half_basal_exercise_target&&(Ye=D.half_basal_exercise_target),ae&&(Ye=re);var Ze=1;if(Ne&&D.temptargetSet&&ke>Xe||D.low_temptarget_lowers_sensitivity&&D.temptargetSet&&ke<Xe){var $e=Ye-Xe;ze=$e*($e+ke-Xe)<=0?D.autosens_max:$e/($e+ke-Xe),Ze=ze=o(ze=Math.min(ze,D.autosens_max),2),He=" from TT modifier",g+=", Ratio TT: "+ze,process.stderr.write("Sensitivity ratio set to "+ze+" based on temp target of "+ke+"; ")}else void 0!==O&&O&&D.enable_autosens&&(ze=O.ratio,He=" from Autosens",B=", autosens:, "+o(ze,2),process.stderr.write("Autosens ratio: "+ze+"; "));var Je=Ze;if(ze&&(we=D.current_basal*ze,(we=t(we,D))!==Te?process.stderr.write("Adjusting basal from "+Te+" to "+we+"; "):process.stderr.write("Basal unchanged: "+we+"; ")),D.temptargetSet);else if(void 0!==O&&O&&(D.sensitivity_raises_target&&O.ratio<1||D.resistance_lowers_target&&O.ratio>1)){je=o((je-60)/O.ratio)+60,qe=o((qe-60)/O.ratio)+60;var Ke=o((ke-60)/O.ratio)+60;ke===(Ke=Math.max(80,Ke))?process.stderr.write("target_bg unchanged: "+Ke+"; "):process.stderr.write("target_bg from "+ke+" to "+Ke+"; "),ke=Ke}var Qe=200,Ve=200,er=200;if(e.noise>=2){var rr=Math.max(1.1,D.noisyCGMTargetMultiplier);Math.min(250,D.maxRaw);Qe=o(Math.min(200,je*rr)),Ve=o(Math.min(200,ke*rr)),er=o(Math.min(200,qe*rr)),process.stderr.write("Raising target_bg for noisy / raw CGM data, from "+ke+" to "+Ve+"; "),je=Qe,ke=Ve,qe=er}var ar=.5;D.smb_threshold_ratio>.5&&D.smb_threshold_ratio<=1&&(ar=D.smb_threshold_ratio);var tr=je-(1-ar)*(je-40);console.log("SMB Threshold set to "+ar+" - no SMB's applied below "+n(tr,D));var or=o(D.sens,1),nr=D.sens;void 0!==O&&O&&((nr=o(nr=D.sens/ze,1))!==or?process.stderr.write("ISF from "+n(or,D)+" to "+n(nr,D)):process.stderr.write("ISF unchanged: "+n(nr,D))),console.error("CR: "+D.carb_ratio),console.error("----------------------------------"),console.error(" start autoISF"),console.error("----------------------------------");var ir=!0,sr=!1,lr=r.rate,ur=D.b30_duration,mr=ur+1;if(console.error("B30 enabled: "+D.use_B30),D.use_B30&&D.use_autoisf){var dr=D.iTime_Start_Bolus,cr=D.iTime_target,pr=D.b30_upperBG,br=D.b30_upperdelta,fr=D.b30_factor,gr=!1;D.temptargetSet&&(gr=!0);var hr=pe;0==hr&&(hr=1);var Br=ce;console.error("B30 last bolus above limit of "+dr+"U was "+Br+"U, "+hr+"m ago"),Br>=dr&&hr<=ur&&gr&&ke==cr&&(mr=hr,sr=!0,console.error("B30 iTime is running : "+mr+"m because manual bolus ("+Br+") >= Minimum Start Bolus size ("+dr+") and EatingSoon TT set at "+n(cr,D))),console.error("B30 Activation: "+sr),console.error("B30 TTset: "+gr+", at "+ke+", last Bolus of "+Br+"U, "+hr+"m ago. iTime remaining: "+(ur-mr)+"m."),sr&&(e.delta<=br&&Ue<pr&&(ir=!1),mr<=ur&&(lr=t(we*fr,D),h="AIMI B30, Temp "+lr+"U/hr for "+(ur-mr)+"m, "))}var vr=F(U,D,a,ir,Je),_r=!1;if(U&&"oref"!=vr?("enforced"!=vr&&"fullLoop"!=vr||(_r=!0),console.error("loop_smb function overriden with autoISF checks, enableSMB = "+_r)):(_r=function(e,r,a,t,o,i){return r?!e.allowSMB_with_high_temptarget&&e.temptargetSet&&o>100?(console.error("SMB disabled due to high temptarget of "+o),!1):!0===a.bwFound&&!1===e.A52_risk_enable?(console.error("SMB disabled due to Bolus Wizard activity in the last 6 hours."),!1):!0===e.enableSMB_always?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled due to enableSMB_always"),!0):!0===e.enableSMB_with_COB&&a.mealCOB?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for COB of"+a.mealCOB),!0):!0===e.enableSMB_after_carbs&&a.carbs?(a.bwCarbs?console.error("Warning: SMB enabled with Bolus Wizard carbs: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for 6h after carb entry"),!0):!0===e.enableSMB_with_temptarget&&e.temptargetSet&&o<100?(a.bwFound?console.error("Warning: SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("SMB enabled for temptarget of "+n(o,e)),console.error("SMB enabled for temptargets with "+n(o,e)),!0):!0===e.enableSMB_high_bg&&null!==i&&t>=i?(console.error("Checking BG to see if High for SMB enablement."),console.error("Current BG",t," | High BG ",i),a.bwFound?console.error("Warning: High BG SMB enabled within 6h of using Bolus Wizard: be sure to easy bolus 30s before using Bolus Wizard"):console.error("High BG detected. Enabling SMB."),!0):(console.error("SMB disabled (no enableSMB preferences active or no condition satisfied)"),!1):(console.error("SMB disabled (!microBolusAllowed)"),!1)}(D,U,C,Ue,ke,Le),console.error("loop_smb function returns enableSMB = "+_r)),nr=function(e,r,a,t,g,h,B,I,F,D,O,C){if(!t.use_autoisf)return console.error("autoISF disabled in Preferences"),i+=", autoISF disabled",e;if(t.autoISF_off_Sport&&(t.high_temptarget_raises_sensitivity||t.exercise_mode)&&t.temptargetSet&&a>C)return console.error("autoISF disabled due to exercise"),i+=", autoISF disabled (exercise)",e;const G=g.dura_p,U=g.delta_pl,A=g.delta_pn,R=g.r_squ,P=g.bg_acceleration,E=g.a_0,k=g.a_1,j=g.a_2,q=g.dura_ISF_minutes,L=g.dura_ISF_average;t.autoISF_min;var W=t.autoISF_max,z=!1,H=e,N=a+10-g.glucose,X=g.pp_debug;if("bg_acceleration: "+o(P,3)+", PF-minutes: "+G+", PF-corr: "+o(R,4)+", PF-nextDelta: "+n(A,t)+", PF-lastDelta: "+n(U,t)+", regular Delta: "+n(g.delta,t),console.error(X),t.enable_BG_acceleration){var Y=R;if(0!=j&&Y>=.9){var Z=-k/2/j*5,$=o(E-Z*Z/25*j,1);(Z=o(Z,1))>0&&P<0?(p="predicts a Max of "+n($,t)+", in about "+Math.abs(Z)+"min",console.error("Parabolic fit "+p)):Z>0&&P>0?(p="predicts a Min of "+n($,t)+", in about "+Math.abs(Z)+"min",console.error("Parabolic fit "+p),Z<=30&&$<a&&(_=-t.bgBrake_ISF_weight,p="predicts BG below target soon, applying bgBrake ISF weight of "+-_,console.error("Parabolic fit "+p))):Z<0&&P<0?(p="saw Max of "+n($,t)+", about "+Math.abs(Z)+"min ago",console.error("Parabolic fit "+p)):Z<0&&P>0&&(p="saw Min of "+n($,t)+", about "+Math.abs(Z)+"min ago",console.error("Parabolic fit "+p))}if(Y<.9)p="acce_ISF by-passed, as correlation, "+o(Y,2)+", is too low",console.error("Parabolic fit "+p),d+=", Parabolic Fit:, "+p;else{var J=10*(Y-.9),K=1;1==_&&g.glucose<t.target_bg?P>0?(P>1&&(K=.5),_=t.bgBrake_ISF_weight):P<0&&(_=t.bgAccel_ISF_weight):1==_&&(P<0?_=t.bgBrake_ISF_weight:P>0&&(_=t.bgAccel_ISF_weight)),(v=1+P*K*_*J)<0&&(v=.1),console.error(d+"acce_ISF adaptation is "+o(v,2)),1!=v&&(z=!0,d+=", Parabolic Fit:, "+p+", acce-ISF Ratio:, "+o(v,2))}}else console.error("autoISF BG accelertion adaption disabled in Preferences");i+=s+d+", autoISF",M=1+T(100-N,t,"bg"),console.error("bg_ISF adaptation is "+o(M,2));var Q=1,V=1;if(M<1)return Q=Math.min(M,v),v>1?(c="bg-ISF adaptation lifted to "+o(Q=M*v,2)+", as BG accelerates already",console.error(c),i+=", bg-ISF Ratio: "+o(Q,2)+"(accel.)"):i+=", bg-ISF Ratio: "+o(Q,2)+"(minimal)",V=w(Q,t.autoISF_min,W,F,r,t,O,a,C),H=Math.min(720,o(t.sens/V,1)),i+=", final Ratio: "+o(V,2)+f+b+", final ISF: "+n(t.sens,t)+"→"+n(H,t),H;M>1&&(z=!0,i+=", bg-ISF Ratio: "+o(M,2));var ee=g.delta,re=new Date,ae="";B&&(re=new Date(B)),t.enable_pp_ISF_always||t.pp_ISF_hours>=(re-new Date(h.lastCarbTime))/1e3/3600?deltaType="pp":deltaType="delta",N>0?console.error(deltaType+"_ISF adaptation by-passed as average glucose < "+a+"+10"):g.short_avgdelta<0?console.error(deltaType+"_ISF adaptation by-passed as no rise or too short lived"):"pp"==deltaType?(x=1+Math.max(0,ee*t.pp_ISF_weight),t.enable_pp_ISF_always||(ae=", last Meal "+o((re-h.lastCarbTime)/1e3/3600,1)+" hrs ago is within Range of "+t.pp_ISF_hours+" hrs."),console.error("pp_ISF adaptation is "+o(x,2)+ae),u=", pp-ISF Ratio: "+o(x,2),1!=x&&(z=!0)):(S=T(ee,t,"delta"),N>-20&&(S*=.5),S=1+S,console.error("delta_ISF adaptation is "+o(S,2)),m=", Δ-ISF Ratio: "+o(S,2),1!=S&&(z=!0));var te=t.dura_ISF_weight;h.mealCOB>0&&!t.enableautoisf_with_COB?console.error("dura_ISF by-passed; preferences disabled mealCOB of "+o(h.mealCOB,1)):q<10?console.error("dura_ISF by-passed; BG is only "+q+"m at level "+L):L<=a?console.error("dura_ISF by-passed; avg. glucose "+L+" below target "+n(a,t)):(y+=q/60*(te/a)*(L-a),z=!0,l=", Duration: "+q+", Avg: "+n(L,t)+", dura-ISF Ratio: "+o(y,2),console.error("dura_ISF adaptation is "+o(y,2)+" because ISF "+e+" did not do it for "+o(q,1)+"m"));return z?(Q=Math.max(y,M,S,v,x),console.error("autoISF adaption ratios:"),console.error("  acce "+o(v,2)),console.error("  bg "+o(M,2)),console.error("  dura "+o(y,2)),console.error("  pp "+o(x,2)),console.error("  delta "+o(S,2)),v<1&&(c="strongest autoISF factor "+o(Q,2)+" weakened to "+o(Q*v,2)+" as bg decelerates already",console.error(c),Q*=v),V=w(Q,t.autoISF_min,W,F,r,t,O,a,C),H=o(t.sens/V,1),i+=u+m+l+", final Ratio: "+o(V,2)+f+b+", final ISF: "+n(t.sens,t)+"→"+n(H,t),H):(i+=", not modified",console.error("autoISF does not modify"),H)}(nr,He,ke,D,e,C,R,0,ze,0,Ne,Xe),console.error("----------------------------------"),console.error(" end autoISF"),console.error("----------------------------------"),void 0===a)return xe.error="Error: iob_data undefined. ",xe;var Mr,Sr=a;if(a.length,a.length>1&&(a=Sr[0]),void 0===a.activity||void 0===a.iob)return xe.error="Error: iob_data missing some property. ",xe;var xr=((Mr=void 0!==a.lastTemp?o((new Date(De).getTime()-a.lastTemp.date)/6e4):0)+r.duration)%30;if(console.error("currenttemp:"+r.rate+" lastTempAge:"+Mr+"m, tempModulus:"+xr+"m"),xe.temp="absolute",xe.deliverAt=Fe,U&&r&&a.lastTemp&&r.rate!==a.lastTemp.rate&&Mr>10&&r.duration)return xe.reason="Warning: currenttemp rate "+r.rate+" != lastTemp rate "+a.lastTemp.rate+" from pumphistory; canceling temp",G.setTempBasal(0,0,D,xe,r);if(r&&a.lastTemp&&r.duration>0){var yr=Mr-a.lastTemp.duration;if(yr>5&&Mr>10)return xe.reason="Warning: currenttemp running but lastTemp from pumphistory ended "+yr+"m ago; canceling temp",G.setTempBasal(0,0,D,xe,r)}var Ir=o(-a.activity*nr*5,2),Fr=o(6*(Re-Ir));Fr<0&&(Fr=o(6*(Pe-Ir)))<0&&(Fr=o(6*(e.long_avgdelta-Ir)));var Tr=Ue,wr=(Tr=a.iob>0?o(Ue-a.iob*nr):o(Ue-a.iob*Math.min(nr,D.sens)))+Fr;if(void 0===wr||isNaN(wr))return xe.error="Error: could not calculate eventualBG. Sensitivity: "+nr+" Deviation: "+Fr,xe;var Dr=function(e,r,a){return o(a+(e-r)/24,1)}(ke,wr,Ir);xe={temp:"absolute",bg:n(Ue,D),tick:Oe,eventualBG:wr,insulinReq:0,reservoir:A,deliverAt:Fe,sensitivityRatio:ze,TDD:Se,insulin:Me};var Or=[],Cr=[],Gr=[],Ur=[];Or.push(Ue),Cr.push(Ue),Ur.push(Ue),Gr.push(Ue);var Ar=D.enableUAM,Rr=0,Pr=0;Rr=o(Re-Ir,1);var Er=o(Re-Ir,1);csf=nr/D.carb_ratio,console.error("profile.sens:"+n(D.sens,D)+", sens:"+n(nr,D)+", CSF:"+o(csf,1));var kr=o(30*csf*5/60,1);Rr>kr&&(console.error("Limiting carb impact from "+Rr+" to "+kr+"mg/dL/5m (30g/h)"),Rr=kr);var jr=3;ze&&(jr/=ze);var qr=jr;if(C.carbs){jr=Math.max(jr,C.mealCOB/20);var Lr=o((new Date(De).getTime()-C.lastCarbTime)/6e4),Wr=(C.carbs-C.mealCOB)/C.carbs;qr=o(qr=jr+1.5*Lr/60,1),console.error("Last carbs "+Lr+" minutes ago; remainingCATime:"+qr+"hours; "+o(100*Wr)+"% carbs absorbed")}var zr=Math.max(0,Rr/5*60*qr/2)/csf,Hr=90,Nr=1;D.remainingCarbsCap&&(Hr=Math.min(90,D.remainingCarbsCap)),D.remainingCarbsFraction&&(Nr=Math.min(1,D.remainingCarbsFraction));var Xr=1-Nr,Yr=Math.max(0,C.mealCOB-zr-C.carbs*Xr),Zr=(Yr=Math.min(Hr,Yr))*csf*5/60/(qr/2),$r=o(C.slopeFromMaxDeviation,2),Jr=o(C.slopeFromMinDeviation,2),Kr=Math.min($r,-Jr/3),Qr=0;0===Rr?Pr=0:!0===D.floating_carbs?(Pr=Math.min(60*qr/5/2,Math.max(0,C.carbs*csf/Rr)),Qr=Math.min(60*qr/5/2,Math.max(0,C.mealCOB*csf/Rr)),C.carbs>0&&(i+=", Floating Carbs:, CID: "+o(Pr,1)+", MealCarbs: "+o(C.carbs,1)+", Not Floating:, CID: "+o(Qr,1)+", MealCOB: "+o(C.mealCOB,1),console.error("Floating Carbs CID: "+o(Pr,1)+" / MealCarbs: "+o(C.carbs,1)+" vs. Not Floating:"+o(Qr,1)+" / MealCOB:"+o(C.mealCOB,1)))):Pr=Math.min(60*qr/5/2,Math.max(0,C.mealCOB*csf/Rr)),console.error("Carb Impact:"+Rr+"mg/dL per 5m; CI Duration:"+o(5*Pr/60*2,1)+"hours; remaining CI ("+o(qr/2,2)+"h peak):",o(Zr,1)+"mg/dL per 5m");var Vr,ea,ra,aa,ta,oa=999,na=999,ia=999,sa=Ue,la=999,ua=999,ma=999,da=999,ca=wr,pa=Ue,ba=Ue,fa=0,ga=[],ha=[];try{Sr.forEach((function(e){var r=o(-e.activity*nr*5,2),a=o(-e.iobWithZeroTemp.activity*nr*5,2),t=Rr*(1-Math.min(1,Cr.length/12));ca=Cr[Cr.length-1]+r+t;var n=Ur[Ur.length-1]+a,i=Math.max(0,Math.max(0,Rr)*(1-Or.length/Math.max(2*Pr,1))),s=Math.min(Or.length,12*qr-Or.length),l=Math.max(0,s/(qr/2*12)*Zr);i+l,ga.push(o(l,0)),ha.push(o(i,0)),COBpredBG=Or[Or.length-1]+r+Math.min(0,t)+i+l;var u=Math.max(0,Er+Gr.length*Kr),m=Math.max(0,Er*(1-Gr.length/Math.max(36,1))),d=Math.min(u,m);d>0&&(fa=o(5*(Gr.length+1)/60,1)),UAMpredBG=Gr[Gr.length-1]+r+Math.min(0,t)+d,Cr.length<48&&Cr.push(ca),Or.length<48&&Or.push(COBpredBG),Gr.length<48&&Gr.push(UAMpredBG),Ur.length<48&&Ur.push(n),COBpredBG<la&&(la=o(COBpredBG)),UAMpredBG<ua&&(ua=o(UAMpredBG)),ca<ma&&(ma=o(ca)),n<da&&(da=o(n));Cr.length>18&&ca<oa&&(oa=o(ca)),ca>pa&&(pa=ca),(Pr||Zr>0)&&Or.length>18&&COBpredBG<na&&(na=o(COBpredBG)),(Pr||Zr>0)&&COBpredBG>pa&&(ba=COBpredBG),Ar&&Gr.length>12&&UAMpredBG<ia&&(ia=o(UAMpredBG)),Ar&&UAMpredBG>pa&&UAMpredBG}))}catch(e){console.error("Problem with iobArray.  Optional feature Advanced Meal Assist disabled")}xe.predBGs={},Cr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))}));for(var Ba=Cr.length-1;Ba>12&&Cr[Ba-1]===Cr[Ba];Ba--)Cr.pop();for(xe.predBGs.IOB=Cr,ra=o(Cr[Cr.length-1]),Ur.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),Ba=Ur.length-1;Ba>6&&!(Ur[Ba-1]>=Ur[Ba]||Ur[Ba]<=ke);Ba--)Ur.pop();if(xe.predBGs.ZT=Ur,o(Ur[Ur.length-1]),C.mealCOB>0&&(Rr>0||Zr>0)){for(Or.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),Ba=Or.length-1;Ba>12&&Or[Ba-1]===Or[Ba];Ba--)Or.pop();xe.predBGs.COB=Or,aa=o(Or[Or.length-1]),wr=Math.max(wr,o(Or[Or.length-1]))}if(Rr>0||Zr>0){if(Ar){for(Gr.forEach((function(e,r,a){a[r]=o(Math.min(401,Math.max(39,e)))})),Ba=Gr.length-1;Ba>12&&Gr[Ba-1]===Gr[Ba];Ba--)Gr.pop();xe.predBGs.UAM=Gr,ta=o(Gr[Gr.length-1]),Gr[Gr.length-1]&&(wr=Math.max(wr,o(Gr[Gr.length-1])))}xe.eventualBG=wr}console.error("UAM Impact:"+Er+"mg/dL per 5m; UAM Duration:"+fa+"hours"),oa=Math.max(39,oa),na=Math.max(39,na),ia=Math.max(39,ia),Vr=o(oa);var va=C.mealCOB/C.carbs;ea=o(ia<999&&na<999?(1-va)*UAMpredBG+va*COBpredBG:na<999?(ca+COBpredBG)/2:ia<999?(ca+UAMpredBG)/2:ca),da>ea&&(ea=da),sa=o(sa=Pr||Zr>0?Ar?va*la+(1-va)*ua:la:Ar?ua:ma);var _a=ia;if(da<tr)_a=(ia+da)/2;else if(da<ke){var Ma=(da-tr)/(ke-tr);_a=(ia+(ia*Ma+da*(1-Ma)))/2}else da>ia&&(_a=(ia+da)/2);if(_a=o(_a),C.carbs)if(!Ar&&na<999)Vr=o(Math.max(oa,na));else if(na<999){var Sa=va*na+(1-va)*_a;Vr=o(Math.max(oa,na,Sa))}else Vr=Ar?_a:sa;else Ar&&(Vr=o(Math.max(oa,_a)));Vr=Math.min(Vr,ea),process.stderr.write("minPredBG: "+n(Vr,D)+" minIOBPredBG: "+n(oa,D)+" minZTGuardBG: "+n(da,D)),na<999&&process.stderr.write(" minCOBPredBG: "+n(na,D)),ia<999&&process.stderr.write(" minUAMPredBG: "+n(ia,D)),console.error(" avgPredBG:"+n(ea,D)+" COB/Carbs:"+C.mealCOB+"/"+C.carbs),ba>Ue&&(Vr=Math.min(Vr,ba)),xe.COB=C.mealCOB,xe.IOB=a.iob,xe.BGI=n(Ir,D),xe.deviation=n(Fr,D),xe.dura_ISFratio=o(y,2),xe.bg_ISFratio=o(M,2),xe.delta_ISFratio=o(S,2),xe.pp_ISFratio=o(x,2),xe.acce_ISFratio=o(v,2),xe.auto_ISFratio=o(D.sens/nr,2),xe.ISF=n(nr,D),xe.CR=o(D.carb_ratio,2),xe.TDD=o(Se,1),xe.TDDytd=o(V,1),xe.TDD7d=o(ee,1),xe.target_bg=n(ke,D),xe.minDelta=Re,xe.expectedDelta=Dr,xe.minGuardBG=sa,xe.minPredBG=Vr;var xa=function(e,r,a,t){if(!e.use_autoisf)return console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),.5;var n=e.smb_delivery_ratio_bg_range;n<10&&(n/=.0555);var i=e.smb_delivery_ratio,s=Math.min(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max),l=Math.max(e.smb_delivery_ratio_min,e.smb_delivery_ratio_max),u=a+n,m=i;return n>0&&(m=s+(l-s)*(r-a)/n,m=Math.max(s,Math.min(l,m))),"fullLoop"==t?(console.error("SMB delivery ratio set to "+o(Math.max(i,m),2)+" as max of fixed and interpolated values"),Math.max(i,m)):0==n?(console.error("SMB delivery ratio set to fixed value "+o(i,2)),i):r<=a?(console.error("SMB delivery ratio limited by minimum value "+o(s,2)),s):r>=u?(console.error("SMB delivery ratio limited by maximum value "+o(l,2)),l):(console.error("SMB delivery ratio set to interpolated value "+o(m,2)),m)}(D,Ue,ke,vr);xe.SMBratio=o(xa,2);var ya="SMB Del.Ratio:, "+o(xa,2);let Ia="";""!==q&&"Nothing changed"!==q&&(Ia="Middleware:, "+q+", "),xe.reason=Ia+h+ya+B+g+i+", Standard, COB: "+xe.COB+", Dev: "+xe.deviation+", BGI: "+xe.BGI+", ISF: "+xe.ISF+", CR: "+xe.CR+", Target: "+xe.target_bg+", minPredBG "+n(Vr,D)+", minGuardBG "+n(sa,D)+", IOBpredBG "+n(ra,D),aa>0&&(xe.reason+=", COBpredBG "+n(aa,D)),ta>0&&(xe.reason+=", UAMpredBG "+n(ta,D)),xe.reason+=tddReason,xe.reason+="; ";var Fa=Tr;Fa<40&&(Fa=Math.min(sa,Fa));var Ta=tr-Fa,wa=240,Da=240;if(C.mealCOB>0&&(Rr>0||Zr>0)){for(Ba=0;Ba<Or.length;Ba++)if(Or[Ba]<je){wa=5*Ba;break}for(Ba=0;Ba<Or.length;Ba++)if(Or[Ba]<tr){Da=5*Ba;break}}else{for(Ba=0;Ba<Cr.length;Ba++)if(Cr[Ba]<je){wa=5*Ba;break}for(Ba=0;Ba<Cr.length;Ba++)if(Cr[Ba]<tr){Da=5*Ba;break}}_r&&sa<tr&&(console.error("minGuardBG "+n(sa,D)+" projected below "+n(tr,D)+" - disabling SMB"),Ie=1,ye=o((wr-ke)/nr,2),_r=!1);var Oa=.2;"fullLoop"==vr&&(Oa=.3),Ee>Oa*Ue&&(console.error("maxDelta "+n(Ee,D)+" > "+100*Oa+"% of BG "+n(Ue,D)+" - disabling SMB"),xe.reason+="maxDelta "+n(Ee,D)+" > "+100*Oa+"% of BG "+n(Ue,D)+" - SMB disabled!, ",_r=!1),console.error("BG projected to remain above "+n(je,D)+" for "+wa+"minutes"),(Da<240||wa<60)&&console.error("BG projected to remain above "+n(tr,D)+" for "+Da+"minutes");var Ca=Da,Ga=D.current_basal*nr*Ca/60,Ua=Math.max(0,C.mealCOB-.25*C.carbs),Aa=(Ta-Ga)/csf-Ua;if(Ga=o(Ga),Aa=o(Aa),console.error("naive_eventualBG: "+n(Tr,D)+", bgUndershoot: "+n(Ta,D)+", zeroTempDuration: "+Ca+", zeroTempEffect: "+Ga+", carbsReq: "+Aa),"Could not parse clock data"==C.reason?console.error("carbsReq unknown: Could not parse clock data"):Aa>=D.carbsReqThreshold&&Da<=45&&(xe.carbsReq=Aa,xe.reason+=Aa+" add'l carbs req w/in "+Da+"m; "),sr&&mr<=ur)return xe.reason+="setting AIMI B30 Temp "+t(lr,D)+"U/hr for "+(ur-mr)+"m ",xe.temp="absolute",xe.deliverAt=Fe,xe.duration=Math.min(30,ur-mr),console.error("Forcing AIMI temp "+lr+"U/hr"),G.setTempBasal(lr,30,D,xe,r);var Ra=0;if(Ue<tr&&a.iob<20*-D.current_basal/60&&Re>0&&Re>Dr)xe.reason+="IOB "+a.iob+" < "+o(20*-D.current_basal/60,2),xe.reason+=" and minDelta "+n(Re,D)+" > expectedDelta "+n(Dr,D)+"; ";else if(Ue<tr||sa<tr)return xe.reason+="minGuardBG "+n(sa,D)+"<"+n(tr,D),sa<tr&&(Ie=2),ye=o((wr-ke)/nr,2),Ra=o(60*((Ta=ke-sa)/nr)/D.current_basal),Ra=30*o(Ra/30),Ra=Math.min(120,Math.max(30,Ra)),G.setTempBasal(0,Ra,D,xe,r);if(D.skip_neutral_temps&&xe.deliverAt.getMinutes()>=55){if(!_r)return xe.reason+="; Canceling temp at "+(60-xe.deliverAt.getMinutes())+"min before turn of the hour to avoid beeping of MDT. SMB disabled anyways.",G.setTempBasal(0,0,D,xe,r);console.error(60-xe.deliverAt.getMinutes()+"min before turn of the hour, but SMB's are enabled - no skipping neutral temps")}var Pa=0,Ea=we;if(wr<je){if(xe.reason+="Eventual BG "+n(wr,D)+" < "+n(je,D),Re>Dr&&Re>0&&!Aa)return Tr<40?(xe.reason+=", naive_eventualBG < 40. ",G.setTempBasal(0,30,D,xe,r)):(e.delta>Re?xe.reason+=", but Delta "+n(Oe,D)+" > expectedDelta "+n(Dr,D):xe.reason+=", but Min. Delta "+Re.toFixed(2)+" > Exp. Delta "+n(Dr,D),r.duration>15&&t(we,D)===t(r.rate,D)?(xe.reason+=", temp "+r.rate+" ~ req "+o(we,2)+"U/hr. ",xe):(xe.reason+="; setting current basal of "+o(we,2)+" as temp. ",G.setTempBasal(we,30,D,xe,r)));Pa=o(Pa=2*Math.min(0,(wr-ke)/nr),2);var ka=Math.min(0,(Tr-ke)/nr);if(ka=o(ka,2),Re<0&&Re>Dr)Pa=o(Pa*(Re/Dr),2);if(Ea=t(Ea=we+2*Pa,D),r.duration*(r.rate-we)/60<Math.min(Pa,ka)-.3*we)return xe.reason+=", "+r.duration+"m@"+r.rate.toFixed(2)+" is a lot less than needed. ",G.setTempBasal(Ea,30,D,xe,r);if(void 0!==r.rate&&r.duration>5&&Ea>=.8*r.rate)return xe.reason+=", temp "+r.rate+" ~< req "+o(Ea,2)+"U/hr. ",xe;if(Ea<=0){if((Ra=o(60*((Ta=ke-Tr)/nr)/D.current_basal))<0?Ra=0:(Ra=30*o(Ra/30),Ra=Math.min(120,Math.max(0,Ra))),Ra>0)return xe.reason+=", setting "+Ra+"m zero temp. ",G.setTempBasal(Ea,Ra,D,xe,r)}else xe.reason+=", setting "+o(Ea,2)+"U/hr. ";return G.setTempBasal(Ea,30,D,xe,r)}if(Re<Dr&&(xe.minDelta=Re,xe.expectedDelta=Dr,(Dr-Re>=2||Dr+-1*Re>=2)&&(Ie=Re>=0&&Dr>0?3:Re<0&&Dr<=0||Re<0&&Dr>=0?4:5),ye=o((wr-ke)/nr,2),!U||!_r))return e.delta<Re?xe.reason+="Eventual BG "+n(wr,D)+" > "+n(je,D)+" but Delta "+n(Oe,D)+" < Exp. Delta "+n(Dr,D):xe.reason+="Eventual BG "+n(wr,D)+" > "+n(je,D)+" but Min. Delta "+Re.toFixed(2)+" < Exp. Delta "+n(Dr,D),r.duration>15&&t(we,D)===t(r.rate,D)?(xe.reason+=", temp "+r.rate+" ~ req "+we+"U/hr. ",xe):(xe.reason+="; setting current basal of "+we+" as temp. ",G.setTempBasal(we,30,D,xe,r));if(Math.min(wr,Vr)<qe&&(Vr<je&&wr>je&&(Ie=6,ye=o((wr-ke)/nr,2)),!U||!_r))return xe.reason+=n(wr,D)+"-"+n(Vr,D)+" in range: no temp required",r.duration>15&&t(we,D)===t(r.rate,D)?(xe.reason+=", temp "+r.rate+" ~ req "+we+"U/hr. ",xe):(xe.reason+="; setting current basal of "+we+" as temp. ",G.setTempBasal(we,30,D,xe,r));if(wr>=qe&&(xe.reason+="Eventual BG "+n(wr,D)+" >= "+n(qe,D)+", "),a.iob>We)return xe.reason+="IOB "+o(a.iob,2)+" > maxIOB "+We,r.duration>15&&t(we,D)===t(r.rate,D)?(xe.reason+=", temp "+r.rate+" ~ req "+we+"U/hr. ",xe):(xe.reason+="; setting current basal of "+we+" as temp. ",G.setTempBasal(we,30,D,xe,r));Pa=o((Math.min(Vr,wr)-ke)/nr,2),ye=o((wr-ke)/nr,2),Pa>We-a.iob?(xe.reason+="maxIOB "+We+", ",console.error("InsReq "+o(Pa,2)+" capped at "+o(We-a.iob,2)+" to not exceed maxIOB"),Pa=We-a.iob):console.error("SMB not limited by maxIOB (insulinReq: "+Pa+" U)"),ye>We-a.iob?console.error("Ev. Bolus limited by maxIOB to "+o(We-a.iob,2)+" (insulinForManualBolus: "+ye+" U)"):console.error("Ev. Bolus would not be limited by maxIOB (insulinForManualBolus: "+ye+" U)."),Ea=t(Ea=we+2*Pa,D),Pa=o(Pa,3),xe.insulinReq=Pa,xe.insulinForManualBolus=o(ye,2),xe.manualBolusErrorString=Ie,xe.minDelta=Re,xe.expectedDelta=Dr,xe.minGuardBG=sa,xe.minPredBG=Vr,xe.threshold=n(tr,D),xe.reason="Ins.Req:, "+o(Pa,2)+", "+xe.reason;var ja=o((new Date(De).getTime()-a.lastBolusTime)/6e4,1);if(U&&_r&&Ue>tr){var qa=o(C.mealCOB/D.carb_ratio,3);if(D.use_autoisf)La=D.smb_max_range_extension;else{console.error("autoISF disabled, SMB range extension disabled");var La=1}La>1&&console.error("SMB max range extended from default by factor "+La);var Wa=0;void 0===D.maxSMBBasalMinutes?(Wa=o(La*D.current_basal*30/60,1),console.error("profile.maxSMBBasalMinutes undefined: defaulting to 30m")):a.iob>qa&&a.iob>0?(console.error("IOB "+a.iob+" > COB "+C.mealCOB+"; mealInsulinReq = "+qa),D.maxUAMSMBBasalMinutes?(console.error("profile.maxUAMSMBBasalMinutes:",D.maxUAMSMBBasalMinutes,"profile.current_basal:",D.current_basal),Wa=o(La*D.current_basal*D.maxUAMSMBBasalMinutes/60,1)):(console.error("profile.maxUAMSMBBasalMinutes undefined: defaulting to 30m"),Wa=o(30*D.current_basal/60,1))):(console.error("profile.maxSMBBasalMinutes:",D.maxSMBBasalMinutes,"profile.current_basal:",D.current_basal),Wa=o(La*D.current_basal*D.maxSMBBasalMinutes/60,1));var za=D.bolus_increment,Ha=1/za;D.use_autoisf||(console.error("autoISF disabled, don't adjust SMB Delivery Ratio"),xa=.5),xa>.5&&console.error("SMB Delivery Ratio increased from default 0.5 to "+o(xa,2));var Na=Math.min(Pa*xa,Wa),Xa="",Ya=I/100*130/100*D.max_iob*Je;Na>Ya-a.iob&&("fullLoop"==vr||"enforced"==vr)&&(Na=Ya-a.iob,Xa=", capped by autoISF iobTH",console.error("autoISF capped SMB at "+o(Na,2)+" to not exceed 130% of effective iobTH "+o(Ya/130*100,2)+"U")),Na=Math.floor(Na*Ha)/Ha,Ra=o(60*((ke-(Tr+oa)/2)/nr)/D.current_basal),Pa>0&&Na<za&&(Ra=0);var Za=0;Ra<=0?Ra=0:Ra>=30?(Ra=30*o(Ra/30),Ra=Math.min(60,Math.max(0,Ra))):(Za=o(we*Ra/30,2),Ra=30),xe.reason+=" insulinReq "+Pa,Na>=Wa&&(xe.reason+="; maxBolus "+Wa),Ra>0&&(xe.reason+="; setting "+Ra+"m low temp of "+Za+"U/h"),xe.reason+=". ";var $a=3;D.SMBInterval&&($a=Math.min(10,Math.max(1,D.SMBInterval)));var Ja=o($a-ja,0),Ka=o(60*($a-ja),0)%60;if(console.error("naive_eventualBG "+n(Tr,D)+", "+Ra+"m "+Za+"U/h temp needed; last bolus "+ja+"m ago; maxBolus: "+Wa),ja>$a?Na>0&&(xe.units=Na,xe.reason+="Microbolusing "+Na+"U"+Xa+". "):xe.reason+="Waiting "+Ja+"m "+Ka+"s to microbolus again. ",Ra>0)return xe.rate=Za,xe.duration=Ra,xe}var Qa=G.getMaxSafeBasal(D);return Ea>Qa&&(xe.reason+="adj. req. rate: "+o(Ea,2)+" to maxSafeBasal: "+o(Qa,2)+", ",Ea=t(Qa,D)),r.duration*(r.rate-we)/60>=2*Pa?(xe.reason+=r.duration+"m@"+r.rate.toFixed(2)+" > 2 * insulinReq. Setting temp basal of "+Ea+"U/hr. ",G.setTempBasal(Ea,30,D,xe,r)):void 0===r.duration||0===r.duration?(xe.reason+="no temp, setting "+Ea+"U/hr. ",G.setTempBasal(Ea,30,D,xe,r)):r.duration>5&&t(Ea,D)<=t(r.rate,D)?(xe.reason+="temp "+r.rate+" >~ req "+Ea+"U/hr. ",xe):(xe.reason+="temp "+r.rate+"<"+Ea+"U/hr. ",G.setTempBasal(Ea,30,D,xe,r))}},6880:(e,r,a)=>{var t=a(6654);e.exports=function(e,r){var a=20;void 0!==r&&"string"==typeof r.model&&(t(r.model,"54")||t(r.model,"23"))&&(a=40);return e<1?Math.round(e*a)/a:e<10?Math.round(20*e)/20:Math.round(10*e)/10}},2705:(e,r,a)=>{var t=a(5639).Symbol;e.exports=t},9932:e=>{e.exports=function(e,r){for(var a=-1,t=null==e?0:e.length,o=Array(t);++a<t;)o[a]=r(e[a],a,e);return o}},9750:e=>{e.exports=function(e,r,a){return e==e&&(void 0!==a&&(e=e<=a?e:a),void 0!==r&&(e=e>=r?e:r)),e}},4239:(e,r,a)=>{var t=a(2705),o=a(9607),n=a(2333),i=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):n(e)}},531:(e,r,a)=>{var t=a(2705),o=a(9932),n=a(1469),i=a(3448),s=t?t.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(n(r))return o(r,e)+"";if(i(r))return l?l.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}},7561:(e,r,a)=>{var t=a(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(o,""):e}},1957:(e,r,a)=>{var t="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;e.exports=t},9607:(e,r,a)=>{var t=a(2705),o=Object.prototype,n=o.hasOwnProperty,i=o.toString,s=t?t.toStringTag:void 0;e.exports=function(e){var r=n.call(e,s),a=e[s];try{e[s]=void 0;var t=!0}catch(e){}var o=i.call(e);return t&&(r?e[s]=a:delete e[s]),o}},2333:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},5639:(e,r,a)=>{var t=a(1957),o="object"==typeof self&&self&&self.Object===Object&&self,n=t||o||Function("return this")();e.exports=n},7990:e=>{var r=/\s/;e.exports=function(e){for(var a=e.length;a--&&r.test(e.charAt(a)););return a}},6654:(e,r,a)=>{var t=a(9750),o=a(531),n=a(554),i=a(9833);e.exports=function(e,r,a){e=i(e),r=o(r);var s=e.length,l=a=void 0===a?s:t(n(a),0,s);return(a-=r.length)>=0&&e.slice(a,l)==r}},1469:e=>{var r=Array.isArray;e.exports=r},3218:e=>{e.exports=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,r,a)=>{var t=a(4239),o=a(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},8601:(e,r,a)=>{var t=a(4841),o=1/0;e.exports=function(e){return e?(e=t(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,r,a)=>{var t=a(8601);e.exports=function(e){var r=t(e),a=r%1;return r==r?a?r-a:r:0}},4841:(e,r,a)=>{var t=a(7561),o=a(3218),n=a(3448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(o(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var a=s.test(e);return a||l.test(e)?u(e.slice(2),a?2:8):i.test(e)?NaN:+e}},9833:(e,r,a)=>{var t=a(531);e.exports=function(e){return null==e?"":t(e)}}},r={};function a(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=a(5546);freeaps_determineBasal=t})();