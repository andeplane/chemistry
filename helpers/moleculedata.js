goog.provide('chemistry.MoleculeData');

chemistry.MoleculeData = function() {
	this.data = JSON.parse('[{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,80],"imageFile":"images/large/6-s-n-x-ttt.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":2,"size":[250,176],"imageFile":"images/large/6-f2-GRg-cf-1.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,239],"imageFile":"images/large/5-s-n-x-cc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,203],"imageFile":"images/large/5-f1-n-bs-3mcc.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[250,123],"imageFile":"images/large/5-f2-n-c-2m4mtt.png"},{"chainLength":6,"numBranches":1,"numFunctionalGroups":1,"size":[250,107],"imageFile":"images/large/6-f1-g-cf-1.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":1,"size":[250,143],"imageFile":"images/large/4-1f-r-cf-1.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,163],"imageFile":"images/large/7-s-n-bs-tccc.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,120],"imageFile":"images/large/4-s-n-x-t.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":1,"size":[250,152],"imageFile":"images/large/4-1f-r-bs-1.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,57],"imageFile":"images/large/5-s-n-c-tt.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,201],"imageFile":"images/large/8-s-n-bs-tccct.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,123],"imageFile":"images/large/7-s-n-c-cttc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,108],"imageFile":"images/large/8-s-n-bs-ttctc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[234,250],"imageFile":"images/large/6-s-n-x-tcc.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,164],"imageFile":"images/large/4-s-n-x-c.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,172],"imageFile":"images/large/5-f1-n-bs-2mtc.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,184],"imageFile":"images/large/4-s-n-sf-c.png"},{"chainLength":3,"numBranches":1,"numFunctionalGroups":0,"size":[250,223],"imageFile":"images/large/3-f1-n-bs.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":0,"size":[250,238],"imageFile":"images/large/4-f1-n-sf.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,196],"imageFile":"images/large/5-f1-n-c-3mcc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,138],"imageFile":"images/large/8-s-n-sf-ttctc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,81],"imageFile":"images/large/8-s-n-c-ttttc.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":1,"size":[250,94],"imageFile":"images/large/3-s-r-bs-1.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":2,"size":[250,206],"imageFile":"images/large/4-f1-GRr-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,163],"imageFile":"images/large/5-f1-n-sf-3mtt.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,250],"imageFile":"images/large/6-s-n-c-ccc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":1,"size":[250,200],"imageFile":"images/large/5-1f-r-cf-1.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,160],"imageFile":"images/large/7-s-n-bs-tcct.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":0,"size":[250,230],"imageFile":"images/large/4-f1-n-c.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,235],"imageFile":"images/large/5-s-n-c-cc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,141],"imageFile":"images/large/6-s-n-c-ctc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,70],"imageFile":"images/large/7-s-n-x-tttt.png"},{"chainLength":7,"numBranches":2,"numFunctionalGroups":0,"size":[250,128],"imageFile":"images/large/7-f2-n-c-3m4etttc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,181],"imageFile":"images/large/5-f1-n-x-3mtc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[231,250],"imageFile":"images/large/6-s-n-bs-tcc.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,197],"imageFile":"images/large/5-s-n-sf-tc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,195],"imageFile":"images/large/5-f1-n-sf-3mtc.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[250,231],"imageFile":"images/large/5-f2-n-c-2m3ett.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,123],"imageFile":"images/large/5-f1-n-c-2mtt.png"},{"chainLength":7,"numBranches":1,"numFunctionalGroups":0,"size":[250,157],"imageFile":"images/large/7-f1-n-c-4etctc.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":1,"size":[250,189],"imageFile":"images/large/6-2f-r-x-1.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[250,136],"imageFile":"images/large/5-f2-n-bs-2m4mtt.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,42],"imageFile":"images/large/6-s-n-c-ttt.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,145],"imageFile":"images/large/4-s-n-sf-t.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":1,"size":[250,181],"imageFile":"images/large/6-2f-r-bs-1.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":1,"size":[250,119],"imageFile":"images/large/3-s-r-x-1.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,226],"imageFile":"images/large/7-s-n-c-tctt.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,109],"imageFile":"images/large/8-s-n-x-ttttc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,150],"imageFile":"images/large/7-s-n-c-tcct.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":0,"size":[250,158],"imageFile":"images/large/6-f2-n-bs-3e4mccc.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":1,"size":[250,176],"imageFile":"images/large/6-2f-r-cf-1.png"},{"chainLength":3,"numBranches":1,"numFunctionalGroups":0,"size":[247,250],"imageFile":"images/large/3-f1-n-c.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,165],"imageFile":"images/large/6-s-n-x-ctc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,232],"imageFile":"images/large/7-s-n-x-tctt.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,123],"imageFile":"images/large/5-s-n-sf-tt.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,152],"imageFile":"images/large/6-s-n-bs-ctc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,165],"imageFile":"images/large/6-s-n-sf-ttc.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":0,"size":[250,153],"imageFile":"images/large/3-s-n-x.png"},{"chainLength":6,"numBranches":1,"numFunctionalGroups":1,"size":[250,115],"imageFile":"images/large/6-f1-g-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,160],"imageFile":"images/large/5-f1-n-c-2mtc.png"},{"chainLength":3,"numBranches":1,"numFunctionalGroups":0,"size":[250,234],"imageFile":"images/large/3-f1-n-sf.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":1,"size":[250,141],"imageFile":"images/large/4-1f-r-c-1.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,151],"imageFile":"images/large/7-s-n-c-tccc.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,95],"imageFile":"images/large/4-s-n-bs-t.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":1,"size":[250,174],"imageFile":"images/large/6-2f-r-c-1.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":0,"size":[250,236],"imageFile":"images/large/4-f1-n-x.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,235],"imageFile":"images/large/5-f1-n-x-3etc.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,154],"imageFile":"images/large/4-s-n-c-c.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,114],"imageFile":"images/large/8-s-n-x-ctttc.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":1,"size":[250,165],"imageFile":"images/large/4-1f-r-x-1.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,158],"imageFile":"images/large/8-s-n-bs-cctcc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,166],"imageFile":"images/large/5-f1-n-bs-3ecc.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,73],"imageFile":"images/large/4-s-n-c-t.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[223,250],"imageFile":"images/large/5-f2-n-bs-2m3mcc.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":2,"size":[250,201],"imageFile":"images/large/4-f1-GRr-c-1.png"},{"chainLength":6,"numBranches":1,"numFunctionalGroups":0,"size":[250,217],"imageFile":"images/large/6-f1-n-x-3mtcc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,152],"imageFile":"images/large/7-s-n-bs-ttcc.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":2,"size":[250,202],"imageFile":"images/large/4-f1-GRr-cf-1.png"},{"chainLength":7,"numBranches":1,"numFunctionalGroups":0,"size":[250,164],"imageFile":"images/large/7-f1-n-bs-4etctc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,151],"imageFile":"images/large/7-s-n-x-cttc.png"},{"chainLength":4,"numBranches":2,"numFunctionalGroups":0,"size":[250,234],"imageFile":"images/large/4-f2-n-bs-2m3m.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[226,250],"imageFile":"images/large/5-f2-n-x-2m3mcc.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":0,"size":[250,148],"imageFile":"images/large/6-f2-n-c-3e4mccc.png"},{"chainLength":5,"numBranches":3,"numFunctionalGroups":2,"size":[250,199],"imageFile":"images/large/5-f3-GRr-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,185],"imageFile":"images/large/5-f1-n-x-2mtc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,158],"imageFile":"images/large/8-s-n-bs-ccttc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,141],"imageFile":"images/large/7-s-n-c-ttcc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,250],"imageFile":"images/large/6-s-n-bs-ccc.png"},{"chainLength":7,"numBranches":1,"numFunctionalGroups":0,"size":[250,169],"imageFile":"images/large/7-f1-n-x-4etctc.png"},{"chainLength":3,"numBranches":1,"numFunctionalGroups":0,"size":[248,250],"imageFile":"images/large/3-f1-n-x.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[219,250],"imageFile":"images/large/5-f2-n-c-2m3mcc.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":0,"size":[250,128],"imageFile":"images/large/3-s-n-bs.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,148],"imageFile":"images/large/6-s-n-x-ttc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,127],"imageFile":"images/large/8-s-n-sf-ttttc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":1,"size":[250,205],"imageFile":"images/large/5-1f-r-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,170],"imageFile":"images/large/5-f1-n-bs-3mtc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":2,"size":[250,243],"imageFile":"images/large/5-f1-gr-x-1.png"},{"chainLength":5,"numBranches":3,"numFunctionalGroups":2,"size":[250,194],"imageFile":"images/large/5-f3-GRr-c-1.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,169],"imageFile":"images/large/8-s-n-x-cctcc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,122],"imageFile":"images/large/8-s-n-x-ttctc.png"},{"chainLength":7,"numBranches":2,"numFunctionalGroups":1,"size":[250,109],"imageFile":"images/large/7-2f-r-c-1.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,132],"imageFile":"images/large/6-s-n-bs-ttc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,248],"imageFile":"images/large/5-f1-n-bs-3etc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,97],"imageFile":"images/large/8-s-n-c-ttctc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,147],"imageFile":"images/large/8-s-n-c-cctcc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,104],"imageFile":"images/large/6-s-n-sf-ttt.png"},{"chainLength":7,"numBranches":2,"numFunctionalGroups":1,"size":[250,119],"imageFile":"images/large/7-2f-r-bs-1.png"},{"chainLength":5,"numBranches":3,"numFunctionalGroups":2,"size":[250,195],"imageFile":"images/large/5-f3-GRr-cf-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,248],"imageFile":"images/large/5-f1-n-c-3etc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,136],"imageFile":"images/large/7-s-n-bs-cttc.png"},{"chainLength":8,"numBranches":2,"numFunctionalGroups":1,"size":[250,157],"imageFile":"images/large/8-2f-r-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":2,"size":[250,242],"imageFile":"images/large/5-f1-gr-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,129],"imageFile":"images/large/5-f1-n-bs-3mtt.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,76],"imageFile":"images/large/5-s-n-bs-tt.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":2,"size":[250,181],"imageFile":"images/large/6-f2-GRg-bs-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,115],"imageFile":"images/large/5-f1-n-c-3mtt.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,172],"imageFile":"images/large/5-s-n-bs-tc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,59],"imageFile":"images/large/6-s-n-bs-ttt.png"},{"chainLength":4,"numBranches":0,"numFunctionalGroups":0,"size":[250,145],"imageFile":"images/large/4-s-n-bs-c.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,61],"imageFile":"images/large/6-s-n-c-tct.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,137],"imageFile":"images/large/5-f1-n-bs-2mtt.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,36],"imageFile":"images/large/7-s-n-c-tttt.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,229],"imageFile":"images/large/7-s-n-bs-tctt.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[227,250],"imageFile":"images/large/6-s-n-c-tcc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":1,"size":[250,211],"imageFile":"images/large/5-1f-r-x-1.png"},{"chainLength":6,"numBranches":1,"numFunctionalGroups":1,"size":[250,105],"imageFile":"images/large/6-f1-g-c-1.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":0,"size":[250,177],"imageFile":"images/large/3-s-n-sf.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,51],"imageFile":"images/large/7-s-n-bs-tttt.png"},{"chainLength":8,"numBranches":2,"numFunctionalGroups":1,"size":[250,166],"imageFile":"images/large/8-2f-r-x-1.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,168],"imageFile":"images/large/7-s-n-sf-cttc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,98],"imageFile":"images/large/6-s-n-x-tct.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":1,"size":[250,73],"imageFile":"images/large/3-s-r-c-1.png"},{"chainLength":6,"numBranches":1,"numFunctionalGroups":0,"size":[250,206],"imageFile":"images/large/6-f1-n-c-3mtcc.png"},{"chainLength":7,"numBranches":2,"numFunctionalGroups":0,"size":[250,138],"imageFile":"images/large/7-f2-n-bs-3m4etttc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,168],"imageFile":"images/large/5-f1-n-sf-2mtt.png"},{"chainLength":4,"numBranches":2,"numFunctionalGroups":0,"size":[250,230],"imageFile":"images/large/4-f2-n-c-2m3m.png"},{"chainLength":8,"numBranches":2,"numFunctionalGroups":1,"size":[250,151],"imageFile":"images/large/8-2f-r-cf-1.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,99],"imageFile":"images/large/5-s-n-x-tt.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,78],"imageFile":"images/large/6-s-n-bs-tct.png"},{"chainLength":7,"numBranches":2,"numFunctionalGroups":1,"size":[250,130],"imageFile":"images/large/7-2f-r-x-1.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,237],"imageFile":"images/large/5-s-n-bs-cc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,160],"imageFile":"images/large/5-f1-n-c-3mtc.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,184],"imageFile":"images/large/5-s-n-x-tc.png"},{"chainLength":3,"numBranches":1,"numFunctionalGroups":1,"size":[250,77],"imageFile":"images/large/3-1f-r-cf-1.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,149],"imageFile":"images/large/7-s-n-sf-tctt.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,121],"imageFile":"images/large/6-s-n-sf-tct.png"},{"chainLength":3,"numBranches":0,"numFunctionalGroups":0,"size":[250,103],"imageFile":"images/large/3-s-n-c.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":0,"size":[250,233],"imageFile":"images/large/4-f1-n-bs.png"},{"chainLength":6,"numBranches":1,"numFunctionalGroups":0,"size":[250,210],"imageFile":"images/large/6-f1-n-bs-3mtcc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,170],"imageFile":"images/large/8-s-n-x-ccttc.png"},{"chainLength":7,"numBranches":2,"numFunctionalGroups":1,"size":[250,111],"imageFile":"images/large/7-2f-r-cf-1.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":1,"size":[250,199],"imageFile":"images/large/5-1f-r-c-1.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,119],"imageFile":"images/large/6-s-n-c-ttc.png"},{"chainLength":6,"numBranches":0,"numFunctionalGroups":0,"size":[250,179],"imageFile":"images/large/6-s-n-sf-ctc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,194],"imageFile":"images/large/8-s-n-c-tccct.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,147],"imageFile":"images/large/8-s-n-c-ccttc.png"},{"chainLength":4,"numBranches":2,"numFunctionalGroups":0,"size":[250,240],"imageFile":"images/large/4-f2-n-sf-2m3m.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[250,152],"imageFile":"images/large/5-f2-n-x-2m4mtt.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,145],"imageFile":"images/large/5-f1-n-x-3mtt.png"},{"chainLength":5,"numBranches":0,"numFunctionalGroups":0,"size":[250,160],"imageFile":"images/large/5-s-n-c-tc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,179],"imageFile":"images/large/5-f1-n-x-3ecc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,98],"imageFile":"images/large/8-s-n-bs-ctttc.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,86],"imageFile":"images/large/8-s-n-c-ctttc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,165],"imageFile":"images/large/7-s-n-x-ttcc.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,151],"imageFile":"images/large/5-f1-n-x-2mtt.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,155],"imageFile":"images/large/5-f1-n-c-3ecc.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,172],"imageFile":"images/large/7-s-n-x-tcct.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[250,236],"imageFile":"images/large/5-f2-n-x-2m3ett.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":2,"size":[250,175],"imageFile":"images/large/6-f2-GRg-c-1.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,133],"imageFile":"images/large/8-s-n-sf-ctttc.png"},{"chainLength":4,"numBranches":1,"numFunctionalGroups":2,"size":[250,211],"imageFile":"images/large/4-f1-GRr-x-1.png"},{"chainLength":8,"numBranches":2,"numFunctionalGroups":1,"size":[250,150],"imageFile":"images/large/8-2f-r-c-1.png"},{"chainLength":6,"numBranches":2,"numFunctionalGroups":2,"size":[250,189],"imageFile":"images/large/6-f2-GRg-x-1.png"},{"chainLength":8,"numBranches":0,"numFunctionalGroups":0,"size":[250,93],"imageFile":"images/large/8-s-n-bs-ttttc.png"},{"chainLength":5,"numBranches":2,"numFunctionalGroups":0,"size":[250,233],"imageFile":"images/large/5-f2-n-bs-2m3ett.png"},{"chainLength":7,"numBranches":0,"numFunctionalGroups":0,"size":[250,92],"imageFile":"images/large/7-s-n-sf-tttt.png"},{"chainLength":4,"numBranches":2,"numFunctionalGroups":0,"size":[250,236],"imageFile":"images/large/4-f2-n-x-2m3m.png"},{"chainLength":5,"numBranches":1,"numFunctionalGroups":0,"size":[250,211],"imageFile":"images/large/5-f1-n-x-3mcc.png"}]');
	
	for(var i in this.data) {
		var object = this.data[i];
		object.imageFile += "?"+goog.math.randomInt(10000);
	}
}

chemistry.MoleculeData.prototype.getMoleculeData = function() {
	return this.data;
};