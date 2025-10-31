function setProgressBarLength(opts){
  var o = opts || {};
  var root = document.documentElement.style;
  var bar = document.querySelector('.progress');
  if (!bar) return;

  if (typeof o.flex === 'number'){
    root.setProperty('--progress-flex', String(o.flex));
    bar.classList.remove('progress-fixed');
  }
  if (typeof o.width === 'number'){
    root.setProperty('--progress-width', o.width + 'px');
    bar.classList.add('progress-fixed');
  }
  if (typeof o.marginX === 'number'){
    root.setProperty('--progress-mx', o.marginX + 'px');
  }
}
window.setProgressBarLength = setProgressBarLength;

(function enableProgressDragVisibility(){
  var progress = document.querySelector('.progress');
  if (!progress) return;

  var down = false;
  progress.addEventListener('mousedown', function(){
    down = true;
    progress.classList.add('dragging');
  });
  window.addEventListener('mouseup', function(){
    if (!down) return;
    down = false;
    progress.classList.remove('dragging');
  });
  progress.addEventListener('mouseleave', function(){
    if (!down) return;
    down = false;
    progress.classList.remove('dragging');
  });

  progress.addEventListener('touchstart', function(){
    progress.classList.add('dragging');
  }, {passive:true});
  window.addEventListener('touchend', function(){
    progress.classList.remove('dragging');
  }, {passive:true});
  window.addEventListener('touchcancel', function(){
    progress.classList.remove('dragging');
  }, {passive:true});
})();
