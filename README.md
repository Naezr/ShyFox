# ShyFox 3.0

3.0 release notes:
 - Navigtion bar now on top. I plan to add the ability to move it down like I did in version 2.0 but I don't want to delay this update any longer
 - Bookmarks toolbar used now and putted above sidebar. Since it's quite short, it will be more convenient to use folders with short names and emoji instead of regular links.
 - Thin sidebar mode are removed. This mode was rather inconvenient and I didn't use it. Maybe I'll bring it back someday if someone asks for it
 - All panels can be shown or hidden independently. Interestingly enough, I tried to implement it with various crutches for a long time, but nothing worked. It turned out that in userChrome Toggle settings it was possible to enable this functionality

2.0 version still available [here](https://github.com/Naezr/ShyFox/tree/2.0-old)

Inspired by Arc, adapted for Firefox
------

![изображение](https://github.com/Naezr/ShyFox/assets/95460152/8ecadda0-ca5b-4874-9c95-53fdfac51626)
![изображение](https://github.com/Naezr/ShyFox/assets/95460152/b7cd7f41-d0c7-4a86-9116-5f22c88f74ac)

------

## Showcase

temporarly empty

### Install
0. If you migrating from 2.0 you need delete fx-autoconfig. To do it, at first clean up `chrome` folder, at second delete `config.js` and `/defaults/prefs/config-prefs.js` from Firefox installation folder. If you new user, skip it.
1. Install and configure theese extensions [Sidebery](https://addons.mozilla.org/en-US/firefox/addon/sidebery), [Userchrome toggle](https://addons.mozilla.org/en-US/firefox/addon/userchrome-toggle), [Adaptive Tab Bar Color](https://addons.mozilla.org/en-US/firefox/addon/adaptive-tab-bar-colour).
    <details><summary>Userchrome toggle settings</summary> 
    
    Make sure you click each "Apply changes" button, preferably several times
    ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/bbcf2954-7b41-41d1-af34-0f5bbf952898)
    ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/9022e0d5-8655-49c0-b435-93ccf1bb4e09)
    
    </details>     
     
    <details><summary>Adaptive Tab Bar Color settings</summary>  
    
    ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/36480217-8209-4f7d-9d54-1a07f6f2752c)
    
    </details>

    Import `sidebery/sidebery-style.json` into Sidebery (Sidebery settings > help > import addon data).
3. [Download](https://github.com/Naezr/ShyFox/archive/refs/heads/main.zip) theme files and close Firefox.
4. Put `chrome` folder, and `user.js` into your [profile directory](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data).
5. Launch Firefox and open Sidebery in sidebar
6. Go to the customizing page and move buttons to something like that
   <details><summary>Customize</summary>
   
   ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/f13f96ff-4edd-4980-92a6-8f943b300cd7)

   
   </summary>
Optional. You can change `wallpaper.png` in `chrome` folder to you own image or remove it at all.
Also you can disable floating search bar. To do it go to the userChrome.css file and comment line that imports `shy-floating-search.css`. Btw, you can remove all imports from `addons` section, they are optional.

### Additional information     

 - Doesn't work on Firefox ESR and forks based on it (Waterfox, Floorp, etc.) because `:has()` selector and css nesting not supported there. When the next ESR release comes out and forks move to its base, then it will work.
 - Tested and work well only with Windows (10 or 11) and Linux with GNOME. MacOS, KDE, or something else probably will work, but window controls (close, min, max) maybe be broken.
 

### To-Do

 - Make the background colors less flat, add a glow, a blur or something like that (almost impossible because Sidebey cannot be transparent)

### Thanks

 - [MrOtherGuy](https://github.com/MrOtherGuy)   Thanks for the fx-autoconfig (not used here anymore) and the repository with cool css's.
 - [MightyFox concept](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/)    Thanks for the cool concept and main idea.
 - [arcticfox-theme](https://github.com/sirlan-ff00ff/arcticfox-theme)     I used this theme as a base to create my own, but there was a bit of commonality left in the process.
