// ==UserScript==
// @name     Move unmovable
// @description     Just moves unmovable buttons
// ==/UserScript==

(function () {
    function init() {
	let toolbar = document.getElementById("TabsToolbar");
	let menub = document.getElementById("PanelUI-menu-button");
	let ext = document.getElementById("unified-extensions-button");
	let overflow = document.getElementById("nav-bar-overflow-button");
    toolbar._customizationTarget.prepend(menub);
    menub.after(ext);
	toolbar._customizationTarget.appendChild(overflow);
    }
	_ucUtils.windowIsReady(window)
	.then(()=>{
	  init();
	});
})();
