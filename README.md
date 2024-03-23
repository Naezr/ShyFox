# ShyFox 3.0

<details><summary>Release notes</summary></summary> 
 
3.1:           
 - Panels in the hidden state are now floating and do not touch the window edge        
 - Findbar rework        
 - If you disable bookmarks toolbar all still look fine     

3.0:
 - Navigtion bar now on top. I plan to add the ability to move it down like I did in version 2.0 but I don't want to delay this update any longer     
 - Bookmarks toolbar used now and putted above sidebar. Since it's quite short, it will be more convenient to use folders with short names and emoji instead of regular links         
 - Thin sidebar mode are removed. This mode was rather inconvenient and I didn't use it. Maybe I'll bring it back someday if someone asks for it         
 - All panels can be shown or hidden independently. Interestingly enough, I tried to implement it with various crutches for a long time, but nothing worked. It turned out that in userChrome Toggle settings it was possible to enable this functionality         

2.0 version still available [here](https://github.com/Naezr/ShyFox/tree/2.0-old)

</details>

Inspired by Arc, adapted for Firefox
------

![изображение](https://github.com/Naezr/ShyFox/assets/95460152/8ecadda0-ca5b-4874-9c95-53fdfac51626)
![изображение](https://github.com/Naezr/ShyFox/assets/95460152/b7cd7f41-d0c7-4a86-9116-5f22c88f74ac)

------

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

    Import `sidebery/sidebery-style.json` and `sidebery/sidebery-settings.json` into Sidebery (Sidebery settings > help > import addon data).

    <details>
    <summary>Important notes</summary>
     
    * If you really don't like Adaptive Tab Bar color you can use [this](https://addons.mozilla.org/ru/firefox/addon/shy-dark/) custom color theme or make own with [Firefox Color](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/). The standard color themes don't look solid, because everything has been optimized for the Adaptive Tab Bar Color.       
    * When importing styles, Sidebery does not delete the old style, but inserts the new one after the old one. To make the ShyFox style for Sidebery work, go to the Style editor page in Sidebery settings and delete everything from the text box on the right. Then re-import the file from ShyFox.
    * You can import only the style without settings if you don't want to lose your config.
    * In general, you can use any style for Sidebery, not necessarily the one that comes with ShyFox. But I'm not responsible for how it will fit together.        
    
    </details>


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

 * Doesn't work on Firefox ESR and forks based on it (Waterfox, Floorp, etc.) because `:has()` selector and css nesting not supported there. When the next ESR release comes out and forks move to its base, then it will work.
 * Tested and work well only with Windows (10 or 11) and Linux with GNOME. MacOS, KDE, or something else probably will work, but window controls (close, min, max) maybe be broken.

### Features

The browser interface is divided into three panels: Sidebar on the left, Navbar on the top and Toolbar on the right. Each of these panels can stay visible or be hidden individually. To hide a panel you can press a preconfigured keyboard shortcut or click on the UserChrome Toggle extension button. In the hidden state, a bar appears where the panel was. When you move the cursor over this bar, the panel moves out. 

Purpose of the panels: 

 - Sidebar                
Here is the Sidebery extension interface, where you can control your tabs in many different ways. See the Sidebery documentation if you're interested. There is also a bookmarks panel above the Sidebar. Since it is quite short, it is recommended to place a few folders or icons without captions on it. For more complex bookmark management, use Sidebery.

![shy-sidebar](https://github.com/Naezr/ShyFox/assets/95460152/d377ce1a-a962-4cd3-b0a2-67d60006fbd2)


 - Navbar             
Here you can find the address bar, back, forward and reload buttons. It is recommended to place these buttons to the left of the address bar, and place the page zoom buttons to the right for symmetry.

![shy-navbar](https://github.com/Naezr/ShyFox/assets/95460152/88076c0b-579b-45a4-b071-742290a77ece)


 - Toolbar         
Here you can place all the buttons you need, such as the history button, download button, buttons of your favorite extensions, in general any buttons that can be added to your Firefox.

![shy-toolbar](https://github.com/Naezr/ShyFox/assets/95460152/6bbf5410-598a-4486-a26f-334e8c5cf19c)


### To-Do

 * Make the background colors less flat, add a glow, a blur or something like that (almost impossible because Sidebey cannot be transparent)
 * Add icons to menubar and context menu
 * Add navbar on bottom support

### Thanks

  [MrOtherGuy](https://github.com/MrOtherGuy) -  Thanks for the fx-autoconfig (not used here anymore) and the repository with cool css's.                  
  [MightyFox concept](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/)  -  Thanks for the cool concept and main idea.                     
  [arcticfox-theme](https://github.com/sirlan-ff00ff/arcticfox-theme)  -   I used this theme as a base to create my own, but there was a bit of commonality left in the process.                 
