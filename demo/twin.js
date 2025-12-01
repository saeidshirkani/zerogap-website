document.getElementById('buildBtn').onclick = function(){
document.getElementById('twinSection').classList.remove('hidden');
setTimeout(()=>{ document.getElementById('scanSection').classList.remove('hidden'); }, 2000);
};
