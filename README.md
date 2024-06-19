# ShyFox

<div>
 <a href='https://github.com/Naezr/ShyFox/stargazers'><img src='https://img.shields.io/github/stars/Naezr/ShyFox?style=social'></a>
 <a href='https://github.com/Naezr/ShyFox'><img src='https://img.shields.io/badge/version-3.3.2-blue'></a>
 <a href='https://www.mozilla.org'><img alt="Firefox" src="https://img.shields.io/badge/Firefox-127-orange?logo=firefox"></a>
 <a href='https://github.com/Naezr/ShyFox/commits'><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Naezr/ShyFox"></a>
</div>

<br/>

<details><summary>Release notes</summary>

<br/>

3.3.2:
- Integrating screenshot tool with the theme (ctrl + shift + s)

3.3.1:
- Fake tab loading progress on navbar

3.3:
- Hidden panels no longer pop out if the Firefox View button located on them is active
- Downloads progress indicator on hidden right toolbar
- Using a bit of clownish code

3.2.5
- Applied accent color to Sidebery
- Better show/hide animations for panels
- Just small fixes

3.2.4:
- Notifications are now colored in the color of the theme
- Window controls are now positioned vertically when appropriate
- GTK window controls now adapt to theme colors
- Minor fixes and improvements

3.2.3:
- Added accent colors support
- Added rounded corners to Firefox settings page
- Instead of leaving one long pinned tab at the bottom, the pinned tabs in the last row are now grouped 4 at a time.
- Small bugfixes
 
[3.2.2](https://youtu.be/7lY8sna1B_Q?si=vdh6M2hZF1-GDH76):
- Rounded corners don't break from the blur on the site
- Increased hover hitboxes on hidden panels
- Added blur to new tab
 
3.2.1:
- Fix window controls on linux broken in Firefox 125
- Now if you hover over the right toolbar window controls are not highlighted

3.2:
- Code comments rework
- Enhanced readability
- Lot of bugfixes

3.1.2:
- Fixed transparent context menus in some places
- Bookmarks toolbar improvements
 
3.1.1: 
- Improved rounded corners
- Fixed notification panel

3.1:           
 - Panels in the hidden state are now floating and do not touch the window edge        
 - Findbar rework        
 - If you disable bookmarks toolbar all still look fine     

3.0:
 - Navigation bar now on top. I plan to add the ability to move it down like I did in version 2.0 but I don't want to delay this update any longer     
 - Bookmarks toolbar used now and putted above sidebar. Since it's quite short, it will be more convenient to use folders with short names and emoji instead of regular links         
 - Thin sidebar mode are removed. This mode was rather inconvenient and I didn't use it. Maybe I'll bring it back someday if someone asks for it         
 - All panels can be shown or hidden independently. Interestingly enough, I tried to implement it with various crutches for a long time, but nothing worked. It turned out that in userChrome Toggle settings it was possible to enable this functionality         

2.0 version still available [here](https://github.com/Naezr/ShyFox/tree/2.0-old)

<br/>

</details>

### Shy on surface, but heavy inside

<div align="center">
 <img width="50%" src='https://github.com/Naezr/ShyFox/assets/95460152/c8c1318d-0d50-45ae-8e52-41c51da5e6bd'><img width="50%" src='https://github.com/Naezr/ShyFox/assets/95460152/a69b5d65-22b5-46d5-bdf1-3aa7e7003036'>
</div>

[Video showcase](showcase.md)

## Install

<details><summary>Migrate from 2.0 </summary>
 
   <br/>
   
   If you migrating from 2.0 you need delete fx-autoconfig.                     
   To do it, at first clean up `chrome` folder, at second delete `config.js` and `/defaults/prefs/config-prefs.js` from Firefox installation folder.      
   
   If you new user, skip it.      
   
</details>

### Minimal

1. [Download](https://github.com/Naezr/ShyFox/archive/refs/heads/main.zip) theme files
2. Install and configure [Userchrome toggle Extended](https://addons.mozilla.org/ru/firefox/addon/userchrome-toggle-extended/)
   
   <details><summary>Userchrome toggle settings</summary> 
   
   <br/>
   
   Make sure you click each "Apply changes" button, preferably several times
   
   ![settings1](https://github.com/Naezr/ShyFox/assets/95460152/ddc7fbcb-ee97-43be-b2c9-81ff2f948ef4)
   ![settings2](https://github.com/Naezr/ShyFox/assets/95460152/87f4f31f-183a-4643-8dc5-9c56ca8b3ba7)
   ![settings4](https://github.com/Naezr/ShyFox/assets/95460152/e0b823db-f235-4e37-9de1-c6a7d30def2a)

   It would also be nice to customize the shortcuts for toggles. I recommend these:
   
   ![how to](https://github.com/Naezr/ShyFox/assets/95460152/a945e58b-0eb5-40d3-8d2a-20cc103543ea)
   ![shortcuts](https://github.com/Naezr/ShyFox/assets/95460152/44878112-8503-45a7-9fc1-a753033160d5)
   
   <br/>
   
   </details>    
   
4. Install and configure [Sidebery](https://addons.mozilla.org/en-US/firefox/addon/sidebery)
 
    Import `sidebery/sidebery-data.json` into Sidebery (Sidebery settings > help > import addon data).                 
    When updating Sidebery style, it is better to insert it from `sidebery-style.css` file manually. (Sidebery settings > Style editor)
    
    > NOTES
    > 
    > When importing styles from json, Sidebery does not delete the old style,but inserts the new one after the old one.
    > So if you have used Sidebery before, reset the extension's settings to default, making a backup before doing so.
    > 
    > In general, you can use any style for Sidebery, not necessarily the one that comes with ShyFox.
    > But I'm not responsible for how it will fit together.        

5. Close Firefox and then put `chrome` folder, and `user.js` into your [profile directory](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data).
6. Launch Firefox and open Sidebery in the sidebar
7. Go to the customizing page (right click on blank space > customize toolbar) and move buttons to something like that
   
   <details><summary>Buttons layout</summary>
   
   <br/>
   
   ![layout](https://github.com/Naezr/ShyFox/assets/95460152/ea349f5c-bfc4-4af0-bd55-4715d7bf6755)
   
   <br/>
   
   </summary>

### Extra

If you don't like the way the standard dark and light themes look, you can colorize your ShyFox!

There are three ways you can do it, choose one:
- Install some theme from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/themes/) (not all will be well compatible)
- Color your browser yourself with [Firefox Color](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/)
- Install the [Adaptive Tab Bar Color](https://addons.mozilla.org/en-US/firefox/addon/adaptive-tab-bar-colour/) extension and then ShyFox will adapt to the colors of the currently open website.
 
   <details><summary> Recommended Adaptive Tab Bar Color settings</summary>  
   
   <br/>
   
   ![изображение](https://github.com/Naezr/ShyFox/assets/95460152/36480217-8209-4f7d-9d54-1a07f6f2752c)
   
   <br/>
   
   > NOTE                    
   > If you make the `Tab bar` and `Toolbar` `Background` colors the same, the pull-down hidden panels will have a transparent background.
   
   <br/>
   
   </details>

If you don't like the wallpaper on the new tab, you can change it to your own. Just rename your picture to `wallpaper.png` and put in into `chrome` folder. There's also `wallpaper-alt.png` - same picture, but in the daytime.

You can disable floating search bar. To do it go to the `userChrome.css` file and comment line that imports `shy-floating-search.css`.

You can change browser accent color. To do it change value of `--shy-color` variable in `ShyFox/shy-variables.css`, `userContent.css` and in Sidebery style.

## Additional information     

 * The theme works and is only tested on the latest version of Firefox. Firefox-based browsers, ESR versions, or just older versions are not supported. It may work, but I am not responsible for it.
 * I don't know if this theme works on macOS. I don't have a mac to test it. I have made the control buttons work on both left and right (thanks Linux and GTK), but I can't test this on mac.

## Features (REQUIRES IMPROVEMENT)

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


## To-Do

 * Make the background colors less flat, add a glow, a blur or something like that (almost impossible because Sidebery cannot be transparent)
 * Add icons to menubar and context menu
 * Add navbar on bottom support
 * Make it clearer when a window is in focus and when it is not

## Thanks

  [MrOtherGuy](https://github.com/MrOtherGuy) -  Thanks for the fx-autoconfig (not used here anymore) and the repository with cool css's.                  
  [MightyFox concept](https://www.reddit.com/r/FirefoxCSS/comments/195n51c/mightyfox_an_idea_need_help_to_build_it_up/)  -  Thanks for the cool concept and main idea.                     
  [arcticfox-theme](https://github.com/sirlan-ff00ff/arcticfox-theme)  -   I used this theme as a base to create my own, but there was a bit of commonality left in the process.                 
  [minearchive](https://t.me/kartoshka_vpered) - That's where I got this wallpaper

Ты думал здесь что-то будет?
